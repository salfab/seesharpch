var iS=Object.defineProperty;var aS=(Vt,Ht,Nn)=>Ht in Vt?iS(Vt,Ht,{enumerable:!0,configurable:!0,writable:!0,value:Nn}):Vt[Ht]=Nn;var wy=(Vt,Ht,Nn)=>aS(Vt,typeof Ht!="symbol"?Ht+"":Ht,Nn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Vt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Nn=Object.getOwnPropertyNames,$y=Object.prototype.hasOwnProperty,xy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),te=(e,t)=>()=>(e&&(t=e(e=0)),t),zn=(e,t)=>{for(var n in t)Vt(e,n,{get:t[n],enumerable:!0})},vy=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Nn(t))!$y.call(e,i)&&i!==n&&Vt(e,i,{get:()=>t[i],enumerable:!(r=Ht(t,i))||r.enumerable});return e},Yn=e=>vy(Vt({},"__esModule",{value:!0}),e),Xn,tn,Bn,Do,Uo,Lo=te(()=>{Xn=new Map,tn=[],Bn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Xn.get(e);if(r===void 0)Xn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=tn.indexOf(e);i!==-1&&tn.splice(i,1);for(let a=0;a<tn.length;a++)if(Xn.get(tn[a]).priority<=n){tn.splice(a,0,e);return}tn.push(e)}return}throw new TypeError("not a valid backend")},Do=async e=>{let t=Xn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Uo=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?tn:n,i,a=[],s=new Set;for(let u of r){let l=await Do(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Sy=te(()=>{Lo()}),Fo,Ey=te(()=>{Fo="1.27.0"}),Ci,Ze,Go=te(()=>{Ey(),Ci="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:Fo},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ci=e}},get logLevel(){return Ci}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),Ne,Ty=te(()=>{Go(),Ne=Ze}),Wo,qo,Iy=te(()=>{Wo=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let c=a*i,d=0,h=c,g=c*2,m=-1;s==="RGBA"?(d=0,h=c,g=c*2,m=c*3):s==="RGB"?(d=0,h=c,g=c*2):s==="RBG"&&(d=0,g=c,h=c*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[d++]-l[0])*u[0],x=(e.data[h++]-l[1])*u[1],T=(e.data[g++]-l[2])*u[2],S=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+T+","+S+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},qo=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,m=1,y=2,w=3,b=0,x=d,T=d*2,S=-1;o==="RGBA"?(b=0,x=d,T=d*2,S=d*3):o==="RGB"?(b=0,x=d,T=d*2):o==="RBG"&&(b=0,T=d,x=d*2),r=n.createImageData(i,a);for(let E=0;E<a*i;g+=h,m+=h,y+=h,w+=h,E++)r.data[g]=(e.data[b++]-c[0])*l[0],r.data[m]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[T++]-c[2])*l[2],r.data[w]=S===-1?255:(e.data[S++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),Er,Vo,Ho,jo,Ko,Yo,My=te(()=>{Ai(),Er=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,h=0,g=1,m=2,y=3,w=0,b=l,x=l*2,T=-1;o==="RGB"&&(d=3,h=0,g=1,m=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let S=0;S<l;S++,h+=d,m+=d,g+=d,y+=d)c[w++]=(e[h]+s[0])/a[0],c[b++]=(e[g]+s[1])/a[1],c[x++]=(e[m]+s[2])/a[2],T!==-1&&y!==-1&&(c[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new pt("float32",c,[1,4,n,r]):new pt("float32",c,[1,3,n,r])},Vo=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=g}else o.tensorFormat="RGBA",o.height=h,o.width=g;d.drawImage(e,0,0),s=d.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(r){let c,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,d=t.resizedWidth):(c=e.height,d=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=d,t!==void 0){let h=u();h.width=d,h.height=c;let g=l(h);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let h=e.height,g=e.width;return d.drawImage(e,0,0,g,h),s=d.getImageData(0,0,g,h).data,o.height=h,o.width=g,Er(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,d)=>{let h=u(),g=l(h);if(!e||!g)return d();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{h.width=m.width,h.height=m.height,g.drawImage(m,0,0,h.width,h.height);let y=g.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c(Er(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Er(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ho=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new pt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},jo=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new pt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Ko=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new pt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Yo=(e,t,n)=>new pt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),mn,Qn,ki,Xo,Cy=te(()=>{mn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ki=!1,Xo=()=>{if(!ki){ki=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(mn.set("int64",BigInt64Array),Qn.set(BigInt64Array,"int64")),t&&(mn.set("uint64",BigUint64Array),Qn.set(BigUint64Array,"uint64")),r?(mn.set("float16",n),Qn.set(n,"float16")):mn.set("float16",Uint16Array)}}}),Qo,Zo,ky=te(()=>{Ai(),Qo=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Zo=(e,t)=>{switch(e.location){case"cpu":return new pt(e.type,e.data,t);case"cpu-pinned":return new pt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new pt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new pt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new pt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),pt,Ai=te(()=>{Iy(),My(),Cy(),ky(),pt=class{constructor(e,t,n){Xo();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=mn.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=mn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=Qn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Qo(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Vo(e,t)}static fromTexture(e,t){return Ho(e,t)}static fromGpuBuffer(e,t){return jo(e,t)}static fromMLTensor(e,t){return Ko(e,t)}static fromPinnedBuffer(e,t,n){return Yo(e,t,n)}toDataURL(e){return Wo(this,e)}toImageData(e){return qo(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Zo(this,e)}}}),De,Jo=te(()=>{Ai(),De=pt}),Tr,Ri,zt,bt,gn,yn,eu=te(()=>{Go(),Tr=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ri=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Tr("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},zt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ri("BEGIN",e)},bt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ri("END",e)},gn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},yn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),tu,Ay=te(()=>{Lo(),Jo(),eu(),tu=class _y{constructor(t){this.handler=t}async run(t,n,r){zt(),gn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof De||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof De)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(c.indexOf(d)!==-1){let h=n[d];(h===null||h instanceof De)&&(l=!0,s=!1,i[d]=h)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let c=o[l];c instanceof De?u[l]=c:u[l]=new De(c.type,c.data,c.dims)}return yn("InferenceSession.run"),bt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){zt(),gn("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,d=0,h=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-d,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||d+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,d,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Uo(s),l=await o.createInferenceSessionHandler(a,u);return yn("InferenceSession.create"),bt(),new _y(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ir,Ry=te(()=>{Ay(),Ir=tu}),Oy=te(()=>{}),Ny=te(()=>{}),zy=te(()=>{}),By=te(()=>{}),Py={};zn(Py,{InferenceSession:()=>Ir,TRACE:()=>Tr,TRACE_EVENT_BEGIN:()=>gn,TRACE_EVENT_END:()=>yn,TRACE_FUNC_BEGIN:()=>zt,TRACE_FUNC_END:()=>bt,Tensor:()=>De,env:()=>Ne,registerBackend:()=>Bn});var gt=te(()=>{Sy(),Ty(),Ry(),Jo(),Oy(),Ny(),eu(),zy(),By()}),Oi=te(()=>{}),nu={};zn(nu,{default:()=>ru});var Ni,zi,ru,Dy=te(()=>{var e;Df(),wn(),Fi(),Ni="ort-wasm-proxy-worker",zi=((e=globalThis.self)==null?void 0:e.name)===Ni,zi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":qi(r.wasm).then(()=>{ts(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ns(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=Hr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;is(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":as(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;os(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ls([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":us(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),ru=zi?null:t=>new Worker(t??ht,{type:"module",name:Ni})}),iu={};zn(iu,{default:()=>su});async function au(e={}){var gy,yy;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((gy=self.name)==null?void 0:gy.startsWith("em-pthread"));t.mountExternalData=(p,f)=>{p.startsWith("./")&&(p=p.substring(2)),(t.Xc||(t.Xc=new Map)).set(p,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=p=>async(...f)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:f[0],errors:[]},I=await p(...f);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let k=_.errors;if(0<k.length){let D=await Promise.all(k);if(D=D.filter(q=>q),0<D.length)throw Error(D.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(p,f)=>{if(p==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let $=t.dd;t.jsepRegisterBuffer=(_,I,k,D)=>$.registerBuffer(_,I,k,D),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,I,k)=>$.createDownloader(_,I,k),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,I)=>{$.upload(_,I)}}else if(p==="webnn"){let $=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,I)=>$.createMLTensorDownloader(_,I),t.webnnRegisterMLTensor=(_,I,k,D)=>$.registerMLTensor(_,I,k,D),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,I,k,D,q,re)=>$.registerMLConstant(_,I,k,D,q,t.Xc,re),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let s=()=>{let p=f=>(...$)=>{let _=Wt;return $=f(...$),Wt!=_?new Promise((I,k)=>{Eo={resolve:I,reject:k}}):$};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=p(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(p,f)=>{throw f},c=self.location.href,d="";if(n||r){try{d=new URL(".",c).href}catch{}r&&(u=p=>{var f=new XMLHttpRequest;return f.open("GET",p,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),o=async p=>{if(C(p))return new Promise(($,_)=>{var I=new XMLHttpRequest;I.open("GET",p,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):_(I.status)},I.onerror=_,I.send(null)});var f=await fetch(p,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var h,g,m,y,w,b,x=console.log.bind(console),T=console.error.bind(console),S=x,E=T,M=!1,C=p=>p.startsWith("file://");function v(){oe.buffer!=z.buffer&&O()}if(i){let p=function(f){try{var $=f.data,_=$.Sc;if(_==="load"){let I=[];self.onmessage=k=>I.push(k),b=()=>{postMessage({Sc:"loaded"});for(let k of I)p(k);self.onmessage=p};for(let k of $.xd)t[k]&&!t[k].proxy||(t[k]=(...D)=>{postMessage({Sc:"callHandler",wd:k,args:D})},k=="print"&&(S=t[k]),k=="printErr"&&(E=t[k]));oe=$.Od,O(),g=$.Pd,Z(),Ii()}else if(_==="run"){(function(I){var k=(v(),W)[I+52>>>2>>>0];I=(v(),W)[I+56>>>2>>>0],T0(k,k-I),Se(k)})($.Rc),ko($.Rc,0,0,1,0,0),we(),xo($.Rc),R||(b0(),R=!0);try{nt($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(_==="checkMailbox"?R&&bi():_&&(E(`worker: received unknown command ${_}`),E($)))}catch(I){throw $0(),I}};var R=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=p}var z,K,U,G,N,W,j,ee,ce,L,ne,A=!1;function O(){var p=oe.buffer;t.HEAP8=z=new Int8Array(p),U=new Int16Array(p),t.HEAPU8=K=new Uint8Array(p),G=new Uint16Array(p),t.HEAP32=N=new Int32Array(p),t.HEAPU32=W=new Uint32Array(p),j=new Float32Array(p),ee=new Float64Array(p),ce=new BigInt64Array(p),L=new BigUint64Array(p)}function P(){A=!0,i?b():en.sb()}function B(p){throw E(p="Aborted("+p+")"),M=!0,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),w==null||w(p),p}function V(){return{a:{ma:_3,gb:w3,g:He,J:kt,f:Rt,o:Ot,h:dn,ha:_r,b:jn,T:fi,Ha:gi,n:yo,$:Pg,Xa:Dg,Da:Ug,Fa:Lg,Ya:Fg,Va:Gg,Oa:Wg,Ua:qg,ka:Vg,Ea:Hg,Ba:jg,Wa:Kg,Ca:Yg,bb:sv,ea:ov,wa:uv,ua:cv,da:pv,O:hv,H:fv,va:mv,_:xv,xa:vv,Ra:Sv,za:Tv,Ia:Iv,sa:Mv,fa:Cv,Qa:xo,_a:kv,R:Nv,r:Uv,c:bo,hb:Lv,y:Fv,M:Gv,D:Wv,l:qv,s:r0,ib:Vv,I:Hv,S:jv,j:Kv,u:Yv,q:Xv,k:Qv,La:Zv,Ma:Jv,Na:e3,Ja:o0,Ka:u0,ta:l0,db:n3,ab:i3,v:a3,aa:s3,ga:o3,$a:r3,W:u3,Za:l3,Aa:c3,F:t3,U:d3,la:Ei,ya:h3,fb:p3,eb:f3,Sa:h0,Ta:f0,Ga:Ue,V:m0,ja:g0,Pa:y0,ia:w0,kb:tS,na:X3,lb:eS,oa:Y3,G:L3,e:v3,t:$3,w:b3,B:O3,mb:H3,K:P3,x:T3,pa:j3,Y:Q3,ba:V3,nb:q3,ob:W3,P:N3,qa:G3,pb:F3,N:D3,Z:K3,d:x3,A:E3,m:S3,jb:nS,p:M3,z:C3,C:I3,E:k3,L:z3,qb:U3,Q:Z3,ca:B3,X:J3,rb:R3,ra:A3,i:g3,a:oe,cb:he}}}async function Z(){function p(_,I){var k=en=_.exports;_={};for(let[D,q]of Object.entries(k))typeof q=="function"?(k=Av(q),_[D]=k):_[D]=q;return en=_,en=(function(){var D=en,q=se=>xe=>se(xe)>>>0,re=se=>()=>se()>>>0;return(D=Object.assign({},D)).tb=q(D.tb),D.Xb=re(D.Xb),D.Zb=q(D.Zb),D.lc=q(D.lc),D.mc=re(D.mc),D.qc=q(D.qc),D})(),fe.push(en._b),_0=(_=en).tb,b0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Ti=_.Xb,qt=t._free=_.Yb,xr=t._malloc=_.Zb,ko=_.ac,$0=_.bc,x0=_.cc,v0=_.dc,Ao=_.ec,S0=_.fc,E0=_.gc,Ie=_.hc,vr=_.ic,T0=_.jc,Se=_.kc,Ro=_.lc,Te=_.mc,I0=_.nc,Oo=_.oc,M0=_.pc,C0=_.qc,k0=_.rc,No=_.sc,A0=_.tc,R0=_.uc,O0=_.vc,N0=_.wc,z0=_.xc,B0=_.yc,P0=_.zc,D0=_.Ac,U0=_.Bc,L0=_.Cc,F0=_.Dc,G0=_.Ec,W0=_.Fc,q0=_.Gc,V0=_.Hc,H0=_.Ic,j0=_.Jc,K0=_.Kc,Y0=_.Lc,X0=_.Mc,Q0=_.Nc,Z0=_.Pc,J0=_.Qc,ey=_.$c,ty=_.ad,ny=_.fd,ry=_.jd,iy=_.kd,ay=_.ld,sy=_.md,oy=_.nd,uy=_.od,ly=_.pd,cy=_.qd,dy=_.vd,py=_.Td,hy=_.Ud,fy=_.Vd,my=_.Wd,g=I,en}var f,$=V();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(I,k)=>{_(p(I,k))})}):i?p(new WebAssembly.Instance(g,V()),g):(ne??(ne=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(_){var I=ne;if(!h&&!C(I))try{var k=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,_)}catch(D){E(`wasm streaming compile failed: ${D}`),E("falling back to ArrayBuffer instantiation")}return(async function(D,q){try{var re=await(async function(se){if(!h)try{var xe=await o(se);return new Uint8Array(xe)}catch{}if(se==ne&&h)se=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";se=u(se)}return se})(D);return await WebAssembly.instantiate(re,q)}catch(se){E(`failed to asynchronously prepare wasm: ${se}`),B(se)}})(I,_)})($),p(f.instance,f.module))}class J{constructor(f){wy(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var ie=p=>{p.terminate(),p.onmessage=()=>{}},pe=[],$e=0,Ee=null,ze=p=>{Le.length==0&&(ve(),ge(Le[0]));var f=Le.pop();if(!f)return 6;Y.push(f),ae[p.Rc]=f,f.Rc=p.Rc;var $={Sc:"run",Md:p.Ld,bd:p.bd,Rc:p.Rc};return f.postMessage($,p.rd),0},Q=0,X=(p,f,...$)=>{var _,I=16*$.length,k=Te(),D=Ro(I),q=D>>>3;for(_ of $)typeof _=="bigint"?((v(),ce)[q++>>>0]=1n,(v(),ce)[q++>>>0]=_):((v(),ce)[q++>>>0]=0n,(v(),ee)[q++>>>0]=_);return p=x0(p,0,I,D,f),Se(k),p};function he(p){if(i)return X(0,1,p);if(m=p,!(0<Q)){for(var f of Y)ie(f);for(f of Le)ie(f);Le=[],Y=[],ae={},M=!0}l(0,new J(p))}function Ce(p){if(i)return X(1,0,p);Ue(p)}var Ue=p=>{if(m=p,i)throw Ce(p),"unwind";he(p)},Le=[],Y=[],fe=[],ae={},ye=p=>{var f=p.Rc;delete ae[f],Le.push(p),Y.splice(Y.indexOf(p),1),p.Rc=0,v0(f)};function we(){fe.forEach(p=>p())}var ge=p=>new Promise(f=>{p.onmessage=I=>{var k=I.data;if(I=k.Sc,k.Zc&&k.Zc!=Ti()){var D=ae[k.Zc];D?D.postMessage(k,k.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${k.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?bi():I==="spawnThread"?ze(k):I==="cleanupThread"?_i(()=>{ye(ae[k.Nd])}):I==="loaded"?(p.loaded=!0,f(p)):k.target==="setimmediate"?p.postMessage(k):I==="uncaughtException"?p.onerror(k.error):I==="callHandler"?t[k.wd](...k.args):I&&E(`worker sent an unknown command ${I}`)},p.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);p.postMessage({Sc:"load",xd:_,Od:oe,Pd:g})});function ve(){var p=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Le.push(p)}var oe,nt=(p,f)=>{Q=0,p=No(p,f),0<Q?m=p:Ao(p)},rt=[],Fe=0;function He(p){var f=new Qe(p>>>=0);return(v(),z)[f.Tc+12>>>0]==0&&(At(f,!0),Fe--),je(f,!1),rt.push(f),C0(p)}var ut=0,kt=()=>{Ie(0,0);var p=rt.pop();I0(p.cd),ut=0};function At(p,f){f=f?1:0,(v(),z)[p.Tc+12>>>0]=f}function je(p,f){f=f?1:0,(v(),z)[p.Tc+13>>>0]=f}class Qe{constructor(f){this.cd=f,this.Tc=f-24}}var Ft=p=>{var f=ut;if(!f)return vr(0),0;var $=new Qe(f);(v(),W)[$.Tc+16>>>2>>>0]=f;var _=(v(),W)[$.Tc+4>>>2>>>0];if(!_)return vr(0),f;for(var I of p){if(I===0||I===_)break;if(M0(I,_,$.Tc+16))return vr(I),f}return vr(_),f};function Rt(){return Ft([])}function Ot(p){return Ft([p>>>0])}function dn(p,f,$,_){return Ft([p>>>0,f>>>0,$>>>0,_>>>0])}var _r=()=>{var p=rt.pop();p||B("no exception to throw");var f=p.cd;throw(v(),z)[p.Tc+13>>>0]==0&&(rt.push(p),je(p,!0),At(p,!1),Fe++),Oo(f),ut=f};function jn(p,f,$){var _=new Qe(p>>>=0);throw f>>>=0,$>>>=0,(v(),W)[_.Tc+16>>>2>>>0]=0,(v(),W)[_.Tc+4>>>2>>>0]=f,(v(),W)[_.Tc+8>>>2>>>0]=$,Oo(p),Fe++,ut=p}var fi=()=>Fe;function mi(p,f,$,_){return i?X(2,1,p,f,$,_):gi(p,f,$,_)}function gi(p,f,$,_){if(p>>>=0,f>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?mi(p,f,$,_):(p={Ld:$,Rc:p,bd:_,rd:I},i?(p.Sc="spawnThread",postMessage(p,I),0):ze(p))}function yo(p){throw ut||(ut=p>>>0),ut}var yi=globalThis.TextDecoder&&new TextDecoder,br=(p,f,$,_)=>{if($=f+$,_)return $;for(;p[f]&&!(f>=$);)++f;return f},Bg=(p,f=0,$,_)=>{if(16<($=br(p,f>>>=0,$,_))-f&&p.buffer&&yi)return yi.decode(p.buffer instanceof ArrayBuffer?p.subarray(f,$):p.slice(f,$));for(_="";f<$;){var I=p[f++];if(128&I){var k=63&p[f++];if((224&I)==192)_+=String.fromCharCode((31&I)<<6|k);else{var D=63&p[f++];65536>(I=(240&I)==224?(15&I)<<12|k<<6|D:(7&I)<<18|k<<12|D<<6|63&p[f++])?_+=String.fromCharCode(I):(I-=65536,_+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else _+=String.fromCharCode(I)}return _},Ke=(p,f,$)=>(p>>>=0)?Bg((v(),K),p,f,$):"";function Pg(p,f,$){return i?X(3,1,p,f,$):0}function Dg(p,f){if(i)return X(4,1,p,f)}function Ug(p,f){if(i)return X(5,1,p,f)}function Lg(p,f,$){if(i)return X(6,1,p,f,$)}function Fg(p,f,$){return i?X(7,1,p,f,$):0}function Gg(p,f){if(i)return X(8,1,p,f)}function Wg(p,f,$){if(i)return X(9,1,p,f,$)}function qg(p,f,$,_){if(i)return X(10,1,p,f,$,_)}function Vg(p,f,$,_){if(i)return X(11,1,p,f,$,_)}function Hg(p,f,$,_){if(i)return X(12,1,p,f,$,_)}function jg(p){if(i)return X(13,1,p)}function Kg(p,f){if(i)return X(14,1,p,f)}function Yg(p,f,$){if(i)return X(15,1,p,f,$)}var sv=()=>B(""),Gt=p=>{p>>>=0;for(var f="";;){var $=(v(),K)[p++>>>0];if(!$)return f;f+=String.fromCharCode($)}},wo={},_o={},Kn=class extends Error{constructor(p){super(p),this.name="BindingError"}};function Jt(p,f,$={}){return(function(_,I,k={}){var D=I.name;if(!_)throw new Kn(`type "${D}" must have a positive integer typeid pointer`);if(_o.hasOwnProperty(_)){if(k.yd)return;throw new Kn(`Cannot register type '${D}' twice`)}_o[_]=I,wo.hasOwnProperty(_)&&(I=wo[_],delete wo[_],I.forEach(q=>q()))})(p,f,$)}var Xg=(p,f,$)=>{switch(f){case 1:return $?_=>(v(),z)[_>>>0]:_=>(v(),K)[_>>>0];case 2:return $?_=>(v(),U)[_>>>1>>>0]:_=>(v(),G)[_>>>1>>>0];case 4:return $?_=>(v(),N)[_>>>2>>>0]:_=>(v(),W)[_>>>2>>>0];case 8:return $?_=>(v(),ce)[_>>>3>>>0]:_=>(v(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${p}`)}};function ov(p,f,$,_,I){p>>>=0,$>>>=0,f=Gt(f>>>0);let k=D=>D;if(_=_===0n){let D=8*$;k=q=>BigInt.asUintN(D,q),I=k(I)}Jt(p,{name:f,Oc:k,Vc:(D,q)=>(typeof q=="number"&&(q=BigInt(q)),q),Uc:Xg(f,$,!_),Wc:null})}function uv(p,f,$,_){Jt(p>>>=0,{name:f=Gt(f>>>0),Oc:function(I){return!!I},Vc:function(I,k){return k?$:_},Uc:function(I){return this.Oc((v(),K)[I>>>0])},Wc:null})}var Qg=[],Rn=[0,1,,1,null,1,!0,1,!1,1];function bo(p){9<(p>>>=0)&&--Rn[p+1]===0&&(Rn[p]=void 0,Qg.push(p))}var _t=p=>{if(!p)throw new Kn(`Cannot use deleted val. handle = ${p}`);return Rn[p]},Nt=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Qg.pop()||Rn.length;return Rn[f]=p,Rn[f+1]=1,f}};function $o(p){return this.Oc((v(),W)[p>>>2>>>0])}var lv={name:"emscripten::val",Oc:p=>{var f=_t(p);return bo(p),f},Vc:(p,f)=>Nt(f),Uc:$o,Wc:null};function cv(p){return Jt(p>>>0,lv)}var dv=(p,f)=>{switch(f){case 4:return function($){return this.Oc((v(),j)[$>>>2>>>0])};case 8:return function($){return this.Oc((v(),ee)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${p}`)}};function pv(p,f,$){$>>>=0,Jt(p>>>=0,{name:f=Gt(f>>>0),Oc:_=>_,Vc:(_,I)=>I,Uc:dv(f,$),Wc:null})}function hv(p,f,$,_,I){p>>>=0,$>>>=0,f=Gt(f>>>0);let k=q=>q;if(_===0){var D=32-8*$;k=q=>q<<D>>>D,I=k(I)}Jt(p,{name:f,Oc:k,Vc:(q,re)=>re,Uc:Xg(f,$,_!==0),Wc:null})}function fv(p,f,$){function _(k){var D=(v(),W)[k>>>2>>>0];return k=(v(),W)[k+4>>>2>>>0],new I((v(),z).buffer,k,D)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Jt(p>>>=0,{name:$=Gt($>>>0),Oc:_,Uc:_},{yd:!0})}var pn=(p,f,$)=>{var _=(v(),K);if(f>>>=0,0<$){var I=f;$=f+$-1;for(var k=0;k<p.length;++k){var D=p.codePointAt(k);if(127>=D){if(f>=$)break;_[f++>>>0]=D}else if(2047>=D){if(f+1>=$)break;_[f++>>>0]=192|D>>6,_[f++>>>0]=128|63&D}else if(65535>=D){if(f+2>=$)break;_[f++>>>0]=224|D>>12,_[f++>>>0]=128|D>>6&63,_[f++>>>0]=128|63&D}else{if(f+3>=$)break;_[f++>>>0]=240|D>>18,_[f++>>>0]=128|D>>12&63,_[f++>>>0]=128|D>>6&63,_[f++>>>0]=128|63&D,k++}}_[f>>>0]=0,p=f-I}else p=0;return p},wi=p=>{for(var f=0,$=0;$<p.length;++$){var _=p.charCodeAt($);127>=_?f++:2047>=_?f+=2:55296<=_&&57343>=_?(f+=4,++$):f+=3}return f};function mv(p,f){Jt(p>>>=0,{name:f=Gt(f>>>0),Oc($){var _=(v(),W)[$>>>2>>>0];return _=Ke($+4,_,!0),qt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var I=typeof _=="string";if(!(I||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Kn("Cannot pass non-string to std::string");var k=I?wi(_):_.length,D=xr(4+k+1),q=D+4;return(v(),W)[D>>>2>>>0]=k,I?pn(_,q,k+1):(v(),K).set(_,q>>>0),$!==null&&$.push(qt,D),D},Uc:$o,Wc($){qt($)}})}var Zg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,gv=(p,f,$)=>{if(p>>>=1,16<(f=br((v(),G),p,f/2,$))-p&&Zg)return Zg.decode((v(),G).slice(p,f));for($="";p<f;++p){var _=(v(),G)[p>>>0];$+=String.fromCharCode(_)}return $},yv=(p,f,$)=>{if($??($=2147483647),2>$)return 0;var _=f;$=($-=2)<2*p.length?$/2:p.length;for(var I=0;I<$;++I){var k=p.charCodeAt(I);(v(),U)[f>>>1>>>0]=k,f+=2}return(v(),U)[f>>>1>>>0]=0,f-_},wv=p=>2*p.length,_v=(p,f,$)=>{var _="";p>>>=2;for(var I=0;!(I>=f/4);I++){var k=(v(),W)[p+I>>>0];if(!k&&!$)break;_+=String.fromCodePoint(k)}return _},bv=(p,f,$)=>{if(f>>>=0,$??($=2147483647),4>$)return 0;var _=f;$=_+$-4;for(var I=0;I<p.length;++I){var k=p.codePointAt(I);if(65535<k&&I++,(v(),N)[f>>>2>>>0]=k,(f+=4)+4>$)break}return(v(),N)[f>>>2>>>0]=0,f-_},$v=p=>{for(var f=0,$=0;$<p.length;++$)65535<p.codePointAt($)&&$++,f+=4;return f};function xv(p,f,$){if(p>>>=0,f>>>=0,$=Gt($>>>=0),f===2)var _=gv,I=yv,k=wv;else _=_v,I=bv,k=$v;Jt(p,{name:$,Oc:D=>{var q=(v(),W)[D>>>2>>>0];return q=_(D+4,q*f,!0),qt(D),q},Vc:(D,q)=>{if(typeof q!="string")throw new Kn(`Cannot pass non-string to C++ string type ${$}`);var re=k(q),se=xr(4+re+f);return(v(),W)[se>>>2>>>0]=re/f,I(q,se+4,re+f),D!==null&&D.push(qt,se),se},Uc:$o,Wc(D){qt(D)}})}function vv(p,f){Jt(p>>>=0,{zd:!0,name:f=Gt(f>>>0),Oc:()=>{},Vc:()=>{}})}function Sv(p){ko(p>>>0,!r,1,!n,131072,!1),we()}var _i=p=>{if(!M)try{if(p(),!(0<Q))try{i?Ti()&&Ao(m):Ue(m)}catch(f){f instanceof J||f=="unwind"||l(0,f)}}catch(f){f instanceof J||f=="unwind"||l(0,f)}},Ev=!Atomics.waitAsync||((yy=globalThis.navigator)==null?void 0:yy.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function xo(p){p>>>=0,Ev||(Atomics.waitAsync((v(),N),p>>>2,p).value.then(bi),p+=128,Atomics.store((v(),N),p>>>2,1))}var bi=()=>_i(()=>{var p=Ti();p&&(xo(p),E0())});function Tv(p,f){(p>>>=0)==f>>>0?setTimeout(bi):i?postMessage({Zc:p,Sc:"checkMailbox"}):(p=ae[p])&&p.postMessage({Sc:"checkMailbox"})}var vo=[];function Iv(p,f,$,_,I){for(f>>>=0,I>>>=0,vo.length=0,$=I>>>3,_=I+_>>>3;$<_;){var k;k=(v(),ce)[$++>>>0]?(v(),ce)[$++>>>0]:(v(),ee)[$++>>>0],vo.push(k)}return(f?zo[f]:y3[p])(...vo)}var Mv=()=>{Q=0};function Cv(p){p>>>=0,i?postMessage({Sc:"cleanupThread",Nd:p}):ye(ae[p])}function kv(p){}var $i=p=>{try{p()}catch(f){B(f)}};function Av(p){var f=(...$)=>{xi.push(p);try{return p(...$)}finally{M||(xi.pop(),Wt&&hn===1&&xi.length===0&&(hn=0,Q+=1,$i(hy),typeof Fibers<"u"&&Fibers.Zd()))}};return t0.set(p,f),f}var hn=0,Wt=null,Jg=0,xi=[],So=new Map,e0=new Map,t0=new Map,Rv=0,Eo=null,Ov=[],n0=p=>(function(f){if(!M){if(hn===0){var $=!1,_=!1;f((I=0)=>{if(!M&&(Jg=I,$=!0,_)){hn=2,$i(()=>fy(Wt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var k=(function(){var re=(v(),N)[Wt+8>>>2>>>0];return re=e0.get(re),re=t0.get(re),--Q,re()})()}catch(re){k=re,I=!0}var D=!1;if(!Wt){var q=Eo;q&&(Eo=null,(I?q.reject:q.resolve)(k),D=!0)}if(I&&!D)throw k}}),_=!0,$||(hn=1,Wt=(function(){var I=xr(65548),k=I+12;if((v(),W)[I>>>2>>>0]=k,(v(),W)[I+4>>>2>>>0]=k+65536,k=xi[0],!So.has(k)){var D=Rv++;So.set(k,D),e0.set(D,k)}return k=So.get(k),(v(),N)[I+8>>>2>>>0]=k,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),$i(()=>py(Wt)))}else hn===2?(hn=0,$i(my),qt(Wt),Wt=null,Ov.forEach(_i)):B(`invalid state: ${hn}`);return Jg}})(f=>{p().then(f)});function Nv(p){return p>>>=0,n0(async()=>{var f=await _t(p);return Nt(f)})}var To=[],zv=p=>{var f=To.length;return To.push(p),f},Bv=(p,f)=>{for(var $=Array(p),_=0;_<p;++_){var I=_,k=(v(),W)[f+4*_>>>2>>>0],D=_o[k];if(D===void 0)throw p=`parameter ${_}`,k=_0(k),f=Gt(k),qt(k),new Kn(`${p} has unknown type ${f}`);$[I]=D}return $},Pv=(p,f,$)=>{var _=[];return p=p(_,$),_.length&&((v(),W)[f>>>2>>>0]=Nt(_)),p},Dv={},vi=p=>{var f=Dv[p];return f===void 0?Gt(p):f};function Uv(p,f,$){var[_,...I]=Bv(p,f>>>0);f=_.Vc.bind(_);var k=I.map(re=>re.Uc.bind(re));p--;var D={toValue:_t};switch(p=k.map((re,se)=>{var xe=`argFromPtr${se}`;return D[xe]=re,`${xe}(args${se?"+"+8*se:""})`}),$){case 0:var q="toValue(handle)";break;case 2:q="new (toValue(handle))";break;case 3:q="";break;case 1:D.getStringOrSymbol=vi,q="toValue(handle)[getStringOrSymbol(methodName)]"}return q+=`(${p})`,_.zd||(D.toReturnWire=f,D.emval_returnValue=Pv,q=`return emval_returnValue(toReturnWire, destructorsRef, ${q})`),q=`return function (handle, methodName, destructorsRef, args) {
  ${q}
  }`,$=new Function(Object.keys(D),q)(...Object.values(D)),q=`methodCaller<(${I.map(re=>re.name)}) => ${_.name}>`,zv(Object.defineProperty($,"name",{value:q}))}function Lv(p,f){return f>>>=0,(p=_t(p>>>0))==_t(f)}function Fv(p){return(p>>>=0)?(p=vi(p),Nt(globalThis[p])):Nt(globalThis)}function Gv(p){return p=vi(p>>>0),Nt(t[p])}function Wv(p,f){return f>>>=0,p=_t(p>>>0),f=_t(f),Nt(p[f])}function qv(p){9<(p>>>=0)&&(Rn[p+1]+=1)}function r0(p,f,$,_,I){return To[p>>>0](f>>>0,$>>>0,_>>>0,I>>>0)}function Vv(p,f,$,_,I){return r0(p>>>0,f>>>0,$>>>0,_>>>0,I>>>0)}function Hv(){return Nt([])}function jv(p){p=_t(p>>>0);for(var f=Array(p.length),$=0;$<p.length;$++)f[$]=p[$];return Nt(f)}function Kv(p){return Nt(vi(p>>>0))}function Yv(){return Nt({})}function Xv(p){for(var f=_t(p>>>=0);f.length;){var $=f.pop();f.pop()($)}bo(p)}function Qv(p,f,$){f>>>=0,$>>>=0,p=_t(p>>>0),f=_t(f),$=_t($),p[f]=$}function Zv(p,f){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),f>>>=0,p=new Date(1e3*p),(v(),N)[f>>>2>>>0]=p.getUTCSeconds(),(v(),N)[f+4>>>2>>>0]=p.getUTCMinutes(),(v(),N)[f+8>>>2>>>0]=p.getUTCHours(),(v(),N)[f+12>>>2>>>0]=p.getUTCDate(),(v(),N)[f+16>>>2>>>0]=p.getUTCMonth(),(v(),N)[f+20>>>2>>>0]=p.getUTCFullYear()-1900,(v(),N)[f+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),N)[f+28>>>2>>>0]=p}var i0=p=>p%4==0&&(p%100!=0||p%400==0),a0=[0,31,60,91,121,152,182,213,244,274,305,335],s0=[0,31,59,90,120,151,181,212,243,273,304,334];function Jv(p,f){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),f>>>=0,p=new Date(1e3*p),(v(),N)[f>>>2>>>0]=p.getSeconds(),(v(),N)[f+4>>>2>>>0]=p.getMinutes(),(v(),N)[f+8>>>2>>>0]=p.getHours(),(v(),N)[f+12>>>2>>>0]=p.getDate(),(v(),N)[f+16>>>2>>>0]=p.getMonth(),(v(),N)[f+20>>>2>>>0]=p.getFullYear()-1900,(v(),N)[f+24>>>2>>>0]=p.getDay();var $=(i0(p.getFullYear())?a0:s0)[p.getMonth()]+p.getDate()-1|0;(v(),N)[f+28>>>2>>>0]=$,(v(),N)[f+36>>>2>>>0]=-60*p.getTimezoneOffset(),$=new Date(p.getFullYear(),6,1).getTimezoneOffset();var _=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|($!=_&&p.getTimezoneOffset()==Math.min(_,$)),(v(),N)[f+32>>>2>>>0]=p}function e3(p){p>>>=0;var f=new Date((v(),N)[p+20>>>2>>>0]+1900,(v(),N)[p+16>>>2>>>0],(v(),N)[p+12>>>2>>>0],(v(),N)[p+8>>>2>>>0],(v(),N)[p+4>>>2>>>0],(v(),N)[p>>>2>>>0],0),$=(v(),N)[p+32>>>2>>>0],_=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),k=new Date(f.getFullYear(),0,1).getTimezoneOffset(),D=Math.min(k,I);return 0>$?(v(),N)[p+32>>>2>>>0]=+(I!=k&&D==_):0<$!=(D==_)&&(I=Math.max(k,I),f.setTime(f.getTime()+6e4*((0<$?D:I)-_))),(v(),N)[p+24>>>2>>>0]=f.getDay(),$=(i0(f.getFullYear())?a0:s0)[f.getMonth()]+f.getDate()-1|0,(v(),N)[p+28>>>2>>>0]=$,(v(),N)[p>>>2>>>0]=f.getSeconds(),(v(),N)[p+4>>>2>>>0]=f.getMinutes(),(v(),N)[p+8>>>2>>>0]=f.getHours(),(v(),N)[p+12>>>2>>>0]=f.getDate(),(v(),N)[p+16>>>2>>>0]=f.getMonth(),(v(),N)[p+20>>>2>>>0]=f.getYear(),p=f.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function o0(p,f,$,_,I,k,D){return i?X(16,1,p,f,$,_,I,k,D):-52}function u0(p,f,$,_,I,k){if(i)return X(17,1,p,f,$,_,I,k)}var $r={},t3=()=>performance.timeOrigin+performance.now();function l0(p,f){if(i)return X(18,1,p,f);if($r[p]&&(clearTimeout($r[p].id),delete $r[p]),!f)return 0;var $=setTimeout(()=>{delete $r[p],_i(()=>S0(p,performance.timeOrigin+performance.now()))},f);return $r[p]={id:$,Yd:f},0}function n3(p,f,$,_){p>>>=0,f>>>=0,$>>>=0,_>>>=0;var I=new Date().getFullYear(),k=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var D=Math.max(k,I);(v(),W)[p>>>2>>>0]=60*D,(v(),N)[f>>>2>>>0]=+(k!=I),p=(f=q=>{var re=Math.abs(q);return`UTC${0<=q?"-":"+"}${String(Math.floor(re/60)).padStart(2,"0")}${String(re%60).padStart(2,"0")}`})(k),f=f(I),I<k?(pn(p,$,17),pn(f,_,17)):(pn(p,_,17),pn(f,$,17))}var r3=()=>Date.now();function i3(p,f,$){return $>>>=0,0<=p&&3>=p?(p===0?p=Date.now():p=performance.timeOrigin+performance.now(),p=Math.round(1e6*p),(v(),ce)[$>>>3>>>0]=BigInt(p),0):28}var Io=[],c0=(p,f)=>{Io.length=0;for(var $;$=(v(),K)[p++>>>0];){var _=$!=105;f+=(_&=$!=112)&&f%8?4:0,Io.push($==112?(v(),W)[f>>>2>>>0]:$==106?(v(),ce)[f>>>3>>>0]:$==105?(v(),N)[f>>>2>>>0]:(v(),ee)[f>>>3>>>0]),f+=_?8:4}return Io};function a3(p,f,$){return p>>>=0,f=c0(f>>>0,$>>>0),zo[p](...f)}function s3(p,f,$){return p>>>=0,f=c0(f>>>0,$>>>0),zo[p](...f)}var o3=()=>{};function u3(p,f){return E(Ke(p>>>0,f>>>0))}var l3=()=>{throw Q+=1,"unwind"};function c3(){return 4294901760}var d3=()=>navigator.hardwareConcurrency,On={},Si=p=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(p))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(p))?2147483648|+f[1]:0},d0=p=>{for(var f of p)(p=Si(f))&&(On[p]=f)};function p3(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),d0(p),On.gd=Si(p[3]),On.Jd=p,On.gd}function Ei(p){if(!(p=On[p>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(p))p=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(p))p=f[1];else{if(!(f=/^(.+?)@/.exec(p)))return 0;p=f[1]}qt(Ei.hd??0),f=wi(p)+1;var $=xr(f);return $&&pn(p,$,f),Ei.hd=$,Ei.hd}function h3(p){p>>>=0;var f=(v(),K).length;if(p<=f||4294901760<p)return!1;for(var $=1;4>=$;$*=2){var _=f*(1+.2/$);_=Math.min(_,p+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(p,_)/65536))-oe.buffer.byteLength+65535)/65536|0;try{oe.grow(_),O();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function f3(p,f,$){if(p>>>=0,f>>>=0,On.gd==p)var _=On.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),d0(_);for(var I=3;_[I]&&Si(_[I])!=p;)++I;for(p=0;p<$&&_[p+I];++p)(v(),N)[f+4*p>>>2>>>0]=Si(_[p+I]);return p}var Mo,Co={},p0=()=>{var _;if(!Mo){var p,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in Co)Co[p]===void 0?delete f[p]:f[p]=Co[p];var $=[];for(p in f)$.push(`${p}=${f[p]}`);Mo=$}return Mo};function h0(p,f){if(i)return X(19,1,p,f);p>>>=0,f>>>=0;var $,_=0,I=0;for($ of p0()){var k=f+_;(v(),W)[p+I>>>2>>>0]=k,_+=pn($,k,1/0)+1,I+=4}return 0}function f0(p,f){if(i)return X(20,1,p,f);p>>>=0,f>>>=0;var $=p0();for(var _ of((v(),W)[p>>>2>>>0]=$.length,p=0,$))p+=wi(_)+1;return(v(),W)[f>>>2>>>0]=p,0}function m0(p){return i?X(21,1,p):52}function g0(p,f,$,_){return i?X(22,1,p,f,$,_):52}function y0(p,f,$,_){return i?X(23,1,p,f,$,_):70}var m3=[null,[],[]];function w0(p,f,$,_){if(i)return X(24,1,p,f,$,_);f>>>=0,$>>>=0,_>>>=0;for(var I=0,k=0;k<$;k++){var D=(v(),W)[f>>>2>>>0],q=(v(),W)[f+4>>>2>>>0];f+=8;for(var re=0;re<q;re++){var se=p,xe=(v(),K)[D+re>>>0],ke=m3[se];xe===0||xe===10?((se===1?S:E)(Bg(ke)),ke.length=0):ke.push(xe)}I+=q}return(v(),W)[_>>>2>>>0]=I,0}function g3(p){return p>>>0}i||(function(){for(var p=t.numThreads-1;p--;)ve();pe.push(async()=>{var f=(async function(){if(!i)return Promise.all(Le.map(ge))})();$e++,await f,--$e==0&&Ee&&(f=Ee,Ee=null,f())})})(),i||(oe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),O()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Te(),t.stackRestore=p=>Se(p),t.stackAlloc=p=>Ro(p),t.setValue=function(p,f,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(v(),z)[p>>>0]=f;break;case"i16":(v(),U)[p>>>1>>>0]=f;break;case"i32":(v(),N)[p>>>2>>>0]=f;break;case"i64":(v(),ce)[p>>>3>>>0]=BigInt(f);break;case"float":(v(),j)[p>>>2>>>0]=f;break;case"double":(v(),ee)[p>>>3>>>0]=f;break;case"*":(v(),W)[p>>>2>>>0]=f;break;default:B(`invalid type for setValue: ${$}`)}},t.getValue=function(p,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),z)[p>>>0];case"i16":return(v(),U)[p>>>1>>>0];case"i32":return(v(),N)[p>>>2>>>0];case"i64":return(v(),ce)[p>>>3>>>0];case"float":return(v(),j)[p>>>2>>>0];case"double":return(v(),ee)[p>>>3>>>0];case"*":return(v(),W)[p>>>2>>>0];default:B(`invalid type for getValue: ${f}`)}},t.UTF8ToString=Ke,t.stringToUTF8=pn,t.lengthBytesUTF8=wi;var _0,b0,Ti,qt,xr,ko,$0,x0,v0,Ao,S0,E0,Ie,vr,T0,Se,Ro,Te,I0,Oo,M0,C0,k0,No,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,ay,sy,oy,uy,ly,cy,dy,py,hy,fy,my,en,y3=[he,Ce,mi,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,o0,u0,l0,h0,f0,m0,g0,y0,w0],zo={1003524:(p,f,$,_,I)=>{if(t===void 0||!t.Xc)return 1;if((p=Ke(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=t.Xc.get(p)))return 2;if(f=Number(f>>>0),$=Number($>>>0),_=Number(_>>>0),f+$>p.byteLength)return 3;try{let k=p.subarray(f,f+$);switch(I){case 0:(v(),K).set(k,_>>>0);break;case 1:t.Qd?t.Qd(_,k):t.Id(_,k);break;default:return 4}return 0}catch{return 4}},1004348:(p,f,$)=>{t.td(p,(v(),K).subarray(f>>>0,f+$>>>0))},1004412:()=>t.Sd(),1004454:p=>{t.sd(p)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:p=>t.Ad(p),1004609:p=>t.Ed(p),1004641:(p,f,$)=>{t.ed(Number(p),Number(f),Number($),!0)},1004704:(p,f,$)=>{t.ed(Number(p),Number(f),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:p=>{t.$b("Abs",p,void 0)},1004869:p=>{t.$b("Neg",p,void 0)},1004920:p=>{t.$b("Floor",p,void 0)},1004973:p=>{t.$b("Ceil",p,void 0)},1005025:p=>{t.$b("Reciprocal",p,void 0)},1005083:p=>{t.$b("Sqrt",p,void 0)},1005135:p=>{t.$b("Exp",p,void 0)},1005186:p=>{t.$b("Erf",p,void 0)},1005237:p=>{t.$b("Sigmoid",p,void 0)},1005292:(p,f,$)=>{t.$b("HardSigmoid",p,{alpha:f,beta:$})},1005371:p=>{t.$b("Log",p,void 0)},1005422:p=>{t.$b("Sin",p,void 0)},1005473:p=>{t.$b("Cos",p,void 0)},1005524:p=>{t.$b("Tan",p,void 0)},1005575:p=>{t.$b("Asin",p,void 0)},1005627:p=>{t.$b("Acos",p,void 0)},1005679:p=>{t.$b("Atan",p,void 0)},1005731:p=>{t.$b("Sinh",p,void 0)},1005783:p=>{t.$b("Cosh",p,void 0)},1005835:p=>{t.$b("Asinh",p,void 0)},1005888:p=>{t.$b("Acosh",p,void 0)},1005941:p=>{t.$b("Atanh",p,void 0)},1005994:p=>{t.$b("Tanh",p,void 0)},1006046:p=>{t.$b("Not",p,void 0)},1006097:(p,f,$)=>{t.$b("Clip",p,{min:f,max:$})},1006166:p=>{t.$b("Clip",p,void 0)},1006218:(p,f)=>{t.$b("Elu",p,{alpha:f})},1006276:p=>{t.$b("Gelu",p,void 0)},1006328:p=>{t.$b("Relu",p,void 0)},1006380:(p,f)=>{t.$b("LeakyRelu",p,{alpha:f})},1006444:(p,f)=>{t.$b("ThresholdedRelu",p,{alpha:f})},1006514:(p,f)=>{t.$b("Cast",p,{to:f})},1006572:p=>{t.$b("Add",p,void 0)},1006623:p=>{t.$b("Sub",p,void 0)},1006674:p=>{t.$b("Mul",p,void 0)},1006725:p=>{t.$b("Div",p,void 0)},1006776:p=>{t.$b("Pow",p,void 0)},1006827:p=>{t.$b("Equal",p,void 0)},1006880:p=>{t.$b("Greater",p,void 0)},1006935:p=>{t.$b("GreaterOrEqual",p,void 0)},1006997:p=>{t.$b("Less",p,void 0)},1007049:p=>{t.$b("LessOrEqual",p,void 0)},1007108:(p,f,$,_,I)=>{t.$b("ReduceMean",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007283:(p,f,$,_,I)=>{t.$b("ReduceMax",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007457:(p,f,$,_,I)=>{t.$b("ReduceMin",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007631:(p,f,$,_,I)=>{t.$b("ReduceProd",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007806:(p,f,$,_,I)=>{t.$b("ReduceSum",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007980:(p,f,$,_,I)=>{t.$b("ReduceL1",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008153:(p,f,$,_,I)=>{t.$b("ReduceL2",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008326:(p,f,$,_,I)=>{t.$b("ReduceLogSum",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008503:(p,f,$,_,I)=>{t.$b("ReduceSumSquare",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008683:(p,f,$,_,I)=>{t.$b("ReduceLogSumExp",p,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008863:p=>{t.$b("Where",p,void 0)},1008916:(p,f,$)=>{t.$b("Transpose",p,{perm:f?Array.from((v(),N).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1009040:(p,f,$,_)=>{t.$b("DepthToSpace",p,{blocksize:f,mode:Ke($),format:_?"NHWC":"NCHW"})},1009173:(p,f,$,_)=>{t.$b("DepthToSpace",p,{blocksize:f,mode:Ke($),format:_?"NHWC":"NCHW"})},1009306:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge,fn)=>{t.$b("ConvTranspose",p,{format:re?"NHWC":"NCHW",autoPad:f,dilations:[$],group:_,kernelShape:[I],pads:[k,D],strides:[q],wIsConst:()=>!!(v(),z)[se>>>0],outputPadding:xe?Array.from((v(),N).subarray(Number(xe)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((v(),N).subarray(Number(Be)>>>0,Number(Ge)>>>0)):[],activation:Ke(fn)})},1009739:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge)=>{t.$b("ConvTranspose",p,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),N).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),N).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),N).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),N).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(v(),z)[re>>>0],outputPadding:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],outputShape:ke?Array.from((v(),N).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:Ke(Ge)})},1010400:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge,fn)=>{t.$b("ConvTranspose",p,{format:re?"NHWC":"NCHW",autoPad:f,dilations:[$],group:_,kernelShape:[I],pads:[k,D],strides:[q],wIsConst:()=>!!(v(),z)[se>>>0],outputPadding:xe?Array.from((v(),N).subarray(Number(xe)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((v(),N).subarray(Number(Be)>>>0,Number(Ge)>>>0)):[],activation:Ke(fn)})},1010833:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge)=>{t.$b("ConvTranspose",p,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),N).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),N).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),N).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),N).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(v(),z)[re>>>0],outputPadding:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],outputShape:ke?Array.from((v(),N).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:Ke(Ge)})},1011494:(p,f)=>{t.$b("GlobalAveragePool",p,{format:f?"NHWC":"NCHW"})},1011585:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge)=>{t.$b("AveragePool",p,{format:Ge?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(re)>>>0)):[],pads:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],strides:ke?Array.from((v(),N).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012064:(p,f)=>{t.$b("GlobalAveragePool",p,{format:f?"NHWC":"NCHW"})},1012155:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge)=>{t.$b("AveragePool",p,{format:Ge?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(re)>>>0)):[],pads:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],strides:ke?Array.from((v(),N).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012634:(p,f)=>{t.$b("GlobalMaxPool",p,{format:f?"NHWC":"NCHW"})},1012721:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge)=>{t.$b("MaxPool",p,{format:Ge?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(re)>>>0)):[],pads:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],strides:ke?Array.from((v(),N).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013196:(p,f)=>{t.$b("GlobalMaxPool",p,{format:f?"NHWC":"NCHW"})},1013283:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge)=>{t.$b("MaxPool",p,{format:Ge?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(re)>>>0)):[],pads:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],strides:ke?Array.from((v(),N).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013758:(p,f,$,_,I)=>{t.$b("Gemm",p,{alpha:f,beta:$,transA:_,transB:I})},1013862:p=>{t.$b("MatMul",p,void 0)},1013916:(p,f,$,_)=>{t.$b("ArgMax",p,{keepDims:!!f,selectLastIndex:!!$,axis:_})},1014024:(p,f,$,_)=>{t.$b("ArgMin",p,{keepDims:!!f,selectLastIndex:!!$,axis:_})},1014132:(p,f)=>{t.$b("Softmax",p,{axis:f})},1014195:(p,f)=>{t.$b("Concat",p,{axis:f})},1014255:(p,f,$,_,I)=>{t.$b("Split",p,{axis:f,numOutputs:$,splitSizes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1014411:p=>{t.$b("Expand",p,void 0)},1014465:(p,f)=>{t.$b("Gather",p,{axis:Number(f)})},1014536:(p,f)=>{t.$b("GatherElements",p,{axis:Number(f)})},1014615:(p,f)=>{t.$b("GatherND",p,{batch_dims:Number(f)})},1014694:(p,f,$,_,I,k,D,q,re,se,xe)=>{t.$b("Resize",p,{antialias:f,axes:$?Array.from((v(),N).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Ke(I),cubicCoeffA:k,excludeOutside:D,extrapolationValue:q,keepAspectRatioPolicy:Ke(re),mode:Ke(se),nearestMode:Ke(xe)})},1015056:(p,f,$,_,I,k,D)=>{t.$b("Slice",p,{starts:f?Array.from((v(),N).subarray(Number(f)>>>0,Number($)>>>0)):[],ends:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[],axes:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[]})},1015320:p=>{t.$b("Tile",p,void 0)},1015372:(p,f,$)=>{t.$b("InstanceNormalization",p,{epsilon:f,format:$?"NHWC":"NCHW"})},1015486:(p,f,$)=>{t.$b("InstanceNormalization",p,{epsilon:f,format:$?"NHWC":"NCHW"})},1015600:p=>{t.$b("Range",p,void 0)},1015653:(p,f)=>{t.$b("Einsum",p,{equation:Ke(f)})},1015734:(p,f,$,_,I)=>{t.$b("Pad",p,{mode:f,value:$,pads:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1015877:(p,f,$,_,I,k)=>{t.$b("BatchNormalization",p,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!_,format:k?"NHWC":"NCHW"})},1016046:(p,f,$,_,I,k)=>{t.$b("BatchNormalization",p,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!_,format:k?"NHWC":"NCHW"})},1016215:(p,f,$)=>{t.$b("CumSum",p,{exclusive:Number(f),reverse:Number($)})},1016312:(p,f,$)=>{t.$b("DequantizeLinear",p,{axis:f,blockSize:$})},1016402:(p,f,$,_,I)=>{t.$b("GridSample",p,{align_corners:f,mode:Ke($),padding_mode:Ke(_),format:I?"NHWC":"NCHW"})},1016572:(p,f,$,_,I)=>{t.$b("GridSample",p,{align_corners:f,mode:Ke($),padding_mode:Ke(_),format:I?"NHWC":"NCHW"})},1016742:(p,f)=>{t.$b("ScatterND",p,{reduction:Ke(f)})},1016827:(p,f,$,_,I,k,D,q,re)=>{t.$b("Attention",p,{numHeads:f,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:k,qkvHiddenSizes:D?Array.from((v(),N).subarray(Number(q)>>>0,Number(q)+D>>>0)):[],pastPresentShareBuffer:!!re})},1017099:p=>{t.$b("BiasAdd",p,void 0)},1017154:p=>{t.$b("BiasSplitGelu",p,void 0)},1017215:p=>{t.$b("FastGelu",p,void 0)},1017271:(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge,fn,Bo)=>{t.$b("Conv",p,{format:ke?"NHWC":"NCHW",auto_pad:f,dilations:$?Array.from((v(),N).subarray(Number($)>>>0,Number(_)>>>0)):[],group:I,kernel_shape:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],pads:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(re)>>>0)):[],strides:se?Array.from((v(),N).subarray(Number(se)>>>0,Number(xe)>>>0)):[],w_is_const:()=>!!(v(),z)[Number(Be)>>>0],activation:Ke(Ge),activation_params:fn?Array.from((v(),j).subarray(Number(fn)>>>0,Number(Bo)>>>0)):[]})},1017855:p=>{t.$b("Gelu",p,void 0)},1017907:(p,f,$,_,I,k,D,q,re)=>{t.$b("GroupQueryAttention",p,{numHeads:f,kvNumHeads:$,scale:_,softcap:I,doRotary:k,rotaryInterleaved:D,smoothSoftmax:q,localWindowSize:re})},1018124:(p,f,$,_)=>{t.$b("LayerNormalization",p,{axis:f,epsilon:$,simplified:!!_})},1018235:(p,f,$,_)=>{t.$b("LayerNormalization",p,{axis:f,epsilon:$,simplified:!!_})},1018346:(p,f,$,_,I,k)=>{t.$b("MatMulNBits",p,{k:f,n:$,accuracyLevel:_,bits:I,blockSize:k})},1018473:(p,f,$,_,I,k)=>{t.$b("MultiHeadAttention",p,{numHeads:f,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:k})},1018632:(p,f)=>{t.$b("QuickGelu",p,{alpha:f})},1018696:(p,f,$,_,I)=>{t.$b("RotaryEmbedding",p,{interleaved:!!f,numHeads:$,rotaryEmbeddingDim:_,scale:I})},1018835:(p,f,$)=>{t.$b("SkipLayerNormalization",p,{epsilon:f,simplified:!!$})},1018937:(p,f,$)=>{t.$b("SkipLayerNormalization",p,{epsilon:f,simplified:!!$})},1019039:(p,f,$,_)=>{t.$b("GatherBlockQuantized",p,{gatherAxis:f,quantizeAxis:$,blockSize:_})},1019160:p=>{t.Fd(p)},1019194:(p,f)=>t.Hd(Number(p),Number(f),t.Yc.Kd,t.Yc.errors)};function w3(p,f,$){return n0(async()=>{await t.Dd(Number(p),Number(f),Number($))})}function _3(){return typeof wasmOffsetConverter<"u"}function b3(p,f,$,_){var I=Te();try{return D0(p,f,$,_)}catch(k){if(Se(I),k!==k+0)throw k;Ie(1,0)}}function $3(p,f,$){var _=Te();try{return N0(p,f,$)}catch(I){if(Se(_),I!==I+0)throw I;Ie(1,0)}}function x3(p){var f=Te();try{A0(p)}catch($){if(Se(f),$!==$+0)throw $;Ie(1,0)}}function v3(p,f){var $=Te();try{return No(p,f)}catch(_){if(Se($),_!==_+0)throw _;Ie(1,0)}}function S3(p,f,$){var _=Te();try{k0(p,f,$)}catch(I){if(Se(_),I!==I+0)throw I;Ie(1,0)}}function E3(p,f){var $=Te();try{U0(p,f)}catch(_){if(Se($),_!==_+0)throw _;Ie(1,0)}}function T3(p,f,$,_,I,k,D){var q=Te();try{return B0(p,f,$,_,I,k,D)}catch(re){if(Se(q),re!==re+0)throw re;Ie(1,0)}}function I3(p,f,$,_,I,k){var D=Te();try{R0(p,f,$,_,I,k)}catch(q){if(Se(D),q!==q+0)throw q;Ie(1,0)}}function M3(p,f,$,_){var I=Te();try{P0(p,f,$,_)}catch(k){if(Se(I),k!==k+0)throw k;Ie(1,0)}}function C3(p,f,$,_,I){var k=Te();try{O0(p,f,$,_,I)}catch(D){if(Se(k),D!==D+0)throw D;Ie(1,0)}}function k3(p,f,$,_,I,k,D){var q=Te();try{F0(p,f,$,_,I,k,D)}catch(re){if(Se(q),re!==re+0)throw re;Ie(1,0)}}function A3(p,f,$,_,I,k,D){var q=Te();try{G0(p,f,$,_,I,k,D)}catch(re){if(Se(q),re!==re+0)throw re;Ie(1,0)}}function R3(p,f,$,_,I,k,D,q){var re=Te();try{H0(p,f,$,_,I,k,D,q)}catch(se){if(Se(re),se!==se+0)throw se;Ie(1,0)}}function O3(p,f,$,_,I){var k=Te();try{return L0(p,f,$,_,I)}catch(D){if(Se(k),D!==D+0)throw D;Ie(1,0)}}function N3(p,f,$){var _=Te();try{return j0(p,f,$)}catch(I){if(Se(_),I!==I+0)throw I;Ie(1,0)}}function z3(p,f,$,_,I,k,D,q){var re=Te();try{K0(p,f,$,_,I,k,D,q)}catch(se){if(Se(re),se!==se+0)throw se;Ie(1,0)}}function B3(p,f,$,_,I,k,D,q,re,se,xe,ke){var Be=Te();try{W0(p,f,$,_,I,k,D,q,re,se,xe,ke)}catch(Ge){if(Se(Be),Ge!==Ge+0)throw Ge;Ie(1,0)}}function P3(p,f,$,_,I,k){var D=Te();try{return q0(p,f,$,_,I,k)}catch(q){if(Se(D),q!==q+0)throw q;Ie(1,0)}}function D3(p,f,$){var _=Te();try{return Y0(p,f,$)}catch(I){if(Se(_),I!==I+0)throw I;return Ie(1,0),0n}}function U3(p,f,$,_,I,k,D,q,re){var se=Te();try{z0(p,f,$,_,I,k,D,q,re)}catch(xe){if(Se(se),xe!==xe+0)throw xe;Ie(1,0)}}function L3(p){var f=Te();try{return X0(p)}catch($){if(Se(f),$!==$+0)throw $;Ie(1,0)}}function F3(p,f){var $=Te();try{return dy(p,f)}catch(_){if(Se($),_!==_+0)throw _;return Ie(1,0),0n}}function G3(p){var f=Te();try{return Q0(p)}catch($){if(Se(f),$!==$+0)throw $;return Ie(1,0),0n}}function W3(p,f,$,_){var I=Te();try{return ry(p,f,$,_)}catch(k){if(Se(I),k!==k+0)throw k;Ie(1,0)}}function q3(p,f,$,_,I){var k=Te();try{return iy(p,f,$,_,I)}catch(D){if(Se(k),D!==D+0)throw D;Ie(1,0)}}function V3(p,f,$,_,I,k){var D=Te();try{return ay(p,f,$,_,I,k)}catch(q){if(Se(D),q!==q+0)throw q;Ie(1,0)}}function H3(p,f,$,_,I,k){var D=Te();try{return sy(p,f,$,_,I,k)}catch(q){if(Se(D),q!==q+0)throw q;Ie(1,0)}}function j3(p,f,$,_,I,k,D,q){var re=Te();try{return V0(p,f,$,_,I,k,D,q)}catch(se){if(Se(re),se!==se+0)throw se;Ie(1,0)}}function K3(p,f,$,_,I){var k=Te();try{return oy(p,f,$,_,I)}catch(D){if(Se(k),D!==D+0)throw D;return Ie(1,0),0n}}function Y3(p,f,$,_){var I=Te();try{return uy(p,f,$,_)}catch(k){if(Se(I),k!==k+0)throw k;Ie(1,0)}}function X3(p,f,$,_){var I=Te();try{return ly(p,f,$,_)}catch(k){if(Se(I),k!==k+0)throw k;Ie(1,0)}}function Q3(p,f,$,_,I,k,D,q,re,se,xe,ke){var Be=Te();try{return cy(p,f,$,_,I,k,D,q,re,se,xe,ke)}catch(Ge){if(Se(Be),Ge!==Ge+0)throw Ge;Ie(1,0)}}function Z3(p,f,$,_,I,k,D,q,re,se,xe){var ke=Te();try{ty(p,f,$,_,I,k,D,q,re,se,xe)}catch(Be){if(Se(ke),Be!==Be+0)throw Be;Ie(1,0)}}function J3(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge,fn,Bo){var rS=Te();try{ny(p,f,$,_,I,k,D,q,re,se,xe,ke,Be,Ge,fn,Bo)}catch(Po){if(Se(rS),Po!==Po+0)throw Po;Ie(1,0)}}function eS(p,f,$){var _=Te();try{return Z0(p,f,$)}catch(I){if(Se(_),I!==I+0)throw I;Ie(1,0)}}function tS(p,f,$){var _=Te();try{return J0(p,f,$)}catch(I){if(Se(_),I!==I+0)throw I;Ie(1,0)}}function nS(p,f,$,_){var I=Te();try{ey(p,f,$,_)}catch(k){if(Se(I),k!==k+0)throw k;Ie(1,0)}}function Ii(){if(0<$e)Ee=Ii;else if(i)y==null||y(t),P();else{for(var p=pe;0<p.length;)p.shift()(t);0<$e?Ee=Ii:(t.calledRun=!0,M||(P(),y==null||y(t)))}}return i||(en=await Z(),Ii()),t.PTR_SIZE=4,A?t:new Promise((p,f)=>{y=p,w=f})}var su,ou,Uy=te(()=>{var e,t;su=au,ou=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),ou&&au()}),Bi,Pi,uu,ht,lu,Mr,cu,du,Di,pu,Ui,hu,Li,fu,Fi=te(()=>{Oi(),Bi=typeof location>"u"?void 0:location.origin,Pi=self.location.href>"file:"&&self.location.href<"file;",uu=()=>{{if(Pi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Bi).href}return self.location.href}},ht=uu(),lu=()=>{if(ht&&!ht.startsWith("blob:"))return ht.substring(0,ht.lastIndexOf("/")+1)},Mr=(e,t)=>{try{let n=t??ht;return(n?new URL(e,n):new URL(e)).origin===Bi}catch{return!1}},cu=(e,t)=>{let n=t??ht;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},du=(e,t)=>`${t??"./"}${e}`,Di=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},pu=async e=>(await import(e)).default,Ui=(Dy(),Yn(nu)).default,hu=async()=>{if(!ht)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Mr(ht))return[void 0,Ui()];let e=await Di(ht);return[e,Ui(e)]},Li=(Uy(),Yn(iu)).default,fu=async(e,t,n,r)=>{let i=Li&&!(e||t);if(i)if(ht)i=Mr(ht)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Li];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??cu(a,t),o=n&&s&&!Mr(s,t),u=o?await Di(s):s??du(a,t);return[o?u:void 0,await pu(u)]}}}),Gi,Cr,Zn,Wi,mu,gu,yu,qi,Pe,wn=te(()=>{Fi(),Cr=!1,Zn=!1,Wi=!1,mu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},gu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},yu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},qi=async e=>{if(Cr)return Promise.resolve();if(Zn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Wi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!yu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!gu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=mu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[d,h]=await fu(o,a,n>1,!!c||!!l),g=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(c)b.wasmBinary=c,b.locateFile=x=>x;else if(l||a)b.locateFile=x=>l??a+x;else if(o&&o.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,o).href;else if(d){let x=lu();x&&(b.locateFile=T=>x+T)}h(b).then(x=>{Zn=!1,Cr=!0,Gi=x,y(),d&&URL.revokeObjectURL(d)},x=>{Zn=!1,Wi=!0,w(x)})})),await Promise.race(m),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Pe=()=>{if(Cr&&Gi)return Gi;throw new Error("WebAssembly is not initialized yet.")}}),$t,kr,Oe,Vi=te(()=>{wn(),$t=(e,t)=>{let n=Pe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},kr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")kr(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Oe=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),wu,Ly=te(()=>{wn(),Vi(),wu=e=>{let t=Pe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=$t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Oe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&kr(e.extra,"",new WeakSet,(s,o)=>{let u=$t(s,r),l=$t(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Oe(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),_u,bu,$u,_n,xu,vu,Fy=te(()=>{wn(),Vi(),_u=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},bu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},$u=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},_n=(e,t,n,r)=>{let i=$t(t,r),a=$t(n,r);Pe()._OrtAddSessionConfigEntry(e,i,a)!==0&&Oe(`Can't set a session config entry: ${t} - ${n}.`)},xu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",_n(e,"session.disable_quant_qdq","1",n),_n(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&_n(e,"deviceType",d,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);_n(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=$t(a,n),u=s.length,l=0,c=0;if(u>0){l=Pe()._malloc(u*Pe().PTR_SIZE),n.push(l),c=Pe()._malloc(u*Pe().PTR_SIZE),n.push(c);for(let d=0;d<u;d++)Pe().setValue(l+d*Pe().PTR_SIZE,s[d][0],"*"),Pe().setValue(c+d*Pe().PTR_SIZE,s[d][1],"*")}await Pe()._OrtAppendExecutionProvider(e,o,l,c,u)!==0&&Oe(`Can't append execution provider: ${a}.`)}},vu=async e=>{let t=Pe(),n=0,r=[],i=e||{};$u(i);try{let a=_u(i.graphOptimizationLevel??"all"),s=bu(i.executionMode??"sequential"),o=typeof i.logId=="string"?$t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?$t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,c),n===0&&Oe("Can't create session options."),i.executionProviders&&await xu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);_n(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,h]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=$t(d,r);t._OrtAddFreeDimensionOverride(n,g,h)!==0&&Oe(`Can't set a free dimension override: ${d} - ${h}.`)}return i.extra!==void 0&&kr(i.extra,"",new WeakSet,(d,h)=>{_n(n,d,h,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oe("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),bn,jt,$n,Ar,Rr,Hi,ji,Ki,me=te(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},$n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Ar=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Rr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Hi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ji=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ki=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Yi,Su=te(()=>{Oi(),Yi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Eu,Tu,Iu,Mu,Xi,Cu,Me,Kt=te(()=>{me(),Eu=["V","I","W","E","F"],Tu=(e,t)=>{console.log(`[${Eu[e]},${new Date().toISOString()}]${t}`)},Xi=(e,t)=>{Iu=e,Mu=t},Cu=(e,t)=>{let n=Rr(e),r=Rr(Iu);n>=r&&Tu(n,typeof t=="function"?t():t)},Me=(...e)=>{Mu&&Cu(...e)}}),ku,Pn,F,Or,Au,Ru,Ou,_e=te(()=>{ku=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Pn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=ku.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(c>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},F=class Mi{static size(t){return Mi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Mi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Mi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Or=class Sr{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Sr.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Sr.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Sr.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Sr.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},Au=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Pn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Ru=-34028234663852886e22,Ou=34028234663852886e22}),Qi,Nu=te(()=>{me(),Qi=(e,t)=>new(Ar(t))(e)}),Zi,Ji,ea,zu,ta,Bu,na,ra,ia,Pu,Du,Gy=te(()=>{me(),Kt(),Zi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ji=(e,t)=>{if(t==="int32")return e;let n=Zi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Ar(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},ea=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},zu=1,ta=()=>zu++,Bu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),na=(e,t)=>{let n=Zi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},ra=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return na(this.dataType,this.tensorShape)}destroy(){Me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=ea(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ia=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Bu.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);Me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==na(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ji(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?ea(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Pu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ta();return this.tensorTrackersById.set(e,new ia(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=ta(),s=new ra({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ia(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,n)){Me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new ra({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Du=(...e)=>new Pu(...e)}),Jn,Uu,Lu,Wy=te(()=>{me(),wn(),Nu(),Gy(),Kt(),Jn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Uu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Lu=class{constructor(e){this.tensorManager=Du(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Xi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Uu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Jn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Jn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Pe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Qi(n,t)}}registerMLTensor(e,t,n,r){let i=Jn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(s){let d=Ji(new Uint8Array(l),"int64");c=new Int32Array(d.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Jn.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),aa=te(()=>{}),sa,Nr,zr,Fu,Gu,oa,ua,Wu,qu,qy=te(()=>{Kt(),aa(),sa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Nr=[],zr=e=>Math.ceil(Number(e)/16)*16,Fu=e=>{for(let t=0;t<Nr.length;t++){let n=Nr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Gu=1,oa=()=>Gu++,ua=async(e,t,n,r)=>{let i=zr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},Wu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of sa)Nr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=zr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),Me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=zr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=oa();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Fu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:oa(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await ua(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=sa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},qu=(...e)=>new Wu(...e)}),Vu,Re,Ve=te(()=>{Vu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Vu(e)}),Dn,Br,Ye,it,de,qe,la,Un,nn,le,er,H,ue,Hu,ca,ju,Ku,be=te(()=>{me(),_e(),Dn=64,Br=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let n=Br(e,t);return typeof n=="string"?n:n[0]},it=(e,t=1)=>{let n=Br(e,t);return typeof n=="string"?n:n[1]},de=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:F.computeStrides(n)})}),t},qe=e=>e%4===0?4:e%2===0?2:1,la=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Un=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,nn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,er=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=Br(t,i),c=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],h={indices:u,value:c,storage:d,tensor:t},g=A=>typeof A=="string"?A:`${A}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let A=0;A<s-1;A++)x+=`
    let dim${A} = current / ${le(b,A,s)};
    let rest${A} = current % ${le(b,A,s)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=A=>(m.offsetToIndices=!0,s<2?A:`o2i_${e}(${A})`),E=[];if(s>=2)for(let A=s-1;A>=0;A--)E.push(`${le(b,A,s)} * (indices[${A}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=A=>(m.indicesToOffset=!0,s<2?A:`i2o_${e}(${A})`),v=(...A)=>s===0?"0u":`${h.indices}(${A.map(g).join(",")})`,R=(A,O)=>s<2?`${A}`:`${le(A,O,s)}`,z=(A,O,P)=>s<2?`${A}=${P};`:`${le(A,O,s)}=${P};`,K={},U=(A,O)=>{m.broadcastedIndicesToOffset=!0;let P=`${O.name}broadcastedIndicesTo${e}Offset`;if(P in K)return`${P}(${A})`;let B=[];for(let V=s-1;V>=0;V--){let Z=O.indicesGet("outputIndices",V+O.rank-s);B.push(`${R(b,V)} * (${Z} % ${R(w,V)})`)}return K[P]=`fn ${P}(outputIndices: ${O.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${P}(${A})`},G=(A,O)=>(()=>{if(h.storage===h.value)return`${e}[${A}]=${O};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${O}), select(0u, 0xFFFFFFFFu, ${O} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${O}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${O}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),N=A=>(()=>{if(h.storage===h.value)return`${e}[${A}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${A}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${A}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),W=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${N(`i2o_${e}(indices)`)};
  }`,j=s<2?"":(()=>{let A=o.map(P=>`d${P}: u32`).join(", "),O=o.map(P=>`d${P}`).join(", ");return`
  fn get_${e}(${A}) -> ${c} {
    return get_${e}ByIndices(${v(O)});
  }`})(),ee=(...A)=>{if(A.length!==s)throw new Error(`indices length must be ${s}`);let O=A.map(g).join(",");return s===0?N("0u"):s===1?N(O[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${O})`)},ce=A=>s<2?N(A):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${A})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let A=o.map(P=>`d${P}: u32`).join(", "),O=o.map(P=>`d${P}`).join(", ");return`
  fn set_${e}(${A}, value: ${c}) {
    set_${e}ByIndices(${v(O)}, value);
  }`})();return{impl:()=>{let A=[],O=!1;return m.offsetToIndices&&(A.push(T),O=!0),m.indicesToOffset&&(A.push(M),O=!0),m.broadcastedIndicesToOffset&&(Object.values(K).forEach(P=>A.push(P)),O=!0),m.set&&(A.push(ne),O=!0),m.setByIndices&&(A.push(L),O=!0),m.get&&(A.push(j),O=!0),m.getByIndices&&(A.push(W),O=!0),!a&&O&&A.unshift(`const ${w} = ${h.indices}(${n.join(",")});`,`const ${b} = ${h.indices}(${F.computeStrides(n).join(",")});`),A.join(`
`)},type:h,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:U,indices:v,indicesGet:R,indicesSet:z,set:(...A)=>{if(A.length!==s+1)throw new Error(`indices length must be ${s}`);let O=A[s];if(typeof O!="string")throw new Error("value must be string");let P=A.slice(0,s).map(g).join(",");return s===0?G("0u",O):s===1?G(P[0],O):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${P}, ${O})`)},setByOffset:G,setByIndices:(A,O)=>s<2?G(A,O):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${O});`),get:ee,getByOffset:N,getByIndices:ce,usage:r,name:e,strides:b,shape:w,rank:s}},H=(e,t,n,r=1)=>er(e,t,n,"input",r),ue=(e,t,n,r=1)=>er(e,t,n,"output",r),Hu=(e,t,n)=>er(e,t,n,"atomicOutput",1),ca=(e,t,n,r=1)=>er(e,t,n,"internal",r),ju=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Dn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ku=(e,t)=>new ju(e,t)}),Yu,da,Xu,Qu,Zu,Ju,ft,el,tl,rn=te(()=>{me(),_e(),Ve(),be(),Yu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},da=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Xu=(e,t)=>F.sortBasedOnPerm(e,da(e.length,t)),Qu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Zu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Ju=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ft=(e,t)=>{let n=e.dataType,r=e.dims.length,i=da(r,t),a=Xu(e.dims,i),s=e.dims,o=a,u=r<2||Ju(i,e.dims),l;if(u)return l=m=>{let y=H("input",n,s,4),w=ue("output",n,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=F.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:c,newPerm:d}=Zu(e.dims,i),h=F.areEqual(d,[2,3,1]),g=F.areEqual(d,[3,1,2]);if(c.length===2||h||g){s=h?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,o=[s[1],s[0]];let m=16;return l=y=>{let w=H("a",n,s.length),b=ue("output",n,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=F.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:y},...de(s,o)]}},getShaderSource:l}}return l=m=>{let y=H("a",n,s.length),w=ue("output",n,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Qu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=F.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...de(s,o)]}},getShaderSource:l}},el=(e,t)=>{Yu(e.inputs,t.perm),e.compute(ft(e.inputs[0],t.perm))},tl=e=>Re({perm:e.perm})}),nl,rl,il,al,sl,ol,ul,ll,cl,dl,xt,pl,hl,fl,ml,gl,yl,wl,_l,bl,$l,Vy=te(()=>{me(),_e(),be(),ha(),rn(),nl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},rl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},il={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},al={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},sl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},ol=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},ul=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},ll=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},cl=(e,t)=>{let n=[];if(!ll(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},dl=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=F.size(a),l=F.size(s),c=H("_A",n[0].dataType,o),d=ue("output",i,a),h=64;u===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,d)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${il[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${nl[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
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
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${al[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},xt=(e,t,n,r)=>{let i=e.inputs.length===1?n:pa(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((g,m)=>m));let s=F.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=cl(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ft(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=sl(o.length,u.dims.length));let[c,d]=ol(u.dims,o),h=c;i.keepDims&&(h=ul(c,s)),e.compute(dl(t,i.cacheKey,[u],r,e.inputs[0].dataType,h,d),{inputs:[u]})},pl=(e,t)=>{xt(e,"ReduceMeanShared",t,"mean")},hl=(e,t)=>{xt(e,"ReduceL1Shared",t,"l1")},fl=(e,t)=>{xt(e,"ReduceL2Shared",t,"l2")},ml=(e,t)=>{xt(e,"ReduceLogSumExpShared",t,"logSumExp")},gl=(e,t)=>{xt(e,"ReduceMaxShared",t,"max")},yl=(e,t)=>{xt(e,"ReduceMinShared",t,"min")},wl=(e,t)=>{xt(e,"ReduceProdShared",t,"prod")},_l=(e,t)=>{xt(e,"ReduceSumShared",t,"sum")},bl=(e,t)=>{xt(e,"ReduceSumSquareShared",t,"sumSquare")},$l=(e,t)=>{xt(e,"ReduceLogSumShared",t,"logSum")}}),vt,xl,Pr,pa,St,vl,Sl,El,Tl,Il,Ml,Cl,kl,Al,Rl,Et,Ol,Nl,zl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,ha=te(()=>{me(),_e(),Ve(),be(),Vy(),vt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},xl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Pr=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,c=l.length,d=F.normalizeAxes(i,c),h=!o&&d.length===0;l.forEach((y,w)=>{h||d.indexOf(w)>=0?s&&u.push(1):u.push(y)});let g=u.length,m=F.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=H("_A",n[0].dataType,c),x=ue("output",a,g),T=r(b,x,d),S=T[2];for(let E=0,M=0;E<c;E++)h||d.indexOf(E)>=0?(s&&M++,S=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${b.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
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
          ${S}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...de(l,u)]})}},pa=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},St=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:pa(i,n);e.compute(Pr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?xl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},vl=(e,t)=>{vt(e.inputs),St(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Sl=(e,t)=>{vt(e.inputs),St(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},El=(e,t)=>{vt(e.inputs),St(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Tl=(e,t)=>{vt(e.inputs),St(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Il=(e,t)=>{vt(e.inputs),St(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Ml=(e,t)=>{vt(e.inputs),St(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Cl=(e,t)=>{vt(e.inputs),St(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},kl=(e,t)=>{vt(e.inputs),St(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Al=(e,t)=>{vt(e.inputs),St(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Rl=(e,t)=>{vt(e.inputs),St(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Et=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Ol=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):pl(e,t)},Nl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sl(e,t):hl(e,t)},zl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):fl(e,t)},Bl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):ml(e,t)},Pl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):gl(e,t)},Dl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):yl(e,t)},Ul=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):wl(e,t)},Ll=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Al(e,t):_l(e,t)},Fl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rl(e,t):bl(e,t)},Gl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):$l(e,t)}}),fa,Wl,ql,ma,Hy=te(()=>{me(),Ve(),ha(),fa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Wl=(e,t)=>{fa(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Pr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ql=(e,t)=>{fa(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Pr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ma=e=>Re(e)}),Vl,Dr,Hl,jl,Kl,tr,Yl,Xl,ga=te(()=>{me(),_e(),aa(),be(),Vl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,h=d,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let m=l;if(d!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let w=m+y,b=-1,x=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:d,vHiddenSize:g,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Dr=(e,t,n)=>t&&e?`
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
    `,Hl=(e,t,n,r,i,a,s,o)=>{let u=qe(s?1:a),l=64,c=a/u;c<l&&(l=32);let d=Math.ceil(a/u/l),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:d}],g=Ye(e.dataType,u),m=it(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let w=b=>{let x=ue("x",e.dataType,e.dims,u),T=[x],S=s?H("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let E=o?H("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let M=it(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(C).declareVariables(...T)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Dr(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${x.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${g};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},jl=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=d?[a.batchSize,h,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=qe(a.headSize),b=a.headSize/w,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:m}],E=d&&r&&F.size(r.dims)>0,M=["type","type"];E&&M.push("type"),i&&M.push("type"),o&&M.push("type"),u&&M.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&C.push({dims:g,dataType:t.dataType,gpuDataType:0});let v=R=>{let z=H("q",t.dataType,t.dims,w),K=H("key",n.dataType,n.dims,w),U=[z,K];if(E){let L=H("past_key",r.dataType,r.dims,w);U.push(L)}i&&U.push(H("attention_bias",i.dataType,i.dims));let G=o?H("seq_lens",o.dataType,o.dims):void 0;G&&U.push(G);let N=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;N&&U.push(N);let W=ue("output",t.dataType,c),j=[W];d&&j.push(ue("present_key",t.dataType,g,w));let ee=it(1,w),ce=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${z.type.storage}, ${x*x}>;
  ${R.registerUniforms(ce).declareVariables(...U,...j)}
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
    ${Dr(G,N,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ee}(0);
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
          value += ${ee}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},Kl=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,d=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=d?[i.batchSize,h,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&F.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:m,dataType:t.dataType,gpuDataType:0}];d&&S.push({dims:g,dataType:t.dataType,gpuDataType:0});let E=M=>{let C=H("probs",t.dataType,t.dims),v=H("v",n.dataType,n.dims),R=[C,v];x&&R.push(H("past_value",r.dataType,r.dims));let z=s?H("seq_lens",s.dataType,s.dims):void 0;s&&R.push(z);let K=o?H("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(K);let U=[ue("output",t.dataType,m)];d&&U.push(ue("present_value",t.dataType,g));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${C.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${C.type.value}, ${y*y}>;
  ${M.registerUniforms(G).declareVariables(...R,...U)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Dr(z,K,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:b}),getShaderSource:E}},tr=(e,t,n,r,i,a,s,o,u,l,c=void 0,d=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),g=h>1?s:void 0,m=h>1?o:void 0,y=h>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&F.size(u.dims)>0?u:void 0,x=[t,n];g&&F.size(g.dims)>0&&x.push(g),b&&x.push(b),c&&x.push(c),d&&x.push(d);let T=e.compute(jl(h,t,n,g,b,l,y,c,d),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Hl(T,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,d),{inputs:c&&d?[T,c,d]:[T],outputs:[]});let S=[T,r];m&&F.size(m.dims)>0&&S.push(m),c&&S.push(c),d&&S.push(d),e.compute(Kl(h,T,r,m,l,y,c,d),{inputs:S,outputs:h>1?[0,2]:[0]})},Yl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=d=>{let h=ue("output_q",u[0].dataType,n),g=ue("output_k",u[0].dataType,n),m=ue("output_v",u[0].dataType,n),y=H("input",u[0].dataType,u[0].dims),w=H("weight",u[1].dataType,u[1].dims),b=H("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${d.registerUniforms(T).declareVariables(y,w,b,h,g,m)}
  ${d.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Xl=(e,t)=>{let n=Vl(e.inputs,t),[r,i,a]=Yl(e,n);return tr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Ql,Zl,Jl,ec,jy=te(()=>{gt(),me(),_e(),Ve(),be(),Ql=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Zl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?qe(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=F.size(a)/s,l=r,c=l?a.length:a,d=H("x",e[0].dataType,e[0].dims,s),h=H("scale",e[1].dataType,e[1].dims,o),g=H("bias",e[2].dataType,e[2].dims,o),m=H("inputMean",e[3].dataType,e[3].dims,o),y=H("inputVar",e[4].dataType,e[4].dims,o),w=ue("y",e[0].dataType,c,s),b=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<h.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(d,h,g,m,y,w)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...de(a)]:[{type:12,data:u}]})}},Jl=e=>Re(e),ec=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Jl({...t,outputCount:r});if(Ne.webgpu.validateInputContent&&Ql(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Zl(n,i))}}),tc,nc,rc,Ky=te(()=>{_e(),be(),tc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},nc=e=>{let t=e[0].dims,n=e[0].dims[2],r=F.size(t)/4,i=e[0].dataType,a=H("input",i,t,4),s=H("bias",i,[n],4),o=H("residual",i,t,4),u=ue("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},rc=e=>{tc(e.inputs),e.compute(nc(e.inputs))}}),ic,Ae,ac,sc,oc,uc,lc,cc,dc,pc,hc,fc,mc,gc,yc,wc,nr,_c,Ur,bc,$c,xc,vc,Sc,Ec,Tc,Ic,Mc,Cc,kc,Ac,Rc,Oc,Nc,zc,ya,Bc,wa,_a,Pc,Dc,Uc,Lc,Fc,Gc,ba=te(()=>{me(),_e(),Ve(),be(),ic=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=H("inputData",n,[o],4),c=ue("outputData",r,[o],4),d=[{name:"vec_size",type:"u32"}];return s&&d.push(...s),`
      ${e.registerUniforms(d).declareVariables(l,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Ae=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(F.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>ic(l,F.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(F.size(l[0].dims)/64/4)},programUniforms:u})}},ac=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},sc=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},oc=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},uc=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},lc=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},cc=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},dc=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},pc=e=>Re(e),hc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},fc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},mc=(e,t)=>{let n=t||fc(e.inputs),r=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},gc=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},yc=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},wc=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},nr=e=>Re(e),_c=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ur=(e="f32")=>`
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
}`,bc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Ur(t)))},$c=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},xc=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},vc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Ur(t)))},Sc=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Ec=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},Tc=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},Ic=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Mc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Cc=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},kc=e=>Re(e),Ac=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Rc=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},Oc=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},Nc=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},zc=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},ya=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Bc=e=>{e.compute(Ae(e.inputs[0],"Tanh",ya))},wa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ya("v")};
}
`,_a=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Pc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",_a,wa(t),void 0,e.inputs[0].dataType))},Dc=(e,t)=>{let n=it(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Uc=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},Lc=(e,t)=>`
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
`,Fc=e=>`quick_gelu_impl(${e})`,Gc=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",Fc,Lc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Wc,qc,Vc,Yy=te(()=>{_e(),be(),ba(),Wc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},qc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=H("input",e[0].dataType,e[0].dims,4),r=H("bias",e[0].dataType,[e[0].dims[2]],4),i=ue("output",e[0].dataType,t,4),a=F.size(t)/4,s=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Ur(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Vc=e=>{Wc(e.inputs),e.compute(qc(e.inputs))}}),Hc,jc,Tt,Kc,Yc,Xc,Qc,Zc,Jc,ed,td,nd,rd,Xy=te(()=>{me(),_e(),be(),Hc=(e,t,n,r,i,a,s,o,u,l,c,d)=>{let h,g;typeof o=="string"?h=g=(x,T)=>`${o}((${x}),(${T}))`:typeof o=="function"?h=g=o:(h=o.scalar,g=o.vector);let m=ue("outputData",c,r.length,4),y=H("aData",u,t.length,4),w=H("bData",l,n.length,4),b;if(i)if(a){let x=F.size(t)===1,T=F.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||T?b=m.setByOffset("global_idx",g(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",g(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",g(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,S,E="")=>{let M=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${m.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,m)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,m)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${E}(${h(M,C)});
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
      }`},jc=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!F.areEqual(o,u),c=o,d=F.size(o),h=!1,g=!1,m=[l];if(l){let y=Pn.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=F.size(c);let w=F.size(o)===1,b=F.size(u)===1,x=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(T);let S=1;for(let E=1;E<c.length;E++){let M=o[o.length-E],C=u[u.length-E];if(M===C)S*=M;else break}S%4===0?(g=!0,h=!0):(w||b||x||T)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Hc(y,o,u,c,h,l,g,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(F.size(c)/4)},...de(o,u,c)]})}},Tt=(e,t,n,r,i,a)=>{e.compute(jc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Kc=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},Yc=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},Xc=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Qc=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},Zc=e=>{let t=H("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Jc=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},ed=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},td=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},nd=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},rd=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),id,ad,sd,od,ud,ld,Qy=te(()=>{me(),_e(),Ve(),be(),id=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},ad=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,sd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},od=(e,t,n,r)=>{let i=F.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=H(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)c.push(...de(e[y].dims));c.push(...de(n));let d=ue("output",r,n.length),h=d.indicesGet("indices",t),g=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...s,d)})()}

  ${ad(a.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${sd(s,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:m}},ud=(e,t)=>{let n=e.inputs,r=n[0].dims,i=F.normalizeAxis(t.axis,r.length);id(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>F.size(o.dims)>0);e.compute(od(s,i,a,n[0].dataType),{inputs:s})},ld=e=>Re({axis:e.axis})}),xn,vn,Sn,$a,En=te(()=>{me(),_e(),xn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},$a=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Ru,Ou];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,cd,xa=te(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},cd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),dd,Zy=te(()=>{dd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,va,Sa=te(()=>{me(),_e(),be(),En(),rr=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${le(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,le(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},va=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],c=s[s.length-1],d=qe(l),h=qe(c),g=qe(u),m=F.size(n)/d/g,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[F.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:c}];vn(t,x),x.push(...de(w,s,o)),y&&x.push(...de(e[2].dims)),x.push(...de(b));let T=S=>{let E=ca("batch_dims",e[0].dataType,w.length),M=H("a",e[0].dataType,s.length,h),C=H("b",e[1].dataType,o.length,d),v=ue("output",e[0].dataType,b.length,d),R=Ye(v.type.tensor),z=xn(t,v.type.value,R),K=[M,C],U="";if(y){let W=i?d:1;K.push(H("bias",e[2].dataType,e[2].dims.length,W)),U=`${i?`value += bias[col / ${W}];`:`value += ${v.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,G);let N=()=>{let W=`var a_data: ${M.type.value};`;for(let j=0;j<h;j++)W+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${d}];`;for(let j=0;j<g;j++){W+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${h}];`;for(let ee=0;ee<h;ee++)W+=`
            values[${j}] = fma(${C.type.value}(a_data${h===1?"":`[${ee}]`}), b_data${ee}, values[${j}]);
`}return W};return`
  ${S.registerUniforms(G).registerInternalVariables(E).declareVariables(...K,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${rr("a_indices",M,M.rank-2,E.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${rr("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${N()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${U}
      ${z}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${h};${g};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:T}}}),pd,hd,Ea,Ta,fd,Ia,md,Lr,Ma=te(()=>{me(),_e(),be(),En(),Sa(),xa(),pd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,hd=(e,t)=>e?`
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
        }`,Ea=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:a,d=i?a:u,h=c/t[0],g=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${n}>, ${c/h}>, ${d}>;
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
  let batch = ${s?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${pd(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
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

          ${hd(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ta=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,fd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ia=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],d=i?l:a,h=i?a:l;if(!(h%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],m=d/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Ta(i,r)}
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

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ta(i,r)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${c}>, ${a}>;
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
    ${w}
  }
`},md=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=Ye(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${rr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${rr("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
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
    `},Lr=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),d=F.size(c),h=s[s.length-2],g=s[s.length-1],m=o[o.length-1],y=g%4===0&&m%4===0,w=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(h/b[1]/w[1]),Math.ceil(d/b[2]/w[2])],T=y?4:1,S=[...u,h,g/T],E=S.length,M=[...l,g,m/T],C=M.length,v=[d,h,m/T],R=[{type:6,data:h},{type:6,data:m},{type:6,data:g}];vn(t,R),R.push(...de(c,S,M));let z=["rank","rank"],K=e.length>2;K&&(R.push(...de(e[2].dims)),z.push("rank")),R.push(...de(v));let U=G=>{let N=c.length,W=ca("batchDims",e[0].dataType,N,1),j=Ye(e[0].dataType),ee=H("a",e[0].dataType,E,T),ce=H("b",e[1].dataType,C,T),L=ue("result",e[0].dataType,v.length,T),ne=[ee,ce];if(K){let V=i?T:1;ne.push(H("bias",e[2].dataType,e[2].dims.length,V))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,A);let O=Ye(L.type.tensor),P=xn(t,L.type.value,O),B=md(T,K,P,[W,ee,ce,L],i);return`
  ${G.registerUniforms(A).registerInternalVariables(W).declareVariables(...ne,L)}
  ${B}
  ${y?Ea(w,b,j,W):Ia(w,b,j,W)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:U}}}),gd,yd,Jy=te(()=>{me(),Kt(),be(),En(),xa(),Zy(),Ma(),gd=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},d=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
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
    var resData = ${Je(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Je(s,l)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Je(s,l)}(0.0);`,S=e?r&&n?d(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(o)}
    }
    return ${Je(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(o)}
    }
    return ${Je(o,l)}(0.0);`,E=Je(u,l),M=Je(e?s:o,l),C=Je(e?o:s,l),v=xn(a,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
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
      ${g}
      ${cd(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},yd=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],d=n[0],h=l?n[2]:n[3],g=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&m%4===0,w=l?m:h*g,b=l?h*g:m,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/x[0]/T[0]),Math.ceil(b/x[1]/T[1]),Math.ceil(d/x[2]/T[2])];Me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=y?l&&c%4!==0?3:4:1,M=x[1]*T[1],C=x[0]*T[0],v=Math.max(x[0]*E,x[1]),R=r%M===0,z=i%C===0,K=a%v===0,U=y?[E,4,4]:[1,1,1],G=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vn(t,G),G.push(...de(e[0].dims,e[1].dims));let N=["rank","rank"];s&&(G.push(...de(e[2].dims)),N.push("rank")),G.push(...de(n));let W=j=>{let ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,ee);let ce=y?4:1,L=Ye(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,A=H("x",e[0].dataType,e[0].dims.length,E===3?1:E),O=H("w",e[1].dataType,e[1].dims.length,ce),P=[A,O],B=ue("result",e[0].dataType,n.length,ce);if(s){let V=H("bias",e[2].dataType,e[2].dims.length,ce);P.push(V),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${dd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(ee).declareVariables(...P,B)}
        ${ne}
        ${gd(l,R,z,K,s,t,U[0],U[1],U[2],L)}
        ${y?Ea(T,x,L,void 0,!l,v):Ia(T,x,L,void 0,!l,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${R};${z};${K};${M};${C};${v}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:G}),getShaderSource:W}}}),wd,Ca,ir,_d,ka,bd,$d,xd,ew=te(()=>{me(),Kt(),_e(),be(),En(),xa(),wd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ca=e=>typeof e=="number"?[e,e,e]:e,ir=(e,t)=>t<=1?e:e+(e-1)*(t-1),_d=(e,t,n,r=1)=>{let i=ir(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},ka=(e,t,n,r,i)=>{i==null&&(i=_d(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},bd=(e,t,n,r,i,a,s,o,u,l)=>{let c,d,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=ka([t,n,r,1],[o,u,l],1,[i,a,s],e);d=m[0],h=m[1],g=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=ka([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);d=m[0],h=m[1],g=m[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),h=Math.ceil(n/a),g=Math.ceil(r/s);let m=(d-1)*i+o-t,y=(h-1)*a+u-n,w=(g-1)*s+l-r,b=Math.floor(m/2),x=m-b,T=Math.floor(y/2),S=y-T,E=Math.floor(w/2),M=w-E;c={top:T,bottom:S,left:E,right:M,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:d,outHeight:h,outWidth:g}},$d=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,c,d;if(s==="channelsLast")[o,u,l,c,d]=e;else if(s==="channelsFirst")[o,d,u,l,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,g,m,y]=t,[w,b,x]=Ca(n),[T,S,E]=Ca(r),M=ir(g,T),C=ir(m,S),v=ir(y,E),{padInfo:R,outDepth:z,outHeight:K,outWidth:U}=bd(i,u,l,c,w,b,x,M,C,v),G=a?h*d:h,N=[0,0,0,0,0];return s==="channelsFirst"?N=[o,G,z,K,U]:s==="channelsLast"&&(N=[o,z,K,U,G]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:c,inChannels:d,outDepth:z,outHeight:K,outWidth:U,outChannels:G,padInfo:R,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:g,filterHeight:m,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:E,inShape:e,outShape:N,filterShape:t}},xd=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(wd(u.x.map(w=>n[w]))/o[0]),1,1];Me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,d=F.size(n),h=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];vn(t,h),h.push(...de(e[0].dims,e[1].dims));let g=["rank","rank"],m=e.length===3;m&&(h.push(...de(e[2].dims)),g.push("rank")),h.push(...de(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,b);let x=1,T=Ye(e[0].dataType),S=H("x",e[0].dataType,e[0].dims.length,c),E=H("W",e[1].dataType,e[1].dims.length,x),M=[S,E],C=ue("result",e[0].dataType,n.length,x),v="";if(m){let K=H("bias",e[2].dataType,e[2].dims.length,x);M.push(K),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?le("coords",4,5):le("coords",1,5)}];
        }`}let R=Je(c,T),z=xn(t,R,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...M,C)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,S.rank)};
              let d2 = ${s?le("coords",S.rank-1,S.rank):le("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?le("coords",1,S.rank):le("coords",2,S.rank)},
              ${s?le("coords",2,S.rank):le("coords",3,S.rank)},
              ${s?le("coords",3,S.rank):le("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?le("uniforms.x_shape",1,S.rank):le("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?le("uniforms.x_shape",2,S.rank):le("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?le("uniforms.x_shape",3,S.rank):le("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?le("uniforms.x_shape",4,S.rank):le("uniforms.x_shape",1,S.rank)};
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
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${m}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),vd,Sd,tw=te(()=>{me(),_e(),be(),En(),vd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,d=u&&c>=4?qe(l):1,h=F.size(n)/d,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];vn(t,g),g.push(...de(s,[o[0],o[1],o[2],o[3]/d]));let m=i?["rank","rank","rank"]:["rank","rank"];g.push(...de([n[0],n[1],n[2],n[3]/d]));let y=w=>{let b=ue("output",e[0].dataType,n.length,d),x=Ye(b.type.tensor),T=xn(t,b.type.value,x),S=H("x",e[0].dataType,s.length),E=H("w",e[1].dataType,o.length,d),M=[S,E];i&&M.push(H("b",e[2].dataType,e[2].dims,d));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,C);let v=u?`
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
  ${w.registerUniforms(C).declareVariables(...M,b)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${v}
    ${a}
    ${T}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},Sd=(e,t,n,r)=>{let i=e.length>2,a=qe(n[3]),s=qe(n[2]),o=F.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vn(t,d),d.push(...de(u,l,c));let h=(s-1)*t.strides[1]+l[1],g=m=>{let y=ue("output",e[0].dataType,c.length,a),w=Ye(y.type.tensor),b=xn(t,y.type.value,w),x=H("x",e[0].dataType,u.length,a),T=H("w",e[1].dataType,l.length,a),S=[x,T];i&&S.push(H("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,M),`
  ${m.registerUniforms(M).declareVariables(...S,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${h}>;
    var values: array<${y.type.value}, ${s}>;
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
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:g}}}),Ed,Fr,Td,Gr,Aa,Ra,Id,Md,Oa,nw=te(()=>{_e(),Jy(),ew(),Ma(),tw(),En(),Sa(),rn(),Ed=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],c=t.slice(2).map((h,g)=>h+(h-1)*(n[g]-1)),d=o.map((h,g)=>h+r[g]+r[g+u]).map((h,g)=>Math.floor((h-c[g]+i[g])/i[g]));return d.splice(0,0,s),d.splice(a?3:1,0,l),d},Fr=[2,3,1,0],Td=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Gr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Or.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Aa=e=>{let t=$a(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ra=(e,t,n,r)=>{let i=n.format==="NHWC",a=Ed(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(ft(t[1],Fr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),M.push(C)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Sd(M,n,a,r),{inputs:M}):e.compute(vd(M,n,a,r),{inputs:M});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],d=t[1].dims[3],h=a[i?1:2],g=a[i?2:3],m=a[i?3:1],y=i&&c===o&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],C,v,R,z=[];if(i){let G=e.kernelCustomData.wT??e.compute(ft(t[1],Fr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),y){let N=o*u*l;C=t[0].reshape([1,M,N]),v=G.reshape([1,N,m]),R=[1,M,m]}else C=t[0].reshape([M,o*u,l]),v=G.reshape([1,l,m]),R=[M,h*g,m];z.push(C),z.push(v)}else C=t[0].reshape([M,l,o*u]),v=t[1].reshape([1,m,l]),R=[M,m,h*g],z.push(v),z.push(C);s&&z.push(t[2]);let K=R[2],U=z[0].dims[z[0].dims.length-1];K<8&&U<8?e.compute(va(z,n,a,R,i,r),{inputs:z}):e.compute(Lr(z,n,a,R,i,r),{inputs:z});return}let w=!0,b=e.kernelCustomData.wT??e.compute(ft(t[1],Fr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];s&&x.push(t[2]);let T=i?h*g:m,S=i?m:h*g,E=c*d*l;e.compute(yd(x,n,a,T,S,E,s,w,r),{inputs:x})},Id=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Gr({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Ra(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Md=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Gr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=$d(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(xd(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Oa=(e,t)=>{if(Td(e.inputs,t),e.inputs[0].dims.length===3)Id(e,t);else if(e.inputs[0].dims.length===5)Md(e,e.inputs,t);else{let n=Gr(t,e.inputs);Ra(e,e.inputs,n)}}}),Cd,rw=te(()=>{me(),Kt(),_e(),be(),Cd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],c=a?qe(u):1,d=a&&l===1&&u>=4,h=d?Math.floor(u/4)*4:Math.floor(u/c)*c,g=u-h,m=a?qe(l):1,y=a?l===1?c:m:1,w=F.size(i)/m,b=[Math.ceil(w/64),1,1];Me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],M=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:w},{type:12,data:T},{type:12,data:S},{type:12,data:E},{type:12,data:M},{type:6,data:C},{type:12,data:h},{type:12,data:u},{type:12,data:l},...de(e[0].dims,e[1].dims)];r&&(v.push(...de(e[2].dims)),x.push("rank")),v.push(...de(i));let R=z=>{let K=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],U=Ye(e[0].dataType),G=a?1:2,N=a?2:3,W=a?3:1,j=H("W",e[1].dataType,e[1].dims.length,y),ee=H("Dy",e[0].dataType,e[0].dims.length,c),ce=[ee,j];r&&ce.push(H("bias",e[2].dataType,[i[W]].length,m));let L=ue("result",e[0].dataType,i.length,m),ne=()=>{let P="";if(d)c===4?P+=`
        let xValue = ${ee.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?P+=`
          dotProd = dotProd + dot(vec4<${U}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}), vec4<${U}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(P+=`
          dotProd = dotProd + dot(vec4<${U}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}, ${ee.getByOffset("x_offset + 2u")}, ${ee.getByOffset("x_offset + 3u")}), vec4<${U}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(P+=`
                  let xValue = ${a?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ee.get("batch","inputChannel","idyR","idyC")};
        `,c===1)P+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)P+=`
            let wValue${B} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return P},A=()=>{if(g===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let P="";if(c===1){P+="dotProd = dotProd";for(let B=0;B<g;B++)P+=`
            + ${ee.getByOffset(`x_offset + ${B}`)} * ${j.getByOffset(`w_offset + ${B}`)}`;P+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);P+=`
          let xValue = ${ee.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return P},O=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",W)};
            let r = ${L.indicesGet("outputIndices",G)};
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
              let dyR = (${U}(dyRCorner) + ${U}(wR)) / ${U}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${U}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${U}(uniforms.Dy_shape[${N}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:c}) {
                  ${ne()}
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
    ${z.registerUniforms(K).declareVariables(...ce,L)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${O}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${m}${d}${g}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),kd,Ad,Rd,Na,Od,Nd,za,zd,Bd,iw=te(()=>{rw(),En(),rn(),kd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Ad=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Rd=(e,t,n,r,i,a,s,o,u,l)=>{let c=e.length-2,d=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let h=e[0],g=t[o?3:1]*i;for(let m=0,y=e.length-c-(o?1:0);m<c;++m,++y){let w=e[y],b=d?w*s[m]:l[m],x=kd(w,s[m],a[m],t[y],n[m],b);Ad(x,r,a,m,m+c),d&&l.push(s[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-a[m]-a[m+c])}l.splice(0,0,h),l.splice(o?3:1,0,g)},Na=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,h)=>d*h,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((d,h)=>d+h,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,h)=>d+h,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}Rd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),c},Od=e=>{let t=$a(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:c,outputShape:d,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Nd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},za=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ft(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Cd(a,n,r),{inputs:a})},zd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Na({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);za(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Bd=(e,t)=>{if(Nd(e.inputs,t),e.inputs[0].dims.length===3)zd(e,t);else{let n=Na(t,e.inputs);za(e,e.inputs,n)}}}),Pd,Dd,Ud,aw=te(()=>{me(),_e(),Ve(),be(),Pd=(e,t,n,r)=>{let i=F.size(t),a=t.length,s=H("input",e,a),o=ue("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=F.normalizeAxis(u,a),c=d=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=le("uniforms.input_shape","uniforms.axis",a),m=r.reverse?h+(r.exclusive?" + 1":""):"0",y=r.reverse?g:h+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...de(t,t)]}),getShaderSource:c}},Dd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Pd(r,n,i,t),{inputs:[0]})},Ud=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Ld,Fd,Gd,Wd,qd,sw=te(()=>{me(),_e(),Ve(),be(),Ld=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Fd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Gd=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=c?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(s),h=d.dims.length,g=e.dataType,m=H("a",g,h),y=ue("output",g,h),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Fd(o,h,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=F.size(x),S=d.dims,E=F.sortBasedOnPerm(S,o);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...de(S,E)]}},getShaderSource:w}},Wd=(e,t)=>{Ld(e.inputs),e.compute(Gd(e.inputs[0],t))},qd=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wr,ar,Ba,Vd,Hd,jd,Kd,Pa,Yd,Xd,Qd,ow=te(()=>{me(),_e(),Ve(),be(),Wr="[a-zA-Z]|\\.\\.\\.",ar="("+Wr+")+",Ba="^"+ar+"$",Vd="("+ar+",)*"+ar,Hd="^"+Vd+"$",jd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Kd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Hd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Ba)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(ar)))throw new Error("Invalid RHS");(i=r.match(RegExp(Wr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(Ba))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Wr,"g")),l=new jd(r);return u==null||u.forEach((c,d)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let m=String.fromCharCode(48+g);l.addSymbol(m,d+g),this.addSymbol(m,n[o++],r)}}else l.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[o++],r)}),l}},Pa=e=>e+"_max",Yd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>H(`input${c}`,t,l)),a=F.size(r),s=ue("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],d="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,E)=>{var M;if(n.rhs.symbolToIndices.has(E)){let C=(M=n.rhs.symbolToIndices.get(E))==null?void 0:M[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let z=v.symbolToIndices.get(E);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(K=>{c.push(`${i[R].indicesSet(`input${R}Indices`,K,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(z=>{m.push(`${i[v].indicesSet(`input${v}Indices`,z,`${E}`)}`)}),b.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Pa(E)}; ${E}++) {`),w.push("}")});let T=x?[...c,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,h,...y,...m,d,...b,g,...w];return`
            ${l.registerUniforms(o.map(S=>({name:`${Pa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(d=>n.symbolToInfo.has(d)).map(d=>{var h;return{type:12,data:((h=n.symbolToInfo.get(d))==null?void 0:h.dimValue)||0}});l.push({type:12,data:a});let c=e.map((d,h)=>[...de(d)]).reduce((d,h)=>d.concat(h),l);return c.push(...de(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:u}},Xd=(e,t)=>{let n=new Kd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Yd(i,e.inputs[0].dataType,n,r))},Qd=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Zd,Da,Jd,ep,tp,uw=te(()=>{me(),_e(),be(),Zd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Da=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Jd=(e,t)=>e.length>t.length?Da(e,t):Da(t,e),ep=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Jd(t,n),i=e[0].dataType,a=i===9||F.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(F.size(r)/o),l=d=>{let h=H("input",i,t.length,s),g=ue("output",i,r.length,o),m;if(i===9){let y=(w,b,x="")=>`
          let outputIndices${b} = ${g.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${h.broadcastedIndicesToOffset(`outputIndices${b}`,g)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${w}[${b}] = ${x}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},c=[{type:12,data:u},...de(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},tp=e=>{Zd(e.inputs),e.compute(ep(e.inputs),{inputs:[0]})}}),np,rp,lw=te(()=>{me(),_e(),be(),ba(),np=e=>{let t=e[0].dataType,n=F.size(e[0].dims),r=F.size(e[1].dims),i=r%4===0,a=s=>{let o=H("x",t,[1],4),u=H("bias",t,[1],4),l=ue("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${u.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(o,u,l)}

    ${wa(it(t))}

    ${s.mainStart(Dn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",_a("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Dn/4)}})}},rp=e=>{e.inputs.length<2||F.size(e.inputs[1].dims)===0?Pc(e):e.compute(np(e.inputs))}}),ip,ap,sp,op,cw=te(()=>{me(),_e(),Ve(),be(),ip=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ap=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=F.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(F.size(s)/u),c=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...de(e[0].dims,e[1].dims,s)],d=h=>{let g=H("data",e[0].dataType,e[0].dims.length,u),m=H("inputIndices",e[1].dataType,e[1].dims.length),y=ue("output",e[0].dataType,s.length,u),w=x=>{let T=r.length,S=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let E=0;E<T;E++)S+=`${T>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${g.type.indices};
        `;for(let E=0,M=0;E<i;E++)E===a?(S+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,M+=T):(S+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return S},b;if(e[0].dataType===9){let x=(T,S,E="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${g.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${E}(${g.getByOffset(`index${S}`)}[component${S}]);
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
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,m,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:d}},sp=e=>Re({axis:e.axis}),op=(e,t)=>{let n=e.inputs;ip(n),e.compute(ap(e.inputs,t))}}),up,lp,cp,dw=te(()=>{me(),_e(),be(),up=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],c=[a];l.push(...de(t.dims,c));let d=h=>{let g=H("indices_data",t.dataType,t.dims.length),m=ue("input_slice_offsets_data",12,1,1),y=[g,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},lp=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=F.sizeToDimension(a,a.length-1),u=F.sizeFromDimension(r,t.batchDims+s),l=F.sizeToDimension(r,t.batchDims),c=F.sizeFromDimension(r,t.batchDims),d=o/l,h=new Array(s),g=u;for(let S=0;S<s;++S)h[s-1-S]=g,g*=r[t.batchDims+s-1-S];let m=up(e,n[1],h,t.batchDims,r,o,d,c,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=F.size(w),x=[{type:12,data:b},{type:12,data:u},...de(n[0].dims,m.dims,w)],T=S=>{let E=H("data",n[0].dataType,n[0].dims.length),M=H("slice_offsets",12,m.dims.length),C=ue("output",n[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,M,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],m]})},cp=e=>({batchDims:e.batch_dims,cacheKey:""})}),dp,pp,hp,fp,pw=te(()=>{me(),_e(),Ve(),be(),dp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=F.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=F.normalizeAxis(t.gatherAxis,i),s=F.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=F.size(o),l=e[2].dataType,c=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...de(...e.map((g,m)=>g.dims),o)],h=g=>{let m=H("data",e[0].dataType,e[0].dims.length),y=H("inputIndices",e[1].dataType,e[1].dims.length),w=H("scales",e[2].dataType,e[2].dims.length),b=e.length>3?H("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=ue("output",l,o.length),T=[m,y,w];b&&T.push(b);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(S).declareVariables(...T,x)}
        ${g.mainStart()}
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
          index_from_indices += ${n[a]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
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
        let dequantized_data = ${it(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,m)=>m!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h}},hp=(e,t)=>{let n=e.inputs;dp(n,t),e.compute(pp(e.inputs,t))},fp=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),mp,gp,yp,wp,hw=te(()=>{me(),_e(),Ve(),be(),mp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gp=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=F.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),c=F.size(l),d=H("input",r,i),h=H("indicesInput",s,a.length),g=ue("output",r,l.length),m=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return m.push(...de(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,h,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},yp=e=>Re({axis:e.axis}),wp=(e,t)=>{let n=e.inputs;mp(n),e.compute(gp(e.inputs,t))}}),_p,bp,$p,xp,fw=te(()=>{me(),_e(),be(),_p=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bp=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=Au.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),c=Math.ceil(i/u),d=!0,h=F.size(o),g=[{type:12,data:d?l:h},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(g.push(...de(e[2].dims)),m.push("rank")),g.push(...de(o));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=H("a",e[0].dataType,e[0].dims),E=H("b",e[1].dataType,e[1].dims),M=S.type.value,C=null,v=[S,E];e.length===3&&(C=H("c",e[2].dataType,e[2].dims.length),v.push(C));let R=ue("output",e[0].dataType,o.length);v.push(R);let z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(z).declareVariables(...v)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${M}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=H("a",e[0].dataType,e[0].dims),T=H("b",e[1].dataType,e[1].dims),S=null,E=[x,T];e.length===3&&(S=H("c",e[2].dataType,e[2].dims.length),E.push(S));let M=ue("output",e[0].dataType,o.length);E.push(M);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let z=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
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
        ${v}
      }
      workgroupBarrier();
    }

    ${z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:g}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},$p=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},xp=(e,t)=>{_p(e.inputs),e.compute(bp(e.inputs,t))}}),Bt,Yt,Tn,In,vp,Sp,Ep,Tp,Ip,Mp,Cp,kp,Ap,Rp,mw=te(()=>{me(),_e(),Ve(),be(),[Bt,Yt,Tn,In]=[0,1,2,3],vp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Sp=`
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
`,Ep=e=>`
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
`,Tp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ip=e=>`
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
`,Mp=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Bt}] = batch;
     indices[${Yt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Tn}] = u32(r);
            indices[${In}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Tn}] = u32(clamp(r, 0, H - 1));
          indices[${In}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Tn}] = gs_reflect(r, border[1], border[3]);
          indices[${In}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Cp=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Bt}], indices[${Yt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Bt}], indices[${Yt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Bt}], indices[${Yt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Bt}], indices[${Yt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Bt}], indices[${Yt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Bt}], indices[${Yt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,kp=(e,t)=>{let n=H("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=H("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Bt,Yt,Tn,In]=[0,3,1,2]);let s=ue("output",e[0].dataType,a.length),o=n.type.value,u=F.size(a),l=[{type:12,data:u},...de(e[0].dims,r,a)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${Sp}
  ${Ep(o)}
  ${Tp(t)}
  ${Ip(t)}
  ${Mp(n,o,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Tn}]);
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

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Bt}], indices[${Tn}], indices[${In}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Cp(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let h=F.size(a);return{outputs:[{dims:a,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:c}},Ap=(e,t)=>{vp(e.inputs),e.compute(kp(e.inputs,t))},Rp=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Op,Np,Ua,zp,sr,Bp,Pp=te(()=>{me(),_e(),Ve(),aa(),ga(),be(),rn(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Op=(e,t)=>{let n=e[0],r=ot(e,1),i=ot(e,2),a=ot(e,3),s=ot(e,4),o=ot(e,5),u=ot(e,6),l=ot(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],d=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],g=d,m=0,y=0,w=Math.floor(h/t.numHeads);if(u&&l&&F.size(u.dims)&&F.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&F.size(u.dims)||l&&F.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&F.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,g=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&F.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+g,T=0;if(s&&F.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===c?T=1:C[0]===3*c+2&&(T=3):C.length===2&&C[0]===c&&C[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=h;if(i&&F.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let M=!1;if(s&&F.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&F.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:g,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:M,passPastInKv:S,qkvFormat:b}},Np=e=>Re({...e}),Ua=Re({perm:[0,2,1,3]}),zp=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=F.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],c=d=>{let h=ue("qkv_with_bias",t.dataType,o),g=H("qkv",t.dataType,o),m=H("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(g,m,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},sr=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&F.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=zp(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(ft(u,Ua.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(ft(u,Ua.perm),{inputs:[u],outputs:[-1]})[0]},Bp=(e,t)=>{let n=Op(e.inputs,t),r=e.inputs[0],i=ot(e.inputs,1),a=ot(e.inputs,2),s=ot(e.inputs,3),o=ot(e.inputs,4),u=ot(e.inputs,5),l=ot(e.inputs,6),c=ot(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&a&&i.dims.length===4&&a.dims.length===4,h=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(d)return tr(e,h,i,a,o,void 0,l,c,u,n);if(!i||!a)throw new Error("key and value must be provided");let g=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),m=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);tr(e,h,g,m,o,void 0,l,c,u,n)}}),Dp,Up,Lp,Fp,La,Gp,Wp,qp=te(()=>{me(),_e(),Ve(),be(),Dp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Up=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Lp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Fp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},La=(e,t)=>{let n=e[0].dims,r=F.size(n),i=e[0].dataType,a=F.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=H("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],d=0,h=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){d+=t.splitSizes[m],u[m]=d;let y=n.slice();y[a]=t.splitSizes[m],c.push(y),s[m]=ue(`output${m}`,i,y.length),l.push({dims:c[m],dataType:e[0].dataType})}h.push({type:12,data:u},...de(n,...c));let g=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Lp(u.length)}
  ${Fp(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Gp=(e,t)=>{Dp(e.inputs);let n=e.inputs.length===1?t:Up(e.inputs,t);e.compute(La(e.inputs,n),{inputs:[0]})},Wp=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Vp,qr,Hp,jp=te(()=>{me(),_e(),Ve(),be(),Vp=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!F.areEqual(r.dims,[])&&!F.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!F.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],d=F.sizeFromDimension(n.dims,1)/l,h=o===0?i.dims[1]*2:d/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},qr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=F.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,c=e[2].dims[1],d=i===0?c*2:l/r,h=new Array(s,u,l/d,d-c),g=F.computeStrides(h),m=[{type:1,data:a},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[o,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,d,u*d,1]}):[],...de(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=H("input",e[0].dataType,e[0].dims.length),x=H("position_ids",e[1].dataType,e[1].dims.length),T=H("cos_cache",e[2].dataType,e[2].dims.length),S=H("sin_cache",e[3].dataType,e[3].dims.length),E=ue("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${w.declareVariables(b,x,T,S,E)}

        ${w.mainStart(Dn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",ue("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${b.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(h)/Dn)},programUniforms:m})}},Hp=(e,t)=>{Vp(e.inputs,t),e.compute(qr(e.inputs,t))}}),Kp,Yp,Fa,Xp,Qp,gw=te(()=>{Ve(),me(),ga(),Pp(),qp(),rn(),jp(),be(),Kp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,h=0,g=!r||r.dims.length===0,m=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=m*t.numHeads);let y=a&&a.dims.length!==0,w=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,T=!1,S=t.kvNumHeads?m*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=E.dims.reduce((C,v)=>C*v,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let C=0;C<E.dims.length;C++)if(E.dims[C]!==1&&E.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${E.dims[C]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:m,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:b}},Yp=Re({perm:[0,2,1,3]}),Fa=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ft(r,Yp.perm),{inputs:[r],outputs:[-1]})[0]),r},Xp=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=c=>{let d=H("seq_lens",n.dataType,n.dims),h=H("total_seq_lens",r.dataType,r.dims),g=ue("pos_ids",i,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(m).declareVariables(d,h,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
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
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Qp=(e,t)=>{var S;let n=Kp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[h,g,m]=!i&&!a?e.compute(La([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let E=e.compute(Xp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],C=e.inputs[8],v=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[h,E,M,C],z=[-1];y=e.compute(qr(R,v),{inputs:R,outputs:z})[0],R.splice(0,1,g);let K=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(qr(R,K),{inputs:R,outputs:z})[0]}let b=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:h,void 0,0),x=Fa(e,t.doRotary?w:g,n),T=Fa(e,m,n);tr(e,b,x,T,void 0,void 0,s,o,void 0,n,u,l)}}),Ga,Zp,Jp,eh,yw=te(()=>{me(),_e(),rn(),be(),Ga=(e,t,n,r,i,a,s,o)=>{let u=qe(a),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,d=i*s,h=64;d===1&&(h=256);let g=[i,s,a/u],m=[i,s,2],y=["rank","type","type"],w=[];w.push(...de(g,m));let b=x=>{let T=H("x",t.dataType,3,u),S=H("scale",n.dataType,n.dims),E=H("bias",r.dataType,r.dims),M=ue("output",1,3,2),C=[T,S,E,M];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${x.declareVariables(...C)}
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
      let sum_final = ${nn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${nn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Zp=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=F.sizeFromDimension(r,a),l=qe(u),c=F.size(i)/l,d=Ga(e,t[0],t[1],t[2],s,u,o,n.epsilon),h=[s,o,u/l],g=[s,o],m=["type","none"],y=w=>{let b=H("x",t[0].dataType,h.length,l),x=H("scale_shift",1,g.length,2),T=ue("output",t[0].dataType,h.length,l),S=[b,x,T];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...de(h,g,h)]}),getShaderSource:y},{inputs:[t[0],d]})},Jp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=F.sizeFromDimension(r,1)/s,u=qe(s),l=F.size(i)/u,c=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],d=["type","type"],h=!1,g=[0,r.length-1];for(let b=0;b<r.length-2;b++)h=h||r[b+1]!==1,g.push(b+1);h=h&&r[r.length-1]!==1;let m=h?e.compute(ft(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[g[x]])),y=Ga(e,m,t[1],t[2],a,o,s,n.epsilon),w=b=>{let x=Ye(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${v}))`;case 2:return`vec2<${x}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=H("input",t[0].dataType,t[0].dims,u),M=ue("output",t[0].dataType,i,u);return`
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
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},eh=(e,t)=>{t.format==="NHWC"?Jp(e,e.inputs,t):Zp(e,e.inputs,t)}}),th,nh,rh,ww=te(()=>{me(),_e(),be(),th=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},nh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=F.normalizeAxis(t.axis,i.length),l=F.sizeToDimension(i,u),c=F.sizeFromDimension(i,u),d=F.size(a.dims),h=s?F.size(s.dims):0;if(d!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${h}`);let g=[];for(let E=0;E<i.length;++E)E<u?g.push(i[E]):g.push(1);let m=qe(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/m)},{type:1,data:t.epsilon}];s&&y.push("type");let b=n>1,x=n>2,T=E=>{let M=Ye(e[0].dataType),C=[H("x",e[0].dataType,e[0].dims,m),H("scale",a.dataType,a.dims,m)];s&&C.push(H("bias",s.dataType,s.dims,m)),C.push(ue("output",e[0].dataType,o,m)),b&&C.push(ue("mean_data_output",1,g)),x&&C.push(ue("inv_std_output",1,g));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${la("f32",m)};
    var mean_square_vector = ${la("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Un(M,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Un(M,m,"x[j + offset]")};
      let f32scale = ${Un(M,m,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Un(M,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return b&&S.push({dims:g,dataType:1}),x&&S.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:T}},rh=(e,t)=>{th(e.inputs),e.compute(nh(e.inputs,t,e.outputCount))}}),ih,ah,_w=te(()=>{_e(),Sa(),Ma(),ih=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},ah=e=>{ih(e.inputs);let t=Pn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(va(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=F.size(e.inputs[0].dims.slice(0,-2)),s=F.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],c=[o,u];e.compute(Lr(c,{activation:""},t,l),{inputs:c})}else e.compute(Lr(e.inputs,{activation:""},t))}}}),sh,oh,uh,lh,ch,bw=te(()=>{me(),_e(),Ve(),be(),sh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!F.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(F.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(F.size(u)!==l)throw new Error("zeroPoints input size error.")}},oh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=F.size(o),l=e[1].dims[2]/4,c=e[0].dataType,d=qe(t.k),h=qe(l),g=qe(s),m=o.concat([i,s]),y=i>1&&s/g%2===0?2:1,w=F.size(m)/g/y,b=64,x=[],T=[u,i,a/d],S=F.convertShape(e[1].dims).slice();S.splice(-1,1,l/h),x.push(...de(T)),x.push(...de(S)),x.push(...de(e[2].dims)),e.length===4&&x.push(...de(F.convertShape(e[3].dims)));let E=[u,i,s/g];x.push(...de(E));let M=C=>{let v=T.length,R=H("a",e[0].dataType,v,d),z=H("b",12,S.length,h),K=H("scales",e[2].dataType,e[2].dims.length),U=[R,z,K],G=e.length===4?H("zero_points",12,e[3].dims.length):void 0;G&&U.push(G);let N=E.length,W=ue("output",e[0].dataType,N,g),j=Ye(e[0].dataType),ee=(()=>{switch(d){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${d}-component is not supported.`)}})(),ce=Math.floor(32/t.bits),L=Math.floor(ce/8),ne=()=>{let P="";for(let B=0;B<L;B++){let V=B*t.bits*4,Z=V+t.bits;P+=`
          // reuse a data (pass ${B})
            var input_offset${B>0?B:""} = ${B===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${B>0?B:""}: ${ee};
            for (var j${B>0?B:""}: u32 = 0; j${B>0?B:""} < ${8/d}; j${B>0?B:""}++) {
              a_data${B>0?B:""}[j${B>0?B:""}] = ${R.getByOffset(`input_offset${B>0?B:""}`)};
              input_offset${B>0?B:""}++;
            }
          `;for(let J=0;J<g*y;J++)P+=`
            b_value = ${h===1?`b${J}_data`:`b${J}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${B*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${V}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Z}u) & b_mask);`}
            b_quantized_values = ${ee}(${Array.from({length:4},(ie,pe)=>`${j}(b_value_lower[${pe}]), ${j}(b_value_upper[${pe}])`).join(", ")});
            b_dequantized_values = ${d===1?`${ee}(${Array.from({length:8},(ie,pe)=>`(b_quantized_values[${pe}] - ${G?`zero_point${J}`:"zero_point"}) * scale${J}`).join(", ")});`:`(b_quantized_values - ${ee}(${Array(8).fill(`${G?`zero_point${J}`:"zero_point"}`).join(",")})) * scale${J};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(J/g)}]${g>1?`[${J%g}]`:""} += ${Array.from({length:8/d},(ie,pe)=>`${d===1?`a_data${B>0?B:""}[${pe}] * b_dequantized_values[${pe}]`:`dot(a_data${B>0?B:""}[${pe}], b_dequantized_values[${pe}])`}`).join(" + ")};
          `}return P},A=()=>{let P=`
            var col_index = col * ${g};
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
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let B=0;B<g*y;B++)P+=`
            let scale${B} = ${K.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return P},O=()=>{let P=`col_index = col * ${g};`;for(let B=0;B<g*y;B++)P+=`
            let b${B}_data = ${z.getByIndices(`${z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return P+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ee};
            var b_dequantized_values: ${ee};`,P};return`
        var<workgroup> workgroup_shared: array<${W.type.value}, ${y*b}>;
        ${C.declareVariables(...U,W)}
        ${C.mainStart([b,1,1])}
          let output_indices = ${W.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${A()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${O()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${ne()}
                word_offset += ${ce/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${W.setByIndices(`${W.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${h};${g};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:M}},uh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=F.size(o),l=e[1].dims[2]/4,c=e[0].dataType,d=qe(t.k),h=qe(l),g=o.concat([i,s]),m=128,y=s%8===0?8:s%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*h*b,T=x/d,S=x/t.blockSize,E=F.size(g)/y,M=[],C=[u,i,a/d],v=F.convertShape(e[1].dims).slice();v.splice(-1,1,l/h),M.push(...de(C)),M.push(...de(v)),M.push(...de(e[2].dims)),e.length===4&&M.push(...de(F.convertShape(e[3].dims)));let R=[u,i,s];M.push(...de(R));let z=K=>{let U=C.length,G=H("a",e[0].dataType,U,d),N=H("b",12,v.length,h),W=H("scales",e[2].dataType,e[2].dims.length),j=[G,N,W],ee=e.length===4?H("zero_points",12,e[3].dims.length):void 0;ee&&j.push(ee);let ce=R.length,L=ue("output",e[0].dataType,ce),ne=Ye(e[0].dataType),A=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${K.declareVariables(...j,L)}
        ${K.mainStart([w,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${m})
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
            ${ee?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ne}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ne}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${W.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${N.getByIndices(`${N.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let O=Math.floor(b/8),P="";for(let B=0;B<O;B++){let V=B*t.bits*4,Z=V+t.bits;P+=`
              ${A()}
              {${t.bits===2?`
                let half_word = b_value >> ${B*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${V}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Z}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ne}>(${Array.from({length:4},(J,ie)=>`${ne}(b_value_lower[${ie}]), ${ne}(b_value_upper[${ie}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(J,ie)=>`${`dot(a_data${ie}, b_dequantized_values[${ie}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return P})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${h};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:E},programUniforms:M}),getShaderSource:z}},lh=(e,t)=>{sh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(uh(e.inputs,t)):e.compute(oh(e.inputs,t))},ch=e=>Re(e)}),dh,ph,hh,fh,mh,gh,yh,wh,_h,$w=te(()=>{me(),_e(),be(),dh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ph=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},hh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},fh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},mh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},gh=(e,t,n)=>{switch(n.mode){case 0:return ph(e,t,n.pads.length);case 1:return hh(e,t,n.pads.length);case 2:return fh(e,t,n.pads.length);case 3:return mh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},yh=(e,t)=>{let n=F.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=F.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...de(e[0].dims,n));let o=["rank"],u=l=>{let c=ue("output",e[0].dataType,n.length),d=H("x",e[0].dataType,r.length),h=d.type.value,g=gh(c,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?h:"f32"}),`
            ${l.registerUniforms(m).declareVariables(d,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(n)/64)},programUniforms:a}),getShaderSource:u}},wh=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},_h=(e,t)=>{dh(e.inputs);let n=wh(e.inputs,t);e.compute(yh(e.inputs,n),{inputs:[0]})}}),or,Wa,qa,Va,Ha,bh,$h,ja,Ka,xh,vh,Ya,Sh,Eh,Xa,Th,Ih,Mh,Ch,xw=te(()=>{gt(),me(),_e(),be(),or=e=>{if(Ne.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Wa=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Or.adjustPoolAttributes(n,i,s,o,u,l);let c=Or.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[d,r?h:c]},qa=(e,t)=>{let n=t.format==="NHWC",r=F.size(e),i=F.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],d=!!(l+c);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];h=!!(y+w),a.push({type:12,data:g},{type:12,data:m},{type:12,data:y},{type:12,data:w}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,d,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=F.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[a,s,!!u,!1,!1]}},Va=(e,t,n,r,i,a,s,o,u,l,c,d)=>{let h=i.format==="NHWC",g=t.type.value,m=ue("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(h?2:1);if(c?y=`
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
                }`,i.kernelShape.length===2){let T=n-(h?3:2);d?w=`
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
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${g}(${o});
              var pad = 0;
              ${w}
              ${y}
              ${b}
              ${s}

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
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${o});
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
              ${s}

              output[global_idx] = value;
            }`}},Ha=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,bh=e=>`${Ha(e)};${e.countIncludePad}`,$h=e=>`${Ha(e)};${e.storageOrder};${e.dilations}`,ja=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ka=(e,t,n,r)=>{let[i,a]=Wa(t,r,n),s=H("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,d,h,g,m]=qa(a,i);c.push(...de(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(a)/64)},programUniforms:c}),getShaderSource:w=>Va(w,s,t.dims.length,a.length,i,u,l,0,d,h,g,m)}},xh=e=>{let t=e.count_include_pad!==0,n=ja(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:bh(r)}},vh=(e,t)=>{or(e.inputs),e.compute(Ka("AveragePool",e.inputs[0],!1,t))},Ya={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Sh=e=>{let t=e.format;return{format:t,...Ya,cacheKey:t}},Eh=(e,t)=>{or(e.inputs),e.compute(Ka("GlobalAveragePool",e.inputs[0],!0,t))},Xa=(e,t,n,r)=>{let[i,a]=Wa(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=H("x",t.dataType,t.dims.length),l=["rank"],[c,d,h,g,m]=qa(a,i);return c.push(...de(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(a)/64)},programUniforms:c}),getShaderSource:y=>Va(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,d,h,g,m)}},Th=(e,t)=>{or(e.inputs),e.compute(Xa("MaxPool",e.inputs[0],!1,t))},Ih=e=>{let t=e.storage_order,n=e.dilations,r=ja(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:$h(i)}},Mh=e=>{let t=e.format;return{format:t,...Ya,cacheKey:t}},Ch=(e,t)=>{or(e.inputs),e.compute(Xa("GlobalMaxPool",e.inputs[0],!0,t))}}),kh,Ah,Rh,Oh,vw=te(()=>{me(),_e(),Ve(),be(),kh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Ah=(e,t)=>{let n=F.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=F.size(a),u=r===3||r===2,l=u?[Math.ceil(F.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,d=e.length>2?e[2]:void 0,h=d?u?[Math.ceil(F.size(d.dims)/4)]:d.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,m=g===!1&&c.length===1,y=qe(o),w=g&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,T=H("input",u?12:r,l.length,x),S=H("scale",s,c.length),E=d?H("zero_point",u?12:r,h.length):void 0,M=ue("output",s,a.length,b),C=[T,S];E&&C.push(E);let v=[l,c];d&&v.push(h);let R=[{type:12,data:o/b},{type:12,data:n},{type:12,data:t.blockSize},...de(...v,a)],z=K=>{let U=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${K.registerUniforms(U).declareVariables(...C,M)}
      ${K.mainStart()}
          ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${S.getByOffset("0")}`:m?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:m?u?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:z,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/b/64),y:1,z:1},programUniforms:R})}},Rh=(e,t)=>{kh(e.inputs,t),e.compute(Ah(e.inputs,t))},Oh=e=>Re({axis:e.axis,blockSize:e.blockSize})}),Nh,zh,Bh,Sw=te(()=>{gt(),me(),be(),Nh=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},zh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...de(a)],u=l=>{let c=ue("output",r,a.length),d=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(h).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Bh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ne.webgpu.validateInputContent&&Nh(t,n,r),e.compute(zh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Ph,Dh,Uh,Lh,Ew=te(()=>{me(),_e(),Ve(),be(),Ph=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Dh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(F.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=F.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...de(e[1].dims,e[2].dims,i)],c=d=>{let h=H("indices",e[1].dataType,e[1].dims.length),g=H("updates",e[2].dataType,e[2].dims.length,a),m=t.reduction!=="none"&&t.reduction!==""?Hu("output",e[0].dataType,i.length):ue("output",e[0].dataType,i.length,a);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,g,m)}
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
    ${Ph(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:c}},Uh=e=>Re({reduction:e.reduction}),Lh=(e,t)=>{e.compute(Dh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Fh,Gh,Wh,Qa,qh,Vh,Hh,jh,Kh,Yh,Xh,Qh,Za,Zh,Jh,ef,tf,nf,rf,af,Tw=te(()=>{me(),_e(),Ve(),be(),Fh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Gh=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Wh=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Fh(r,t),t.axes.length>0&&Gh(r,t.axes,l).forEach((c,d)=>r[d]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Qa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,qh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Qa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Qa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Vh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Hh=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},jh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Kh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},Yh=(e,t,n,r,i)=>`
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
    }`,Xh=(e,t,n,r,i,a,s)=>`
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
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Za=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Zh=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Za(e,u,a,2)}
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
    }`},Jh=(e,t,n,r,i,a,s,o,u,l)=>{let c=n.length===2,[d,h]=c?[0,1]:[2,3],g=e.type.value,m=y=>{let w=y===d?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${g} = originalIdx + ${g}(i);
          if (${w} < 0 || ${w} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${w} = max(0, min(${w}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
          data[i + 1] = ${y===d?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(d)};
    ${m(h)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ef=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Za(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${u}];
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
    }`},tf=(e,t,n,r,i,a)=>{let s=e.dims,o=Hh(a,t.axes,s.length),u=jh(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Kh(s,l,t)));let c=ue("output",e.dataType,u.length),d=H("input",e.dataType,s.length),h=F.size(u),g=s.length===u.length&&s.every((x,T)=>x===u[T]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,b=x=>`
      ${g?"":`
      ${qh(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Qh(d,s)};
              ${Vh(t.nearestMode,n,w)};
              ${Xh(d,c,s,u,l.length,o.length,m)};
              `;case"linear":return`
              ${Yh(c,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Zh(d,c,s,m,y)}`;if(s.length===3||s.length===5)return`${ef(d,c,s,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Jh(d,c,s,u,l,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(d,c)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:o},...de(s,u)]})}},nf=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},rf=(e,t)=>{let n=[],r=[],i=[],a=nf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Wh(e.inputs,t,a,n,r,i),e.compute(tf(e.inputs[0],t,a,n,r,i),{inputs:[0]})},af=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),sf,of,uf,Iw=te(()=>{me(),_e(),be(),sf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},of=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=F.size(a),o=a,u=s,l=a.slice(-1)[0],c=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,h=e.length>4,g=r&&n>1,m=r&&n>2,y=n>3,w=64,b=qe(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],T=E=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[H("x",e[0].dataType,e[0].dims,b),H("skip",e[1].dataType,e[1].dims,b),H("gamma",e[2].dataType,e[2].dims,b)];d&&C.push(H("beta",e[3].dataType,e[3].dims,b)),h&&C.push(H("bias",e[4].dataType,e[4].dims,b)),C.push(ue("output",e[0].dataType,o,b)),g&&C.push(ue("mean_output",1,c)),m&&C.push(ue("inv_std_output",1,c)),y&&C.push(ue("input_skip_bias_sum",e[0].dataType,o,b));let v=Ye(e[0].dataType),R=Ye(1,b);return`

      ${E.registerUniforms(M).declareVariables(...C)}
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
          let bias_value = ${h?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Un(v,b,"value")};
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
        let mean = ${nn("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nn("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:c,dataType:1}),n>2&&S.push({dims:c,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${g};${m};${y}`,inputDependencies:e.map((E,M)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},uf=(e,t)=>{sf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(of(e.inputs,t,e.outputCount,!1),{outputs:n})}}),lf,ur,cf,Ja,df,pf,hf,ff,Mw=te(()=>{me(),_e(),Ve(),be(),lf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ur=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},cf=(e,t)=>{if(e.length>1){let n=ur(e,1),r=ur(e,2),i=ur(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},Ja=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},df=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,pf=(e,t)=>{let n=e[0].dims,r=F.size(n),i=t.axes.length>0?F.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ur(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((b,x)=>Ja(b,x,n,i,a)),o=t.ends.map((b,x)=>Ja(b,x,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(s.splice(b,0,0),o.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,x,T)=>{if(b<0){let S=(o[x]-s[x])/b,E=s[x],M=E+S*a[x];s[x]=M,o[x]=E,T[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((o[b]-s[b])/a[b])});let c={dims:l,dataType:e[0].dataType},d=ue("output",e[0].dataType,l.length),h=H("input",e[0].dataType,e[0].dims.length),g=F.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:u},{type:12,data:a},...de(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(h,d)}
        ${df(h,d,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},hf=(e,t)=>{lf(e.inputs,t);let n=cf(e.inputs,t);e.compute(pf(e.inputs,n),{inputs:[0]})},ff=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),mf,gf,yf,wf,Cw=te(()=>{me(),_e(),Ve(),rn(),be(),mf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},gf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=F.size(r),a=r.length,s=F.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(C,v)=>v),l[s]=a-1,l[a-1]=s,u=e.compute(ft(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,d=c[a-1],h=i/d,g=qe(d),m=d/g,y=64;h===1&&(y=256);let w=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,b=H("x",u.dataType,u.dims,g),x=ue("result",u.dataType,u.dims,g),T=b.type.value,S=Ye(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=C=>`
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
      ${C.registerUniform("packedCols","i32").declareVariables(b,x)}
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
          rowMaxShared = ${T}(${w("threadShared[0]",g)});
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
          rowSumShared = ${T}(${nn("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:E},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(ft(M,l),{inputs:[M]})},yf=(e,t)=>{mf(e.inputs),gf(e,t)},wf=e=>Re({axis:e.axis})}),es,_f,bf,$f,xf,kw=te(()=>{me(),_e(),be(),es=e=>Array.from(e.getBigInt64Array(),Number),_f=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(es(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},bf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},$f=(e,t)=>{let n=e[0].dims,r=t??es(e[1]),i=bf(n,r),a=F.size(i),s=e[0].dataType,o=H("input",s,n.length),u=ue("output",s,i.length),l=c=>`
      const inputShape = ${o.indices(...n)};
      ${c.registerUniform("output_size","u32").declareVariables(o,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...de(e[0].dims,i)]}),getShaderSource:l}},xf=e=>{_f(e.inputs),e.compute($f(e.inputs),{inputs:[0]})}}),vf,Sf,Ef,Aw=te(()=>{me(),_e(),be(),vf=(e,t,n,r,i)=>{let a=ue("output_data",i,n.length,4),s=H("a_data",t[1].dataType,t[1].dims.length,4),o=H("b_data",t[2].dataType,t[2].dims.length,4),u=H("c_data",t[0].dataType,t[0].dims.length,4),l,c=(d,h,g)=>`select(${h}, ${d}, ${g})`;if(!r)l=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(h,g,m="")=>{let y=`a_data[index_a${g}][component_a${g}]`,w=`b_data[index_b${g}][component_b${g}]`,b=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${a.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_b${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_c${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${h}[${g}] = ${m}(${c(y,w,b)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Sf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(F.areEqual(t,n)&&F.areEqual(n,r)),s=t,o=F.size(t);if(a){let l=Pn.calcShape(Pn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=F.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>vf(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...de(r,t,n,s)]})}},Ef=e=>{e.compute(Sf(e.inputs))}}),Tf,Rw=te(()=>{Hy(),ga(),jy(),Ky(),Yy(),Xy(),Qy(),nw(),iw(),aw(),sw(),ow(),uw(),lw(),cw(),dw(),pw(),hw(),fw(),mw(),gw(),yw(),ww(),_w(),bw(),Pp(),$w(),xw(),vw(),Sw(),Ew(),ha(),Tw(),jp(),Iw(),Mw(),Cw(),qp(),kw(),rn(),ba(),Aw(),Tf=new Map([["Abs",[ac]],["Acos",[sc]],["Acosh",[oc]],["Add",[Kc]],["ArgMax",[ql,ma]],["ArgMin",[Wl,ma]],["Asin",[uc]],["Asinh",[lc]],["Atan",[cc]],["Atanh",[dc]],["Attention",[Xl]],["AveragePool",[vh,xh]],["BatchNormalization",[ec]],["BiasAdd",[rc]],["BiasSplitGelu",[Vc]],["Cast",[hc,pc]],["Ceil",[gc]],["Clip",[mc]],["Concat",[ud,ld]],["Conv",[Oa,Aa]],["ConvTranspose",[Bd,Od]],["Cos",[yc]],["Cosh",[wc]],["CumSum",[Dd,Ud]],["DepthToSpace",[Wd,qd]],["DequantizeLinear",[Rh,Oh]],["Div",[Yc]],["Einsum",[Xd,Qd]],["Elu",[_c,nr]],["Equal",[Xc]],["Erf",[bc]],["Exp",[$c]],["Expand",[tp]],["FastGelu",[rp]],["Floor",[xc]],["FusedConv",[Oa,Aa]],["Gather",[op,sp]],["GatherElements",[wp,yp]],["GatherBlockQuantized",[hp,fp]],["GatherND",[lp,cp]],["Gelu",[vc]],["Gemm",[xp,$p]],["GlobalAveragePool",[Eh,Sh]],["GlobalMaxPool",[Ch,Mh]],["Greater",[ed]],["GreaterOrEqual",[nd]],["GridSample",[Ap,Rp]],["GroupQueryAttention",[Qp]],["HardSigmoid",[Ac,kc]],["InstanceNormalization",[eh]],["LayerNormalization",[rh]],["LeakyRelu",[Sc,nr]],["Less",[td]],["LessOrEqual",[rd]],["Log",[Uc]],["MatMul",[ah]],["MatMulNBits",[lh,ch]],["MaxPool",[Th,Ih]],["Mul",[Qc]],["MultiHeadAttention",[Bp,Np]],["Neg",[Tc]],["Not",[Ec]],["Pad",[_h]],["Pow",[Zc]],["QuickGelu",[Gc,nr]],["Range",[Bh]],["Reciprocal",[Ic]],["ReduceMin",[Dl]],["ReduceMean",[Ol]],["ReduceMax",[Pl]],["ReduceSum",[Ll]],["ReduceProd",[Ul]],["ReduceL1",[Nl]],["ReduceL2",[zl]],["ReduceLogSum",[Gl]],["ReduceLogSumExp",[Bl]],["ReduceSumSquare",[Fl]],["Relu",[Mc]],["Resize",[rf,af]],["RotaryEmbedding",[Hp]],["ScatterND",[Lh,Uh]],["Sigmoid",[Cc]],["Sin",[Rc]],["Sinh",[Oc]],["Slice",[hf,ff]],["SkipLayerNormalization",[uf]],["Split",[Gp,Wp]],["Sqrt",[Nc]],["Softmax",[yf,wf]],["Sub",[Jc]],["Tan",[zc]],["Tanh",[Bc]],["ThresholdedRelu",[Dc,nr]],["Tile",[xf]],["Transpose",[el,tl]],["Where",[Ef]]])}),If,Ow=te(()=>{gt(),Kt(),be(),If=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){zt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),bt(e.programInfo.name)}dispose(){}build(e,t){zt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Ku(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});Me("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return bt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Mf={};zn(Mf,{WebGpuBackend:()=>Rf});var Cf,kf,Af,Rf,Nw=te(()=>{gt(),me(),Kt(),Nu(),qy(),Rw(),Ow(),Cf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},kf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Cf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Af=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Rf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Af(s),this.gpuDataManager=qu(this),this.programManager=new If(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Xi(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;zt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,c=a.programName,d=a.inputTensorViews,h=a.outputTensorViews,g=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(b=>({dims:b.dims,dataType:jt(b.dataType)})),outputsMetadata:h.map(b=>({dims:b.dims,dataType:jt(b.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let b="";d.forEach((T,S)=>{b+=`input[${S}]: [${T.dims}] | ${jt(T.dataType)}, `});let x="";h.forEach((T,S)=>{x+=`output[${S}]: [${T.dims}] | ${jt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${c}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Tr("GPU",`${c}::${g}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),bt()}run(e,t,n,r,i,a){zt(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?o.map((x,T)=>T):n;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let d=[],h=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=a)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let T=c[x]===-1,S=c[x]===-2,E=T||S?i(o[x].dataType,o[x].dims):r(c[x],o[x].dataType,o[x].dims);if(d.push(E),E.data===0)continue;let M=this.gpuDataManager.get(E.data);if(!M)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(M),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(M)}h.push(M)}if(s.length!==t.length||h.length!==d.length){if(h.length===0)return bt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(l){let x=0,T=[];l.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,z,K;C.type===10?(K=v.length>4?16:v.length>2?8:v.length*R,z=v.length>4?16:R*v.length):(K=v.length<=2?v.length*R:16,z=16),x=Math.ceil(x/K)*K,T.push(x);let U=C.type===10?8:4;x+=v.length>4?Math.ceil(v.length/U)*z:v.length*R});let S=16;x=Math.ceil(x/S)*S;let E=new ArrayBuffer(x);l.forEach((C,v)=>{let R=T[v],z=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,R,z.length).set(z);else if(C.type===12)new Uint32Array(E,R,z.length).set(z);else if(C.type===10)new Uint16Array(E,R,z.length).set(z);else if(C.type===1)new Float32Array(E,R,z.length).set(z);else throw new Error(`Unsupported uniform type: ${jt(C.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,E,0,x),this.gpuDataManager.release(M.id),g={offset:0,size:x,buffer:M.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=kf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Me("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],S=T.type,E=typeof T.data=="number"?1:T.data.length,[M,C]=b.uniformVariablesInfo[x];if(S!==M||E!==C)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${C}, got type ${S} with size ${E} in program "${b.programInfo.name}".`)}}if(Me("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,s,h,m,g),bt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Tf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Me("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ua(this,e,t);return Qi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Of={};zn(Of,{init:()=>zf});var Vr,Nf,zf,zw=te(()=>{me(),Kt(),_e(),Wy(),Vr=class by{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(F.size(t)!==F.size(this.dims))throw new Error("Invalid new shape");return new by(this.module,this.dataType,this.data,t)}},Nf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),c=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,a)),h=[];for(let g=0;g<d;g++)h.push(Number(e.getValue(r*i++,a)));o.push(new Vr(e,l,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new Vr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=$n(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Vr(this.module,o,c,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},zf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Nw(),Yn(Mf)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,c=!1)=>{if(c)Me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{Me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),d)}},async(o,u,l)=>{Me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,c)=>{Me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let d=new Nf(t,s,Number(u));return s.computeKernel(Number(o),d,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Lu(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,c)=>a.ensureTensor(s,o,u,l,c),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Bf,ts,ns,an,Pf,rs,Hr,is,as,ss,os,us,ls,Df=te(()=>{gt(),Ly(),Fy(),me(),wn(),Vi(),Su(),Bf=(e,t)=>{Pe()._OrtInit(e,t)!==0&&Oe("Can't initialize onnxruntime.")},ts=async e=>{Bf(e.wasm.numThreads,Rr(e.logLevel))},ns=async(e,t)=>{var r,i;(i=(r=Pe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(zw(),Yn(Of)).init;t==="webgpu"&&await a("webgpu",Pe(),e,n),t==="webnn"&&await a("webnn",Pe(),e)}},an=new Map,Pf=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Oe("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},rs=(e,t)=>{let n=Pe(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Oe("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],c=[];for(let d=0;d<l;d++){let h=Number(n.getValue(i+8+d*a,"*"));c.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(d+l)*a,"*")))}return[o,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Hr=e=>{let t=Pe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},is=async(e,t)=>{var d,h,g,m;let n,r,i=Pe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Hr(e);let a=0,s=0,o=0,u=[],l=[],c=[];try{if([s,u]=await vu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let z=typeof R=="string"?R:R.path;v.push(Yi(typeof R=="string"?R:R.data).then(K=>{i.mountExternalData(z,K)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,z=R==null?void 0:R.context,K=R==null?void 0:R.gpuDevice,U=R==null?void 0:R.deviceType,G=R==null?void 0:R.powerPreference;z?i.currentContext=z:K?i.currentContext=await i.webnnCreateMLContext(K):i.currentContext=await i.webnnCreateMLContext({deviceType:U,powerPreference:G})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(d=i.webgpuOnCreateSession)==null||d.call(i,a),a===0&&Oe("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Pf(a),b=!!(t!=null&&t.enableGraphCapture),x=[],T=[],S=[],E=[],M=[];for(let v=0;v<y;v++){let[R,z,K]=rs(a,v);R===0&&Oe("Can't get an input name."),l.push(R);let U=i.UTF8ToString(R);x.push(U),S.push(z===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:jt(z),shape:K})}for(let v=0;v<w;v++){let[R,z,K]=rs(a,v+y);R===0&&Oe("Can't get an output name."),c.push(R);let U=i.UTF8ToString(R);T.push(U),E.push(z===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:jt(z),shape:K});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[U])??"cpu",N=i.webnnIsGraphOutput;if(G==="cpu"&&N&&N(a,U)){M.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(b&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(G)}}let C=null;return M.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Oe("Can't create IO binding."),C={handle:o,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Ki(v))}),an.set(a,[a,l,c,C,b,!1]),[a,x,T,S,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),o!==0&&i._OrtReleaseBinding(o)!==0&&Oe("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Oe("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Oe("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},as=e=>{var u,l,c;let t=Pe(),n=an.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Oe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Oe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(d=>t._OrtFree(d)),a.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&Oe("Can't release session."),an.delete(e)},ss=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Pe(),u=o.PTR_SIZE,l=e[0],c=e[1],d=e[3],h=d,g,m;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let b=e[2].gpuBuffer;m=$n(bn(l),c);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=x(r,a,b,m)}}else if(d==="ml-tensor"){let b=e[2].mlTensor;m=$n(bn(l),c);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=x(r,b,bn(l),c)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,g=o._malloc(m),n.push(g);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(g+x*u,$t(b[x],n),"*")}}else{let x=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&x&&T){let S=o.UTF8ToString(i);if(x(r,S)||T(r,S)){let E=bn(l);m=$n(E,c),h="ml-tensor";let M=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!M||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await M(r,E,c);C(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),g=v}else m=b.byteLength,g=o._malloc(m),n.push(g),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),g)}else m=b.byteLength,g=o._malloc(m),n.push(g),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),g)}}let y=o.stackSave(),w=o.stackAlloc(4*c.length);try{c.forEach((x,T)=>o.setValue(w+T*u,x,u===4?"i32":"i64"));let b=o._OrtCreateTensor(bn(l),g,m,w,c.length,Ki(h));b===0&&Oe(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{o.stackRestore(y)}},os=async(e,t,n,r,i,a)=>{var U,G,N,W;let s=Pe(),o=s.PTR_SIZE,u=an.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],d=u[2],h=u[3],g=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],T=[],S=[],E=[],M=[],C=s.stackSave(),v=s.stackAlloc(y*o),R=s.stackAlloc(y*o),z=s.stackAlloc(w*o),K=s.stackAlloc(w*o);try{[b,x]=wu(a),gn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await ss(n[L],T,E,e,c[t[L]],t[L],g);for(let L=0;L<w;L++)await ss(i[L],S,E,e,d[r[L]],y+r[L],g);yn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)s.setValue(v+L*o,T[L],"*"),s.setValue(R+L*o,c[t[L]],"*");for(let L=0;L<w;L++)s.setValue(z+L*o,S[L],"*"),s.setValue(K+L*o,d[r[L]],"*");if(h&&!m){let{handle:L,outputPreferredLocations:ne,outputPreferredLocationsEncoded:A}=h;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);gn("wasm bindInputsOutputs");for(let O=0;O<y;O++){let P=t[O];await s._OrtBindInput(L,c[P],T[O])!==0&&Oe(`Can't bind input[${O}] for session=${e}.`)}for(let O=0;O<w;O++){let P=r[O];(U=i[O])!=null&&U[3]?(M.push(S[O]),s._OrtBindOutput(L,d[P],S[O],0)!==0&&Oe(`Can't bind pre-allocated output[${O}] for session=${e}.`)):s._OrtBindOutput(L,d[P],0,A[P])!==0&&Oe(`Can't bind output[${O}] to ${ne[O]} for session=${e}.`)}yn("wasm bindInputsOutputs"),an.set(e,[l,c,d,h,g,!0])}(G=s.jsepOnRunStart)==null||G.call(s,l),(N=s.webnnOnRunStart)==null||N.call(s,l);let j;h?j=await s._OrtRunWithBinding(l,h.handle,w,z,b):j=await s._OrtRun(l,R,v,y,K,w,z,b),j!==0&&Oe("failed to call OrtRun().");let ee=[],ce=[];gn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let ne=Number(s.getValue(z+L*o,"*"));if(ne===S[L]||M.includes(S[L])){ee.push(i[L]),ne!==S[L]&&s._OrtReleaseTensor(ne)!==0&&Oe("Can't release tensor.");continue}let A=s.stackSave(),O=s.stackAlloc(4*o),P=!1,B,V=0;try{s._OrtGetTensorData(ne,O,O+o,O+2*o,O+3*o)!==0&&Oe(`Can't access output tensor data on index ${L}.`);let Z=o===4?"i32":"i64",J=Number(s.getValue(O,Z));V=s.getValue(O+o,"*");let ie=s.getValue(O+o*2,"*"),pe=Number(s.getValue(O+o*3,Z)),$e=[];for(let Q=0;Q<pe;Q++)$e.push(Number(s.getValue(ie+Q*o,Z)));s._OrtFree(ie)!==0&&Oe("Can't free memory for tensor dims.");let Ee=$e.reduce((Q,X)=>Q*X,1);B=jt(J);let ze=h==null?void 0:h.outputPreferredLocations[r[L]];if(B==="string"){if(ze==="gpu-buffer"||ze==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Q=[];for(let X=0;X<Ee;X++){let he=s.getValue(V+X*o,"*"),Ce=s.getValue(V+(X+1)*o,"*"),Ue=X===Ee-1?void 0:Ce-he;Q.push(s.UTF8ToString(he,Ue))}ee.push([B,$e,Q,"cpu"])}else if(ze==="gpu-buffer"&&Ee>0){let Q=s.jsepGetBuffer;if(!Q)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let X=Q(V),he=$n(J,Ee);if(he===void 0||!Hi(B))throw new Error(`Unsupported data type: ${B}`);P=!0,ee.push([B,$e,{gpuBuffer:X,download:s.jsepCreateDownloader(X,he,B),dispose:()=>{s._OrtReleaseTensor(ne)!==0&&Oe("Can't release tensor.")}},"gpu-buffer"])}else if(ze==="ml-tensor"&&Ee>0){let Q=s.webnnEnsureTensor,X=s.webnnIsGraphInputOutputTypeSupported;if(!Q||!X)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if($n(J,Ee)===void 0||!ji(B))throw new Error(`Unsupported data type: ${B}`);if(!X(e,B,!1))throw new Error(`preferredLocation "ml-tensor" for ${B} output is not supported by current WebNN Context.`);let he=await Q(e,V,J,$e,!1);P=!0,ee.push([B,$e,{mlTensor:he,download:s.webnnCreateMLTensorDownloader(V,B),dispose:()=>{s.webnnReleaseTensorId(V),s._OrtReleaseTensor(ne)}},"ml-tensor"])}else if(ze==="ml-tensor-cpu-output"&&Ee>0){let Q=s.webnnCreateMLTensorDownloader(V,B)(),X=ee.length;P=!0,ce.push((async()=>{let he=[X,await Q];return s.webnnReleaseTensorId(V),s._OrtReleaseTensor(ne),he})()),ee.push([B,$e,[],"cpu"])}else{let Q=Ar(B),X=new Q(Ee);new Uint8Array(X.buffer,X.byteOffset,X.byteLength).set(s.HEAPU8.subarray(V,V+X.byteLength)),ee.push([B,$e,X,"cpu"])}}finally{s.stackRestore(A),B==="string"&&V&&s._free(V),P||s._OrtReleaseTensor(ne)}}h&&!g&&(s._OrtClearBoundOutputs(h.handle)!==0&&Oe("Can't clear bound outputs."),an.set(e,[l,c,d,h,g,!1]));for(let[L,ne]of await Promise.all(ce))ee[L][2]=ne;return yn("wasm ProcessOutputTensor"),ee}finally{(W=s.webnnOnRunEnd)==null||W.call(s,l),s.stackRestore(C),T.forEach(j=>s._OrtReleaseTensor(j)),S.forEach(j=>s._OrtReleaseTensor(j)),E.forEach(j=>s._free(j)),b!==0&&s._OrtReleaseRunOptions(b),x.forEach(j=>s._free(j))}},us=e=>{let t=Pe(),n=an.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Oe("Can't get an profile file name."),t._OrtFree(i)},ls=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),sn,lt,Ln,lr,cr,jr,cs,Kr,Mn,Cn,Uf,Lf,Ff,Gf,Wf,qf,Vf,Hf,jf=te(()=>{gt(),Df(),wn(),Fi(),sn=()=>!!Ne.wasm.proxy&&typeof document<"u",Ln=!1,lr=!1,cr=!1,Kr=new Map,Mn=(e,t)=>{let n=Kr.get(e);n?n.push(t):Kr.set(e,[t])},Cn=()=>{if(Ln||!lr||cr||!lt)throw new Error("worker not ready")},Uf=e=>{switch(e.data.type){case"init-wasm":Ln=!1,e.data.err?(cr=!0,cs[1](e.data.err)):(lr=!0,cs[0]()),jr&&(URL.revokeObjectURL(jr),jr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Kr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Lf=async()=>{if(!lr){if(Ln)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(Ln=!0,sn())return new Promise((e,t)=>{lt==null||lt.terminate(),hu().then(([n,r])=>{try{lt=r,lt.onerror=a=>t(a),lt.onmessage=Uf,cs=[e,t];let i={type:"init-wasm",in:Ne};!i.in.wasm.wasmPaths&&(n||Pi)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),lt.postMessage(i),jr=n}catch(i){t(i)}},t)});try{await qi(Ne.wasm),await ts(Ne),lr=!0}catch(e){throw cr=!0,e}finally{Ln=!1}}},Ff=async e=>{if(sn())return Cn(),new Promise((t,n)=>{Mn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ne}};lt.postMessage(r)});await ns(Ne,e)},Gf=async e=>sn()?(Cn(),new Promise((t,n)=>{Mn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};lt.postMessage(r,[e.buffer])})):Hr(e),Wf=async(e,t)=>{if(sn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Cn(),new Promise((n,r)=>{Mn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),lt.postMessage(i,a)})}else return is(e,t)},qf=async e=>{if(sn())return Cn(),new Promise((t,n)=>{Mn("release",[t,n]);let r={type:"release",in:e};lt.postMessage(r)});as(e)},Vf=async(e,t,n,r,i,a)=>{if(sn()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Cn(),new Promise((s,o)=>{Mn("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};lt.postMessage(l,ls(u))})}else return os(e,t,n,r,i,a)},Hf=async e=>{if(sn())return Cn(),new Promise((t,n)=>{Mn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};lt.postMessage(r)});us(e)}}),ds,Kf,Yf,Bw=te(()=>{gt(),jf(),me(),Oi(),Su(),ds=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Kf=e=>{switch(e[3]){case"cpu":return new De(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Hi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return De.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!ji(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return De.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Yf=class{async fetchModelAndCopyToWasmMemory(e){return Gf(await Yi(e))}async loadModel(e,t){zt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Wf(n,t),bt()}async dispose(){return qf(this.sessionId)}async run(e,t,n){zt();let r=[],i=[];Object.entries(e).forEach(d=>{let h=d[0],g=d[1],m=this.inputNames.indexOf(h);if(m===-1)throw new Error(`invalid input '${h}'`);r.push(g),i.push(m)});let a=[],s=[];Object.entries(t).forEach(d=>{let h=d[0],g=d[1],m=this.outputNames.indexOf(h);if(m===-1)throw new Error(`invalid output '${h}'`);a.push(g),s.push(m)});let o=r.map((d,h)=>ds(d,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((d,h)=>d?ds(d,()=>`output "${this.outputNames[s[h]]}"`):null),l=await Vf(this.sessionId,i,o,s,u,n),c={};for(let d=0;d<l.length;d++)c[this.outputNames[s[d]]]=a[d]??Kf(l[d]);return bt(),c}startProfiling(){}endProfiling(){Hf(this.sessionId)}}}),Xf={};zn(Xf,{OnnxruntimeWebAssemblyBackend:()=>hs,initializeFlags:()=>ps,wasmBackend:()=>Qf});var ps,hs,Qf,Pw=te(()=>{gt(),jf(),Bw(),ps=()=>{(typeof Ne.wasm.initTimeout!="number"||Ne.wasm.initTimeout<0)&&(Ne.wasm.initTimeout=0);let e=Ne.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ne.wasm.simd=!1),typeof Ne.wasm.proxy!="boolean"&&(Ne.wasm.proxy=!1),typeof Ne.wasm.trace!="boolean"&&(Ne.wasm.trace=!1),typeof Ne.wasm.numThreads!="number"||!Number.isInteger(Ne.wasm.numThreads)||Ne.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ne.wasm.numThreads=1;else{let t=typeof navigator>"u"?xy("node:os").cpus().length:navigator.hardwareConcurrency;Ne.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},hs=class{async init(e){ps(),await Lf(),await Ff(e)}async createInferenceSessionHandler(e,t){let n=new Yf;return await n.loadModel(e,t),n}},Qf=new hs});gt(),gt(),gt();var Dw="1.27.0";{let e=(Pw(),Yn(Xf)).wasmBackend;Bn("webgpu",e,5),Bn("webnn",e,5),Bn("cpu",e,10),Bn("wasm",e,10)}Object.defineProperty(Ne.versions,"web",{value:Dw,enumerable:!0});/**
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
 */const Yr=new Map;function Zf(e,t){const n=Yr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Yr.set(e,n)}function at(e,t){const n=performance.now();try{return t()}finally{Zf(e,performance.now()-n)}}async function et(e,t){const n=performance.now();try{return await t()}finally{Zf(e,performance.now()-n)}}function Uw(){return[...Yr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Lw(){Yr.clear()}const Fw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Gw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),Ww=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function Jf(e){const t=Fw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function qw(e){const t=Ww.exec(e);if(t===null)return Jf(e);const[,n,r,i,a]=t,s=Jf(a);if(n==="both")return s;const o=Gw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${o}${u} — ${s}`}function Vw(e,t,n,r){const i=t*n,a=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return a.set(e),a;for(let s=0;s<i;s+=1)a[s*4]=e[s*r],a[s*4+1]=e[s*r+1],a[s*4+2]=e[s*r+2],a[s*4+3]=255;return a}function st(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Fn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function em(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Hw=114;function jw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),s=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-s)/2),resizedWidth:a,resizedHeight:s}}function fs(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=(c+.5)*l-.5,h=Math.max(0,Math.min(i-1,Math.floor(d))),g=Math.min(i-1,h+1),m=Math.max(0,Math.min(1,d-h));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),T=Math.max(0,Math.min(1,w-b)),S=(h*r+b)*a,E=(h*r+x)*a,M=(g*r+b)*a,C=(g*r+x)*a,v=(c*t+y)*3;for(let R=0;R<3;R++){const z=s[S+R]*(1-T)+s[E+R]*T,K=s[M+R]*(1-T)+s[C+R]*T;o[v+R]=Math.min(255,Math.max(0,Math.round(z*(1-m)+K*m)))}}}return o}function Gn(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=c*l,h=Math.min((c+1)*l,i);for(let g=0;g<t;g++){const m=g*u,y=Math.min((g+1)*u,r);let w=0,b=0,x=0,T=0;for(let E=Math.floor(d);E<h;E++){const M=Math.min(E+1,h)-Math.max(E,d);if(!(M<=0))for(let C=Math.floor(m);C<y;C++){const v=Math.min(C+1,y)-Math.max(C,m);if(v<=0)continue;const R=v*M,z=(E*r+C)*a;w+=s[z]*R,b+=s[z+1]*R,x+=s[z+2]*R,T+=R}}const S=(c*t+g)*3;o[S]=Math.min(255,Math.max(0,st(w/T))),o[S+1]=Math.min(255,Math.max(0,st(b/T))),o[S+2]=Math.min(255,Math.max(0,st(x/T)))}}return o}function tm(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function dr(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n,c=h=>Math.max(0,Math.min(r-1,h)),d=h=>Math.max(0,Math.min(i-1,h));for(let h=0;h<n;h++){const g=(h+.5)*l-.5,m=Math.floor(g),y=tm(g-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),T=tm(b-x),S=(h*t+w)*3;for(let E=0;E<3;E++){let M=0;for(let C=0;C<4;C++){const v=d(m-1+C)*r;let R=0;for(let z=0;z<4;z++)R+=T[z]*s[(v+c(x-1+z))*a+E];M+=y[C]*R}o[S+E]=Math.min(255,Math.max(0,Math.round(M)))}}}return o}function Xr(e,t,n=1){const r=jw(e.width,e.height,t,n),i=fs(e,r.resizedWidth,r.resizedHeight),a=t*t,s=new Float32Array(3*a).fill(Hw/255);for(let o=0;o<r.resizedHeight;o++){const u=(o+r.padY)*t+r.padX,l=o*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const d=(l+c)*3,h=u+c;s[h]=i[d]/255,s[a+h]=i[d+1]/255,s[2*a+h]=i[d+2]/255}}return{tensor:s,params:r}}function Kw(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],c=e[s*6+3],d=e[s*6+4],h=e[s*6+5];if(d<n)continue;const g=Math.round(h);if(g<0||g>=r)continue;const m=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(c-t.padY)/t.scale;i.push({classIndex:g,confidence:d,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const pr=.8,nm=.65,Yw=110,Xw=1280;function Qw(e,t,n){if(n==null)return pr;if(n.length===0)return nm;const r=Math.max(e,t);if(!(r>0))return pr;const i=Xw/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return pr;const s=a.length;return(s%2===1?a[(s-1)/2]:(a[s/2-1]+a[s/2])/2)>=Yw?nm:pr}const rm=.25,im=.6;function Zw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),s=Math.trunc(Number(n[3]));if(![r,i,a,s].every(b=>Number.isFinite(b)))return null;const o=a-r,u=s-i;if(o<=0||u<=0)return null;const l=Math.trunc(o*(o>=u?rm:im)),c=Math.trunc(u*(o>=u?im:rm)),d=Math.max(0,r-l),h=Math.max(0,i-c),g=Math.min(Math.trunc(e),a+l),m=Math.min(Math.trunc(t),s+c),y=g-d,w=m-h;return y<=0||w<=0?null:{x:d,y:h,width:y,height:w}}const am=3,Jw=.15,e_=.6;function ms(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function sm(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function t_(e,t,n){try{const r=Math.trunc(Number(n)),i=n!=null&&Number.isFinite(r)&&r!==0;if(!e||e.length<2)return null;const a=[Number(e[0][0]),Number(e[0][1])],s=[Number(e[1][0]),Number(e[1][1])];if(![...a,...s].every(E=>Number.isFinite(E)))return null;const o=ms(a,s);if(!(o>0))return null;const u=[];for(const E of t??[]){const M=Math.trunc(Number(E.n));if(!Number.isFinite(M)||M<am)continue;const C=sm(E.poly);C!==null&&u.push({owner:E.owner,c:C,n:M,d0:0,d1:0,ecart:0})}if(u.length<2)return null;u.sort((E,M)=>M.n-E.n);const l=u.slice(0,2);let c=!1;u.length>2&&l[1].n>0&&(c=u[2].n/l[1].n>e_);for(const E of l)E.d0=ms(E.c,a),E.d1=ms(E.c,s),E.ecart=Math.abs(E.d0-E.d1);const d=[...l].sort((E,M)=>M.ecart-E.ecart),h=d[0],g=d[1],m=h.d0<h.d1?0:1,y=r>0?1:0,w=i?m===y?h:g:null,b=i?m===y?g:h:null,x=m===1?h.owner:g.owner,T=m===1?g.owner:h.owner,S=h.ecart/o<Jw;return{favoredOwner:(b==null?void 0:b.owner)??null,threatenedOwner:(w==null?void 0:w.owner)??null,ownerAtEnd0:T,ownerAtEnd1:x,distance:i?Math.abs(r):null,ambiguous:!!(S||c)}}catch{return null}}function n_(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}function r_(e){try{const t=[];for(const u of e??[]){const l=Number(u==null?void 0:u.n);if(!Number.isFinite(l)||l<am)continue;const c=sm(u.poly);c!==null&&t.push({owner:u.owner,c,n:l})}if(t.length<2)return null;t.sort((u,l)=>l.n-u.n);const[n,r]=t;if(n.owner===r.owner)return null;const i=Math.abs(n.c[0]-r.c[0]);if(Math.abs(n.c[1]-r.c[1])>i){const[u,l]=n.c[1]<r.c[1]?[n,r]:[r,n];return{left:u.owner,right:l.owner}}const[s,o]=n.c[0]<r.c[0]?[n,r]:[r,n];return{left:s.owner,right:o.owner}}catch{return null}}const i_=10.6;function a_(e,t,n){if(!Number.isFinite(n)||n<=0)return null;const r=Number(e[0])-Number(t[0]),i=Number(e[1])-Number(t[1]),a=Math.hypot(r,i);return!Number.isFinite(a)||a<=0||a/n<i_?null:[Number(e[0]),Number(e[1])]}const s_=.6;function om(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,c=(e[a*6+3]-t.padY)/t.scale,d=st((o+l)/2),h=st((u+c)/2),g=st((l-o+(c-u))/4);g>=1&&r.push({cx:d,cy:h,r:g})}return r}function o_(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(s_*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function u_(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Fn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function um(e,t,n){const r=om(e,t,n);return r.length===0?[]:u_(o_(r))}const l_=2.5,c_=3;function d_(e){if(e.length<c_)return[...e];const t=e.map(i=>i.r).sort((i,a)=>i-a),n=t.length,r=n%2?t[(n-1)/2]:(t[n/2-1]+t[n/2])/2;return e.filter(i=>i.r<=l_*r)}function p_(e,t,n){return om(e,t,n)}function gs(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const h_=.5,f_=.7,m_=.55;function ys(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function lm(e){if(e.length===0)return[];const t=(h_*ys(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,s=(i[1]+i[3])/2,o=n.find(u=>(u.cx-a)**2+(u.cy-s)**2<=t);if(o===void 0)n.push({cx:a,cy:s,boxes:[i]});else{o.boxes.push(i);const u=o.boxes.length;o.cx=(o.cx*(u-1)+a)/u,o.cy=(o.cy*(u-1)+s)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Fn(i.map(a=>a[0]))),Math.trunc(Fn(i.map(a=>a[1]))),Math.trunc(Fn(i.map(a=>a[2]))),Math.trunc(Fn(i.map(a=>a[3])))]);if(r.length>=2){const i=ys(r),a=r.map(()=>!0);for(let s=0;s<r.length;s++)if(a[s])for(let o=s+1;o<r.length;o++){if(!a[o])continue;const u=r[s],l=r[o],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),h=c*d,g=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(h>=f_*Math.min(g,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?o:s]=!1,!a[s])break}}r=r.filter((s,o)=>a[o])}if(r.length>=3){const i=ys(r);r=r.filter(([a,s,o,u])=>Math.min(o-a,u-s)>=m_*i)}return r}const cm=.7;function g_(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),a=Math.min(e[3],t[3]);if(i<=n||a<=r)return 0;const s=(i-n)*(a-r),o=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=o+u-s;return l>0?s/l:0}function dm(e,t,n,r,i,a=cm){return y_(e,t,n,r,i,a).map(s=>s.box)}function y_(e,t,n,r,i,a=cm){const s=t-4;if(s<=0||n<=0)return[];const o=[];for(let l=0;l<n;l+=1){let c=0,d=0;for(let h=0;h<s;h+=1){const g=e[(4+h)*n+l];g>c&&(c=g,d=h)}c<i||o.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:c,cls:d})}o.sort((l,c)=>c.score-l.score);const u=[];for(const l of o){let c=!1;for(const d of u)if(d.cls===l.cls&&g_(d.box,l.box)>a){c=!0;break}c||u.push(l)}return u}const pm=["brown","grey","blue","green","yellow","red","purple"],hm={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},w_=.7;function ws(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[s,o,u,l]=a.box;let c=!1;for(const d of r){const h=e[d];if(h.family===null||a.family===null||h.family!==a.family)continue;const[g,m,y,w]=h.box,b=Math.max(0,Math.min(s+u,g+y)-Math.max(s,g)),x=Math.max(0,Math.min(o+l,m+w)-Math.max(o,m)),T=Math.max(1,Math.min(u*l,y*w));if(b*x>=w_*T){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function Qr(e,t,n,r=pm.length){const i=r<=1,a=Kw(e,t,n,r).map(s=>{const o=i?null:pm[s.classIndex];return{color:o,family:o===null?null:hm[o],box:s.box,confidence:s.confidence}});return i?a:ws(a)}const __=8,b_=.8,fm=1.25;function $_(e){if(e.length<__)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*fm?t.push(s):u>o*fm&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<b_*e.length||i.length===0?[]:i.filter(s=>s.family!==null&&s.color!==null).map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const x_=2.25,mm=8;function v_(e){if(e.length<mm)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,h)=>d-h),r=x_*n[Math.floor(n.length/2)],i=r*r,a=e.map((d,h)=>h),s=d=>{for(;a[d]!==d;)a[d]=a[a[d]],d=a[d];return d};for(let d=0;d<e.length;d++)for(let h=d+1;h<e.length;h++){const g=t[d][0]-t[h][0],m=t[d][1]-t[h][1];g*g+m*m<=i&&(a[s(d)]=s(h))}const o=new Map;for(let d=0;d<e.length;d++){const h=s(d);o.set(h,[...o.get(h)??[],d])}let u=[];for(const d of o.values())d.length>u.length&&(u=d);if(u.length<mm||u.length===e.length)return[];const l=new Set(u),c=e.map((d,h)=>h).filter(d=>!l.has(d));return c.filter(d=>e[d].family!==null&&e[d].color!==null).map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const Xe={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5,classes:7},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function It(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const S_=.42,E_=22,T_=43,I_=120,M_=1.5,C_=.72,k_=110,gm=3;function hr(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*S_);if(l<1)return 0;let c=0;for(let d=0;d<i;d++)for(let h=0;h<r;h++){if((h-o)**2+(d-u)**2>l*l)continue;const g=(d*r+h)*a,m=s[g],y=s[g+1],w=s[g+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),c+=1)}return c}function A_(e){let t=0,n=0,r=0,i=hr(e,!1,(a,s,o)=>{const u=It(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=hr(e,!0,(a,s,o)=>{const u=It(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function R_(e){let t=0,n=0,r=hr(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=hr(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function O_(e){let t=0;const n=hr(e,!0,(r,i,a)=>{t+=It(r,i,a).s});return n===0?null:t/n}function N_(e){const t=A_(e);if(t===null||t.s<=E_)return 1;if(t.s>=I_){const n=R_(e);return n!==null&&n>=M_?6:3}return t.s>=T_?3:6}function z_(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function B_(e,t){const n=[...t];if(e.length<gm||t.length!==e.length)return n;const r=e.map(s=>O_(s)),i=r.filter(s=>s!==null);if(i.length<gm)return n;const a=Fn(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<C_*a&&s<k_&&(n[o]=1)}),n}function ym(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),c=Math.max(0,u-s),d=new Uint8Array(l*c*3);for(let h=0;h<c;h++)for(let g=0;g<l;g++){const m=(h*l+g)*3;if((g+a-n)**2+(h+s-r)**2<=i*i){const w=((h+s)*e.width+(g+a))*e.channels;d[m]=e.data[w],d[m+1]=e.data[w+1],d[m+2]=e.data[w+2]}else d[m]=255,d[m+1]=255,d[m+2]=255}return{width:l,height:c,channels:3,data:d}}function P_(e,t){const n=t.map(a=>ym(e,a)),r=n.map(a=>N_(a)),i=z_(t,r);return B_(n,i)}function D_(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function wm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const c=l*i,d=Math.min((l+1)*i,e.width);let h=0,g=0;for(let m=Math.floor(o);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,o);if(!(y<=0))for(let w=Math.floor(c);w<d;w++){const b=Math.min(w+1,d)-Math.max(w,c);b<=0||(h+=e.data[m*e.width+w]*b*y,g+=b*y)}}r[s*t+l]=Math.min(255,Math.max(0,st(h/g)))}}return{width:t,height:n,data:r}}function U_(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,st(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function L_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const c=s+l,d=a+u;if(!(c<0||c>=t||d<0||d>=n)&&r[d*t+c]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function F_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const c=s+l,d=a+u;if(c>=0&&c<t&&d>=0&&d<n&&r[d*t+c]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function _m(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;s[c++]=u,i[u]=o;let d=0,h=0,g=0;for(;l<c;){const m=s[l++],y=m%t,w=m/t|0;d+=1,h+=y,g+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const T=y+x,S=w+b;if(T<0||T>=t||S<0||S>=n)continue;const E=S*t+T;r[E]>0&&i[E]===0&&(i[E]=o,s[c++]=E)}}a[o]={area:d,centroidX:h/d,centroidY:g/d},o+=1}return{labels:i,stats:a}}function G_(e,t,n){return bm(Float32Array.from(e.data),e.width,t,n)}function bm(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const d=c-a,h=l-a,g=o*d-u*h+a,m=u*d+o*h+a,y=Math.floor(g),w=Math.floor(m),b=g-y,x=m-w,T=(M,C)=>M>=0&&M<t&&C>=0&&C<t?e[C*t+M]:r,S=T(y,w)*(1-b)+T(y+1,w)*b,E=T(y,w+1)*(1-b)+T(y+1,w+1)*b;i[l*t+c]=S*(1-x)+E*x}return i}const W_=.9,q_=.34,V_=[.55,.6,.66,.72],H_=22,j_=88,K_=35,Wn=28,_s=4,Y_=Array.from({length:15},(e,t)=>-21+t*3),$m=[-2,0,2],X_=3,Q_=.3;function Z_(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function J_(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),c=Math.floor((u-s)/2),d=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let w=0;w<s;w++)l[(y+d)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const h=Wn-2*_s,g=wm({width:u,height:u,data:l},h,h),m=new Float32Array(Wn*Wn);for(let y=0;y<h;y++)for(let w=0;w<h;w++)m[(y+_s)*Wn+(w+_s)]=g.data[y*h+w]>110?1:0;return m}function eb(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*q_);if(u<4)return null;const l=s-u,c=o-u,d=2*u,h=2*u;if(d<6||h<6)return null;const g=new Int16Array(d*h),m=new Int16Array(d*h),y=new Int16Array(d*h),w=new Uint8Array(d*h),b=[],x=Math.min(d,h)/2;for(let L=0;L<d;L++)for(let ne=0;ne<h;ne++){const A=((L+l)*n+(ne+c))*i,{h:O,s:P,v:B}=It(a[A],a[A+1],a[A+2]),V=L*h+ne;g[V]=O,m[V]=P,y[V]=B,Math.sqrt((ne-h/2)**2+(L-d/2)**2)/x<=t&&(w[V]=1,b.push(B))}if(b.length<16)return null;const T=em(b,55);let S=0,E=0,M=0;const C=L=>g[L]>=H_&&g[L]<=j_&&m[L]>=K_,v=L=>y[L]>=T&&m[L]<=95&&!C(L)&&w[L]===1;for(let L=0;L<d*h;L++)w[L]===1&&(M+=1,y[L]>=130&&!C(L)&&(S+=1),v(L)&&(E+=1));const R=S>.5*M&&E<.15*M,z=new Uint8Array(d*h);if(R){const L=em(b,45);for(let ne=0;ne<d*h;ne++)z[ne]=w[ne]===1&&y[ne]<=L?255:0}else for(let L=0;L<d*h;L++)z[L]=v(L)?255:0;const K={width:h,height:d,data:z},U=L_(K);let G=_m(U),N=G;if(G.stats.length<=1&&(G=_m(K),N=G,G.stats.length<=1))return null;const W=Math.min(d,h)/2;let j=0,ee=-1;for(let L=1;L<N.stats.length;L++){const ne=N.stats[L];if(ne===void 0)continue;const A=Math.hypot(ne.centroidX-h/2,ne.centroidY-d/2)/W,O=ne.area*(1-.6*Math.min(A,1));O>ee&&(ee=O,j=L)}if(j===0)return null;const ce=new Uint8Array(d*h);for(let L=0;L<d*h;L++)ce[L]=N.labels[L]===j?255:0;return J_(F_({width:h,height:d,data:ce}))}function tb(e,t,n,r,i,a){const s=Wn;let o=0,u=0;for(let l=0;l<s;l++){const c=l-a;if(!(c<0||c>=s))for(let d=0;d<s;d++){const h=d-i;if(h<0||h>=s)continue;const g=e[c*s+h];g!==0&&(u+=g,o+=g*n[l*s+d])}}return o/(u+r-o+1e-6)}function nb(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Y_){const a=i===0?e:bm(e,Wn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of $m)for(const u of $m){const l=tb(a,s,t,n,o,u);l>r&&(r=l)}}return r}function rb(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of V_){const o=eb(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([nb(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Q_)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,X_))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}function Xt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let c=0;c<i;c++)for(let d=0;d<r;d++){let h,g;n===1?(h=i-1-c,g=d):n===2?(h=r-1-d,g=i-1-c):(h=c,g=r-1-d);const m=(c*r+d)*a,y=(g*o+h)*a;for(let w=0;w<a;w++)l[y+w]=s[m+w]}return{width:o,height:u,channels:a,data:l}}const ib=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,ib)*255));return e})();const ab=5e3,sb=.75,ob=15,xm=1.25,vm=2.4,ub=.003,lb=.85,cb=2600,db=2,bs=.3,Sm=.1,Em=.012,pb=22,Tm=.5,Im=.12;function ct(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function hb(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[d,h]=e[(u+1)%4];r+=l*h-d*c}const i=Math.abs(r/2)/(t*n);if(i<ub||i>lb)return!1;const a=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=xm&&o<=vm}function fb(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function mb(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(bs*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(U=>[U[0],U[1],U[2]-s*(U[0]+U[1])+0]);for(let U=0;U<3;U++)l[U][2]=r[U][2]-s*r[U][0]-s*r[U][1];const c=ct(e,t),d=new e.Mat,h=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,d,h,new e.Size(o,u),e.WARP_INVERSE_MAP);const g=new e.Mat;e.cvtColor(d,g,e.COLOR_RGB2Lab),c.delete(),h.delete();const m=g.data,y=Math.max(4,Math.trunc(s/3)),w=[[],[],[]],b=(U,G)=>{const N=(G*o+U)*3;w[0].push(m[N]),w[1].push(m[N+1]),w[2].push(m[N+2])};for(let U=0;U<u;U++)for(let G=0;G<o;G++)(U<y||U>=u-y||G<y||G>=o-y)&&b(G,U);const x=U=>{U.sort((N,W)=>N-W);const G=U.length>>1;return U.length%2?U[G]:(U[G-1]+U[G])/2},T=[x(w[0]),x(w[1]),x(w[2])],S=(U,G)=>{const N=(G*o+U)*3,W=m[N]-T[0],j=m[N+1]-T[1],ee=m[N+2]-T[2];return Math.sqrt(W*W+j*j+ee*ee)>pb},E=Math.max(6,Math.trunc(Sm*i)),M=Math.max(6,Math.trunc(Sm*a)),C=Math.max(2,Math.trunc(Em*i)),v=Math.max(2,Math.trunc(Em*a)),R=U=>{let G=0,N=0;for(const W of U)N=W?N+1:0,N>G&&(G=N);return G/Math.max(1,U.length)},z=U=>{let G,N,W,j,ee;if(U==="L"?(G=s,N=s+a,W=Math.max(0,s-C-E),j=Math.max(0,s-C),ee=!1):U==="R"?(G=s,N=s+a,W=s+i+C,j=Math.min(o,s+i+C+E),ee=!1):(G=Math.max(0,s-v-M),N=Math.max(0,s-v),W=s,j=s+i,ee=!0),N<=G||j<=W)return 0;const ce=[];if(ee)for(let L=W;L<j;L++){let ne=0;for(let A=G;A<N;A++)S(L,A)&&ne++;ce.push(ne/(N-G)>Tm)}else for(let L=G;L<N;L++){let ne=0;for(let A=W;A<j;A++)S(A,L)&&ne++;ce.push(ne/(j-W)>Tm)}return R(ce)},K={L:z("L"),R:z("R"),T:z("T")};return d.delete(),g.delete(),K}const Mm=.5;function gb(e){return e!==null&&e.R>=Im?["R"]:[]}function Cm(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=bs*a;if(!(s>0))return null;const o=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],T=n[b];let S=-(T[1]-x[1]),E=T[0]-x[0];const M=(x[0]+T[0])/2,C=(x[1]+T[1])/2;S*(M-o)+E*(C-u)<0&&(S=-S,E=-E);const v=Math.hypot(S,E);v<=1e-6||(S=S/v*s,E=E/v*s,c.push([x[0]+S,x[1]+E],[T[0]+S,T[1]+E]))}const d=c.map(y=>y[0]),h=c.map(y=>y[1]),g=Math.round(Math.min(...d)),m=Math.round(Math.min(...h));return{x:g,y:m,width:Math.round(Math.max(...d))-g,height:Math.round(Math.max(...h))-m}}const yb=.88;function $s(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(bs*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*yb),c=o-l;if(c<1)return null;const d=ct(e,t),h=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),g=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(h,g),y=[...m.data64F],w=[0,1,2].flatMap(C=>[y[C*3],y[C*3+1],y[C*3+2]-s*y[C*3]-s*y[C*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(d,x,b,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,c,u)),S=new e.Mat;T.copyTo(S);const E=S.data,M=new Uint8ClampedArray(c*u*3);M.set(E.subarray(0,M.length));for(const C of[d,h,g,m,b,x,T,S])try{C.delete()}catch{}return{width:c,height:u,channels:3,data:M}}function wb(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),c=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+s+u)),h=Math.max(0,Math.trunc(a-l)),g=Math.min(n.height,Math.trunc(a+o+l));if(d-c<8||g-h<8)return null;const m=Math.max(n.width,n.height)<cb?db:1,y=ct(e,n),w=ct(e,t),b=y.roi(new e.Rect(c,h,d-c,g-h)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const T=new e.Mat,S=new e.Mat;e.cvtColor(w,T,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const E=new e.ORB(ab),M=new e.KeyPointVector,C=new e.KeyPointVector,v=new e.Mat,R=new e.Mat,z=new e.Mat,K=[y,w,b,x,T,S,M,C,v,R,z],U=Z=>{for(const J of K)try{J.delete()}catch{}try{E.delete()}catch{}return Z};if(E.detectAndCompute(T,z,M,v),E.detectAndCompute(S,z,C,R),v.rows<8||R.rows<8)return U(null);const G=new e.BFMatcher(e.NORM_HAMMING),N=new e.DMatchVectorVector;G.knnMatch(v,R,N,2);const W=[],j=[];for(let Z=0;Z<N.size();Z++){const J=N.get(Z);if(J.size()===2){const ie=J.get(0),pe=J.get(1);if(ie.distance<sb*pe.distance){const $e=M.get(ie.queryIdx).pt,Ee=C.get(ie.trainIdx).pt;W.push($e.x,$e.y),j.push(Ee.x,Ee.y)}}}if(N.delete(),G.delete(),W.length/2<8)return U(null);const ee=e.matFromArray(W.length/2,1,e.CV_32FC2,W),ce=e.matFromArray(j.length/2,1,e.CV_32FC2,j),L=new e.Mat,ne=e.findHomography(ee,ce,e.RANSAC,5,L);let A=0;for(let Z=0;Z<L.rows;Z++)A+=L.data[Z];const O=ne.rows===3?[...ne.data64F]:null;if(ee.delete(),ce.delete(),L.delete(),ne.delete(),O===null||A<ob)return U(null);const P=1/m,B=[[P,0,c],[0,P,h],[0,0,1]],V=[0,1,2].map(Z=>[0,1,2].map(J=>B[Z][0]*O[J]+B[Z][1]*O[3+J]+B[Z][2]*O[6+J]));return U({H:V,inliers:A})}const _b=620;function bb(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function $b(e,t,n,r){const i=km(e,t,n,r);if(i!==null)return i;try{const[a,s,o,u]=r.map(E=>Math.trunc(E));if(Math.min(o,u)>=_b||o<=0||u<=0)return null;const l=Math.trunc(o*.25),c=Math.trunc(u*.25),d=Math.max(0,a-l),h=Math.max(0,s-c),g=Math.min(t.width,a+o+l),m=Math.min(t.height,s+u+c);if(g<=d||m<=h)return null;const y=ct(e,t),w=y.roi(new e.Rect(d,h,g-d,m-h)),b=new e.Mat;e.resize(w,b,new e.Size((g-d)*2,(m-h)*2),0,0,e.INTER_CUBIC);const x=bb(e,b);for(const E of[y,w,b])try{E.delete()}catch{}const T=[(a-d)*2,(s-h)*2,o*2,u*2],S=km(e,x,n,T);return S===null?null:{...S,footprint:S.footprint.map(([E,M])=>[E*.5+d,M*.5+h])}}catch{return null}}function km(e,t,n,r){const i=wb(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>fb(i.H,b,x));if(!hb(s,t.width,t.height))return null;const o=ct(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=ct(e,n),d=new e.Mat,h=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(c,h,e.COLOR_RGB2GRAY);const g=new e.Mat;e.matchTemplate(d,h,g,e.TM_CCOEFF_NORMED);const m=g.data32F[0];for(const b of[o,u,l,c,d,h,g])try{b.delete()}catch{}if(m<Mm)return null;const y=mb(e,t,n,i.H);if(y===null)return null;const w=gb(y);return{built:Math.max(y.L,y.R,y.T)>=Im,footprint:s,overflow:w,edgeScores:y,inliers:i.inliers}}const xb=.3,vb=.3;function Sb(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=xb}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,c=Math.max(o,u,l)<vb;if(!r&&!c)return;t.some(([h,g])=>h>=a.zone.x0&&h<=a.zone.x1&&g>=a.zone.y0&&g<=a.zone.y1)||i.push(s)}),i}const yt=128,kn=.5;function Eb(e,t){return e!==null?e>=kn:t.length>0&&t.reduce((n,r)=>n+r,0)*2>t.length}function Zr(e){const t=Gn(e,yt,yt),n=yt*yt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function xs(e){const t=e[1]??0;return{built:t>=kn,prob:t}}const fr=120,mr=179,Tb=1.3,Ib=3.6,Mb=.45,Cb=6e-4,kb=.02,Ab=6e3,Rb=.78,Ob=1.25,Nb=2.4,zb=.05,Bb=1.5,Pb=.5,Db=.9,Ub=150,Lb=18,Fb=34,Gb=90,Wb=130,qb=.13,Vb=.15,Jr="magistrates-guild",vs="merchants-guild";function Hb(e,t){const n=ct(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[fr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[mr,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const c=new e.Mat,d=new e.Mat,h=new e.Mat,g=e.connectedComponentsWithStats(l,c,d,h,8);l.delete(),c.delete(),h.delete();const m=t.width*t.height,y=[];for(let w=1;w<g;w++){const b=d.intAt(w,0),x=d.intAt(w,1),T=d.intAt(w,2),S=d.intAt(w,3),E=d.intAt(w,4),M=E/m;M<Cb||M>kb||E/Math.max(T*S,1)<Mb||y.push({x:b,y:x,w:T,h:S})}return d.delete(),{blobs:y,mask:o,maskWidth:t.width}}function jb(e,t,n,r,i,a,s){const o=e,u=a,l=s,c=i;if(!c.gray){const P=ct(e,r);c.gray=new o.Mat,o.cvtColor(P,c.gray,o.COLOR_RGB2GRAY),P.delete(),c.k=new o.KeyPointVector,c.d=new o.Mat;const B=new o.Mat;u.detectAndCompute(c.gray,B,c.k,c.d),B.delete()}const d=n,h=new o.Mat,g=new o.KeyPointVector,m=new o.Mat;u.detectAndCompute(d,h,g,m),h.delete();const y=P=>(g.delete(),m.delete(),P);if(c.d.rows<8||m.rows<8)return y(null);const w=new o.DMatchVectorVector;l.knnMatch(c.d,m,w,2);const b=[],x=[];for(let P=0;P<w.size();P++){const B=w.get(P);if(B.size()===2){const V=B.get(0);if(V.distance<Rb*B.get(1).distance){const Z=c.k.get(V.queryIdx).pt,J=g.get(V.trainIdx).pt;b.push(Z.x,Z.y),x.push(J.x,J.y)}}}if(w.delete(),b.length/2<8)return y(null);const T=o.matFromArray(b.length/2,1,o.CV_32FC2,b),S=o.matFromArray(x.length/2,1,o.CV_32FC2,x),E=new o.Mat,M=o.findHomography(T,S,o.RANSAC,5,E);if(T.delete(),S.delete(),E.delete(),M.rows!==3)return M.delete(),y(null);const C=[...M.data64F],v=(P,B)=>{const V=C[6]*P+C[7]*B+C[8];return[(C[0]*P+C[1]*B+C[2])/V,(C[3]*P+C[4]*B+C[5])/V]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([P,B])=>v(P,B));if(R.some(P=>!Number.isFinite(P[0])||!Number.isFinite(P[1])))return M.delete(),y(null);const z=R.map((P,B)=>{const V=R[(B+1)%4];return Math.hypot(V[0]-P[0],V[1]-P[1])}),K=Math.min(...z);if(K<1)return M.delete(),y(null);const U=Math.max(...z)/K;let G=0;for(let P=0;P<4;P++){const[B,V]=R[P],[Z,J]=R[(P+1)%4];G+=B*J-Z*V}const N=t,W=Math.abs(G/2)/(N.rows*N.cols);if(U<Ob||U>Nb||W<zb||W>Bb)return M.delete(),y(null);const j=new o.Mat;o.warpPerspective(N,j,M,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),M.delete();const ee=new o.Mat;o.cvtColor(j,ee,o.COLOR_RGB2GRAY),j.delete();const ce=Math.trunc(r.height/2),L=ee.roi(new o.Rect(0,0,r.width,ce)),ne=c.gray.roi(new o.Rect(0,0,r.width,ce)),A=new o.Mat;o.matchTemplate(L,ne,A,o.TM_CCOEFF_NORMED);const O=A.data32F[0];return L.delete(),ne.delete(),A.delete(),ee.delete(),y(O)}function Kb(e,t,n){let r,i;if(n===Jr)r=vs,i=qb;else if(n===vs)r=Jr,i=Vb;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let c=0,d=null;for(const[h,g]of[[0,l],[l,o]]){let m=0,y=0;for(let b=s;b<s+u;b++)for(let x=a+h;x<a+g;x++){const T=(b*e.width+x)*e.channels,{h:S,s:E,v:M}=It(e.data[T],e.data[T+1],e.data[T+2]);if(S>=fr&&S<=mr&&E>=30&&E<=170&&M<=170)continue;m++,(r===vs?S>=Lb&&S<=Fb&&E>=Gb&&M>=Wb:S>=95&&S<=130&&E>=80)&&y++}if(m<20)continue;const w=y/m;w>c&&(c=w,d={x:a+h,y:s,w:g-h,h:u})}return c>=i&&d!==null?{id:r,box:d}:null}const Yb=1.7,Xb=140,Qb=170,Zb=.2,Jb=.1,Am=240,Rm=80,Om=60,e1=50,Nm="scientists-guild",zm="tacticians-guild",ei=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function t1(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let E=0;for(let M=0;M<a;M++)e[(i+S)*t+r+M]>0&&E++;o[S]=E/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],c=u[u.length-1],d=c-l;if(d<5)return[];const h=a/d;if(h<Tb||h>Ib)return[];if(h>=Yb)return[{x:r,y:i+l,w:a,h:d}];const g=new Float32Array(s),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let S=-4;S<=4;S++){const E=Math.exp(-(S*S)/(2*m*m));y.push(E),w+=E}for(let S=0;S<s;S++){let E=0;for(let M=-4;M<=4;M++){const C=Math.min(s-1,Math.max(0,S+M));E+=o[C]*y[M+4]}g[S]=E/w}const b=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let T=l+Math.trunc(d/2);if(x>b){let S=1/0;for(let E=b;E<x;E++)g[E]<S&&(S=g[E],T=E)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:c-T}]}function n1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let c=0;c<s;c++){const d=((r+l)*e.width+n+c)*e.channels,h=(l*s+c)*3;u[h]=e.data[d],u[h+1]=e.data[d+1],u[h+2]=e.data[d+2]}return{width:s,height:o,channels:3,data:u}}function r1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=It(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=Xb&&s<=Qb&&n++)}return t===0?0:n/t}function i1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=It(e.data[i],e.data[i+1],e.data[i+2]);!(a>=fr&&a<=mr)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function Bm(e,t){const n=ct(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Am,Rm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Am,height:Rm,channels:3,data:i}}function a1(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Pm(e,t){const n=a1(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=It(n.data[y],n.data[y+1],n.data[y+2]);!(w>=fr&&w<=mr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,a++)}const s=a<20,o=ct(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let c=0,d=0,h=0,g=0;for(let m=0;m<r;m++)!s&&i[m]===0||(c+=l[m*3]*100/255,d+=l[m*3+1]-128,h+=l[m*3+2]-128,g++);return u.delete(),g===0?[0,0,0]:[c/g,d/g,h/g]}function s1(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h:c,s:d,v:h}=It(e.data[l],e.data[l+1],e.data[l+2]);c>=fr&&c<=mr&&d>=30&&d<=170&&h<=170||(t++,d>=70&&h>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&h>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function o1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=It(e.data[i],e.data[i+1],e.data[i+2]);s>=Om&&o>=e1?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<Om&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function u1(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function Dm(e,t){const n=ct(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function l1(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=Bm(e,a);n.set(i,Dm(e,s)),ei.includes(i)&&r.set(i,Pm(e,s))}return{gray:n,warmLab:r}}function c1(e,t,n){const r=Bm(e,t),i=s1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Jr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Nm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return zm;const a=o1(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=Jr;else if(o==="green")u=Nm;else if(o==="red")u=zm;else{const l=Dm(e,r);let c="",d=-2;for(const h of ei){const g=n.gray.get(h);if(g===void 0)continue;const m=u1(l,g);m>d&&(d=m,c=h)}u=c||ei[0]}if(ei.includes(u)&&n.warmLab.size>0){const l=Pm(e,r);let c=u,d=1/0;for(const[h,g]of n.warmLab){const m=Math.hypot(l[0]-g[0],l[1]-g[1],l[2]-g[2]);m<d&&(d=m,c=h)}return c}return u}function d1(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=Hb(e,t);if(s.length===0||n.size===0)return a;const l=e,c=new l.ORB(Ab),d=new l.BFMatcher(l.NORM_HAMMING),h=new Map;for(const w of n.keys())h.set(w,{});const g=ct(e,t);let m=null;try{for(const w of s){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),T=Math.max(Ub,Math.trunc(Db*Math.max(w.w,w.h))),S=Math.max(0,b-T),E=Math.max(0,x-T),M=Math.min(t.width,b+T),C=Math.min(t.height,x+T);if(M-S<16||C-E<16)continue;const v=g.roi(new l.Rect(S,E,M-S,C-E)),R=new l.Mat;l.cvtColor(v,R,l.COLOR_RGB2GRAY);let z=null,K=-2;for(const[W,j]of n){if(r!==void 0&&Date.now()>r)break;const ee=jb(e,v,R,j,h.get(W),c,d);ee!==null&&ee>K&&(K=ee,z=W)}v.delete(),R.delete();const U=new Set;if(z!==null&&K>=Pb){a.push({id:z,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),U.add(z);const W=Kb(t,w,z);W&&(a.push({id:W.id,boundingBox:{x:W.box.x,y:W.box.y,width:W.box.w,height:W.box.h},confidence:.9}),U.add(W.id))}if(i===void 0||i.size===0)continue;const G=t1(o,u,w);if(G.length!==2)continue;const N=G.map(W=>n1(t,W));if(!N.some(W=>W.width*W.height===0||i1(W)<Jb))for(let W=0;W<G.length;W++){const j=N[W];if(r1(j)<Zb)continue;m===null&&(m=l1(e,i));const ee=c1(e,j,m);if(ee&&!U.has(ee)){U.add(ee);const ce=G[W];a.push({id:ee,boundingBox:{x:ce.x,y:ce.y,width:ce.w,height:ce.h},confidence:1})}}}}finally{g.delete();for(const w of h.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{c.delete(),d.delete()}catch{}}return a}const Um=128,p1=.56,h1=15,f1=.58,m1=70,g1=50,y1=.12,w1=.2,_1=.1,b1=.17,Lm=.15;function $1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Fm(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),c=Math.max(0,o-u),d=Math.min(n,s+u),h=Math.min(r,o+u),g=d-l,m=h-c,y=new Uint8Array(g*m*i);for(let w=0;w<m;w++){const b=((w+c)*n+l)*i;y.set(a.subarray(b,b+g*i),w*g*i)}return{width:g,height:m,channels:i,data:y}}function x1(e){const t=Fm(e,p1),n=D_(t),r=wm(n,Um,Um);return U_(r)}function v1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;a+=l*c,s+=l*l,o+=c*c}return a/(Math.sqrt(s*o)+1e-6)}function S1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Fm(e,f1),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let h=0;h<r*i;h++){const g=h*a,{h:m,s:y,v:w}=It(s[g],s[g+1],s[g+2]);y>=m1&&w>=g1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const c=u/o,d=l/o;return c>=y1&&t.set("masonry",Lm*Math.min(1,c/w1)),d>=_1&&t.set("strategy",Lm*Math.min(1,d/b1)),t}function E1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=x1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=h1)a.push(G_(n,l,i));const s=new Map;for(const[l,c]of t){let d=-1/0;for(const h of a){const g=v1(h,c);g>d&&(d=g)}s.set(l,d)}for(const[l,c]of S1(e))c>0&&s.has(l)&&s.set(l,s.get(l)+c);let o="",u=-1/0;for(const[l,c]of s)c>u&&(o=l,u=c);return[o,u]}const on=224,T1=[.485,.456,.406],I1=[.229,.224,.225];function M1(e){const t=fs(e,on,on),n=on*on,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-T1[a])/I1[a];return r}function C1(e){const t=3*on*on,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(M1(Xt(e,r)),r*t);return n}function k1(e){const t=e,n=Array.isArray(t==null?void 0:t.classes)?t.classes.map(String):[],r=Array.isArray(t==null?void 0:t.rejets)?t.rejets.map(String):[];if(n.length===0||r.length===0||!r.every(i=>n.includes(i)))throw new Error("token_classifier_classes.json : fiche absente ou incohérente");return typeof(t==null?void 0:t.empreinte_modele)=="string"?{classes:n,rejets:r,empreinte_modele:t.empreinte_modele}:{classes:n,rejets:r}}function A1(e,t){const n=t.classes.length,r=e.length/n;if(!Number.isInteger(r)||r<1)throw new Error(`token_classifier : ${e.length} probabilités pour ${n} classes`);let i=0,a=-1;for(let o=0;o<n;o++){let u=0;for(let c=0;c<r;c++)u+=e[c*n+o];const l=u/r;l>a&&(a=l,i=o)}const s=t.classes[i];return{id:t.rejets.includes(s)?null:s,p:a}}const qn=96,R1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],O1=.45;function N1(e){const t=fs(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function z1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=O1?R1[t]??"":"",prob:n}}const Qt=128,B1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],P1=.5;let Gm=null;function D1(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Gm=e}function Wm(){return Gm??P1}let qm=null;function U1(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");qm=[...e]}function L1(){return qm??B1}const F1=[["__inverse",2],["__trois_quarts",1],["__quart",3]];function G1(e){for(const[t,n]of F1)if(e.endsWith(t))return[e.slice(0,-t.length),n];return[e,0]}function W1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n*3);for(let s=0;s<t*n;s++)for(let o=0;o<3;o++)a[s*3+o]=i[s*r+o];return a}function q1(e){const t=Math.min(Qt/e.width,Qt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?W1(e):t<1?Gn(e,n,r):dr(e,n,r),a=Qt*Qt,s=new Float32Array(3*a);s.fill(114/255);const o=Math.floor((Qt-r)/2),u=Math.floor((Qt-n)/2);for(let l=0;l<r;l++)for(let c=0;c<n;c++){const d=(l*n+c)*3,h=(l+o)*Qt+(c+u);for(let g=0;g<3;g++)s[g*a+h]=i[d+g]/255}return s}async function V1(e,t){const{index:n,prob:r}=H1(await t(q1(e))),[i,a]=G1(L1()[n]??"");return r<Wm()||i==="other"||i===""?{id:"",prob:r,decalage:0}:{id:i,prob:r,decalage:a}}function H1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const Pt=96,j1=[1,2,3,4,5,6,7],Vm=.8,K1=.99;function Y1(e){const t=dr(e,e.width*2,e.height*2),n=e.width*2<Pt&&e.height*2<Pt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?dr(r,Pt,Pt):Gn(r,Pt,Pt),a=Pt*Pt,s=new Float32Array(3*a);for(let o=0;o<a;o++)for(let u=0;u<3;u++)s[u*a+o]=i[o*3+u]/255;return s}function X1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:j1[t],prob:e[t]}}const un=128,Hm=.35,Q1=["fp","laurel"],Z1=.85,Vn=40;function J1(e){const r=(e.width<un&&e.height<un?dr:Gn)(e,un,un),i=un*un,a=new Float32Array(3*i);for(let s=0;s<i;s++)for(let o=0;o<3;o++)a[o*i+s]=r[s*3+o]/255;return a}function e2(e){return e[Q1.indexOf("fp")]}const ln=128,t2=.15,ti=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],Ss=7,jm=.9;function n2(e,t,n){const[r,i,a,s]=e.map(Number);if(!(a>1)||!(s>1))return null;const o=r+a/2,u=i+s/2,l=Math.max(a,s)*(1+2*t2),c=Math.max(0,st(o-l/2)),d=Math.max(0,st(u-l/2)),h=Math.min(t,st(o+l/2)),g=Math.min(n,st(u+l/2));return h-c<8||g-d<8?null:{x:c,y:d,w:h-c,h:g-d}}function r2(e){const r=(e.width<ln&&e.height<ln?dr:Gn)(e,ln,ln),i=ln*ln,a=new Float32Array(3*i);for(let s=0;s<i;s++)for(let o=0;o<3;o++)a[o*i+s]=r[s*3+o]/255;return a}function i2(e){let t=0;for(let a=1;a<ti.length;a++)e[a]>e[t]&&(t=a);const n=e[t],r=t>=Ss;let i=0;for(let a=1;a<Ss;a++)e[a]>e[i]&&(i=a);return{className:ti[t],probability:n,rejected:r&&n>=jm,bestColour:ti[i]}}function a2(e,t){const n=e.color,r={...e,classColor:t.className,classColorProba:Math.round(t.probability*1e4)/1e4};if(n==null||t.className===n)return r;const a=ti.indexOf(t.className)<Ss?`le classifieur préfère ${t.className} (P=${t.probability.toFixed(3)}) là où le détecteur lit ${n}`:`le classifieur penche pour ${t.className} (P=${t.probability.toFixed(3)}, sous le seuil de rejet de ${jm.toFixed(2)}) là où le détecteur lit ${n}`;return e.suspect?r:{...r,suspect:!0,suspectReason:a}}const ni=3,s2=2.2,o2=.3,u2=.65,l2=3,c2=1.3,d2=.77;function Km(e,t,n){const[r,i,a,s]=e,o=[];return r<=ni&&o.push("gauche"),i<=ni&&o.push("haut"),r+a>=t-ni&&o.push("droit"),i+s>=n-ni&&o.push("bas"),o}function Ym(e){const t=e[3]/Math.max(e[2],1);return t>=c2?"portrait":t<=d2?"paysage":null}function Es(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function p2(e,t,n){for(const[r,i,a,s]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(s-i)/Math.max(n,1))>u2)return!0;return!1}function h2(e,t,n,r,i){try{const a=[...e],s=a.filter(w=>Km(w.box,r,i).length>0);if(s.length===0)return{kept:a,dropped:[],suspects:[]};const o=a.filter(w=>!s.includes(w)),u=w=>({kept:o,dropped:s.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(p2(n,r,i))return u("photo-piste");if(o.length<l2)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:s.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(s.length>(o.length+s.length)/3)return u("debordement-structurel");const l=Es(o.map(w=>w.box[2]*w.box[3])),c=Es(o.map(w=>w.box[2])),d=Es(o.map(w=>w.box[3])),h=new Set(o.map(w=>Ym(w.box)).filter(w=>w!==null)),g=[...o],m=[],y=[];for(const w of s){const b=Km(w.box,r,i),[,,x,T]=w.box,S=l>0?x*T/l:0,E=[];(b.includes("gauche")||b.includes("droit"))&&E.push(c>0?x/c:1),(b.includes("haut")||b.includes("bas"))&&E.push(d>0?T/d:1);const M=E.length>0?Math.min(...E):1,C=Ym(w.box);S>s2?m.push({banner:w,edgeReason:"bord-grosse"}):M<o2?m.push({banner:w,edgeReason:"bord-tronquee"}):C!==null&&h.size>0&&!h.has(C)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(g.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:g,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const f2=1,m2=1.5;function g2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function y2(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],s=Math.hypot(i,a);if(s<=0)return null;const o=((e-n[0])*i+(t-n[1])*a)/(s*s);return[Math.abs((e-n[0])*a-(t-n[1])*i)/s,Math.abs(o-.5)*s]}function w2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function _2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,s,o]=t,u=i+s/2,l=a+o/2;let c=null;for(const[h,g]of g2(e)){const m=y2(u,l,h,g);m!==null&&(c===null||m[0]<c[0])&&(c=m)}if(c===null)return null;const d=w2(e);return d===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:d!==s>o}}catch{return null}}function b2(e,t,n,r=f2,i=m2){const a=[];for(const[s,o]of t??[]){const u=_2(e,o,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,s]))}return a.length===0?null:(a.sort((s,o)=>s[0]-o[0]||s[1]-o[1]),a[0][1])}const wt=64,Xm=.5,$2=[.67,1.24];function Qm(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),s=Math.min(e.width,t+r),o=Math.min(e.height,n+r),u=s-i,l=o-a;if(u<=0||l<=0)return null;const c=e.channels,d=new Uint8ClampedArray(u*l*3),h=r*r;for(let w=0;w<l;w++){const b=a+w,x=b-n;for(let T=0;T<u;T++){const S=i+T,E=S-t,M=(w*u+T)*3;if(E*E+x*x<=h){const C=(b*e.width+S)*c;d[M]=e.data[C],d[M+1]=e.data[C+1],d[M+2]=e.data[C+2]}else d[M]=255,d[M+1]=255,d[M+2]=255}}const g=Gn({width:u,height:l,channels:3,data:d},wt,wt),m=wt*wt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=g[w*3+b]/255;return y}function x2(e){return e[1]}const ri=[1,3,6],v2=.5;function S2(e){if(e.length!==ri.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ri[t],prob:e[t]}}function E2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ri.includes(i.denomination)&&i.prob>=v2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const T2=2.25,gr=3,I2=1.15,M2=.5,C2=2.5,k2=.75,A2=2.25,R2=1.3,O2=.77;function ii(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function N2(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),t.length<=2)return t;const n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Zm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[(a+1)%i];if(o>t!=l>t){const c=(u-s)*(t-o)/(l-o)+s;e<c&&(r=!r)}}return r}function Jm(e,t,n){if(n.length>=3&&Zm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[i>1?(a+1)%i:a],c=u-s,d=l-o,h=c*c+d*d,g=h===0?0:Math.max(0,Math.min(1,((e-s)*c+(t-o)*d)/h));r=Math.min(r,Math.hypot(e-(s+g*c),t-(o+g*d)))}return r}function z2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function B2(e,t,n){const[r,i]=e,a=t[0]-r,s=t[1]-i;if(a===0&&s===0)return!1;const[o,u,l,c]=n;let d=0,h=1;const g=[[-a,r-o],[a,l-r],[-s,i-u],[s,c-i]];for(const[m,y]of g){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?d=Math.max(d,w):h=Math.min(h,w),d>h)return!1}return d>=h?!1:d>=.1&&h<=.95||h-d>=.15}const Ts=e=>e.box[3]/Math.max(1,e.box[2]),Zt=e=>Ts(e)>I2,Hn=e=>Ts(e)>=R2||Ts(e)<=O2;function Is(e){const[t,n,r,i]=e.box;if(r>=i){const s=7*i;return[t,n-s,r,i+2*s]}const a=7*r;return[t-a,n,r+2*a,i]}function eg(e,t,n,r,i){const a=new Set(t),s=[...e.map((A,O)=>({box:[A[0],A[1],A[2],A[3]],kind:a.has(O)?"card":"tucked",src:["banner",O]})),...n.map((A,O)=>({box:[A[0],A[1],A[2],A[3]],kind:"wonder",src:["wonder",O]}))],o=e.map(()=>"player"),u=n.map(()=>"player");if(s.length===0)return{bannerOwner:o,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",nearestOwner:()=>"player",pointInside:()=>"none"};const l=s.map(A=>[A.box[0]+A.box[2]/2,A.box[1]+A.box[3]/2]);let c=s.filter(A=>A.kind!=="wonder").map(A=>Math.hypot(A.box[2],A.box[3])).sort((A,O)=>A-O);c.length===0&&(c=s.map(A=>Math.hypot(A.box[2],A.box[3])).sort((A,O)=>A-O));const d=c[Math.floor(c.length/2)],h=(T2*d)**2,g=s.map((A,O)=>O),m=A=>{let O=A;for(;g[O]!==O;)g[O]=g[g[O]],O=g[O];return O},y=s.map((A,O)=>A.kind==="card"?O:-1).filter(A=>A>=0),w=s.map((A,O)=>A.kind!=="card"?O:-1).filter(A=>A>=0);for(let A=0;A<y.length;A+=1)for(let O=A+1;O<y.length;O+=1){const P=y[A],B=y[O],V=s[P],Z=s[B];if(Hn(V)&&Hn(Z)&&Zt(V)!==Zt(Z))continue;const J=l[P][0]-l[B][0],ie=l[P][1]-l[B][1],pe=J*J+ie*ie;let $e=pe<=h;!$e&&Hn(V)&&Hn(Z)&&Zt(V)===Zt(Z)&&pe<=(4*d)**2&&($e=ii(Is(V),Is(Z))<=.5*d),$e&&(g[m(P)]=m(B))}for(let A=0;A<w.length;A+=1)for(let O=A+1;O<w.length;O+=1){const P=w[A],B=w[O];ii(s[P].box,s[B].box)<=k2*d&&(g[m(P)]=m(B))}const b=new Map;for(const A of w){const O=m(A);b.set(O,[...b.get(O)??[],A])}const x=new Map;for(const A of y){const O=m(A);x.set(O,[...x.get(O)??[],A])}for(const A of b.values()){const O=A.filter(J=>s[J].kind==="wonder"&&Hn(s[J])).map(J=>Zt(s[J])),P=O.length>0?O.filter(Boolean).length*2>O.length:null;let B=[];const V=[];for(const[J,ie]of x){let pe=Number.POSITIVE_INFINITY;for(const ze of A)for(const Q of ie)pe=Math.min(pe,ii(s[ze].box,s[Q].box));if(pe>A2*d)continue;const Ee=ie.filter(ze=>Zt(s[ze])).length/ie.length>=.5;V.push([J,pe,Ee]),!(P!==null&&Ee!==P)&&B.push([J,pe,Ee])}if(B.length===0&&V.length===1&&(B=V),B.length===0)continue;const Z=new Set(B.map(J=>J[2]));if(B.length>=2&&Z.size===1&&P!==null){const J=B[0][0];for(const[ie]of B.slice(1))g[m(ie)]=m(J);g[m(A[0])]=m(J)}else{const J=B.reduce((ie,pe)=>pe[1]<ie[1]?pe:ie);g[m(A[0])]=m(J[0])}}let T=new Map;for(let A=0;A<s.length;A+=1){const O=m(A);T.set(O,[...T.get(O)??[],A])}const S=s.map((A,O)=>A.kind==="wonder"?O:-1).filter(A=>A>=0);if(S.length>0){const A=(P,B)=>{const[V,Z,J,ie]=Is(s[P]),[pe,$e,Ee,ze]=s[B].box,Q=Math.max(0,Math.min(V+J,pe+Ee)-Math.max(V,pe)),X=Math.max(0,Math.min(Z+ie,$e+ze)-Math.max(Z,$e));return Q*X>=.9*s[P].box[2]*s[P].box[3]},O=new Map;for(let P=0;P<s.length;P+=1)if(!(s[P].kind!=="card"||!Hn(s[P])))for(const B of S){const V=ii(s[P].box,s[B].box);if(V<=.8*d&&Zt(s[P])!==Zt(s[B])&&A(P,B)){const Z=O.get(B);(!Z||V<Z[1])&&O.set(B,[P,V])}}for(const[P,[B]]of O){const V=m(P);for(const[Z,J]of T){const ie=J.indexOf(B);if(ie>=0&&Z!==V){J.splice(ie,1),T.set(V,[...T.get(V)??[],B]),s[B].kind="tucked";break}}}T=new Map([...T].filter(([,P])=>P.length>0))}const E=A=>A.filter(O=>s[O].kind==="card").length,M=A=>{const O=A.filter(P=>s[P].kind==="card"||s[P].kind==="wonder");return O.length===0?null:O.filter(P=>Zt(s[P])).length/O.length},C=A=>[A.reduce((O,P)=>O+l[P][0],0)/A.length,A.reduce((O,P)=>O+l[P][1],0)/A.length],v=[i[0]/2,i[1]/2],R=[...T.values()].sort((A,O)=>{const P=E(A),B=E(O);if(P!==B)return B-P;const V=Math.hypot(C(A)[0]-v[0],C(A)[1]-v[1]),Z=Math.hypot(C(O)[0]-v[0],C(O)[1]-v[1]);return V-Z}),z=C(R[0]),K=M(R[0]),U=R.map((A,O)=>{if(O===0||E(A)<gr)return"player";const P=M(A),B=P!==null&&K!==null&&Math.abs(P-K)>=M2,V=C(A),Z=r.some(J=>B2(z,V,J));return B||Z?"opponent":"player"});if(!U.includes("opponent")){const A=V=>V.reduce((Z,J)=>Z+(s[J].kind==="wonder"?1:0),0),O=U.map((V,Z)=>Z).filter(V=>V>0&&E(R[V])>=gr),P=U.map((V,Z)=>Z).filter(V=>V>0&&E(R[V])<gr&&A(R[V])>=2);let B=[...O];if(O.length>0){const V=new Map([...O,...P].map(ie=>[ie,C(R[ie])])),Z=(ie,pe)=>(ie[0]-pe[0])**2+(ie[1]-pe[1])**2;if(!O.every((ie,pe)=>O.slice(pe+1).every($e=>Z(V.get(ie),V.get($e))<Math.min(Z(V.get(ie),z),Z(V.get($e),z)))))B=[];else for(const ie of P){let pe=0,$e=Z(V.get(ie),z);for(const Ee of O){const ze=Z(V.get(ie),V.get(Ee));ze<$e&&($e=ze,pe=Ee)}pe!==0&&B.push(ie)}}B.reduce((V,Z)=>V+A(R[Z]),0)<1&&(B=[]),B.length>0&&(E(R[0])<2*gr||B.reduce((V,Z)=>V+E(R[Z]),0)<2*gr)&&(B=[]);for(const V of B)U[V]="opponent"}const G=[],N=[];let W=!1;R.forEach((A,O)=>{const P=U[O];P==="opponent"&&(W=!0);const B=[],V=[];for(const Z of A){const[J,ie,pe,$e]=s[Z].box;B.push([J,ie],[J+pe,ie],[J,ie+$e],[J+pe,ie+$e]),V.push(s[Z].box);const[Ee,ze]=s[Z].src;Ee==="banner"?o[ze]=P:u[ze]=P}G.push([P,N2(B)]),N.push([P,V])});const j=(A,O,P)=>Math.min(...N[P][1].map(B=>z2(A,O,B))),ee=(A,O)=>G.map(([,P],B)=>P.length>=3&&Zm(A,O,P)?B:-1).filter(P=>P>=0),ce=(A,O)=>{if(G.length===0)return"player";const P=d>0?C2*d:Number.POSITIVE_INFINITY,B=ee(A,O);if(B.length>0){const J=B.reduce((ie,pe)=>j(A,O,pe)<j(A,O,ie)?pe:ie);return G[J][0]}let V=-1,Z=Number.POSITIVE_INFINITY;return G.forEach(([,J],ie)=>{const pe=Jm(A,O,J);pe<Z&&(V=ie,Z=pe)}),V>=0&&Z<=P?G[V][0]:"none"},L=(A,O)=>{if(G.length===0)return"none";const P=ee(A,O);if(P.length===0)return"none";const B=P.reduce((V,Z)=>j(A,O,Z)<j(A,O,V)?Z:V);return G[B][0]},ne=(A,O)=>{if(G.length===0)return"player";const P=ce(A,O);if(P!=="none")return P;let B=0,V=Number.POSITIVE_INFINITY;return G.forEach(([,Z],J)=>{const ie=Jm(A,O,Z);ie<V&&(B=J,V=ie)}),G[B][0]};return{bannerOwner:o,wonderOwner:u,opponentFound:W,hulls:G,hullBoxCounts:N.map(([,A])=>A.length),pointOwner:ce,pointInside:L,nearestOwner:ne}}const P2=3,D2=2;function U2(e,t=P2){const n=e.length,r=Array.from({length:n},(s,o)=>o),i=s=>{for(;r[s]!==s;)r[s]=r[r[s]],s=r[s];return s};for(let s=0;s<n;s+=1)for(let o=s+1;o<n;o+=1){const u=e[s],l=e[o],c=Number(u.center[0]),d=Number(u.center[1]),h=Number(l.center[0]),g=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![c,d,h,g,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(c-h,d-g)<=t*(m+y)&&(r[i(s)]=i(o))}const a=new Map;for(let s=0;s<n;s+=1){const o=i(s);a.has(o)||a.set(o,[]),a.get(o).push(s)}return[...a.values()]}function L2(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),s=Number(n[3]),o=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,s)-t,0,t-Math.max(i,s));return Math.hypot(o,u)}function Ms(e,t,n,r){const i=new Set(e.filter(s=>t.pointOwner(Number(s.center[0]),Number(s.center[1]))===n));if(i.size===0)return[];const a=[];for(const s of U2(e)){const o=s.map(y=>e[y]),u=o.filter(y=>i.has(y));if(u.length===0)continue;let l=0,c=0,d=0;for(const y of o){const w=Number(y.center[0]),b=Number(y.center[1]);c+=w,d+=b,t.pointInside(w,b)===n&&(l+=1)}const h=c/o.length,g=d/o.length,m=r&&r.length>0?Math.min(...r.map(y=>L2(h,g,y))):0;a.push({cle:[...s].sort((y,w)=>y-w).join(","),membres:o,miens:u,inside:l,dPiste:m,centre:[h,g],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return a}function tg(e){return e.membres.length>=D2?e.inside:0}function F2(e){return e.reduce((t,n)=>{const r=tg(t),i=tg(n),a=[r>0?1:0,r/t.membres.length,t.dPiste,t.valeur],s=[i>0?1:0,i/n.membres.length,n.dPiste,n.valeur];for(let o=0;o<4;o+=1){if(s[o]>a[o])return n;if(s[o]<a[o])return t}return t})}function G2(e,t,n,r){const[i,a]=e.centre,s={};for(const c of["player","opponent"]){const d=Ms(t,n,c,r).filter(h=>h.cle!==e.cle);s[c]=d.length===0?1/0:Math.min(...d.map(h=>Math.hypot(i-h.centre[0],a-h.centre[1])))}if(s.player!==s.opponent)return s.player>s.opponent?"player":"opponent";const o=c=>{const d=Ms(t,n,c,r).find(h=>h.cle===e.cle);return d?[d.inside,d.dPiste,d.valeur]:[-1,-1,-1]},u=o("player"),l=o("opponent");for(let c=0;c<3;c+=1){if(u[c]>l[c])return"player";if(u[c]<l[c])return"opponent"}return"player"}function W2(e,t,n){const r={player:[],opponent:[]},i={};for(const s of["player","opponent"]){const o=Ms(e,t,s,n);o.length>0&&(i[s]=F2(o))}const a=Object.keys(i);if(a.length===0)return r;if(a.length===2&&i.player.cle===i.opponent.cle){const s=G2(i.player,e,t,n);return r[s]=i[s].membres,r}for(const s of a)r[s]=i[s].membres;return r}function q2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{return W2(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const V2=1280,H2=80,j2=3,K2=3,Y2=.3,X2=2.4,Q2=1,Z2=5.2,J2=5;function Cs(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function e$(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=Y2&&r/n<=X2&&i/n>=Q2&&i/n<=Z2&&i/r<=J2}function t$(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*V2/r<H2}function n$(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(o=>o[0]),a=r.poly.map(o=>o[1]),s=Math.max(1,i.length);return{hull:r,cx:i.reduce((o,u)=>o+u,0)/s,cy:a.reduce((o,u)=>o+u,0)/s,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),s=Number(r[2]),o=Number(r[3]);if(![i,a,s,o].every(Number.isFinite))continue;const u=i+s/2,l=a+o/2;let c=n[0],d=1/0;for(const h of n){const g=(u-h.cx)**2+(l-h.cy)**2;g<d&&(d=g,c=h)}c.extra.push([i,a],[i+s,a+o])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function r$(e,t,n,r,i=[]){const a=Cs(n);if(!t$(e,t,a))return[];const s=r.filter(l=>l.n>=K2&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),o=Math.round(a*j2),u=[];for(const l of n$(s,i)){const c=l.poly.map(w=>w[0]),d=l.poly.map(w=>w[1]);if(c.length===0)continue;const h=Math.max(0,Math.trunc(Math.min(...c))-o),g=Math.max(0,Math.trunc(Math.min(...d))-o),m=Math.min(e,Math.trunc(Math.max(...c))+o),y=Math.min(t,Math.trunc(Math.max(...d))+o);m>h&&y>g&&u.push([h,g,m,y])}return u}function i$(e,t,n){if(!e||e.length<4)return null;const[r,i,a,s]=[e[0],e[1],e[2],e[3]];return e$(a,s,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(s)]:null}const a$=1.1,s$=3.2,o$=20,u$=.5,l$=1280,c$=.18,ng=28,d$=.6,p$=.3;function h$(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let s=0;s<30;s++){const o=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(o.length===0||u.length===0)return[e.map((c,d)=>d)];const l=(o.reduce((c,d)=>c+d,0)/o.length+u.reduce((c,d)=>c+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((s,o)=>(s<=r?i:a).push(o)),[i,a]}function f$(e,t,n=a$){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),s=e.map(l=>l[1]+l[3]/2),o=Math.max(...a)-Math.min(...a)>Math.max(...s)-Math.min(...s)?a:s,u=[];for(const l of h$(o)){if(l.length===0)continue;const c=l.map(R=>e[R]),d=c.map(R=>Math.min(R[2],R[3])).sort((R,z)=>R-z),h=d[Math.trunc(d.length/2)],g=s$*h,m=Math.max(0,Math.min(...c.map(R=>R[0]))-g),y=Math.max(0,Math.min(...c.map(R=>R[1]))-g),w=Math.min(r,Math.max(...c.map(R=>R[0]+R[2]))+g),b=Math.min(i,Math.max(...c.map(R=>R[1]+R[3]))+g),x=Math.max(w-m,b-y);if(x<=0)continue;const T=u$*h*l$/x,S=T>0?Math.max(1,Math.ceil(o$/T)):1;if(S===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const E=w-m>=b-y,C=(E?w-m:b-y)/S,v=C*(1+c$);for(let R=0;R<S;R++){let z=(E?m:y)+R*C-(v-C)/2;z=Math.max(E?m:y,z);const K=Math.min(E?w:b,z+v);u.push(E?[Math.trunc(z),Math.trunc(y),Math.trunc(K),Math.trunc(b)]:[Math.trunc(m),Math.trunc(z),Math.trunc(w),Math.trunc(K)])}}return u.filter(([l,c,d,h])=>Math.max(r,i)/Math.max(1,Math.max(d-l,h-c))>=n)}function m$(e,t,n,r=ng){const[i,a]=n,s=e;for(const[o,u,l,c]of t){const d=(o+l)/2+i,h=(u+c)/2+a,g=Math.min(l-o,c-u);s.some(([y,w,b,x])=>{const T=d-(y+b)/2,S=h-(w+x)/2,E=Math.min(b-y,x-w),M=g>0&&E>0?Math.min(r,d$*Math.min(g,E)):r;return Math.hypot(T,S)<=M})||s.push([o+i,u+a,l+i,c+a])}return s}async function g$(e,t,n=ng){const r=[];for(let i=0;i<e.length;i++){const a=e[i],s=[];for(const o of a.boxes)await t(o,i)||s.push([o[0],o[1],o[2],o[3]]);m$(r,s,a.offset,n)}return r}function y$(e,t,n,r=p$){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function w$(e,t,n){return n.some(([r,i,a,s])=>r<=e&&e<=a&&i<=t&&t<=s)}function _$(e,t,n,r){return n.length===0?!1:w$(e,t,n)&&!y$(e,t,r)}const rg=4,ig=8,ai=5,An="base-game rule";function Dt(e,t){return{code:e,message:t,severity:"warning"}}function ks(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function b$(e,t=""){const n=e.filter(s=>!!s),r=t||"a player",i=[];n.length>rg&&i.push(Dt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${rg} (${An}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=ks(n);return a.length>0&&i.push(Dt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${An}), so one of the two readings is wrong.`)),i}function $$(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(s=>!!s))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>ig&&t.push(Dt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${ig} are in play (${An}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,s]=n[i];for(let o=i+1;o<n.length;o++){const[u,l]=n[o],c=[...s].filter(d=>l.has(d)).sort();c.length>0&&t.push(Dt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function x$(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(s=>!!s));r.length>ai&&n.push(Dt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ai} are in play (${An}) — reserve tokens sitting on the board were probably counted as owned.`));const i=ks(r);if(i.length>0&&n.push(Dt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${An}).`)),t!==null){const a=t.filter(Boolean),s=r.length+a.length;s!==ai&&n.push(Dt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${s}, but exactly ${ai} are in play (${An}) — one is missing or one was counted twice.`));const o=new Set(a),u=[...new Set(r.filter(l=>o.has(l)))].sort();u.length>0&&n.push(Dt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function v$(e,t=""){const n=t||"a player",r=[],i=e.filter(s=>!s).length;i>0&&r.push(Dt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=ks(e.filter(s=>!!s));return a.length>0&&r.push(Dt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${An}).`)),r}const S$=.25,E$=.45;function T$(e,t,n,r,i){const a=Math.cos(i),s=Math.sin(i),o=[n/2*a,n/2*s],u=[-r/2*s,r/2*a],c=[...[[e+o[0]+u[0],t+o[1]+u[1]],[e+o[0]-u[0],t+o[1]-u[1]],[e-o[0]-u[0],t-o[1]-u[1]],[e-o[0]+u[0],t-o[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function As(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function ag(e,t){const n=As(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function I$(e,t,n){const r=As(e,t),i=As(e,n),a=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,a,!0))}finally{r.delete(),i.delete(),a.delete()}}function M$(e,t,n=E$){const r=[...t].sort((a,s)=>s.confidence-a.confidence),i=[];for(const a of r){let s=!1;for(const o of i){const u=I$(e,a.quad,o.quad);if(u<=0)continue;const l=ag(e,a.quad)+ag(e,o.quad)-u;if(u/Math.max(1e-6,l)>=n){s=!0;break}}s||i.push(a)}return i}function C$(e,t,n,r,i=S$){const a=[];for(let s=0;s<n;s++){const o=t[4*n+s];if(o<i)continue;const l=T$(t[s],t[n+s],t[2*n+s],t[3*n+s],t[5*n+s]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);a.push({quad:l,confidence:o})}return M$(e,a)}const k$=128,A$=88;function R$(e,t,n,r=k$,i=A$){const a=new e.Mat(t.height,t.width,e.CV_8UC3),s=a.data,o=t.channels;for(let h=0,g=t.width*t.height;h<g;h++)s[h*3]=t.data[h*o],s[h*3+1]=t.data[h*o+1],s[h*3+2]=t.data[h*o+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(h=>[h[0],h[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),d=new e.Mat;try{return e.warpPerspective(a,d,c,new e.Size(r,i)),{data:new Uint8Array(d.data),width:r,height:i,channels:3}}finally{a.delete(),u.delete(),l.delete(),c.delete(),d.delete()}}function O$(e,t){const n=(Math.trunc(t)%4+4)%4;return[0,1,2,3].map(r=>e[(r-n+4)%4])}const N$=[.05634,.11216,.16849,.22436,.28022,.33392,.39134,.44551,.50148,.55744,.61316,.66823,.72368,.77827,.83382,.88871,.94369],sg={g:.41754,d:.58658,pliure:.50148},z$=.25,B$=.25,P$=9;function D$(e,t){const n=[0,1,2].map(a=>[0,1,2].map(s=>e.reduce((o,u)=>o+u[a]*u[s],0))),r=[0,1,2].map(a=>e.reduce((s,o,u)=>s+o[a]*t[u],0));for(let a=0;a<3;a++){let s=a;for(let o=a+1;o<3;o++)Math.abs(n[o][a])>Math.abs(n[s][a])&&(s=o);if(Math.abs(n[s][a])<1e-300)return null;[n[a],n[s]]=[n[s],n[a]],[r[a],r[s]]=[r[s],r[a]];for(let o=a+1;o<3;o++){const u=n[o][a]/n[a][a];for(let l=a;l<3;l++)n[o][l]=n[o][l]-u*n[a][l];r[o]=r[o]-u*r[a]}}const i=[0,0,0];for(let a=2;a>=0;a--){let s=r[a];for(let o=a+1;o<3;o++)s-=n[a][o]*i[o];i[a]=s/n[a][a]}return i}function U$(e,t,n,r){try{const i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1]));if(!(i>0))return null;const a=(n[0]-t[0])/i,s=(n[1]-t[1])/i,o=(y,w)=>((y-t[0])*a+(w-t[1])*s)/i,u=new Map,l=[["g","laurier2",-1.5],["d","laurier2",1.5],["pliure","pliure",0]];for(const[y,w,b]of l){let x=null;for(const[T,S,E]of r[w]??[]){const M=o(T,S);E>=z$&&Math.abs(M-(b+9)/18)<=1/18&&(x===null||E>x[0]||E===x[0]&&M>x[1])&&(x=[E,M])}x!==null&&u.set(y,x[1])}const c=[...u.keys()];let d=null;for(;c.length>0;){const y=[0,1,...c.map(v=>sg[v])],w=[0,1,...c.map(v=>u.get(v))],b=D$(y.map((v,R)=>[v,1,-v*w[R]]),w);if(b===null){d=null;break}const[x,T,S]=b,E=v=>(x*v+T)/(S*v+1);d=E;let M=c[0],C=-1;for(const v of c){const R=Math.abs(E(sg[v])-u.get(v))*18;R>C&&(M=v,C=R)}if(C<=B$||c.length===1)break;c.splice(c.indexOf(M),1),d=null}const h=[0,...N$.map((y,w)=>d!==null?d(y):(w-8+9)/18),1],g=o(e[0],e[1]);let m=0;for(let y=1;y<h.length;y++)Math.abs(h[y]-g)<Math.abs(h[m]-g)&&(m=y);return m-P$}catch{return null}}const L$=320,F$=2,G$=.25,W$=50,og=[.5,2];function q$(e,t){if(e.length!==4||t.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;const n=u=>{let l=0;for(let c=0;c<4;c++){const[d,h]=u[c],[g,m]=u[(c+1)%4];l+=d*m-g*h}return Math.abs(l/2)},r=n(t),i=n(e)/r;if(!(r>0&&i>=og[0]&&i<=og[1]))return!1;const a=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=xm&&o<=vm}function V$(e,t){const n=L$,r=st(n*t.height/t.width),i=ct(e,t),a=new e.Mat,s=new e.Mat,o=new e.Mat;try{e.cvtColor(i,a,e.COLOR_RGB2GRAY),e.resize(a,s,new e.Size(n,r),0,0,e.INTER_AREA),s.convertTo(o,e.CV_32F)}finally{i.delete(),a.delete(),s.delete()}return{mat:o,w:n,h:r}}function H$(e,t,n,r,i,a){const s=i-n,o=a-r,u=new e.Mat(o,s,e.CV_8UC3),l=u.data,c=t.channels;for(let h=0;h<o;h++){let g=((r+h)*t.width+n)*c,m=h*s*3;for(let y=0;y<s;y++,g+=c,m+=3)l[m]=t.data[g],l[m+1]=t.data[g+1],l[m+2]=t.data[g+2]}const d=new e.Mat;return e.cvtColor(u,d,e.COLOR_RGB2GRAY),u.delete(),d}function ug(e,t){const n=[];for(let r=0;r<3;r++)for(let i=0;i<3;i++)n.push(e[r*3]*t[i]+e[r*3+1]*t[3+i]+e[r*3+2]*t[6+i]);return n}function j$(e,t,n){let r=e[6]*t+e[7]*n+e[8];return Math.abs(r)<=11920928955078125e-23?[0,0]:(r=1/r,[Math.fround((e[0]*t+e[1]*n+e[2])*r),Math.fround((e[3]*t+e[4]*n+e[5])*r)])}function K$(e,t,n,r){const{w:i,h:a}=r,s=n.map(([y,w])=>[Math.fround(y),Math.fround(w)]);let o=Math.floor(Math.min(...s.map(y=>y[0]))),u=Math.floor(Math.min(...s.map(y=>y[1]))),l=Math.ceil(Math.max(...s.map(y=>y[0]))),c=Math.ceil(Math.max(...s.map(y=>y[1])));const d=Math.trunc(.1*Math.max(l-o,c-u));if(o=Math.max(0,o-d),u=Math.max(0,u-d),l=Math.min(t.width,l+d),c=Math.min(t.height,c+d),l-o<2||c-u<2)return null;const h=Math.min(1,2*i/Math.max(1,l-o)),g=[],m=y=>(g.push(y),y);try{const y=m(e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a])),w=m(e.matFromArray(4,1,e.CV_32FC2,s.flatMap(U=>[U[0],U[1]]))),b=[...m(e.getPerspectiveTransform(y,w)).data64F];let x=m(H$(e,t,o,u,l,c));if(h<1){const U=m(new e.Mat);e.resize(x,U,new e.Size(0,0),h,h,e.INTER_AREA),x=U}const T=[h,0,-h*o,0,h,-h*u,0,0,1],S=m(e.matFromArray(3,3,e.CV_64F,ug(T,b))),E=m(new e.Mat);e.warpPerspective(x,E,S,new e.Size(i,a),e.INTER_LINEAR|e.WARP_INVERSE_MAP);const M=m(new e.Mat);E.convertTo(M,e.CV_32F);const C=m(e.Mat.eye(3,3,e.CV_32F)),v=new e.TermCriteria(e.TermCriteria_COUNT+e.TermCriteria_EPS,W$,1e-6);let R;try{R=e.findTransformECC(r.mat,M,C,e.MOTION_HOMOGRAPHY,v,m(new e.Mat),5)}catch{return null}const z=ug(b,[...C.data32F]);return{quad:[[0,0],[i,0],[i,a],[0,a]].map(([U,G])=>j$(z,U,G)),cc:R}}finally{for(const y of g)try{y.delete()}catch{}}}function Y$(e,t,n,r){let i=null;try{return i=V$(e,n),X$(e,t,i,r)}catch{return null}finally{i==null||i.mat.delete()}}function X$(e,t,n,r){try{if(r.length!==4)return null;const i=r.map(([u,l])=>[Math.fround(u),Math.fround(l)]),a=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(!(a>0))return null;let s=i,o=!1;for(let u=0;u<F$;u++){const l=K$(e,t,s,n);if(l===null)break;const c=l.quad,d=Math.max(...c.map(([h,g],m)=>Math.hypot(h-i[m][0],g-i[m][1])));if(!q$(c,i)||d/a>G$||l.cc<Mm)break;s=c,o=!0}return o?s:null}catch{return null}}const Q$=.8;function Z$(e){const{data:t,channels:n}=e,r=e.width*e.height;if(r===0||t.length<r*n)return null;let i=0,a=0,s=0;for(let o=0;o<r*n;o+=n)i+=t[o],a+=t[o+1],s+=t[o+2];return i/=r,a/=r,s/=r,{rapport:a/Math.max(1,Math.min(i,s)),r:i,g:a,b:s}}function J$(e){const t=Z$(e);return t===null||t.rapport>=Q$?null:`éclairage coloré détecté (vert ${t.g.toFixed(0)} contre rouge ${t.r.toFixed(0)} et bleu ${t.b.toFixed(0)}) : sous une lumière LED colorée, les lauriers, les bannières et les merveilles ne sont plus reconnus correctement — les comptes ET les couleurs des cartes peuvent être faux. Reprends la photo en lumière blanche.`}const ex=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],tx=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],nx=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],rx=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],ix=[...tx,...nx,...rx,...ex];Object.fromEntries(ix.map(e=>[e.id,e]));const ax=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const lg=.2,sx=.3,cg=.25,Rs={total:0,idDiff:0,verdictDiff:0},Ut={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},si={total:0,memeK:0,memeKInverse:0,detail:[]},ox=!0;function ux(e,t,n){for(const r of e){let i=!1;for(let a=0,s=r.length-1;a<r.length;s=a++){const o=r[a],u=r[s];o[1]>n!=u[1]>n&&t<(u[0]-o[0])*(n-o[1])/(u[1]-o[1])+o[0]&&(i=!i)}if(i)return r.map(a=>[a[0],a[1]])}return null}function lx(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=cg)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const c=o[2]/o[3];if(!(Math.abs(Math.log(c))<=cg)&&r>1==c>1)return!0}return!1}async function cx(e,t,n,r,i=[0,1,2,3]){const[a,s,o,u]=t;if(o<=0||u<=0)return null;const l=Math.round(o*lg),c=Math.round(u*lg),d=Math.max(0,Math.round(a-l)),h=Math.max(0,Math.round(s-c)),g=Math.min(e.width,Math.round(a+o+l)),m=Math.min(e.height,Math.round(s+u+c)),y=g-d,w=m-h;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let E=0;E<w;E++){const M=((h+E)*e.width+d)*b;x.set(e.data.subarray(M,M+y*b),E*y*b)}const T={width:y,height:w,channels:b,data:x};let S=null;for(const E of i){const M=E===0?T:Xt(T,E),C=M.width,v=C-Math.floor(sx*C),R=C-v;if(R<=0)continue;const z=new Uint8ClampedArray(R*M.height*M.channels);for(let W=0;W<M.height;W++){const j=(W*C+v)*M.channels;z.set(M.data.subarray(j,j+R*M.channels),W*R*M.channels)}const K={width:R,height:M.height,channels:M.channels,data:z},U=Zr(K),N=(await n.run({[n.inputNames[0]]:new De("float32",U,[1,3,yt,yt])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=N),S=S===null?N:Math.max(S,N)}return S}async function dx(e,t,n,r,i,a,s=[],o){var w;const u=async b=>(await r.run({[r.inputNames[0]]:new De("float32",b,[1,3,Qt,Qt])}))[r.outputNames[0]].data,l=e.obbQuads===void 0?null:await et("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(b){return console.warn("[wonders-obb] détection échouée, repli ORB :",b),null}});o!==void 0&&(o.n=l===null?0:l.length);const c=l===null?[]:l.map(b=>{const x=b.map(([M])=>M),T=b.map(([,M])=>M),S=Math.min(...x),E=Math.min(...T);return[Math.round(S),Math.round(E),Math.round(Math.max(...x)-S),Math.round(Math.max(...T)-E)]}),d=s.length===0?c:c.filter(([b,x,T,S])=>{const E=b+T/2,M=x+S/2;return!s.some(C=>{const v=C.x+C.width/2,R=C.y+C.height/2,z=.5*Math.min(C.width,C.height);return(E-v)**2+(M-R)**2<z*z})}),h=new Map;for(const b of d){const[x,T,S,E]=b;if(S<=0||E<=0)continue;const M=l===null?null:ux(l,x+S/2,T+E/2);if(M===null||e.redresserQuad===void 0)continue;let C=M;const v=at("identify: redressement du quad",()=>e.redresserQuad(n,C)),R=Wm(),{id:z,prob:K,decalage:U}=await et("classifieur merveille (1 lecture)",()=>V1(v,u));if(z===""||K<R)continue;U&&(C=O$(C,U).map(N=>[N[0],N[1]]));const G=h.get(z);(G===void 0||K>G.prob)&&h.set(z,{prob:K,box:b,quad:C})}const g=[],m=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[b,{prob:x,box:T,quad:S}]of h){const[E,M,C,v]=T;let R={x:Math.round(E),y:Math.round(M),width:Math.round(C),height:Math.round(v)},z=null,K=[],U=null;if(S!==null){z=S;const O=z.map(Z=>Z[0]),P=z.map(Z=>Z[1]),B=Math.max(0,Math.round(Math.min(...O))),V=Math.max(0,Math.round(Math.min(...P)));if(R={x:B,y:V,width:Math.min(n.width,Math.round(Math.max(...O)))-B,height:Math.min(n.height,Math.round(Math.max(...P)))-V},m!==null)try{const Z=await e.wonderRef(b),J=z,ie=Z===null||J===null?null:at("identify: bande droite #63",()=>$s(t,n,Z,J));if(ie!==null){const pe=at("identify: preprocess tuck",()=>Zr(ie)),$e=await m.run({[m.inputNames[0]]:new De("float32",pe,[1,3,yt,yt])});if(U=xs($e[m.outputNames[0]].data).prob,e.merveilleEcc===!0&&Z!==null&&J!==null){const Ee=at("identify: ECC recalage du quad",()=>Y$(t,n,Z,J));if(Ee!==null){const ze=await et("identify: ECC relecture WT",async()=>{const Q=$s(t,n,Z,Ee);if(Q===null)return null;const X=await m.run({[m.inputNames[0]]:new De("float32",Zr(Q),[1,3,yt,yt])});return xs(X[m.outputNames[0]].data).prob});ze!==null&&(U=ze)}}K=U>=kn?["R"]:[]}}catch{}}else if(Date.now()<i)try{const O=await et("chargement refs merveilles",()=>e.wonderRef(b));if(O!==null){const P=at("ORB registration (merveille)",()=>$b(t,n,O,T));if(P!==null){z=P.footprint,K=P.overflow;const B=z.map(ie=>ie[0]),V=z.map(ie=>ie[1]),Z=Math.max(0,Math.round(Math.min(...B))),J=Math.max(0,Math.round(Math.min(...V)));if(R={x:Z,y:J,width:Math.min(n.width,Math.round(Math.max(...B)))-Z,height:Math.min(n.height,Math.round(Math.max(...V)))-J},m!==null)try{const ie=z,pe=ie===null?null:at("identify: bande droite #63",()=>$s(t,n,O,ie));if(pe!==null){const $e=at("identify: preprocess tuck",()=>Zr(pe)),Ee=await m.run({[m.inputNames[0]]:new De("float32",$e,[1,3,yt,yt])});U=xs(Ee[m.outputNames[0]].data).prob}}catch{}}}}catch(O){console.warn(`[wonders-cls] ${b} registration failed:`,O)}const G=z!==null?Cm(z,K):null,N=S!==null&&z!==null?Cm(z,["R"]):null,W=[];if(U!==null&&W.push(U>=kn?1:0),y!==null)try{let O=[0,1,2,3];if(S!==null){const V=S[1][1]-S[0][1],Z=S[1][0]-S[0][0],J=(Math.round(Math.atan2(V,Z)*180/Math.PI/90)%4+4)%4;O=[(0+J)%4,(2+J)%4]}const P=[0,0,0,0],B=await et("identify: sonde marges (#68)",()=>cx(n,T,y,P,O));if(B!==null&&(W.push(B>=kn?1:0),S!==null)){const V=S[1][1]-S[0][1],Z=S[1][0]-S[0][0],J=(Math.round(Math.atan2(V,Z)*180/Math.PI/90)%4+4)%4,ie=Math.max(P[(0+J)%4],P[(2+J)%4]);Ut.total+=1;const pe=B>=kn?1:0,$e=ie>=kn?1:0;pe===1&&(Ut.positifs4+=1),$e===1&&(Ut.positifs2+=1),pe!==$e&&(Ut.divergent+=1,Ut.detail.push(`${b.slice(0,12)}:v4=${pe}/v2=${$e} p=[${P.map(Ee=>Ee.toFixed(2)).join(",")}]kQ${J}`))}}catch{}const j=N??G??R,ee=a.some(O=>{const P=O.box[0]+O.box[2]/2,B=O.box[1]+O.box[3]/2;return P>=j.x&&P<=j.x+j.width&&B>=j.y&&B<=j.y+j.height});W.push(ee?1:0);let ce=Eb(U,W);ce&&lx(j,R,a)&&(ce=!1);const L=G??(ce&&N!==null?N:null),ne={id:b,name:((w=ax[b])==null?void 0:w.name)??b,builtWithCardUnderneath:ce,boundingBox:R,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},A=L??R;g.push({obj:ne,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height},quad:z,region:L})}return g}const dg="pawn_ends_brut.onnx";function px(e,t,n){if(t===n)return e;const r=`${t}: `;return e.message.startsWith(r)?{...e,message:`${n}: ${e.message.slice(r.length)}`}:e}const tt="/7wd-scorer/models/",Os=[];let Mt=null;function hx(){Os.length=0,Mt=null}function fx(e){const t=performance.now();Mt!==null&&Os.push({nom:Mt.nom,ms:Math.round(t-Mt.debut)}),Mt={nom:e,debut:t}}function pg(){const e=[...Os];Mt!==null&&e.push({nom:`${Mt.nom} (en cours)`,ms:Math.round(performance.now()-Mt.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function hg(){const e={};for(const t of Object.keys(Xe))e[Xe[t].onnx]=ui.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of dt)e[t]=n;return e}function mx(){var e,t;return Ns(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:Ne.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let fg=!1;const oi=new Map;function Ns(){var e;fg||(Ne.wasm.wasmPaths="/7wd-scorer/ort/",Ne.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,fg=!0)}const ui=new Set;let zs=0;function mg(e){return zs+=1,e.finally(()=>{zs-=1})}function gx(){return zs>0}function yx(e){Ns();let t=oi.get(e);return t===void 0&&(t=mg(et(`session: 1er chargement ${Xe[e].onnx}`,()=>Ir.create(`${tt}${Xe[e].onnx}`,{executionProviders:ui.has(e)?["wasm"]:["webgpu","wasm"]}))),oi.set(e,t),t.catch(()=>oi.delete(e))),t}const dt=new Map;let yr=0,wr=0;const li=new Map;function Bs(e){const t=(Mt==null?void 0:Mt.nom)??"(hors etage)";li.set(t,(li.get(t)??0)+e)}function wx(){return[...li.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let Ps=0;function _x(){return{ms:Math.round(yr),appels:wr,preparationMs:Math.round(Ps)}}function bx(){yr=0,wr=0,Ps=0,Lw(),li.clear(),nv()}const gg=new Set(["coin_yolo.onnx","token_yolo.onnx"]),Ds=new Set;let Us=null;async function $x(e){if(Us)return await Us.catch(()=>{}),e();const t=e();return Us=t.catch(()=>{}),t}async function Ls(e,t){return $x(()=>Ir.create(`${tt}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function mt(e){return mg(et(`session: 1er chargement ${e}`,()=>xx(e)))}async function xx(e){Ns();const t=!gg.has(e)&&!Ds.has(e);let n=null;if(t)try{n=await Ls(e,!0),dt.set(e,"webgpu")}catch(s){Ds.add(e),dt.set(e,`wasm (webgpu refuse a la creation: ${String(s).slice(0,60)})`)}else dt.set(e,gg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Ls(e,!1)}catch(s){return dt.set(e,`ECHEC wasm: ${String(s).slice(0,160)}`),null}let r=n,i=dt.get(e)==="webgpu";const a=async(s,...o)=>{const u=performance.now();try{const l=await r.run(s,...o),c=performance.now()-u;return yr+=c,Bs(c),wr+=1,l}catch(l){if(!i)throw l;Ds.add(e),dt.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Ls(e,!1);const c=await r.run(s,...o),d=performance.now()-u;return yr+=d,Bs(d),wr+=1,c}};return new Proxy(r,{get(s,o,u){if(o==="run")return a;const l=Reflect.get(r,o,u);return typeof l=="function"?l.bind(r):l}})}let Fs=null,Gs=null;const vx=.65,Sx=3e4;let Ws=null;function qs(){return Ws===null&&(Ws=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Ws}const yg=new Map;function Vs(e){let t=yg.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${tt}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),yg.set(e,t)),t}function Ex(e){return Vs(`wonder-refs/${e}.jpg`)}const wg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Tx(){const e=new Map;for(const t of wg){const n=await Vs(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function Ix(){const e=new Map;for(const t of wg){const n=await Vs(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}function _g(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(d,h)=>i===1?[h,r-1-d]:i===2?[n-1-d,r-1-h]:[n-1-h,d],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(d=>d[0]),u=s.map(d=>d[1]),l=Math.min(...o),c=Math.min(...u);return{x:l,y:c,width:Math.max(...o)-l,height:Math.max(...u)-c}}function Mx(){return Gs===null&&(Gs=fetch(`${tt}laurel_gallery.json`).then(async e=>e.ok?Z_(await e.json()):[]).catch(()=>[])),Gs}function Cx(e,t,n,r){return at("crop",()=>kx(e,t,n,r))}function kx(e,t,n,r){return cn(e,t-r,n-r,2*r,2*r)}function cn(e,t,n,r,i){return at("crop",()=>Ax(e,t,n,r,i))}function Ax(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),c=Math.max(0,u-s),d=new Uint8Array(l*c*3);for(let h=0;h<c;h++)for(let g=0;g<l;g++){const m=((h+s)*e.width+(g+a))*e.channels,y=(h*l+g)*3;d[y]=e.data[m],d[y+1]=e.data[m+1],d[y+2]=e.data[m+2]}return{width:l,height:c,channels:3,data:d}}function Rx(){return Fs===null&&(Fs=fetch(`${tt}token_templates.json`).then(async e=>e.ok?$1(await e.json()):new Map).catch(()=>new Map)),Fs}let Hs=null;function js(){return Hs===null&&(Hs=(async()=>{try{const e=await fetch(`${tt}token_classifier_classes.json`);if(!e.ok)return null;const t=k1(await e.json()),n=await mt("token_classifier.onnx");return n===null?null:{session:n,fiche:t}}catch{return null}})()),Hs}let Ks=null;function Ys(){return Ks===null&&(Ks=(async()=>{try{return(await fetch(`${tt}guild_classifier.onnx`,{method:"HEAD"})).ok?await mt("guild_classifier.onnx"):null}catch{return null}})()),Ks}let Xs=null;function Qs(){return Xs===null&&(Xs=(async()=>{try{return(await fetch(`${tt}laurel_digit.onnx`,{method:"HEAD"})).ok?await mt("laurel_digit.onnx"):null}catch{return null}})()),Xs}let Zs=null,Js=null;function eo(){return Js===null&&(Js=(async()=>{try{return(await fetch(`${tt}banner_class.onnx`,{method:"HEAD"})).ok?await mt("banner_class.onnx"):null}catch{return null}})()),Js}const Ox=.7;function Nx(e,t){const[n,r,i,a]=e,[s,o,u,l]=t;if(i<=0||a<=0||u<=0||l<=0)return!1;const c=Math.max(0,Math.min(n+i,s+u)-Math.max(n,s)),d=Math.max(0,Math.min(r+a,o+l)-Math.max(r,o));return c*d>=Ox*Math.max(1,Math.min(i*a,u*l))}async function bg(e,t,n){if(t.length===0)return t;const r=await eo();if(r===null)return t;const i=[];for(const a of t)try{const s=n2(a.box,e.width,e.height);if(s===null){i.push(a);continue}const o=cn(e,s.x,s.y,s.w,s.h),u=r2(o),l=await r.run({[r.inputNames[0]]:new De("float32",u,[1,3,ln,ln])}),c=i2(l[r.outputNames[0]].data);if(c.rejected)n==null||n.push({box:a.box,className:c.className});else{const d=a;if(d.color===null||d.color===void 0){const h=c.bestColour;i.push({...d,color:h,family:hm[h]})}else i.push(a2(d,c))}}catch{i.push(a)}return i}function to(){return Zs===null&&(Zs=(async()=>{try{return(await fetch(`${tt}laurel_filter.onnx`,{method:"HEAD"})).ok?await mt("laurel_filter.onnx"):null}catch{return null}})()),Zs}async function zx(e,t,n){let[r,i,a,s]=t,o=a-r,u=s-i;if(o<=0||u<=0)return null;if(o<Vn){const w=Math.floor((r+a)/2);r=w-Math.floor(Vn/2),a=w+Math.floor(Vn/2),o=a-r}if(u<Vn){const w=Math.floor((i+s)/2);i=w-Math.floor(Vn/2),s=w+Math.floor(Vn/2),u=s-i}const l=Math.trunc(Hm*o),c=Math.trunc(Hm*u),d=Math.max(0,r-l),h=Math.max(0,i-c),g=Math.min(e.width,a+l),m=Math.min(e.height,s+c),y=cn(e,d,h,g-d,m-h);if(y.width<=0||y.height<=0)return null;try{const w=J1(y),b=await n.run({[n.inputNames[0]]:new De("float32",w,[1,3,un,un])});return e2(b[n.outputNames[0]].data)}catch{return null}}let no=null;function ro(){return no===null&&(no=(async()=>{try{return(await fetch(`${tt}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await mt("coin_filter_cnn.onnx"):null}catch{return null}})()),no}let io=null;function ao(){return io===null&&(io=(async()=>{try{return(await fetch(`${tt}coin_denom.onnx`,{method:"HEAD"})).ok?await mt("coin_denom.onnx"):null}catch{return null}})()),io}async function Bx(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Qm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*wt*wt);r.forEach((u,l)=>i.set(u,l*u.length));const s=(await n.run({[n.inputNames[0]]:new De("float32",i,[t.length,3,wt,wt])}))[n.outputNames[0]].data,o=ri.length;return t.map((u,l)=>S2(s.subarray(l*o,l*o+o)))}catch{return null}}async function Px(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let g=0;g<t.length;g++){const m=Qm(e,Math.round(t[g].cx),Math.round(t[g].cy),Math.round(u[g]));if(m===null)return null;l.push(m)}const c=new Float32Array(t.length*3*wt*wt);l.forEach((g,m)=>c.set(g,m*g.length));const h=(await n.run({[n.inputNames[0]]:new De("float32",c,[t.length,3,wt,wt])}))[n.outputNames[0]].data;return t.map((g,m)=>x2(h.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),s=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,o=Math.trunc(s);if(o>=8){const u=await r(t.map(()=>o));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let so=null;function oo(){return so===null&&(so=(async()=>{try{return(await fetch(`${tt}tuck_classifier.onnx`,{method:"HEAD"})).ok?await mt("tuck_classifier.onnx"):null}catch{return null}})()),so}const $g=.1;let uo=null;function ci(){return uo===null&&(uo=(async()=>{try{return(await fetch(`${tt}track_band_brut.onnx`,{method:"HEAD"})).ok?await mt("track_band_brut.onnx"):null}catch{return null}})()),uo}async function xg(e,t,n){try{const r=Xr(t,1280,Qw(t.width,t.height,n)),a=(await e.run({[e.inputNames[0]]:new De("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return dm(a.data,a.dims[1]??0,a.dims[2]??0,r.params,$g)}catch{return[]}}let lo=null;const Dx=.4;function Ux(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function Lx(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||Ux(a,u)>=Dx)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function co(){return lo===null&&(lo=(async()=>{try{return(await fetch(`${tt}tuck_box.onnx`,{method:"HEAD"})).ok?await mt("tuck_box.onnx"):null}catch{return null}})()),lo}let po=null;function ho(){return po===null&&(po=(async()=>{try{return(await fetch(`${tt}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await Fx(),await mt("wonder_classifier.onnx")):null}catch{return null}})()),po}let vg=!1;async function Fx(){if(vg)return;const e=await(await fetch(`${tt}wonder_classifier_seuil.json`)).json();D1(Number(e.seuil)),U1(e.classes),vg=!0}let Sg=null,Eg=null;async function Gx(e){var d;Sg??(Sg=mt("wonder_obb.onnx"));const t=await Sg;if(t===null)return null;const n=await qs();if(n===null)return null;Eg=n;const{tensor:r,params:i}=Xr(e,1024),s=(await t.run({[t.inputNames[0]]:new De("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],o=s.dims[s.dims.length-1],u=s.data;let l=0;for(let h=0;h<o;h++){const g=u[4*o+h];g>l&&(l=g)}const c=C$(n,u,o,i);return dt.set("wonder_obb.onnx",`${dt.get("wonder_obb.onnx")??"?"} | dims=${s.dims} scoreMax=${l.toFixed(4)} dets=${c.length} q0=${(d=c[0])!=null&&d.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),c.map(h=>h.quad.map(g=>[g[0],g[1]]))}const Wx={wonderRef:Ex,tuckClassifier:oo,tuckBoxClassifier:co,obbQuads:Gx,redresserQuad:(e,t)=>R$(Eg,e,t),merveilleEcc:ox};async function qx(e,t){const n=await js();if(n!==null)try{const r=C1(e),i=new De("float32",r,[4,3,on,on]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,p:u}=A1(s,n.fiche);return o===null?["",-1]:[o,u]}catch{}return E1(e,t)}const Tg=new WeakMap;async function di(e){const t=Tg.get(e);if(t!==void 0)return await t;const n=et("decodage image",()=>Vx(e));return Tg.set(e,n),await n}async function Vx(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",a=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${a}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const Ig=new WeakMap;async function Lt(e,t){let n=Ig.get(t);n===void 0&&(n=new Map,Ig.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=Hx(e,t);return n.set(e,i),await i}async function Hx(e,t){const n=Xe[e],r=performance.now(),{tensor:i,params:a}=Xr(t,n.input);Ps+=performance.now()-r;const s=async()=>{const o=await yx(e),u={[o.inputNames[0]]:new De("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await o.run(u),d=performance.now()-l;yr+=d,Bs(d),wr+=1;const h=c[o.outputNames[0]];return{rows:new Float32Array(h.data),params:a}};try{return await s()}catch(o){if(ui.has(e))throw o;return ui.add(e),oi.delete(e),await s()}}const jx=6,Kx=4,Yx=5,Xx=2;async function Qx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await di(e),r=await Lt("banner",n),i=Qr(r.rows,r.params,Xe.banner.conf,Xe.banner.classes);if(t.banners=i.length,i.length>=jx)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Lt("laurel",n),s=gs(a.rows,a.params,Xe.laurel.conf);if(t.laurels=s.length,s.length>=Kx)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Lt("coin",n),u=um(o.rows,o.params,Xe.coin.conf);return t.coins=u.length,u.length>=Yx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Xx?{...t,kind:"board",confidence:.4}:t}function Zx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Mg(e,t,n,r,i,a,s,o){let u=0;const l=J$(e);l!==null&&t.push({code:"POOR_IMAGE_QUALITY",message:`${i}: ${l}`}),r(`${i}: card banners…`,.04);const c=await Lt("banner",e),d=Qr(c.rows,c.params,Xe.banner.conf,Xe.banner.classes),h=[],g=await bg(e,d,h),m=h.filter(Q=>Q.className==="objet_hors_jeu").map(Q=>Q.box);let y=ws(g).filter(Q=>Q.color!==null&&Q.family!==null);r(`${i}: progress tokens…`,.08);let w=[];const b=await ci();b!==null&&(w=await xg(b,e,y)),w.length>0&&y.length>0&&(y=y.filter(Q=>{const X=Q.box[0]+Q.box[2]/2,he=Q.box[1]+Q.box[3]/2;return!w.some(([Ce,Ue,Le,Y])=>Math.min(Ce,Le)<=X&&X<=Math.max(Ce,Le)&&Math.min(Ue,Y)<=he&&he<=Math.max(Ue,Y))}));const x=await Lt("token",e),T=await Rx(),S=[],E=[];for(const Q of d_(p_(x.rows,x.params,Xe.token.conf))){if(E.push({cx:Q.cx,cy:Q.cy,r:Q.r}),w.some(([Ce,Ue,Le,Y])=>Q.cx>=Ce&&Q.cx<=Le&&Q.cy>=Ue&&Q.cy<=Y))continue;const[X,he]=await qx(ym(e,Q),T);X===""&&he<0?E.pop():X===""?u+=1:!S.some(Ce=>Ce.id===X)&&!o.some(Ce=>Ce.id===X)&&S.push({id:X,center:[Q.cx,Q.cy],radius:Q.r,confidence:Math.round(he*1e4)/1e4})}r(`${i}: coins…`,.14);const M=await Lt("coin",e),C=um(M.rows,M.params,Xe.coin.conf).filter(Q=>!E.some(X=>(Q.cx-X.cx)**2+(Q.cy-X.cy)**2<=Q.r*Q.r)),v=await ro(),R=v!==null?await Px(e,C,v):null,z=(R!==null?C.filter((Q,X)=>R[X]>=Xm).map(Q=>Q.r):[]).sort((Q,X)=>Q-X),K=z.length>0?z.length%2===1?z[(z.length-1)/2]:(z[z.length/2-1]+z[z.length/2])/2:null,[U,G]=$2,N=C.map((Q,X)=>{const he=R!==null?R[X]:null;return he===null||he>=Xm?"keep":K!==null&&K>0&&Q.r/K>=U&&Q.r/K<=G?"suspect":"drop"}),W=C.filter((Q,X)=>N[X]==="keep"),j=P_(e,W),ee=await ao(),ce=ee!==null?await Bx(e,W,ee):null,L=E2(j,ce??j.map(()=>null));L.map(Q=>Q.value);const ne=[];let A=0;if(C.forEach((Q,X)=>{if(N[X]==="drop")return;if(N[X]==="suspect"){const Ce=R[X];ne.push({denomination:null,center:[Q.cx,Q.cy],radius:Q.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${Ce.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const he=L[A++];ne.push({denomination:he.value,center:[Q.cx,Q.cy],radius:Q.r,denomSource:he.source??"colour"})}),C.length>0&&ne.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${C.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ne.length>=2){const Q=ne.map(he=>he.radius).sort((he,Ce)=>he-Ce),X=Q.length%2===1?Q[(Q.length-1)/2]:(Q[Q.length/2-1]+Q[Q.length/2])/2;if(X>0)for(const he of ne)he.radius/X>2&&(he.suspect=!0,he.suspectReason=`radius ${he.radius}px is ${(he.radius/X).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(ne.length>=2)for(let Q=0;Q<ne.length;Q+=1)for(let X=Q+1;X<ne.length;X+=1){const he=ne[Q],Ce=ne[X],Ue=Math.hypot(he.center[0]-Ce.center[0],he.center[1]-Ce.center[1]);if(Ue<1.1*Math.min(he.radius,Ce.radius))for(const Le of[he,Ce])Le.suspect||(Le.suspect=!0,Le.suspectReason=`almost concentric with another coin (${Ue.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const O=[],P=[],B=[],V=Date.now()+Sx;let Z=null;const J=[];let ie=!1;const pe={n:0},$e=await ho();if($e!==null&&(Z=await et("opencv.js (chargement)",()=>qs()),Z!==null)){r(`${i}: identifying wonders…`,.35);const Q=await et("identifyWondersByClassifier",()=>dx(Wx,Z,e,$e,V,y,[],pe));for(const X of Q)O.some(he=>he.id===X.obj.id)||s.some(he=>he.id===X.obj.id)||(O.push(X.obj),J.push({obj:X.obj,edgeScores:X.edgeScores,zone:X.zone}),P.push(X.zone),B.push({quad:X.quad,region:X.region}));ie=Q.length>0}if(!ie){const Q=Sb(J.map(X=>({built:X.obj.builtWithCardUnderneath,edgeScores:X.edgeScores,zone:X.zone})),y.map(X=>[X.box[0]+X.box[2]/2,X.box[1]+X.box[3]/2]));for(const X of Q){const he=J[X];he.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${he.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(y.length>0){const X=new Set(Q);for(let he=0;he<J.length;he++){const Ce=J[he];if(X.has(he)||!Ce.obj.builtWithCardUnderneath)continue;const Ue=Ce.obj.tuckRegion;if(Ue===void 0)continue;if(!y.some(Y=>{const fe=Y.box[0]+Y.box[2]/2,ae=Y.box[1]+Y.box[3]/2;return fe>=Ue.x&&fe<=Ue.x+Ue.width&&ae>=Ue.y&&ae<=Ue.y+Ue.height})){const Y=Ce.obj;Y.builtWithCardUnderneath=!1,Y.suspect=!0,Y.suspectReason="built-unconfirmed"}}}}const Ee=async()=>{let Q=O.slice();const X=[];y.forEach((Y,fe)=>{const ae=Y.box[0]+Y.box[2]/2,ye=Y.box[1]+Y.box[3]/2;P.some(we=>ae>=we.x0&&ae<=we.x1&&ye>=we.y0&&ye<=we.y1)||X.push(fe)});const he=[],Ce=[];Q.forEach((Y,fe)=>{const ae=Y.boundingBox;ae&&ae.width>0&&(he.push(fe),Ce.push([ae.x,ae.y,ae.width,ae.height]))});const Ue=Y=>{const fe=[];return Y.forEach((ae,ye)=>{const we=ae.box[0]+ae.box[2]/2,ge=ae.box[1]+ae.box[3]/2;P.some(ve=>we>=ve.x0&&we<=ve.x1&&ge>=ve.y0&&ge<=ve.y1)||fe.push(ye)}),fe};let Le=eg(y.map(Y=>Y.box),X,Ce,w,[e.width,e.height]);try{const Y=r$(e.width,e.height,y.map(fe=>fe.box),Le.hulls.map(([fe,ae],ye)=>({owner:fe,poly:ae,n:Le.hullBoxCounts[ye]??0})),Ce);if(Y.length>0){const fe=Cs(y.map(ye=>ye.box)),ae=[];for(const ye of Y){const[we,ge,ve,oe]=ye,nt=cn(e,we,ge,ve-we,oe-ge);if(nt.width<=0||nt.height<=0)continue;const rt=await Lt("banner",nt);for(const Fe of Qr(rt.rows,rt.params,Xe.banner.conf,Xe.banner.classes)){const He=i$(Fe.box,ye,fe);He&&ae.push({...Fe,box:He})}}if(ae.length>0){const ye=oe=>oe.color!==null&&m.some(nt=>Nx(oe.box,nt)),we=new Map((await bg(e,ae.filter(oe=>!ye(oe)))).map(oe=>[oe.box.slice(0,4).join(","),oe])),ge=ae.map(oe=>ye(oe)?oe:we.get(oe.box.slice(0,4).join(","))).filter(oe=>oe!==void 0&&oe.color!==null&&oe.family!==null),ve=ws([...y,...ge]);ve.length>y.length&&(y=ve,Le=eg(y.map(oe=>oe.box),Ue(y),Ce,w,[e.width,e.height]))}}}catch(Y){console.warn("[#129 city-rescan] skipped:",Y)}return a!==void 0&&(a.hulls=Le.hulls.map(([Y,fe],ae)=>({owner:Y,poly:fe,n:Le.hullBoxCounts[ae]??0})),a.bandBoxes=w,a.image=e),{split:Le,photoWonders:Q,splitWonderIdx:he}};let ze=null;try{ze=await Ee()}catch(Q){console.warn("[city-split] failed (side unfiltered):",Q)}return{bannerDetections:y,photoCoins:ne,photoTokenDiscs:E,discs:C,bandBoxes:w,bandSession:b,wonderFootprints:P,wonderTuckGates:B,photoTokensList:S,geo:ze,cv:Z,regDeadline:V,unidentifiedTokens:u}}async function Cg(e,t,n,r,i,a,s,o,u,l){let c=e.bannerDetections,d=e.cv;const{photoCoins:h,photoTokenDiscs:g,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:T,geo:S,regDeadline:E}=e,M={},C=[],v=[];let R=0;const z=[];let K=0,U=0;const G=[],N=[],W=[],j=t==="opponent";let ee=(Y,fe)=>!j,ce=(Y,fe)=>!j,L=null;if(S!==null)try{const{split:Y,photoWonders:fe,splitWonderIdx:ae}=S;ee=(ve,oe)=>Y.pointOwner(ve,oe)==="opponent"===j;const ye=j?"opponent":"player";if(ce=(ve,oe)=>Y.pointOwner(ve,oe)===ye,n){const ve=Y;L=oe=>new Set(q2(oe,ve,ye,y))}c=c.filter((ve,oe)=>Y.bannerOwner[oe]==="opponent"===j);const we=fe.map(()=>"player");ae.forEach((ve,oe)=>{we[ve]=Y.wonderOwner[oe]});const ge=[];fe.forEach((ve,oe)=>{we[oe]==="opponent"===j&&ge.push(ve)});for(const ve of ge)N.push(ve);b.length=0;for(const ve of ge){const oe=ve.tuckRegion??ve.boundingBox;oe&&b.push({x0:oe.x,y0:oe.y,x1:oe.x+oe.width,y1:oe.y+oe.height})}for(const ve of T)Y.nearestOwner(ve.center[0],ve.center[1])==="opponent"===j&&W.push(ve)}catch(Y){console.warn("[city-split] failed (side unfiltered):",Y)}const ne=L!==null?L(h):null;for(const Y of h)(ne!==null?!ne.has(Y):!ce(Y.center[0],Y.center[1]))||(R+=Y.denomination??0,v.push(Y));const A=new Set,O=[],P=Cs(c.map(Y=>Y.box));x.forEach((Y,fe)=>{if(Y.quad===null||Y.region===null){const ge=b[fe];ge&&O.push(ge);return}const ae=Y.region,ye=[];c.forEach((ge,ve)=>{const oe=ge.box[0]+ge.box[2]/2,nt=ge.box[1]+ge.box[3]/2;oe>=ae.x&&oe<=ae.x+ae.width&&nt>=ae.y&&nt<=ae.y+ae.height&&ye.push([ve,ge.box])});const we=b2(Y.quad,ye,P);we!==null&&A.add(we)});let B=[],V=0;c.forEach((Y,fe)=>{if(A.has(fe)){U+=1,V+=1;return}const ae=Y.box[0]+Y.box[2]/2,ye=Y.box[1]+Y.box[3]/2;if(O.some(we=>ae>=we.x0&&ae<=we.x1&&ye>=we.y0&&ye<=we.y1)){U+=1,V+=1;return}B.push(Y)});const Z=h2(B,V,y,a.width,a.height);B=Z.kept;for(const Y of B)M[Y.family]=(M[Y.family]??0)+1,K+=1;const J=$_(B),ie=new Set(J.map(Y=>Y.box.join(",")));for(const Y of v_(B))ie.has(Y.box.join(","))||(J.push(Y),ie.add(Y.box.join(",")));for(const Y of Z.suspects)ie.has(Y.box.join(","))||(J.push(Y),ie.add(Y.box.join(",")));for(const Y of J)G.push(Y);if(B.some(Y=>Y.family==="guild")){const Y=await Ys();if(Y!==null){o(`${u}: identifying guilds…`,.75);for(const fe of B)if(fe.family==="guild")try{const[ae,ye,we,ge]=fe.box,ve=cn(a,ae,ye,we,ge),oe=N1(ve),nt={[Y.inputNames[0]]:new De("float32",oe,[1,3,qn,qn])},Fe=(await Y.run(nt))[Y.outputNames[0]].data,{id:He,prob:ut}=z1(Fe);He!==""&&!z.some(kt=>kt.id===He)&&!l.some(kt=>kt.id===He)&&z.push({id:He,boundingBox:{x:ae,y:ye,width:we,height:ge},confidence:Math.round(ut*1e4)/1e4})}catch(ae){console.warn("[guild-cls] failed:",ae)}}else if(Date.now()<E)try{const fe=d??await qs();if(fe!==null){const ae=await Tx();if(ae.size>0){o(`${u}: identifying guilds…`,.75);const ye=await Ix();for(const we of d1(fe,a,ae,E,ye))!z.some(ge=>ge.id===we.id)&&!l.some(ge=>ge.id===we.id)&&z.push(we)}}}catch(fe){console.warn("[guilds-reg] failed:",fe)}}o(`${u}: laurels…`,.8);const $e=await et("laurier: chargement galerie gabarits",()=>Mx()),Ee=[];for(const Y of[0]){const fe=Y===0?a:Xt(a,Y),ae=await et("laurier: passe PLEINE photo",()=>Lt("laurel",fe));for(const[ye,we,ge,ve]of at("laurier: decodage YOLO (JS)",()=>gs(ae.rows,ae.params,Xe.laurel.conf))){const oe=_g({x:ye,y:we,width:ge-ye,height:ve-we},Y,a.width,a.height);Ee.push([oe.x,oe.y,oe.x+oe.width,oe.y+oe.height])}}const ze=[{boxes:at("laurier: dedup",()=>lm(Ee)),offset:[0,0]}],Q=[a],X=[];try{const Y=f$(c.map(fe=>fe.box),[a.width,a.height]);dt.set("_tta.onnx",`total=${Rs.total} idDiff=${Rs.idDiff} verdictDiff=${Rs.verdictDiff}`),dt.set("_marge2.onnx",`total=${Ut.total} pos4=${Ut.positifs4} pos2=${Ut.positifs2} divergent=${Ut.divergent} `+Ut.detail.slice(0,10).join(" | ")),dt.set("_ttaObb.onnx",`total=${si.total} memeK=${si.memeK} inv=${si.memeKInverse} `+si.detail.slice(0,12).join(" ")),dt.set("_tuilage.onnx",`groupes=? tuiles=${Y.length} bannieres=${c.length} image=${a.width}x${a.height}`);for(const[fe,ae,ye,we]of Y){const ge=cn(a,fe,ae,ye-fe,we-ae);if(ge.width<=0||ge.height<=0)continue;const ve=[];for(const oe of[0]){const nt=oe===0?ge:Xt(ge,oe),rt=await et("laurier: passe par TUILE (#113)",()=>Lt("laurel",nt));for(const[Fe,He,ut,kt]of at("laurier: decodage YOLO (JS)",()=>gs(rt.rows,rt.params,Xe.laurel.conf))){const At=_g({x:Fe,y:He,width:ut-Fe,height:kt-He},oe,ge.width,ge.height);ve.push([At.x,At.y,At.x+At.width,At.y+At.height])}}if(ze.push({boxes:lm(ve),offset:[fe,ae]}),Q.push(ge),w!==null)try{const oe=await et("laurier: bande de piste sur tuile (#114)",async()=>{const Fe=Xr(ge,1280,pr);return{sortie:await w.run({[w.inputNames[0]]:new De("float32",Fe.tensor,[1,3,1280,1280])}),params:Fe.params}}),nt={params:oe.params},rt=oe.sortie[w.outputNames[0]];for(const[Fe,He,ut,kt]of dm(rt.data,rt.dims[1]??0,rt.dims[2]??0,nt.params,$g))X.push([Fe+fe,He+ae,ut+fe,kt+ae])}catch{}}}catch(Y){console.warn("[laurel-containers] failed:",Y)}const[he,Ce]=await et("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([Qs(),to()]));let Ue=await g$(ze,async(Y,fe)=>{if(Ce===null)return!1;const ae=Q[fe]??a,ye=await et("laurier: filtre FP (#49)",()=>zx(ae,[Math.trunc(Y[0]),Math.trunc(Y[1]),Math.trunc(Y[2]),Math.trunc(Y[3])],Ce));return ye!==null&&ye>=Z1});const Le=[...y,...X];Ue=Ue.filter(([Y,fe,ae,ye])=>!_$((Y+ae)/2,(fe+ye)/2,Le,c.map(we=>we.box)));for(const[Y,fe,ae,ye]of Ue){const we=Math.trunc((Y+ae)/2),ge=Math.trunc((fe+ye)/2);if([...g,...m].some(je=>(we-je.cx)**2+(ge-je.cy)**2<=je.r*je.r)||!ee(we,ge))continue;const oe=Math.min(Math.trunc(ae-Y),Math.trunc(ye-fe)),nt=Math.max(6,Math.trunc(Math.max(ae-Y,ye-fe)*W_)),rt=Cx(a,we,ge,nt);let Fe=null,He=0,ut=!1;if(he!==null&&oe>=6){const je=cn(a,Math.trunc(Y),Math.trunc(fe),Math.trunc(ae-Y),Math.trunc(ye-fe)),Qe=async dn=>{let _r=null,jn=0;for(const fi of dn){const mi=fi===0?je:Xt(je,fi),gi=Y1(mi),yo=await et("laurier: lecture chiffre (CNN)",()=>he.run({[he.inputNames[0]]:new De("float32",gi,[1,3,Pt,Pt])})),{value:yi,prob:br}=X1(yo[he.outputNames[0]].data);if(br>jn&&(_r=yi,jn=br),_r!==null&&jn>=K1)break}return{v:_r,p:jn}},Ft=await Qe([0,2]);let Rt=Ft.v,Ot=Ft.p;if(Rt===null||Ot<Vm){const dn=await Qe([1,3]);dn.v!==null&&dn.p>Ot&&(Rt=dn.v,Ot=dn.p)}Rt!==null&&Ot>=Vm&&(Fe=Rt,He=Ot)}if(Fe===null&&oe>=6){const je=new Map;for(const Qe of[0,1,2,3]){const Ft=Qe===0?rt:Xt(rt,Qe),[Rt,Ot]=at("laurier: lecteur GABARITS (repli, JS pur)",()=>rb(Ft,$e));Rt!==null&&(je.set(Rt,Math.max(je.get(Rt)??0,Ot)),Ot>He&&(Fe=Rt,He=Ot))}Fe!==null&&He<vx&&(Fe=null),ut=Fe!==null&&[...je.entries()].some(([Qe,Ft])=>Qe!==Fe&&Ft>=He-.1)}const kt=b.some(je=>we>=je.x0&&we<=je.x1&&ge>=je.y0&&ge<=je.y1),At=[...z,...l].some(je=>{const Qe=je.boundingBox;return Qe!==void 0&&we>=Qe.x&&we<=Qe.x+Qe.width&&ge>=Qe.y&&ge<=Qe.y+Qe.height});C.push({value:Fe,valueRead:Fe!==null,center:[Math.round((Y+ae)/2),Math.round((fe+ye)/2)],boundingBox:{x:Math.trunc(Y),y:Math.trunc(fe),width:Math.trunc(ae-Y),height:Math.trunc(ye-fe)},confidence:Math.round(He*1e4)/1e4,excluded:kt||At,photoIndex:i-1,...ut?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:M,laurels:C,coins:v,coinTotal:R,guilds:z,bannerCount:K,tuckedExcluded:U,bannerSuspects:G,cityWondersKept:N,cityTokensKept:W}}function kg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function Ag(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function Rg(e,t,n){const{byFamily:r,laurels:i,coins:a,progressTokens:s,wonders:o,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:d,bannerCount:h,tuckedExcluded:g}=e;g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):h>0&&o.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(T=>T.id).join(", ")+" — confirm in the review."});const y=o.filter(T=>T.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(T=>T.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${o.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),d>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${d} token disc(s) found but not identified — pick them in the review below.`}),s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+s.map(T=>T.id).join(", ")+" — confirm in the review."}),a.length>0){const T=a.filter(E=>E.denomSource==="cnn").length,S=a.length-T;n.push({code:"LOW_CONFIDENCE",message:S===0?`${t}: coins read as ${c} from ${a.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${a.length} tile(s) — ${T} by the learned model, ${S} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=Lx(u,o);for(const T of[...b$(o.map(S=>S.id),t),...v$(w.map(S=>S.id),t)])n.push({code:"INCONSISTENT_STATE",message:T.message});const b=i.filter(T=>!T.excluded),x=b.filter(T=>T.valueRead);return{...Zx(),wonders:o,guilds:w,progressTokens:s,laurels:i,cardVictoryPoints:{value:x.reduce((T,S)=>T+(S.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:h>0?"yolo":"none",tuckedExcluded:g,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:a.length>0?.5:0,source:a.length===0?"none":a.some(T=>T.denomSource==="cnn")?"local-cnn":"local-colour",coins:a}}}async function Jx(e,t,n,r,i=()=>{},a="player",s,o=!1){const u=kg();let l=0;for(const c of e){l+=1;const d=`${t} photo ${l}/${e.length}`;r(`${d}: reading pixels…`,.01);const h=await di(c),g=await Mg(h,n,t,r,d,s,u.wonders,u.progressTokens);u.unidentifiedTokens+=g.unidentifiedTokens;const m=await Cg(g,a,o,t,l,h,n,r,d,u.guilds);Ag(u,m),i()}return Rg(u,t,n)}const Ct=1280,ev=.3,pi=9;let fo=null;function hi(){return fo===null&&(fo=(async()=>{try{return(await fetch(`${tt}${dg}`,{method:"HEAD"})).ok?await mt(dg):null}catch{return null}})()),fo}function tv(e){const t=Ct/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),a=i.getContext("2d",{willReadFrequently:!0}),s=Vw(e.data,e.width,e.height,e.channels);a.putImageData(new ImageData(s,e.width,e.height),0,0);const u=new OffscreenCanvas(Ct,Ct).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Ct,Ct),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Ct,Ct),c=Ct*Ct,d=new Float32Array(3*c);for(let h=0;h<c;h+=1)d[h]=l[h*4]/255,d[c+h]=l[h*4+1]/255,d[2*c+h]=l[h*4+2]/255;return{tensor:d,r:t}}const We={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null,classes:new Set};function nv(){We.appels=0,We.inferences=0,We.bandes=0,We.detail=[],We.premiereGagne=null,We.classes=new Set}function Og(){dt.set("_pion.onnx",`appels=${We.appels} inferences=${We.inferences} bandes=${We.bandes} premiereGagne=${We.premiereGagne??"n/a"} classes=${We.classes.size===0?"aucune":[...We.classes].sort().join(",")}${rv()} | ${We.detail.join(" ")}`)}function rv(){const e=We.classes,t=(e.has(1)?1:0)+(e.has(2)?1:0);return e.size===0?" (piste illisible)":e.has(0)&&t===2?" (tout vu)":!e.has(0)&&t===2?" (PION manquant, geometrie disponible)":e.has(0)&&t===1?" (pion a la capitale : il masque un medaillon — TRAITE par #82)":e.has(0)&&t===0?" (pion seul, aucun medaillon)":" (un seul medaillon, pas de pion)"}async function mo(e,t){We.inferences+=1;const{tensor:n,r}=at("pion: mise en tenseur 1280x1280",()=>tv(t)),a=(await e.run({[e.inputNames[0]]:new De("float32",n,[1,3,Ct,Ct])}))[e.outputNames[0]],s=a.data,o=a.dims[2]??0,u=(a.dims[1]??4)-4,l=at("pion: depouillement des ancres brutes",()=>{const c=new Map;for(let d=0;d<u;d+=1){const h=(4+d)*o;let g=-1,m=ev;for(let y=0;y<o;y+=1){const w=s[h+y];w>=m&&(m=w,g=y)}if(g>=0){const y=(s[g]+s[2*o+g])/2/r,w=(s[o+g]+s[3*o+g])/2/r,b=(s[2*o+g]-s[g])/r,x=(s[3*o+g]-s[o+g])/r;c.set(d,{conf:m,cx:y,cy:w,diam:(b+x)/2})}}return c});for(const c of l.keys())We.classes.add(c);return l}async function go(e,t,n){const r=We.inferences,i=`a${We.appels}`;We.appels+=1;const a=await et("pion: UNE passe (les 4 rotations)",()=>iv(e,t,n));return We.detail.push(`${i}:${We.inferences-r}inf conf=${a===null?"rien":a.confidence.toFixed(2)}`),Og(),a}async function iv(e,t,n){let r=null;const i=1.8;for(const E of n??[0,1,2,3]){const M=E===0?t:at("pion: rotation de l'image",()=>Xt(t,E)),C=await mo(e,M);if(C.has(0)&&C.has(1)&&C.has(2)){const v=C.get(0).conf+C.get(1).conf+C.get(2).conf;if((r===null||v>r.score)&&(r={score:v,det:C,k:E}),v>=i)break}}if(r===null)for(const E of n??[0,1,2,3]){const M=E===0?t:Xt(t,E),C=await mo(e,M);if(C.has(1)&&C.has(2)){const v=C.get(1).conf+C.get(2).conf;(r===null||v>r.score)&&(r={score:v,det:C,k:E})}}let a=!1;if(r===null)for(const E of n??[0,1,2,3]){const M=E===0?t:Xt(t,E),C=await mo(e,M),v=C.get(0);if(v===void 0)continue;const R=C.has(1)&&!C.has(2)?1:!C.has(1)&&C.has(2)?2:null;if(R===null)continue;const z=C.get(R),K=a_([v.cx,v.cy],[z.cx,z.cy],z.diam);if(K===null)continue;const U=v.conf+z.conf;if(r===null||U>r.score){const G=new Map(C);G.set(R===2?1:2,{conf:z.conf,cx:K[0],cy:K[1],diam:z.diam}),r={score:U,det:G,k:E},a=!0}}if(r===null)return null;const s=!r.det.has(0),o=r.det.get(0)??{conf:0,cx:0,cy:0},u=r.det.get(1),l=r.det.get(2),c=l.cx-u.cx,d=l.cy-u.cy,h=(u.cx+l.cx)/2,g=(u.cy+l.cy)/2,m=c*c+d*d;if(m<=0)return null;const y=((o.cx-h)*c+(o.cy-g)*d)/m*(2*pi);let w=s?0:Math.min(pi,Math.max(-pi,st(y)));const b=r.det.reperes;if(!s&&b!==void 0){const E=U$([o.cx,o.cy],[u.cx,u.cy],[l.cx,l.cy],b);E!==null&&(w=E)}const x=s?0:Math.min(o.conf,u.conf,l.conf),T=(E,M)=>{const C=r.k%4;return C===0?[E,M]:C===1?[M,t.height-1-E]:C===2?[t.width-1-E,t.height-1-M]:[t.width-1-M,E]},S=[u,l].map(E=>{const[M,C]=T(E.cx,E.cy);return[st(M),st(C)]});return{position:w,confidence:Math.round(x*1e4)/1e4,ends:S,k:r.k,found:!s,endOccluded:a}}async function Ng(e,t,n){let r=null,i=null;for(const a of n){const s=Zw(t.width,t.height,a);if(s===null)continue;const o=cn(t,s.x,s.y,s.width,s.height);if(o.width===0||o.height===0)continue;We.bandes+=1;const u=await go(e,o,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(We.premiereGagne===null?We.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(We.premiereGagne=!1),Og()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,c])=>[l+s.x,c+s.y])})}return r}function zg(){const e=[js,Ys,Qs,eo,to,ro,ao,oo,ci,co,ho,hi];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function av(e,t){zg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const s=(m,y=0)=>{t(m,i>0?Math.min(.99,(a+y)/i):void 0)},o=()=>{a+=1};for(const m of["left","right"]){const y=e[m];y.length>0&&(r[m]=await Jx(y,m,n,s,o))}let u=null,l=null;if(e.both!==void 0){const m={},y=await di(e.both),w=await Mg(y,n,"both",s,"both photo 1/1",m,[],[]),b={player:[],opponent:[]},x=async(M,C)=>{const v=kg();v.unidentifiedTokens+=w.unidentifiedTokens;const R=b[M];return Ag(v,await Cg(w,M,!0,C,1,y,R,s,`${C} photo 1/1`,v.guilds)),o(),Rg(v,C,R)},T={player:await x("player","left"),opponent:await x("opponent","right")};if(s("military pawn…",.95),m.image!==void 0)try{const M=await hi();M!==null&&(m.bandBoxes!==void 0&&m.bandBoxes.length>0&&(u=await Ng(M,m.image,m.bandBoxes)),u===null&&(u=await go(M,m.image)))}catch(M){console.warn("[#125] both-photo pawn read failed:",M)}u!==null&&(l=t_(u.ends,m.hulls??[],u.position));const S=l!==null&&!l.ambiguous?n_(l):null;let E={left:"player"};if(S!==null)E={left:S.left,right:S.right},r.left=T[S.left],r.right=T[S.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`});else{const M=r_(m.hulls??[]);M!==null?(E={left:M.left,right:M.right},r.left=T[M.left],r.right=T[M.right],n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: no readable military track, so LEFT and RIGHT were taken from the PHOTO LAYOUT (cities stacked vertically -> the TOP one is left; side by side -> the LEFTMOST one is left). Swap them in the review if the seating is the other way around."})):(r.left=T.player,r.right=T.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: neither the military track nor the photo layout could tell the two cities apart — LEFT and RIGHT are UNDECIDED and must be checked in the review."}))}for(const M of["player","opponent"]){const C=M==="player"?"left":"right",v=E.left===M?"left":"right";for(const R of b[M])n.push(px(R,C,v))}}{const m={},y={};for(const w of["left","right"]){const b=r[w];b!=null&&(m[w]=b.wonders.map(x=>x.id),y[w]=b.progressTokens.map(x=>x.id))}for(const w of[...$$(m),...x$(y)])n.push({code:"INCONSISTENT_STATE",message:w.message})}let c={conflictPawnPosition:0,found:!1,confidence:0},d=!1;if(e.board!==void 0)try{const m=await di(e.board),y=await hi();if(y!==null){let w=await go(y,m);if(w===null){const b=await ci();if(b!==null){const x=await Lt("banner",m),T=Qr(x.rows,x.params,Xe.banner.conf,Xe.banner.classes),S=await xg(b,m,T);w=await Ng(y,m,S)}}w!==null&&(c={conflictPawnPosition:w.position,found:w.found,confidence:w.confidence},d=w.endOccluded,n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${w.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(m){console.warn("[pawn] on-device read failed:",m)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:u.found,confidence:u.confidence},d=u.endOccluded);if(d&&c.found&&n.push({code:"LOW_CONFIDENCE",message:`The conflict pawn appears to SIT ON its end medallion (the capital), which hides it from the detector: position ${c.conflictPawnPosition} was DEDUCED from the track length, not read end to end. Confirm it — at this distance it decides a military supremacy.`}),!c.found){const m=x=>{var T,S;return Number(((S=(T=x==null?void 0:x.cardCounts)==null?void 0:T.byFamily)==null?void 0:S.military)??0)},y=m(r.left),w=m(r.right),b=Math.abs(y-w);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:b>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${y} military cards and the other ${w}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const h=c.conflictPawnPosition,g=Math.abs(h)>=pi?{type:"military",winner:h>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:g,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(a,s)=>{fx(a);const o=gx()?"Initialisation des modèles de vision…":qw(a);self.postMessage({id:t,progress:o,...s!==void 0?{fraction:s}:{},...a!==r?{perfPartiel:{providers:hg(),etapes:pg(),etapeCourante:o}}:{}}),r=a};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){zg(),await Promise.allSettled([js(),Ys(),Qs(),eo(),to(),ro(),ao(),oo(),ci(),co(),ho(),hi()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),hx(),bx();const a=performance.now(),s=n==="classify"?await Qx(e.data.file):await av(e.data.payload,i);self.postMessage({id:t,ok:!0,result:s,perf:{etapes:pg(),providers:hg(),runtime:mx(),inference:_x(),famillesJs:Uw(),inferenceParEtape:wx(),totalMs:Math.round(performance.now()-a)}})}catch(a){self.postMessage({id:t,ok:!1,error:String(a)})}})()}})();
