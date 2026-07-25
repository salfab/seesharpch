var P$=Object.defineProperty;var D$=(Nt,Bt,In)=>Bt in Nt?P$(Nt,Bt,{enumerable:!0,configurable:!0,writable:!0,value:In}):Nt[Bt]=In;var Dg=(Nt,Bt,In)=>D$(Nt,typeof Bt!="symbol"?Bt+"":Bt,In);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Nt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,In=Object.getOwnPropertyNames,Fg=Object.prototype.hasOwnProperty,Gg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),J=(e,t)=>()=>(e&&(t=e(e=0)),t),kn=(e,t)=>{for(var n in t)Nt(e,n,{get:t[n],enumerable:!0})},Wg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of In(t))!Fg.call(e,i)&&i!==n&&Nt(e,i,{get:()=>t[i],enumerable:!(r=Bt(t,i))||r.enumerable});return e},Fn=e=>Wg(Nt({},"__esModule",{value:!0}),e),Gn,Vt,En,Zs,Qs,Js=J(()=>{Gn=new Map,Vt=[],En=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Gn.get(e);if(r===void 0)Gn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Vt.indexOf(e);i!==-1&&Vt.splice(i,1);for(let a=0;a<Vt.length;a++)if(Gn.get(Vt[a]).priority<=n){Vt.splice(a,0,e);return}Vt.push(e)}return}throw new TypeError("not a valid backend")},Zs=async e=>{let t=Gn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Qs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Vt:n,i,a=[],s=new Set;for(let u of r){let l=await Zs(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),qg=J(()=>{Js()}),eo,Vg=J(()=>{eo="1.27.0"}),ai,je,to=J(()=>{Vg(),ai="warning",je={wasm:{},webgl:{},webgpu:{},versions:{common:eo},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ai=e}},get logLevel(){return ai}},Object.defineProperty(je,"logLevel",{enumerable:!0})}),Ae,Hg=J(()=>{to(),Ae=je}),no,ro,jg=J(()=>{no=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let h=a*i,c=0,p=h,m=h*2,g=-1;s==="RGBA"?(c=0,p=h,m=h*2,g=h*3):s==="RGB"?(c=0,p=h,m=h*2):s==="RBG"&&(c=0,m=h,p=h*2);for(let y=0;y<a;y++)for(let _=0;_<i;_++){let $=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+$+","+x+","+T+","+S+")",r.fillRect(_,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ro=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,m=0,g=1,y=2,_=3,$=0,x=c,T=c*2,S=-1;o==="RGBA"?($=0,x=c,T=c*2,S=c*3):o==="RGB"?($=0,x=c,T=c*2):o==="RBG"&&($=0,T=c,x=c*2),r=n.createImageData(i,a);for(let I=0;I<a*i;m+=p,g+=p,y+=p,_+=p,I++)r.data[m]=(e.data[$++]-h[0])*l[0],r.data[g]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[T++]-h[2])*l[2],r.data[_]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),pr,io,ao,so,oo,uo,Kg=J(()=>{oi(),pr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,m=1,g=2,y=3,_=0,$=l,x=l*2,T=-1;o==="RGB"&&(c=3,p=0,m=1,g=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(_=0,x=l,$=l*2):u==="BGR"&&(x=0,$=l,_=l*2);for(let S=0;S<l;S++,p+=c,g+=c,m+=c,y+=c)h[_++]=(e[p]+s[0])/a[0],h[$++]=(e[m]+s[1])/a[1],h[x++]=(e[g]+s[2])/a[2],T!==-1&&y!==-1&&(h[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new ot("float32",h,[1,4,n,r]):new ot("float32",h,[1,3,n,r])},io=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=m}else o.tensorFormat="RGBA",o.height=p,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,p).data}else throw new Error("Can not access image data")}else if(r){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=c,t!==void 0){let p=u();p.width=c,p.height=h;let m=l(p);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,m=e.width;return c.drawImage(e,0,0,m,p),s=c.getImageData(0,0,m,p).data,o.height=p,o.width=m,pr(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let p=u(),m=l(p);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{p.width=g.width,p.height=g.height,m.drawImage(g,0,0,p.width,p.height);let y=m.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,h(pr(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return pr(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},ao=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new ot({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},so=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ot({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},oo=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ot({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},uo=(e,t,n)=>new ot({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),sn,Wn,si,lo,Yg=J(()=>{sn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Wn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),si=!1,lo=()=>{if(!si){si=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(sn.set("int64",BigInt64Array),Wn.set(BigInt64Array,"int64")),t&&(sn.set("uint64",BigUint64Array),Wn.set(BigUint64Array,"uint64")),r?(sn.set("float16",n),Wn.set(n,"float16")):sn.set("float16",Uint16Array)}}}),co,ho,Xg=J(()=>{oi(),co=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},ho=(e,t)=>{switch(e.location){case"cpu":return new ot(e.type,e.data,t);case"cpu-pinned":return new ot({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ot({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ot({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ot({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ot,oi=J(()=>{jg(),Kg(),Yg(),Xg(),ot=class{constructor(e,t,n){lo();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=sn.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=sn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=Wn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=co(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return io(e,t)}static fromTexture(e,t){return ao(e,t)}static fromGpuBuffer(e,t){return so(e,t)}static fromMLTensor(e,t){return oo(e,t)}static fromPinnedBuffer(e,t,n){return uo(e,t,n)}toDataURL(e){return no(this,e)}toImageData(e){return ro(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ho(this,e)}}}),Fe,po=J(()=>{oi(),Fe=ot}),fr,ui,It,pt,on,un,fo=J(()=>{to(),fr=(e,t)=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeStamp(`${e}::ORT::${t}`)},ui=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),fr("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},It=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||ui("BEGIN",e)},pt=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||ui("END",e)},on=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.time(`ORT::${e}`)},un=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeEnd(`ORT::${e}`)}}),mo,Zg=J(()=>{Js(),po(),fo(),mo=class Ug{constructor(t){this.handler=t}async run(t,n,r){It(),on("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Fe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Fe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof Fe)&&(l=!0,s=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let h=o[l];h instanceof Fe?u[l]=h:u[l]=new Fe(h.type,h.data,h.dims)}return un("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){It(),on("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Qs(s),l=await o.createInferenceSessionHandler(a,u);return un("InferenceSession.create"),pt(),new Ug(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),tt,Qg=J(()=>{Zg(),tt=mo}),Jg=J(()=>{}),e0=J(()=>{}),t0=J(()=>{}),n0=J(()=>{}),r0={};kn(r0,{InferenceSession:()=>tt,TRACE:()=>fr,TRACE_EVENT_BEGIN:()=>on,TRACE_EVENT_END:()=>un,TRACE_FUNC_BEGIN:()=>It,TRACE_FUNC_END:()=>pt,Tensor:()=>Fe,env:()=>Ae,registerBackend:()=>En});var dt=J(()=>{qg(),Hg(),Qg(),po(),Jg(),e0(),fo(),t0(),n0()}),li=J(()=>{}),go={};kn(go,{default:()=>yo});var di,ci,yo,i0=J(()=>{var e;Zp(),ln(),yi(),di="ort-wasm-proxy-worker",ci=((e=globalThis.self)==null?void 0:e.name)===di,ci&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":bi(r.wasm).then(()=>{Aa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ra(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=zr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Oa(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":Na(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;Pa(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Ua([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Da(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),yo=ci?null:t=>new Worker(t??ut,{type:"module",name:di})}),wo={};kn(wo,{default:()=>bo});async function _o(e={}){var Bg,Pg;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Bg=self.name)==null?void 0:Bg.startsWith("em-pthread"));t.mountExternalData=(d,f)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...f)=>{var b;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:f[0],errors:[]},k=await d(...f);if(t.Yc!==w)throw Error("Session mismatch");(b=t.dd)==null||b.flush();let C=w.errors;if(0<C.length){let B=await Promise.all(C);if(B=B.filter(H=>H),0<B.length)throw Error(B.join(`
`))}return k}finally{t.Yc=null}};t.jsepInit=(d,f)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let b=t.dd;t.jsepRegisterBuffer=(w,k,C,B)=>b.registerBuffer(w,k,C,B),t.jsepGetBuffer=w=>b.getBuffer(w),t.jsepCreateDownloader=(w,k,C)=>b.createDownloader(w,k,C),t.jsepOnCreateSession=w=>{b.onCreateSession(w)},t.jsepOnReleaseSession=w=>{b.onReleaseSession(w)},t.jsepOnRunStart=w=>b.onRunStart(w),t.Id=(w,k)=>{b.upload(w,k)}}else if(d==="webnn"){let b=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>b.onRunStart(w),t.webnnOnRunEnd=b.onRunEnd.bind(b),t.webnnOnReleaseSession=w=>{b.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,k)=>b.createMLTensorDownloader(w,k),t.webnnRegisterMLTensor=(w,k,C,B)=>b.registerMLTensor(w,k,C,B),t.webnnCreateMLContext=w=>b.createMLContext(w),t.webnnRegisterMLConstant=(w,k,C,B,H,te)=>b.registerMLConstant(w,k,C,B,H,t.Xc,te),t.webnnRegisterGraphInput=b.registerGraphInput.bind(b),t.webnnIsGraphInput=b.isGraphInput.bind(b),t.webnnRegisterGraphOutput=b.registerGraphOutput.bind(b),t.webnnIsGraphOutput=b.isGraphOutput.bind(b),t.webnnCreateTemporaryTensor=b.createTemporaryTensor.bind(b),t.webnnIsGraphInputOutputTypeSupported=b.isGraphInputOutputTypeSupported.bind(b)}};let s=()=>{let d=f=>(...b)=>{let w=zt;return b=f(...b),zt!=w?new Promise((k,C)=>{Ds={resolve:k,reject:C}}):b};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=d(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(d,f)=>{throw f},h=self.location.href,c="";if(n||r){try{c=new URL(".",h).href}catch{}r&&(u=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),o=async d=>{if(E(d))return new Promise((b,w)=>{var k=new XMLHttpRequest;k.open("GET",d,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?b(k.response):w(k.status)},k.onerror=w,k.send(null)});var f=await fetch(d,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var p,m,g,y,_,$,x=console.log.bind(console),T=console.error.bind(console),S=x,I=T,M=!1,E=d=>d.startsWith("file://");function v(){At.buffer!=N.buffer&&j()}if(i){let d=function(f){try{var b=f.data,w=b.Sc;if(w==="load"){let k=[];self.onmessage=C=>k.push(C),$=()=>{postMessage({Sc:"loaded"});for(let C of k)d(C);self.onmessage=d};for(let C of b.xd)t[C]&&!t[C].proxy||(t[C]=(...B)=>{postMessage({Sc:"callHandler",wd:C,args:B})},C=="print"&&(S=t[C]),C=="printErr"&&(I=t[C]));At=b.Od,j(),m=b.Pd,de(),ri()}else if(w==="run"){(function(k){var C=(v(),L)[k+52>>>2>>>0];k=(v(),L)[k+56>>>2>>>0],Hm(C,C-k),_e(C)})(b.Rc),Ws(b.Rc,0,0,1,0,0),Un(),Ns(b.Rc),z||(Lm(),z=!0);try{or(b.Md,b.bd)}catch(k){if(k!="unwind")throw k}}else b.target!=="setimmediate"&&(w==="checkMailbox"?z&&Xr():w&&(I(`worker: received unknown command ${w}`),I(b)))}catch(k){throw Fm(),k}};var z=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=d}var N,X,U,V,A,L,R,D,Y,O,Z,P=!1;function j(){var d=At.buffer;t.HEAP8=N=new Int8Array(d),U=new Int16Array(d),t.HEAPU8=X=new Uint8Array(d),V=new Uint16Array(d),t.HEAP32=A=new Int32Array(d),t.HEAPU32=L=new Uint32Array(d),R=new Float32Array(d),D=new Float64Array(d),Y=new BigInt64Array(d),O=new BigUint64Array(d)}function F(){P=!0,i?$():qt.sb()}function G(d){throw I(d="Aborted("+d+")"),M=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),_==null||_(d),d}function ne(){return{a:{ma:Q2,gb:Z2,g:q,J:ee,f:fe,o:Oe,h:We,ha:qe,b:Pe,T:Ze,Ha:rt,n:vn,$:qr,Xa:Vr,Da:Hr,Fa:jr,Ya:ur,Va:um,Oa:lm,Ua:dm,ka:cm,Ea:hm,Ba:pm,Wa:fm,Ca:mm,bb:U1,ea:L1,wa:F1,ua:W1,da:V1,O:H1,H:j1,va:K1,_:t2,xa:n2,Ra:r2,za:a2,Ia:s2,sa:o2,fa:u2,Qa:Ns,_a:l2,R:p2,r:w2,c:zs,hb:_2,y:b2,M:$2,D:x2,l:v2,s:vm,ib:S2,I:T2,S:I2,j:k2,u:E2,q:M2,k:C2,La:A2,Ma:R2,Na:z2,Ja:km,Ka:Em,ta:Mm,db:N2,ab:P2,v:D2,aa:U2,ga:L2,$a:B2,W:F2,Za:G2,Aa:W2,F:O2,U:q2,la:ti,ya:H2,fb:V2,eb:j2,Sa:zm,Ta:Om,Ga:Ct,V:Nm,ja:Bm,Pa:Pm,ia:Dm,kb:O$,na:M$,lb:z$,oa:E$,G:_$,e:n$,t:e$,w:J2,B:h$,mb:T$,K:g$,x:a$,pa:I$,Y:C$,ba:S$,nb:v$,ob:x$,P:p$,qa:$$,pb:b$,N:y$,Z:k$,d:t$,A:i$,m:r$,jb:N$,p:o$,z:u$,C:s$,E:l$,L:f$,qb:w$,Q:A$,ca:m$,X:R$,rb:c$,ra:d$,i:Y2,a:At,cb:et}}}async function de(){function d(w,k){var C=qt=w.exports;w={};for(let[B,H]of Object.entries(C))typeof H=="function"?(C=d2(H),w[B]=C):w[B]=H;return qt=w,qt=(function(){var B=qt,H=re=>we=>re(we)>>>0,te=re=>()=>re()>>>0;return(B=Object.assign({},B)).tb=H(B.tb),B.Xb=te(B.Xb),B.Zb=H(B.Zb),B.lc=H(B.lc),B.mc=te(B.mc),B.qc=H(B.qc),B})(),$n.push(qt._b),Um=(w=qt).tb,Lm=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,ni=w.Xb,Ot=t._free=w.Yb,dr=t._malloc=w.Zb,Ws=w.ac,Fm=w.bc,Gm=w.cc,Wm=w.dc,qs=w.ec,qm=w.fc,Vm=w.gc,xe=w.hc,cr=w.ic,Hm=w.jc,_e=w.kc,Vs=w.lc,$e=w.mc,jm=w.nc,Hs=w.oc,Km=w.pc,Ym=w.qc,Xm=w.rc,js=w.sc,Zm=w.tc,Qm=w.uc,Jm=w.vc,eg=w.wc,tg=w.xc,ng=w.yc,rg=w.zc,ig=w.Ac,ag=w.Bc,sg=w.Cc,og=w.Dc,ug=w.Ec,lg=w.Fc,dg=w.Gc,cg=w.Hc,hg=w.Ic,pg=w.Jc,fg=w.Kc,mg=w.Lc,gg=w.Mc,yg=w.Nc,wg=w.Pc,_g=w.Qc,bg=w.$c,$g=w.ad,xg=w.fd,vg=w.jd,Sg=w.kd,Tg=w.ld,Ig=w.md,kg=w.nd,Eg=w.od,Mg=w.pd,Cg=w.qd,Ag=w.vd,Rg=w.Td,zg=w.Ud,Og=w.Vd,Ng=w.Wd,m=k,qt}var f,b=ne();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(b,(k,C)=>{w(d(k,C))})}):i?d(new WebAssembly.Instance(m,ne()),m):(Z??(Z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(w){var k=Z;if(!p&&!E(k))try{var C=fetch(k,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,w)}catch(B){I(`wasm streaming compile failed: ${B}`),I("falling back to ArrayBuffer instantiation")}return(async function(B,H){try{var te=await(async function(re){if(!p)try{var we=await o(re);return new Uint8Array(we)}catch{}if(re==Z&&p)re=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";re=u(re)}return re})(B);return await WebAssembly.instantiate(te,H)}catch(re){I(`failed to asynchronously prepare wasm: ${re}`),G(re)}})(k,w)})(b),d(f.instance,f.module))}class ie{constructor(f){Dg(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var ye=d=>{d.terminate(),d.onmessage=()=>{}},Be=[],Le=0,Me=null,Xe=d=>{vt.length==0&&(Cs(),Wr(vt[0]));var f=vt.pop();if(!f)return 6;St.push(f),ct[d.Rc]=f,f.Rc=d.Rc;var b={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return f.postMessage(b,d.rd),0},be=0,pe=(d,f,...b)=>{var w,k=16*b.length,C=$e(),B=Vs(k),H=B>>>3;for(w of b)typeof w=="bigint"?((v(),Y)[H++>>>0]=1n,(v(),Y)[H++>>>0]=w):((v(),Y)[H++>>>0]=0n,(v(),D)[H++>>>0]=w);return d=Gm(d,0,k,B,f),_e(C),d};function et(d){if(i)return pe(0,1,d);if(g=d,!(0<be)){for(var f of St)ye(f);for(f of vt)ye(f);vt=[],St=[],ct={},M=!0}l(0,new ie(d))}function xt(d){if(i)return pe(1,0,d);Ct(d)}var Ct=d=>{if(g=d,i)throw xt(d),"unwind";et(d)},vt=[],St=[],$n=[],ct={},tn=d=>{var f=d.Rc;delete ct[f],vt.push(d),St.splice(St.indexOf(d),1),d.Rc=0,Wm(f)};function Un(){$n.forEach(d=>d())}var Wr=d=>new Promise(f=>{d.onmessage=k=>{var C=k.data;if(k=C.Sc,C.Zc&&C.Zc!=ni()){var B=ct[C.Zc];B?B.postMessage(C,C.rd):I(`Internal error! Worker sent a message "${k}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else k==="checkMailbox"?Xr():k==="spawnThread"?Xe(C):k==="cleanupThread"?Yr(()=>{tn(ct[C.Nd])}):k==="loaded"?(d.loaded=!0,f(d)):C.target==="setimmediate"?d.postMessage(C):k==="uncaughtException"?d.onerror(C.error):k==="callHandler"?t[C.wd](...C.args):k&&I(`worker sent an unknown command ${k}`)},d.onerror=k=>{throw I(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var b,w=[];for(b of[])t.propertyIsEnumerable(b)&&w.push(b);d.postMessage({Sc:"load",xd:w,Od:At,Pd:m})});function Cs(){var d=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});vt.push(d)}var At,or=(d,f)=>{be=0,d=js(d,f),0<be?g=d:qs(d)},Gt=[],xn=0;function q(d){var f=new Ie(d>>>=0);return(v(),N)[f.Tc+12>>>0]==0&&(ue(f,!0),xn--),le(f,!1),Gt.push(f),Ym(d)}var Q=0,ee=()=>{xe(0,0);var d=Gt.pop();jm(d.cd),Q=0};function ue(d,f){f=f?1:0,(v(),N)[d.Tc+12>>>0]=f}function le(d,f){f=f?1:0,(v(),N)[d.Tc+13>>>0]=f}class Ie{constructor(f){this.cd=f,this.Tc=f-24}}var he=d=>{var f=Q;if(!f)return cr(0),0;var b=new Ie(f);(v(),L)[b.Tc+16>>>2>>>0]=f;var w=(v(),L)[b.Tc+4>>>2>>>0];if(!w)return cr(0),f;for(var k of d){if(k===0||k===w)break;if(Km(k,w,b.Tc+16))return cr(k),f}return cr(w),f};function fe(){return he([])}function Oe(d){return he([d>>>0])}function We(d,f,b,w){return he([d>>>0,f>>>0,b>>>0,w>>>0])}var qe=()=>{var d=Gt.pop();d||G("no exception to throw");var f=d.cd;throw(v(),N)[d.Tc+13>>>0]==0&&(Gt.push(d),le(d,!0),ue(d,!1),xn++),Hs(f),Q=f};function Pe(d,f,b){var w=new Ie(d>>>=0);throw f>>>=0,b>>>=0,(v(),L)[w.Tc+16>>>2>>>0]=0,(v(),L)[w.Tc+4>>>2>>>0]=f,(v(),L)[w.Tc+8>>>2>>>0]=b,Hs(d),xn++,Q=d}var Ze=()=>xn;function Qe(d,f,b,w){return i?pe(2,1,d,f,b,w):rt(d,f,b,w)}function rt(d,f,b,w){if(d>>>=0,f>>>=0,b>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var k=[];return i&&k.length===0?Qe(d,f,b,w):(d={Ld:b,Rc:d,bd:w,rd:k},i?(d.Sc="spawnThread",postMessage(d,k),0):Xe(d))}function vn(d){throw Q||(Q=d>>>0),Q}var De=globalThis.TextDecoder&&new TextDecoder,it=(d,f,b,w)=>{if(b=f+b,w)return b;for(;d[f]&&!(f>=b);)++f;return f},at=(d,f=0,b,w)=>{if(16<(b=it(d,f>>>=0,b,w))-f&&d.buffer&&De)return De.decode(d.buffer instanceof ArrayBuffer?d.subarray(f,b):d.slice(f,b));for(w="";f<b;){var k=d[f++];if(128&k){var C=63&d[f++];if((224&k)==192)w+=String.fromCharCode((31&k)<<6|C);else{var B=63&d[f++];65536>(k=(240&k)==224?(15&k)<<12|C<<6|B:(7&k)<<18|C<<12|B<<6|63&d[f++])?w+=String.fromCharCode(k):(k-=65536,w+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else w+=String.fromCharCode(k)}return w},Ne=(d,f,b)=>(d>>>=0)?at((v(),X),d,f,b):"";function qr(d,f,b){return i?pe(3,1,d,f,b):0}function Vr(d,f){if(i)return pe(4,1,d,f)}function Hr(d,f){if(i)return pe(5,1,d,f)}function jr(d,f,b){if(i)return pe(6,1,d,f,b)}function ur(d,f,b){return i?pe(7,1,d,f,b):0}function um(d,f){if(i)return pe(8,1,d,f)}function lm(d,f,b){if(i)return pe(9,1,d,f,b)}function dm(d,f,b,w){if(i)return pe(10,1,d,f,b,w)}function cm(d,f,b,w){if(i)return pe(11,1,d,f,b,w)}function hm(d,f,b,w){if(i)return pe(12,1,d,f,b,w)}function pm(d){if(i)return pe(13,1,d)}function fm(d,f){if(i)return pe(14,1,d,f)}function mm(d,f,b){if(i)return pe(15,1,d,f,b)}var U1=()=>G(""),Rt=d=>{d>>>=0;for(var f="";;){var b=(v(),X)[d++>>>0];if(!b)return f;f+=String.fromCharCode(b)}},As={},Rs={},Ln=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Wt(d,f,b={}){return(function(w,k,C={}){var B=k.name;if(!w)throw new Ln(`type "${B}" must have a positive integer typeid pointer`);if(Rs.hasOwnProperty(w)){if(C.yd)return;throw new Ln(`Cannot register type '${B}' twice`)}Rs[w]=k,As.hasOwnProperty(w)&&(k=As[w],delete As[w],k.forEach(H=>H()))})(d,f,b)}var gm=(d,f,b)=>{switch(f){case 1:return b?w=>(v(),N)[w>>>0]:w=>(v(),X)[w>>>0];case 2:return b?w=>(v(),U)[w>>>1>>>0]:w=>(v(),V)[w>>>1>>>0];case 4:return b?w=>(v(),A)[w>>>2>>>0]:w=>(v(),L)[w>>>2>>>0];case 8:return b?w=>(v(),Y)[w>>>3>>>0]:w=>(v(),O)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${d}`)}};function L1(d,f,b,w,k){d>>>=0,b>>>=0,f=Rt(f>>>0);let C=B=>B;if(w=w===0n){let B=8*b;C=H=>BigInt.asUintN(B,H),k=C(k)}Wt(d,{name:f,Oc:C,Vc:(B,H)=>(typeof H=="number"&&(H=BigInt(H)),H),Uc:gm(f,b,!w),Wc:null})}function F1(d,f,b,w){Wt(d>>>=0,{name:f=Rt(f>>>0),Oc:function(k){return!!k},Vc:function(k,C){return C?b:w},Uc:function(k){return this.Oc((v(),X)[k>>>0])},Wc:null})}var ym=[],Sn=[0,1,,1,null,1,!0,1,!1,1];function zs(d){9<(d>>>=0)&&--Sn[d+1]===0&&(Sn[d]=void 0,ym.push(d))}var ht=d=>{if(!d)throw new Ln(`Cannot use deleted val. handle = ${d}`);return Sn[d]},Tt=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=ym.pop()||Sn.length;return Sn[f]=d,Sn[f+1]=1,f}};function Os(d){return this.Oc((v(),L)[d>>>2>>>0])}var G1={name:"emscripten::val",Oc:d=>{var f=ht(d);return zs(d),f},Vc:(d,f)=>Tt(f),Uc:Os,Wc:null};function W1(d){return Wt(d>>>0,G1)}var q1=(d,f)=>{switch(f){case 4:return function(b){return this.Oc((v(),R)[b>>>2>>>0])};case 8:return function(b){return this.Oc((v(),D)[b>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${d}`)}};function V1(d,f,b){b>>>=0,Wt(d>>>=0,{name:f=Rt(f>>>0),Oc:w=>w,Vc:(w,k)=>k,Uc:q1(f,b),Wc:null})}function H1(d,f,b,w,k){d>>>=0,b>>>=0,f=Rt(f>>>0);let C=H=>H;if(w===0){var B=32-8*b;C=H=>H<<B>>>B,k=C(k)}Wt(d,{name:f,Oc:C,Vc:(H,te)=>te,Uc:gm(f,b,w!==0),Wc:null})}function j1(d,f,b){function w(C){var B=(v(),L)[C>>>2>>>0];return C=(v(),L)[C+4>>>2>>>0],new k((v(),N).buffer,C,B)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Wt(d>>>=0,{name:b=Rt(b>>>0),Oc:w,Uc:w},{yd:!0})}var nn=(d,f,b)=>{var w=(v(),X);if(f>>>=0,0<b){var k=f;b=f+b-1;for(var C=0;C<d.length;++C){var B=d.codePointAt(C);if(127>=B){if(f>=b)break;w[f++>>>0]=B}else if(2047>=B){if(f+1>=b)break;w[f++>>>0]=192|B>>6,w[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=b)break;w[f++>>>0]=224|B>>12,w[f++>>>0]=128|B>>6&63,w[f++>>>0]=128|63&B}else{if(f+3>=b)break;w[f++>>>0]=240|B>>18,w[f++>>>0]=128|B>>12&63,w[f++>>>0]=128|B>>6&63,w[f++>>>0]=128|63&B,C++}}w[f>>>0]=0,d=f-k}else d=0;return d},Kr=d=>{for(var f=0,b=0;b<d.length;++b){var w=d.charCodeAt(b);127>=w?f++:2047>=w?f+=2:55296<=w&&57343>=w?(f+=4,++b):f+=3}return f};function K1(d,f){Wt(d>>>=0,{name:f=Rt(f>>>0),Oc(b){var w=(v(),L)[b>>>2>>>0];return w=Ne(b+4,w,!0),Ot(b),w},Vc(b,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var k=typeof w=="string";if(!(k||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Ln("Cannot pass non-string to std::string");var C=k?Kr(w):w.length,B=dr(4+C+1),H=B+4;return(v(),L)[B>>>2>>>0]=C,k?nn(w,H,C+1):(v(),X).set(w,H>>>0),b!==null&&b.push(Ot,B),B},Uc:Os,Wc(b){Ot(b)}})}var wm=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Y1=(d,f,b)=>{if(d>>>=1,16<(f=it((v(),V),d,f/2,b))-d&&wm)return wm.decode((v(),V).slice(d,f));for(b="";d<f;++d){var w=(v(),V)[d>>>0];b+=String.fromCharCode(w)}return b},X1=(d,f,b)=>{if(b??(b=2147483647),2>b)return 0;var w=f;b=(b-=2)<2*d.length?b/2:d.length;for(var k=0;k<b;++k){var C=d.charCodeAt(k);(v(),U)[f>>>1>>>0]=C,f+=2}return(v(),U)[f>>>1>>>0]=0,f-w},Z1=d=>2*d.length,Q1=(d,f,b)=>{var w="";d>>>=2;for(var k=0;!(k>=f/4);k++){var C=(v(),L)[d+k>>>0];if(!C&&!b)break;w+=String.fromCodePoint(C)}return w},J1=(d,f,b)=>{if(f>>>=0,b??(b=2147483647),4>b)return 0;var w=f;b=w+b-4;for(var k=0;k<d.length;++k){var C=d.codePointAt(k);if(65535<C&&k++,(v(),A)[f>>>2>>>0]=C,(f+=4)+4>b)break}return(v(),A)[f>>>2>>>0]=0,f-w},e2=d=>{for(var f=0,b=0;b<d.length;++b)65535<d.codePointAt(b)&&b++,f+=4;return f};function t2(d,f,b){if(d>>>=0,f>>>=0,b=Rt(b>>>=0),f===2)var w=Y1,k=X1,C=Z1;else w=Q1,k=J1,C=e2;Wt(d,{name:b,Oc:B=>{var H=(v(),L)[B>>>2>>>0];return H=w(B+4,H*f,!0),Ot(B),H},Vc:(B,H)=>{if(typeof H!="string")throw new Ln(`Cannot pass non-string to C++ string type ${b}`);var te=C(H),re=dr(4+te+f);return(v(),L)[re>>>2>>>0]=te/f,k(H,re+4,te+f),B!==null&&B.push(Ot,re),re},Uc:Os,Wc(B){Ot(B)}})}function n2(d,f){Wt(d>>>=0,{zd:!0,name:f=Rt(f>>>0),Oc:()=>{},Vc:()=>{}})}function r2(d){Ws(d>>>0,!r,1,!n,131072,!1),Un()}var Yr=d=>{if(!M)try{if(d(),!(0<be))try{i?ni()&&qs(g):Ct(g)}catch(f){f instanceof ie||f=="unwind"||l(0,f)}}catch(f){f instanceof ie||f=="unwind"||l(0,f)}},i2=!Atomics.waitAsync||((Pg=globalThis.navigator)==null?void 0:Pg.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ns(d){d>>>=0,i2||(Atomics.waitAsync((v(),A),d>>>2,d).value.then(Xr),d+=128,Atomics.store((v(),A),d>>>2,1))}var Xr=()=>Yr(()=>{var d=ni();d&&(Ns(d),Vm())});function a2(d,f){(d>>>=0)==f>>>0?setTimeout(Xr):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=ct[d])&&d.postMessage({Sc:"checkMailbox"})}var Bs=[];function s2(d,f,b,w,k){for(f>>>=0,k>>>=0,Bs.length=0,b=k>>>3,w=k+w>>>3;b<w;){var C;C=(v(),Y)[b++>>>0]?(v(),Y)[b++>>>0]:(v(),D)[b++>>>0],Bs.push(C)}return(f?Ks[f]:X2[d])(...Bs)}var o2=()=>{be=0};function u2(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):tn(ct[d])}function l2(d){}var Zr=d=>{try{d()}catch(f){G(f)}};function d2(d){var f=(...b)=>{Qr.push(d);try{return d(...b)}finally{M||(Qr.pop(),zt&&rn===1&&Qr.length===0&&(rn=0,be+=1,Zr(zg),typeof Fibers<"u"&&Fibers.Zd()))}};return $m.set(d,f),f}var rn=0,zt=null,_m=0,Qr=[],Ps=new Map,bm=new Map,$m=new Map,c2=0,Ds=null,h2=[],xm=d=>(function(f){if(!M){if(rn===0){var b=!1,w=!1;f((k=0)=>{if(!M&&(_m=k,b=!0,w)){rn=2,Zr(()=>Og(zt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),k=!1;try{var C=(function(){var te=(v(),A)[zt+8>>>2>>>0];return te=bm.get(te),te=$m.get(te),--be,te()})()}catch(te){C=te,k=!0}var B=!1;if(!zt){var H=Ds;H&&(Ds=null,(k?H.reject:H.resolve)(C),B=!0)}if(k&&!B)throw C}}),w=!0,b||(rn=1,zt=(function(){var k=dr(65548),C=k+12;if((v(),L)[k>>>2>>>0]=C,(v(),L)[k+4>>>2>>>0]=C+65536,C=Qr[0],!Ps.has(C)){var B=c2++;Ps.set(C,B),bm.set(B,C)}return C=Ps.get(C),(v(),A)[k+8>>>2>>>0]=C,k})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Zr(()=>Rg(zt)))}else rn===2?(rn=0,Zr(Ng),Ot(zt),zt=null,h2.forEach(Yr)):G(`invalid state: ${rn}`);return _m}})(f=>{d().then(f)});function p2(d){return d>>>=0,xm(async()=>{var f=await ht(d);return Tt(f)})}var Us=[],f2=d=>{var f=Us.length;return Us.push(d),f},m2=(d,f)=>{for(var b=Array(d),w=0;w<d;++w){var k=w,C=(v(),L)[f+4*w>>>2>>>0],B=Rs[C];if(B===void 0)throw d=`parameter ${w}`,C=Um(C),f=Rt(C),Ot(C),new Ln(`${d} has unknown type ${f}`);b[k]=B}return b},g2=(d,f,b)=>{var w=[];return d=d(w,b),w.length&&((v(),L)[f>>>2>>>0]=Tt(w)),d},y2={},Jr=d=>{var f=y2[d];return f===void 0?Rt(d):f};function w2(d,f,b){var[w,...k]=m2(d,f>>>0);f=w.Vc.bind(w);var C=k.map(te=>te.Uc.bind(te));d--;var B={toValue:ht};switch(d=C.map((te,re)=>{var we=`argFromPtr${re}`;return B[we]=te,`${we}(args${re?"+"+8*re:""})`}),b){case 0:var H="toValue(handle)";break;case 2:H="new (toValue(handle))";break;case 3:H="";break;case 1:B.getStringOrSymbol=Jr,H="toValue(handle)[getStringOrSymbol(methodName)]"}return H+=`(${d})`,w.zd||(B.toReturnWire=f,B.emval_returnValue=g2,H=`return emval_returnValue(toReturnWire, destructorsRef, ${H})`),H=`return function (handle, methodName, destructorsRef, args) {
  ${H}
  }`,b=new Function(Object.keys(B),H)(...Object.values(B)),H=`methodCaller<(${k.map(te=>te.name)}) => ${w.name}>`,f2(Object.defineProperty(b,"name",{value:H}))}function _2(d,f){return f>>>=0,(d=ht(d>>>0))==ht(f)}function b2(d){return(d>>>=0)?(d=Jr(d),Tt(globalThis[d])):Tt(globalThis)}function $2(d){return d=Jr(d>>>0),Tt(t[d])}function x2(d,f){return f>>>=0,d=ht(d>>>0),f=ht(f),Tt(d[f])}function v2(d){9<(d>>>=0)&&(Sn[d+1]+=1)}function vm(d,f,b,w,k){return Us[d>>>0](f>>>0,b>>>0,w>>>0,k>>>0)}function S2(d,f,b,w,k){return vm(d>>>0,f>>>0,b>>>0,w>>>0,k>>>0)}function T2(){return Tt([])}function I2(d){d=ht(d>>>0);for(var f=Array(d.length),b=0;b<d.length;b++)f[b]=d[b];return Tt(f)}function k2(d){return Tt(Jr(d>>>0))}function E2(){return Tt({})}function M2(d){for(var f=ht(d>>>=0);f.length;){var b=f.pop();f.pop()(b)}zs(d)}function C2(d,f,b){f>>>=0,b>>>=0,d=ht(d>>>0),f=ht(f),b=ht(b),d[f]=b}function A2(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(v(),A)[f>>>2>>>0]=d.getUTCSeconds(),(v(),A)[f+4>>>2>>>0]=d.getUTCMinutes(),(v(),A)[f+8>>>2>>>0]=d.getUTCHours(),(v(),A)[f+12>>>2>>>0]=d.getUTCDate(),(v(),A)[f+16>>>2>>>0]=d.getUTCMonth(),(v(),A)[f+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),A)[f+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[f+28>>>2>>>0]=d}var Sm=d=>d%4==0&&(d%100!=0||d%400==0),Tm=[0,31,60,91,121,152,182,213,244,274,305,335],Im=[0,31,59,90,120,151,181,212,243,273,304,334];function R2(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(v(),A)[f>>>2>>>0]=d.getSeconds(),(v(),A)[f+4>>>2>>>0]=d.getMinutes(),(v(),A)[f+8>>>2>>>0]=d.getHours(),(v(),A)[f+12>>>2>>>0]=d.getDate(),(v(),A)[f+16>>>2>>>0]=d.getMonth(),(v(),A)[f+20>>>2>>>0]=d.getFullYear()-1900,(v(),A)[f+24>>>2>>>0]=d.getDay();var b=(Sm(d.getFullYear())?Tm:Im)[d.getMonth()]+d.getDate()-1|0;(v(),A)[f+28>>>2>>>0]=b,(v(),A)[f+36>>>2>>>0]=-60*d.getTimezoneOffset(),b=new Date(d.getFullYear(),6,1).getTimezoneOffset();var w=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(b!=w&&d.getTimezoneOffset()==Math.min(w,b)),(v(),A)[f+32>>>2>>>0]=d}function z2(d){d>>>=0;var f=new Date((v(),A)[d+20>>>2>>>0]+1900,(v(),A)[d+16>>>2>>>0],(v(),A)[d+12>>>2>>>0],(v(),A)[d+8>>>2>>>0],(v(),A)[d+4>>>2>>>0],(v(),A)[d>>>2>>>0],0),b=(v(),A)[d+32>>>2>>>0],w=f.getTimezoneOffset(),k=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(C,k);return 0>b?(v(),A)[d+32>>>2>>>0]=+(k!=C&&B==w):0<b!=(B==w)&&(k=Math.max(C,k),f.setTime(f.getTime()+6e4*((0<b?B:k)-w))),(v(),A)[d+24>>>2>>>0]=f.getDay(),b=(Sm(f.getFullYear())?Tm:Im)[f.getMonth()]+f.getDate()-1|0,(v(),A)[d+28>>>2>>>0]=b,(v(),A)[d>>>2>>>0]=f.getSeconds(),(v(),A)[d+4>>>2>>>0]=f.getMinutes(),(v(),A)[d+8>>>2>>>0]=f.getHours(),(v(),A)[d+12>>>2>>>0]=f.getDate(),(v(),A)[d+16>>>2>>>0]=f.getMonth(),(v(),A)[d+20>>>2>>>0]=f.getYear(),d=f.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function km(d,f,b,w,k,C,B){return i?pe(16,1,d,f,b,w,k,C,B):-52}function Em(d,f,b,w,k,C){if(i)return pe(17,1,d,f,b,w,k,C)}var lr={},O2=()=>performance.timeOrigin+performance.now();function Mm(d,f){if(i)return pe(18,1,d,f);if(lr[d]&&(clearTimeout(lr[d].id),delete lr[d]),!f)return 0;var b=setTimeout(()=>{delete lr[d],Yr(()=>qm(d,performance.timeOrigin+performance.now()))},f);return lr[d]={id:b,Yd:f},0}function N2(d,f,b,w){d>>>=0,f>>>=0,b>>>=0,w>>>=0;var k=new Date().getFullYear(),C=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset();var B=Math.max(C,k);(v(),L)[d>>>2>>>0]=60*B,(v(),A)[f>>>2>>>0]=+(C!=k),d=(f=H=>{var te=Math.abs(H);return`UTC${0<=H?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(C),f=f(k),k<C?(nn(d,b,17),nn(f,w,17)):(nn(d,w,17),nn(f,b,17))}var B2=()=>Date.now();function P2(d,f,b){return b>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),Y)[b>>>3>>>0]=BigInt(d),0):28}var Ls=[],Cm=(d,f)=>{Ls.length=0;for(var b;b=(v(),X)[d++>>>0];){var w=b!=105;f+=(w&=b!=112)&&f%8?4:0,Ls.push(b==112?(v(),L)[f>>>2>>>0]:b==106?(v(),Y)[f>>>3>>>0]:b==105?(v(),A)[f>>>2>>>0]:(v(),D)[f>>>3>>>0]),f+=w?8:4}return Ls};function D2(d,f,b){return d>>>=0,f=Cm(f>>>0,b>>>0),Ks[d](...f)}function U2(d,f,b){return d>>>=0,f=Cm(f>>>0,b>>>0),Ks[d](...f)}var L2=()=>{};function F2(d,f){return I(Ne(d>>>0,f>>>0))}var G2=()=>{throw be+=1,"unwind"};function W2(){return 4294901760}var q2=()=>navigator.hardwareConcurrency,Tn={},ei=d=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+f[1]:0},Am=d=>{for(var f of d)(d=ei(f))&&(Tn[d]=f)};function V2(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),Am(d),Tn.gd=ei(d[3]),Tn.Jd=d,Tn.gd}function ti(d){if(!(d=Tn[d>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(d))d=f[1];else{if(!(f=/^(.+?)@/.exec(d)))return 0;d=f[1]}Ot(ti.hd??0),f=Kr(d)+1;var b=dr(f);return b&&nn(d,b,f),ti.hd=b,ti.hd}function H2(d){d>>>=0;var f=(v(),X).length;if(d<=f||4294901760<d)return!1;for(var b=1;4>=b;b*=2){var w=f*(1+.2/b);w=Math.min(w,d+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(d,w)/65536))-At.buffer.byteLength+65535)/65536|0;try{At.grow(w),j();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}function j2(d,f,b){if(d>>>=0,f>>>=0,Tn.gd==d)var w=Tn.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Am(w);for(var k=3;w[k]&&ei(w[k])!=d;)++k;for(d=0;d<b&&w[d+k];++d)(v(),A)[f+4*d>>>2>>>0]=ei(w[d+k]);return d}var Fs,Gs={},Rm=()=>{var w;if(!Fs){var d,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in Gs)Gs[d]===void 0?delete f[d]:f[d]=Gs[d];var b=[];for(d in f)b.push(`${d}=${f[d]}`);Fs=b}return Fs};function zm(d,f){if(i)return pe(19,1,d,f);d>>>=0,f>>>=0;var b,w=0,k=0;for(b of Rm()){var C=f+w;(v(),L)[d+k>>>2>>>0]=C,w+=nn(b,C,1/0)+1,k+=4}return 0}function Om(d,f){if(i)return pe(20,1,d,f);d>>>=0,f>>>=0;var b=Rm();for(var w of((v(),L)[d>>>2>>>0]=b.length,d=0,b))d+=Kr(w)+1;return(v(),L)[f>>>2>>>0]=d,0}function Nm(d){return i?pe(21,1,d):52}function Bm(d,f,b,w){return i?pe(22,1,d,f,b,w):52}function Pm(d,f,b,w){return i?pe(23,1,d,f,b,w):70}var K2=[null,[],[]];function Dm(d,f,b,w){if(i)return pe(24,1,d,f,b,w);f>>>=0,b>>>=0,w>>>=0;for(var k=0,C=0;C<b;C++){var B=(v(),L)[f>>>2>>>0],H=(v(),L)[f+4>>>2>>>0];f+=8;for(var te=0;te<H;te++){var re=d,we=(v(),X)[B+te>>>0],Se=K2[re];we===0||we===10?((re===1?S:I)(at(Se)),Se.length=0):Se.push(we)}k+=H}return(v(),L)[w>>>2>>>0]=k,0}function Y2(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)Cs();Be.push(async()=>{var f=(async function(){if(!i)return Promise.all(vt.map(Wr))})();Le++,await f,--Le==0&&Me&&(f=Me,Me=null,f())})})(),i||(At=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),j()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>$e(),t.stackRestore=d=>_e(d),t.stackAlloc=d=>Vs(d),t.setValue=function(d,f,b="i8"){switch(b.endsWith("*")&&(b="*"),b){case"i1":case"i8":(v(),N)[d>>>0]=f;break;case"i16":(v(),U)[d>>>1>>>0]=f;break;case"i32":(v(),A)[d>>>2>>>0]=f;break;case"i64":(v(),Y)[d>>>3>>>0]=BigInt(f);break;case"float":(v(),R)[d>>>2>>>0]=f;break;case"double":(v(),D)[d>>>3>>>0]=f;break;case"*":(v(),L)[d>>>2>>>0]=f;break;default:G(`invalid type for setValue: ${b}`)}},t.getValue=function(d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),N)[d>>>0];case"i16":return(v(),U)[d>>>1>>>0];case"i32":return(v(),A)[d>>>2>>>0];case"i64":return(v(),Y)[d>>>3>>>0];case"float":return(v(),R)[d>>>2>>>0];case"double":return(v(),D)[d>>>3>>>0];case"*":return(v(),L)[d>>>2>>>0];default:G(`invalid type for getValue: ${f}`)}},t.UTF8ToString=Ne,t.stringToUTF8=nn,t.lengthBytesUTF8=Kr;var Um,Lm,ni,Ot,dr,Ws,Fm,Gm,Wm,qs,qm,Vm,xe,cr,Hm,_e,Vs,$e,jm,Hs,Km,Ym,Xm,js,Zm,Qm,Jm,eg,tg,ng,rg,ig,ag,sg,og,ug,lg,dg,cg,hg,pg,fg,mg,gg,yg,wg,_g,bg,$g,xg,vg,Sg,Tg,Ig,kg,Eg,Mg,Cg,Ag,Rg,zg,Og,Ng,qt,X2=[et,xt,Qe,qr,Vr,Hr,jr,ur,um,lm,dm,cm,hm,pm,fm,mm,km,Em,Mm,zm,Om,Nm,Bm,Pm,Dm],Ks={1003524:(d,f,b,w,k)=>{if(t===void 0||!t.Xc)return 1;if((d=Ne(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(f=Number(f>>>0),b=Number(b>>>0),w=Number(w>>>0),f+b>d.byteLength)return 3;try{let C=d.subarray(f,f+b);switch(k){case 0:(v(),X).set(C,w>>>0);break;case 1:t.Qd?t.Qd(w,C):t.Id(w,C);break;default:return 4}return 0}catch{return 4}},1004348:(d,f,b)=>{t.td(d,(v(),X).subarray(f>>>0,f+b>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,f,b)=>{t.ed(Number(d),Number(f),Number(b),!0)},1004704:(d,f,b)=>{t.ed(Number(d),Number(f),Number(b))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,f,b)=>{t.$b("HardSigmoid",d,{alpha:f,beta:b})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,f,b)=>{t.$b("Clip",d,{min:f,max:b})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,f)=>{t.$b("Elu",d,{alpha:f})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,f)=>{t.$b("LeakyRelu",d,{alpha:f})},1006444:(d,f)=>{t.$b("ThresholdedRelu",d,{alpha:f})},1006514:(d,f)=>{t.$b("Cast",d,{to:f})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,f,b,w,k)=>{t.$b("ReduceMean",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007283:(d,f,b,w,k)=>{t.$b("ReduceMax",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007457:(d,f,b,w,k)=>{t.$b("ReduceMin",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007631:(d,f,b,w,k)=>{t.$b("ReduceProd",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007806:(d,f,b,w,k)=>{t.$b("ReduceSum",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007980:(d,f,b,w,k)=>{t.$b("ReduceL1",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008153:(d,f,b,w,k)=>{t.$b("ReduceL2",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008326:(d,f,b,w,k)=>{t.$b("ReduceLogSum",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008503:(d,f,b,w,k)=>{t.$b("ReduceSumSquare",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008683:(d,f,b,w,k)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,f,b)=>{t.$b("Transpose",d,{perm:f?Array.from((v(),A).subarray(Number(f)>>>0,Number(b)>>>0)):[]})},1009040:(d,f,b,w)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:Ne(b),format:w?"NHWC":"NCHW"})},1009173:(d,f,b,w)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:Ne(b),format:w?"NHWC":"NCHW"})},1009306:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue,an)=>{t.$b("ConvTranspose",d,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[b],group:w,kernelShape:[k],pads:[C,B],strides:[H],wIsConst:()=>!!(v(),N)[re>>>0],outputPadding:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Se)>>>0)):[],outputShape:Ce?Array.from((v(),A).subarray(Number(Ce)>>>0,Number(Ue)>>>0)):[],activation:Ne(an)})},1009739:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue)=>{t.$b("ConvTranspose",d,{format:H?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),A).subarray(Number(b)>>>0,(Number(b)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(k)>>>0,(Number(k)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],outputShape:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ce)>>>0)):[],activation:Ne(Ue)})},1010400:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue,an)=>{t.$b("ConvTranspose",d,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[b],group:w,kernelShape:[k],pads:[C,B],strides:[H],wIsConst:()=>!!(v(),N)[re>>>0],outputPadding:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Se)>>>0)):[],outputShape:Ce?Array.from((v(),A).subarray(Number(Ce)>>>0,Number(Ue)>>>0)):[],activation:Ne(an)})},1010833:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue)=>{t.$b("ConvTranspose",d,{format:H?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),A).subarray(Number(b)>>>0,(Number(b)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(k)>>>0,(Number(k)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],outputShape:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ce)>>>0)):[],activation:Ne(Ue)})},1011494:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1011585:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue)=>{t.$b("AveragePool",d,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:H?Array.from((v(),A).subarray(Number(H)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],strides:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ce)>>>0)):[]})},1012064:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1012155:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue)=>{t.$b("AveragePool",d,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:H?Array.from((v(),A).subarray(Number(H)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],strides:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ce)>>>0)):[]})},1012634:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1012721:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue)=>{t.$b("MaxPool",d,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:H?Array.from((v(),A).subarray(Number(H)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],strides:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ce)>>>0)):[]})},1013196:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1013283:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue)=>{t.$b("MaxPool",d,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:H?Array.from((v(),A).subarray(Number(H)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],strides:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ce)>>>0)):[]})},1013758:(d,f,b,w,k)=>{t.$b("Gemm",d,{alpha:f,beta:b,transA:w,transB:k})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,f,b,w)=>{t.$b("ArgMax",d,{keepDims:!!f,selectLastIndex:!!b,axis:w})},1014024:(d,f,b,w)=>{t.$b("ArgMin",d,{keepDims:!!f,selectLastIndex:!!b,axis:w})},1014132:(d,f)=>{t.$b("Softmax",d,{axis:f})},1014195:(d,f)=>{t.$b("Concat",d,{axis:f})},1014255:(d,f,b,w,k)=>{t.$b("Split",d,{axis:f,numOutputs:b,splitSizes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,f)=>{t.$b("Gather",d,{axis:Number(f)})},1014536:(d,f)=>{t.$b("GatherElements",d,{axis:Number(f)})},1014615:(d,f)=>{t.$b("GatherND",d,{batch_dims:Number(f)})},1014694:(d,f,b,w,k,C,B,H,te,re,we)=>{t.$b("Resize",d,{antialias:f,axes:b?Array.from((v(),A).subarray(Number(b)>>>0,Number(w)>>>0)):[],coordinateTransformMode:Ne(k),cubicCoeffA:C,excludeOutside:B,extrapolationValue:H,keepAspectRatioPolicy:Ne(te),mode:Ne(re),nearestMode:Ne(we)})},1015056:(d,f,b,w,k,C,B)=>{t.$b("Slice",d,{starts:f?Array.from((v(),A).subarray(Number(f)>>>0,Number(b)>>>0)):[],ends:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[],axes:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(B)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,f,b)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:b?"NHWC":"NCHW"})},1015486:(d,f,b)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:b?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,f)=>{t.$b("Einsum",d,{equation:Ne(f)})},1015734:(d,f,b,w,k)=>{t.$b("Pad",d,{mode:f,value:b,pads:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1015877:(d,f,b,w,k,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:b,spatial:!!k,trainingMode:!!w,format:C?"NHWC":"NCHW"})},1016046:(d,f,b,w,k,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:b,spatial:!!k,trainingMode:!!w,format:C?"NHWC":"NCHW"})},1016215:(d,f,b)=>{t.$b("CumSum",d,{exclusive:Number(f),reverse:Number(b)})},1016312:(d,f,b)=>{t.$b("DequantizeLinear",d,{axis:f,blockSize:b})},1016402:(d,f,b,w,k)=>{t.$b("GridSample",d,{align_corners:f,mode:Ne(b),padding_mode:Ne(w),format:k?"NHWC":"NCHW"})},1016572:(d,f,b,w,k)=>{t.$b("GridSample",d,{align_corners:f,mode:Ne(b),padding_mode:Ne(w),format:k?"NHWC":"NCHW"})},1016742:(d,f)=>{t.$b("ScatterND",d,{reduction:Ne(f)})},1016827:(d,f,b,w,k,C,B,H,te)=>{t.$b("Attention",d,{numHeads:f,isUnidirectional:b,maskFilterValue:w,scale:k,doRotary:C,qkvHiddenSizes:B?Array.from((v(),A).subarray(Number(H)>>>0,Number(H)+B>>>0)):[],pastPresentShareBuffer:!!te})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue,an,Ys)=>{t.$b("Conv",d,{format:Se?"NHWC":"NCHW",auto_pad:f,dilations:b?Array.from((v(),A).subarray(Number(b)>>>0,Number(w)>>>0)):[],group:k,kernel_shape:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(B)>>>0)):[],pads:H?Array.from((v(),A).subarray(Number(H)>>>0,Number(te)>>>0)):[],strides:re?Array.from((v(),A).subarray(Number(re)>>>0,Number(we)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Ce)>>>0],activation:Ne(Ue),activation_params:an?Array.from((v(),R).subarray(Number(an)>>>0,Number(Ys)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,f,b,w,k,C,B,H,te)=>{t.$b("GroupQueryAttention",d,{numHeads:f,kvNumHeads:b,scale:w,softcap:k,doRotary:C,rotaryInterleaved:B,smoothSoftmax:H,localWindowSize:te})},1018124:(d,f,b,w)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:b,simplified:!!w})},1018235:(d,f,b,w)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:b,simplified:!!w})},1018346:(d,f,b,w,k,C)=>{t.$b("MatMulNBits",d,{k:f,n:b,accuracyLevel:w,bits:k,blockSize:C})},1018473:(d,f,b,w,k,C)=>{t.$b("MultiHeadAttention",d,{numHeads:f,isUnidirectional:b,maskFilterValue:w,scale:k,doRotary:C})},1018632:(d,f)=>{t.$b("QuickGelu",d,{alpha:f})},1018696:(d,f,b,w,k)=>{t.$b("RotaryEmbedding",d,{interleaved:!!f,numHeads:b,rotaryEmbeddingDim:w,scale:k})},1018835:(d,f,b)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!b})},1018937:(d,f,b)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!b})},1019039:(d,f,b,w)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:f,quantizeAxis:b,blockSize:w})},1019160:d=>{t.Fd(d)},1019194:(d,f)=>t.Hd(Number(d),Number(f),t.Yc.Kd,t.Yc.errors)};function Z2(d,f,b){return xm(async()=>{await t.Dd(Number(d),Number(f),Number(b))})}function Q2(){return typeof wasmOffsetConverter<"u"}function J2(d,f,b,w){var k=$e();try{return ig(d,f,b,w)}catch(C){if(_e(k),C!==C+0)throw C;xe(1,0)}}function e$(d,f,b){var w=$e();try{return eg(d,f,b)}catch(k){if(_e(w),k!==k+0)throw k;xe(1,0)}}function t$(d){var f=$e();try{Zm(d)}catch(b){if(_e(f),b!==b+0)throw b;xe(1,0)}}function n$(d,f){var b=$e();try{return js(d,f)}catch(w){if(_e(b),w!==w+0)throw w;xe(1,0)}}function r$(d,f,b){var w=$e();try{Xm(d,f,b)}catch(k){if(_e(w),k!==k+0)throw k;xe(1,0)}}function i$(d,f){var b=$e();try{ag(d,f)}catch(w){if(_e(b),w!==w+0)throw w;xe(1,0)}}function a$(d,f,b,w,k,C,B){var H=$e();try{return ng(d,f,b,w,k,C,B)}catch(te){if(_e(H),te!==te+0)throw te;xe(1,0)}}function s$(d,f,b,w,k,C){var B=$e();try{Qm(d,f,b,w,k,C)}catch(H){if(_e(B),H!==H+0)throw H;xe(1,0)}}function o$(d,f,b,w){var k=$e();try{rg(d,f,b,w)}catch(C){if(_e(k),C!==C+0)throw C;xe(1,0)}}function u$(d,f,b,w,k){var C=$e();try{Jm(d,f,b,w,k)}catch(B){if(_e(C),B!==B+0)throw B;xe(1,0)}}function l$(d,f,b,w,k,C,B){var H=$e();try{og(d,f,b,w,k,C,B)}catch(te){if(_e(H),te!==te+0)throw te;xe(1,0)}}function d$(d,f,b,w,k,C,B){var H=$e();try{ug(d,f,b,w,k,C,B)}catch(te){if(_e(H),te!==te+0)throw te;xe(1,0)}}function c$(d,f,b,w,k,C,B,H){var te=$e();try{hg(d,f,b,w,k,C,B,H)}catch(re){if(_e(te),re!==re+0)throw re;xe(1,0)}}function h$(d,f,b,w,k){var C=$e();try{return sg(d,f,b,w,k)}catch(B){if(_e(C),B!==B+0)throw B;xe(1,0)}}function p$(d,f,b){var w=$e();try{return pg(d,f,b)}catch(k){if(_e(w),k!==k+0)throw k;xe(1,0)}}function f$(d,f,b,w,k,C,B,H){var te=$e();try{fg(d,f,b,w,k,C,B,H)}catch(re){if(_e(te),re!==re+0)throw re;xe(1,0)}}function m$(d,f,b,w,k,C,B,H,te,re,we,Se){var Ce=$e();try{lg(d,f,b,w,k,C,B,H,te,re,we,Se)}catch(Ue){if(_e(Ce),Ue!==Ue+0)throw Ue;xe(1,0)}}function g$(d,f,b,w,k,C){var B=$e();try{return dg(d,f,b,w,k,C)}catch(H){if(_e(B),H!==H+0)throw H;xe(1,0)}}function y$(d,f,b){var w=$e();try{return mg(d,f,b)}catch(k){if(_e(w),k!==k+0)throw k;return xe(1,0),0n}}function w$(d,f,b,w,k,C,B,H,te){var re=$e();try{tg(d,f,b,w,k,C,B,H,te)}catch(we){if(_e(re),we!==we+0)throw we;xe(1,0)}}function _$(d){var f=$e();try{return gg(d)}catch(b){if(_e(f),b!==b+0)throw b;xe(1,0)}}function b$(d,f){var b=$e();try{return Ag(d,f)}catch(w){if(_e(b),w!==w+0)throw w;return xe(1,0),0n}}function $$(d){var f=$e();try{return yg(d)}catch(b){if(_e(f),b!==b+0)throw b;return xe(1,0),0n}}function x$(d,f,b,w){var k=$e();try{return vg(d,f,b,w)}catch(C){if(_e(k),C!==C+0)throw C;xe(1,0)}}function v$(d,f,b,w,k){var C=$e();try{return Sg(d,f,b,w,k)}catch(B){if(_e(C),B!==B+0)throw B;xe(1,0)}}function S$(d,f,b,w,k,C){var B=$e();try{return Tg(d,f,b,w,k,C)}catch(H){if(_e(B),H!==H+0)throw H;xe(1,0)}}function T$(d,f,b,w,k,C){var B=$e();try{return Ig(d,f,b,w,k,C)}catch(H){if(_e(B),H!==H+0)throw H;xe(1,0)}}function I$(d,f,b,w,k,C,B,H){var te=$e();try{return cg(d,f,b,w,k,C,B,H)}catch(re){if(_e(te),re!==re+0)throw re;xe(1,0)}}function k$(d,f,b,w,k){var C=$e();try{return kg(d,f,b,w,k)}catch(B){if(_e(C),B!==B+0)throw B;return xe(1,0),0n}}function E$(d,f,b,w){var k=$e();try{return Eg(d,f,b,w)}catch(C){if(_e(k),C!==C+0)throw C;xe(1,0)}}function M$(d,f,b,w){var k=$e();try{return Mg(d,f,b,w)}catch(C){if(_e(k),C!==C+0)throw C;xe(1,0)}}function C$(d,f,b,w,k,C,B,H,te,re,we,Se){var Ce=$e();try{return Cg(d,f,b,w,k,C,B,H,te,re,we,Se)}catch(Ue){if(_e(Ce),Ue!==Ue+0)throw Ue;xe(1,0)}}function A$(d,f,b,w,k,C,B,H,te,re,we){var Se=$e();try{$g(d,f,b,w,k,C,B,H,te,re,we)}catch(Ce){if(_e(Se),Ce!==Ce+0)throw Ce;xe(1,0)}}function R$(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue,an,Ys){var B$=$e();try{xg(d,f,b,w,k,C,B,H,te,re,we,Se,Ce,Ue,an,Ys)}catch(Xs){if(_e(B$),Xs!==Xs+0)throw Xs;xe(1,0)}}function z$(d,f,b){var w=$e();try{return wg(d,f,b)}catch(k){if(_e(w),k!==k+0)throw k;xe(1,0)}}function O$(d,f,b){var w=$e();try{return _g(d,f,b)}catch(k){if(_e(w),k!==k+0)throw k;xe(1,0)}}function N$(d,f,b,w){var k=$e();try{bg(d,f,b,w)}catch(C){if(_e(k),C!==C+0)throw C;xe(1,0)}}function ri(){if(0<Le)Me=ri;else if(i)y==null||y(t),F();else{for(var d=Be;0<d.length;)d.shift()(t);0<Le?Me=ri:(t.calledRun=!0,M||(F(),y==null||y(t)))}}return i||(qt=await de(),ri()),t.PTR_SIZE=4,P?t:new Promise((d,f)=>{y=d,_=f})}var bo,$o,a0=J(()=>{var e,t;bo=_o,$o=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),$o&&_o()}),hi,pi,xo,ut,vo,mr,So,To,fi,Io,mi,ko,gi,Eo,yi=J(()=>{li(),hi=typeof location>"u"?void 0:location.origin,pi=self.location.href>"file:"&&self.location.href<"file;",xo=()=>{{if(pi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,hi).href}return self.location.href}},ut=xo(),vo=()=>{if(ut&&!ut.startsWith("blob:"))return ut.substring(0,ut.lastIndexOf("/")+1)},mr=(e,t)=>{try{let n=t??ut;return(n?new URL(e,n):new URL(e)).origin===hi}catch{return!1}},So=(e,t)=>{let n=t??ut;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},To=(e,t)=>`${t??"./"}${e}`,fi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Io=async e=>(await import(e)).default,mi=(i0(),Fn(go)).default,ko=async()=>{if(!ut)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(mr(ut))return[void 0,mi()];let e=await fi(ut);return[e,mi(e)]},gi=(a0(),Fn(wo)).default,Eo=async(e,t,n,r)=>{let i=gi&&!(e||t);if(i)if(ut)i=mr(ut)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,gi];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??So(a,t),o=n&&s&&!mr(s,t),u=o?await fi(s):s??To(a,t);return[o?u:void 0,await Io(u)]}}}),wi,gr,qn,_i,Mo,Co,Ao,bi,Re,ln=J(()=>{yi(),gr=!1,qn=!1,_i=!1,Mo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Co=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ao=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},bi=async e=>{if(gr)return Promise.resolve();if(qn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(_i)throw new Error("previous call to 'initializeWebAssembly()' failed.");qn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ao())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Co())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Mo();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[c,p]=await Eo(o,a,n>1,!!h||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,_)=>{let $={numThreads:n};if(h)$.wasmBinary=h,$.locateFile=x=>x;else if(l||a)$.locateFile=x=>l??a+x;else if(o&&o.indexOf("blob:")!==0)$.locateFile=x=>new URL(x,o).href;else if(c){let x=vo();x&&($.locateFile=T=>x+T)}p($).then(x=>{qn=!1,gr=!0,wi=x,y(),c&&URL.revokeObjectURL(c)},x=>{qn=!1,_i=!0,_(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Re=()=>{if(gr&&wi)return wi;throw new Error("WebAssembly is not initialized yet.")}}),ft,yr,Ee,$i=J(()=>{ln(),ft=(e,t)=>{let n=Re(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},yr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")yr(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ee=e=>{let t=Re(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Ro,s0=J(()=>{ln(),$i(),Ro=e=>{let t=Re(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=ft(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ee("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&yr(e.extra,"",new WeakSet,(s,o)=>{let u=ft(s,r),l=ft(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ee(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),zo,Oo,No,dn,Bo,Po,o0=J(()=>{ln(),$i(),zo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Oo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},No=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},dn=(e,t,n,r)=>{let i=ft(t,r),a=ft(n,r);Re()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ee(`Can't set a session config entry: ${t} - ${n}.`)},Bo=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",dn(e,"session.disable_quant_qdq","1",n),dn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&dn(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);dn(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=ft(a,n),u=s.length,l=0,h=0;if(u>0){l=Re()._malloc(u*Re().PTR_SIZE),n.push(l),h=Re()._malloc(u*Re().PTR_SIZE),n.push(h);for(let c=0;c<u;c++)Re().setValue(l+c*Re().PTR_SIZE,s[c][0],"*"),Re().setValue(h+c*Re().PTR_SIZE,s[c][1],"*")}await Re()._OrtAppendExecutionProvider(e,o,l,h,u)!==0&&Ee(`Can't append execution provider: ${a}.`)}},Po=async e=>{let t=Re(),n=0,r=[],i=e||{};No(i);try{let a=zo(i.graphOptimizationLevel??"all"),s=Oo(i.executionMode??"sequential"),o=typeof i.logId=="string"?ft(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?ft(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,h),n===0&&Ee("Can't create session options."),i.executionProviders&&await Bo(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);dn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let m=ft(c,r);t._OrtAddFreeDimensionOverride(n,m,p)!==0&&Ee(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&yr(i.extra,"",new WeakSet,(c,p)=>{dn(n,c,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ee("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),cn,Pt,hn,wr,_r,xi,vi,Si,ce=J(()=>{cn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Pt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},hn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},wr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},_r=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},xi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",vi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Si=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ti,Do=J(()=>{li(),Ti=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Uo,Lo,Fo,Go,Ii,Wo,ve,Dt=J(()=>{ce(),Uo=["V","I","W","E","F"],Lo=(e,t)=>{console.log(`[${Uo[e]},${new Date().toISOString()}]${t}`)},Ii=(e,t)=>{Fo=e,Go=t},Wo=(e,t)=>{let n=_r(e),r=_r(Fo);n>=r&&Lo(n,typeof t=="function"?t():t)},ve=(...e)=>{Go&&Wo(...e)}}),qo,Mn,W,br,Vo,Ho,jo,me=J(()=>{qo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Mn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=qo.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(h>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},W=class ii{static size(t){return ii.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ii.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ii.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},br=class hr{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)hr.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return hr.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return hr.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(hr.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[o]=h-a[s],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},Vo=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Mn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Ho=-34028234663852886e22,jo=34028234663852886e22}),ki,Ko=J(()=>{ce(),ki=(e,t)=>new(wr(t))(e)}),Ei,Mi,Ci,Yo,Ai,Xo,Ri,zi,Oi,Zo,Qo,u0=J(()=>{ce(),Dt(),Ei=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Mi=(e,t)=>{if(t==="int32")return e;let n=Ei.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(wr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ci=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Yo=1,Ai=()=>Yo++,Xo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ri=(e,t)=>{let n=Ei.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},zi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ri(this.dataType,this.tensorShape)}destroy(){ve("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Ci(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Oi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Xo.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);ve("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Ri(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Mi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ve("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Ci(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Zo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ai();return this.tensorTrackersById.set(e,new Oi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ve("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){ve("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Ai(),s=new zi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Oi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,n)){ve("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}ve("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new zi({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Qo=(...e)=>new Zo(...e)}),Vn,Jo,eu,l0=J(()=>{ce(),ln(),Ko(),u0(),Dt(),Vn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Jo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},eu=class{constructor(e){this.tensorManager=Qo(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ii(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ve("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ve("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)ve("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Jo(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ve("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Vn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){ve("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Vn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Re().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ve("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ki(n,t)}}registerMLTensor(e,t,n,r){let i=Vn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return ve("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(s){let c=Mi(new Uint8Array(l),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ve("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Vn.get(cn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Ni=J(()=>{}),Bi,$r,xr,tu,nu,Pi,Di,ru,iu,d0=J(()=>{Dt(),Ni(),Bi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),$r=[],xr=e=>Math.ceil(Number(e)/16)*16,tu=e=>{for(let t=0;t<$r.length;t++){let n=$r[t];if(e<=n)return n}return Math.ceil(e/16)*16},nu=1,Pi=()=>nu++,Di=async(e,t,n,r)=>{let i=xr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},ru=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Bi)$r.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=xr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),ve("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=xr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ve("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Pi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ve("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ve("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=tu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:Pi(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ve("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ve("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Di(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Bi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ve("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},iu=(...e)=>new ru(...e)}),au,ke,Ve=J(()=>{au=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ke=e=>new au(e)}),Cn,vr,He,Je,oe,Ge,Ui,An,Ht,se,Hn,K,ae,su,Li,ou,uu,ge=J(()=>{ce(),me(),Cn=64,vr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},He=(e,t=1)=>{let n=vr(e,t);return typeof n=="string"?n:n[0]},Je=(e,t=1)=>{let n=vr(e,t);return typeof n=="string"?n:n[1]},oe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:W.computeStrides(n)})}),t},Ge=e=>e%4===0?4:e%2===0?2:1,Ui=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,An=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Ht=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,se=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Hn=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=vr(t,i),h=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:c,tensor:t},m=P=>typeof P=="string"?P:`${P}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",_=`${y}${e}_shape`,$=`${y}${e}_strides`,x="";for(let P=0;P<s-1;P++)x+=`
    let dim${P} = current / ${se($,P,s)};
    let rest${P} = current % ${se($,P,s)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=P=>(g.offsetToIndices=!0,s<2?P:`o2i_${e}(${P})`),I=[];if(s>=2)for(let P=s-1;P>=0;P--)I.push(`${se($,P,s)} * (indices[${P}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,E=P=>(g.indicesToOffset=!0,s<2?P:`i2o_${e}(${P})`),v=(...P)=>s===0?"0u":`${p.indices}(${P.map(m).join(",")})`,z=(P,j)=>s<2?`${P}`:`${se(P,j,s)}`,N=(P,j,F)=>s<2?`${P}=${F};`:`${se(P,j,s)}=${F};`,X={},U=(P,j)=>{g.broadcastedIndicesToOffset=!0;let F=`${j.name}broadcastedIndicesTo${e}Offset`;if(F in X)return`${F}(${P})`;let G=[];for(let ne=s-1;ne>=0;ne--){let de=j.indicesGet("outputIndices",ne+j.rank-s);G.push(`${z($,ne)} * (${de} % ${z(_,ne)})`)}return X[F]=`fn ${F}(outputIndices: ${j.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${F}(${P})`},V=(P,j)=>(()=>{if(p.storage===p.value)return`${e}[${P}]=${j};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${j}), select(0u, 0xFFFFFFFFu, ${j} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${j}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${j}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),A=P=>(()=>{if(p.storage===p.value)return`${e}[${P}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${P}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${P}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),L=s<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${A(`i2o_${e}(indices)`)};
  }`,R=s<2?"":(()=>{let P=o.map(F=>`d${F}: u32`).join(", "),j=o.map(F=>`d${F}`).join(", ");return`
  fn get_${e}(${P}) -> ${h} {
    return get_${e}ByIndices(${v(j)});
  }`})(),D=(...P)=>{if(P.length!==s)throw new Error(`indices length must be ${s}`);let j=P.map(m).join(",");return s===0?A("0u"):s===1?A(j[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${j})`)},Y=P=>s<2?A(P):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${P})`),O=s<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,Z=s<2?"":(()=>{let P=o.map(F=>`d${F}: u32`).join(", "),j=o.map(F=>`d${F}`).join(", ");return`
  fn set_${e}(${P}, value: ${h}) {
    set_${e}ByIndices(${v(j)}, value);
  }`})();return{impl:()=>{let P=[],j=!1;return g.offsetToIndices&&(P.push(T),j=!0),g.indicesToOffset&&(P.push(M),j=!0),g.broadcastedIndicesToOffset&&(Object.values(X).forEach(F=>P.push(F)),j=!0),g.set&&(P.push(Z),j=!0),g.setByIndices&&(P.push(O),j=!0),g.get&&(P.push(R),j=!0),g.getByIndices&&(P.push(L),j=!0),!a&&j&&P.unshift(`const ${_} = ${p.indices}(${n.join(",")});`,`const ${$} = ${p.indices}(${W.computeStrides(n).join(",")});`),P.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:E,broadcastedIndicesToOffset:U,indices:v,indicesGet:z,indicesSet:N,set:(...P)=>{if(P.length!==s+1)throw new Error(`indices length must be ${s}`);let j=P[s];if(typeof j!="string")throw new Error("value must be string");let F=P.slice(0,s).map(m).join(",");return s===0?V("0u",j):s===1?V(F[0],j):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${F}, ${j})`)},setByOffset:V,setByIndices:(P,j)=>s<2?V(P,j):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${j});`),get:D,getByOffset:A,getByIndices:Y,usage:r,name:e,strides:$,shape:_,rank:s}},K=(e,t,n,r=1)=>Hn(e,t,n,"input",r),ae=(e,t,n,r=1)=>Hn(e,t,n,"output",r),su=(e,t,n)=>Hn(e,t,n,"atomicOutput",1),Li=(e,t,n,r=1)=>Hn(e,t,n,"internal",r),ou=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Cn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},uu=(e,t)=>new ou(e,t)}),lu,Fi,du,cu,hu,pu,lt,fu,mu,jt=J(()=>{ce(),me(),Ve(),ge(),lu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Fi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),du=(e,t)=>W.sortBasedOnPerm(e,Fi(e.length,t)),cu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},hu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},pu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},lt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Fi(r,t),a=du(e.dims,i),s=e.dims,o=a,u=r<2||pu(i,e.dims),l;if(u)return l=g=>{let y=K("input",n,s,4),_=ae("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:h,newPerm:c}=hu(e.dims,i),p=W.areEqual(c,[2,3,1]),m=W.areEqual(c,[3,1,2]);if(h.length===2||p||m){s=p?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,o=[s[1],s[0]];let g=16;return l=y=>{let _=K("a",n,s.length),$=ae("output",n,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${_.getByIndices(`${_.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:y},...oe(s,o)]}},getShaderSource:l}}return l=g=>{let y=K("a",n,s.length),_=ae("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}

  ${cu(i,r,y,_)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...oe(s,o)]}},getShaderSource:l}},fu=(e,t)=>{lu(e.inputs,t.perm),e.compute(lt(e.inputs[0],t.perm))},mu=e=>ke({perm:e.perm})}),gu,yu,wu,_u,bu,$u,xu,vu,Su,Tu,mt,Iu,ku,Eu,Mu,Cu,Au,Ru,zu,Ou,Nu,c0=J(()=>{ce(),me(),ge(),Wi(),jt(),gu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},yu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},wu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},_u={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},bu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},$u=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},xu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},vu=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Su=(e,t)=>{let n=[];if(!vu(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Tu=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=W.size(a),l=W.size(s),h=K("_A",n[0].dataType,o),c=ae("output",i,a),p=64;u===1&&(p=256);let m=`
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

          var bestValue = f32(${wu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${gu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${yu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${_u[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},mt=(e,t,n,r)=>{let i=e.inputs.length===1?n:Gi(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=W.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=Su(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(lt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=bu(o.length,u.dims.length));let[h,c]=$u(u.dims,o),p=h;i.keepDims&&(p=xu(h,s)),e.compute(Tu(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},Iu=(e,t)=>{mt(e,"ReduceMeanShared",t,"mean")},ku=(e,t)=>{mt(e,"ReduceL1Shared",t,"l1")},Eu=(e,t)=>{mt(e,"ReduceL2Shared",t,"l2")},Mu=(e,t)=>{mt(e,"ReduceLogSumExpShared",t,"logSumExp")},Cu=(e,t)=>{mt(e,"ReduceMaxShared",t,"max")},Au=(e,t)=>{mt(e,"ReduceMinShared",t,"min")},Ru=(e,t)=>{mt(e,"ReduceProdShared",t,"prod")},zu=(e,t)=>{mt(e,"ReduceSumShared",t,"sum")},Ou=(e,t)=>{mt(e,"ReduceSumSquareShared",t,"sumSquare")},Nu=(e,t)=>{mt(e,"ReduceLogSumShared",t,"logSum")}}),gt,Bu,Sr,Gi,yt,Pu,Du,Uu,Lu,Fu,Gu,Wu,qu,Vu,Hu,wt,ju,Ku,Yu,Xu,Zu,Qu,Ju,el,tl,nl,Wi=J(()=>{ce(),me(),Ve(),ge(),c0(),gt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Bu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Sr=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,h=l.length,c=W.normalizeAxes(i,h),p=!o&&c.length===0;l.forEach((y,_)=>{p||c.indexOf(_)>=0?s&&u.push(1):u.push(y)});let m=u.length,g=W.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let _=[],$=K("_A",n[0].dataType,h),x=ae("output",a,m),T=r($,x,c),S=T[2];for(let I=0,M=0;I<h;I++)p||c.indexOf(I)>=0?(s&&M++,S=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${T[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${$.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(_.push(`${$.indicesSet("input_indices",I,x.indicesGet("output_indices",M))};`),M++);return`

        ${y.registerUniform("output_size","u32").declareVariables($,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...oe(l,u)]})}},Gi=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),ke({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},yt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Gi(i,n);e.compute(Sr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Bu:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Pu=(e,t)=>{gt(e.inputs),yt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Du=(e,t)=>{gt(e.inputs),yt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Uu=(e,t)=>{gt(e.inputs),yt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Lu=(e,t)=>{gt(e.inputs),yt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Fu=(e,t)=>{gt(e.inputs),yt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Gu=(e,t)=>{gt(e.inputs),yt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Wu=(e,t)=>{gt(e.inputs),yt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},qu=(e,t)=>{gt(e.inputs),yt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Vu=(e,t)=>{gt(e.inputs),yt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Hu=(e,t)=>{gt(e.inputs),yt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},wt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},ju=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gu(e,t):Iu(e,t)},Ku=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Du(e,t):ku(e,t)},Yu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uu(e,t):Eu(e,t)},Xu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lu(e,t):Mu(e,t)},Zu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fu(e,t):Cu(e,t)},Qu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wu(e,t):Au(e,t)},Ju=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qu(e,t):Ru(e,t)},el=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vu(e,t):zu(e,t)},tl=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hu(e,t):Ou(e,t)},nl=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pu(e,t):Nu(e,t)}}),qi,rl,il,Vi,h0=J(()=>{ce(),Ve(),Wi(),qi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},rl=(e,t)=>{qi(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Sr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},il=(e,t)=>{qi(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Sr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Vi=e=>ke(e)}),al,Tr,sl,ol,ul,jn,ll,dl,Hi=J(()=>{ce(),me(),Ni(),ge(),al=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,m=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(p!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let _=g+y,$=-1,x=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:_,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Tr=(e,t,n)=>t&&e?`
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
    `,sl=(e,t,n,r,i,a,s,o)=>{let u=Ge(s?1:a),l=64,h=a/u;h<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:c}],m=He(e.dataType,u),g=Je(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let _=$=>{let x=ae("x",e.dataType,e.dims,u),T=[x],S=s?K("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let I=o?K("total_sequence_length_input",o.dataType,o.dims):void 0;I&&T.push(I);let M=Je(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${$.registerUniforms(E).declareVariables(...T)}
  ${$.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Tr(S,I,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:_,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},ol=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,p,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,_=Ge(a.headSize),$=a.headSize/_,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],I=c&&r&&W.size(r.dims)>0,M=["type","type"];I&&M.push("type"),i&&M.push("type"),o&&M.push("type"),u&&M.push("type");let E=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&E.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=z=>{let N=K("q",t.dataType,t.dims,_),X=K("key",n.dataType,n.dims,_),U=[N,X];if(I){let O=K("past_key",r.dataType,r.dims,_);U.push(O)}i&&U.push(K("attention_bias",i.dataType,i.dims));let V=o?K("seq_lens",o.dataType,o.dims):void 0;V&&U.push(V);let A=u?K("total_sequence_length_input",u.dataType,u.dims):void 0;A&&U.push(A);let L=ae("output",t.dataType,h),R=[L];c&&R.push(ae("present_key",t.dataType,m,_));let D=Je(1,_),Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${z.registerUniforms(Y).declareVariables(...U,...R)}
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
    ${Tr(V,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${D}(0);
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
          value += ${D}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(_){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${_}`)}})()};
        output[outputIdx] = ${L.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${_};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:E,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},ul=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,p,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,h],y=12,_={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&W.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let I=M=>{let E=K("probs",t.dataType,t.dims),v=K("v",n.dataType,n.dims),z=[E,v];x&&z.push(K("past_value",r.dataType,r.dims));let N=s?K("seq_lens",s.dataType,s.dims):void 0;s&&z.push(N);let X=o?K("total_sequence_length_input",o.dataType,o.dims):void 0;o&&z.push(X);let U=[ae("output",t.dataType,g)];c&&U.push(ae("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${M.registerUniforms(V).declareVariables(...z,...U)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Tr(N,X,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:_,programUniforms:$}),getShaderSource:I}},jn=(e,t,n,r,i,a,s,o,u,l,h=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=p>1?s:void 0,g=p>1?o:void 0,y=p>1?l.pastSequenceLength:0,_=y+l.kvSequenceLength,$=u&&W.size(u.dims)>0?u:void 0,x=[t,n];m&&W.size(m.dims)>0&&x.push(m),$&&x.push($),h&&x.push(h),c&&x.push(c);let T=e.compute(ol(p,t,n,m,$,l,y,h,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(sl(T,l.batchSize,l.numHeads,y,l.sequenceLength,_,h,c),{inputs:h&&c?[T,h,c]:[T],outputs:[]});let S=[T,r];g&&W.size(g.dims)>0&&S.push(g),h&&S.push(h),c&&S.push(c),e.compute(ul(p,T,r,g,l,y,h,c),{inputs:S,outputs:p>1?[0,2]:[0]})},ll=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let p=ae("output_q",u[0].dataType,n),m=ae("output_k",u[0].dataType,n),g=ae("output_v",u[0].dataType,n),y=K("input",u[0].dataType,u[0].dims),_=K("weight",u[1].dataType,u[1].dims),$=K("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(y,_,$,p,m,g)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},dl=(e,t)=>{let n=al(e.inputs,t),[r,i,a]=ll(e,n);return jn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),cl,hl,pl,fl,p0=J(()=>{dt(),ce(),me(),Ve(),ge(),cl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},hl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Ge(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=W.size(a)/s,l=r,h=l?a.length:a,c=K("x",e[0].dataType,e[0].dims,s),p=K("scale",e[1].dataType,e[1].dims,o),m=K("bias",e[2].dataType,e[2].dims,o),g=K("inputMean",e[3].dataType,e[3].dims,o),y=K("inputVar",e[4].dataType,e[4].dims,o),_=ae("y",e[0].dataType,h,s),$=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${_.indicesSet("outputIndices","0","0")}
            let cOffset = ${_.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(c,p,m,g,y,_)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${_.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${_.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...oe(a)]:[{type:12,data:u}]})}},pl=e=>ke(e),fl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=pl({...t,outputCount:r});if(Ae.webgpu.validateInputContent&&cl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(hl(n,i))}}),ml,gl,yl,f0=J(()=>{me(),ge(),ml=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gl=e=>{let t=e[0].dims,n=e[0].dims[2],r=W.size(t)/4,i=e[0].dataType,a=K("input",i,t,4),s=K("bias",i,[n],4),o=K("residual",i,t,4),u=ae("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},yl=e=>{ml(e.inputs),e.compute(gl(e.inputs))}}),wl,Te,_l,bl,$l,xl,vl,Sl,Tl,Il,kl,El,Ml,Cl,Al,Rl,Kn,zl,Ir,Ol,Nl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,Wl,ql,Vl,Hl,jl,Kl,Yl,ji,Xl,Ki,Yi,Zl,Ql,Jl,ed,td,nd,Xi=J(()=>{ce(),me(),Ve(),ge(),wl=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=K("inputData",n,[o],4),h=ae("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Te=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(W.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>wl(l,W.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(W.size(l[0].dims)/64/4)},programUniforms:u})}},_l=e=>{e.compute(Te(e.inputs[0],"Abs","abs"))},bl=e=>{e.compute(Te(e.inputs[0],"Acos","acos"))},$l=e=>{e.compute(Te(e.inputs[0],"Acosh","acosh"))},xl=e=>{e.compute(Te(e.inputs[0],"Asin","asin"))},vl=e=>{e.compute(Te(e.inputs[0],"Asinh","asinh"))},Sl=e=>{e.compute(Te(e.inputs[0],"Atan","atan"))},Tl=e=>{e.compute(Te(e.inputs[0],"Atanh","atanh"))},Il=e=>ke(e),kl=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Te(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},El=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ke({min:t,max:n})},Ml=(e,t)=>{let n=t||El(e.inputs),r=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Cl=e=>{e.compute(Te(e.inputs[0],"Ceil","ceil"))},Al=e=>{e.compute(Te(e.inputs[0],"Cos","cos"))},Rl=e=>{e.compute(Te(e.inputs[0],"Cosh","cosh"))},Kn=e=>ke(e),zl=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ir=(e="f32")=>`
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
}`,Ol=e=>{let t=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Ir(t)))},Nl=e=>{e.compute(Te(e.inputs[0],"Exp","exp"))},Bl=e=>{e.compute(Te(e.inputs[0],"Floor","floor"))},Pl=e=>{let t=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Ir(t)))},Dl=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Ul=e=>{e.compute(Te(e.inputs[0],"Not",t=>`!${t}`))},Ll=e=>{e.compute(Te(e.inputs[0],"Neg",t=>`-${t}`))},Fl=e=>{e.compute(Te(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Gl=e=>{let t=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Wl=e=>{e.compute(Te(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},ql=e=>ke(e),Vl=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Hl=e=>{e.compute(Te(e.inputs[0],"Sin","sin"))},jl=e=>{e.compute(Te(e.inputs[0],"Sinh","sinh"))},Kl=e=>{e.compute(Te(e.inputs[0],"Sqrt","sqrt"))},Yl=e=>{e.compute(Te(e.inputs[0],"Tan","tan"))},ji=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Xl=e=>{e.compute(Te(e.inputs[0],"Tanh",ji))},Ki=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ji("v")};
}
`,Yi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Zl=e=>{let t=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"FastGelu",Yi,Ki(t),void 0,e.inputs[0].dataType))},Ql=(e,t)=>{let n=Je(e.inputs[0].dataType);return e.compute(Te(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Jl=e=>{e.compute(Te(e.inputs[0],"Log","log"))},ed=(e,t)=>`
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
`,td=e=>`quick_gelu_impl(${e})`,nd=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"QuickGelu",td,ed(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),rd,id,ad,m0=J(()=>{me(),ge(),Xi(),rd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},id=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=K("input",e[0].dataType,e[0].dims,4),r=K("bias",e[0].dataType,[e[0].dims[2]],4),i=ae("output",e[0].dataType,t,4),a=W.size(t)/4,s=He(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Ir(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},ad=e=>{rd(e.inputs),e.compute(id(e.inputs))}}),sd,od,_t,ud,ld,dd,cd,hd,pd,fd,md,gd,yd,g0=J(()=>{ce(),me(),ge(),sd=(e,t,n,r,i,a,s,o,u,l,h,c)=>{let p,m;typeof o=="string"?p=m=(x,T)=>`${o}((${x}),(${T}))`:typeof o=="function"?p=m=o:(p=o.scalar,m=o.vector);let g=ae("outputData",h,r.length,4),y=K("aData",u,t.length,4),_=K("bData",l,n.length,4),$;if(i)if(a){let x=W.size(t)===1,T=W.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||T?$=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?_.getByOffset("offsetB / 4u"):`${_.type.value}(${_.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),_.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,S,I="")=>{let M=`aData[indexA${S}][componentA${S}]`,E=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,_,g)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},od=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!W.areEqual(o,u),h=o,c=W.size(o),p=!1,m=!1,g=[l];if(l){let y=Mn.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),c=W.size(h);let _=W.size(o)===1,$=W.size(u)===1,x=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(_),g.push($),g.push(x),g.push(T);let S=1;for(let I=1;I<h.length;I++){let M=o[o.length-I],E=u[u.length-I];if(M===E)S*=M;else break}S%4===0?(m=!0,p=!0):(_||$||x||T)&&(p=!0)}else p=!0;return g.push(p),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>sd(y,o,u,h,p,l,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(h)/4)},...oe(o,u,h)]})}},_t=(e,t,n,r,i,a)=>{e.compute(od(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},ud=e=>{_t(e,"Add",(t,n)=>`${t}+${n}`)},ld=e=>{_t(e,"Div",(t,n)=>`${t}/${n}`)},dd=e=>{_t(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},cd=e=>{_t(e,"Mul",(t,n)=>`${t}*${n}`)},hd=e=>{let t=K("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;_t(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},pd=e=>{_t(e,"Sub",(t,n)=>`${t}-${n}`)},fd=e=>{_t(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},md=e=>{_t(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},gd=e=>{_t(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},yd=e=>{_t(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),wd,_d,bd,$d,xd,vd,y0=J(()=>{ce(),me(),Ve(),ge(),wd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},_d=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,bd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},$d=(e,t,n,r)=>{let i=W.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=K(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...oe(e[y].dims));h.push(...oe(n));let c=ae("output",r,n.length),p=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let _=0;_<e.length;_++)y.registerUniform(`sizeInConcatAxis${_}`,"u32");return y.declareVariables(...s,c)})()}

  ${_d(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${bd(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:g}},xd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=W.normalizeAxis(t.axis,r.length);wd(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>W.size(o.dims)>0);e.compute($d(s,i,a,n[0].dataType),{inputs:s})},vd=e=>ke({axis:e.axis})}),pn,fn,mn,Zi,gn=J(()=>{ce(),me(),pn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},fn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},mn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Zi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Ho,jo];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ke,Sd,Qi=J(()=>{Ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Sd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Td,w0=J(()=>{Td=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Yn,Ji,ea=J(()=>{ce(),me(),ge(),gn(),Yn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${se(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,se(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Ji=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],h=s[s.length-1],c=Ge(l),p=Ge(h),m=Ge(u),g=W.size(n)/c/m,y=e.length>2,_=r?r.slice(0,-2):n.slice(0,-2),$=[W.size(_),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:h}];fn(t,x),x.push(...oe(_,s,o)),y&&x.push(...oe(e[2].dims)),x.push(...oe($));let T=S=>{let I=Li("batch_dims",e[0].dataType,_.length),M=K("a",e[0].dataType,s.length,p),E=K("b",e[1].dataType,o.length,c),v=ae("output",e[0].dataType,$.length,c),z=He(v.type.tensor),N=pn(t,v.type.value,z),X=[M,E],U="";if(y){let L=i?c:1;X.push(K("bias",e[2].dataType,e[2].dims.length,L)),U=`${i?`value += bias[col / ${L}];`:`value += ${v.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];mn(t,V);let A=()=>{let L=`var a_data: ${M.type.value};`;for(let R=0;R<p;R++)L+=`
              let b_data${R} = b[(b_offset + (k + ${R}) * uniforms.N + col) / ${c}];`;for(let R=0;R<m;R++){L+=`a_data = a[(a_offset + (row + ${R}) * uniforms.K + k) / ${p}];`;for(let D=0;D<p;D++)L+=`
            values[${R}] = fma(${E.type.value}(a_data${p===1?"":`[${D}]`}), b_data${D}, values[${R}]);
`}return L};return`
  ${S.registerUniforms(V).registerInternalVariables(I).declareVariables(...X,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${Yn("a_indices",M,M.rank-2,I.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${Yn("b_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${U}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:T}}}),Id,kd,ta,na,Ed,ra,Md,kr,ia=J(()=>{ce(),me(),ge(),gn(),ea(),Qi(),Id=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,kd=(e,t)=>e?`
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
        }`,ta=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,c=i?a:u,p=h/t[0],m=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
          ${Id(i,r)}
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

          ${kd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},na=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ed=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ra=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=p/t[1],g=c/t[0],y=a/t[1],_=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${na(i,r)}
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
      ${na(i,r)}
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
      ${Ed(i)}
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
    ${_}
  }
`},Md=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=He(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ke(e,l)} {
      var value = ${Ke(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Yn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
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
        ${Yn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
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
    `},kr=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),c=W.size(h),p=s[s.length-2],m=s[s.length-1],g=o[o.length-1],y=m%4===0&&g%4===0,_=p<=8?[4,1,1]:[4,4,1],$=[8,8,1],x=[Math.ceil(g/$[0]/_[0]),Math.ceil(p/$[1]/_[1]),Math.ceil(c/$[2]/_[2])],T=y?4:1,S=[...u,p,m/T],I=S.length,M=[...l,m,g/T],E=M.length,v=[c,p,g/T],z=[{type:6,data:p},{type:6,data:g},{type:6,data:m}];fn(t,z),z.push(...oe(h,S,M));let N=["rank","rank"],X=e.length>2;X&&(z.push(...oe(e[2].dims)),N.push("rank")),z.push(...oe(v));let U=V=>{let A=h.length,L=Li("batchDims",e[0].dataType,A,1),R=He(e[0].dataType),D=K("a",e[0].dataType,I,T),Y=K("b",e[1].dataType,E,T),O=ae("result",e[0].dataType,v.length,T),Z=[D,Y];if(X){let ne=i?T:1;Z.push(K("bias",e[2].dataType,e[2].dims.length,ne))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];mn(t,P);let j=He(O.type.tensor),F=pn(t,O.type.value,j),G=Md(T,X,F,[L,D,Y,O],i);return`
  ${V.registerUniforms(P).registerInternalVariables(L).declareVariables(...Z,O)}
  ${G}
  ${y?ta(_,$,R,L):ra(_,$,R,L)}
                   `};return{name:"MatMul",shaderCache:{hint:`${_};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:z}),getShaderSource:U}}}),Cd,Ad,_0=J(()=>{ce(),Dt(),ge(),gn(),Qi(),w0(),ia(),Cd=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let h=z=>{switch(z){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${z} is not supported.`)}},c=z=>{switch(z){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${z} is not supported.`)}},p=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=e?"row":"col",$=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${_} / outWidth;
    let outCol = ${_} % outWidth;

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
    return ${Ke(o,l)}(0.0);`,I=Ke(u,l),M=Ke(e?s:o,l),E=Ke(e?o:s,l),v=pn(a,I,l);return`
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
      ${Sd(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ad=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&g%4===0,_=l?g:p*m,$=l?p*m:g,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(_/x[0]/T[0]),Math.ceil($/x[1]/T[1]),Math.ceil(c/x[2]/T[2])];ve("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=y?l&&h%4!==0?3:4:1,M=x[1]*T[1],E=x[0]*T[0],v=Math.max(x[0]*I,x[1]),z=r%M===0,N=i%E===0,X=a%v===0,U=y?[I,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];fn(t,V),V.push(...oe(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(V.push(...oe(e[2].dims)),A.push("rank")),V.push(...oe(n));let L=R=>{let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];mn(t,D);let Y=y?4:1,O=He(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${O}>`:O}) {
        result[flatIndex] = ${y?`vec4<${O}>`:O}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${O}>`:O}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,P=K("x",e[0].dataType,e[0].dims.length,I===3?1:I),j=K("w",e[1].dataType,e[1].dims.length,Y),F=[P,j],G=ae("result",e[0].dataType,n.length,Y);if(s){let ne=K("bias",e[2].dataType,e[2].dims.length,Y);F.push(ne),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${O}>`:O} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Td("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${R.registerUniforms(D).declareVariables(...F,G)}
        ${Z}
        ${Cd(l,z,N,X,s,t,U[0],U[1],U[2],O)}
        ${y?ta(T,x,O,void 0,!l,v):ra(T,x,O,void 0,!l,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${z};${N};${X};${M};${E};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:V}),getShaderSource:L}}}),Rd,aa,Xn,zd,sa,Od,Nd,Bd,b0=J(()=>{ce(),Dt(),me(),ge(),gn(),Qi(),Rd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},aa=e=>typeof e=="number"?[e,e,e]:e,Xn=(e,t)=>t<=1?e:e+(e-1)*(t-1),zd=(e,t,n,r=1)=>{let i=Xn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},sa=(e,t,n,r,i)=>{i==null&&(i=zd(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},Od=(e,t,n,r,i,a,s,o,u,l)=>{let h,c,p,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=sa([t,n,r,1],[o,u,l],1,[i,a,s],e);c=g[0],p=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,_,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=sa([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);c=g[0],p=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,y=(p-1)*a+u-n,_=(m-1)*s+l-r,$=Math.floor(g/2),x=g-$,T=Math.floor(y/2),S=y-T,I=Math.floor(_/2),M=_-I;h={top:T,bottom:S,left:I,right:M,front:$,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:p,outWidth:m}},Nd=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,h,c;if(s==="channelsLast")[o,u,l,h,c]=e;else if(s==="channelsFirst")[o,c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[p,,m,g,y]=t,[_,$,x]=aa(n),[T,S,I]=aa(r),M=Xn(m,T),E=Xn(g,S),v=Xn(y,I),{padInfo:z,outDepth:N,outHeight:X,outWidth:U}=Od(i,u,l,h,_,$,x,M,E,v),V=a?p*c:p,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,V,N,X,U]:s==="channelsLast"&&(A=[o,N,X,U,V]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:h,inChannels:c,outDepth:N,outHeight:X,outWidth:U,outChannels:V,padInfo:z,strideDepth:_,strideHeight:$,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:E,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:I,inShape:e,outShape:A,filterShape:t}},Bd=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((_,$)=>$)},l=[Math.ceil(Rd(u.x.map(_=>n[_]))/o[0]),1,1];ve("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,c=W.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];fn(t,p),p.push(...oe(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(p.push(...oe(e[2].dims)),m.push("rank")),p.push(...oe(n));let y=_=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];mn(t,$);let x=1,T=He(e[0].dataType),S=K("x",e[0].dataType,e[0].dims.length,h),I=K("W",e[1].dataType,e[1].dims.length,x),M=[S,I],E=ae("result",e[0].dataType,n.length,x),v="";if(g){let X=K("bias",e[2].dataType,e[2].dims.length,x);M.push(X),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?se("coords",4,5):se("coords",1,5)}];
        }`}let z=Ke(h,T),N=pn(t,z,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${_.registerUniforms($).declareVariables(...M,E)}
          ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Pd,Dd,$0=J(()=>{ce(),me(),ge(),gn(),Pd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,c=u&&h>=4?Ge(l):1,p=W.size(n)/c,m=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];fn(t,m),m.push(...oe(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...oe([n[0],n[1],n[2],n[3]/c]));let y=_=>{let $=ae("output",e[0].dataType,n.length,c),x=He($.type.tensor),T=pn(t,$.type.value,x),S=K("x",e[0].dataType,s.length),I=K("w",e[1].dataType,o.length,c),M=[S,I];i&&M.push(K("b",e[2].dataType,e[2].dims,c));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];mn(t,E);let v=u?`
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
  ${_.registerUniforms(E).declareVariables(...M,$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},Dd=(e,t,n,r)=>{let i=e.length>2,a=Ge(n[3]),s=Ge(n[2]),o=W.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];fn(t,c),c.push(...oe(u,l,h));let p=(s-1)*t.strides[1]+l[1],m=g=>{let y=ae("output",e[0].dataType,h.length,a),_=He(y.type.tensor),$=pn(t,y.type.value,_),x=K("x",e[0].dataType,u.length,a),T=K("w",e[1].dataType,l.length,a),S=[x,T];i&&S.push(K("b",e[2].dataType,e[2].dims,a));let I=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return mn(t,M),`
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),Ud,Er,Ld,Mr,oa,ua,Fd,Gd,la,x0=J(()=>{me(),_0(),b0(),ia(),$0(),gn(),ea(),jt(),Ud=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],h=t.slice(2).map((p,m)=>p+(p-1)*(n[m]-1)),c=o.map((p,m)=>p+r[m]+r[m+u]).map((p,m)=>Math.floor((p-h[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,l),c},Er=[2,3,1,0],Ld=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Mr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();br.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},oa=e=>{let t=Zi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},ua=(e,t,n,r)=>{let i=n.format==="NHWC",a=Ud(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let E=e.kernelCustomData.wT??e.compute(lt(t[1],Er),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),M.push(E)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Dd(M,n,a,r),{inputs:M}):e.compute(Pd(M,n,a,r),{inputs:M});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&h===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],E,v,z,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(lt(t[1],Er),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let A=o*u*l;E=t[0].reshape([1,M,A]),v=V.reshape([1,A,g]),z=[1,M,g]}else E=t[0].reshape([M,o*u,l]),v=V.reshape([1,l,g]),z=[M,p*m,g];N.push(E),N.push(v)}else E=t[0].reshape([M,l,o*u]),v=t[1].reshape([1,g,l]),z=[M,g,p*m],N.push(v),N.push(E);s&&N.push(t[2]);let X=z[2],U=N[0].dims[N[0].dims.length-1];X<8&&U<8?e.compute(Ji(N,n,a,z,i,r),{inputs:N}):e.compute(kr(N,n,a,z,i,r),{inputs:N});return}let _=!0,$=e.kernelCustomData.wT??e.compute(lt(t[1],Er),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let x=[t[0],$];s&&x.push(t[2]);let T=i?p*m:g,S=i?g:p*m,I=h*c*l;e.compute(Ad(x,n,a,T,S,I,s,_,r),{inputs:x})},Fd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Mr({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);ua(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Gd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Mr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=Nd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Bd(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},la=(e,t)=>{if(Ld(e.inputs,t),e.inputs[0].dims.length===3)Fd(e,t);else if(e.inputs[0].dims.length===5)Gd(e,e.inputs,t);else{let n=Mr(t,e.inputs);ua(e,e.inputs,n)}}}),Wd,v0=J(()=>{ce(),Dt(),me(),ge(),Wd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],h=a?Ge(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-p,g=a?Ge(l):1,y=a?l===1?h:g:1,_=W.size(i)/g,$=[Math.ceil(_/64),1,1];ve("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],I=[t.dilations[0],t.dilations[1]],M=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],E=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:_},{type:12,data:T},{type:12,data:S},{type:12,data:I},{type:12,data:M},{type:6,data:E},{type:12,data:p},{type:12,data:u},{type:12,data:l},...oe(e[0].dims,e[1].dims)];r&&(v.push(...oe(e[2].dims)),x.push("rank")),v.push(...oe(i));let z=N=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],U=He(e[0].dataType),V=a?1:2,A=a?2:3,L=a?3:1,R=K("W",e[1].dataType,e[1].dims.length,y),D=K("Dy",e[0].dataType,e[0].dims.length,h),Y=[D,R];r&&Y.push(K("bias",e[2].dataType,[i[L]].length,g));let O=ae("result",e[0].dataType,i.length,g),Z=()=>{let F="";if(c)h===4?F+=`
        let xValue = ${D.getByOffset("x_offset")};
        let wValue = ${R.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?F+=`
          dotProd = dotProd + dot(vec4<${U}>(${D.getByOffset("x_offset")}, ${D.getByOffset("x_offset + 1u")}), vec4<${U}>(${R.getByOffset("w_offset")}, ${R.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(F+=`
          dotProd = dotProd + dot(vec4<${U}>(${D.getByOffset("x_offset")}, ${D.getByOffset("x_offset + 1u")}, ${D.getByOffset("x_offset + 2u")}, ${D.getByOffset("x_offset + 3u")}), vec4<${U}>(${R.getByOffset("w_offset")}, ${R.getByOffset("w_offset + 1u")}, ${R.getByOffset("w_offset + 2u")}, ${R.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(F+=`
                  let xValue = ${a?D.getByOffset(`${D.indicesToOffset(`${D.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):D.get("batch","inputChannel","idyR","idyC")};
        `,h===1)F+=`
          let w_offset = ${R.indicesToOffset(`${R.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${R.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<h;G++)F+=`
            let wValue${G} = ${R.getByOffset(`${R.indicesToOffset(`${R.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return F},P=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let F="";if(h===1){F+="dotProd = dotProd";for(let G=0;G<m;G++)F+=`
            + ${D.getByOffset(`x_offset + ${G}`)} * ${R.getByOffset(`w_offset + ${G}`)}`;F+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);F+=`
          let xValue = ${D.getByOffset("x_offset")};
          let wValue = ${R.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return F},j=`
            let outputIndices = ${O.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${O.indicesGet("outputIndices",0)};
            let d1 = ${O.indicesGet("outputIndices",L)};
            let r = ${O.indicesGet("outputIndices",V)};
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
              let dyR = (${U}(dyRCorner) + ${U}(wR)) / ${U}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${U}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${U}(dyCCorner) + ${U}(wC)) / ${U}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${U}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${D.indicesToOffset(`${D.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${R.indicesToOffset(`${R.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${Z()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${O.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(X).declareVariables(...Y,O)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${j}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${g}${c}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:z}}}),qd,Vd,Hd,da,jd,Kd,ca,Yd,Xd,S0=J(()=>{v0(),gn(),jt(),qd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Vd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Hd=(e,t,n,r,i,a,s,o,u,l)=>{let h=e.length-2,c=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],m=t[o?3:1]*i;for(let g=0,y=e.length-h-(o?1:0);g<h;++g,++y){let _=e[y],$=c?_*s[g]:l[g],x=qd(_,s[g],a[g],t[y],n[g],$);Vd(x,r,a,g,g+h),c&&l.push(s[g]*(_-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+h])}l.splice(0,0,p),l.splice(o?3:1,0,m)},da=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}Hd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),h},jd=e=>{let t=Zi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:h,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Kd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ca=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(lt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Wd(a,n,r),{inputs:a})},Yd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=da({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);ca(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Xd=(e,t)=>{if(Kd(e.inputs,t),e.inputs[0].dims.length===3)Yd(e,t);else{let n=da(t,e.inputs);ca(e,e.inputs,n)}}}),Zd,Qd,Jd,T0=J(()=>{ce(),me(),Ve(),ge(),Zd=(e,t,n,r)=>{let i=W.size(t),a=t.length,s=K("input",e,a),o=ae("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=W.normalizeAxis(u,a),h=c=>{let p=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=se("uniforms.input_shape","uniforms.axis",a),g=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?m:p+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...oe(t,t)]}),getShaderSource:h}},Qd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Zd(r,n,i,t),{inputs:[0]})},Jd=e=>{let t=e.exclusive===1,n=e.reverse===1;return ke({exclusive:t,reverse:n})}}),ec,tc,nc,rc,ic,I0=J(()=>{ce(),me(),Ve(),ge(),ec=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},tc=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},nc=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),p=c.dims.length,m=e.dataType,g=K("a",m,p),y=ae("output",m,p),_=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,y)}

  ${tc(o,p,g,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=W.size(x),S=c.dims,I=W.sortBasedOnPerm(S,o);return{outputs:[{dims:x,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...oe(S,I)]}},getShaderSource:_}},rc=(e,t)=>{ec(e.inputs),e.compute(nc(e.inputs[0],t))},ic=e=>ke({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Cr,Zn,ha,ac,sc,oc,uc,pa,lc,dc,cc,k0=J(()=>{ce(),me(),Ve(),ge(),Cr="[a-zA-Z]|\\.\\.\\.",Zn="("+Cr+")+",ha="^"+Zn+"$",ac="("+Zn+",)*"+Zn,sc="^"+ac+"$",oc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},uc=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(sc)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(ha)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(Zn)))throw new Error("Invalid RHS");(i=r.match(RegExp(Cr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(ha))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Cr,"g")),l=new oc(r);return u==null||u.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else l.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[o++],r)}),l}},pa=e=>e+"_max",lc=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>K(`input${h}`,t,l)),a=W.size(r),s=ae("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],c="var prod = 1.0;",p="var sum = 0.0;",m="sum += prod;",g=[],y=[],_=[],$=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,I)=>{var M;if(n.rhs.symbolToIndices.has(I)){let E=(M=n.rhs.symbolToIndices.get(I))==null?void 0:M[0];E!==void 0&&n.lhs.forEach((v,z)=>{if(S.inputIndices.includes(z)){let N=v.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(X=>{h.push(`${i[z].indicesSet(`input${z}Indices`,X,s.indicesGet("outputIndices",E))}`)})}})}else n.lhs.forEach((E,v)=>{if(S.inputIndices.includes(v)){let z=E.symbolToIndices.get(I);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${I}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${pa(I)}; ${I}++) {`),_.push("}")});let T=x?[...h,`let sum = ${i.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,p,...y,...g,c,...$,m,..._];return`
            ${l.registerUniforms(o.map(S=>({name:`${pa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((c,p)=>[...oe(c)]).reduce((c,p)=>c.concat(p),l);return h.push(...oe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},dc=(e,t)=>{let n=new uc(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(lc(i,e.inputs[0].dataType,n,r))},cc=e=>{let t=e.equation.replace(/\s+/g,"");return ke({equation:t})}}),hc,fa,pc,fc,mc,E0=J(()=>{ce(),me(),ge(),hc=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},fa=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},pc=(e,t)=>e.length>t.length?fa(e,t):fa(t,e),fc=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=pc(t,n),i=e[0].dataType,a=i===9||W.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(W.size(r)/o),l=c=>{let p=K("input",i,t.length,s),m=ae("output",i,r.length,o),g;if(i===9){let y=(_,$,x="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${p.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${_}[${$}] = ${x}(${p.getByOffset(`index${$}`)}[component${$}]);
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
    ${g}`},h=[{type:12,data:u},...oe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},mc=e=>{hc(e.inputs),e.compute(fc(e.inputs),{inputs:[0]})}}),gc,yc,M0=J(()=>{ce(),me(),ge(),Xi(),gc=e=>{let t=e[0].dataType,n=W.size(e[0].dims),r=W.size(e[1].dims),i=r%4===0,a=s=>{let o=K("x",t,[1],4),u=K("bias",t,[1],4),l=ae("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(o,u,l)}

    ${Ki(Je(t))}

    ${s.mainStart(Cn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Yi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Cn/4)}})}},yc=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?Zl(e):e.compute(gc(e.inputs))}}),wc,_c,bc,$c,C0=J(()=>{ce(),me(),Ve(),ge(),wc=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},_c=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=W.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(W.size(s)/u),h=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...oe(e[0].dims,e[1].dims,s)],c=p=>{let m=K("data",e[0].dataType,e[0].dims.length,u),g=K("inputIndices",e[1].dataType,e[1].dims.length),y=ae("output",e[0].dataType,s.length,u),_=x=>{let T=r.length,S=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let I=0;I<T;I++)S+=`${T>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let I=0,M=0;I<i;I++)I===a?(S+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,M+=T):(S+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return S},$;if(e[0].dataType===9){let x=(T,S,I="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${_(S)};
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
      ${_("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},bc=e=>ke({axis:e.axis}),$c=(e,t)=>{let n=e.inputs;wc(n),e.compute(_c(e.inputs,t))}}),xc,vc,Sc,A0=J(()=>{ce(),me(),ge(),xc=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],h=[a];l.push(...oe(t.dims,h));let c=p=>{let m=K("indices_data",t.dataType,t.dims.length),g=ae("input_slice_offsets_data",12,1,1),y=[m,g],_=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(...y)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},vc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=W.sizeToDimension(a,a.length-1),u=W.sizeFromDimension(r,t.batchDims+s),l=W.sizeToDimension(r,t.batchDims),h=W.sizeFromDimension(r,t.batchDims),c=o/l,p=new Array(s),m=u;for(let S=0;S<s;++S)p[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=xc(e,n[1],p,t.batchDims,r,o,c,h,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let _=a.slice(0,-1).concat(r.slice(y)),$=W.size(_),x=[{type:12,data:$},{type:12,data:u},...oe(n[0].dims,g.dims,_)],T=S=>{let I=K("data",n[0].dataType,n[0].dims.length),M=K("slice_offsets",12,g.dims.length),E=ae("output",n[0].dataType,_.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,M,E)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:_,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],g]})},Sc=e=>({batchDims:e.batch_dims,cacheKey:""})}),Tc,Ic,kc,Ec,R0=J(()=>{ce(),me(),Ve(),ge(),Tc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=W.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ic=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=W.normalizeAxis(t.gatherAxis,i),s=W.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=W.size(o),l=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...oe(...e.map((m,g)=>m.dims),o)],p=m=>{let g=K("data",e[0].dataType,e[0].dims.length),y=K("inputIndices",e[1].dataType,e[1].dims.length),_=K("scales",e[2].dataType,e[2].dims.length),$=e.length>3?K("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=ae("output",l,o.length),T=[g,y,_];$&&T.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Je(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},kc=(e,t)=>{let n=e.inputs;Tc(n,t),e.compute(Ic(e.inputs,t))},Ec=e=>ke({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Mc,Cc,Ac,Rc,z0=J(()=>{ce(),me(),Ve(),ge(),Mc=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Cc=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=W.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),h=W.size(l),c=K("input",r,i),p=K("indicesInput",s,a.length),m=ae("output",r,l.length),g=[{type:12,data:h},{type:6,data:u},{type:12,data:o}];return g.push(...oe(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y=>`
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
  }`}},Ac=e=>ke({axis:e.axis}),Rc=(e,t)=>{let n=e.inputs;Mc(n),e.compute(Cc(e.inputs,t))}}),zc,Oc,Nc,Bc,O0=J(()=>{ce(),me(),ge(),zc=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Oc=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=Vo.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),c=!0,p=W.size(o),m=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...oe(e[2].dims)),g.push("rank")),m.push(...oe(o));let y=$=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=K("a",e[0].dataType,e[0].dims),I=K("b",e[1].dataType,e[1].dims),M=S.type.value,E=null,v=[S,I];e.length===3&&(E=K("c",e[2].dataType,e[2].dims.length),v.push(E));let z=ae("output",e[0].dataType,o.length);v.push(z);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(N).declareVariables(...v)}

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
  }`},_=$=>{let x=K("a",e[0].dataType,e[0].dims),T=K("b",e[1].dataType,e[1].dims),S=null,I=[x,T];e.length===3&&(S=K("c",e[2].dataType,e[2].dims.length),I.push(S));let M=ae("output",e[0].dataType,o.length);I.push(M);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",z="";t.transA&&t.transB?(z=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
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

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:m}),getShaderSource:_}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},Nc=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Bc=(e,t)=>{zc(e.inputs),e.compute(Oc(e.inputs,t))}}),kt,Ut,yn,wn,Pc,Dc,Uc,Lc,Fc,Gc,Wc,qc,Vc,Hc,N0=J(()=>{ce(),me(),Ve(),ge(),[kt,Ut,yn,wn]=[0,1,2,3],Pc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Dc=`
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
`,Uc=e=>`
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
`,Lc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Fc=e=>`
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
`,Gc=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${kt}] = batch;
     indices[${Ut}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${yn}] = u32(r);
            indices[${wn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${yn}] = u32(clamp(r, 0, H - 1));
          indices[${wn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${yn}] = gs_reflect(r, border[1], border[3]);
          indices[${wn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Wc=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${kt}], indices[${Ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${kt}], indices[${Ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${kt}], indices[${Ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${kt}], indices[${Ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${kt}], indices[${Ut}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${kt}], indices[${Ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,qc=(e,t)=>{let n=K("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=K("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[kt,Ut,yn,wn]=[0,3,1,2]);let s=ae("output",e[0].dataType,a.length),o=n.type.value,u=W.size(a),l=[{type:12,data:u},...oe(e[0].dims,r,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${Dc}
  ${Uc(o)}
  ${Lc(t)}
  ${Fc(t)}
  ${Gc(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${yn}]);
      let W_in = i32(uniforms.x_shape[${wn}]);

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
      var grid_indices = vec3<u32>(indices[${kt}], indices[${yn}], indices[${wn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Wc(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=W.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},Vc=(e,t)=>{Pc(e.inputs),e.compute(qc(e.inputs,t))},Hc=e=>ke({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),nt,jc,Kc,ma,Yc,Qn,Xc,Zc=J(()=>{ce(),me(),Ve(),Ni(),Hi(),ge(),jt(),nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,jc=(e,t)=>{let n=e[0],r=nt(e,1),i=nt(e,2),a=nt(e,3),s=nt(e,4),o=nt(e,5),u=nt(e,6),l=nt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,y=0,_=Math.floor(p/t.numHeads);if(u&&l&&W.size(u.dims)&&W.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==_)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==_)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&W.size(u.dims)||l&&W.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&W.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&W.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,T=0;if(s&&W.size(s.dims)>0){T=8;let E=s.dims;throw E.length===1?E[0]===h?T=1:E[0]===3*h+2&&(T=3):E.length===2&&E[0]===h&&E[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=p;if(i&&W.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],S=!0}}let M=!1;if(s&&W.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&W.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:_,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:M,passPastInKv:S,qkvFormat:$}},Kc=e=>ke({...e}),ma=ke({perm:[0,2,1,3]}),Yc=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=W.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],h=c=>{let p=ae("qkv_with_bias",t.dataType,o),m=K("qkv",t.dataType,o),g=K("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(m,g,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},Qn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&W.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Yc(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(lt(u,ma.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(lt(u,ma.perm),{inputs:[u],outputs:[-1]})[0]},Xc=(e,t)=>{let n=jc(e.inputs,t),r=e.inputs[0],i=nt(e.inputs,1),a=nt(e.inputs,2),s=nt(e.inputs,3),o=nt(e.inputs,4),u=nt(e.inputs,5),l=nt(e.inputs,6),h=nt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=Qn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return jn(e,p,i,a,o,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=Qn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=Qn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);jn(e,p,m,g,o,void 0,l,h,u,n)}}),Qc,Jc,eh,th,ga,nh,rh,ih=J(()=>{ce(),me(),Ve(),ge(),Qc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Jc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),ke({numOutputs:r,axis:t.axis,splitSizes:n})},eh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${se("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,th=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},ga=(e,t)=>{let n=e[0].dims,r=W.size(n),i=e[0].dataType,a=W.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=K("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],c=0,p=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let y=n.slice();y[a]=t.splitSizes[g],h.push(y),s[g]=ae(`output${g}`,i,y.length),l.push({dims:h[g],dataType:e[0].dataType})}p.push({type:12,data:u},...oe(n,...h));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${eh(u.length)}
  ${th(s)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},nh=(e,t)=>{Qc(e.inputs);let n=e.inputs.length===1?t:Jc(e.inputs,t);e.compute(ga(e.inputs,n),{inputs:[0]})},rh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return ke({axis:t,numOutputs:r,splitSizes:n})}}),ah,Ar,sh,oh=J(()=>{ce(),me(),Ve(),ge(),ah=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!W.areEqual(r.dims,[])&&!W.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!W.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],c=W.sizeFromDimension(n.dims,1)/l,p=o===0?i.dims[1]*2:c/s;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Ar=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=W.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,h=e[2].dims[1],c=i===0?h*2:l/r,p=new Array(s,u,l/c,c-h),m=W.computeStrides(p),g=[{type:1,data:a},{type:12,data:p},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...oe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=_=>{let $=K("input",e[0].dataType,e[0].dims.length),x=K("position_ids",e[1].dataType,e[1].dims.length),T=K("cos_cache",e[2].dataType,e[2].dims.length),S=K("sin_cache",e[3].dataType,e[3].dims.length),I=ae("output",e[0].dataType,e[0].dims.length);return _.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${_.declareVariables($,x,T,S,I)}

        ${_.mainStart(Cn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("size")}

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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ke({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(p)/Cn)},programUniforms:g})}},sh=(e,t)=>{ah(e.inputs,t),e.compute(Ar(e.inputs,t))}}),uh,lh,ya,dh,ch,B0=J(()=>{Ve(),ce(),Hi(),Zc(),ih(),jt(),oh(),ge(),uh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,m=!r||r.dims.length===0,g=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=g*t.numHeads);let y=a&&a.dims.length!==0,_=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&_){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||_)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let x=0,T=!1,S=t.kvNumHeads?g*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=I.dims.reduce((E,v)=>E*v,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let E=0;E<I.dims.length;E++)if(I.dims[E]!==1&&I.dims[E]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${E}] = ${I.dims[E]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},lh=ke({perm:[0,2,1,3]}),ya=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(lt(r,lh.perm),{inputs:[r],outputs:[-1]})[0]),r},dh=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=h=>{let c=K("seq_lens",n.dataType,n.dims),p=K("total_seq_lens",r.dataType,r.dims),m=ae("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},ch=(e,t)=>{var S;let n=uh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=ke({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,m,g]=!i&&!a?e.compute(ga([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,_;if(t.doRotary){let I=e.compute(dh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],E=e.inputs[8],v=ke({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),z=[p,I,M,E],N=[-1];y=e.compute(Ar(z,v),{inputs:z,outputs:N})[0],z.splice(0,1,m);let X=ke({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});_=e.compute(Ar(z,X),{inputs:z,outputs:N})[0]}let $=Qn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=ya(e,t.doRotary?_:m,n),T=ya(e,g,n);jn(e,$,x,T,void 0,void 0,s,o,void 0,n,u,l)}}),wa,hh,ph,fh,P0=J(()=>{ce(),me(),jt(),ge(),wa=(e,t,n,r,i,a,s,o)=>{let u=Ge(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,c=i*s,p=64;c===1&&(p=256);let m=[i,s,a/u],g=[i,s,2],y=["rank","type","type"],_=[];_.push(...oe(m,g));let $=x=>{let T=K("x",t.dataType,3,u),S=K("scale",n.dataType,n.dims),I=K("bias",r.dataType,r.dims),M=ae("output",1,3,2),E=[T,S,I,M];return`
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
      let sum_final = ${Ht("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Ht("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:_}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},hh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=W.sizeFromDimension(r,a),l=Ge(u),h=W.size(i)/l,c=wa(e,t[0],t[1],t[2],s,u,o,n.epsilon),p=[s,o,u/l],m=[s,o],g=["type","none"],y=_=>{let $=K("x",t[0].dataType,p.length,l),x=K("scale_shift",1,m.length,2),T=ae("output",t[0].dataType,p.length,l),S=[$,x,T];return`
  ${_.registerUniform("output_size","u32").declareVariables(...S)}
  ${_.mainStart()}
  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...oe(p,m,p)]}),getShaderSource:y},{inputs:[t[0],c]})},ph=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=W.sizeFromDimension(r,1)/s,u=Ge(s),l=W.size(i)/u,h=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],p=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)p=p||r[$+1]!==1,m.push($+1);p=p&&r[r.length-1]!==1;let g=p?e.compute(lt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,x)=>r[m[x]])),y=wa(e,g,t[1],t[2],a,o,s,n.epsilon),_=$=>{let x=He(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=E=>{let v=E===0?"x":"y",z=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${z}(scale.${v}))`;case 2:return`vec2<${x}>(${z}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${z}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=K("input",t[0].dataType,t[0].dims,u),M=ae("output",t[0].dataType,i,u);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_},{inputs:[t[0],y]})},fh=(e,t)=>{t.format==="NHWC"?ph(e,e.inputs,t):hh(e,e.inputs,t)}}),mh,gh,yh,D0=J(()=>{ce(),me(),ge(),mh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},gh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=W.normalizeAxis(t.axis,i.length),l=W.sizeToDimension(i,u),h=W.sizeFromDimension(i,u),c=W.size(a.dims),p=s?W.size(s.dims):0;if(c!==h||s&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let m=[];for(let I=0;I<i.length;++I)I<u?m.push(i[I]):m.push(1);let g=Ge(h),y=["type","type"],_=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/g)},{type:1,data:t.epsilon}];s&&y.push("type");let $=n>1,x=n>2,T=I=>{let M=He(e[0].dataType),E=[K("x",e[0].dataType,e[0].dims,g),K("scale",a.dataType,a.dims,g)];s&&E.push(K("bias",s.dataType,s.dims,g)),E.push(ae("output",e[0].dataType,o,g)),$&&E.push(ae("mean_data_output",1,m)),x&&E.push(ae("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(v).declareVariables(...E)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ui("f32",g)};
    var mean_square_vector = ${Ui("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${An(M,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ht("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ht("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${An(M,g,"x[j + offset]")};
      let f32scale = ${An(M,g,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${An(M,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),x&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:_}),getShaderSource:T}},yh=(e,t)=>{mh(e.inputs),e.compute(gh(e.inputs,t,e.outputCount))}}),wh,_h,U0=J(()=>{me(),ea(),ia(),wh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},_h=e=>{wh(e.inputs);let t=Mn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ji(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=W.size(e.inputs[0].dims.slice(0,-2)),s=W.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[o,u];e.compute(kr(h,{activation:""},t,l),{inputs:h})}else e.compute(kr(e.inputs,{activation:""},t))}}}),bh,$h,xh,vh,Sh,L0=J(()=>{ce(),me(),Ve(),ge(),bh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!W.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(W.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(W.size(u)!==l)throw new Error("zeroPoints input size error.")}},$h=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=W.size(o),l=e[1].dims[2]/4,h=e[0].dataType,c=Ge(t.k),p=Ge(l),m=Ge(s),g=o.concat([i,s]),y=i>1&&s/m%2===0?2:1,_=W.size(g)/m/y,$=64,x=[],T=[u,i,a/c],S=W.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),x.push(...oe(T)),x.push(...oe(S)),x.push(...oe(e[2].dims)),e.length===4&&x.push(...oe(W.convertShape(e[3].dims)));let I=[u,i,s/m];x.push(...oe(I));let M=E=>{let v=T.length,z=K("a",e[0].dataType,v,c),N=K("b",12,S.length,p),X=K("scales",e[2].dataType,e[2].dims.length),U=[z,N,X],V=e.length===4?K("zero_points",12,e[3].dims.length):void 0;V&&U.push(V);let A=I.length,L=ae("output",e[0].dataType,A,m),R=He(e[0].dataType),D=(()=>{switch(c){case 1:return`array<${R}, 8>`;case 2:return`mat4x2<${R}>`;case 4:return`mat2x4<${R}>`;default:throw new Error(`${c}-component is not supported.`)}})(),Y=Math.floor(32/t.bits),O=Math.floor(Y/8),Z=()=>{let F="";for(let G=0;G<O;G++){let ne=G*t.bits*4,de=ne+t.bits;F+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?z.indicesToOffset(`${z.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${D};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/c}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${z.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let ie=0;ie<m*y;ie++)F+=`
            b_value = ${p===1?`b${ie}_data`:`b${ie}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ne}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${de}u) & b_mask);`}
            b_quantized_values = ${D}(${Array.from({length:4},(ye,Be)=>`${R}(b_value_lower[${Be}]), ${R}(b_value_upper[${Be}])`).join(", ")});
            b_dequantized_values = ${c===1?`${D}(${Array.from({length:8},(ye,Be)=>`(b_quantized_values[${Be}] - ${V?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${D}(${Array(8).fill(`${V?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/c},(ye,Be)=>`${c===1?`a_data${G>0?G:""}[${Be}] * b_dequantized_values[${Be}]`:`dot(a_data${G>0?G:""}[${Be}], b_dequantized_values[${Be}])`}`).join(" + ")};
          `}return F},P=()=>{let F=`
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
            let zero_point = ${R}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<m*y;G++)F+=`
            let scale${G} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${R}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return F},j=()=>{let F=`col_index = col * ${m};`;for(let G=0;G<m*y;G++)F+=`
            let b${G}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return F+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${D};
            var b_dequantized_values: ${D};`,F};return`
        var<workgroup> workgroup_shared: array<${L.type.value}, ${y*$}>;
        ${E.declareVariables(...U,L)}
        ${E.mainStart([$,1,1])}
          let output_indices = ${L.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${P()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${j()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${Z()}
                word_offset += ${Y/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${L.setByIndices(`${L.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:_},programUniforms:x}),getShaderSource:M}},xh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=W.size(o),l=e[1].dims[2]/4,h=e[0].dataType,c=Ge(t.k),p=Ge(l),m=o.concat([i,s]),g=128,y=s%8===0?8:s%4===0?4:1,_=g/y,$=Math.floor(32/t.bits),x=_*p*$,T=x/c,S=x/t.blockSize,I=W.size(m)/y,M=[],E=[u,i,a/c],v=W.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),M.push(...oe(E)),M.push(...oe(v)),M.push(...oe(e[2].dims)),e.length===4&&M.push(...oe(W.convertShape(e[3].dims)));let z=[u,i,s];M.push(...oe(z));let N=X=>{let U=E.length,V=K("a",e[0].dataType,U,c),A=K("b",12,v.length,p),L=K("scales",e[2].dataType,e[2].dims.length),R=[V,A,L],D=e.length===4?K("zero_points",12,e[3].dims.length):void 0;D&&R.push(D);let Y=z.length,O=ae("output",e[0].dataType,Y),Z=He(e[0].dataType),P=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${O.type.value}, ${_}>, ${y}>;
        ${X.declareVariables(...R,O)}
        ${X.mainStart([_,y,1])}
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
                sub_a[a_offset] = ${V.getByIndices(`${V.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${V.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${D?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${D.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${L.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let j=Math.floor($/8),F="";for(let G=0;G<j;G++){let ne=G*t.bits*4,de=ne+t.bits;F+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${de}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(ie,ye)=>`${Z}(b_value_lower[${ye}]), ${Z}(b_value_upper[${ye}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ie,ye)=>`${`dot(a_data${ye}, b_dequantized_values[${ye}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return F})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${O.setByIndices(`${O.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${_};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:I},programUniforms:M}),getShaderSource:N}},vh=(e,t)=>{bh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(xh(e.inputs,t)):e.compute($h(e.inputs,t))},Sh=e=>ke(e)}),Th,Ih,kh,Eh,Mh,Ch,Ah,Rh,zh,F0=J(()=>{ce(),me(),ge(),Th=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ih=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},kh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Eh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Mh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Ch=(e,t,n)=>{switch(n.mode){case 0:return Ih(e,t,n.pads.length);case 1:return kh(e,t,n.pads.length);case 2:return Eh(e,t,n.pads.length);case 3:return Mh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Ah=(e,t)=>{let n=W.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=W.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...oe(e[0].dims,n));let o=["rank"],u=l=>{let h=ae("output",e[0].dataType,n.length),c=K("x",e[0].dataType,r.length),p=c.type.value,m=Ch(h,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?p:"f32"}),`
            ${l.registerUniforms(g).declareVariables(c,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(n)/64)},programUniforms:a}),getShaderSource:u}},Rh=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},zh=(e,t)=>{Th(e.inputs);let n=Rh(e.inputs,t);e.compute(Ah(e.inputs,n),{inputs:[0]})}}),Jn,_a,ba,$a,xa,Oh,Nh,va,Sa,Bh,Ph,Ta,Dh,Uh,Ia,Lh,Fh,Gh,Wh,G0=J(()=>{dt(),ce(),me(),ge(),Jn=e=>{if(Ae.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},_a=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();br.adjustPoolAttributes(n,i,s,o,u,l);let h=br.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[c,r?p:h]},ba=(e,t)=>{let n=t.format==="NHWC",r=W.size(e),i=W.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(l+h);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],_=t.pads[t.pads.length-2];p=!!(y+_),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:_}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=W.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,s,!!u,!1,!1]}},$a=(e,t,n,r,i,a,s,o,u,l,h,c)=>{let p=i.format==="NHWC",m=t.type.value,g=ae("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",_="",$="",x=n-(p?2:1);if(h?y=`
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
                }`,i.kernelShape.length===2){let T=n-(p?3:2);c?_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:_=`
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
              ${_}
              ${y}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,_=i.pads.length,$="";return l?$=`
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
                    + offsets[j - ${n-y}u] - ${se("uniforms.pads","j - 2u",_)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},xa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Oh=e=>`${xa(e)};${e.countIncludePad}`,Nh=e=>`${xa(e)};${e.storageOrder};${e.dilations}`,va=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Sa=(e,t,n,r)=>{let[i,a]=_a(t,r,n),s=K("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,c,p,m,g]=ba(a,i);h.push(...oe(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(a)/64)},programUniforms:h}),getShaderSource:_=>$a(_,s,t.dims.length,a.length,i,u,l,0,c,p,m,g)}},Bh=e=>{let t=e.count_include_pad!==0,n=va(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Oh(r)}},Ph=(e,t)=>{Jn(e.inputs),e.compute(Sa("AveragePool",e.inputs[0],!1,t))},Ta={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Dh=e=>{let t=e.format;return{format:t,...Ta,cacheKey:t}},Uh=(e,t)=>{Jn(e.inputs),e.compute(Sa("GlobalAveragePool",e.inputs[0],!0,t))},Ia=(e,t,n,r)=>{let[i,a]=_a(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=K("x",t.dataType,t.dims.length),l=["rank"],[h,c,p,m,g]=ba(a,i);return h.push(...oe(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(a)/64)},programUniforms:h}),getShaderSource:y=>$a(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,p,m,g)}},Lh=(e,t)=>{Jn(e.inputs),e.compute(Ia("MaxPool",e.inputs[0],!1,t))},Fh=e=>{let t=e.storage_order,n=e.dilations,r=va(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Nh(i)}},Gh=e=>{let t=e.format;return{format:t,...Ta,cacheKey:t}},Wh=(e,t)=>{Jn(e.inputs),e.compute(Ia("GlobalMaxPool",e.inputs[0],!0,t))}}),qh,Vh,Hh,jh,W0=J(()=>{ce(),me(),Ve(),ge(),qh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Vh=(e,t)=>{let n=W.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=W.size(a),u=r===3||r===2,l=u?[Math.ceil(W.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(W.size(c.dims)/4)]:c.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,g=m===!1&&h.length===1,y=Ge(o),_=m&&(!u||y===4),$=_?y:1,x=_&&!u?y:1,T=K("input",u?12:r,l.length,x),S=K("scale",s,h.length),I=c?K("zero_point",u?12:r,p.length):void 0,M=ae("output",s,a.length,$),E=[T,S];I&&E.push(I);let v=[l,h];c&&v.push(p);let z=[{type:12,data:o/$},{type:12,data:n},{type:12,data:t.blockSize},...oe(...v,a)],N=X=>{let U=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(U).declareVariables(...E,M)}
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:z})}},Hh=(e,t)=>{qh(e.inputs,t),e.compute(Vh(e.inputs,t))},jh=e=>ke({axis:e.axis,blockSize:e.blockSize})}),Kh,Yh,Xh,q0=J(()=>{dt(),ce(),ge(),Kh=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Yh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...oe(a)],u=l=>{let h=ae("output",r,a.length),c=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Xh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ae.webgpu.validateInputContent&&Kh(t,n,r),e.compute(Yh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Zh,Qh,Jh,ep,V0=J(()=>{ce(),me(),Ve(),ge(),Zh=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Qh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(W.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=W.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...oe(e[1].dims,e[2].dims,i)],h=c=>{let p=K("indices",e[1].dataType,e[1].dims.length),m=K("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?su("output",e[0].dataType,i.length):ae("output",e[0].dataType,i.length,a);return`
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
    ${Zh(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:h}},Jh=e=>ke({reduction:e.reduction}),ep=(e,t)=>{e.compute(Qh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),tp,np,rp,ka,ip,ap,sp,op,up,lp,dp,cp,Ea,hp,pp,fp,mp,gp,yp,wp,H0=J(()=>{ce(),me(),Ve(),ge(),tp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},np=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},rp=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");tp(r,t),t.axes.length>0&&np(r,t.axes,l).forEach((h,c)=>r[c]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},ka=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,ip=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ka("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ka("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ap=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",sp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},op=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},up=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},lp=(e,t,n,r,i)=>`
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
    }`,dp=(e,t,n,r,i,a,s)=>`
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
    }`,cp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${se("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ea=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",hp=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Ea(e,u,a,2)}
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
    }`},pp=(e,t,n,r,i,a,s,o,u,l)=>{let h=n.length===2,[c,p]=h?[0,1]:[2,3],m=e.type.value,g=y=>{let _=y===c?"row":"col";return`
      fn ${_}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
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
          var ${_}: ${m} = originalIdx + ${m}(i);
          if (${_} < 0 || ${_} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${_} = max(0, min(${_}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${_})`)};
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
    `},fp=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ea(e,l,a,3)}
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
    }`},mp=(e,t,n,r,i,a)=>{let s=e.dims,o=sp(a,t.axes,s.length),u=op(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=up(s,l,t)));let h=ae("output",e.dataType,u.length),c=K("input",e.dataType,s.length),p=W.size(u),m=s.length===u.length&&s.every((x,T)=>x===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,_=c.type.value,$=x=>`
      ${m?"":`
      ${ip(t.coordinateTransformMode,_)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${cp(c,s)};
              ${ap(t.nearestMode,n,_)};
              ${dp(c,h,s,u,l.length,o.length,g)};
              `;case"linear":return`
              ${lp(h,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${hp(c,h,s,g,y)}`;if(s.length===3||s.length===5)return`${fp(c,h,s,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${pp(c,h,s,u,l,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:o},...oe(s,u)]})}},gp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},yp=(e,t)=>{let n=[],r=[],i=[],a=gp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");rp(e.inputs,t,a,n,r,i),e.compute(mp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},wp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return ke({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),_p,bp,$p,j0=J(()=>{ce(),me(),ge(),_p=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},bp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=W.size(a),o=a,u=s,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,_=64,$=Ge(l),x=[{type:12,data:u},{type:12,data:$},{type:12,data:l},{type:1,data:t.epsilon}],T=I=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[K("x",e[0].dataType,e[0].dims,$),K("skip",e[1].dataType,e[1].dims,$),K("gamma",e[2].dataType,e[2].dims,$)];c&&E.push(K("beta",e[3].dataType,e[3].dims,$)),p&&E.push(K("bias",e[4].dataType,e[4].dims,$)),E.push(ae("output",e[0].dataType,o,$)),m&&E.push(ae("mean_output",1,h)),g&&E.push(ae("inv_std_output",1,h)),y&&E.push(ae("input_skip_bias_sum",e[0].dataType,o,$));let v=He(e[0].dataType),z=He(1,$);return`

      ${I.registerUniforms(M).declareVariables(...E)}
      var<workgroup> sum_shared : array<${z}, ${_}>;
      var<workgroup> sum_squared_shared : array<${z}, ${_}>;

      ${I.mainStart([_,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${_};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${_};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${_-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${An(v,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${_};
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
        let mean = ${Ht("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ht("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${y}`,inputDependencies:e.map((I,M)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},$p=(e,t)=>{_p(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(bp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),xp,er,vp,Ma,Sp,Tp,Ip,kp,K0=J(()=>{ce(),me(),Ve(),ge(),xp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},er=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},vp=(e,t)=>{if(e.length>1){let n=er(e,1),r=er(e,2),i=er(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ke({starts:n,ends:r,axes:i})}else return t},Ma=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Sp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Tp=(e,t)=>{let n=e[0].dims,r=W.size(n),i=t.axes.length>0?W.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=er(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map(($,x)=>Ma($,x,n,i,a)),o=t.ends.map(($,x)=>Ma($,x,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(s.splice($,0,0),o.splice($,0,n[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,x,T)=>{if($<0){let S=(o[x]-s[x])/$,I=s[x],M=I+S*a[x];s[x]=M,o[x]=I,T[x]=-$}});let l=n.slice(0);i.forEach(($,x)=>{l[$]=Math.ceil((o[$]-s[$])/a[$])});let h={dims:l,dataType:e[0].dataType},c=ae("output",e[0].dataType,l.length),p=K("input",e[0].dataType,e[0].dims.length),m=W.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...oe(e[0].dims,l)],_=$=>`
      ${$.registerUniforms(g).declareVariables(p,c)}
        ${Sp(p,c,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Ip=(e,t)=>{xp(e.inputs,t);let n=vp(e.inputs,t);e.compute(Tp(e.inputs,n),{inputs:[0]})},kp=e=>{let t=e.starts,n=e.ends,r=e.axes;return ke({starts:t,ends:n,axes:r})}}),Ep,Mp,Cp,Ap,Y0=J(()=>{ce(),me(),Ve(),jt(),ge(),Ep=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Mp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=W.size(r),a=r.length,s=W.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(E,v)=>v),l[s]=a-1,l[a-1]=s,u=e.compute(lt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,c=h[a-1],p=i/c,m=Ge(c),g=c/m,y=64;p===1&&(y=256);let _=(E,v)=>v===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:v===2?`max(${E}.x, ${E}.y)`:v===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,$=K("x",u.dataType,u.dims,m),x=ae("result",u.dataType,u.dims,m),T=$.type.value,S=He(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,I=E=>`
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
          rowMaxShared = ${T}(${_("threadShared[0]",m)});
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
          rowSumShared = ${T}(${Ht("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:g}]}),getShaderSource:I},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(lt(M,l),{inputs:[M]})},Cp=(e,t)=>{Ep(e.inputs),Mp(e,t)},Ap=e=>ke({axis:e.axis})}),Ca,Rp,zp,Op,Np,X0=J(()=>{ce(),me(),ge(),Ca=e=>Array.from(e.getBigInt64Array(),Number),Rp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ca(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},zp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Op=(e,t)=>{let n=e[0].dims,r=t??Ca(e[1]),i=zp(n,r),a=W.size(i),s=e[0].dataType,o=K("input",s,n.length),u=ae("output",s,i.length),l=h=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...oe(e[0].dims,i)]}),getShaderSource:l}},Np=e=>{Rp(e.inputs),e.compute(Op(e.inputs),{inputs:[0]})}}),Bp,Pp,Dp,Z0=J(()=>{ce(),me(),ge(),Bp=(e,t,n,r,i)=>{let a=ae("output_data",i,n.length,4),s=K("a_data",t[1].dataType,t[1].dims.length,4),o=K("b_data",t[2].dataType,t[2].dims.length,4),u=K("c_data",t[0].dataType,t[0].dims.length,4),l,h=(c,p,m)=>`select(${p}, ${c}, ${m})`;if(!r)l=a.setByOffset("global_idx",h(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,_=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${p}[${m}] = ${g}(${h(y,_,$)});
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
      }`},Pp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(W.areEqual(t,n)&&W.areEqual(n,r)),s=t,o=W.size(t);if(a){let l=Mn.calcShape(Mn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=W.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Bp(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...oe(r,t,n,s)]})}},Dp=e=>{e.compute(Pp(e.inputs))}}),Up,Q0=J(()=>{h0(),Hi(),p0(),f0(),m0(),g0(),y0(),x0(),S0(),T0(),I0(),k0(),E0(),M0(),C0(),A0(),R0(),z0(),O0(),N0(),B0(),P0(),D0(),U0(),L0(),Zc(),F0(),G0(),W0(),q0(),V0(),Wi(),H0(),oh(),j0(),K0(),Y0(),ih(),X0(),jt(),Xi(),Z0(),Up=new Map([["Abs",[_l]],["Acos",[bl]],["Acosh",[$l]],["Add",[ud]],["ArgMax",[il,Vi]],["ArgMin",[rl,Vi]],["Asin",[xl]],["Asinh",[vl]],["Atan",[Sl]],["Atanh",[Tl]],["Attention",[dl]],["AveragePool",[Ph,Bh]],["BatchNormalization",[fl]],["BiasAdd",[yl]],["BiasSplitGelu",[ad]],["Cast",[kl,Il]],["Ceil",[Cl]],["Clip",[Ml]],["Concat",[xd,vd]],["Conv",[la,oa]],["ConvTranspose",[Xd,jd]],["Cos",[Al]],["Cosh",[Rl]],["CumSum",[Qd,Jd]],["DepthToSpace",[rc,ic]],["DequantizeLinear",[Hh,jh]],["Div",[ld]],["Einsum",[dc,cc]],["Elu",[zl,Kn]],["Equal",[dd]],["Erf",[Ol]],["Exp",[Nl]],["Expand",[mc]],["FastGelu",[yc]],["Floor",[Bl]],["FusedConv",[la,oa]],["Gather",[$c,bc]],["GatherElements",[Rc,Ac]],["GatherBlockQuantized",[kc,Ec]],["GatherND",[vc,Sc]],["Gelu",[Pl]],["Gemm",[Bc,Nc]],["GlobalAveragePool",[Uh,Dh]],["GlobalMaxPool",[Wh,Gh]],["Greater",[fd]],["GreaterOrEqual",[gd]],["GridSample",[Vc,Hc]],["GroupQueryAttention",[ch]],["HardSigmoid",[Vl,ql]],["InstanceNormalization",[fh]],["LayerNormalization",[yh]],["LeakyRelu",[Dl,Kn]],["Less",[md]],["LessOrEqual",[yd]],["Log",[Jl]],["MatMul",[_h]],["MatMulNBits",[vh,Sh]],["MaxPool",[Lh,Fh]],["Mul",[cd]],["MultiHeadAttention",[Xc,Kc]],["Neg",[Ll]],["Not",[Ul]],["Pad",[zh]],["Pow",[hd]],["QuickGelu",[nd,Kn]],["Range",[Xh]],["Reciprocal",[Fl]],["ReduceMin",[Qu]],["ReduceMean",[ju]],["ReduceMax",[Zu]],["ReduceSum",[el]],["ReduceProd",[Ju]],["ReduceL1",[Ku]],["ReduceL2",[Yu]],["ReduceLogSum",[nl]],["ReduceLogSumExp",[Xu]],["ReduceSumSquare",[tl]],["Relu",[Gl]],["Resize",[yp,wp]],["RotaryEmbedding",[sh]],["ScatterND",[ep,Jh]],["Sigmoid",[Wl]],["Sin",[Hl]],["Sinh",[jl]],["Slice",[Ip,kp]],["SkipLayerNormalization",[$p]],["Split",[nh,rh]],["Sqrt",[Kl]],["Softmax",[Cp,Ap]],["Sub",[pd]],["Tan",[Yl]],["Tanh",[Xl]],["ThresholdedRelu",[Ql,Kn]],["Tile",[Np]],["Transpose",[fu,mu]],["Where",[Dp]]])}),Lp,J0=J(()=>{dt(),Dt(),ge(),Lp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){It(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){It(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=uu(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});ve("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Fp={};kn(Fp,{WebGpuBackend:()=>Vp});var Gp,Wp,qp,Vp,ey=J(()=>{dt(),ce(),Dt(),Ko(),d0(),Q0(),J0(),Gp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Wp=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Gp(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},qp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Vp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new qp(s),this.gpuDataManager=iu(this),this.programManager=new Lp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ii(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;It(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,h=a.programName,c=a.inputTensorViews,p=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),_=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(_))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map($=>({dims:$.dims,dataType:Pt($.dataType)})),outputsMetadata:p.map($=>({dims:$.dims,dataType:Pt($.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:_});else{let $="";c.forEach((T,S)=>{$+=`input[${S}]: [${T.dims}] | ${Pt(T.dataType)}, `});let x="";p.forEach((T,S)=>{x+=`output[${S}]: [${T.dims}] | ${Pt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${h}" ${$}${x}start time: ${y} ns, execution time: ${_-y} ns`)}fr("GPU",`${h}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,n,r,i,a){It(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?o.map((x,T)=>T):n;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let c=[],p=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let T=h[x]===-1,S=h[x]===-2,I=T||S?i(o[x].dataType,o[x].dims):r(h[x],o[x].dataType,o[x].dims);if(c.push(I),I.data===0)continue;let M=this.gpuDataManager.get(I.data);if(!M)throw new Error(`no GPU data for output: ${I.data}`);if(T&&this.temporaryData.push(M),S){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(M)}p.push(M)}if(s.length!==t.length||p.length!==c.length){if(p.length===0)return pt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,T=[];l.forEach(E=>{let v=typeof E.data=="number"?[E.data]:E.data;if(v.length===0)return;let z=E.type===10?2:4,N,X;E.type===10?(X=v.length>4?16:v.length>2?8:v.length*z,N=v.length>4?16:z*v.length):(X=v.length<=2?v.length*z:16,N=16),x=Math.ceil(x/X)*X,T.push(x);let U=E.type===10?8:4;x+=v.length>4?Math.ceil(v.length/U)*N:v.length*z});let S=16;x=Math.ceil(x/S)*S;let I=new ArrayBuffer(x);l.forEach((E,v)=>{let z=T[v],N=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(I,z,N.length).set(N);else if(E.type===12)new Uint32Array(I,z,N.length).set(N);else if(E.type===10)new Uint16Array(I,z,N.length).set(N);else if(E.type===1)new Float32Array(I,z,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Pt(E.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,I,0,x),this.gpuDataManager.release(M.id),m={offset:0,size:x,buffer:M.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,_=Wp(e,t,y),$=this.programManager.getArtifact(_);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(_,$),ve("info",()=>`[artifact] key: ${_}, programName: ${e.name}`)),l&&$.uniformVariablesInfo){if(l.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${l.length} in program "${$.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],S=T.type,I=typeof T.data=="number"?1:T.data.length,[M,E]=$.uniformVariablesInfo[x];if(S!==M||I!==E)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${E}, got type ${S} with size ${I} in program "${$.programInfo.name}".`)}}if(ve("info",()=>`[ProgramManager] run "${e.name}" (key=${_}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run($,s,p,g,m),pt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Up.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ve("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Di(this,e,t);return ki(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ve("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ve("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ve("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Hp={};kn(Hp,{init:()=>Kp});var Rr,jp,Kp,ty=J(()=>{ce(),Dt(),me(),l0(),Rr=class Lg{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new Lg(this.module,this.dataType,this.data,t)}},jp=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),p=[];for(let m=0;m<c;m++)p.push(Number(e.getValue(r*i++,a)));o.push(new Rr(e,l,h,p))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new Rr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=hn(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new Rr(this.module,o,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Kp=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(ey(),Fn(Fp)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,h=!1)=>{if(h)ve("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{ve("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{ve("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,h)=>{ve("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let c=new jp(t,s,Number(u));return s.computeKernel(Number(o),c,h)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new eu(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,h)=>a.ensureTensor(s,o,u,l,h),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Yp,Aa,Ra,Kt,Xp,za,zr,Oa,Na,Ba,Pa,Da,Ua,Zp=J(()=>{dt(),s0(),o0(),ce(),ln(),$i(),Do(),Yp=(e,t)=>{Re()._OrtInit(e,t)!==0&&Ee("Can't initialize onnxruntime.")},Aa=async e=>{Yp(e.wasm.numThreads,_r(e.logLevel))},Ra=async(e,t)=>{var r,i;(i=(r=Re()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(ty(),Fn(Hp)).init;t==="webgpu"&&await a("webgpu",Re(),e,n),t==="webnn"&&await a("webnn",Re(),e)}},Kt=new Map,Xp=e=>{let t=Re(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ee("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},za=(e,t)=>{let n=Re(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ee("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],h=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*a,"*")))}return[o,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},zr=e=>{let t=Re(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Oa=async(e,t)=>{var c,p,m,g;let n,r,i=Re();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=zr(e);let a=0,s=0,o=0,u=[],l=[],h=[];try{if([s,u]=await Po(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let z of t.externalData){let N=typeof z=="string"?z:z.path;v.push(Ti(typeof z=="string"?z:z.data).then(X=>{i.mountExternalData(N,X)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let z=v,N=z==null?void 0:z.context,X=z==null?void 0:z.gpuDevice,U=z==null?void 0:z.deviceType,V=z==null?void 0:z.powerPreference;N?i.currentContext=N:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:U,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Ee("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,_]=Xp(a),$=!!(t!=null&&t.enableGraphCapture),x=[],T=[],S=[],I=[],M=[];for(let v=0;v<y;v++){let[z,N,X]=za(a,v);z===0&&Ee("Can't get an input name."),l.push(z);let U=i.UTF8ToString(z);x.push(U),S.push(N===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:Pt(N),shape:X})}for(let v=0;v<_;v++){let[z,N,X]=za(a,v+y);z===0&&Ee("Can't get an output name."),h.push(z);let U=i.UTF8ToString(z);T.push(U),I.push(N===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:Pt(N),shape:X});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[U])??"cpu",A=i.webnnIsGraphOutput;if(V==="cpu"&&A&&A(a,U)){M.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if($&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(V)}}let E=null;return M.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Ee("Can't create IO binding."),E={handle:o,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Si(v))}),Kt.set(a,[a,l,h,E,$,!1]),[a,x,T,S,I]}catch(y){throw l.forEach(_=>i._OrtFree(_)),h.forEach(_=>i._OrtFree(_)),o!==0&&i._OrtReleaseBinding(o)!==0&&Ee("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ee("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Ee("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},Na=e=>{var u,l,h;let t=Re(),n=Kt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ee("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ee("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Ee("Can't release session."),Kt.delete(e)},Ba=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Re(),u=o.PTR_SIZE,l=e[0],h=e[1],c=e[3],p=c,m,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;g=hn(cn(l),h);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,$,g)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;g=hn(cn(l),h);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,$,cn(l),h)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=o._malloc(g),n.push(m);for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(m+x*u,ft($[x],n),"*")}}else{let x=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&x&&T){let S=o.UTF8ToString(i);if(x(r,S)||T(r,S)){let I=cn(l);g=hn(I,h),p="ml-tensor";let M=o.webnnCreateTemporaryTensor,E=o.webnnUploadTensor;if(!M||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await M(r,I,h);E(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=v}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let y=o.stackSave(),_=o.stackAlloc(4*h.length);try{h.forEach((x,T)=>o.setValue(_+T*u,x,u===4?"i32":"i64"));let $=o._OrtCreateTensor(cn(l),m,g,_,h.length,Si(p));$===0&&Ee(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push($)}finally{o.stackRestore(y)}},Pa=async(e,t,n,r,i,a)=>{var U,V,A,L;let s=Re(),o=s.PTR_SIZE,u=Kt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],c=u[2],p=u[3],m=u[4],g=u[5],y=t.length,_=r.length,$=0,x=[],T=[],S=[],I=[],M=[],E=s.stackSave(),v=s.stackAlloc(y*o),z=s.stackAlloc(y*o),N=s.stackAlloc(_*o),X=s.stackAlloc(_*o);try{[$,x]=Ro(a),on("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)await Ba(n[O],T,I,e,h[t[O]],t[O],m);for(let O=0;O<_;O++)await Ba(i[O],S,I,e,c[r[O]],y+r[O],m);un("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)s.setValue(v+O*o,T[O],"*"),s.setValue(z+O*o,h[t[O]],"*");for(let O=0;O<_;O++)s.setValue(N+O*o,S[O],"*"),s.setValue(X+O*o,c[r[O]],"*");if(p&&!g){let{handle:O,outputPreferredLocations:Z,outputPreferredLocationsEncoded:P}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);on("wasm bindInputsOutputs");for(let j=0;j<y;j++){let F=t[j];await s._OrtBindInput(O,h[F],T[j])!==0&&Ee(`Can't bind input[${j}] for session=${e}.`)}for(let j=0;j<_;j++){let F=r[j];(U=i[j])!=null&&U[3]?(M.push(S[j]),s._OrtBindOutput(O,c[F],S[j],0)!==0&&Ee(`Can't bind pre-allocated output[${j}] for session=${e}.`)):s._OrtBindOutput(O,c[F],0,P[F])!==0&&Ee(`Can't bind output[${j}] to ${Z[j]} for session=${e}.`)}un("wasm bindInputsOutputs"),Kt.set(e,[l,h,c,p,m,!0])}(V=s.jsepOnRunStart)==null||V.call(s,l),(A=s.webnnOnRunStart)==null||A.call(s,l);let R;p?R=await s._OrtRunWithBinding(l,p.handle,_,N,$):R=await s._OrtRun(l,z,v,y,X,_,N,$),R!==0&&Ee("failed to call OrtRun().");let D=[],Y=[];on("wasm ProcessOutputTensor");for(let O=0;O<_;O++){let Z=Number(s.getValue(N+O*o,"*"));if(Z===S[O]||M.includes(S[O])){D.push(i[O]),Z!==S[O]&&s._OrtReleaseTensor(Z)!==0&&Ee("Can't release tensor.");continue}let P=s.stackSave(),j=s.stackAlloc(4*o),F=!1,G,ne=0;try{s._OrtGetTensorData(Z,j,j+o,j+2*o,j+3*o)!==0&&Ee(`Can't access output tensor data on index ${O}.`);let de=o===4?"i32":"i64",ie=Number(s.getValue(j,de));ne=s.getValue(j+o,"*");let ye=s.getValue(j+o*2,"*"),Be=Number(s.getValue(j+o*3,de)),Le=[];for(let be=0;be<Be;be++)Le.push(Number(s.getValue(ye+be*o,de)));s._OrtFree(ye)!==0&&Ee("Can't free memory for tensor dims.");let Me=Le.reduce((be,pe)=>be*pe,1);G=Pt(ie);let Xe=p==null?void 0:p.outputPreferredLocations[r[O]];if(G==="string"){if(Xe==="gpu-buffer"||Xe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let be=[];for(let pe=0;pe<Me;pe++){let et=s.getValue(ne+pe*o,"*"),xt=s.getValue(ne+(pe+1)*o,"*"),Ct=pe===Me-1?void 0:xt-et;be.push(s.UTF8ToString(et,Ct))}D.push([G,Le,be,"cpu"])}else if(Xe==="gpu-buffer"&&Me>0){let be=s.jsepGetBuffer;if(!be)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let pe=be(ne),et=hn(ie,Me);if(et===void 0||!xi(G))throw new Error(`Unsupported data type: ${G}`);F=!0,D.push([G,Le,{gpuBuffer:pe,download:s.jsepCreateDownloader(pe,et,G),dispose:()=>{s._OrtReleaseTensor(Z)!==0&&Ee("Can't release tensor.")}},"gpu-buffer"])}else if(Xe==="ml-tensor"&&Me>0){let be=s.webnnEnsureTensor,pe=s.webnnIsGraphInputOutputTypeSupported;if(!be||!pe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(hn(ie,Me)===void 0||!vi(G))throw new Error(`Unsupported data type: ${G}`);if(!pe(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let et=await be(e,ne,ie,Le,!1);F=!0,D.push([G,Le,{mlTensor:et,download:s.webnnCreateMLTensorDownloader(ne,G),dispose:()=>{s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(Z)}},"ml-tensor"])}else if(Xe==="ml-tensor-cpu-output"&&Me>0){let be=s.webnnCreateMLTensorDownloader(ne,G)(),pe=D.length;F=!0,Y.push((async()=>{let et=[pe,await be];return s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(Z),et})()),D.push([G,Le,[],"cpu"])}else{let be=wr(G),pe=new be(Me);new Uint8Array(pe.buffer,pe.byteOffset,pe.byteLength).set(s.HEAPU8.subarray(ne,ne+pe.byteLength)),D.push([G,Le,pe,"cpu"])}}finally{s.stackRestore(P),G==="string"&&ne&&s._free(ne),F||s._OrtReleaseTensor(Z)}}p&&!m&&(s._OrtClearBoundOutputs(p.handle)!==0&&Ee("Can't clear bound outputs."),Kt.set(e,[l,h,c,p,m,!1]));for(let[O,Z]of await Promise.all(Y))D[O][2]=Z;return un("wasm ProcessOutputTensor"),D}finally{(L=s.webnnOnRunEnd)==null||L.call(s,l),s.stackRestore(E),T.forEach(R=>s._OrtReleaseTensor(R)),S.forEach(R=>s._OrtReleaseTensor(R)),I.forEach(R=>s._free(R)),$!==0&&s._OrtReleaseRunOptions($),x.forEach(R=>s._free(R))}},Da=e=>{let t=Re(),n=Kt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ee("Can't get an profile file name."),t._OrtFree(i)},Ua=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Yt,st,Rn,tr,nr,Or,La,Nr,_n,bn,Qp,Jp,ef,tf,nf,rf,af,sf,of=J(()=>{dt(),Zp(),ln(),yi(),Yt=()=>!!Ae.wasm.proxy&&typeof document<"u",Rn=!1,tr=!1,nr=!1,Nr=new Map,_n=(e,t)=>{let n=Nr.get(e);n?n.push(t):Nr.set(e,[t])},bn=()=>{if(Rn||!tr||nr||!st)throw new Error("worker not ready")},Qp=e=>{switch(e.data.type){case"init-wasm":Rn=!1,e.data.err?(nr=!0,La[1](e.data.err)):(tr=!0,La[0]()),Or&&(URL.revokeObjectURL(Or),Or=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Nr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Jp=async()=>{if(!tr){if(Rn)throw new Error("multiple calls to 'initWasm()' detected.");if(nr)throw new Error("previous call to 'initWasm()' failed.");if(Rn=!0,Yt())return new Promise((e,t)=>{st==null||st.terminate(),ko().then(([n,r])=>{try{st=r,st.onerror=a=>t(a),st.onmessage=Qp,La=[e,t];let i={type:"init-wasm",in:Ae};!i.in.wasm.wasmPaths&&(n||pi)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),st.postMessage(i),Or=n}catch(i){t(i)}},t)});try{await bi(Ae.wasm),await Aa(Ae),tr=!0}catch(e){throw nr=!0,e}finally{Rn=!1}}},ef=async e=>{if(Yt())return bn(),new Promise((t,n)=>{_n("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ae}};st.postMessage(r)});await Ra(Ae,e)},tf=async e=>Yt()?(bn(),new Promise((t,n)=>{_n("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};st.postMessage(r,[e.buffer])})):zr(e),nf=async(e,t)=>{if(Yt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return bn(),new Promise((n,r)=>{_n("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),st.postMessage(i,a)})}else return Oa(e,t)},rf=async e=>{if(Yt())return bn(),new Promise((t,n)=>{_n("release",[t,n]);let r={type:"release",in:e};st.postMessage(r)});Na(e)},af=async(e,t,n,r,i,a)=>{if(Yt()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return bn(),new Promise((s,o)=>{_n("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};st.postMessage(l,Ua(u))})}else return Pa(e,t,n,r,i,a)},sf=async e=>{if(Yt())return bn(),new Promise((t,n)=>{_n("end-profiling",[t,n]);let r={type:"end-profiling",in:e};st.postMessage(r)});Da(e)}}),Fa,uf,lf,ny=J(()=>{dt(),of(),ce(),li(),Do(),Fa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},uf=e=>{switch(e[3]){case"cpu":return new Fe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!xi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Fe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!vi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Fe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},lf=class{async fetchModelAndCopyToWasmMemory(e){return tf(await Ti(e))}async loadModel(e,t){It();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await nf(n,t),pt()}async dispose(){return rf(this.sessionId)}async run(e,t,n){It();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],m=c[1],g=this.inputNames.indexOf(p);if(g===-1)throw new Error(`invalid input '${p}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let p=c[0],m=c[1],g=this.outputNames.indexOf(p);if(g===-1)throw new Error(`invalid output '${p}'`);a.push(m),s.push(g)});let o=r.map((c,p)=>Fa(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?Fa(c,()=>`output "${this.outputNames[s[p]]}"`):null),l=await af(this.sessionId,i,o,s,u,n),h={};for(let c=0;c<l.length;c++)h[this.outputNames[s[c]]]=a[c]??uf(l[c]);return pt(),h}startProfiling(){}endProfiling(){sf(this.sessionId)}}}),df={};kn(df,{OnnxruntimeWebAssemblyBackend:()=>Wa,initializeFlags:()=>Ga,wasmBackend:()=>cf});var Ga,Wa,cf,ry=J(()=>{dt(),of(),ny(),Ga=()=>{(typeof Ae.wasm.initTimeout!="number"||Ae.wasm.initTimeout<0)&&(Ae.wasm.initTimeout=0);let e=Ae.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ae.wasm.simd=!1),typeof Ae.wasm.proxy!="boolean"&&(Ae.wasm.proxy=!1),typeof Ae.wasm.trace!="boolean"&&(Ae.wasm.trace=!1),typeof Ae.wasm.numThreads!="number"||!Number.isInteger(Ae.wasm.numThreads)||Ae.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ae.wasm.numThreads=1;else{let t=typeof navigator>"u"?Gg("node:os").cpus().length:navigator.hardwareConcurrency;Ae.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Wa=class{async init(e){Ga(),await Jp(),await ef(e)}async createInferenceSessionHandler(e,t){let n=new lf;return await n.loadModel(e,t),n}},cf=new Wa});dt(),dt(),dt();var iy="1.27.0";{let e=(ry(),Fn(df)).wasmBackend;En("webgpu",e,5),En("webnn",e,5),En("cpu",e,10),En("wasm",e,10)}Object.defineProperty(Ae.versions,"web",{value:iy,enumerable:!0});/**
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
 */function Xt(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function hf(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function pf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const ay=114;function sy(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function rr(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,p+1),g=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const _=(y+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(_))),x=Math.min(r-1,$+1),T=Math.max(0,Math.min(1,_-$)),S=(p*r+$)*a,I=(p*r+x)*a,M=(m*r+$)*a,E=(m*r+x)*a,v=(h*t+y)*3;for(let z=0;z<3;z++){const N=s[S+z]*(1-T)+s[I+z]*T,X=s[M+z]*(1-T)+s[E+z]*T;o[v+z]=Math.min(255,Math.max(0,Math.round(N*(1-g)+X*g)))}}}return o}function qa(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=h*l,p=Math.min((h+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let _=0,$=0,x=0,T=0;for(let I=Math.floor(c);I<p;I++){const M=Math.min(I+1,p)-Math.max(I,c);if(!(M<=0))for(let E=Math.floor(g);E<y;E++){const v=Math.min(E+1,y)-Math.max(E,g);if(v<=0)continue;const z=v*M,N=(I*r+E)*a;_+=s[N]*z,$+=s[N+1]*z,x+=s[N+2]*z,T+=z}}const S=(h*t+m)*3;o[S]=Math.min(255,Math.max(0,Xt(_/T))),o[S+1]=Math.min(255,Math.max(0,Xt($/T))),o[S+2]=Math.min(255,Math.max(0,Xt(x/T)))}}return o}function ff(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function oy(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const m=(p+.5)*l-.5,g=Math.floor(m),y=ff(m-g);for(let _=0;_<t;_++){const $=(_+.5)*u-.5,x=Math.floor($),T=ff($-x),S=(p*t+_)*3;for(let I=0;I<3;I++){let M=0;for(let E=0;E<4;E++){const v=c(g-1+E)*r;let z=0;for(let N=0;N<4;N++)z+=T[N]*s[(v+h(x-1+N))*a+I];M+=y[E]*z}o[S+I]=Math.min(255,Math.max(0,Math.round(M)))}}}return o}function mf(e,t){const n=sy(e.width,e.height,t),r=rr(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(ay/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let l=0;l<n.resizedWidth;l++){const h=(u+l)*3,c=o+l;a[c]=r[h]/255,a[i+c]=r[h+1]/255,a[2*i+c]=r[h+2]/255}}return{tensor:a,params:n}}function gf(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],h=e[s*6+3],c=e[s*6+4],p=e[s*6+5];if(c<n)continue;const m=Math.round(p);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,_=(l-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(y),Math.trunc(_-g),Math.trunc($-y)],boxFloat:[g,y,_-g,$-y]})}return i}const uy=.6,ly=.74;function yf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,c=Xt((o+l)/2),p=Xt((u+h)/2),m=Xt((l-o+(h-u))/4);m>=1&&r.push({cx:c,cy:p,r:m})}return r}function dy(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(uy*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function cy(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=ly*(n.r+r.r))&&t.push(n);return t}function hy(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(hf(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function wf(e,t,n){const r=yf(e,t,n);return r.length===0?[]:hy(cy(dy(r)))}function py(e,t,n){return yf(e,t,n)}function Va(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const _f=["brown","grey","blue","green","yellow","red","purple"],fy={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},my=.7;function gy(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[s,o,u,l]=a.box;let h=!1;for(const c of r){const p=e[c];if(p.family!==a.family)continue;const[m,g,y,_]=p.box,$=Math.max(0,Math.min(s+u,m+y)-Math.max(s,m)),x=Math.max(0,Math.min(o+l,g+_)-Math.max(o,g)),T=Math.max(1,Math.min(u*l,y*_));if($*x>=my*T){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function bf(e,t,n){const r=gf(e,t,n,_f.length).map(i=>{const a=_f[i.classIndex];return{color:a,family:fy[a],box:i.box,confidence:i.confidence}});return gy(r)}const yy=8,wy=.8,$f=1.25;function _y(e){if(e.length<yy)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*$f?t.push(s):u>o*$f&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<wy*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const by=2.25,xf=8;function $y(e){if(e.length<xf)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=by*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,p)=>p),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const m=t[c][0]-t[p][0],g=t[c][1]-t[p][1];m*m+g*g<=i&&(a[s(c)]=s(p))}const o=new Map;for(let c=0;c<e.length;c++){const p=s(c);o.set(p,[...o.get(p)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<xf||u.length===e.length)return[];const l=new Set(u),h=e.map((c,p)=>p).filter(c=>!l.has(c));return h.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const Et={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function bt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const xy=.42,vy=22,Sy=43,Ty=120,Iy=1.5,ky=.72,Ey=110,vf=3;function ir(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*xy);if(l<1)return 0;let h=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-o)**2+(c-u)**2>l*l)continue;const m=(c*r+p)*a,g=s[m],y=s[m+1],_=s[m+2];!t&&g>=250&&y>=250&&_>=250||(n(g,y,_),h+=1)}return h}function My(e){let t=0,n=0,r=0,i=ir(e,!1,(a,s,o)=>{const u=bt(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=ir(e,!0,(a,s,o)=>{const u=bt(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function Cy(e){let t=0,n=0,r=ir(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=ir(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function Ay(e){let t=0;const n=ir(e,!0,(r,i,a)=>{t+=bt(r,i,a).s});return n===0?null:t/n}function Ry(e){const t=My(e);if(t===null||t.s<=vy)return 1;if(t.s>=Ty){const n=Cy(e);return n!==null&&n>=Iy?6:3}return t.s>=Sy?3:6}function zy(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function Oy(e,t){const n=[...t];if(e.length<vf||t.length!==e.length)return n;const r=e.map(s=>Ay(s)),i=r.filter(s=>s!==null);if(i.length<vf)return n;const a=hf(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<ky*a&&s<Ey&&(n[o]=1)}),n}function Sf(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),h=Math.max(0,u-s),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=(p*l+m)*3;if((m+a-n)**2+(p+s-r)**2<=i*i){const _=((p+s)*e.width+(m+a))*e.channels;c[g]=e.data[_],c[g+1]=e.data[_+1],c[g+2]=e.data[_+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:l,height:h,channels:3,data:c}}function Ny(e,t){const n=t.map(a=>Sf(e,a)),r=n.map(a=>Ry(a)),i=zy(t,r);return Oy(n,i)}function By(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function Tf(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,c=Math.min((l+1)*i,e.width);let p=0,m=0;for(let g=Math.floor(o);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,o);if(!(y<=0))for(let _=Math.floor(h);_<c;_++){const $=Math.min(_+1,c)-Math.max(_,h);$<=0||(p+=e.data[g*e.width+_]*$*y,m+=$*y)}}r[s*t+l]=Math.min(255,Math.max(0,Xt(p/m)))}}return{width:t,height:n,data:r}}function Py(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Xt(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function Dy(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const h=s+l,c=a+u;if(!(h<0||h>=t||c<0||c>=n)&&r[c*t+h]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function Uy(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const h=s+l,c=a+u;if(h>=0&&h<t&&c>=0&&c<n&&r[c*t+h]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function Ha(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;s[h++]=u,i[u]=o;let c=0,p=0,m=0;for(;l<h;){const g=s[l++],y=g%t,_=g/t|0;c+=1,p+=y,m+=_;for(let $=-1;$<=1;$++)for(let x=-1;x<=1;x++){if(x===0&&$===0)continue;const T=y+x,S=_+$;if(T<0||T>=t||S<0||S>=n)continue;const I=S*t+T;r[I]>0&&i[I]===0&&(i[I]=o,s[h++]=I)}}a[o]={area:c,centroidX:p/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function Ly(e,t,n){return If(Float32Array.from(e.data),e.width,t,n)}function If(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const c=h-a,p=l-a,m=o*c-u*p+a,g=u*c+o*p+a,y=Math.floor(m),_=Math.floor(g),$=m-y,x=g-_,T=(M,E)=>M>=0&&M<t&&E>=0&&E<t?e[E*t+M]:r,S=T(y,_)*(1-$)+T(y+1,_)*$,I=T(y,_+1)*(1-$)+T(y+1,_+1)*$;i[l*t+h]=S*(1-x)+I*x}return i}const Fy=.9,Gy=.34,Wy=[.55,.6,.66,.72],qy=22,Vy=88,Hy=35,zn=28,ja=4,jy=Array.from({length:15},(e,t)=>-21+t*3),kf=[-2,0,2],Ky=3,Yy=.3;function Xy(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Zy(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let _=0;_<e.width;_++)e.data[y*e.width+_]>0&&(a+=1,t=Math.min(t,_),n=Math.max(n,_),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),h=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let _=0;_<s;_++)l[(y+c)*u+(_+h)]=e.data[(y+r)*e.width+(_+t)];const p=zn-2*ja,m=Tf({width:u,height:u,data:l},p,p),g=new Float32Array(zn*zn);for(let y=0;y<p;y++)for(let _=0;_<p;_++)g[(y+ja)*zn+(_+ja)]=m.data[y*p+_]>110?1:0;return g}function Qy(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Gy);if(u<4)return null;const l=s-u,h=o-u,c=2*u,p=2*u;if(c<6||p<6)return null;const m=new Int16Array(c*p),g=new Int16Array(c*p),y=new Int16Array(c*p),_=new Uint8Array(c*p),$=[],x=Math.min(c,p)/2;for(let O=0;O<c;O++)for(let Z=0;Z<p;Z++){const P=((O+l)*n+(Z+h))*i,{h:j,s:F,v:G}=bt(a[P],a[P+1],a[P+2]),ne=O*p+Z;m[ne]=j,g[ne]=F,y[ne]=G,Math.sqrt((Z-p/2)**2+(O-c/2)**2)/x<=t&&(_[ne]=1,$.push(G))}if($.length<16)return null;const T=pf($,55);let S=0,I=0,M=0;const E=O=>m[O]>=qy&&m[O]<=Vy&&g[O]>=Hy,v=O=>y[O]>=T&&g[O]<=95&&!E(O)&&_[O]===1;for(let O=0;O<c*p;O++)_[O]===1&&(M+=1,y[O]>=130&&!E(O)&&(S+=1),v(O)&&(I+=1));const z=S>.5*M&&I<.15*M,N=new Uint8Array(c*p);if(z){const O=pf($,45);for(let Z=0;Z<c*p;Z++)N[Z]=_[Z]===1&&y[Z]<=O?255:0}else for(let O=0;O<c*p;O++)N[O]=v(O)?255:0;const X={width:p,height:c,data:N},U=Dy(X);let V=Ha(U),A=V;if(V.stats.length<=1&&(V=Ha(X),A=V,V.stats.length<=1))return null;const L=Math.min(c,p)/2;let R=0,D=-1;for(let O=1;O<A.stats.length;O++){const Z=A.stats[O];if(Z===void 0)continue;const P=Math.hypot(Z.centroidX-p/2,Z.centroidY-c/2)/L,j=Z.area*(1-.6*Math.min(P,1));j>D&&(D=j,R=O)}if(R===0)return null;const Y=new Uint8Array(c*p);for(let O=0;O<c*p;O++)Y[O]=A.labels[O]===R?255:0;return Zy(Uy({width:p,height:c,data:Y}))}function Jy(e,t,n,r,i,a){const s=zn;let o=0,u=0;for(let l=0;l<s;l++){const h=l-a;if(!(h<0||h>=s))for(let c=0;c<s;c++){const p=c-i;if(p<0||p>=s)continue;const m=e[h*s+p];m!==0&&(u+=m,o+=m*n[l*s+c])}}return o/(u+r-o+1e-6)}function ew(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of jy){const a=i===0?e:If(e,zn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of kf)for(const u of kf){const l=Jy(a,s,t,n,o,u);l>r&&(r=l)}}return r}function tw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of Wy){const o=Qy(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([ew(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Yy)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,Ky))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const nw=2560,rw=.3,iw=.5,aw=1.6,sw=3,ow=5;function uw(e){const t=Math.min(1,nw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*o-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),_=Math.min(e.width-1,y+1),$=Math.max(0,Math.min(1,g-y));for(let x=0;x<3;x++){const T=2-x,S=(h*e.width+y)*e.channels+T,I=(h*e.width+_)*e.channels+T,M=(c*e.width+y)*e.channels+T,E=(c*e.width+_)*e.channels+T,v=e.data[S]*(1-$)+e.data[I]*$,z=e.data[M]*(1-$)+e.data[E]*$,N=v*(1-p)+z*p;a[x*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function lw(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const l=o+t;e[l]>u&&(u=e[l]),s+1<t&&e[l+1]>u&&(u=e[l+1])}r[o]=u}}return r}function dw(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function cw(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,l=o-a,h=Math.hypot(u,l);if(h===0)continue;const c=u/h,p=l/h;let m=1/0,g=-1/0,y=1/0,_=-1/0;for(const[S,I]of e){const M=S*c+I*p,E=-S*p+I*c;M<m&&(m=M),M>g&&(g=M),E<y&&(y=E),E>_&&(_=E)}const $=g-m,x=_-y,T=$*x;if(T<n){n=T;const S=(m+g)/2,I=(y+_)/2;t={cx:S*c-I*p,cy:S*p+I*c,w:$,h:x,angle:Math.atan2(p,c)}}}return t}function hw(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),l=Math.abs(s*a)+Math.abs(o*i),h=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let _=p;_<=m;_++)for(let $=h;$<=c;$++){const x=$-r.cx,T=_-r.cy,S=x*i+T*a,I=-x*a+T*i;Math.abs(S)<=s&&Math.abs(I)<=o&&(g+=e[_*t+$],y+=1)}return y===0?0:g/y}function pw(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,_)=>y[0]-_[0]),[o,u,l,h]=s,[c,p]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=l[1]<=h[1]?[l,h]:[h,l];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[p[0],p[1]]]}function fw(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>rw?255:0;s=lw(s,i,a);const o={width:i,height:a,data:s},{labels:u}=Ha(o),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let _=l.get(y);_===void 0&&(_=new Map,l.set(y,_));const $=_.get(m);$===void 0?_.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const h=n/i,c=r/a,p=[];for(const[m,g]of l){const y=[];for(const[N,[X,U]]of g)y.push([X-.5,N-.5],[X-.5,N+.5],[U+.5,N-.5],[U+.5,N+.5]);const _=cw(dw(y));if(Math.min(_.w,_.h)<sw)continue;const $=hw(e,i,a,_);if($<iw)continue;const x=_.w*_.h*aw/(2*(_.w+_.h)),T={..._,w:_.w+2*x,h:_.h+2*x};if(Math.min(T.w,T.h)<ow+2)continue;const I=pw(T).map(([N,X])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(X*c)))]),M=I.map(N=>N[0]),E=I.map(N=>N[1]),v=Math.min(...M),z=Math.min(...E);p.push({quad:I,x:v,y:z,width:Math.max(...M)-v,height:Math.max(...E)-z,score:$})}return p.sort((m,g)=>g.score-m.score)}function mw(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=gw([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),l=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let p=0;p<s;p++){const m=u[6]*p+u[7]*c+u[8],g=(u[0]*p+u[1]*c+u[2])/m,y=(u[3]*p+u[4]*c+u[5])/m,_=Math.floor(g),$=Math.floor(y),x=g-_,T=y-$,S=Math.max(0,Math.min(e.width-1,_)),I=Math.max(0,Math.min(e.width-1,_+1)),M=Math.max(0,Math.min(e.height-1,$)),E=Math.max(0,Math.min(e.height-1,$+1));for(let v=0;v<e.channels;v++){const z=e.data[(M*e.width+S)*e.channels+v],N=e.data[(M*e.width+I)*e.channels+v],X=e.data[(E*e.width+S)*e.channels+v],U=e.data[(E*e.width+I)*e.channels+v],V=z*(1-x)+N*x,A=X*(1-x)+U*x;l[(c*s+p)*e.channels+v]=Math.round(V*(1-T)+A*T)}}const h={width:s,height:o,channels:e.channels,data:l};return o/s>=1.5?Zt(h,3):h}function gw(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let l=i;l<8;l++)n[o][l]-=u*n[i][l];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Zt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let h=0;h<i;h++)for(let c=0;c<r;c++){let p,m;n===1?(p=i-1-h,m=c):n===2?(p=r-1-c,m=i-1-h):(p=h,m=r-1-c);const g=(h*r+c)*a,y=(m*o+p)*a;for(let _=0;_<a;_++)l[y+_]=s[g+_]}return{width:o,height:u,channels:a,data:l}}const yw=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,yw)*255));return e})();const Lt=48,ww=320;function _w(e){return["blank",...e.characters," "]}function bw(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function $w(e,t){const n=Math.trunc(Lt*t),r=e.width/e.height,i=Math.ceil(Lt*r)>n?n:Math.ceil(Lt*r),a=new Float32Array(3*Lt*n),s=Lt*n,o=e.width/i,u=e.height/Lt;for(let l=0;l<Lt;l++){const h=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,h-c));for(let g=0;g<i;g++){const y=(g+.5)*o-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,y-_));for(let T=0;T<3;T++){const S=2-T,I=(c*e.width+_)*e.channels+S,M=(c*e.width+$)*e.channels+S,E=(p*e.width+_)*e.channels+S,v=(p*e.width+$)*e.channels+S,z=e.data[I]*(1-x)+e.data[M]*x,N=e.data[E]*(1-x)+e.data[v]*x,X=z*(1-m)+N*m;a[T*s+l*n+g]=(X/255-.5)/.5}}}return{tensor:a,width:n}}const xw=62,vw=8,Sw=5;function Ka(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function Tw(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function Br(e,t){return e.length===0&&t.length===0?100:200*Tw(e,t)/(e.length+t.length)}function Ef(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Br(n(e),n(t))}function Iw(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),s=[...r].filter(h=>!n.has(h)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),l=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(Br(o,u),Br(o,l),Br(u,l))}function kw(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[Ka(i),Ka(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function Ew(e,t){const n=Ka(e);if(!n||t.length===0)return null;const i=kw(t).map(h=>({...h,score:Iw(n,h.key)})).sort((h,c)=>c.score-h.score).slice(0,vw).filter(h=>h.score>=xw);if(i.length===0)return null;const a=i[0].score,s=i.filter(h=>a-h.score<=Sw),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],l=[Ef(o,u.key),u.score];for(const h of s.slice(1)){const c=[Ef(o,h.key),h.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=h,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Mf=5e3,Ya=.75,Cf=15,Mw=1.25,Cw=2.4,Aw=.003,Rw=.85,zw=4,Xa=2600,Za=2,Qa=.3,Af=.1,Rf=.012,Ow=22,zf=.5,Pr=.12;function Ye(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function Nw(e,t,n,r){const i=r.map(ie=>ie[0]),a=r.map(ie=>ie[1]),s=i.reduce((ie,ye)=>ie+ye,0)/i.length,o=a.reduce((ie,ye)=>ie+ye,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*zw,h=Math.max(0,Math.trunc(s-l)),c=Math.min(n.width,Math.trunc(s+l)),p=Math.max(0,Math.trunc(o-l)),m=Math.min(n.height,Math.trunc(o+l));if(c-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<Xa?Za:1,y=Ye(e,n),_=Ye(e,t),$=new e.Rect(h,p,c-h,m-p),x=y.roi($),T=new e.Mat;g!==1?e.resize(x,T,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo(T);const S=new e.Mat,I=new e.Mat;e.cvtColor(_,S,e.COLOR_RGB2GRAY),e.cvtColor(T,I,e.COLOR_RGB2GRAY);const M=new e.ORB(Mf),E=new e.KeyPointVector,v=new e.KeyPointVector,z=new e.Mat,N=new e.Mat,X=new e.Mat,U=[y,_,x,T,S,I,E,v,z,N,X],V=ie=>{for(const ye of U)try{ye.delete()}catch{}try{M.delete()}catch{}return ie};if(M.detectAndCompute(S,X,E,z),M.detectAndCompute(I,X,v,N),z.rows<8||N.rows<8)return V(null);const A=new e.BFMatcher(e.NORM_HAMMING),L=new e.DMatchVectorVector;A.knnMatch(z,N,L,2);const R=[],D=[];for(let ie=0;ie<L.size();ie++){const ye=L.get(ie);if(ye.size()===2){const Be=ye.get(0),Le=ye.get(1);if(Be.distance<Ya*Le.distance){const Me=E.get(Be.queryIdx).pt,Xe=v.get(Be.trainIdx).pt;R.push(Me.x,Me.y),D.push(Xe.x,Xe.y)}}}if(L.delete(),A.delete(),R.length/2<8)return V(null);const Y=e.matFromArray(R.length/2,1,e.CV_32FC2,R),O=e.matFromArray(D.length/2,1,e.CV_32FC2,D),Z=new e.Mat,P=e.findHomography(Y,O,e.RANSAC,5,Z);let j=0;for(let ie=0;ie<Z.rows;ie++)j+=Z.data[ie];const F=P.rows===3?[...P.data64F]:null;if(Y.delete(),O.delete(),Z.delete(),P.delete(),F===null||j<Cf)return V(null);const G=1/g,ne=[[G,0,h],[0,G,p],[0,0,1]],de=[0,1,2].map(ie=>[0,1,2].map(ye=>ne[ie][0]*F[ye]+ne[ie][1]*F[3+ye]+ne[ie][2]*F[6+ye]));return V({H:de,inliers:j})}function Ja(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*h}const i=Math.abs(r/2)/(t*n);if(i<Aw||i>Rw)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=Mw&&o<=Cw}function es(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function ts(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Qa*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(U=>[U[0],U[1],U[2]-s*(U[0]+U[1])+0]);for(let U=0;U<3;U++)l[U][2]=r[U][2]-s*r[U][0]-s*r[U][1];const h=Ye(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,c,p,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),h.delete(),p.delete();const g=m.data,y=Math.max(4,Math.trunc(s/3)),_=[[],[],[]],$=(U,V)=>{const A=(V*o+U)*3;_[0].push(g[A]),_[1].push(g[A+1]),_[2].push(g[A+2])};for(let U=0;U<u;U++)for(let V=0;V<o;V++)(U<y||U>=u-y||V<y||V>=o-y)&&$(V,U);const x=U=>{U.sort((A,L)=>A-L);const V=U.length>>1;return U.length%2?U[V]:(U[V-1]+U[V])/2},T=[x(_[0]),x(_[1]),x(_[2])],S=(U,V)=>{const A=(V*o+U)*3,L=g[A]-T[0],R=g[A+1]-T[1],D=g[A+2]-T[2];return Math.sqrt(L*L+R*R+D*D)>Ow},I=Math.max(6,Math.trunc(Af*i)),M=Math.max(6,Math.trunc(Af*a)),E=Math.max(2,Math.trunc(Rf*i)),v=Math.max(2,Math.trunc(Rf*a)),z=U=>{let V=0,A=0;for(const L of U)A=L?A+1:0,A>V&&(V=A);return V/Math.max(1,U.length)},N=U=>{let V,A,L,R,D;if(U==="L"?(V=s,A=s+a,L=Math.max(0,s-E-I),R=Math.max(0,s-E),D=!1):U==="R"?(V=s,A=s+a,L=s+i+E,R=Math.min(o,s+i+E+I),D=!1):(V=Math.max(0,s-v-M),A=Math.max(0,s-v),L=s,R=s+i,D=!0),A<=V||R<=L)return 0;const Y=[];if(D)for(let O=L;O<R;O++){let Z=0;for(let P=V;P<A;P++)S(O,P)&&Z++;Y.push(Z/(A-V)>zf)}else for(let O=V;O<A;O++){let Z=0;for(let P=L;P<R;P++)S(P,O)&&Z++;Y.push(Z/(R-L)>zf)}return z(Y)},X={L:N("L"),R:N("R"),T:N("T")};return c.delete(),m.delete(),X}const Bw=6e3,Pw=8,Of=.5,Dw=.6;function Uw(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<Xa?Za:1,a=Ye(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(Bw),l=new e.Mat,h=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,l,h,c);const p=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const _=Ye(e,y),$=new e.Mat;e.cvtColor(_,$,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute($,l,x,T);const S=[_,x,T],I=()=>{for(const de of S)de.delete();$.delete()};if(T.rows<8){I();continue}const M=new e.DMatchVectorVector;m.knnMatch(T,c,M,2);const E=[],v=[];for(let de=0;de<M.size();de++){const ie=M.get(de);if(ie.size()===2){const ye=ie.get(0);if(ye.distance<Ya*ie.get(1).distance){const Be=x.get(ye.queryIdx).pt,Le=h.get(ye.trainIdx).pt;E.push(Be.x,Be.y),v.push(Le.x,Le.y)}}}if(M.delete(),E.length/2<8){I();continue}const z=e.matFromArray(E.length/2,1,e.CV_32FC2,E),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),X=new e.Mat,U=e.findHomography(z,N,e.RANSAC,5,X);let V=0;for(let de=0;de<X.rows;de++)V+=X.data[de];const A=U.rows===3?[...U.data64F]:null;if(z.delete(),N.delete(),X.delete(),U.delete(),A===null||V<Pw){I();continue}const L=1/i,R=[[L*A[0],L*A[1],L*A[2]],[L*A[3],L*A[4],L*A[5]],[A[6],A[7],A[8]]],D=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([de,ie])=>es(R,de,ie));if(!Ja(D,t.width,t.height)){I();continue}const Y=Ye(e,t),O=e.matFromArray(3,3,e.CV_64F,R.flat()),Z=new e.Mat;e.warpPerspective(Y,Z,O,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const P=new e.Mat;e.cvtColor(Z,P,e.COLOR_RGB2GRAY);const j=new e.Mat;e.matchTemplate(P,$,j,e.TM_CCOEFF_NORMED);const F=j.data32F[0];if(Y.delete(),O.delete(),Z.delete(),P.delete(),j.delete(),F<Of){I();continue}const G=ts(e,t,y,R),ne=ns(G);p.push({id:g,confidence:Math.max(0,F),footprint:D,built:G!==null&&Math.max(G.L,G.R,G.T)>=Pr,tuckRegion:rs(D,ne)}),I()}}finally{o.delete(),l.delete(),h.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return p}function ns(e){return e!==null&&e.R>=Pr?["R"]:[]}function rs(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=Qa*a;if(!(s>0))return null;const o=n.reduce((y,_)=>y+_[0],0)/n.length,u=n.reduce((y,_)=>y+_[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[_,$]=l[y],x=n[_],T=n[$];let S=-(T[1]-x[1]),I=T[0]-x[0];const M=(x[0]+T[0])/2,E=(x[1]+T[1])/2;S*(M-o)+I*(E-u)<0&&(S=-S,I=-I);const v=Math.hypot(S,I);v<=1e-6||(S=S/v*s,I=I/v*s,h.push([x[0]+S,x[1]+I],[T[0]+S,T[1]+I]))}const c=h.map(y=>y[0]),p=h.map(y=>y[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...p));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...p))-g}}function Lw(e,t,n,r){const i=Nw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>es(i.H,l,h));if(!Ja(s,t.width,t.height))return null;const o=ts(e,t,n,i.H);if(o===null)return null;const u=ns(o);return{built:Math.max(o.L,o.R,o.T)>=Pr,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const Fw=.88;function Nf(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Qa*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*Fw),h=o-l;if(h<1)return null;const c=Ye(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(p,m),y=[...g.data64F],_=[0,1,2].flatMap(E=>[y[E*3],y[E*3+1],y[E*3+2]-s*y[E*3]-s*y[E*3+1]]),$=e.matFromArray(3,3,e.CV_64F,_),x=new e.Mat;e.warpPerspective(c,x,$,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,h,u)),S=new e.Mat;T.copyTo(S);const I=S.data,M=new Uint8ClampedArray(h*u*3);M.set(I.subarray(0,M.length));for(const E of[c,p,m,g,$,x,T,S])try{E.delete()}catch{}return{width:h,height:u,channels:3,data:M}}function Gw(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),h=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+s+u)),p=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+o+l));if(c-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<Xa?Za:1,y=Ye(e,n),_=Ye(e,t),$=y.roi(new e.Rect(h,p,c-h,m-p)),x=new e.Mat;g!==1?e.resize($,x,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(x);const T=new e.Mat,S=new e.Mat;e.cvtColor(_,T,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const I=new e.ORB(Mf),M=new e.KeyPointVector,E=new e.KeyPointVector,v=new e.Mat,z=new e.Mat,N=new e.Mat,X=[y,_,$,x,T,S,M,E,v,z,N],U=de=>{for(const ie of X)try{ie.delete()}catch{}try{I.delete()}catch{}return de};if(I.detectAndCompute(T,N,M,v),I.detectAndCompute(S,N,E,z),v.rows<8||z.rows<8)return U(null);const V=new e.BFMatcher(e.NORM_HAMMING),A=new e.DMatchVectorVector;V.knnMatch(v,z,A,2);const L=[],R=[];for(let de=0;de<A.size();de++){const ie=A.get(de);if(ie.size()===2){const ye=ie.get(0),Be=ie.get(1);if(ye.distance<Ya*Be.distance){const Le=M.get(ye.queryIdx).pt,Me=E.get(ye.trainIdx).pt;L.push(Le.x,Le.y),R.push(Me.x,Me.y)}}}if(A.delete(),V.delete(),L.length/2<8)return U(null);const D=e.matFromArray(L.length/2,1,e.CV_32FC2,L),Y=e.matFromArray(R.length/2,1,e.CV_32FC2,R),O=new e.Mat,Z=e.findHomography(D,Y,e.RANSAC,5,O);let P=0;for(let de=0;de<O.rows;de++)P+=O.data[de];const j=Z.rows===3?[...Z.data64F]:null;if(D.delete(),Y.delete(),O.delete(),Z.delete(),j===null||P<Cf)return U(null);const F=1/g,G=[[F,0,h],[0,F,p],[0,0,1]],ne=[0,1,2].map(de=>[0,1,2].map(ie=>G[de][0]*j[ie]+G[de][1]*j[3+ie]+G[de][2]*j[6+ie]));return U({H:ne,inliers:P})}const Ww=620;function qw(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Bf(e,t,n,r){const i=Pf(e,t,n,r);if(i!==null)return i;try{const[a,s,o,u]=r.map(I=>Math.trunc(I));if(Math.min(o,u)>=Ww||o<=0||u<=0)return null;const l=Math.trunc(o*.25),h=Math.trunc(u*.25),c=Math.max(0,a-l),p=Math.max(0,s-h),m=Math.min(t.width,a+o+l),g=Math.min(t.height,s+u+h);if(m<=c||g<=p)return null;const y=Ye(e,t),_=y.roi(new e.Rect(c,p,m-c,g-p)),$=new e.Mat;e.resize(_,$,new e.Size((m-c)*2,(g-p)*2),0,0,e.INTER_CUBIC);const x=qw(e,$);for(const I of[y,_,$])try{I.delete()}catch{}const T=[(a-c)*2,(s-p)*2,o*2,u*2],S=Pf(e,x,n,T);return S===null?null:{...S,footprint:S.footprint.map(([I,M])=>[I*.5+c,M*.5+p])}}catch{return null}}function Pf(e,t,n,r){const i=Gw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([$,x])=>es(i.H,$,x));if(!Ja(s,t.width,t.height))return null;const o=Ye(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=Ye(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(c,p,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const $ of[o,u,l,h,c,p,m])try{$.delete()}catch{}if(g<Of)return null;const y=ts(e,t,n,i.H);if(y===null)return null;const _=ns(y);return{built:Math.max(y.L,y.R,y.T)>=Pr,footprint:s,overflow:_,edgeScores:y,inliers:i.inliers}}function Vw(e,t,n,r=.03){let i=null,a=1/0;for(const s of e){const[o,u,l,h]=s;if(l<=0||h<=0)continue;const c=r*l,p=r*h;if(t>=o-c&&t<=o+l+c&&n>=u-p&&n<=u+h+p){const m=l*h;m<a&&(a=m,i=[o,u,l,h])}}return i}const Hw=.3,jw=.3;function Kw(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=Hw}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,h=Math.max(o,u,l)<jw;if(!r&&!h)return;t.some(([p,m])=>p>=a.zone.x0&&p<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(s)}),i}const Mt=128,is=.5;function as(e){const t=rr(e,Mt,Mt),n=Mt*Mt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Df(e){const t=e[1]??0;return{built:t>=is,prob:t}}const ar=120,sr=179,Yw=1.3,Xw=3.6,Zw=.45,Qw=6e-4,Jw=.02,e_=6e3,t_=.78,n_=1.25,r_=2.4,i_=.05,a_=1.5,s_=.5,o_=.9,u_=150,l_=18,d_=34,c_=90,h_=130,p_=.13,f_=.15,Dr="magistrates-guild",ss="merchants-guild";function m_(e,t){const n=Ye(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[ar,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[sr,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const h=new e.Mat,c=new e.Mat,p=new e.Mat,m=e.connectedComponentsWithStats(l,h,c,p,8);l.delete(),h.delete(),p.delete();const g=t.width*t.height,y=[];for(let _=1;_<m;_++){const $=c.intAt(_,0),x=c.intAt(_,1),T=c.intAt(_,2),S=c.intAt(_,3),I=c.intAt(_,4),M=I/g;M<Qw||M>Jw||I/Math.max(T*S,1)<Zw||y.push({x:$,y:x,w:T,h:S})}return c.delete(),{blobs:y,mask:o,maskWidth:t.width}}function g_(e,t,n,r,i,a,s){const o=e,u=a,l=s,h=i;if(!h.gray){const F=Ye(e,r);h.gray=new o.Mat,o.cvtColor(F,h.gray,o.COLOR_RGB2GRAY),F.delete(),h.k=new o.KeyPointVector,h.d=new o.Mat;const G=new o.Mat;u.detectAndCompute(h.gray,G,h.k,h.d),G.delete()}const c=n,p=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,p,m,g),p.delete();const y=F=>(m.delete(),g.delete(),F);if(h.d.rows<8||g.rows<8)return y(null);const _=new o.DMatchVectorVector;l.knnMatch(h.d,g,_,2);const $=[],x=[];for(let F=0;F<_.size();F++){const G=_.get(F);if(G.size()===2){const ne=G.get(0);if(ne.distance<t_*G.get(1).distance){const de=h.k.get(ne.queryIdx).pt,ie=m.get(ne.trainIdx).pt;$.push(de.x,de.y),x.push(ie.x,ie.y)}}}if(_.delete(),$.length/2<8)return y(null);const T=o.matFromArray($.length/2,1,o.CV_32FC2,$),S=o.matFromArray(x.length/2,1,o.CV_32FC2,x),I=new o.Mat,M=o.findHomography(T,S,o.RANSAC,5,I);if(T.delete(),S.delete(),I.delete(),M.rows!==3)return M.delete(),y(null);const E=[...M.data64F],v=(F,G)=>{const ne=E[6]*F+E[7]*G+E[8];return[(E[0]*F+E[1]*G+E[2])/ne,(E[3]*F+E[4]*G+E[5])/ne]},z=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([F,G])=>v(F,G));if(z.some(F=>!Number.isFinite(F[0])||!Number.isFinite(F[1])))return M.delete(),y(null);const N=z.map((F,G)=>{const ne=z[(G+1)%4];return Math.hypot(ne[0]-F[0],ne[1]-F[1])}),X=Math.min(...N);if(X<1)return M.delete(),y(null);const U=Math.max(...N)/X;let V=0;for(let F=0;F<4;F++){const[G,ne]=z[F],[de,ie]=z[(F+1)%4];V+=G*ie-de*ne}const A=t,L=Math.abs(V/2)/(A.rows*A.cols);if(U<n_||U>r_||L<i_||L>a_)return M.delete(),y(null);const R=new o.Mat;o.warpPerspective(A,R,M,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),M.delete();const D=new o.Mat;o.cvtColor(R,D,o.COLOR_RGB2GRAY),R.delete();const Y=Math.trunc(r.height/2),O=D.roi(new o.Rect(0,0,r.width,Y)),Z=h.gray.roi(new o.Rect(0,0,r.width,Y)),P=new o.Mat;o.matchTemplate(O,Z,P,o.TM_CCOEFF_NORMED);const j=P.data32F[0];return O.delete(),Z.delete(),P.delete(),D.delete(),y(j)}function y_(e,t,n){let r,i;if(n===Dr)r=ss,i=p_;else if(n===ss)r=Dr,i=f_;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let h=0,c=null;for(const[p,m]of[[0,l],[l,o]]){let g=0,y=0;for(let $=s;$<s+u;$++)for(let x=a+p;x<a+m;x++){const T=($*e.width+x)*e.channels,{h:S,s:I,v:M}=bt(e.data[T],e.data[T+1],e.data[T+2]);if(S>=ar&&S<=sr&&I>=30&&I<=170&&M<=170)continue;g++,(r===ss?S>=l_&&S<=d_&&I>=c_&&M>=h_:S>=95&&S<=130&&I>=80)&&y++}if(g<20)continue;const _=y/g;_>h&&(h=_,c={x:a+p,y:s,w:m-p,h:u})}return h>=i&&c!==null?{id:r,box:c}:null}const w_=1.7,__=140,b_=170,$_=.2,x_=.1,Uf=240,Lf=80,Ff=60,v_=50,Gf="scientists-guild",Wf="tacticians-guild",Ur=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function S_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let I=0;for(let M=0;M<a;M++)e[(i+S)*t+r+M]>0&&I++;o[S]=I/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],c=h-l;if(c<5)return[];const p=a/c;if(p<Yw||p>Xw)return[];if(p>=w_)return[{x:r,y:i+l,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,y=[];let _=0;for(let S=-4;S<=4;S++){const I=Math.exp(-(S*S)/(2*g*g));y.push(I),_+=I}for(let S=0;S<s;S++){let I=0;for(let M=-4;M<=4;M++){const E=Math.min(s-1,Math.max(0,S+M));I+=o[E]*y[M+4]}m[S]=I/_}const $=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let T=l+Math.trunc(c/2);if(x>$){let S=1/0;for(let I=$;I<x;I++)m[I]<S&&(S=m[I],T=I)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:h-T}]}function T_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let h=0;h<s;h++){const c=((r+l)*e.width+n+h)*e.channels,p=(l*s+h)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function I_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=bt(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=__&&s<=b_&&n++)}return t===0?0:n/t}function k_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=bt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=ar&&a<=sr)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function qf(e,t){const n=Ye(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Uf,Lf),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Uf,height:Lf,channels:3,data:i}}function E_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Vf(e,t){const n=E_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:_,s:$,v:x}=bt(n.data[y],n.data[y+1],n.data[y+2]);!(_>=ar&&_<=sr&&$>=30&&$<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const s=a<20,o=Ye(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let h=0,c=0,p=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(h+=l[g*3]*100/255,c+=l[g*3+1]-128,p+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[h/m,c/m,p/m]}function M_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h,s:c,v:p}=bt(e.data[l],e.data[l+1],e.data[l+2]);h>=ar&&h<=sr&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function C_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=bt(e.data[i],e.data[i+1],e.data[i+2]);s>=Ff&&o>=v_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<Ff&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function A_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function Hf(e,t){const n=Ye(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function R_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=qf(e,a);n.set(i,Hf(e,s)),Ur.includes(i)&&r.set(i,Vf(e,s))}return{gray:n,warmLab:r}}function z_(e,t,n){const r=qf(e,t),i=M_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Dr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Gf;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Wf;const a=C_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=Dr;else if(o==="green")u=Gf;else if(o==="red")u=Wf;else{const l=Hf(e,r);let h="",c=-2;for(const p of Ur){const m=n.gray.get(p);if(m===void 0)continue;const g=A_(l,m);g>c&&(c=g,h=p)}u=h||Ur[0]}if(Ur.includes(u)&&n.warmLab.size>0){const l=Vf(e,r);let h=u,c=1/0;for(const[p,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<c&&(c=g,h=p)}return h}return u}function O_(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=m_(e,t);if(s.length===0||n.size===0)return a;const l=e,h=new l.ORB(e_),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const _ of n.keys())p.set(_,{});const m=Ye(e,t);let g=null;try{for(const _ of s){if(r!==void 0&&Date.now()>r)break;const $=_.x+Math.trunc(_.w/2),x=_.y+Math.trunc(_.h/2),T=Math.max(u_,Math.trunc(o_*Math.max(_.w,_.h))),S=Math.max(0,$-T),I=Math.max(0,x-T),M=Math.min(t.width,$+T),E=Math.min(t.height,x+T);if(M-S<16||E-I<16)continue;const v=m.roi(new l.Rect(S,I,M-S,E-I)),z=new l.Mat;l.cvtColor(v,z,l.COLOR_RGB2GRAY);let N=null,X=-2;for(const[L,R]of n){if(r!==void 0&&Date.now()>r)break;const D=g_(e,v,z,R,p.get(L),h,c);D!==null&&D>X&&(X=D,N=L)}v.delete(),z.delete();const U=new Set;if(N!==null&&X>=s_){a.push({id:N,boundingBox:{x:_.x,y:_.y,width:_.w,height:_.h},confidence:1}),U.add(N);const L=y_(t,_,N);L&&(a.push({id:L.id,boundingBox:{x:L.box.x,y:L.box.y,width:L.box.w,height:L.box.h},confidence:.9}),U.add(L.id))}if(i===void 0||i.size===0)continue;const V=S_(o,u,_);if(V.length!==2)continue;const A=V.map(L=>T_(t,L));if(!A.some(L=>L.width*L.height===0||k_(L)<x_))for(let L=0;L<V.length;L++){const R=A[L];if(I_(R)<$_)continue;g===null&&(g=R_(e,i));const D=z_(e,R,g);if(D&&!U.has(D)){U.add(D);const Y=V[L];a.push({id:D,boundingBox:{x:Y.x,y:Y.y,width:Y.w,height:Y.h},confidence:1})}}}}finally{m.delete();for(const _ of p.values()){const $=_;for(const x of["gray","k","d"])try{(y=$[x])==null||y.delete()}catch{}}try{h.delete(),c.delete()}catch{}}return a}const jf=128,N_=.56,B_=15,P_=.58,D_=70,U_=50,L_=.12,F_=.2,G_=.1,W_=.17,Kf=.15;function q_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Yf(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),h=Math.max(0,o-u),c=Math.min(n,s+u),p=Math.min(r,o+u),m=c-l,g=p-h,y=new Uint8Array(m*g*i);for(let _=0;_<g;_++){const $=((_+h)*n+l)*i;y.set(a.subarray($,$+m*i),_*m*i)}return{width:m,height:g,channels:i,data:y}}function V_(e){const t=Yf(e,N_),n=By(t),r=Tf(n,jf,jf);return Py(r)}function H_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,s+=l*l,o+=h*h}return a/(Math.sqrt(s*o)+1e-6)}function j_(e){const t=new Map([["masonry",0],["strategy",0]]),n=Yf(e,P_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const m=p*a,{h:g,s:y,v:_}=bt(s[m],s[m+1],s[m+2]);y>=D_&&_>=U_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const h=u/o,c=l/o;return h>=L_&&t.set("masonry",Kf*Math.min(1,h/F_)),c>=G_&&t.set("strategy",Kf*Math.min(1,c/W_)),t}function K_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=V_(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=B_)a.push(Ly(n,l,i));const s=new Map;for(const[l,h]of t){let c=-1/0;for(const p of a){const m=H_(p,h);m>c&&(c=m)}s.set(l,c)}for(const[l,h]of j_(e))h>0&&s.has(l)&&s.set(l,s.get(l)+h);let o="",u=-1/0;for(const[l,h]of s)h>u&&(o=l,u=h);return[o,u]}const Qt=224,Y_=512,X_=[.485,.456,.406],Z_=[.229,.224,.225];function Q_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function J_(e){const t=rr(e,Qt,Qt),n=Qt*Qt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-X_[a])/Z_[a];return r}function eb(e){const t=3*Qt*Qt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(J_(Zt(e,r)),r*t);return n}function tb(e,t=Y_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function nb(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const On=96,rb=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],ib=.45;function ab(e){const t=rr(e,On,On),n=On*On,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function sb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=ib?rb[t]??"":"",prob:n}}const Nn=128,ob=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],ub=.5,lb=.9;function db(e){const t=rr(e,Nn,Nn),n=Nn*Nn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function cb(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let s=0;s<t;s++)for(let o=0;o<n;o++){const u=s,h=((n-1-o)*t+u)*r,c=(s*n+o)*r;for(let p=0;p<r;p++)a[c+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function hb(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=cb(n);return n}function pb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function fb(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:hb(e,i),s=await t(db(a)),o=pb(s);o.prob>r&&(r=o.prob,n=o.index)}return{id:r>=ub?ob[n]??"":"",prob:r}}const Bn=96,mb=[1,2,3,4,5,6,7],gb=.8;function yb(e){const t=oy(e,e.width*2,e.height*2),n=qa({width:e.width*2,height:e.height*2,channels:3,data:t},Bn,Bn),r=Bn*Bn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let s=0;s<3;s++)i[s*r+a]=n[a*3+s]/255;return i}function wb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:mb[t],prob:e[t]}}const Pn=128,Xf=.35,_b=["fp","laurel"],bb=.85;function $b(e){const t=qa(e,Pn,Pn),n=Pn*Pn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function xb(e){return e[_b.indexOf("fp")]}const Jt=64,Zf=.5,vb=[.67,1.24];function Sb(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),s=Math.min(e.width,t+r),o=Math.min(e.height,n+r),u=s-i,l=o-a;if(u<=0||l<=0)return null;const h=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let _=0;_<l;_++){const $=a+_,x=$-n;for(let T=0;T<u;T++){const S=i+T,I=S-t,M=(_*u+T)*3;if(I*I+x*x<=p){const E=($*e.width+S)*h;c[M]=e.data[E],c[M+1]=e.data[E+1],c[M+2]=e.data[E+2]}else c[M]=255,c[M+1]=255,c[M+2]=255}}const m=qa({width:u,height:l,channels:3,data:c},Jt,Jt),g=Jt*Jt,y=new Float32Array(3*g);for(let _=0;_<g;_++)for(let $=0;$<3;$++)y[$*g+_]=m[_*3+$]/255;return y}function Tb(e){return e[1]}const Ib=2.25,kb=3,Eb=1.15,Mb=.5,Cb=2.5,Ab=.75,Rb=2.25,zb=1.3,Ob=.77;function Lr(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function Nb(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),t.length<=2)return t;const n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Qf(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[(a+1)%i];if(o>t!=l>t){const h=(u-s)*(t-o)/(l-o)+s;e<h&&(r=!r)}}return r}function Bb(e,t,n){if(n.length>=3&&Qf(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-s,c=l-o,p=h*h+c*c,m=p===0?0:Math.max(0,Math.min(1,((e-s)*h+(t-o)*c)/p));r=Math.min(r,Math.hypot(e-(s+m*h),t-(o+m*c)))}return r}function Pb(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function Db(e,t,n){const[r,i]=e,a=t[0]-r,s=t[1]-i;if(a===0&&s===0)return!1;const[o,u,l,h]=n;let c=0,p=1;const m=[[-a,r-o],[a,l-r],[-s,i-u],[s,h-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const _=y/g;if(g<0?c=Math.max(c,_):p=Math.min(p,_),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const os=e=>e.box[3]/Math.max(1,e.box[2]),Ft=e=>os(e)>Eb,Dn=e=>os(e)>=zb||os(e)<=Ob;function us(e){const[t,n,r,i]=e.box;if(r>=i){const s=7*i;return[t,n-s,r,i+2*s]}const a=7*r;return[t-a,n,r+2*a,i]}function Ub(e,t,n,r,i){const a=new Set(t),s=[...e.map((R,D)=>({box:[R[0],R[1],R[2],R[3]],kind:a.has(D)?"card":"tucked",src:["banner",D]})),...n.map((R,D)=>({box:[R[0],R[1],R[2],R[3]],kind:"wonder",src:["wonder",D]}))],o=e.map(()=>"player"),u=n.map(()=>"player");if(s.length===0)return{bannerOwner:o,wonderOwner:u,opponentFound:!1,hulls:[],pointOwner:()=>"player"};const l=s.map(R=>[R.box[0]+R.box[2]/2,R.box[1]+R.box[3]/2]);let h=s.filter(R=>R.kind!=="wonder").map(R=>Math.hypot(R.box[2],R.box[3])).sort((R,D)=>R-D);h.length===0&&(h=s.map(R=>Math.hypot(R.box[2],R.box[3])).sort((R,D)=>R-D));const c=h[Math.floor(h.length/2)],p=(Ib*c)**2,m=s.map((R,D)=>D),g=R=>{let D=R;for(;m[D]!==D;)m[D]=m[m[D]],D=m[D];return D},y=s.map((R,D)=>R.kind==="card"?D:-1).filter(R=>R>=0),_=s.map((R,D)=>R.kind!=="card"?D:-1).filter(R=>R>=0);for(let R=0;R<y.length;R+=1)for(let D=R+1;D<y.length;D+=1){const Y=y[R],O=y[D],Z=s[Y],P=s[O];if(Dn(Z)&&Dn(P)&&Ft(Z)!==Ft(P))continue;const j=l[Y][0]-l[O][0],F=l[Y][1]-l[O][1],G=j*j+F*F;let ne=G<=p;!ne&&Dn(Z)&&Dn(P)&&Ft(Z)===Ft(P)&&G<=(4*c)**2&&(ne=Lr(us(Z),us(P))<=.5*c),ne&&(m[g(Y)]=g(O))}for(let R=0;R<_.length;R+=1)for(let D=R+1;D<_.length;D+=1){const Y=_[R],O=_[D];Lr(s[Y].box,s[O].box)<=Ab*c&&(m[g(Y)]=g(O))}const $=new Map;for(const R of _){const D=g(R);$.set(D,[...$.get(D)??[],R])}const x=new Map;for(const R of y){const D=g(R);x.set(D,[...x.get(D)??[],R])}for(const R of $.values()){const D=R.filter(P=>s[P].kind==="wonder"&&Dn(s[P])).map(P=>Ft(s[P])),Y=D.length>0?D.filter(Boolean).length*2>D.length:null,O=[];for(const[P,j]of x){let F=Number.POSITIVE_INFINITY;for(const de of R)for(const ie of j)F=Math.min(F,Lr(s[de].box,s[ie].box));if(F>Rb*c)continue;const ne=j.filter(de=>Ft(s[de])).length/j.length>=.5;Y!==null&&ne!==Y||O.push([P,F,ne])}if(O.length===0)continue;const Z=new Set(O.map(P=>P[2]));if(O.length>=2&&Z.size===1&&Y!==null){const P=O[0][0];for(const[j]of O.slice(1))m[g(j)]=g(P);m[g(R[0])]=g(P)}else{const P=O.reduce((j,F)=>F[1]<j[1]?F:j);m[g(R[0])]=g(P[0])}}let T=new Map;for(let R=0;R<s.length;R+=1){const D=g(R);T.set(D,[...T.get(D)??[],R])}const S=s.map((R,D)=>R.kind==="wonder"?D:-1).filter(R=>R>=0);if(S.length>0){const R=(Y,O)=>{const[Z,P,j,F]=us(s[Y]),[G,ne,de,ie]=s[O].box,ye=Math.max(0,Math.min(Z+j,G+de)-Math.max(Z,G)),Be=Math.max(0,Math.min(P+F,ne+ie)-Math.max(P,ne));return ye*Be>=.9*s[Y].box[2]*s[Y].box[3]},D=new Map;for(let Y=0;Y<s.length;Y+=1)if(!(s[Y].kind!=="card"||!Dn(s[Y])))for(const O of S){const Z=Lr(s[Y].box,s[O].box);if(Z<=.8*c&&Ft(s[Y])!==Ft(s[O])&&R(Y,O)){const P=D.get(O);(!P||Z<P[1])&&D.set(O,[Y,Z])}}for(const[Y,[O]]of D){const Z=g(Y);for(const[P,j]of T){const F=j.indexOf(O);if(F>=0&&P!==Z){j.splice(F,1),T.set(Z,[...T.get(Z)??[],O]),s[O].kind="tucked";break}}}T=new Map([...T].filter(([,Y])=>Y.length>0))}const I=R=>R.filter(D=>s[D].kind==="card").length,M=R=>{const D=R.filter(Y=>s[Y].kind==="card"||s[Y].kind==="wonder");return D.length===0?null:D.filter(Y=>Ft(s[Y])).length/D.length},E=R=>[R.reduce((D,Y)=>D+l[Y][0],0)/R.length,R.reduce((D,Y)=>D+l[Y][1],0)/R.length],v=[i[0]/2,i[1]/2],z=[...T.values()].sort((R,D)=>{const Y=I(R),O=I(D);if(Y!==O)return O-Y;const Z=Math.hypot(E(R)[0]-v[0],E(R)[1]-v[1]),P=Math.hypot(E(D)[0]-v[0],E(D)[1]-v[1]);return Z-P}),N=E(z[0]),X=M(z[0]),U=[],V=[];let A=!1;return z.forEach((R,D)=>{let Y;if(D===0||I(R)<kb)Y="player";else{const P=M(R),j=P!==null&&X!==null&&Math.abs(P-X)>=Mb,F=E(R),G=r.some(ne=>Db(N,F,ne));Y=j||G?"opponent":"player"}Y==="opponent"&&(A=!0);const O=[],Z=[];for(const P of R){const[j,F,G,ne]=s[P].box;O.push([j,F],[j+G,F],[j,F+ne],[j+G,F+ne]),Z.push(s[P].box);const[de,ie]=s[P].src;de==="banner"?o[ie]=Y:u[ie]=Y}U.push([Y,Nb(O)]),V.push([Y,Z])}),{bannerOwner:o,wonderOwner:u,opponentFound:A,hulls:U,pointOwner:(R,D)=>{if(U.length===0)return"player";const Y=c>0?Cb*c:Number.POSITIVE_INFINITY,O=F=>Math.min(...V[F][1].map(G=>Pb(R,D,G))),Z=U.map(([,F],G)=>F.length>=3&&Qf(R,D,F)?G:-1).filter(F=>F>=0);if(Z.length>0){const F=Z.reduce((G,ne)=>O(ne)<O(G)?ne:G);return U[F][0]}let P=-1,j=Number.POSITIVE_INFINITY;return U.forEach(([,F],G)=>{const ne=Bb(R,D,F);ne<j&&(P=G,j=ne)}),P>=0&&j<=Y?U[P][0]:"none"}}}const Lb=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],Fb=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],Gb=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],Wb=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],qb=[...Fb,...Gb,...Wb,...Lb];Object.fromEntries(qb.map(e=>[e.id,e]));const Vb=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const ze="/7wd-scorer/models/";let Jf=!1;const Fr=new Map;function em(){var e;Jf||(Ae.wasm.wasmPaths="/7wd-scorer/ort/",Ae.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Jf=!0)}const ls=new Set;function Hb(e){em();let t=Fr.get(e);return t===void 0&&(t=tt.create(`${ze}${Et[e].onnx}`,{executionProviders:ls.has(e)?["wasm"]:["webgpu","wasm"]}),Fr.set(e,t),t.catch(()=>Fr.delete(e))),t}let ds=null,cs=null;const jb=.75,Kb=4,Yb=.65,Xb=3e4;let hs=null;function ps(){return hs===null&&(hs=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),hs}const tm=new Map;function fs(e){let t=tm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${ze}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),tm.set(e,t)),t}function ms(e){return fs(`wonder-refs/${e}.jpg`)}const nm=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Zb(){const e=new Map;for(const t of nm){const n=await fs(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function Qb(){const e=new Map;for(const t of nm){const n=await fs(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const Jb=.6,e1=12,t1=45e3;let gs=null;function rm(){return gs===null&&(em(),gs=(async()=>{try{const[e,t,n,r]=await Promise.all([tt.create(`${ze}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),tt.create(`${ze}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${ze}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${ze}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:_w(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),gs}async function n1(e,t){const n=Math.max(ww/Lt,t.width/t.height),{tensor:r,width:i}=$w(t,n),a={[e.rec.inputNames[0]]:new Fe("float32",r,[1,3,Lt,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,l]=s.dims,h=s.data,c=new Array(u),p=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const _=m*l;for(let $=0;$<l;$++){const x=h[_+$];x>y&&(y=x,g=$)}c[m]=g,p[m]=y}return bw(c,p,e.charset)}async function r1(e,t){const n=await rm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+t1;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`,s/4);const o=Zt(e,s),u=uw(o),l={[n.det.inputNames[0]]:new Fe("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],c=fw(h.data,u,o.width,o.height).slice(0,e1);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){a=!0;break e}const m=mw(o,p.quad);if(m.width<m.height*1.5)continue;const[g,y]=await n1(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<Jb||g.trim().length<Kb)continue;const _=Ew(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",_),_===null||_.confidence<jb||_.kind!=="wonder")continue;const $=r.get(_.id);($===void 0||_.confidence>$.confidence)&&r.set(_.id,{id:_.id,name:_.name,confidence:_.confidence,nameBox:im(p,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function im(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),l=Math.min(...o),h=Math.min(...u);return{x:l,y:h,width:Math.max(...o)-l,height:Math.max(...u)-h}}function i1(){return cs===null&&(cs=fetch(`${ze}laurel_gallery.json`).then(async e=>e.ok?Xy(await e.json()):[]).catch(()=>[])),cs}function a1(e,t,n,r){return Gr(e,t-r,n-r,2*r,2*r)}function Gr(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),h=Math.max(0,u-s),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=((p+s)*e.width+(m+a))*e.channels,y=(p*l+m)*3;c[y]=e.data[g],c[y+1]=e.data[g+1],c[y+2]=e.data[g+2]}return{width:l,height:h,channels:3,data:c}}function s1(){return ds===null&&(ds=fetch(`${ze}token_templates.json`).then(async e=>e.ok?q_(await e.json()):new Map).catch(()=>new Map)),ds}let ys=null;function o1(){return ys===null&&(ys=(async()=>{try{const e=await fetch(`${ze}token_embed_index.json`);if(!e.ok)return null;const t=Q_(await e.json());return{session:await tt.create(`${ze}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),ys}const u1=.92;let ws=null;function l1(){return ws===null&&(ws=(async()=>{try{return(await fetch(`${ze}guild_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ws}let _s=null;function d1(){return _s===null&&(_s=(async()=>{try{return(await fetch(`${ze}laurel_digit.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),_s}let bs=null;function c1(){return bs===null&&(bs=(async()=>{try{return(await fetch(`${ze}laurel_filter.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),bs}async function h1(e,t,n){const[r,i,a,s]=t,o=a-r,u=s-i;if(o<=0||u<=0)return null;const l=Math.trunc(Xf*o),h=Math.trunc(Xf*u),c=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(e.width,a+l),g=Math.min(e.height,s+h),y=Gr(e,c,p,m-c,g-p);if(y.width<=0||y.height<=0)return null;try{const _=$b(y),$=await n.run({[n.inputNames[0]]:new Fe("float32",_,[1,3,Pn,Pn])});return xb($[n.outputNames[0]].data)}catch{return null}}let $s=null;function p1(){return $s===null&&($s=(async()=>{try{return(await fetch(`${ze}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),$s}async function f1(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=Sb(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const h=new Float32Array(t.length*3*Jt*Jt);l.forEach((m,g)=>h.set(m,g*m.length));const p=(await n.run({[n.inputNames[0]]:new Fe("float32",h,[t.length,3,Jt,Jt])}))[n.outputNames[0]].data;return t.map((m,g)=>Tb(p.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),s=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,o=Math.trunc(s);if(o>=8){const u=await r(t.map(()=>o));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let xs=null;function am(){return xs===null&&(xs=(async()=>{try{return(await fetch(`${ze}tuck_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),xs}const sm=.2,m1=.3,om=.25,g1=.1;let vs=null;function y1(){return vs===null&&(vs=(async()=>{try{return(await fetch(`${ze}track_band.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),vs}let Ss=null;function w1(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=om)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=o[2]/o[3];if(!(Math.abs(Math.log(h))<=om)&&r>1==h>1)return!0}return!1}const _1=.4;function b1(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function $1(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||b1(a,u)>=_1)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function x1(){return Ss===null&&(Ss=(async()=>{try{return(await fetch(`${ze}tuck_box.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ss}async function v1(e,t,n){const[r,i,a,s]=t;if(a<=0||s<=0)return null;const o=Math.round(a*sm),u=Math.round(s*sm),l=Math.max(0,Math.round(r-o)),h=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+o)),p=Math.min(e.height,Math.round(i+s+u)),m=c-l,g=p-h;if(m<=0||g<=0)return null;const y=e.channels,_=new Uint8ClampedArray(m*g*y);for(let T=0;T<g;T++){const S=((h+T)*e.width+l)*y;_.set(e.data.subarray(S,S+m*y),T*m*y)}const $={width:m,height:g,channels:y,data:_};let x=null;for(let T=0;T<4;T++){const S=T===0?$:Zt($,T),I=S.width,M=I-Math.floor(m1*I),E=I-M;if(E<=0)continue;const v=new Uint8ClampedArray(E*S.height*S.channels);for(let V=0;V<S.height;V++){const A=(V*I+M)*S.channels;v.set(S.data.subarray(A,A+E*S.channels),V*E*S.channels)}const z={width:E,height:S.height,channels:S.channels,data:v},N=as(z),U=(await n.run({[n.inputNames[0]]:new Fe("float32",N,[1,3,Mt,Mt])}))[n.outputNames[0]].data[1]??0;x=x===null?U:Math.max(x,U)}return x}let Ts=null;function S1(){return Ts===null&&(Ts=(async()=>{try{return(await fetch(`${ze}wonder_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ts}async function T1(e,t,n,r,i,a){var p;const s=(m,g,y,_)=>{const $=Math.max(0,Math.round(m)),x=Math.max(0,Math.round(g)),T=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+_)),I=T-$,M=S-x;if(I<=0||M<=0)return null;const E=t.channels,v=new Uint8ClampedArray(I*M*E);for(let z=0;z<M;z++){const N=((x+z)*t.width+$)*E;v.set(t.data.subarray(N,N+I*E),z*I*E)}return{width:I,height:M,channels:E,data:v}},o=async m=>(await r.run({[r.inputNames[0]]:new Fe("float32",m,[1,3,Nn,Nn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,_,$]=m;if(_<=0||$<=0)continue;const x=s(g,y,_,$);if(x===null)continue;const{id:T,prob:S}=await fb(x,o);if(T===""||S<lb)continue;const I=u.get(T);(I===void 0||S>I.prob)&&u.set(T,{prob:S,box:m})}const l=[],h=await am(),c=await x1();for(const[m,{prob:g,box:y}]of u){const[_,$,x,T]=y;let S={x:Math.round(_),y:Math.round($),width:Math.round(x),height:Math.round(T)},I=null,M=[],E=null;if(Date.now()<i)try{const L=await ms(m);if(L!==null){const R=Bf(e,t,L,y);if(R!==null){I=R.footprint,M=R.overflow;const D=I.map(P=>P[0]),Y=I.map(P=>P[1]),O=Math.max(0,Math.round(Math.min(...D))),Z=Math.max(0,Math.round(Math.min(...Y)));if(S={x:O,y:Z,width:Math.min(t.width,Math.round(Math.max(...D)))-O,height:Math.min(t.height,Math.round(Math.max(...Y)))-Z},h!==null)try{const P=Nf(e,t,L,I);if(P!==null){const j=as(P),F=await h.run({[h.inputNames[0]]:new Fe("float32",j,[1,3,Mt,Mt])});E=Df(F[h.outputNames[0]].data).prob}}catch{}}}}catch(L){console.warn(`[wonders-cls] ${m} registration failed:`,L)}const v=I!==null?rs(I,M):null,z=[];if(E!==null&&z.push(E>=is?1:0),c!==null)try{const L=await v1(t,y,c);L!==null&&z.push(L>=is?1:0)}catch{}const N=v??S,X=a.some(L=>{const R=L.box[0]+L.box[2]/2,D=L.box[1]+L.box[3]/2;return R>=N.x&&R<=N.x+N.width&&D>=N.y&&D<=N.y+N.height});z.push(X?1:0);let U=z.length>0&&z.reduce((L,R)=>L+R,0)*2>z.length;U&&w1(N,S,a)&&(U=!1);const V={id:m,name:((p=Vb[m])==null?void 0:p.name)??m,builtWithCardUnderneath:U,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},A=v??S;l.push({obj:V,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height}})}return l}async function I1(e,t){const n=await o1();if(n!==null)try{const r=eb(e),i=new Fe("float32",r,[4,3,Qt,Qt]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=nb(n.index,tb(s));return u<u1?["",-1]:[o,u]}catch{}return K_(e,t)}async function Is(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function en(e,t){const n=Et[e],{tensor:r,params:i}=mf(t,n.input),a=async()=>{const s=await Hb(e),o={[s.inputNames[0]]:new Fe("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(ls.has(e))throw s;return ls.add(e),Fr.delete(e),await a()}}const k1=6,E1=2,M1=5,C1=2;async function A1(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Is(e),r=await en("banner",n),i=bf(r.rows,r.params,Et.banner.conf);if(t.banners=i.length,i.length>=k1)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await en("laurel",n),s=Va(a.rows,a.params,Et.laurel.conf);if(t.laurels=s.length,s.length>=E1)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await en("coin",n),u=wf(o.rows,o.params,Et.coin.conf);return t.coins=u.length,u.length>=M1?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=C1?{...t,kind:"board",confidence:.4}:t}function R1(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function ks(e,t,n,r,i=()=>{},a="player"){const s={},o=[],u=[],l=[],h=[],c=[],p=[];let m=0,g=0,y=0,_=0,$=0;for(const M of e){$+=1;const E=`${t} photo ${$}/${e.length}`;r(`${E}: reading pixels…`,.01);const v=await Is(M);r(`${E}: card banners…`,.04);const z=await en("banner",v);let N=bf(z.rows,z.params,Et.banner.conf);r(`${E}: progress tokens…`,.08);let X=[];const U=await y1();if(U!==null)try{const q=mf(v,1280),Q=await U.run({[U.inputNames[0]]:new Fe("float32",q.tensor,[1,3,1280,1280])});X=Va(Q[U.outputNames[0]].data,q.params,g1)}catch{}const V=await en("token",v),A=await s1(),L=l.length,R=[];for(const q of py(V.rows,V.params,Et.token.conf)){if(R.push({cx:q.cx,cy:q.cy,r:q.r}),X.some(([ue,le,Ie,he])=>q.cx>=ue&&q.cx<=Ie&&q.cy>=le&&q.cy<=he))continue;const[Q,ee]=await I1(Sf(v,q),A);Q===""&&ee<0?R.pop():Q===""?g+=1:l.some(ue=>ue.id===Q)||l.push({id:Q,center:[q.cx,q.cy],radius:q.r,confidence:Math.round(ee*1e4)/1e4})}r(`${E}: coins…`,.14);const D=await en("coin",v),Y=wf(D.rows,D.params,Et.coin.conf).filter(q=>!R.some(Q=>(q.cx-Q.cx)**2+(q.cy-Q.cy)**2<=q.r*q.r)),O=await p1(),Z=O!==null?await f1(v,Y,O):null,P=(Z!==null?Y.filter((q,Q)=>Z[Q]>=Zf).map(q=>q.r):[]).sort((q,Q)=>q-Q),j=P.length>0?P.length%2===1?P[(P.length-1)/2]:(P[P.length/2-1]+P[P.length/2])/2:null,[F,G]=vb,ne=Y.map((q,Q)=>{const ee=Z!==null?Z[Q]:null;return ee===null||ee>=Zf?"keep":j!==null&&j>0&&q.r/j>=F&&q.r/j<=G?"suspect":"drop"}),de=Y.filter((q,Q)=>ne[Q]==="keep"),ie=Ny(v,de),ye=[];let Be=0;if(Y.forEach((q,Q)=>{if(ne[Q]!=="drop"){if(ne[Q]==="suspect"){const ee=Z[Q];ye.push({denomination:null,center:[q.cx,q.cy],radius:q.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${ee.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}ye.push({denomination:ie[Be++],center:[q.cx,q.cy],radius:q.r,denomSource:"colour"})}}),Y.length>0&&ye.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${Y.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ye.length>=2){const q=ye.map(ee=>ee.radius).sort((ee,ue)=>ee-ue),Q=q.length%2===1?q[(q.length-1)/2]:(q[q.length/2-1]+q[q.length/2])/2;if(Q>0)for(const ee of ye)ee.radius/Q>2&&(ee.suspect=!0,ee.suspectReason=`radius ${ee.radius}px is ${(ee.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const Le=h.length,Me=[],Xe=Date.now()+Xb;let be=null,pe=null;const et=()=>(pe===null&&(pe=(async()=>{try{const{rows:q,params:Q}=await en("wonder",v);return gf(q,Q,Et.wonder.conf,Number.POSITIVE_INFINITY).map(ee=>ee.box)}catch{return[]}})()),pe),xt=[];let Ct=!1;const vt=await S1();if(vt!==null){const q=await et();if(q.length>0&&(be=await ps(),be!==null)){r(`${E}: identifying wonders…`,.35);const Q=await T1(be,v,q,vt,Xe,N);for(const ee of Q)h.some(ue=>ue.id===ee.obj.id)||(h.push(ee.obj),xt.push({obj:ee.obj,edgeScores:ee.edgeScores,zone:ee.zone}),Me.push(ee.zone));Ct=Q.length>0}}Ct||r(`${E}: wonder names…`,.2);const St=Ct?{wonders:[],aborted:!1}:await r1(v,(q,Q)=>r(`${E}: ${q}`,.2+.35*(Q??0)));be===null&&(be=St.wonders.length>0?await ps():null);for(const q of St.wonders){let Q=null;if(be!==null&&Date.now()<Xe){r(`${E}: registering ${q.name}…`,.6);try{const ee=await ms(q.id);if(ee!==null){let ue=Lw(be,v,ee,[[q.nameBox.x,q.nameBox.y],[q.nameBox.x+q.nameBox.width,q.nameBox.y],[q.nameBox.x+q.nameBox.width,q.nameBox.y+q.nameBox.height],[q.nameBox.x,q.nameBox.y+q.nameBox.height]]);if(ue===null){const le=await et(),Ie=Vw(le,q.nameBox.x+q.nameBox.width/2,q.nameBox.y+q.nameBox.height/2);Ie!==null&&(ue=Bf(be,v,ee,Ie))}if(ue!==null){let le=ue.built,Ie=!1;const he=await am();if(he!==null)try{const Pe=Nf(be,v,ee,ue.footprint);if(Pe!==null){const Ze=as(Pe),Qe=await he.run({[he.inputNames[0]]:new Fe("float32",Ze,[1,3,Mt,Mt])});le=Df(Qe[he.outputNames[0]].data).built,Ie=!0}}catch{}const fe=ue.footprint.map(Pe=>Pe[0]),Oe=ue.footprint.map(Pe=>Pe[1]),We=Math.max(0,Math.round(Math.min(...fe))),qe=Math.max(0,Math.round(Math.min(...Oe)));Q={built:le,boundingBox:{x:We,y:qe,width:Math.min(v.width,Math.round(Math.max(...fe)))-We,height:Math.min(v.height,Math.round(Math.max(...Oe)))-qe},tuckRegion:rs(ue.footprint,ue.overflow),edgeScores:ue.edgeScores,builtByTuck:Ie}}}}catch(ee){console.warn(`[wonders-reg] ${q.id} failed:`,ee)}}if(Q!==null){const ee=Q.tuckRegion??Q.boundingBox;Me.push({x0:ee.x,y0:ee.y,x1:ee.x+ee.width,y1:ee.y+ee.height})}else{const ee=Math.max(8,q.nameBox.height),ue=Math.round(q.nameBox.width*.15);Me.push({x0:q.nameBox.x-ue,y0:q.nameBox.y-ee*2.5,x1:q.nameBox.x+q.nameBox.width+ue,y1:q.nameBox.y+q.nameBox.height+ee*2.5})}if(!h.some(ee=>ee.id===q.id)){const ee=(Q==null?void 0:Q.builtByTuck)===!0,ue=ee?Q.built:!1,le=!ee&&(Q==null?void 0:Q.built)===!0,Ie={id:q.id,name:q.name,builtWithCardUnderneath:ue,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:q.confidence,...le?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};h.push(Ie),xt.push({obj:Ie,edgeScores:Q&&!Q.builtByTuck?Q.edgeScores:null,zone:Me[Me.length-1]})}}if(!Ct){const q=Kw(xt.map(Q=>({built:Q.obj.builtWithCardUnderneath,edgeScores:Q.edgeScores,zone:Q.zone})),N.map(Q=>[Q.box[0]+Q.box[2]/2,Q.box[1]+Q.box[3]/2]));for(const Q of q){const ee=xt[Q];ee.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${ee.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(N.length>0){const Q=new Set(q);for(let ee=0;ee<xt.length;ee++){const ue=xt[ee];if(Q.has(ee)||!ue.obj.builtWithCardUnderneath)continue;const le=ue.obj.tuckRegion;if(le===void 0)continue;if(!N.some(he=>{const fe=he.box[0]+he.box[2]/2,Oe=he.box[1]+he.box[3]/2;return fe>=le.x&&fe<=le.x+le.width&&Oe>=le.y&&Oe<=le.y+le.height})){const he=ue.obj;he.builtWithCardUnderneath=!1,he.suspect=!0,he.suspectReason="built-unconfirmed"}}}}if(St.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${E}: the wonder-name read ran out of its time budget on this device — ${St.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),be!==null&&St.wonders.length>0&&Date.now()<Xe)try{const q=await rm(),Q=(q==null?void 0:q.catalog.filter(ue=>ue.kind==="wonder").map(ue=>ue.id))??[],ee=new Map;for(const ue of Q)if(!h.some(le=>le.id===ue)){const le=await ms(ue);le!==null&&ee.set(ue,le)}if(ee.size>0){r(`${E}: searching occluded wonders…`,.7);const ue=Uw(be,v,ee,Xe);for(const le of ue){const Ie=le.footprint.map(Qe=>Qe[0]),he=le.footprint.map(Qe=>Qe[1]),fe=Math.max(0,Math.round(Math.min(...Ie))),Oe=Math.max(0,Math.round(Math.min(...he))),We={x:fe,y:Oe,width:Math.min(v.width,Math.round(Math.max(...Ie)))-fe,height:Math.min(v.height,Math.round(Math.max(...he)))-Oe};if(h.some(Qe=>{const rt=Qe.boundingBox,vn=Math.max(0,Math.min(rt.x+rt.width,We.x+We.width)-Math.max(rt.x,We.x)),De=Math.max(0,Math.min(rt.y+rt.height,We.y+We.height)-Math.max(rt.y,We.y)),it=vn*De,at=rt.width*rt.height+We.width*We.height-it;return at>0&&it/at>Dw}))continue;const Pe=q==null?void 0:q.catalog.find(Qe=>Qe.id===le.id);h.push({id:le.id,name:(Pe==null?void 0:Pe.nameFr)??(Pe==null?void 0:Pe.name)??le.id,builtWithCardUnderneath:le.built,boundingBox:We,...le.tuckRegion?{tuckRegion:le.tuckRegion}:{},confidence:Math.round(le.confidence*1e4)/1e4});const Ze=le.tuckRegion??We;Me.push({x0:Ze.x,y0:Ze.y,x1:Ze.x+Ze.width,y1:Ze.y+Ze.height})}}}catch(q){console.warn("[wonders-reg] discovery failed:",q)}const $n=a==="opponent";let ct=(q,Q)=>!$n;try{const q=h.slice(Le),Q=[];N.forEach((he,fe)=>{const Oe=he.box[0]+he.box[2]/2,We=he.box[1]+he.box[3]/2;Me.some(qe=>Oe>=qe.x0&&Oe<=qe.x1&&We>=qe.y0&&We<=qe.y1)||Q.push(fe)});const ee=[],ue=[];q.forEach((he,fe)=>{const Oe=he.boundingBox;Oe&&Oe.width>0&&(ee.push(fe),ue.push([Oe.x,Oe.y,Oe.width,Oe.height]))});const le=Ub(N.map(he=>he.box),Q,ue,X,[v.width,v.height]);ct=(he,fe)=>le.pointOwner(he,fe)==="opponent"===$n,N=N.filter((he,fe)=>le.bannerOwner[fe]==="opponent"===$n);const Ie=q.map(()=>"player");ee.forEach((he,fe)=>{Ie[he]=le.wonderOwner[fe]});for(let he=q.length-1;he>=0;he-=1)Ie[he]==="opponent"!==$n&&h.splice(Le+he,1);Me.length=0;for(const he of h.slice(Le)){const fe=he.tuckRegion??he.boundingBox;fe&&Me.push({x0:fe.x,y0:fe.y,x1:fe.x+fe.width,y1:fe.y+fe.height})}for(let he=l.length-1;he>=L;he-=1){const[fe,Oe]=l[he].center;ct(fe,Oe)||l.splice(he,1)}}catch(q){console.warn("[city-split] failed (side unfiltered):",q)}for(const q of ye)ct(q.center[0],q.center[1])&&(m+=q.denomination??0,u.push(q));const tn=[];for(const q of N){const Q=q.box[0]+q.box[2]/2,ee=q.box[1]+q.box[3]/2;if(Me.some(le=>Q>=le.x0&&Q<=le.x1&&ee>=le.y0&&ee<=le.y1)){_+=1;continue}tn.push(q),s[q.family]=(s[q.family]??0)+1,y+=1}const Un=_y(tn),Wr=new Set(Un.map(q=>q.box.join(",")));for(const q of $y(tn))Wr.has(q.box.join(","))||Un.push(q);for(const q of Un)p.push(q);if(tn.some(q=>q.family==="guild")){const q=await l1();if(q!==null){r(`${E}: identifying guilds…`,.75);for(const Q of tn)if(Q.family==="guild")try{const[ee,ue,le,Ie]=Q.box,he=Gr(v,ee,ue,le,Ie),fe=ab(he),Oe={[q.inputNames[0]]:new Fe("float32",fe,[1,3,On,On])},qe=(await q.run(Oe))[q.outputNames[0]].data,{id:Pe,prob:Ze}=sb(qe);Pe!==""&&!c.some(Qe=>Qe.id===Pe)&&c.push({id:Pe,boundingBox:{x:ee,y:ue,width:le,height:Ie},confidence:Math.round(Ze*1e4)/1e4})}catch(ee){console.warn("[guild-cls] failed:",ee)}}else if(Date.now()<Xe)try{const Q=be??await ps();if(Q!==null){const ee=await Zb();if(ee.size>0){r(`${E}: identifying guilds…`,.75);const ue=await Qb();for(const le of O_(Q,v,ee,Xe,ue))c.some(Ie=>Ie.id===le.id)||c.push(le)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${E}: laurels…`,.8);const At=await i1(),or=[];for(const q of[0,1,2,3]){const Q=q===0?v:Zt(v,q),ee=await en("laurel",Q);for(const[ue,le,Ie,he]of Va(ee.rows,ee.params,Et.laurel.conf)){const fe=im({x:ue,y:le,width:Ie-ue,height:he-le},q,v.width,v.height),Oe=fe.x+fe.width/2,We=fe.y+fe.height/2,qe=.6*Math.max(fe.width,fe.height);or.some(([Ze,Qe,rt,vn])=>{const De=(Ze+rt)/2,it=(Qe+vn)/2;return(Oe-De)**2+(We-it)**2<qe*qe})||or.push([fe.x,fe.y,fe.x+fe.width,fe.y+fe.height])}}const Gt=await d1(),xn=await c1();for(const[q,Q,ee,ue]of or){const le=Math.trunc((q+ee)/2),Ie=Math.trunc((Q+ue)/2);if([...R,...Y].some(De=>(le-De.cx)**2+(Ie-De.cy)**2<=De.r*De.r)||!ct(le,Ie))continue;if(xn!==null){const De=await h1(v,[Math.trunc(q),Math.trunc(Q),Math.trunc(ee),Math.trunc(ue)],xn);if(De!==null&&De>=bb)continue}const fe=Math.min(Math.trunc(ee-q),Math.trunc(ue-Q)),Oe=Math.max(6,Math.trunc(Math.max(ee-q,ue-Q)*Fy)),We=a1(v,le,Ie,Oe);let qe=null,Pe=0;const Ze=new Map;if(fe>=6)for(const De of[0,1,2,3]){const it=De===0?We:Zt(We,De),[at,Ne]=tw(it,At);at!==null&&(Ze.set(at,Math.max(Ze.get(at)??0,Ne)),Ne>Pe&&(qe=at,Pe=Ne))}qe!==null&&Pe<Yb&&(qe=null);const Qe=Pe;if(Gt!==null&&fe>=6){const De=Gr(v,Math.trunc(q),Math.trunc(Q),Math.trunc(ee-q),Math.trunc(ue-Q));let it=null,at=0;for(const Ne of[0,1,2,3]){const qr=Ne===0?De:Zt(De,Ne),Vr=yb(qr),Hr=await Gt.run({[Gt.inputNames[0]]:new Fe("float32",Vr,[1,3,Bn,Bn])}),{value:jr,prob:ur}=wb(Hr[Gt.outputNames[0]].data);ur>at&&(it=jr,at=ur)}it!==null&&at>=gb&&(qe=it,Pe=at)}const rt=qe!==null&&[...Ze.entries()].some(([De,it])=>De!==qe&&it>=Qe-.1),vn=Me.some(De=>le>=De.x0&&le<=De.x1&&Ie>=De.y0&&Ie<=De.y1);o.push({value:qe,valueRead:qe!==null,center:[Math.round((q+ee)/2),Math.round((Q+ue)/2)],boundingBox:{x:Math.trunc(q),y:Math.trunc(Q),width:Math.trunc(ee-q),height:Math.trunc(ue-Q)},confidence:Math.round(Pe*1e4)/1e4,excluded:vn,photoIndex:$-1,...rt?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}_>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${_} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):y>0&&h.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const x=s.guild??0;x!==c.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${x} purple banner(s) counted but ${c.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+c.map(M=>M.id).join(", ")+" — confirm in the review."});const T=h.filter(M=>M.boundingBox.width===0);T.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${T.map(M=>M.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${h.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),g>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${g} token disc(s) found but not identified — pick them in the review below.`}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+l.map(M=>M.id).join(", ")+" — confirm in the review."}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${u.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const S=o.filter(M=>!M.excluded),I=S.filter(M=>M.valueRead);return{...R1(),wonders:h,guilds:$1(c,h),progressTokens:l,laurels:o,cardVictoryPoints:{value:I.reduce((M,E)=>M+(E.value??0),0),laurelsKept:S.length,laurelsUnread:S.length-I.length,complete:S.length===I.length},cardCounts:{byFamily:s,source:y>0?"yolo":"none",tuckedExcluded:_,...p.length>0?{suspects:p}:{}},coins:{total:m,confidence:u.length>0?.5:0,source:u.length>0?"local-colour":"none",coins:u}}}const $t=1280,z1=.3,Es=9;let Ms=null;function O1(){return Ms===null&&(Ms=(async()=>{try{return(await fetch(`${ze}pawn_ends.onnx`,{method:"HEAD"})).ok?await tt.create(`${ze}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ms}function N1(e){const t=$t/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const o=new OffscreenCanvas($t,$t).getContext("2d",{willReadFrequently:!0});o.fillStyle="rgb(114,114,114)",o.fillRect(0,0,$t,$t),o.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=o.getImageData(0,0,$t,$t),l=$t*$t,h=new Float32Array(3*l);for(let c=0;c<l;c+=1)h[c]=u[c*4]/255,h[l+c]=u[c*4+1]/255,h[2*l+c]=u[c*4+2]/255;return{tensor:h,r:t}}async function B1(e,t){const{tensor:n,r}=N1(t),a=(await e.run({[e.inputNames[0]]:new Fe("float32",n,[1,3,$t,$t])}))[e.outputNames[0]].data,s=new Map;for(let o=0;o+5<a.length;o+=6){const u=a[o+4];if(u<z1)continue;const l=Math.round(a[o+5]),h=s.get(l);if(h===void 0||u>h.conf){const c=(a[o]+a[o+2])/2/r,p=(a[o+1]+a[o+3])/2/r;s.set(l,{conf:u,cx:c,cy:p})}}return s}async function P1(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Zt(t,g),_=await B1(e,y);if(_.has(0)&&_.has(1)&&_.has(2)){const $=_.get(0).conf+_.get(1).conf+_.get(2).conf;(n===null||$>n.score)&&(n={score:$,det:_})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),s=a.cx-i.cx,o=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=s*s+o*o;if(h<=0)return null;const c=((r.cx-u)*s+(r.cy-l)*o)/h*(2*Es),p=Math.min(Es,Math.max(-Es,Math.round(c))),m=Math.min(r.conf,i.conf,a.conf);return{position:p,confidence:Math.round(m*1e4)/1e4}}async function D1(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const s=(l,h=0)=>{t(l,i>0?Math.min(.99,(a+h)/i):void 0)},o=()=>{a+=1};for(const l of["left","right"]){const h=e[l];h.length>0&&(r[l]=await ks(h,l,n,s,o))}e.both!==void 0&&(r.left=await ks([e.both],"left",n,s,o,"player"),r.right=await ks([e.both],"right",n,s,o,"opponent"));let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await Is(e.board),h=await O1();if(h!==null){const c=await P1(h,l);c!==null&&(u={conflictPawnPosition:c.position,found:!0,confidence:c.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await A1(e.data.file):await D1(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
