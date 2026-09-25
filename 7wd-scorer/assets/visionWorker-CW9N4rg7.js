var A3=Object.defineProperty;var R3=(Vt,Ht,On)=>Ht in Vt?A3(Vt,Ht,{enumerable:!0,configurable:!0,writable:!0,value:On}):Vt[Ht]=On;var cy=(Vt,Ht,On)=>R3(Vt,typeof Ht!="symbol"?Ht+"":Ht,On);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Vt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,On=Object.getOwnPropertyNames,hy=Object.prototype.hasOwnProperty,fy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Z=(e,t)=>()=>(e&&(t=e(e=0)),t),Nn=(e,t)=>{for(var n in t)Vt(e,n,{get:t[n],enumerable:!0})},my=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of On(t))!hy.call(e,i)&&i!==n&&Vt(e,i,{get:()=>t[i],enumerable:!(r=Ht(t,i))||r.enumerable});return e},Yn=e=>my(Vt({},"__esModule",{value:!0}),e),Xn,tn,zn,Bo,Po,Do=Z(()=>{Xn=new Map,tn=[],zn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Xn.get(e);if(r===void 0)Xn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=tn.indexOf(e);i!==-1&&tn.splice(i,1);for(let a=0;a<tn.length;a++)if(Xn.get(tn[a]).priority<=n){tn.splice(a,0,e);return}tn.push(e)}return}throw new TypeError("not a valid backend")},Bo=async e=>{let t=Xn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Po=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?tn:n,i,a=[],s=new Set;for(let u of r){let l=await Bo(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),gy=Z(()=>{Do()}),Uo,yy=Z(()=>{Uo="1.27.0"}),Mi,Ze,Lo=Z(()=>{yy(),Mi="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:Uo},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Mi=e}},get logLevel(){return Mi}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),ze,wy=Z(()=>{Lo(),ze=Ze}),Fo,Go,by=Z(()=>{Fo=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=a*i,p=0,h=d,g=d*2,m=-1;s==="RGBA"?(p=0,h=d,g=d*2,m=d*3):s==="RGB"?(p=0,h=d,g=d*2):s==="RBG"&&(p=0,g=d,h=d*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let _=(e.data[p++]-l[0])*u[0],x=(e.data[h++]-l[1])*u[1],T=(e.data[g++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+_+","+x+","+T+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Go=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,m=1,y=2,w=3,_=0,x=p,T=p*2,v=-1;o==="RGBA"?(_=0,x=p,T=p*2,v=p*3):o==="RGB"?(_=0,x=p,T=p*2):o==="RBG"&&(_=0,T=p,x=p*2),r=n.createImageData(i,a);for(let E=0;E<a*i;g+=h,m+=h,y+=h,w+=h,E++)r.data[g]=(e.data[_++]-d[0])*l[0],r.data[m]=(e.data[x++]-d[1])*l[1],r.data[y]=(e.data[T++]-d[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),Sr,Wo,qo,Vo,Ho,jo,_y=Z(()=>{Ci(),Sr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,h=0,g=1,m=2,y=3,w=0,_=l,x=l*2,T=-1;o==="RGB"&&(p=3,h=0,g=1,m=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(w=0,x=l,_=l*2):u==="BGR"&&(x=0,_=l,w=l*2);for(let v=0;v<l;v++,h+=p,m+=p,g+=p,y+=p)d[w++]=(e[h]+s[0])/a[0],d[_++]=(e[g]+s[1])/a[1],d[x++]=(e[m]+s[2])/a[2],T!==-1&&y!==-1&&(d[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new dt("float32",d,[1,4,n,r]):new dt("float32",d,[1,3,n,r])},Wo=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=g}else o.tensorFormat="RGBA",o.height=h,o.width=g;p.drawImage(e,0,0),s=p.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(r){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=p,t!==void 0){let h=u();h.width=p,h.height=d;let g=l(h);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,g=e.width;return p.drawImage(e,0,0,g,h),s=p.getImageData(0,0,g,h).data,o.height=h,o.width=g,Sr(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((d,p)=>{let h=u(),g=l(h);if(!e||!g)return p();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{h.width=m.width,h.height=m.height,g.drawImage(m,0,0,h.width,h.height);let y=g.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,d(Sr(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Sr(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},qo=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new dt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},Vo=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new dt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Ho=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new dt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},jo=(e,t,n)=>new dt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),mn,Qn,ki,Ko,$y=Z(()=>{mn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ki=!1,Ko=()=>{if(!ki){ki=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(mn.set("int64",BigInt64Array),Qn.set(BigInt64Array,"int64")),t&&(mn.set("uint64",BigUint64Array),Qn.set(BigUint64Array,"uint64")),r?(mn.set("float16",n),Qn.set(n,"float16")):mn.set("float16",Uint16Array)}}}),Yo,Xo,xy=Z(()=>{Ci(),Yo=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Xo=(e,t)=>{switch(e.location){case"cpu":return new dt(e.type,e.data,t);case"cpu-pinned":return new dt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new dt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new dt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new dt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),dt,Ci=Z(()=>{by(),_y(),$y(),xy(),dt=class{constructor(e,t,n){Ko();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=mn.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=mn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=Qn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Yo(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Wo(e,t)}static fromTexture(e,t){return qo(e,t)}static fromGpuBuffer(e,t){return Vo(e,t)}static fromMLTensor(e,t){return Ho(e,t)}static fromPinnedBuffer(e,t,n){return jo(e,t,n)}toDataURL(e){return Fo(this,e)}toImageData(e){return Go(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Xo(this,e)}}}),Le,Qo=Z(()=>{Ci(),Le=dt}),Tr,Ai,Nt,bt,gn,yn,Zo=Z(()=>{Lo(),Tr=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ai=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Tr("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Nt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ai("BEGIN",e)},bt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ai("END",e)},gn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},yn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),Jo,vy=Z(()=>{Do(),Qo(),Zo(),Jo=class dy{constructor(t){this.handler=t}async run(t,n,r){Nt(),gn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Le||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Le)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let h=n[p];(h===null||h instanceof Le)&&(l=!0,s=!1,i[p]=h)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof Le?u[l]=d:u[l]=new Le(d.type,d.data,d.dims)}return yn("InferenceSession.run"),bt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Nt(),gn("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,h=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(h=t.byteLength-p,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(d,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Po(s),l=await o.createInferenceSessionHandler(a,u);return yn("InferenceSession.create"),bt(),new dy(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Er,Sy=Z(()=>{vy(),Er=Jo}),Ty=Z(()=>{}),Ey=Z(()=>{}),Iy=Z(()=>{}),My=Z(()=>{}),ky={};Nn(ky,{InferenceSession:()=>Er,TRACE:()=>Tr,TRACE_EVENT_BEGIN:()=>gn,TRACE_EVENT_END:()=>yn,TRACE_FUNC_BEGIN:()=>Nt,TRACE_FUNC_END:()=>bt,Tensor:()=>Le,env:()=>ze,registerBackend:()=>zn});var gt=Z(()=>{gy(),wy(),Sy(),Qo(),Ty(),Ey(),Zo(),Iy(),My()}),Ri=Z(()=>{}),eu={};Nn(eu,{default:()=>tu});var Oi,Ni,tu,Cy=Z(()=>{var e;Bf(),wn(),Li(),Oi="ort-wasm-proxy-worker",Ni=((e=globalThis.self)==null?void 0:e.name)===Oi,Ni&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Wi(r.wasm).then(()=>{es(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ts(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=Vr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;rs(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":is(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;ss(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},us([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":os(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),tu=Ni?null:t=>new Worker(t??pt,{type:"module",name:Oi})}),nu={};Nn(nu,{default:()=>iu});async function ru(e={}){var uy,ly;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((uy=self.name)==null?void 0:uy.startsWith("em-pthread"));t.mountExternalData=(c,f)=>{c.startsWith("./")&&(c=c.substring(2)),(t.Xc||(t.Xc=new Map)).set(c,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=c=>async(...f)=>{var $;try{if(t.Yc)throw Error("Session already started");let b=t.Yc={Kd:f[0],errors:[]},I=await c(...f);if(t.Yc!==b)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=b.errors;if(0<C.length){let B=await Promise.all(C);if(B=B.filter(V=>V),0<B.length)throw Error(B.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(c,f)=>{if(c==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let $=t.dd;t.jsepRegisterBuffer=(b,I,C,B)=>$.registerBuffer(b,I,C,B),t.jsepGetBuffer=b=>$.getBuffer(b),t.jsepCreateDownloader=(b,I,C)=>$.createDownloader(b,I,C),t.jsepOnCreateSession=b=>{$.onCreateSession(b)},t.jsepOnReleaseSession=b=>{$.onReleaseSession(b)},t.jsepOnRunStart=b=>$.onRunStart(b),t.Id=(b,I)=>{$.upload(b,I)}}else if(c==="webnn"){let $=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=b=>$.onRunStart(b),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=b=>{$.onReleaseSession(b)},t.webnnCreateMLTensorDownloader=(b,I)=>$.createMLTensorDownloader(b,I),t.webnnRegisterMLTensor=(b,I,C,B)=>$.registerMLTensor(b,I,C,B),t.webnnCreateMLContext=b=>$.createMLContext(b),t.webnnRegisterMLConstant=(b,I,C,B,V,re)=>$.registerMLConstant(b,I,C,B,V,t.Xc,re),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let s=()=>{let c=f=>(...$)=>{let b=Wt;return $=f(...$),Wt!=b?new Promise((I,C)=>{vo={resolve:I,reject:C}}):$};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=c(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(c,f)=>{throw f},d=self.location.href,p="";if(n||r){try{p=new URL(".",d).href}catch{}r&&(u=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),o=async c=>{if(k(c))return new Promise(($,b)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):b(I.status)},I.onerror=b,I.send(null)});var f=await fetch(c,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var h,g,m,y,w,_,x=console.log.bind(console),T=console.error.bind(console),v=x,E=T,M=!1,k=c=>c.startsWith("file://");function S(){pe.buffer!=z.buffer&&N()}if(i){let c=function(f){try{var $=f.data,b=$.Sc;if(b==="load"){let I=[];self.onmessage=C=>I.push(C),_=()=>{postMessage({Sc:"loaded"});for(let C of I)c(C);self.onmessage=c};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...B)=>{postMessage({Sc:"callHandler",wd:C,args:B})},C=="print"&&(v=t[C]),C=="printErr"&&(E=t[C]));pe=$.Od,N(),g=$.Pd,te(),Ei()}else if(b==="run"){(function(I){var C=(S(),q)[I+52>>>2>>>0];I=(S(),q)[I+56>>>2>>>0],w0(C,C-I),Te(C)})($.Rc),Mo($.Rc,0,0,1,0,0),xe(),_o($.Rc),A||(p0(),A=!0);try{ot($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(b==="checkMailbox"?A&&bi():b&&(E(`worker: received unknown command ${b}`),E($)))}catch(I){throw h0(),I}};var A=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=c}var z,Y,F,W,O,q,K,X,le,L,P,R=!1;function N(){var c=pe.buffer;t.HEAP8=z=new Int8Array(c),F=new Int16Array(c),t.HEAPU8=Y=new Uint8Array(c),W=new Uint16Array(c),t.HEAP32=O=new Int32Array(c),t.HEAPU32=q=new Uint32Array(c),K=new Float32Array(c),X=new Float64Array(c),le=new BigInt64Array(c),L=new BigUint64Array(c)}function D(){R=!0,i?_():en.sb()}function U(c){throw E(c="Aborted("+c+")"),M=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),w==null||w(c),c}function j(){return{a:{ma:Hv,gb:Vv,g:Xe,J:kt,f:At,o:Rt,h:dn,ha:wr,b:jn,T:hi,Ha:mi,n:mo,$:kg,Xa:Cg,Da:Ag,Fa:Rg,Ya:Og,Va:Ng,Oa:zg,Ua:Bg,ka:Pg,Ea:Dg,Ba:Ug,Wa:Lg,Ca:Fg,bb:Ox,ea:Nx,wa:zx,ua:Px,da:Ux,O:Lx,H:Fx,va:Gx,_:Yx,xa:Xx,Ra:Qx,za:Jx,Ia:ev,sa:tv,fa:nv,Qa:_o,_a:rv,R:ov,r:pv,c:wo,hb:hv,y:fv,M:mv,D:gv,l:yv,s:Yg,ib:wv,I:bv,S:_v,j:$v,u:xv,q:vv,k:Sv,La:Tv,Ma:Ev,Na:Iv,Ja:Jg,Ka:e0,ta:t0,db:kv,ab:Av,v:Rv,aa:Ov,ga:Nv,$a:Cv,W:zv,Za:Bv,Aa:Pv,F:Mv,U:Dv,la:Si,ya:Lv,fb:Uv,eb:Fv,Sa:a0,Ta:s0,Ga:Fe,V:o0,ja:u0,Pa:l0,ia:c0,kb:M3,na:v3,lb:I3,oa:x3,G:h3,e:Xv,t:Kv,w:jv,B:s3,mb:b3,K:c3,x:Jv,pa:_3,Y:S3,ba:w3,nb:y3,ob:g3,P:o3,qa:m3,pb:f3,N:d3,Z:$3,d:Yv,A:Zv,m:Qv,jb:k3,p:t3,z:n3,C:e3,E:r3,L:u3,qb:p3,Q:T3,ca:l3,X:E3,rb:a3,ra:i3,i:Wv,a:pe,cb:be}}}async function te(){function c(b,I){var C=en=b.exports;b={};for(let[B,V]of Object.entries(C))typeof V=="function"?(C=iv(V),b[B]=C):b[B]=V;return en=b,en=(function(){var B=en,V=ae=>$e=>ae($e)>>>0,re=ae=>()=>ae()>>>0;return(B=Object.assign({},B)).tb=V(B.tb),B.Xb=re(B.Xb),B.Zb=V(B.Zb),B.lc=V(B.lc),B.mc=re(B.mc),B.qc=V(B.qc),B})(),se.push(en._b),d0=(b=en).tb,p0=b.ub,t._OrtInit=b.vb,t._OrtGetLastError=b.wb,t._OrtCreateSessionOptions=b.xb,t._OrtAppendExecutionProvider=b.yb,t._OrtAddFreeDimensionOverride=b.zb,t._OrtAddSessionConfigEntry=b.Ab,t._OrtReleaseSessionOptions=b.Bb,t._OrtCreateSession=b.Cb,t._OrtReleaseSession=b.Db,t._OrtGetInputOutputCount=b.Eb,t._OrtGetInputOutputMetadata=b.Fb,t._OrtFree=b.Gb,t._OrtCreateTensor=b.Hb,t._OrtGetTensorData=b.Ib,t._OrtReleaseTensor=b.Jb,t._OrtCreateRunOptions=b.Kb,t._OrtAddRunConfigEntry=b.Lb,t._OrtReleaseRunOptions=b.Mb,t._OrtCreateBinding=b.Nb,t._OrtBindInput=b.Ob,t._OrtBindOutput=b.Pb,t._OrtClearBoundOutputs=b.Qb,t._OrtReleaseBinding=b.Rb,t._OrtRunWithBinding=b.Sb,t._OrtRun=b.Tb,t._OrtEndProfiling=b.Ub,t._JsepOutput=b.Vb,t._JsepGetNodeName=b.Wb,Ti=b.Xb,qt=t._free=b.Yb,$r=t._malloc=b.Zb,Mo=b.ac,h0=b.bc,f0=b.cc,m0=b.dc,ko=b.ec,g0=b.fc,y0=b.gc,Ie=b.hc,xr=b.ic,w0=b.jc,Te=b.kc,Co=b.lc,Ee=b.mc,b0=b.nc,Ao=b.oc,_0=b.pc,$0=b.qc,x0=b.rc,Ro=b.sc,v0=b.tc,S0=b.uc,T0=b.vc,E0=b.wc,I0=b.xc,M0=b.yc,k0=b.zc,C0=b.Ac,A0=b.Bc,R0=b.Cc,O0=b.Dc,N0=b.Ec,z0=b.Fc,B0=b.Gc,P0=b.Hc,D0=b.Ic,U0=b.Jc,L0=b.Kc,F0=b.Lc,G0=b.Mc,W0=b.Nc,q0=b.Pc,V0=b.Qc,H0=b.$c,j0=b.ad,K0=b.fd,Y0=b.jd,X0=b.kd,Q0=b.ld,Z0=b.md,J0=b.nd,ey=b.od,ty=b.pd,ny=b.qd,ry=b.vd,iy=b.Td,ay=b.Ud,sy=b.Vd,oy=b.Wd,g=I,en}var f,$=j();return t.instantiateWasm?new Promise(b=>{t.instantiateWasm($,(I,C)=>{b(c(I,C))})}):i?c(new WebAssembly.Instance(g,j()),g):(P??(P=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(b){var I=P;if(!h&&!k(I))try{var C=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,b)}catch(B){E(`wasm streaming compile failed: ${B}`),E("falling back to ArrayBuffer instantiation")}return(async function(B,V){try{var re=await(async function(ae){if(!h)try{var $e=await o(ae);return new Uint8Array($e)}catch{}if(ae==P&&h)ae=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";ae=u(ae)}return ae})(B);return await WebAssembly.instantiate(re,V)}catch(ae){E(`failed to asynchronously prepare wasm: ${ae}`),U(ae)}})(I,b)})($),c(f.instance,f.module))}class ne{constructor(f){cy(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var fe=c=>{c.terminate(),c.onmessage=()=>{}},ve=[],ke=0,Re=null,ie=c=>{Se.length==0&&(me(),ge(Se[0]));var f=Se.pop();if(!f)return 6;Q.push(f),de[c.Rc]=f,f.Rc=c.Rc;var $={Sc:"run",Md:c.Ld,bd:c.bd,Rc:c.Rc};return f.postMessage($,c.rd),0},ee=0,J=(c,f,...$)=>{var b,I=16*$.length,C=Ee(),B=Co(I),V=B>>>3;for(b of $)typeof b=="bigint"?((S(),le)[V++>>>0]=1n,(S(),le)[V++>>>0]=b):((S(),le)[V++>>>0]=0n,(S(),X)[V++>>>0]=b);return c=f0(c,0,I,B,f),Te(C),c};function be(c){if(i)return J(0,1,c);if(m=c,!(0<ee)){for(var f of Q)fe(f);for(f of Se)fe(f);Se=[],Q=[],de={},M=!0}l(0,new ne(c))}function We(c){if(i)return J(1,0,c);Fe(c)}var Fe=c=>{if(m=c,i)throw We(c),"unwind";be(c)},Se=[],Q=[],se=[],de={},_e=c=>{var f=c.Rc;delete de[f],Se.push(c),Q.splice(Q.indexOf(c),1),c.Rc=0,m0(f)};function xe(){se.forEach(c=>c())}var ge=c=>new Promise(f=>{c.onmessage=I=>{var C=I.data;if(I=C.Sc,C.Zc&&C.Zc!=Ti()){var B=de[C.Zc];B?B.postMessage(C,C.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?bi():I==="spawnThread"?ie(C):I==="cleanupThread"?wi(()=>{_e(de[C.Nd])}):I==="loaded"?(c.loaded=!0,f(c)):C.target==="setimmediate"?c.postMessage(C):I==="uncaughtException"?c.onerror(C.error):I==="callHandler"?t[C.wd](...C.args):I&&E(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,b=[];for($ of[])t.propertyIsEnumerable($)&&b.push($);c.postMessage({Sc:"load",xd:b,Od:pe,Pd:g})});function me(){var c=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Se.push(c)}var pe,ot=(c,f)=>{ee=0,c=Ro(c,f),0<ee?m=c:ko(c)},tt=[],De=0;function Xe(c){var f=new Qe(c>>>=0);return(S(),z)[f.Tc+12>>>0]==0&&(Ct(f,!0),De--),He(f,!1),tt.push(f),$0(c)}var ut=0,kt=()=>{Ie(0,0);var c=tt.pop();b0(c.cd),ut=0};function Ct(c,f){f=f?1:0,(S(),z)[c.Tc+12>>>0]=f}function He(c,f){f=f?1:0,(S(),z)[c.Tc+13>>>0]=f}class Qe{constructor(f){this.cd=f,this.Tc=f-24}}var Ft=c=>{var f=ut;if(!f)return xr(0),0;var $=new Qe(f);(S(),q)[$.Tc+16>>>2>>>0]=f;var b=(S(),q)[$.Tc+4>>>2>>>0];if(!b)return xr(0),f;for(var I of c){if(I===0||I===b)break;if(_0(I,b,$.Tc+16))return xr(I),f}return xr(b),f};function At(){return Ft([])}function Rt(c){return Ft([c>>>0])}function dn(c,f,$,b){return Ft([c>>>0,f>>>0,$>>>0,b>>>0])}var wr=()=>{var c=tt.pop();c||U("no exception to throw");var f=c.cd;throw(S(),z)[c.Tc+13>>>0]==0&&(tt.push(c),He(c,!0),Ct(c,!1),De++),Ao(f),ut=f};function jn(c,f,$){var b=new Qe(c>>>=0);throw f>>>=0,$>>>=0,(S(),q)[b.Tc+16>>>2>>>0]=0,(S(),q)[b.Tc+4>>>2>>>0]=f,(S(),q)[b.Tc+8>>>2>>>0]=$,Ao(c),De++,ut=c}var hi=()=>De;function fi(c,f,$,b){return i?J(2,1,c,f,$,b):mi(c,f,$,b)}function mi(c,f,$,b){if(c>>>=0,f>>>=0,$>>>=0,b>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?fi(c,f,$,b):(c={Ld:$,Rc:c,bd:b,rd:I},i?(c.Sc="spawnThread",postMessage(c,I),0):ie(c))}function mo(c){throw ut||(ut=c>>>0),ut}var gi=globalThis.TextDecoder&&new TextDecoder,br=(c,f,$,b)=>{if($=f+$,b)return $;for(;c[f]&&!(f>=$);)++f;return f},Mg=(c,f=0,$,b)=>{if(16<($=br(c,f>>>=0,$,b))-f&&c.buffer&&gi)return gi.decode(c.buffer instanceof ArrayBuffer?c.subarray(f,$):c.slice(f,$));for(b="";f<$;){var I=c[f++];if(128&I){var C=63&c[f++];if((224&I)==192)b+=String.fromCharCode((31&I)<<6|C);else{var B=63&c[f++];65536>(I=(240&I)==224?(15&I)<<12|C<<6|B:(7&I)<<18|C<<12|B<<6|63&c[f++])?b+=String.fromCharCode(I):(I-=65536,b+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else b+=String.fromCharCode(I)}return b},je=(c,f,$)=>(c>>>=0)?Mg((S(),Y),c,f,$):"";function kg(c,f,$){return i?J(3,1,c,f,$):0}function Cg(c,f){if(i)return J(4,1,c,f)}function Ag(c,f){if(i)return J(5,1,c,f)}function Rg(c,f,$){if(i)return J(6,1,c,f,$)}function Og(c,f,$){return i?J(7,1,c,f,$):0}function Ng(c,f){if(i)return J(8,1,c,f)}function zg(c,f,$){if(i)return J(9,1,c,f,$)}function Bg(c,f,$,b){if(i)return J(10,1,c,f,$,b)}function Pg(c,f,$,b){if(i)return J(11,1,c,f,$,b)}function Dg(c,f,$,b){if(i)return J(12,1,c,f,$,b)}function Ug(c){if(i)return J(13,1,c)}function Lg(c,f){if(i)return J(14,1,c,f)}function Fg(c,f,$){if(i)return J(15,1,c,f,$)}var Ox=()=>U(""),Gt=c=>{c>>>=0;for(var f="";;){var $=(S(),Y)[c++>>>0];if(!$)return f;f+=String.fromCharCode($)}},go={},yo={},Kn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Jt(c,f,$={}){return(function(b,I,C={}){var B=I.name;if(!b)throw new Kn(`type "${B}" must have a positive integer typeid pointer`);if(yo.hasOwnProperty(b)){if(C.yd)return;throw new Kn(`Cannot register type '${B}' twice`)}yo[b]=I,go.hasOwnProperty(b)&&(I=go[b],delete go[b],I.forEach(V=>V()))})(c,f,$)}var Gg=(c,f,$)=>{switch(f){case 1:return $?b=>(S(),z)[b>>>0]:b=>(S(),Y)[b>>>0];case 2:return $?b=>(S(),F)[b>>>1>>>0]:b=>(S(),W)[b>>>1>>>0];case 4:return $?b=>(S(),O)[b>>>2>>>0]:b=>(S(),q)[b>>>2>>>0];case 8:return $?b=>(S(),le)[b>>>3>>>0]:b=>(S(),L)[b>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function Nx(c,f,$,b,I){c>>>=0,$>>>=0,f=Gt(f>>>0);let C=B=>B;if(b=b===0n){let B=8*$;C=V=>BigInt.asUintN(B,V),I=C(I)}Jt(c,{name:f,Oc:C,Vc:(B,V)=>(typeof V=="number"&&(V=BigInt(V)),V),Uc:Gg(f,$,!b),Wc:null})}function zx(c,f,$,b){Jt(c>>>=0,{name:f=Gt(f>>>0),Oc:function(I){return!!I},Vc:function(I,C){return C?$:b},Uc:function(I){return this.Oc((S(),Y)[I>>>0])},Wc:null})}var Wg=[],An=[0,1,,1,null,1,!0,1,!1,1];function wo(c){9<(c>>>=0)&&--An[c+1]===0&&(An[c]=void 0,Wg.push(c))}var wt=c=>{if(!c)throw new Kn(`Cannot use deleted val. handle = ${c}`);return An[c]},Ot=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Wg.pop()||An.length;return An[f]=c,An[f+1]=1,f}};function bo(c){return this.Oc((S(),q)[c>>>2>>>0])}var Bx={name:"emscripten::val",Oc:c=>{var f=wt(c);return wo(c),f},Vc:(c,f)=>Ot(f),Uc:bo,Wc:null};function Px(c){return Jt(c>>>0,Bx)}var Dx=(c,f)=>{switch(f){case 4:return function($){return this.Oc((S(),K)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),X)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}};function Ux(c,f,$){$>>>=0,Jt(c>>>=0,{name:f=Gt(f>>>0),Oc:b=>b,Vc:(b,I)=>I,Uc:Dx(f,$),Wc:null})}function Lx(c,f,$,b,I){c>>>=0,$>>>=0,f=Gt(f>>>0);let C=V=>V;if(b===0){var B=32-8*$;C=V=>V<<B>>>B,I=C(I)}Jt(c,{name:f,Oc:C,Vc:(V,re)=>re,Uc:Gg(f,$,b!==0),Wc:null})}function Fx(c,f,$){function b(C){var B=(S(),q)[C>>>2>>>0];return C=(S(),q)[C+4>>>2>>>0],new I((S(),z).buffer,C,B)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Jt(c>>>=0,{name:$=Gt($>>>0),Oc:b,Uc:b},{yd:!0})}var pn=(c,f,$)=>{var b=(S(),Y);if(f>>>=0,0<$){var I=f;$=f+$-1;for(var C=0;C<c.length;++C){var B=c.codePointAt(C);if(127>=B){if(f>=$)break;b[f++>>>0]=B}else if(2047>=B){if(f+1>=$)break;b[f++>>>0]=192|B>>6,b[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=$)break;b[f++>>>0]=224|B>>12,b[f++>>>0]=128|B>>6&63,b[f++>>>0]=128|63&B}else{if(f+3>=$)break;b[f++>>>0]=240|B>>18,b[f++>>>0]=128|B>>12&63,b[f++>>>0]=128|B>>6&63,b[f++>>>0]=128|63&B,C++}}b[f>>>0]=0,c=f-I}else c=0;return c},yi=c=>{for(var f=0,$=0;$<c.length;++$){var b=c.charCodeAt($);127>=b?f++:2047>=b?f+=2:55296<=b&&57343>=b?(f+=4,++$):f+=3}return f};function Gx(c,f){Jt(c>>>=0,{name:f=Gt(f>>>0),Oc($){var b=(S(),q)[$>>>2>>>0];return b=je($+4,b,!0),qt($),b},Vc($,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var I=typeof b=="string";if(!(I||ArrayBuffer.isView(b)&&b.BYTES_PER_ELEMENT==1))throw new Kn("Cannot pass non-string to std::string");var C=I?yi(b):b.length,B=$r(4+C+1),V=B+4;return(S(),q)[B>>>2>>>0]=C,I?pn(b,V,C+1):(S(),Y).set(b,V>>>0),$!==null&&$.push(qt,B),B},Uc:bo,Wc($){qt($)}})}var qg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Wx=(c,f,$)=>{if(c>>>=1,16<(f=br((S(),W),c,f/2,$))-c&&qg)return qg.decode((S(),W).slice(c,f));for($="";c<f;++c){var b=(S(),W)[c>>>0];$+=String.fromCharCode(b)}return $},qx=(c,f,$)=>{if($??($=2147483647),2>$)return 0;var b=f;$=($-=2)<2*c.length?$/2:c.length;for(var I=0;I<$;++I){var C=c.charCodeAt(I);(S(),F)[f>>>1>>>0]=C,f+=2}return(S(),F)[f>>>1>>>0]=0,f-b},Vx=c=>2*c.length,Hx=(c,f,$)=>{var b="";c>>>=2;for(var I=0;!(I>=f/4);I++){var C=(S(),q)[c+I>>>0];if(!C&&!$)break;b+=String.fromCodePoint(C)}return b},jx=(c,f,$)=>{if(f>>>=0,$??($=2147483647),4>$)return 0;var b=f;$=b+$-4;for(var I=0;I<c.length;++I){var C=c.codePointAt(I);if(65535<C&&I++,(S(),O)[f>>>2>>>0]=C,(f+=4)+4>$)break}return(S(),O)[f>>>2>>>0]=0,f-b},Kx=c=>{for(var f=0,$=0;$<c.length;++$)65535<c.codePointAt($)&&$++,f+=4;return f};function Yx(c,f,$){if(c>>>=0,f>>>=0,$=Gt($>>>=0),f===2)var b=Wx,I=qx,C=Vx;else b=Hx,I=jx,C=Kx;Jt(c,{name:$,Oc:B=>{var V=(S(),q)[B>>>2>>>0];return V=b(B+4,V*f,!0),qt(B),V},Vc:(B,V)=>{if(typeof V!="string")throw new Kn(`Cannot pass non-string to C++ string type ${$}`);var re=C(V),ae=$r(4+re+f);return(S(),q)[ae>>>2>>>0]=re/f,I(V,ae+4,re+f),B!==null&&B.push(qt,ae),ae},Uc:bo,Wc(B){qt(B)}})}function Xx(c,f){Jt(c>>>=0,{zd:!0,name:f=Gt(f>>>0),Oc:()=>{},Vc:()=>{}})}function Qx(c){Mo(c>>>0,!r,1,!n,131072,!1),xe()}var wi=c=>{if(!M)try{if(c(),!(0<ee))try{i?Ti()&&ko(m):Fe(m)}catch(f){f instanceof ne||f=="unwind"||l(0,f)}}catch(f){f instanceof ne||f=="unwind"||l(0,f)}},Zx=!Atomics.waitAsync||((ly=globalThis.navigator)==null?void 0:ly.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function _o(c){c>>>=0,Zx||(Atomics.waitAsync((S(),O),c>>>2,c).value.then(bi),c+=128,Atomics.store((S(),O),c>>>2,1))}var bi=()=>wi(()=>{var c=Ti();c&&(_o(c),y0())});function Jx(c,f){(c>>>=0)==f>>>0?setTimeout(bi):i?postMessage({Zc:c,Sc:"checkMailbox"}):(c=de[c])&&c.postMessage({Sc:"checkMailbox"})}var $o=[];function ev(c,f,$,b,I){for(f>>>=0,I>>>=0,$o.length=0,$=I>>>3,b=I+b>>>3;$<b;){var C;C=(S(),le)[$++>>>0]?(S(),le)[$++>>>0]:(S(),X)[$++>>>0],$o.push(C)}return(f?Oo[f]:qv[c])(...$o)}var tv=()=>{ee=0};function nv(c){c>>>=0,i?postMessage({Sc:"cleanupThread",Nd:c}):_e(de[c])}function rv(c){}var _i=c=>{try{c()}catch(f){U(f)}};function iv(c){var f=(...$)=>{$i.push(c);try{return c(...$)}finally{M||($i.pop(),Wt&&hn===1&&$i.length===0&&(hn=0,ee+=1,_i(ay),typeof Fibers<"u"&&Fibers.Zd()))}};return jg.set(c,f),f}var hn=0,Wt=null,Vg=0,$i=[],xo=new Map,Hg=new Map,jg=new Map,av=0,vo=null,sv=[],Kg=c=>(function(f){if(!M){if(hn===0){var $=!1,b=!1;f((I=0)=>{if(!M&&(Vg=I,$=!0,b)){hn=2,_i(()=>sy(Wt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var C=(function(){var re=(S(),O)[Wt+8>>>2>>>0];return re=Hg.get(re),re=jg.get(re),--ee,re()})()}catch(re){C=re,I=!0}var B=!1;if(!Wt){var V=vo;V&&(vo=null,(I?V.reject:V.resolve)(C),B=!0)}if(I&&!B)throw C}}),b=!0,$||(hn=1,Wt=(function(){var I=$r(65548),C=I+12;if((S(),q)[I>>>2>>>0]=C,(S(),q)[I+4>>>2>>>0]=C+65536,C=$i[0],!xo.has(C)){var B=av++;xo.set(C,B),Hg.set(B,C)}return C=xo.get(C),(S(),O)[I+8>>>2>>>0]=C,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),_i(()=>iy(Wt)))}else hn===2?(hn=0,_i(oy),qt(Wt),Wt=null,sv.forEach(wi)):U(`invalid state: ${hn}`);return Vg}})(f=>{c().then(f)});function ov(c){return c>>>=0,Kg(async()=>{var f=await wt(c);return Ot(f)})}var So=[],uv=c=>{var f=So.length;return So.push(c),f},lv=(c,f)=>{for(var $=Array(c),b=0;b<c;++b){var I=b,C=(S(),q)[f+4*b>>>2>>>0],B=yo[C];if(B===void 0)throw c=`parameter ${b}`,C=d0(C),f=Gt(C),qt(C),new Kn(`${c} has unknown type ${f}`);$[I]=B}return $},cv=(c,f,$)=>{var b=[];return c=c(b,$),b.length&&((S(),q)[f>>>2>>>0]=Ot(b)),c},dv={},xi=c=>{var f=dv[c];return f===void 0?Gt(c):f};function pv(c,f,$){var[b,...I]=lv(c,f>>>0);f=b.Vc.bind(b);var C=I.map(re=>re.Uc.bind(re));c--;var B={toValue:wt};switch(c=C.map((re,ae)=>{var $e=`argFromPtr${ae}`;return B[$e]=re,`${$e}(args${ae?"+"+8*ae:""})`}),$){case 0:var V="toValue(handle)";break;case 2:V="new (toValue(handle))";break;case 3:V="";break;case 1:B.getStringOrSymbol=xi,V="toValue(handle)[getStringOrSymbol(methodName)]"}return V+=`(${c})`,b.zd||(B.toReturnWire=f,B.emval_returnValue=cv,V=`return emval_returnValue(toReturnWire, destructorsRef, ${V})`),V=`return function (handle, methodName, destructorsRef, args) {
  ${V}
  }`,$=new Function(Object.keys(B),V)(...Object.values(B)),V=`methodCaller<(${I.map(re=>re.name)}) => ${b.name}>`,uv(Object.defineProperty($,"name",{value:V}))}function hv(c,f){return f>>>=0,(c=wt(c>>>0))==wt(f)}function fv(c){return(c>>>=0)?(c=xi(c),Ot(globalThis[c])):Ot(globalThis)}function mv(c){return c=xi(c>>>0),Ot(t[c])}function gv(c,f){return f>>>=0,c=wt(c>>>0),f=wt(f),Ot(c[f])}function yv(c){9<(c>>>=0)&&(An[c+1]+=1)}function Yg(c,f,$,b,I){return So[c>>>0](f>>>0,$>>>0,b>>>0,I>>>0)}function wv(c,f,$,b,I){return Yg(c>>>0,f>>>0,$>>>0,b>>>0,I>>>0)}function bv(){return Ot([])}function _v(c){c=wt(c>>>0);for(var f=Array(c.length),$=0;$<c.length;$++)f[$]=c[$];return Ot(f)}function $v(c){return Ot(xi(c>>>0))}function xv(){return Ot({})}function vv(c){for(var f=wt(c>>>=0);f.length;){var $=f.pop();f.pop()($)}wo(c)}function Sv(c,f,$){f>>>=0,$>>>=0,c=wt(c>>>0),f=wt(f),$=wt($),c[f]=$}function Tv(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(S(),O)[f>>>2>>>0]=c.getUTCSeconds(),(S(),O)[f+4>>>2>>>0]=c.getUTCMinutes(),(S(),O)[f+8>>>2>>>0]=c.getUTCHours(),(S(),O)[f+12>>>2>>>0]=c.getUTCDate(),(S(),O)[f+16>>>2>>>0]=c.getUTCMonth(),(S(),O)[f+20>>>2>>>0]=c.getUTCFullYear()-1900,(S(),O)[f+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[f+28>>>2>>>0]=c}var Xg=c=>c%4==0&&(c%100!=0||c%400==0),Qg=[0,31,60,91,121,152,182,213,244,274,305,335],Zg=[0,31,59,90,120,151,181,212,243,273,304,334];function Ev(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(S(),O)[f>>>2>>>0]=c.getSeconds(),(S(),O)[f+4>>>2>>>0]=c.getMinutes(),(S(),O)[f+8>>>2>>>0]=c.getHours(),(S(),O)[f+12>>>2>>>0]=c.getDate(),(S(),O)[f+16>>>2>>>0]=c.getMonth(),(S(),O)[f+20>>>2>>>0]=c.getFullYear()-1900,(S(),O)[f+24>>>2>>>0]=c.getDay();var $=(Xg(c.getFullYear())?Qg:Zg)[c.getMonth()]+c.getDate()-1|0;(S(),O)[f+28>>>2>>>0]=$,(S(),O)[f+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var b=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=b&&c.getTimezoneOffset()==Math.min(b,$)),(S(),O)[f+32>>>2>>>0]=c}function Iv(c){c>>>=0;var f=new Date((S(),O)[c+20>>>2>>>0]+1900,(S(),O)[c+16>>>2>>>0],(S(),O)[c+12>>>2>>>0],(S(),O)[c+8>>>2>>>0],(S(),O)[c+4>>>2>>>0],(S(),O)[c>>>2>>>0],0),$=(S(),O)[c+32>>>2>>>0],b=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(C,I);return 0>$?(S(),O)[c+32>>>2>>>0]=+(I!=C&&B==b):0<$!=(B==b)&&(I=Math.max(C,I),f.setTime(f.getTime()+6e4*((0<$?B:I)-b))),(S(),O)[c+24>>>2>>>0]=f.getDay(),$=(Xg(f.getFullYear())?Qg:Zg)[f.getMonth()]+f.getDate()-1|0,(S(),O)[c+28>>>2>>>0]=$,(S(),O)[c>>>2>>>0]=f.getSeconds(),(S(),O)[c+4>>>2>>>0]=f.getMinutes(),(S(),O)[c+8>>>2>>>0]=f.getHours(),(S(),O)[c+12>>>2>>>0]=f.getDate(),(S(),O)[c+16>>>2>>>0]=f.getMonth(),(S(),O)[c+20>>>2>>>0]=f.getYear(),c=f.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function Jg(c,f,$,b,I,C,B){return i?J(16,1,c,f,$,b,I,C,B):-52}function e0(c,f,$,b,I,C){if(i)return J(17,1,c,f,$,b,I,C)}var _r={},Mv=()=>performance.timeOrigin+performance.now();function t0(c,f){if(i)return J(18,1,c,f);if(_r[c]&&(clearTimeout(_r[c].id),delete _r[c]),!f)return 0;var $=setTimeout(()=>{delete _r[c],wi(()=>g0(c,performance.timeOrigin+performance.now()))},f);return _r[c]={id:$,Yd:f},0}function kv(c,f,$,b){c>>>=0,f>>>=0,$>>>=0,b>>>=0;var I=new Date().getFullYear(),C=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var B=Math.max(C,I);(S(),q)[c>>>2>>>0]=60*B,(S(),O)[f>>>2>>>0]=+(C!=I),c=(f=V=>{var re=Math.abs(V);return`UTC${0<=V?"-":"+"}${String(Math.floor(re/60)).padStart(2,"0")}${String(re%60).padStart(2,"0")}`})(C),f=f(I),I<C?(pn(c,$,17),pn(f,b,17)):(pn(c,b,17),pn(f,$,17))}var Cv=()=>Date.now();function Av(c,f,$){return $>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(S(),le)[$>>>3>>>0]=BigInt(c),0):28}var To=[],n0=(c,f)=>{To.length=0;for(var $;$=(S(),Y)[c++>>>0];){var b=$!=105;f+=(b&=$!=112)&&f%8?4:0,To.push($==112?(S(),q)[f>>>2>>>0]:$==106?(S(),le)[f>>>3>>>0]:$==105?(S(),O)[f>>>2>>>0]:(S(),X)[f>>>3>>>0]),f+=b?8:4}return To};function Rv(c,f,$){return c>>>=0,f=n0(f>>>0,$>>>0),Oo[c](...f)}function Ov(c,f,$){return c>>>=0,f=n0(f>>>0,$>>>0),Oo[c](...f)}var Nv=()=>{};function zv(c,f){return E(je(c>>>0,f>>>0))}var Bv=()=>{throw ee+=1,"unwind"};function Pv(){return 4294901760}var Dv=()=>navigator.hardwareConcurrency,Rn={},vi=c=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+f[1]:0},r0=c=>{for(var f of c)(c=vi(f))&&(Rn[c]=f)};function Uv(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),r0(c),Rn.gd=vi(c[3]),Rn.Jd=c,Rn.gd}function Si(c){if(!(c=Rn[c>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(c))c=f[1];else{if(!(f=/^(.+?)@/.exec(c)))return 0;c=f[1]}qt(Si.hd??0),f=yi(c)+1;var $=$r(f);return $&&pn(c,$,f),Si.hd=$,Si.hd}function Lv(c){c>>>=0;var f=(S(),Y).length;if(c<=f||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var b=f*(1+.2/$);b=Math.min(b,c+100663296);e:{b=(Math.min(4294901760,65536*Math.ceil(Math.max(c,b)/65536))-pe.buffer.byteLength+65535)/65536|0;try{pe.grow(b),N();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function Fv(c,f,$){if(c>>>=0,f>>>=0,Rn.gd==c)var b=Rn.Jd;else(b=Error().stack.toString().split(`
`))[0]=="Error"&&b.shift(),r0(b);for(var I=3;b[I]&&vi(b[I])!=c;)++I;for(c=0;c<$&&b[c+I];++c)(S(),O)[f+4*c>>>2>>>0]=vi(b[c+I]);return c}var Eo,Io={},i0=()=>{var b;if(!Eo){var c,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((b=globalThis.navigator)==null?void 0:b.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in Io)Io[c]===void 0?delete f[c]:f[c]=Io[c];var $=[];for(c in f)$.push(`${c}=${f[c]}`);Eo=$}return Eo};function a0(c,f){if(i)return J(19,1,c,f);c>>>=0,f>>>=0;var $,b=0,I=0;for($ of i0()){var C=f+b;(S(),q)[c+I>>>2>>>0]=C,b+=pn($,C,1/0)+1,I+=4}return 0}function s0(c,f){if(i)return J(20,1,c,f);c>>>=0,f>>>=0;var $=i0();for(var b of((S(),q)[c>>>2>>>0]=$.length,c=0,$))c+=yi(b)+1;return(S(),q)[f>>>2>>>0]=c,0}function o0(c){return i?J(21,1,c):52}function u0(c,f,$,b){return i?J(22,1,c,f,$,b):52}function l0(c,f,$,b){return i?J(23,1,c,f,$,b):70}var Gv=[null,[],[]];function c0(c,f,$,b){if(i)return J(24,1,c,f,$,b);f>>>=0,$>>>=0,b>>>=0;for(var I=0,C=0;C<$;C++){var B=(S(),q)[f>>>2>>>0],V=(S(),q)[f+4>>>2>>>0];f+=8;for(var re=0;re<V;re++){var ae=c,$e=(S(),Y)[B+re>>>0],Ce=Gv[ae];$e===0||$e===10?((ae===1?v:E)(Mg(Ce)),Ce.length=0):Ce.push($e)}I+=V}return(S(),q)[b>>>2>>>0]=I,0}function Wv(c){return c>>>0}i||(function(){for(var c=t.numThreads-1;c--;)me();ve.push(async()=>{var f=(async function(){if(!i)return Promise.all(Se.map(ge))})();ke++,await f,--ke==0&&Re&&(f=Re,Re=null,f())})})(),i||(pe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),N()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Ee(),t.stackRestore=c=>Te(c),t.stackAlloc=c=>Co(c),t.setValue=function(c,f,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),z)[c>>>0]=f;break;case"i16":(S(),F)[c>>>1>>>0]=f;break;case"i32":(S(),O)[c>>>2>>>0]=f;break;case"i64":(S(),le)[c>>>3>>>0]=BigInt(f);break;case"float":(S(),K)[c>>>2>>>0]=f;break;case"double":(S(),X)[c>>>3>>>0]=f;break;case"*":(S(),q)[c>>>2>>>0]=f;break;default:U(`invalid type for setValue: ${$}`)}},t.getValue=function(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(S(),z)[c>>>0];case"i16":return(S(),F)[c>>>1>>>0];case"i32":return(S(),O)[c>>>2>>>0];case"i64":return(S(),le)[c>>>3>>>0];case"float":return(S(),K)[c>>>2>>>0];case"double":return(S(),X)[c>>>3>>>0];case"*":return(S(),q)[c>>>2>>>0];default:U(`invalid type for getValue: ${f}`)}},t.UTF8ToString=je,t.stringToUTF8=pn,t.lengthBytesUTF8=yi;var d0,p0,Ti,qt,$r,Mo,h0,f0,m0,ko,g0,y0,Ie,xr,w0,Te,Co,Ee,b0,Ao,_0,$0,x0,Ro,v0,S0,T0,E0,I0,M0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,ay,sy,oy,en,qv=[be,We,fi,kg,Cg,Ag,Rg,Og,Ng,zg,Bg,Pg,Dg,Ug,Lg,Fg,Jg,e0,t0,a0,s0,o0,u0,l0,c0],Oo={1003524:(c,f,$,b,I)=>{if(t===void 0||!t.Xc)return 1;if((c=je(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.Xc.get(c)))return 2;if(f=Number(f>>>0),$=Number($>>>0),b=Number(b>>>0),f+$>c.byteLength)return 3;try{let C=c.subarray(f,f+$);switch(I){case 0:(S(),Y).set(C,b>>>0);break;case 1:t.Qd?t.Qd(b,C):t.Id(b,C);break;default:return 4}return 0}catch{return 4}},1004348:(c,f,$)=>{t.td(c,(S(),Y).subarray(f>>>0,f+$>>>0))},1004412:()=>t.Sd(),1004454:c=>{t.sd(c)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:c=>t.Ad(c),1004609:c=>t.Ed(c),1004641:(c,f,$)=>{t.ed(Number(c),Number(f),Number($),!0)},1004704:(c,f,$)=>{t.ed(Number(c),Number(f),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:c=>{t.$b("Abs",c,void 0)},1004869:c=>{t.$b("Neg",c,void 0)},1004920:c=>{t.$b("Floor",c,void 0)},1004973:c=>{t.$b("Ceil",c,void 0)},1005025:c=>{t.$b("Reciprocal",c,void 0)},1005083:c=>{t.$b("Sqrt",c,void 0)},1005135:c=>{t.$b("Exp",c,void 0)},1005186:c=>{t.$b("Erf",c,void 0)},1005237:c=>{t.$b("Sigmoid",c,void 0)},1005292:(c,f,$)=>{t.$b("HardSigmoid",c,{alpha:f,beta:$})},1005371:c=>{t.$b("Log",c,void 0)},1005422:c=>{t.$b("Sin",c,void 0)},1005473:c=>{t.$b("Cos",c,void 0)},1005524:c=>{t.$b("Tan",c,void 0)},1005575:c=>{t.$b("Asin",c,void 0)},1005627:c=>{t.$b("Acos",c,void 0)},1005679:c=>{t.$b("Atan",c,void 0)},1005731:c=>{t.$b("Sinh",c,void 0)},1005783:c=>{t.$b("Cosh",c,void 0)},1005835:c=>{t.$b("Asinh",c,void 0)},1005888:c=>{t.$b("Acosh",c,void 0)},1005941:c=>{t.$b("Atanh",c,void 0)},1005994:c=>{t.$b("Tanh",c,void 0)},1006046:c=>{t.$b("Not",c,void 0)},1006097:(c,f,$)=>{t.$b("Clip",c,{min:f,max:$})},1006166:c=>{t.$b("Clip",c,void 0)},1006218:(c,f)=>{t.$b("Elu",c,{alpha:f})},1006276:c=>{t.$b("Gelu",c,void 0)},1006328:c=>{t.$b("Relu",c,void 0)},1006380:(c,f)=>{t.$b("LeakyRelu",c,{alpha:f})},1006444:(c,f)=>{t.$b("ThresholdedRelu",c,{alpha:f})},1006514:(c,f)=>{t.$b("Cast",c,{to:f})},1006572:c=>{t.$b("Add",c,void 0)},1006623:c=>{t.$b("Sub",c,void 0)},1006674:c=>{t.$b("Mul",c,void 0)},1006725:c=>{t.$b("Div",c,void 0)},1006776:c=>{t.$b("Pow",c,void 0)},1006827:c=>{t.$b("Equal",c,void 0)},1006880:c=>{t.$b("Greater",c,void 0)},1006935:c=>{t.$b("GreaterOrEqual",c,void 0)},1006997:c=>{t.$b("Less",c,void 0)},1007049:c=>{t.$b("LessOrEqual",c,void 0)},1007108:(c,f,$,b,I)=>{t.$b("ReduceMean",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007283:(c,f,$,b,I)=>{t.$b("ReduceMax",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007457:(c,f,$,b,I)=>{t.$b("ReduceMin",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007631:(c,f,$,b,I)=>{t.$b("ReduceProd",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007806:(c,f,$,b,I)=>{t.$b("ReduceSum",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007980:(c,f,$,b,I)=>{t.$b("ReduceL1",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008153:(c,f,$,b,I)=>{t.$b("ReduceL2",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008326:(c,f,$,b,I)=>{t.$b("ReduceLogSum",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008503:(c,f,$,b,I)=>{t.$b("ReduceSumSquare",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008683:(c,f,$,b,I)=>{t.$b("ReduceLogSumExp",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008863:c=>{t.$b("Where",c,void 0)},1008916:(c,f,$)=>{t.$b("Transpose",c,{perm:f?Array.from((S(),O).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1009040:(c,f,$,b)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:je($),format:b?"NHWC":"NCHW"})},1009173:(c,f,$,b)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:je($),format:b?"NHWC":"NCHW"})},1009306:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue,fn)=>{t.$b("ConvTranspose",c,{format:re?"NHWC":"NCHW",autoPad:f,dilations:[$],group:b,kernelShape:[I],pads:[C,B],strides:[V],wIsConst:()=>!!(S(),z)[ae>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],outputShape:Be?Array.from((S(),O).subarray(Number(Be)>>>0,Number(Ue)>>>0)):[],activation:je(fn)})},1009739:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue)=>{t.$b("ConvTranspose",c,{format:V?"NHWC":"NCHW",autoPad:f,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:b,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(S(),z)[re>>>0],outputPadding:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Be)>>>0)):[],activation:je(Ue)})},1010400:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue,fn)=>{t.$b("ConvTranspose",c,{format:re?"NHWC":"NCHW",autoPad:f,dilations:[$],group:b,kernelShape:[I],pads:[C,B],strides:[V],wIsConst:()=>!!(S(),z)[ae>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],outputShape:Be?Array.from((S(),O).subarray(Number(Be)>>>0,Number(Ue)>>>0)):[],activation:je(fn)})},1010833:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue)=>{t.$b("ConvTranspose",c,{format:V?"NHWC":"NCHW",autoPad:f,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:b,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(S(),z)[re>>>0],outputPadding:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Be)>>>0)):[],activation:je(Ue)})},1011494:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1011585:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue)=>{t.$b("AveragePool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(re)>>>0)):[],pads:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Be)>>>0)):[]})},1012064:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1012155:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue)=>{t.$b("AveragePool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(re)>>>0)):[],pads:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Be)>>>0)):[]})},1012634:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1012721:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue)=>{t.$b("MaxPool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(re)>>>0)):[],pads:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Be)>>>0)):[]})},1013196:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1013283:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue)=>{t.$b("MaxPool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(re)>>>0)):[],pads:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Be)>>>0)):[]})},1013758:(c,f,$,b,I)=>{t.$b("Gemm",c,{alpha:f,beta:$,transA:b,transB:I})},1013862:c=>{t.$b("MatMul",c,void 0)},1013916:(c,f,$,b)=>{t.$b("ArgMax",c,{keepDims:!!f,selectLastIndex:!!$,axis:b})},1014024:(c,f,$,b)=>{t.$b("ArgMin",c,{keepDims:!!f,selectLastIndex:!!$,axis:b})},1014132:(c,f)=>{t.$b("Softmax",c,{axis:f})},1014195:(c,f)=>{t.$b("Concat",c,{axis:f})},1014255:(c,f,$,b,I)=>{t.$b("Split",c,{axis:f,numOutputs:$,splitSizes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1014411:c=>{t.$b("Expand",c,void 0)},1014465:(c,f)=>{t.$b("Gather",c,{axis:Number(f)})},1014536:(c,f)=>{t.$b("GatherElements",c,{axis:Number(f)})},1014615:(c,f)=>{t.$b("GatherND",c,{batch_dims:Number(f)})},1014694:(c,f,$,b,I,C,B,V,re,ae,$e)=>{t.$b("Resize",c,{antialias:f,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(b)>>>0)):[],coordinateTransformMode:je(I),cubicCoeffA:C,excludeOutside:B,extrapolationValue:V,keepAspectRatioPolicy:je(re),mode:je(ae),nearestMode:je($e)})},1015056:(c,f,$,b,I,C,B)=>{t.$b("Slice",c,{starts:f?Array.from((S(),O).subarray(Number(f)>>>0,Number($)>>>0)):[],ends:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[]})},1015320:c=>{t.$b("Tile",c,void 0)},1015372:(c,f,$)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:$?"NHWC":"NCHW"})},1015486:(c,f,$)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:$?"NHWC":"NCHW"})},1015600:c=>{t.$b("Range",c,void 0)},1015653:(c,f)=>{t.$b("Einsum",c,{equation:je(f)})},1015734:(c,f,$,b,I)=>{t.$b("Pad",c,{mode:f,value:$,pads:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1015877:(c,f,$,b,I,C)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!b,format:C?"NHWC":"NCHW"})},1016046:(c,f,$,b,I,C)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!b,format:C?"NHWC":"NCHW"})},1016215:(c,f,$)=>{t.$b("CumSum",c,{exclusive:Number(f),reverse:Number($)})},1016312:(c,f,$)=>{t.$b("DequantizeLinear",c,{axis:f,blockSize:$})},1016402:(c,f,$,b,I)=>{t.$b("GridSample",c,{align_corners:f,mode:je($),padding_mode:je(b),format:I?"NHWC":"NCHW"})},1016572:(c,f,$,b,I)=>{t.$b("GridSample",c,{align_corners:f,mode:je($),padding_mode:je(b),format:I?"NHWC":"NCHW"})},1016742:(c,f)=>{t.$b("ScatterND",c,{reduction:je(f)})},1016827:(c,f,$,b,I,C,B,V,re)=>{t.$b("Attention",c,{numHeads:f,isUnidirectional:$,maskFilterValue:b,scale:I,doRotary:C,qkvHiddenSizes:B?Array.from((S(),O).subarray(Number(V)>>>0,Number(V)+B>>>0)):[],pastPresentShareBuffer:!!re})},1017099:c=>{t.$b("BiasAdd",c,void 0)},1017154:c=>{t.$b("BiasSplitGelu",c,void 0)},1017215:c=>{t.$b("FastGelu",c,void 0)},1017271:(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue,fn,No)=>{t.$b("Conv",c,{format:Ce?"NHWC":"NCHW",auto_pad:f,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(b)>>>0)):[],group:I,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],pads:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(re)>>>0)):[],strides:ae?Array.from((S(),O).subarray(Number(ae)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!(S(),z)[Number(Be)>>>0],activation:je(Ue),activation_params:fn?Array.from((S(),K).subarray(Number(fn)>>>0,Number(No)>>>0)):[]})},1017855:c=>{t.$b("Gelu",c,void 0)},1017907:(c,f,$,b,I,C,B,V,re)=>{t.$b("GroupQueryAttention",c,{numHeads:f,kvNumHeads:$,scale:b,softcap:I,doRotary:C,rotaryInterleaved:B,smoothSoftmax:V,localWindowSize:re})},1018124:(c,f,$,b)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:$,simplified:!!b})},1018235:(c,f,$,b)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:$,simplified:!!b})},1018346:(c,f,$,b,I,C)=>{t.$b("MatMulNBits",c,{k:f,n:$,accuracyLevel:b,bits:I,blockSize:C})},1018473:(c,f,$,b,I,C)=>{t.$b("MultiHeadAttention",c,{numHeads:f,isUnidirectional:$,maskFilterValue:b,scale:I,doRotary:C})},1018632:(c,f)=>{t.$b("QuickGelu",c,{alpha:f})},1018696:(c,f,$,b,I)=>{t.$b("RotaryEmbedding",c,{interleaved:!!f,numHeads:$,rotaryEmbeddingDim:b,scale:I})},1018835:(c,f,$)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!$})},1018937:(c,f,$)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!$})},1019039:(c,f,$,b)=>{t.$b("GatherBlockQuantized",c,{gatherAxis:f,quantizeAxis:$,blockSize:b})},1019160:c=>{t.Fd(c)},1019194:(c,f)=>t.Hd(Number(c),Number(f),t.Yc.Kd,t.Yc.errors)};function Vv(c,f,$){return Kg(async()=>{await t.Dd(Number(c),Number(f),Number($))})}function Hv(){return typeof wasmOffsetConverter<"u"}function jv(c,f,$,b){var I=Ee();try{return C0(c,f,$,b)}catch(C){if(Te(I),C!==C+0)throw C;Ie(1,0)}}function Kv(c,f,$){var b=Ee();try{return E0(c,f,$)}catch(I){if(Te(b),I!==I+0)throw I;Ie(1,0)}}function Yv(c){var f=Ee();try{v0(c)}catch($){if(Te(f),$!==$+0)throw $;Ie(1,0)}}function Xv(c,f){var $=Ee();try{return Ro(c,f)}catch(b){if(Te($),b!==b+0)throw b;Ie(1,0)}}function Qv(c,f,$){var b=Ee();try{x0(c,f,$)}catch(I){if(Te(b),I!==I+0)throw I;Ie(1,0)}}function Zv(c,f){var $=Ee();try{A0(c,f)}catch(b){if(Te($),b!==b+0)throw b;Ie(1,0)}}function Jv(c,f,$,b,I,C,B){var V=Ee();try{return M0(c,f,$,b,I,C,B)}catch(re){if(Te(V),re!==re+0)throw re;Ie(1,0)}}function e3(c,f,$,b,I,C){var B=Ee();try{S0(c,f,$,b,I,C)}catch(V){if(Te(B),V!==V+0)throw V;Ie(1,0)}}function t3(c,f,$,b){var I=Ee();try{k0(c,f,$,b)}catch(C){if(Te(I),C!==C+0)throw C;Ie(1,0)}}function n3(c,f,$,b,I){var C=Ee();try{T0(c,f,$,b,I)}catch(B){if(Te(C),B!==B+0)throw B;Ie(1,0)}}function r3(c,f,$,b,I,C,B){var V=Ee();try{O0(c,f,$,b,I,C,B)}catch(re){if(Te(V),re!==re+0)throw re;Ie(1,0)}}function i3(c,f,$,b,I,C,B){var V=Ee();try{N0(c,f,$,b,I,C,B)}catch(re){if(Te(V),re!==re+0)throw re;Ie(1,0)}}function a3(c,f,$,b,I,C,B,V){var re=Ee();try{D0(c,f,$,b,I,C,B,V)}catch(ae){if(Te(re),ae!==ae+0)throw ae;Ie(1,0)}}function s3(c,f,$,b,I){var C=Ee();try{return R0(c,f,$,b,I)}catch(B){if(Te(C),B!==B+0)throw B;Ie(1,0)}}function o3(c,f,$){var b=Ee();try{return U0(c,f,$)}catch(I){if(Te(b),I!==I+0)throw I;Ie(1,0)}}function u3(c,f,$,b,I,C,B,V){var re=Ee();try{L0(c,f,$,b,I,C,B,V)}catch(ae){if(Te(re),ae!==ae+0)throw ae;Ie(1,0)}}function l3(c,f,$,b,I,C,B,V,re,ae,$e,Ce){var Be=Ee();try{z0(c,f,$,b,I,C,B,V,re,ae,$e,Ce)}catch(Ue){if(Te(Be),Ue!==Ue+0)throw Ue;Ie(1,0)}}function c3(c,f,$,b,I,C){var B=Ee();try{return B0(c,f,$,b,I,C)}catch(V){if(Te(B),V!==V+0)throw V;Ie(1,0)}}function d3(c,f,$){var b=Ee();try{return F0(c,f,$)}catch(I){if(Te(b),I!==I+0)throw I;return Ie(1,0),0n}}function p3(c,f,$,b,I,C,B,V,re){var ae=Ee();try{I0(c,f,$,b,I,C,B,V,re)}catch($e){if(Te(ae),$e!==$e+0)throw $e;Ie(1,0)}}function h3(c){var f=Ee();try{return G0(c)}catch($){if(Te(f),$!==$+0)throw $;Ie(1,0)}}function f3(c,f){var $=Ee();try{return ry(c,f)}catch(b){if(Te($),b!==b+0)throw b;return Ie(1,0),0n}}function m3(c){var f=Ee();try{return W0(c)}catch($){if(Te(f),$!==$+0)throw $;return Ie(1,0),0n}}function g3(c,f,$,b){var I=Ee();try{return Y0(c,f,$,b)}catch(C){if(Te(I),C!==C+0)throw C;Ie(1,0)}}function y3(c,f,$,b,I){var C=Ee();try{return X0(c,f,$,b,I)}catch(B){if(Te(C),B!==B+0)throw B;Ie(1,0)}}function w3(c,f,$,b,I,C){var B=Ee();try{return Q0(c,f,$,b,I,C)}catch(V){if(Te(B),V!==V+0)throw V;Ie(1,0)}}function b3(c,f,$,b,I,C){var B=Ee();try{return Z0(c,f,$,b,I,C)}catch(V){if(Te(B),V!==V+0)throw V;Ie(1,0)}}function _3(c,f,$,b,I,C,B,V){var re=Ee();try{return P0(c,f,$,b,I,C,B,V)}catch(ae){if(Te(re),ae!==ae+0)throw ae;Ie(1,0)}}function $3(c,f,$,b,I){var C=Ee();try{return J0(c,f,$,b,I)}catch(B){if(Te(C),B!==B+0)throw B;return Ie(1,0),0n}}function x3(c,f,$,b){var I=Ee();try{return ey(c,f,$,b)}catch(C){if(Te(I),C!==C+0)throw C;Ie(1,0)}}function v3(c,f,$,b){var I=Ee();try{return ty(c,f,$,b)}catch(C){if(Te(I),C!==C+0)throw C;Ie(1,0)}}function S3(c,f,$,b,I,C,B,V,re,ae,$e,Ce){var Be=Ee();try{return ny(c,f,$,b,I,C,B,V,re,ae,$e,Ce)}catch(Ue){if(Te(Be),Ue!==Ue+0)throw Ue;Ie(1,0)}}function T3(c,f,$,b,I,C,B,V,re,ae,$e){var Ce=Ee();try{j0(c,f,$,b,I,C,B,V,re,ae,$e)}catch(Be){if(Te(Ce),Be!==Be+0)throw Be;Ie(1,0)}}function E3(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue,fn,No){var C3=Ee();try{K0(c,f,$,b,I,C,B,V,re,ae,$e,Ce,Be,Ue,fn,No)}catch(zo){if(Te(C3),zo!==zo+0)throw zo;Ie(1,0)}}function I3(c,f,$){var b=Ee();try{return q0(c,f,$)}catch(I){if(Te(b),I!==I+0)throw I;Ie(1,0)}}function M3(c,f,$){var b=Ee();try{return V0(c,f,$)}catch(I){if(Te(b),I!==I+0)throw I;Ie(1,0)}}function k3(c,f,$,b){var I=Ee();try{H0(c,f,$,b)}catch(C){if(Te(I),C!==C+0)throw C;Ie(1,0)}}function Ei(){if(0<ke)Re=Ei;else if(i)y==null||y(t),D();else{for(var c=ve;0<c.length;)c.shift()(t);0<ke?Re=Ei:(t.calledRun=!0,M||(D(),y==null||y(t)))}}return i||(en=await te(),Ei()),t.PTR_SIZE=4,R?t:new Promise((c,f)=>{y=c,w=f})}var iu,au,Ay=Z(()=>{var e,t;iu=ru,au=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),au&&ru()}),zi,Bi,su,pt,ou,Ir,uu,lu,Pi,cu,Di,du,Ui,pu,Li=Z(()=>{Ri(),zi=typeof location>"u"?void 0:location.origin,Bi=self.location.href>"file:"&&self.location.href<"file;",su=()=>{{if(Bi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,zi).href}return self.location.href}},pt=su(),ou=()=>{if(pt&&!pt.startsWith("blob:"))return pt.substring(0,pt.lastIndexOf("/")+1)},Ir=(e,t)=>{try{let n=t??pt;return(n?new URL(e,n):new URL(e)).origin===zi}catch{return!1}},uu=(e,t)=>{let n=t??pt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},lu=(e,t)=>`${t??"./"}${e}`,Pi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},cu=async e=>(await import(e)).default,Di=(Cy(),Yn(eu)).default,du=async()=>{if(!pt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ir(pt))return[void 0,Di()];let e=await Pi(pt);return[e,Di(e)]},Ui=(Ay(),Yn(nu)).default,pu=async(e,t,n,r)=>{let i=Ui&&!(e||t);if(i)if(pt)i=Ir(pt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ui];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??uu(a,t),o=n&&s&&!Ir(s,t),u=o?await Pi(s):s??lu(a,t);return[o?u:void 0,await cu(u)]}}}),Fi,Mr,Zn,Gi,hu,fu,mu,Wi,Pe,wn=Z(()=>{Li(),Mr=!1,Zn=!1,Gi=!1,hu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},mu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Wi=async e=>{if(Mr)return Promise.resolve();if(Zn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Gi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!mu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!fu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=hu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[p,h]=await pu(o,a,n>1,!!d||!!l),g=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),m.push(new Promise((y,w)=>{let _={numThreads:n};if(d)_.wasmBinary=d,_.locateFile=x=>x;else if(l||a)_.locateFile=x=>l??a+x;else if(o&&o.indexOf("blob:")!==0)_.locateFile=x=>new URL(x,o).href;else if(p){let x=ou();x&&(_.locateFile=T=>x+T)}h(_).then(x=>{Zn=!1,Mr=!0,Fi=x,y(),p&&URL.revokeObjectURL(p)},x=>{Zn=!1,Gi=!0,w(x)})})),await Promise.race(m),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Pe=()=>{if(Mr&&Fi)return Fi;throw new Error("WebAssembly is not initialized yet.")}}),_t,kr,Ne,qi=Z(()=>{wn(),_t=(e,t)=>{let n=Pe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},kr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")kr(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ne=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),gu,Ry=Z(()=>{wn(),qi(),gu=e=>{let t=Pe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=_t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&kr(e.extra,"",new WeakSet,(s,o)=>{let u=_t(s,r),l=_t(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),yu,wu,bu,bn,_u,$u,Oy=Z(()=>{wn(),qi(),yu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},wu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},bu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},bn=(e,t,n,r)=>{let i=_t(t,r),a=_t(n,r);Pe()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},_u=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",bn(e,"session.disable_quant_qdq","1",n),bn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&bn(e,"deviceType",p,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);bn(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=_t(a,n),u=s.length,l=0,d=0;if(u>0){l=Pe()._malloc(u*Pe().PTR_SIZE),n.push(l),d=Pe()._malloc(u*Pe().PTR_SIZE),n.push(d);for(let p=0;p<u;p++)Pe().setValue(l+p*Pe().PTR_SIZE,s[p][0],"*"),Pe().setValue(d+p*Pe().PTR_SIZE,s[p][1],"*")}await Pe()._OrtAppendExecutionProvider(e,o,l,d,u)!==0&&Ne(`Can't append execution provider: ${a}.`)}},$u=async e=>{let t=Pe(),n=0,r=[],i=e||{};bu(i);try{let a=yu(i.graphOptimizationLevel??"all"),s=wu(i.executionMode??"sequential"),o=typeof i.logId=="string"?_t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof i.optimizedModelFilePath=="string"?_t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,d),n===0&&Ne("Can't create session options."),i.executionProviders&&await _u(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);bn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=_t(p,r);t._OrtAddFreeDimensionOverride(n,g,h)!==0&&Ne(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&kr(i.extra,"",new WeakSet,(p,h)=>{bn(n,p,h,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),_n,jt,$n,Cr,Ar,Vi,Hi,ji,he=Z(()=>{_n=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},$n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Cr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ar=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Hi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ji=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ki,xu=Z(()=>{Ri(),Ki=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),vu,Su,Tu,Eu,Yi,Iu,Me,Kt=Z(()=>{he(),vu=["V","I","W","E","F"],Su=(e,t)=>{console.log(`[${vu[e]},${new Date().toISOString()}]${t}`)},Yi=(e,t)=>{Tu=e,Eu=t},Iu=(e,t)=>{let n=Ar(e),r=Ar(Tu);n>=r&&Su(n,typeof t=="function"?t():t)},Me=(...e)=>{Eu&&Iu(...e)}}),Mu,Bn,G,Rr,ku,Cu,Au,ye=Z(()=>{Mu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=Mu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(d>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},G=class Ii{static size(t){return Ii.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ii.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ii.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Rr=class vr{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)vr.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return vr.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return vr.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(vr.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),a[o]=d-a[s],Math.floor((t+d-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},ku=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Bn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Cu=-34028234663852886e22,Au=34028234663852886e22}),Xi,Ru=Z(()=>{he(),Xi=(e,t)=>new(Cr(t))(e)}),Qi,Zi,Ji,Ou,ea,Nu,ta,na,ra,zu,Bu,Ny=Z(()=>{he(),Kt(),Qi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Zi=(e,t)=>{if(t==="int32")return e;let n=Qi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Cr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ji=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ou=1,ea=()=>Ou++,Nu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ta=(e,t)=>{let n=Qi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},na=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ta(this.dataType,this.tensorShape)}destroy(){Me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Ji(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ra=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Nu.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);Me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==ta(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Zi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Ji(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},zu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ea();return this.tensorTrackersById.set(e,new ra(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=ea(),s=new na({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ra(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,n)){Me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new na({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Bu=(...e)=>new zu(...e)}),Jn,Pu,Du,zy=Z(()=>{he(),wn(),Ru(),Ny(),Kt(),Jn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Pu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Du=class{constructor(e){this.tensorManager=Bu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Yi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Pu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Jn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Jn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Pe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Xi(n,t)}}registerMLTensor(e,t,n,r){let i=Jn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(s){let p=Zi(new Uint8Array(l),"int64");d=new Int32Array(p.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Jn.get(_n(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ia=Z(()=>{}),aa,Or,Nr,Uu,Lu,sa,oa,Fu,Gu,By=Z(()=>{Kt(),ia(),aa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Or=[],Nr=e=>Math.ceil(Number(e)/16)*16,Uu=e=>{for(let t=0;t<Or.length;t++){let n=Or[t];if(e<=n)return n}return Math.ceil(e/16)*16},Lu=1,sa=()=>Lu++,oa=async(e,t,n,r)=>{let i=Nr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},Fu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of aa)Or.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Nr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),Me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Nr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=sa();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Uu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:sa(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await oa(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=aa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Gu=(...e)=>new Fu(...e)}),Wu,Oe,Ve=Z(()=>{Wu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new Wu(e)}),Pn,zr,Ke,rt,ce,qe,ua,Dn,nn,ue,er,H,oe,qu,la,Vu,Hu,we=Z(()=>{he(),ye(),Pn=64,zr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ke=(e,t=1)=>{let n=zr(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=zr(e,t);return typeof n=="string"?n:n[1]},ce=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:G.computeStrides(n)})}),t},qe=e=>e%4===0?4:e%2===0?2:1,ua=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Dn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,nn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ue=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,er=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=zr(t,i),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],h={indices:u,value:d,storage:p,tensor:t},g=R=>typeof R=="string"?R:`${R}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,_=`${y}${e}_strides`,x="";for(let R=0;R<s-1;R++)x+=`
    let dim${R} = current / ${ue(_,R,s)};
    let rest${R} = current % ${ue(_,R,s)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=R=>(m.offsetToIndices=!0,s<2?R:`o2i_${e}(${R})`),E=[];if(s>=2)for(let R=s-1;R>=0;R--)E.push(`${ue(_,R,s)} * (indices[${R}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,k=R=>(m.indicesToOffset=!0,s<2?R:`i2o_${e}(${R})`),S=(...R)=>s===0?"0u":`${h.indices}(${R.map(g).join(",")})`,A=(R,N)=>s<2?`${R}`:`${ue(R,N,s)}`,z=(R,N,D)=>s<2?`${R}=${D};`:`${ue(R,N,s)}=${D};`,Y={},F=(R,N)=>{m.broadcastedIndicesToOffset=!0;let D=`${N.name}broadcastedIndicesTo${e}Offset`;if(D in Y)return`${D}(${R})`;let U=[];for(let j=s-1;j>=0;j--){let te=N.indicesGet("outputIndices",j+N.rank-s);U.push(`${A(_,j)} * (${te} % ${A(w,j)})`)}return Y[D]=`fn ${D}(outputIndices: ${N.type.indices}) -> u32 {
             return ${U.length>0?U.join("+"):"0u"};
           }`,`${D}(${R})`},W=(R,N)=>(()=>{if(h.storage===h.value)return`${e}[${R}]=${N};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${N}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),O=R=>(()=>{if(h.storage===h.value)return`${e}[${R}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${R}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${R}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),q=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${d} {
    return ${O(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let R=o.map(D=>`d${D}: u32`).join(", "),N=o.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${R}) -> ${d} {
    return get_${e}ByIndices(${S(N)});
  }`})(),X=(...R)=>{if(R.length!==s)throw new Error(`indices length must be ${s}`);let N=R.map(g).join(",");return s===0?O("0u"):s===1?O(N[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${N})`)},le=R=>s<2?O(R):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${R})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${d}) {
    ${W(`i2o_${e}(indices)`,"value")}
  }`,P=s<2?"":(()=>{let R=o.map(D=>`d${D}: u32`).join(", "),N=o.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${R}, value: ${d}) {
    set_${e}ByIndices(${S(N)}, value);
  }`})();return{impl:()=>{let R=[],N=!1;return m.offsetToIndices&&(R.push(T),N=!0),m.indicesToOffset&&(R.push(M),N=!0),m.broadcastedIndicesToOffset&&(Object.values(Y).forEach(D=>R.push(D)),N=!0),m.set&&(R.push(P),N=!0),m.setByIndices&&(R.push(L),N=!0),m.get&&(R.push(K),N=!0),m.getByIndices&&(R.push(q),N=!0),!a&&N&&R.unshift(`const ${w} = ${h.indices}(${n.join(",")});`,`const ${_} = ${h.indices}(${G.computeStrides(n).join(",")});`),R.join(`
`)},type:h,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:F,indices:S,indicesGet:A,indicesSet:z,set:(...R)=>{if(R.length!==s+1)throw new Error(`indices length must be ${s}`);let N=R[s];if(typeof N!="string")throw new Error("value must be string");let D=R.slice(0,s).map(g).join(",");return s===0?W("0u",N):s===1?W(D[0],N):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${D}, ${N})`)},setByOffset:W,setByIndices:(R,N)=>s<2?W(R,N):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${N});`),get:X,getByOffset:O,getByIndices:le,usage:r,name:e,strides:_,shape:w,rank:s}},H=(e,t,n,r=1)=>er(e,t,n,"input",r),oe=(e,t,n,r=1)=>er(e,t,n,"output",r),qu=(e,t,n)=>er(e,t,n,"atomicOutput",1),la=(e,t,n,r=1)=>er(e,t,n,"internal",r),Vu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Hu=(e,t)=>new Vu(e,t)}),ju,ca,Ku,Yu,Xu,Qu,ht,Zu,Ju,rn=Z(()=>{he(),ye(),Ve(),we(),ju=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ca=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ku=(e,t)=>G.sortBasedOnPerm(e,ca(e.length,t)),Yu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Xu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Qu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ht=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ca(r,t),a=Ku(e.dims,i),s=e.dims,o=a,u=r<2||Qu(i,e.dims),l;if(u)return l=m=>{let y=H("input",n,s,4),w=oe("output",n,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=Xu(e.dims,i),h=G.areEqual(p,[2,3,1]),g=G.areEqual(p,[3,1,2]);if(d.length===2||h||g){s=h?[d[0],d[1]*d[2]]:g?[d[0]*d[1],d[2]]:d,o=[s[1],s[0]];let m=16;return l=y=>{let w=H("a",n,s.length),_=oe("output",n,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:y},...ce(s,o)]}},getShaderSource:l}}return l=m=>{let y=H("a",n,s.length),w=oe("output",n,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Yu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ce(s,o)]}},getShaderSource:l}},Zu=(e,t)=>{ju(e.inputs,t.perm),e.compute(ht(e.inputs[0],t.perm))},Ju=e=>Oe({perm:e.perm})}),el,tl,nl,rl,il,al,sl,ol,ul,ll,$t,cl,dl,pl,hl,fl,ml,gl,yl,wl,bl,Py=Z(()=>{he(),ye(),we(),pa(),rn(),el={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},nl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},rl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},il=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},al=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},sl=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},ol=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},ul=(e,t)=>{let n=[];if(!ol(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},ll=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=G.size(a),l=G.size(s),d=H("_A",n[0].dataType,o),p=oe("output",i,a),h=64;u===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${nl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${el[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${rl[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},$t=(e,t,n,r)=>{let i=e.inputs.length===1?n:da(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((g,m)=>m));let s=G.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=ul(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ht(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=il(o.length,u.dims.length));let[d,p]=al(u.dims,o),h=d;i.keepDims&&(h=sl(d,s)),e.compute(ll(t,i.cacheKey,[u],r,e.inputs[0].dataType,h,p),{inputs:[u]})},cl=(e,t)=>{$t(e,"ReduceMeanShared",t,"mean")},dl=(e,t)=>{$t(e,"ReduceL1Shared",t,"l1")},pl=(e,t)=>{$t(e,"ReduceL2Shared",t,"l2")},hl=(e,t)=>{$t(e,"ReduceLogSumExpShared",t,"logSumExp")},fl=(e,t)=>{$t(e,"ReduceMaxShared",t,"max")},ml=(e,t)=>{$t(e,"ReduceMinShared",t,"min")},gl=(e,t)=>{$t(e,"ReduceProdShared",t,"prod")},yl=(e,t)=>{$t(e,"ReduceSumShared",t,"sum")},wl=(e,t)=>{$t(e,"ReduceSumSquareShared",t,"sumSquare")},bl=(e,t)=>{$t(e,"ReduceLogSumShared",t,"logSum")}}),xt,_l,Br,da,vt,$l,xl,vl,Sl,Tl,El,Il,Ml,kl,Cl,St,Al,Rl,Ol,Nl,zl,Bl,Pl,Dl,Ul,Ll,pa=Z(()=>{he(),ye(),Ve(),we(),Py(),xt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},_l=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Br=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,d=l.length,p=G.normalizeAxes(i,d),h=!o&&p.length===0;l.forEach((y,w)=>{h||p.indexOf(w)>=0?s&&u.push(1):u.push(y)});let g=u.length,m=G.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],_=H("_A",n[0].dataType,d),x=oe("output",a,g),T=r(_,x,p),v=T[2];for(let E=0,M=0;E<d;E++)h||p.indexOf(E)>=0?(s&&M++,v=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${_.indicesSet("input_indices",E,`j${E}`)}
                  ${v}
                }`):(w.push(`${_.indicesSet("input_indices",E,x.indicesGet("output_indices",M))};`),M++);return`

        ${y.registerUniform("output_size","u32").declareVariables(_,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${v}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ce(l,u)]})}},da=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Oe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},vt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:da(i,n);e.compute(Br(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?_l:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},$l=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},xl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},vl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Sl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Tl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},El=(e,t)=>{xt(e.inputs),vt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Il=(e,t)=>{xt(e.inputs),vt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Ml=(e,t)=>{xt(e.inputs),vt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},kl=(e,t)=>{xt(e.inputs),vt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Cl=(e,t)=>{xt(e.inputs),vt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},St=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Al=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):cl(e,t)},Rl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xl(e,t):dl(e,t)},Ol=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):pl(e,t)},Nl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sl(e,t):hl(e,t)},zl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):fl(e,t)},Bl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):ml(e,t)},Pl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):gl(e,t)},Dl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):yl(e,t)},Ul=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):wl(e,t)},Ll=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$l(e,t):bl(e,t)}}),ha,Fl,Gl,fa,Dy=Z(()=>{he(),Ve(),pa(),ha=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Fl=(e,t)=>{ha(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Br("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Gl=(e,t)=>{ha(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Br("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},fa=e=>Oe(e)}),Wl,Pr,ql,Vl,Hl,tr,jl,Kl,ma=Z(()=>{he(),ye(),ia(),we(),Wl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],d=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let m=l;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let w=m+y,_=-1,x=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:p,vHiddenSize:g,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Pr=(e,t,n)=>t&&e?`
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
    `,ql=(e,t,n,r,i,a,s,o)=>{let u=qe(s?1:a),l=64,d=a/u;d<l&&(l=32);let p=Math.ceil(a/u/l),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:d},{type:12,data:p}],g=Ke(e.dataType,u),m=rt(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let w=_=>{let x=oe("x",e.dataType,e.dims,u),T=[x],v=s?H("seq_lens",s.dataType,s.dims):void 0;v&&T.push(v);let E=o?H("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let M=rt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(k).declareVariables(...T)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Pr(v,E,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${g};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},Vl=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],p=e>1&&r,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=p?[a.batchSize,h,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=qe(a.headSize),_=a.headSize/w,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:m}],E=p&&r&&G.size(r.dims)>0,M=["type","type"];E&&M.push("type"),i&&M.push("type"),o&&M.push("type"),u&&M.push("type");let k=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let S=A=>{let z=H("q",t.dataType,t.dims,w),Y=H("key",n.dataType,n.dims,w),F=[z,Y];if(E){let L=H("past_key",r.dataType,r.dims,w);F.push(L)}i&&F.push(H("attention_bias",i.dataType,i.dims));let W=o?H("seq_lens",o.dataType,o.dims):void 0;W&&F.push(W);let O=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;O&&F.push(O);let q=oe("output",t.dataType,d),K=[q];p&&K.push(oe("present_key",t.dataType,g,w));let X=rt(1,w),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${z.type.storage}, ${x*x}>;
  ${A.registerUniforms(le).declareVariables(...F,...K)}
  ${A.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Pr(W,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${X}(0);
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
          value += ${X}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${q.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:k,dispatchGroup:T,programUniforms:v}),getShaderSource:S}},Hl=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,p=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=p?[i.batchSize,h,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,d],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},_=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=p&&r&&G.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),o&&T.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:g,dataType:t.dataType,gpuDataType:0});let E=M=>{let k=H("probs",t.dataType,t.dims),S=H("v",n.dataType,n.dims),A=[k,S];x&&A.push(H("past_value",r.dataType,r.dims));let z=s?H("seq_lens",s.dataType,s.dims):void 0;s&&A.push(z);let Y=o?H("total_sequence_length_input",o.dataType,o.dims):void 0;o&&A.push(Y);let F=[oe("output",t.dataType,m)];p&&F.push(oe("present_value",t.dataType,g));let W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${M.registerUniforms(W).declareVariables(...A,...F)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Pr(z,Y,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:_}),getShaderSource:E}},tr=(e,t,n,r,i,a,s,o,u,l,d=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),g=h>1?s:void 0,m=h>1?o:void 0,y=h>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,_=u&&G.size(u.dims)>0?u:void 0,x=[t,n];g&&G.size(g.dims)>0&&x.push(g),_&&x.push(_),d&&x.push(d),p&&x.push(p);let T=e.compute(Vl(h,t,n,g,_,l,y,d,p),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(ql(T,l.batchSize,l.numHeads,y,l.sequenceLength,w,d,p),{inputs:d&&p?[T,d,p]:[T],outputs:[]});let v=[T,r];m&&G.size(m.dims)>0&&v.push(m),d&&v.push(d),p&&v.push(p),e.compute(Hl(h,T,r,m,l,y,d,p),{inputs:v,outputs:h>1?[0,2]:[0]})},jl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let h=oe("output_q",u[0].dataType,n),g=oe("output_k",u[0].dataType,n),m=oe("output_v",u[0].dataType,n),y=H("input",u[0].dataType,u[0].dims),w=H("weight",u[1].dataType,u[1].dims),_=H("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${p.registerUniforms(T).declareVariables(y,w,_,h,g,m)}
  ${p.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},Kl=(e,t)=>{let n=Wl(e.inputs,t),[r,i,a]=jl(e,n);return tr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Yl,Xl,Ql,Zl,Uy=Z(()=>{gt(),he(),ye(),Ve(),we(),Yl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Xl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?qe(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=G.size(a)/s,l=r,d=l?a.length:a,p=H("x",e[0].dataType,e[0].dims,s),h=H("scale",e[1].dataType,e[1].dims,o),g=H("bias",e[2].dataType,e[2].dims,o),m=H("inputMean",e[3].dataType,e[3].dims,o),y=H("inputVar",e[4].dataType,e[4].dims,o),w=oe("y",e[0].dataType,d,s),_=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let v=1;v<h.rank;v++)T+=`cIndices[${v}] = outputIndices[${v}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(p,h,g,m,y,w)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${s}`)};
    ${_()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ce(a)]:[{type:12,data:u}]})}},Ql=e=>Oe(e),Zl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Ql({...t,outputCount:r});if(ze.webgpu.validateInputContent&&Yl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Xl(n,i))}}),Jl,ec,tc,Ly=Z(()=>{ye(),we(),Jl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ec=e=>{let t=e[0].dims,n=e[0].dims[2],r=G.size(t)/4,i=e[0].dataType,a=H("input",i,t,4),s=H("bias",i,[n],4),o=H("residual",i,t,4),u=oe("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},tc=e=>{Jl(e.inputs),e.compute(ec(e.inputs))}}),nc,Ae,rc,ic,ac,sc,oc,uc,lc,cc,dc,pc,hc,fc,mc,gc,nr,yc,Dr,wc,bc,_c,$c,xc,vc,Sc,Tc,Ec,Ic,Mc,kc,Cc,Ac,Rc,Oc,ga,Nc,ya,wa,zc,Bc,Pc,Dc,Uc,Lc,ba=Z(()=>{he(),ye(),Ve(),we(),nc=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=H("inputData",n,[o],4),d=oe("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Ae=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(G.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>nc(l,G.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(G.size(l[0].dims)/64/4)},programUniforms:u})}},rc=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},ic=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},ac=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},sc=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},oc=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},uc=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},lc=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},cc=e=>Oe(e),dc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},pc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:n})},hc=(e,t)=>{let n=t||pc(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},fc=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},mc=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},gc=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},nr=e=>Oe(e),yc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dr=(e="f32")=>`
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
}`,wc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Dr(t)))},bc=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},_c=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},$c=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Dr(t)))},xc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},vc=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},Sc=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},Tc=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ec=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Ic=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Mc=e=>Oe(e),kc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Cc=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},Ac=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},Rc=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},Oc=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},ga=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Nc=e=>{e.compute(Ae(e.inputs[0],"Tanh",ga))},ya=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ga("v")};
}
`,wa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,zc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",wa,ya(t),void 0,e.inputs[0].dataType))},Bc=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Pc=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},Dc=(e,t)=>`
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
`,Uc=e=>`quick_gelu_impl(${e})`,Lc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",Uc,Dc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Fc,Gc,Wc,Fy=Z(()=>{ye(),we(),ba(),Fc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Gc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=H("input",e[0].dataType,e[0].dims,4),r=H("bias",e[0].dataType,[e[0].dims[2]],4),i=oe("output",e[0].dataType,t,4),a=G.size(t)/4,s=Ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Dr(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Wc=e=>{Fc(e.inputs),e.compute(Gc(e.inputs))}}),qc,Vc,Tt,Hc,jc,Kc,Yc,Xc,Qc,Zc,Jc,ed,td,Gy=Z(()=>{he(),ye(),we(),qc=(e,t,n,r,i,a,s,o,u,l,d,p)=>{let h,g;typeof o=="string"?h=g=(x,T)=>`${o}((${x}),(${T}))`:typeof o=="function"?h=g=o:(h=o.scalar,g=o.vector);let m=oe("outputData",d,r.length,4),y=H("aData",u,t.length,4),w=H("bData",l,n.length,4),_;if(i)if(a){let x=G.size(t)===1,T=G.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||T?_=m.setByOffset("global_idx",g(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):_=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",g(s||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",g(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,v,E="")=>{let M=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${T}[${v}] = ${E}(${h(M,k)});
          `};d===9?_=`
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

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},Vc=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!G.areEqual(o,u),d=o,p=G.size(o),h=!1,g=!1,m=[l];if(l){let y=Bn.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),p=G.size(d);let w=G.size(o)===1,_=G.size(u)===1,x=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(_),m.push(x),m.push(T);let v=1;for(let E=1;E<d.length;E++){let M=o[o.length-E],k=u[u.length-E];if(M===k)v*=M;else break}v%4===0?(g=!0,h=!0):(w||_||x||T)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>qc(y,o,u,d,h,l,g,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(G.size(d)/4)},...ce(o,u,d)]})}},Tt=(e,t,n,r,i,a)=>{e.compute(Vc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Hc=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},jc=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},Kc=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Yc=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},Xc=e=>{let t=H("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Qc=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},Zc=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Jc=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},ed=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},td=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),nd,rd,id,ad,sd,od,Wy=Z(()=>{he(),ye(),Ve(),we(),nd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},rd=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,id=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},ad=(e,t,n,r)=>{let i=G.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=H(`input${y}`,r,l[y]),u.push("rank"),d.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)d.push(...ce(e[y].dims));d.push(...ce(n));let p=oe("output",r,n.length),h=p.indicesGet("indices",t),g=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...s,p)})()}

  ${rd(a.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${id(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:m}},sd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=G.normalizeAxis(t.axis,r.length);nd(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>G.size(o.dims)>0);e.compute(ad(s,i,a,n[0].dataType),{inputs:s})},od=e=>Oe({axis:e.axis})}),xn,vn,Sn,_a,Tn=Z(()=>{he(),ye(),xn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},_a=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Cu,Au];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,ud,$a=Z(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ud=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ld,qy=Z(()=>{ld=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,xa,va=Z(()=>{he(),ye(),we(),Tn(),rr=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${ue(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ue(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},xa=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],d=s[s.length-1],p=qe(l),h=qe(d),g=qe(u),m=G.size(n)/p/g,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),_=[G.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];vn(t,x),x.push(...ce(w,s,o)),y&&x.push(...ce(e[2].dims)),x.push(...ce(_));let T=v=>{let E=la("batch_dims",e[0].dataType,w.length),M=H("a",e[0].dataType,s.length,h),k=H("b",e[1].dataType,o.length,p),S=oe("output",e[0].dataType,_.length,p),A=Ke(S.type.tensor),z=xn(t,S.type.value,A),Y=[M,k],F="";if(y){let q=i?p:1;Y.push(H("bias",e[2].dataType,e[2].dims.length,q)),F=`${i?`value += bias[col / ${q}];`:`value += ${S.type.value}(bias[row + i]);`}`}let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,W);let O=()=>{let q=`var a_data: ${M.type.value};`;for(let K=0;K<h;K++)q+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${p}];`;for(let K=0;K<g;K++){q+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let X=0;X<h;X++)q+=`
            values[${K}] = fma(${k.type.value}(a_data${h===1?"":`[${X}]`}), b_data${X}, values[${K}]);
`}return q};return`
  ${v.registerUniforms(W).registerInternalVariables(E).declareVariables(...Y,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${rr("a_indices",M,M.rank-2,E.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${rr("b_indices",k,k.rank-2,E.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${O()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${F}
      ${z}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${g};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:T}}}),cd,dd,Sa,Ta,pd,Ea,hd,Ur,Ia=Z(()=>{he(),ye(),we(),Tn(),va(),$a(),cd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,dd=(e,t)=>e?`
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
        }`,Sa=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=i?u:a,p=i?a:u,h=d/t[0],g=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&d%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
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
          ${cd(i,r)}
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

          ${dd(i,h)}
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
            `,pd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ea=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=i?l:a,h=i?a:l;if(!(h%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],m=p/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Ta(i,r)}
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
      ${pd(i)}
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
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},hd=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=Ke(r[0].type.tensor);return`
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
    `},Ur=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),d=r?r.slice(0,-2):n.slice(0,-2),p=G.size(d),h=s[s.length-2],g=s[s.length-1],m=o[o.length-1],y=g%4===0&&m%4===0,w=h<=8?[4,1,1]:[4,4,1],_=[8,8,1],x=[Math.ceil(m/_[0]/w[0]),Math.ceil(h/_[1]/w[1]),Math.ceil(p/_[2]/w[2])],T=y?4:1,v=[...u,h,g/T],E=v.length,M=[...l,g,m/T],k=M.length,S=[p,h,m/T],A=[{type:6,data:h},{type:6,data:m},{type:6,data:g}];vn(t,A),A.push(...ce(d,v,M));let z=["rank","rank"],Y=e.length>2;Y&&(A.push(...ce(e[2].dims)),z.push("rank")),A.push(...ce(S));let F=W=>{let O=d.length,q=la("batchDims",e[0].dataType,O,1),K=Ke(e[0].dataType),X=H("a",e[0].dataType,E,T),le=H("b",e[1].dataType,k,T),L=oe("result",e[0].dataType,S.length,T),P=[X,le];if(Y){let j=i?T:1;P.push(H("bias",e[2].dataType,e[2].dims.length,j))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,R);let N=Ke(L.type.tensor),D=xn(t,L.type.value,N),U=hd(T,Y,D,[q,X,le,L],i);return`
  ${W.registerUniforms(R).registerInternalVariables(q).declareVariables(...P,L)}
  ${U}
  ${y?Sa(w,_,K,q):Ea(w,_,K,q)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:F}}}),fd,md,Vy=Z(()=>{he(),Kt(),we(),Tn(),$a(),qy(),Ia(),fd=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let d=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},h=e?`
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
    var resData = ${Je(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(s)}
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
    return ${Je(s,l)}(0.0);`,v=e?r&&n?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Je(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Je(o,l)}(0.0);`,E=Je(u,l),M=Je(e?s:o,l),k=Je(e?o:s,l),S=xn(a,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?T:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?v:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${ud(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},md=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=n[0],h=l?n[2]:n[3],g=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(d%4===0||d%3===0)&&m%4===0,w=l?m:h*g,_=l?h*g:m,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/T[0]),Math.ceil(_/x[1]/T[1]),Math.ceil(p/x[2]/T[2])];Me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let E=y?l&&d%4!==0?3:4:1,M=x[1]*T[1],k=x[0]*T[0],S=Math.max(x[0]*E,x[1]),A=r%M===0,z=i%k===0,Y=a%S===0,F=y?[E,4,4]:[1,1,1],W=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vn(t,W),W.push(...ce(e[0].dims,e[1].dims));let O=["rank","rank"];s&&(W.push(...ce(e[2].dims)),O.push("rank")),W.push(...ce(n));let q=K=>{let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,X);let le=y?4:1,L=Ke(e[0].dataType),P=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=H("x",e[0].dataType,e[0].dims.length,E===3?1:E),N=H("w",e[1].dataType,e[1].dims.length,le),D=[R,N],U=oe("result",e[0].dataType,n.length,le);if(s){let j=H("bias",e[2].dataType,e[2].dims.length,le);D.push(j),P+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${ld("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(X).declareVariables(...D,U)}
        ${P}
        ${fd(l,A,z,Y,s,t,F[0],F[1],F[2],L)}
        ${y?Sa(T,x,L,void 0,!l,S):Ea(T,x,L,void 0,!l,S,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${A};${z};${Y};${M};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:W}),getShaderSource:q}}}),gd,Ma,ir,yd,ka,wd,bd,_d,Hy=Z(()=>{he(),Kt(),ye(),we(),Tn(),$a(),gd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ma=e=>typeof e=="number"?[e,e,e]:e,ir=(e,t)=>t<=1?e:e+(e-1)*(t-1),yd=(e,t,n,r=1)=>{let i=ir(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},ka=(e,t,n,r,i)=>{i==null&&(i=yd(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},wd=(e,t,n,r,i,a,s,o,u,l)=>{let d,p,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=ka([t,n,r,1],[o,u,l],1,[i,a,s],e);p=m[0],h=m[1],g=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,_)=>y===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=ka([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);p=m[0],h=m[1],g=m[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(n/a),g=Math.ceil(r/s);let m=(p-1)*i+o-t,y=(h-1)*a+u-n,w=(g-1)*s+l-r,_=Math.floor(m/2),x=m-_,T=Math.floor(y/2),v=y-T,E=Math.floor(w/2),M=w-E;d={top:T,bottom:v,left:E,right:M,front:_,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:h,outWidth:g}},bd=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,d,p;if(s==="channelsLast")[o,u,l,d,p]=e;else if(s==="channelsFirst")[o,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,g,m,y]=t,[w,_,x]=Ma(n),[T,v,E]=Ma(r),M=ir(g,T),k=ir(m,v),S=ir(y,E),{padInfo:A,outDepth:z,outHeight:Y,outWidth:F}=wd(i,u,l,d,w,_,x,M,k,S),W=a?h*p:h,O=[0,0,0,0,0];return s==="channelsFirst"?O=[o,W,z,Y,F]:s==="channelsLast"&&(O=[o,z,Y,F,W]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:z,outHeight:Y,outWidth:F,outChannels:W,padInfo:A,strideDepth:w,strideHeight:_,strideWidth:x,filterDepth:g,filterHeight:m,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:T,dilationHeight:v,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},_d=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((w,_)=>_)},l=[Math.ceil(gd(u.x.map(w=>n[w]))/o[0]),1,1];Me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=G.size(n),h=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];vn(t,h),h.push(...ce(e[0].dims,e[1].dims));let g=["rank","rank"],m=e.length===3;m&&(h.push(...ce(e[2].dims)),g.push("rank")),h.push(...ce(n));let y=w=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,_);let x=1,T=Ke(e[0].dataType),v=H("x",e[0].dataType,e[0].dims.length,d),E=H("W",e[1].dataType,e[1].dims.length,x),M=[v,E],k=oe("result",e[0].dataType,n.length,x),S="";if(m){let Y=H("bias",e[2].dataType,e[2].dims.length,x);M.push(Y),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?ue("coords",4,5):ue("coords",1,5)}];
        }`}let A=Je(d,T),z=xn(t,A,T);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(_).declareVariables(...M,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${ue("coords",0,v.rank)};
              let d2 = ${s?ue("coords",v.rank-1,v.rank):ue("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${s?ue("coords",1,v.rank):ue("coords",2,v.rank)},
              ${s?ue("coords",2,v.rank):ue("coords",3,v.rank)},
              ${s?ue("coords",3,v.rank):ue("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ue("uniforms.x_shape",1,v.rank):ue("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${s?ue("uniforms.x_shape",2,v.rank):ue("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${s?ue("uniforms.x_shape",3,v.rank):ue("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${s?ue("uniforms.x_shape",4,v.rank):ue("uniforms.x_shape",1,v.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${d};${m}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),$d,xd,jy=Z(()=>{he(),ye(),we(),Tn(),$d=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],d=l/t.group,p=u&&d>=4?qe(l):1,h=G.size(n)/p,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];vn(t,g),g.push(...ce(s,[o[0],o[1],o[2],o[3]/p]));let m=i?["rank","rank","rank"]:["rank","rank"];g.push(...ce([n[0],n[1],n[2],n[3]/p]));let y=w=>{let _=oe("output",e[0].dataType,n.length,p),x=Ke(_.type.tensor),T=xn(t,_.type.value,x),v=H("x",e[0].dataType,s.length),E=H("w",e[1].dataType,o.length,p),M=[v,E];i&&M.push(H("b",e[2].dataType,e[2].dims,p));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,k);let S=u?`
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
  ${w.registerUniforms(k).declareVariables(...M,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${S}
    ${a}
    ${T}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},xd=(e,t,n,r)=>{let i=e.length>2,a=qe(n[3]),s=qe(n[2]),o=G.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],d=[n[0],n[1],n[2],n[3]/a],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vn(t,p),p.push(...ce(u,l,d));let h=(s-1)*t.strides[1]+l[1],g=m=>{let y=oe("output",e[0].dataType,d.length,a),w=Ke(y.type.tensor),_=xn(t,y.type.value,w),x=H("x",e[0].dataType,u.length,a),T=H("w",e[1].dataType,l.length,a),v=[x,T];i&&v.push(H("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,M),`
  ${m.registerUniforms(M).declareVariables(...v,y)}
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
      ${_}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:g}}}),vd,Lr,Sd,Fr,Ca,Aa,Td,Ed,Ra,Ky=Z(()=>{ye(),Vy(),Hy(),Ia(),jy(),Tn(),va(),rn(),vd=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],d=t.slice(2).map((h,g)=>h+(h-1)*(n[g]-1)),p=o.map((h,g)=>h+r[g]+r[g+u]).map((h,g)=>Math.floor((h-d[g]+i[g])/i[g]));return p.splice(0,0,s),p.splice(a?3:1,0,l),p},Lr=[2,3,1,0],Sd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Rr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ca=e=>{let t=_a(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Aa=(e,t,n,r)=>{let i=n.format==="NHWC",a=vd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(ht(t[1],Lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),M.push(k)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(xd(M,n,a,r),{inputs:M}):e.compute($d(M,n,a,r),{inputs:M});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],p=t[1].dims[3],h=a[i?1:2],g=a[i?2:3],m=a[i?3:1],y=i&&d===o&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(y||d===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],k,S,A,z=[];if(i){let W=e.kernelCustomData.wT??e.compute(ht(t[1],Lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W),y){let O=o*u*l;k=t[0].reshape([1,M,O]),S=W.reshape([1,O,m]),A=[1,M,m]}else k=t[0].reshape([M,o*u,l]),S=W.reshape([1,l,m]),A=[M,h*g,m];z.push(k),z.push(S)}else k=t[0].reshape([M,l,o*u]),S=t[1].reshape([1,m,l]),A=[M,m,h*g],z.push(S),z.push(k);s&&z.push(t[2]);let Y=A[2],F=z[0].dims[z[0].dims.length-1];Y<8&&F<8?e.compute(xa(z,n,a,A,i,r),{inputs:z}):e.compute(Ur(z,n,a,A,i,r),{inputs:z});return}let w=!0,_=e.kernelCustomData.wT??e.compute(ht(t[1],Lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let x=[t[0],_];s&&x.push(t[2]);let T=i?h*g:m,v=i?m:h*g,E=d*p*l;e.compute(md(x,n,a,T,v,E,s,w,r),{inputs:x})},Td=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Fr({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Aa(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Ed=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Fr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=bd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(_d(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Ra=(e,t)=>{if(Sd(e.inputs,t),e.inputs[0].dims.length===3)Td(e,t);else if(e.inputs[0].dims.length===5)Ed(e,e.inputs,t);else{let n=Fr(t,e.inputs);Aa(e,e.inputs,n)}}}),Id,Yy=Z(()=>{he(),Kt(),ye(),we(),Id=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],d=a?qe(u):1,p=a&&l===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/d)*d,g=u-h,m=a?qe(l):1,y=a?l===1?d:m:1,w=G.size(i)/m,_=[Math.ceil(w/64),1,1];Me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],v=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],M=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:T},{type:12,data:v},{type:12,data:E},{type:12,data:M},{type:6,data:k},{type:12,data:h},{type:12,data:u},{type:12,data:l},...ce(e[0].dims,e[1].dims)];r&&(S.push(...ce(e[2].dims)),x.push("rank")),S.push(...ce(i));let A=z=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Ke(e[0].dataType),W=a?1:2,O=a?2:3,q=a?3:1,K=H("W",e[1].dataType,e[1].dims.length,y),X=H("Dy",e[0].dataType,e[0].dims.length,d),le=[X,K];r&&le.push(H("bias",e[2].dataType,[i[q]].length,m));let L=oe("result",e[0].dataType,i.length,m),P=()=>{let D="";if(p)d===4?D+=`
        let xValue = ${X.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?D+=`
          dotProd = dotProd + dot(vec4<${F}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}), vec4<${F}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(D+=`
          dotProd = dotProd + dot(vec4<${F}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}, ${X.getByOffset("x_offset + 2u")}, ${X.getByOffset("x_offset + 3u")}), vec4<${F}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${a?X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):X.get("batch","inputChannel","idyR","idyC")};
        `,d===1)D+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let U=0;U<d;U++)D+=`
            let wValue${U} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${U}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${U}] * wValue${U};`;return D},R=()=>{if(g===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let D="";if(d===1){D+="dotProd = dotProd";for(let U=0;U<g;U++)D+=`
            + ${X.getByOffset(`x_offset + ${U}`)} * ${K.getByOffset(`w_offset + ${U}`)}`;D+=";"}else if(d===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);D+=`
          let xValue = ${X.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},N=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",q)};
            let r = ${L.indicesGet("outputIndices",W)};
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
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${W}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${P()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(Y).declareVariables(...le,L)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${N}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${m}${p}${g}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:A}}}),Md,kd,Cd,Oa,Ad,Rd,Na,Od,Nd,Xy=Z(()=>{Yy(),Tn(),rn(),Md=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,kd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Cd=(e,t,n,r,i,a,s,o,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let h=e[0],g=t[o?3:1]*i;for(let m=0,y=e.length-d-(o?1:0);m<d;++m,++y){let w=e[y],_=p?w*s[m]:l[m],x=Md(w,s[m],a[m],t[y],n[m],_);kd(x,r,a,m,m+d),p&&l.push(s[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-a[m]-a[m+d])}l.splice(0,0,h),l.splice(o?3:1,0,g)},Oa=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}Cd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let d=Object.assign({},e);return Object.assign(d,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),d},Ad=e=>{let t=_a(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:d,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Rd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Na=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ht(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Id(a,n,r),{inputs:a})},Od=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Oa({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Na(e,r,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Nd=(e,t)=>{if(Rd(e.inputs,t),e.inputs[0].dims.length===3)Od(e,t);else{let n=Oa(t,e.inputs);Na(e,e.inputs,n)}}}),zd,Bd,Pd,Qy=Z(()=>{he(),ye(),Ve(),we(),zd=(e,t,n,r)=>{let i=G.size(t),a=t.length,s=H("input",e,a),o=oe("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=G.normalizeAxis(u,a),d=p=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=ue("uniforms.input_shape","uniforms.axis",a),m=r.reverse?h+(r.exclusive?" + 1":""):"0",y=r.reverse?g:h+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ce(t,t)]}),getShaderSource:d}},Bd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(zd(r,n,i,t),{inputs:[0]})},Pd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Oe({exclusive:t,reverse:n})}}),Dd,Ud,Ld,Fd,Gd,Zy=Z(()=>{he(),ye(),Ve(),we(),Dd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ud=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Ld=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=d?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=d?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),h=p.dims.length,g=e.dataType,m=H("a",g,h),y=oe("output",g,h),w=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Ud(o,h,m,y)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=G.size(x),v=p.dims,E=G.sortBasedOnPerm(v,o);return{outputs:[{dims:x,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ce(v,E)]}},getShaderSource:w}},Fd=(e,t)=>{Dd(e.inputs),e.compute(Ld(e.inputs[0],t))},Gd=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Gr,ar,za,Wd,qd,Vd,Hd,Ba,jd,Kd,Yd,Jy=Z(()=>{he(),ye(),Ve(),we(),Gr="[a-zA-Z]|\\.\\.\\.",ar="("+Gr+")+",za="^"+ar+"$",Wd="("+ar+",)*"+ar,qd="^"+Wd+"$",Vd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Hd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(qd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(za)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(ar)))throw new Error("Invalid RHS");(i=r.match(RegExp(Gr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(za))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Gr,"g")),l=new Vd(r);return u==null||u.forEach((d,p)=>{if(d==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let m=String.fromCharCode(48+g);l.addSymbol(m,p+g),this.addSymbol(m,n[o++],r)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[o++],r)}),l}},Ba=e=>e+"_max",jd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,d)=>H(`input${d}`,t,l)),a=G.size(r),s=oe("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",m=[],y=[],w=[],_=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,E)=>{var M;if(n.rhs.symbolToIndices.has(E)){let k=(M=n.rhs.symbolToIndices.get(E))==null?void 0:M[0];k!==void 0&&n.lhs.forEach((S,A)=>{if(v.inputIndices.includes(A)){let z=S.symbolToIndices.get(E);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(Y=>{d.push(`${i[A].indicesSet(`input${A}Indices`,Y,s.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let A=k.symbolToIndices.get(E);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(z=>{m.push(`${i[S].indicesSet(`input${S}Indices`,z,`${E}`)}`)}),_.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ba(E)}; ${E}++) {`),w.push("}")});let T=x?[...d,`let sum = ${i.map((v,E)=>v.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...d,h,...y,...m,p,..._,g,...w];return`
            ${l.registerUniforms(o.map(v=>({name:`${Ba(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((v,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>n.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=n.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});l.push({type:12,data:a});let d=e.map((p,h)=>[...ce(p)]).reduce((p,h)=>p.concat(h),l);return d.push(...ce(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}},getShaderSource:u}},Kd=(e,t)=>{let n=new Hd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(jd(i,e.inputs[0].dataType,n,r))},Yd=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),Xd,Pa,Qd,Zd,Jd,ew=Z(()=>{he(),ye(),we(),Xd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Pa=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Qd=(e,t)=>e.length>t.length?Pa(e,t):Pa(t,e),Zd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Qd(t,n),i=e[0].dataType,a=i===9||G.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(G.size(r)/o),l=p=>{let h=H("input",i,t.length,s),g=oe("output",i,r.length,o),m;if(i===9){let y=(w,_,x="")=>`
          let outputIndices${_} = ${g.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${h.broadcastedIndicesToOffset(`outputIndices${_}`,g)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${w}[${_}] = ${x}(${h.getByOffset(`index${_}`)}[component${_}]);
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
    ${p.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...ce(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},Jd=e=>{Xd(e.inputs),e.compute(Zd(e.inputs),{inputs:[0]})}}),ep,tp,tw=Z(()=>{he(),ye(),we(),ba(),ep=e=>{let t=e[0].dataType,n=G.size(e[0].dims),r=G.size(e[1].dims),i=r%4===0,a=s=>{let o=H("x",t,[1],4),u=H("bias",t,[1],4),l=oe("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${u.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(d).declareVariables(o,u,l)}

    ${ya(rt(t))}

    ${s.mainStart(Pn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",wa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Pn/4)}})}},tp=e=>{e.inputs.length<2||G.size(e.inputs[1].dims)===0?zc(e):e.compute(ep(e.inputs))}}),np,rp,ip,ap,nw=Z(()=>{he(),ye(),Ve(),we(),np=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},rp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=G.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(G.size(s)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...ce(e[0].dims,e[1].dims,s)],p=h=>{let g=H("data",e[0].dataType,e[0].dims.length,u),m=H("inputIndices",e[1].dataType,e[1].dims.length),y=oe("output",e[0].dataType,s.length,u),w=x=>{let T=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let E=0;E<T;E++)v+=`${T>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${g.type.indices};
        `;for(let E=0,M=0;E<i;E++)E===a?(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,M+=T):(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return v},_;if(e[0].dataType===9){let x=(T,v,E="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${g.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${T}[${v}] = ${E}(${g.getByOffset(`index${v}`)}[component${v}]);
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
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,m,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},ip=e=>Oe({axis:e.axis}),ap=(e,t)=>{let n=e.inputs;np(n),e.compute(rp(e.inputs,t))}}),sp,op,up,rw=Z(()=>{he(),ye(),we(),sp=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],d=[a];l.push(...ce(t.dims,d));let p=h=>{let g=H("indices_data",t.dataType,t.dims.length),m=oe("input_slice_offsets_data",12,1,1),y=[g,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},op=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=G.sizeToDimension(a,a.length-1),u=G.sizeFromDimension(r,t.batchDims+s),l=G.sizeToDimension(r,t.batchDims),d=G.sizeFromDimension(r,t.batchDims),p=o/l,h=new Array(s),g=u;for(let v=0;v<s;++v)h[s-1-v]=g,g*=r[t.batchDims+s-1-v];let m=sp(e,n[1],h,t.batchDims,r,o,p,d,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),_=G.size(w),x=[{type:12,data:_},{type:12,data:u},...ce(n[0].dims,m.dims,w)],T=v=>{let E=H("data",n[0].dataType,n[0].dims.length),M=H("slice_offsets",12,m.dims.length),k=oe("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,M,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],m]})},up=e=>({batchDims:e.batch_dims,cacheKey:""})}),lp,cp,dp,pp,iw=Z(()=>{he(),ye(),Ve(),we(),lp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=G.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},cp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=G.normalizeAxis(t.gatherAxis,i),s=G.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=G.size(o),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ce(...e.map((g,m)=>g.dims),o)],h=g=>{let m=H("data",e[0].dataType,e[0].dims.length),y=H("inputIndices",e[1].dataType,e[1].dims.length),w=H("scales",e[2].dataType,e[2].dims.length),_=e.length>3?H("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=oe("output",l,o.length),T=[m,y,w];_&&T.push(_);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(v).declareVariables(...T,x)}
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
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,m)=>m!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},dp=(e,t)=>{let n=e.inputs;lp(n,t),e.compute(cp(e.inputs,t))},pp=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hp,fp,mp,gp,aw=Z(()=>{he(),ye(),Ve(),we(),hp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},fp=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=G.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),d=G.size(l),p=H("input",r,i),h=H("indicesInput",s,a.length),g=oe("output",r,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return m.push(...ce(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},mp=e=>Oe({axis:e.axis}),gp=(e,t)=>{let n=e.inputs;hp(n),e.compute(fp(e.inputs,t))}}),yp,wp,bp,_p,sw=Z(()=>{he(),ye(),we(),yp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},wp=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=ku.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),d=Math.ceil(i/u),p=!0,h=G.size(o),g=[{type:12,data:p?l:h},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(g.push(...ce(e[2].dims)),m.push("rank")),g.push(...ce(o));let y=_=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",v=H("a",e[0].dataType,e[0].dims),E=H("b",e[1].dataType,e[1].dims),M=v.type.value,k=null,S=[v,E];e.length===3&&(k=H("c",e[2].dataType,e[2].dims.length),S.push(k));let A=oe("output",e[0].dataType,o.length);S.push(A);let z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(z).declareVariables(...S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${M}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=_=>{let x=H("a",e[0].dataType,e[0].dims),T=H("b",e[1].dataType,e[1].dims),v=null,E=[x,T];e.length===3&&(v=H("c",e[2].dataType,e[2].dims.length),E.push(v));let M=oe("output",e[0].dataType,o.length);E.push(M);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",A="";t.transA&&t.transB?(A=`
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
      `,S="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(A=`
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
      `,S="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(A=`
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
      `,S="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(A=`
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
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let z=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(k).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${_.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${A}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${S}
      }
      workgroupBarrier();
    }

    ${z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:g}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},bp=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},_p=(e,t)=>{yp(e.inputs),e.compute(wp(e.inputs,t))}}),zt,Yt,En,In,$p,xp,vp,Sp,Tp,Ep,Ip,Mp,kp,Cp,ow=Z(()=>{he(),ye(),Ve(),we(),[zt,Yt,En,In]=[0,1,2,3],$p=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},xp=`
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
`,vp=e=>`
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
`,Sp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Tp=e=>`
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
`,Ep=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${zt}] = batch;
     indices[${Yt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${En}] = u32(r);
            indices[${In}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${En}] = u32(clamp(r, 0, H - 1));
          indices[${In}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${En}] = gs_reflect(r, border[1], border[3]);
          indices[${In}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ip=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${zt}], indices[${Yt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${zt}], indices[${Yt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${zt}], indices[${Yt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${zt}], indices[${Yt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${zt}], indices[${Yt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${zt}], indices[${Yt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Mp=(e,t)=>{let n=H("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=H("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[zt,Yt,En,In]=[0,3,1,2]);let s=oe("output",e[0].dataType,a.length),o=n.type.value,u=G.size(a),l=[{type:12,data:u},...ce(e[0].dims,r,a)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${xp}
  ${vp(o)}
  ${Sp(t)}
  ${Tp(t)}
  ${Ep(n,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${En}]);
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
      var grid_indices = vec3<u32>(indices[${zt}], indices[${En}], indices[${In}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ip(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=G.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:d}},kp=(e,t)=>{$p(e.inputs),e.compute(Mp(e.inputs,t))},Cp=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),it,Ap,Rp,Da,Op,sr,Np,zp=Z(()=>{he(),ye(),Ve(),ia(),ma(),we(),rn(),it=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ap=(e,t)=>{let n=e[0],r=it(e,1),i=it(e,2),a=it(e,3),s=it(e,4),o=it(e,5),u=it(e,6),l=it(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],p=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],g=p,m=0,y=0,w=Math.floor(h/t.numHeads);if(u&&l&&G.size(u.dims)&&G.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&G.size(u.dims)||l&&G.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(r&&G.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,g=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(a&&G.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+g,T=0;if(s&&G.size(s.dims)>0){T=8;let k=s.dims;throw k.length===1?k[0]===d?T=1:k[0]===3*d+2&&(T=3):k.length===2&&k[0]===d&&k[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,E=h;if(i&&G.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],v=!0}}let M=!1;if(s&&G.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&G.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:g,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:M,passPastInKv:v,qkvFormat:_}},Rp=e=>Oe({...e}),Da=Oe({perm:[0,2,1,3]}),Op=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=G.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],d=p=>{let h=oe("qkv_with_bias",t.dataType,o),g=H("qkv",t.dataType,o),m=H("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(g,m,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,n],outputs:[-1]})[0]},sr=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&G.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Op(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(ht(u,Da.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(ht(u,Da.perm),{inputs:[u],outputs:[-1]})[0]},Np=(e,t)=>{let n=Ap(e.inputs,t),r=e.inputs[0],i=it(e.inputs,1),a=it(e.inputs,2),s=it(e.inputs,3),o=it(e.inputs,4),u=it(e.inputs,5),l=it(e.inputs,6),d=it(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,h=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(p)return tr(e,h,i,a,o,void 0,l,d,u,n);if(!i||!a)throw new Error("key and value must be provided");let g=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),m=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);tr(e,h,g,m,o,void 0,l,d,u,n)}}),Bp,Pp,Dp,Up,Ua,Lp,Fp,Gp=Z(()=>{he(),ye(),Ve(),we(),Bp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Pp=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Oe({numOutputs:r,axis:t.axis,splitSizes:n})},Dp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ue("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Up=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ua=(e,t)=>{let n=e[0].dims,r=G.size(n),i=e[0].dataType,a=G.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=H("input",i,n.length),u=new Array(t.numOutputs),l=[],d=[],p=0,h=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){p+=t.splitSizes[m],u[m]=p;let y=n.slice();y[a]=t.splitSizes[m],d.push(y),s[m]=oe(`output${m}`,i,y.length),l.push({dims:d[m],dataType:e[0].dataType})}h.push({type:12,data:u},...ce(n,...d));let g=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Dp(u.length)}
  ${Up(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ue("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Lp=(e,t)=>{Bp(e.inputs);let n=e.inputs.length===1?t:Pp(e.inputs,t);e.compute(Ua(e.inputs,n),{inputs:[0]})},Fp=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Oe({axis:t,numOutputs:r,splitSizes:n})}}),Wp,Wr,qp,Vp=Z(()=>{he(),ye(),Ve(),we(),Wp=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!G.areEqual(r.dims,[])&&!G.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!G.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],d=i.dims[0],p=G.sizeFromDimension(n.dims,1)/l,h=o===0?i.dims[1]*2:p/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Wr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=G.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],p=i===0?d*2:l/r,h=new Array(s,u,l/p,p-d),g=G.computeStrides(h),m=[{type:1,data:a},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let _=H("input",e[0].dataType,e[0].dims.length),x=H("position_ids",e[1].dataType,e[1].dims.length),T=H("cos_cache",e[2].dataType,e[2].dims.length),v=H("sin_cache",e[3].dataType,e[3].dims.length),E=oe("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${w.declareVariables(_,x,T,v,E)}

        ${w.mainStart(Pn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",oe("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${_.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(h)/Pn)},programUniforms:m})}},qp=(e,t)=>{Wp(e.inputs,t),e.compute(Wr(e.inputs,t))}}),Hp,jp,La,Kp,Yp,uw=Z(()=>{Ve(),he(),ma(),zp(),Gp(),rn(),Vp(),we(),Hp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],d=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=l,h=0,g=!r||r.dims.length===0,m=Math.floor(g?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);g&&(d=m*t.numHeads);let y=a&&a.dims.length!==0,w=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let x=0,T=!1,v=t.kvNumHeads?m*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=E.dims.reduce((k,S)=>k*S,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let k=0;k<E.dims.length;k++)if(E.dims[k]!==1&&E.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${E.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:_}},jp=Oe({perm:[0,2,1,3]}),La=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ht(r,jp.perm),{inputs:[r],outputs:[-1]})[0]),r},Kp=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{let p=H("seq_lens",n.dataType,n.dims),h=H("total_seq_lens",r.dataType,r.dims),g=oe("pos_ids",i,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(p,h,g)}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Yp=(e,t)=>{var v;let n=Hp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=Oe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[h,g,m]=!i&&!a?e.compute(Ua([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let E=e.compute(Kp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],k=e.inputs[8],S=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[h,E,M,k],z=[-1];y=e.compute(Wr(A,S),{inputs:A,outputs:z})[0],A.splice(0,1,g);let Y=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Wr(A,Y),{inputs:A,outputs:z})[0]}let _=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:h,void 0,0),x=La(e,t.doRotary?w:g,n),T=La(e,m,n);tr(e,_,x,T,void 0,void 0,s,o,void 0,n,u,l)}}),Fa,Xp,Qp,Zp,lw=Z(()=>{he(),ye(),rn(),we(),Fa=(e,t,n,r,i,a,s,o)=>{let u=qe(a),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=i*s,h=64;p===1&&(h=256);let g=[i,s,a/u],m=[i,s,2],y=["rank","type","type"],w=[];w.push(...ce(g,m));let _=x=>{let T=H("x",t.dataType,3,u),v=H("scale",n.dataType,n.dims),E=H("bias",r.dataType,r.dims),M=oe("output",1,3,2),k=[T,v,E,M];return`
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
      let value = ${l}(${T.get("batch","channel","h")});
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
      let sum_final = ${nn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${nn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:p},programUniforms:w}),getShaderSource:_},{inputs:[t,n,r],outputs:[-1]})[0]},Xp=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=G.sizeFromDimension(r,a),l=qe(u),d=G.size(i)/l,p=Fa(e,t[0],t[1],t[2],s,u,o,n.epsilon),h=[s,o,u/l],g=[s,o],m=["type","none"],y=w=>{let _=H("x",t[0].dataType,h.length,l),x=H("scale_shift",1,g.length,2),T=oe("output",t[0].dataType,h.length,l),v=[_,x,T];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ce(h,g,h)]}),getShaderSource:y},{inputs:[t[0],p]})},Qp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=G.sizeFromDimension(r,1)/s,u=qe(s),l=G.size(i)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],h=!1,g=[0,r.length-1];for(let _=0;_<r.length-2;_++)h=h||r[_+1]!==1,g.push(_+1);h=h&&r[r.length-1]!==1;let m=h?e.compute(ht(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(_,x)=>r[g[x]])),y=Fa(e,m,t[1],t[2],a,o,s,n.epsilon),w=_=>{let x=Ke(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${S}))`;case 2:return`vec2<${x}>(${A}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${A}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=H("input",t[0].dataType,t[0].dims,u),M=oe("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],y]})},Zp=(e,t)=>{t.format==="NHWC"?Qp(e,e.inputs,t):Xp(e,e.inputs,t)}}),Jp,eh,th,cw=Z(()=>{he(),ye(),we(),Jp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},eh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=G.normalizeAxis(t.axis,i.length),l=G.sizeToDimension(i,u),d=G.sizeFromDimension(i,u),p=G.size(a.dims),h=s?G.size(s.dims):0;if(p!==d||s&&h!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let g=[];for(let E=0;E<i.length;++E)E<u?g.push(i[E]):g.push(1);let m=qe(d),y=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];s&&y.push("type");let _=n>1,x=n>2,T=E=>{let M=Ke(e[0].dataType),k=[H("x",e[0].dataType,e[0].dims,m),H("scale",a.dataType,a.dims,m)];s&&k.push(H("bias",s.dataType,s.dims,m)),k.push(oe("output",e[0].dataType,o,m)),_&&k.push(oe("mean_data_output",1,g)),x&&k.push(oe("inv_std_output",1,g));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(S).declareVariables(...k)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ua("f32",m)};
    var mean_square_vector = ${ua("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Dn(M,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Dn(M,m,"x[j + offset]")};
      let f32scale = ${Dn(M,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Dn(M,m,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:o,dataType:e[0].dataType}];return _&&v.push({dims:g,dataType:1}),x&&v.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:T}},th=(e,t)=>{Jp(e.inputs),e.compute(eh(e.inputs,t,e.outputCount))}}),nh,rh,dw=Z(()=>{ye(),va(),Ia(),nh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},rh=e=>{nh(e.inputs);let t=Bn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(xa(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=G.size(e.inputs[0].dims.slice(0,-2)),s=G.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],d=[o,u];e.compute(Ur(d,{activation:""},t,l),{inputs:d})}else e.compute(Ur(e.inputs,{activation:""},t))}}}),ih,ah,sh,oh,uh,pw=Z(()=>{he(),ye(),Ve(),we(),ih=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!G.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(G.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(G.size(u)!==l)throw new Error("zeroPoints input size error.")}},ah=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=G.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=qe(t.k),h=qe(l),g=qe(s),m=o.concat([i,s]),y=i>1&&s/g%2===0?2:1,w=G.size(m)/g/y,_=64,x=[],T=[u,i,a/p],v=G.convertShape(e[1].dims).slice();v.splice(-1,1,l/h),x.push(...ce(T)),x.push(...ce(v)),x.push(...ce(e[2].dims)),e.length===4&&x.push(...ce(G.convertShape(e[3].dims)));let E=[u,i,s/g];x.push(...ce(E));let M=k=>{let S=T.length,A=H("a",e[0].dataType,S,p),z=H("b",12,v.length,h),Y=H("scales",e[2].dataType,e[2].dims.length),F=[A,z,Y],W=e.length===4?H("zero_points",12,e[3].dims.length):void 0;W&&F.push(W);let O=E.length,q=oe("output",e[0].dataType,O,g),K=Ke(e[0].dataType),X=(()=>{switch(p){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${p}-component is not supported.`)}})(),le=Math.floor(32/t.bits),L=Math.floor(le/8),P=()=>{let D="";for(let U=0;U<L;U++){let j=U*t.bits*4,te=j+t.bits;D+=`
          // reuse a data (pass ${U})
            var input_offset${U>0?U:""} = ${U===0?A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${U>0?U:""}: ${X};
            for (var j${U>0?U:""}: u32 = 0; j${U>0?U:""} < ${8/p}; j${U>0?U:""}++) {
              a_data${U>0?U:""}[j${U>0?U:""}] = ${A.getByOffset(`input_offset${U>0?U:""}`)};
              input_offset${U>0?U:""}++;
            }
          `;for(let ne=0;ne<g*y;ne++)D+=`
            b_value = ${h===1?`b${ne}_data`:`b${ne}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${U*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${j}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${te}u) & b_mask);`}
            b_quantized_values = ${X}(${Array.from({length:4},(fe,ve)=>`${K}(b_value_lower[${ve}]), ${K}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${p===1?`${X}(${Array.from({length:8},(fe,ve)=>`(b_quantized_values[${ve}] - ${W?`zero_point${ne}`:"zero_point"}) * scale${ne}`).join(", ")});`:`(b_quantized_values - ${X}(${Array(8).fill(`${W?`zero_point${ne}`:"zero_point"}`).join(",")})) * scale${ne};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ne/g)}]${g>1?`[${ne%g}]`:""} += ${Array.from({length:8/p},(fe,ve)=>`${p===1?`a_data${U>0?U:""}[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data${U>0?U:""}[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `}return D},R=()=>{let D=`
            var col_index = col * ${g};
            ${W?`
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
            `;for(let U=0;U<g*y;U++)D+=`
            let scale${U} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${W?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},N=()=>{let D=`col_index = col * ${g};`;for(let U=0;U<g*y;U++)D+=`
            let b${U}_data = ${z.getByIndices(`${z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${X};
            var b_dequantized_values: ${X};`,D};return`
        var<workgroup> workgroup_shared: array<${q.type.value}, ${y*_}>;
        ${k.declareVariables(...F,q)}
        ${k.mainStart([_,1,1])}
          let output_indices = ${q.offsetToIndices(`(global_idx / ${_}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${R()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${N()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${P()}
                word_offset += ${le/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${q.setByIndices(`${q.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${g};${y};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:M}},sh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=G.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=qe(t.k),h=qe(l),g=o.concat([i,s]),m=128,y=s%8===0?8:s%4===0?4:1,w=m/y,_=Math.floor(32/t.bits),x=w*h*_,T=x/p,v=x/t.blockSize,E=G.size(g)/y,M=[],k=[u,i,a/p],S=G.convertShape(e[1].dims).slice();S.splice(-1,1,l/h),M.push(...ce(k)),M.push(...ce(S)),M.push(...ce(e[2].dims)),e.length===4&&M.push(...ce(G.convertShape(e[3].dims)));let A=[u,i,s];M.push(...ce(A));let z=Y=>{let F=k.length,W=H("a",e[0].dataType,F,p),O=H("b",12,S.length,h),q=H("scales",e[2].dataType,e[2].dims.length),K=[W,O,q],X=e.length===4?H("zero_points",12,e[3].dims.length):void 0;X&&K.push(X);let le=A.length,L=oe("output",e[0].dataType,le),P=Ke(e[0].dataType),R=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${W.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${Y.declareVariables(...K,L)}
        ${Y.mainStart([w,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${W.getByIndices(`${W.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${W.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${X?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${P}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${P}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${q.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let N=Math.floor(_/8),D="";for(let U=0;U<N;U++){let j=U*t.bits*4,te=j+t.bits;D+=`
              ${R()}
              {${t.bits===2?`
                let half_word = b_value >> ${U*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${P}>(${Array.from({length:4},(ne,fe)=>`${P}(b_value_lower[${fe}]), ${P}(b_value_upper[${fe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${P}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ne,fe)=>`${`dot(a_data${fe}, b_dequantized_values[${fe}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:d}],dispatchGroup:{x:E},programUniforms:M}),getShaderSource:z}},oh=(e,t)=>{ih(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(sh(e.inputs,t)):e.compute(ah(e.inputs,t))},uh=e=>Oe(e)}),lh,ch,dh,ph,hh,fh,mh,gh,yh,hw=Z(()=>{he(),ye(),we(),lh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ch=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ue("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},dh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ue("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ue("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ph=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
                  k = i32(${ue("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},hh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ue("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
                  k -= i32(${ue("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},fh=(e,t,n)=>{switch(n.mode){case 0:return ch(e,t,n.pads.length);case 1:return dh(e,t,n.pads.length);case 2:return ph(e,t,n.pads.length);case 3:return hh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},mh=(e,t)=>{let n=G.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=G.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ce(e[0].dims,n));let o=["rank"],u=l=>{let d=oe("output",e[0].dataType,n.length),p=H("x",e[0].dataType,r.length),h=p.type.value,g=fh(d,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?h:"f32"}),`
            ${l.registerUniforms(m).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(n)/64)},programUniforms:a}),getShaderSource:u}},gh=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},yh=(e,t)=>{lh(e.inputs);let n=gh(e.inputs,t);e.compute(mh(e.inputs,n),{inputs:[0]})}}),or,Ga,Wa,qa,Va,wh,bh,Ha,ja,_h,$h,Ka,xh,vh,Ya,Sh,Th,Eh,Ih,fw=Z(()=>{gt(),he(),ye(),we(),or=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ga=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Rr.adjustPoolAttributes(n,i,s,o,u,l);let d=Rr.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let h=d.slice();return h.push(h.splice(1,1)[0]),[p,r?h:d]},Wa=(e,t)=>{let n=t.format==="NHWC",r=G.size(e),i=G.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];h=!!(y+w),a.push({type:12,data:g},{type:12,data:m},{type:12,data:y},{type:12,data:w}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,p,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=G.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[a,s,!!u,!1,!1]}},qa=(e,t,n,r,i,a,s,o,u,l,d,p)=>{let h=i.format==="NHWC",g=t.type.value,m=oe("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",_="",x=n-(h?2:1);if(d?y=`
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
                }`,i.kernelShape.length===2){let T=n-(h?3:2);p?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
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
              ${_}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:_=`
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
                  offsets[j] = offset / ${ue("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ue("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ue("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${ue("uniforms.pads","j - 2u",w)};
                  ${_}
              }
              ${s}

              output[global_idx] = value;
            }`}},Va=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,wh=e=>`${Va(e)};${e.countIncludePad}`,bh=e=>`${Va(e)};${e.storageOrder};${e.dilations}`,Ha=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ja=(e,t,n,r)=>{let[i,a]=Ga(t,r,n),s=H("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,p,h,g,m]=Wa(a,i);d.push(...ce(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(a)/64)},programUniforms:d}),getShaderSource:w=>qa(w,s,t.dims.length,a.length,i,u,l,0,p,h,g,m)}},_h=e=>{let t=e.count_include_pad!==0,n=Ha(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:wh(r)}},$h=(e,t)=>{or(e.inputs),e.compute(ja("AveragePool",e.inputs[0],!1,t))},Ka={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},xh=e=>{let t=e.format;return{format:t,...Ka,cacheKey:t}},vh=(e,t)=>{or(e.inputs),e.compute(ja("GlobalAveragePool",e.inputs[0],!0,t))},Ya=(e,t,n,r)=>{let[i,a]=Ga(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=H("x",t.dataType,t.dims.length),l=["rank"],[d,p,h,g,m]=Wa(a,i);return d.push(...ce(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(a)/64)},programUniforms:d}),getShaderSource:y=>qa(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,p,h,g,m)}},Sh=(e,t)=>{or(e.inputs),e.compute(Ya("MaxPool",e.inputs[0],!1,t))},Th=e=>{let t=e.storage_order,n=e.dilations,r=Ha(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:bh(i)}},Eh=e=>{let t=e.format;return{format:t,...Ka,cacheKey:t}},Ih=(e,t)=>{or(e.inputs),e.compute(Ya("GlobalMaxPool",e.inputs[0],!0,t))}}),Mh,kh,Ch,Ah,mw=Z(()=>{he(),ye(),Ve(),we(),Mh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},kh=(e,t)=>{let n=G.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=G.size(a),u=r===3||r===2,l=u?[Math.ceil(G.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(G.size(p.dims)/4)]:p.dims:void 0,g=d.length===0||d.length===1&&d[0]===1,m=g===!1&&d.length===1,y=qe(o),w=g&&(!u||y===4),_=w?y:1,x=w&&!u?y:1,T=H("input",u?12:r,l.length,x),v=H("scale",s,d.length),E=p?H("zero_point",u?12:r,h.length):void 0,M=oe("output",s,a.length,_),k=[T,v];E&&k.push(E);let S=[l,d];p&&S.push(h);let A=[{type:12,data:o/_},{type:12,data:n},{type:12,data:t.blockSize},...ce(...S,a)],z=Y=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(F).declareVariables(...k,M)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

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
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:z,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:A})}},Ch=(e,t)=>{Mh(e.inputs,t),e.compute(kh(e.inputs,t))},Ah=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),Rh,Oh,Nh,gw=Z(()=>{gt(),he(),we(),Rh=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Oh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...ce(a)],u=l=>{let d=oe("output",r,a.length),p=d.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(h).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Nh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&Rh(t,n,r),e.compute(Oh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),zh,Bh,Ph,Dh,yw=Z(()=>{he(),ye(),Ve(),we(),zh=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Bh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(G.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=G.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ce(e[1].dims,e[2].dims,i)],d=p=>{let h=H("indices",e[1].dataType,e[1].dims.length),g=H("updates",e[2].dataType,e[2].dims.length,a),m=t.reduction!=="none"&&t.reduction!==""?qu("output",e[0].dataType,i.length):oe("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,g,m)}
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
    ${zh(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:d}},Ph=e=>Oe({reduction:e.reduction}),Dh=(e,t)=>{e.compute(Bh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Uh,Lh,Fh,Xa,Gh,Wh,qh,Vh,Hh,jh,Kh,Yh,Qa,Xh,Qh,Zh,Jh,ef,tf,nf,ww=Z(()=>{he(),ye(),Ve(),we(),Uh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Lh=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Fh=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(d=>a.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Uh(r,t),t.axes.length>0&&Lh(r,t.axes,l).forEach((d,p)=>r[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Xa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Gh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Xa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Xa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Wh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",qh=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},Vh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Hh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},jh=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ue("uniforms.scales","i",r)};
        var roi_low = ${ue("uniforms.roi","i",i)};
        var roi_hi = ${ue("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ue("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Kh=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ue("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ue("uniforms.roi","i",a)};
          var roi_hi = ${ue("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ue("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",r.length)};
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
    }`,Yh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ue("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Qa=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Xh=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Qa(e,u,a,2)}
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
    }`},Qh=(e,t,n,r,i,a,s,o,u,l)=>{let d=n.length===2,[p,h]=d?[0,1]:[2,3],g=e.type.value,m=y=>{let w=y===p?"row":"col";return`
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
          data[i + 1] = ${y===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(p)};
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
    `},Zh=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Qa(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${s}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
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
    }`},Jh=(e,t,n,r,i,a)=>{let s=e.dims,o=qh(a,t.axes,s.length),u=Vh(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Hh(s,l,t)));let d=oe("output",e.dataType,u.length),p=H("input",e.dataType,s.length),h=G.size(u),g=s.length===u.length&&s.every((x,T)=>x===u[T]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=p.type.value,_=x=>`
      ${g?"":`
      ${Gh(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Yh(p,s)};
              ${Wh(t.nearestMode,n,w)};
              ${Kh(p,d,s,u,l.length,o.length,m)};
              `;case"linear":return`
              ${jh(d,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Xh(p,d,s,m,y)}`;if(s.length===3||s.length===5)return`${Zh(p,d,s,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Qh(p,d,s,u,l,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,d)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:o},...ce(s,u)]})}},ef=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},tf=(e,t)=>{let n=[],r=[],i=[],a=ef(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Fh(e.inputs,t,a,n,r,i),e.compute(Jh(e.inputs[0],t,a,n,r,i),{inputs:[0]})},nf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),rf,af,sf,bw=Z(()=>{he(),ye(),we(),rf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},af=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=G.size(a),o=a,u=s,l=a.slice(-1)[0],d=r?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,g=r&&n>1,m=r&&n>2,y=n>3,w=64,_=qe(l),x=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],T=E=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[H("x",e[0].dataType,e[0].dims,_),H("skip",e[1].dataType,e[1].dims,_),H("gamma",e[2].dataType,e[2].dims,_)];p&&k.push(H("beta",e[3].dataType,e[3].dims,_)),h&&k.push(H("bias",e[4].dataType,e[4].dims,_)),k.push(oe("output",e[0].dataType,o,_)),g&&k.push(oe("mean_output",1,d)),m&&k.push(oe("inv_std_output",1,d)),y&&k.push(oe("input_skip_bias_sum",e[0].dataType,o,_));let S=Ke(e[0].dataType),A=Ke(1,_);return`

      ${E.registerUniforms(M).declareVariables(...k)}
      var<workgroup> sum_shared : array<${A}, ${w}>;
      var<workgroup> sum_squared_shared : array<${A}, ${w}>;

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
          let bias_value = ${h?"bias[offset1d + i]":S+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Dn(S,_,"value")};
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
        let mean = ${nn("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nn("square_sum",_)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:o,dataType:e[0].dataType}];return n>1&&v.push({dims:d,dataType:1}),n>2&&v.push({dims:d,dataType:1}),n>3&&v.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${g};${m};${y}`,inputDependencies:e.map((E,M)=>"type")},getShaderSource:T,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},sf=(e,t)=>{rf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(af(e.inputs,t,e.outputCount,!1),{outputs:n})}}),of,ur,uf,Za,lf,cf,df,pf,_w=Z(()=>{he(),ye(),Ve(),we(),of=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ur=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},uf=(e,t)=>{if(e.length>1){let n=ur(e,1),r=ur(e,2),i=ur(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Oe({starts:n,ends:r,axes:i})}else return t},Za=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},lf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ue("uniforms.input_shape","i",n.length)};
            let steps_i = ${ue("uniforms.steps","i",n.length)};
            let signs_i = ${ue("uniforms.signs","i",n.length)};
            let starts_i = ${ue("uniforms.starts","i",n.length)};
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
      }`,cf=(e,t)=>{let n=e[0].dims,r=G.size(n),i=t.axes.length>0?G.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ur(e,4);a.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((_,x)=>Za(_,x,n,i,a)),o=t.ends.map((_,x)=>Za(_,x,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let _=0;_<n.length;++_)i.includes(_)||(s.splice(_,0,0),o.splice(_,0,n[_]),a.splice(_,0,1));let u=a.map(_=>Math.sign(_));a.forEach((_,x,T)=>{if(_<0){let v=(o[x]-s[x])/_,E=s[x],M=E+v*a[x];s[x]=M,o[x]=E,T[x]=-_}});let l=n.slice(0);i.forEach((_,x)=>{l[_]=Math.ceil((o[_]-s[_])/a[_])});let d={dims:l,dataType:e[0].dataType},p=oe("output",e[0].dataType,l.length),h=H("input",e[0].dataType,e[0].dims.length),g=G.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ce(e[0].dims,l)],w=_=>`
      ${_.registerUniforms(m).declareVariables(h,p)}
        ${lf(h,p,n)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},df=(e,t)=>{of(e.inputs,t);let n=uf(e.inputs,t);e.compute(cf(e.inputs,n),{inputs:[0]})},pf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Oe({starts:t,ends:n,axes:r})}}),hf,ff,mf,gf,$w=Z(()=>{he(),ye(),Ve(),rn(),we(),hf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ff=(e,t)=>{let n=e.inputs[0],r=n.dims,i=G.size(r),a=r.length,s=G.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(k,S)=>S),l[s]=a-1,l[a-1]=s,u=e.compute(ht(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let d=u.dims,p=d[a-1],h=i/p,g=qe(p),m=p/g,y=64;h===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,_=H("x",u.dataType,u.dims,g),x=oe("result",u.dataType,u.dims,g),T=_.type.value,v=Ke(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=k=>`
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
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:E},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(ht(M,l),{inputs:[M]})},mf=(e,t)=>{hf(e.inputs),ff(e,t)},gf=e=>Oe({axis:e.axis})}),Ja,yf,wf,bf,_f,xw=Z(()=>{he(),ye(),we(),Ja=e=>Array.from(e.getBigInt64Array(),Number),yf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ja(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},wf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},bf=(e,t)=>{let n=e[0].dims,r=t??Ja(e[1]),i=wf(n,r),a=G.size(i),s=e[0].dataType,o=H("input",s,n.length),u=oe("output",s,i.length),l=d=>`
      const inputShape = ${o.indices(...n)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ce(e[0].dims,i)]}),getShaderSource:l}},_f=e=>{yf(e.inputs),e.compute(bf(e.inputs),{inputs:[0]})}}),$f,xf,vf,vw=Z(()=>{he(),ye(),we(),$f=(e,t,n,r,i)=>{let a=oe("output_data",i,n.length,4),s=H("a_data",t[1].dataType,t[1].dims.length,4),o=H("b_data",t[2].dataType,t[2].dims.length,4),u=H("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,h,g)=>`select(${h}, ${p}, ${g})`;if(!r)l=a.setByOffset("global_idx",d(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,g,m="")=>{let y=`a_data[index_a${g}][component_a${g}]`,w=`b_data[index_b${g}][component_b${g}]`,_=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
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
            ${h}[${g}] = ${m}(${d(y,w,_)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},xf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(G.areEqual(t,n)&&G.areEqual(n,r)),s=t,o=G.size(t);if(a){let l=Bn.calcShape(Bn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=G.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>$f(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ce(r,t,n,s)]})}},vf=e=>{e.compute(xf(e.inputs))}}),Sf,Sw=Z(()=>{Dy(),ma(),Uy(),Ly(),Fy(),Gy(),Wy(),Ky(),Xy(),Qy(),Zy(),Jy(),ew(),tw(),nw(),rw(),iw(),aw(),sw(),ow(),uw(),lw(),cw(),dw(),pw(),zp(),hw(),fw(),mw(),gw(),yw(),pa(),ww(),Vp(),bw(),_w(),$w(),Gp(),xw(),rn(),ba(),vw(),Sf=new Map([["Abs",[rc]],["Acos",[ic]],["Acosh",[ac]],["Add",[Hc]],["ArgMax",[Gl,fa]],["ArgMin",[Fl,fa]],["Asin",[sc]],["Asinh",[oc]],["Atan",[uc]],["Atanh",[lc]],["Attention",[Kl]],["AveragePool",[$h,_h]],["BatchNormalization",[Zl]],["BiasAdd",[tc]],["BiasSplitGelu",[Wc]],["Cast",[dc,cc]],["Ceil",[fc]],["Clip",[hc]],["Concat",[sd,od]],["Conv",[Ra,Ca]],["ConvTranspose",[Nd,Ad]],["Cos",[mc]],["Cosh",[gc]],["CumSum",[Bd,Pd]],["DepthToSpace",[Fd,Gd]],["DequantizeLinear",[Ch,Ah]],["Div",[jc]],["Einsum",[Kd,Yd]],["Elu",[yc,nr]],["Equal",[Kc]],["Erf",[wc]],["Exp",[bc]],["Expand",[Jd]],["FastGelu",[tp]],["Floor",[_c]],["FusedConv",[Ra,Ca]],["Gather",[ap,ip]],["GatherElements",[gp,mp]],["GatherBlockQuantized",[dp,pp]],["GatherND",[op,up]],["Gelu",[$c]],["Gemm",[_p,bp]],["GlobalAveragePool",[vh,xh]],["GlobalMaxPool",[Ih,Eh]],["Greater",[Zc]],["GreaterOrEqual",[ed]],["GridSample",[kp,Cp]],["GroupQueryAttention",[Yp]],["HardSigmoid",[kc,Mc]],["InstanceNormalization",[Zp]],["LayerNormalization",[th]],["LeakyRelu",[xc,nr]],["Less",[Jc]],["LessOrEqual",[td]],["Log",[Pc]],["MatMul",[rh]],["MatMulNBits",[oh,uh]],["MaxPool",[Sh,Th]],["Mul",[Yc]],["MultiHeadAttention",[Np,Rp]],["Neg",[Sc]],["Not",[vc]],["Pad",[yh]],["Pow",[Xc]],["QuickGelu",[Lc,nr]],["Range",[Nh]],["Reciprocal",[Tc]],["ReduceMin",[Bl]],["ReduceMean",[Al]],["ReduceMax",[zl]],["ReduceSum",[Dl]],["ReduceProd",[Pl]],["ReduceL1",[Rl]],["ReduceL2",[Ol]],["ReduceLogSum",[Ll]],["ReduceLogSumExp",[Nl]],["ReduceSumSquare",[Ul]],["Relu",[Ec]],["Resize",[tf,nf]],["RotaryEmbedding",[qp]],["ScatterND",[Dh,Ph]],["Sigmoid",[Ic]],["Sin",[Cc]],["Sinh",[Ac]],["Slice",[df,pf]],["SkipLayerNormalization",[sf]],["Split",[Lp,Fp]],["Sqrt",[Rc]],["Softmax",[mf,gf]],["Sub",[Qc]],["Tan",[Oc]],["Tanh",[Nc]],["ThresholdedRelu",[Bc,nr]],["Tile",[_f]],["Transpose",[Zu,Ju]],["Where",[vf]]])}),Tf,Tw=Z(()=>{gt(),Kt(),we(),Tf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Nt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),bt(e.programInfo.name)}dispose(){}build(e,t){Nt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Hu(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});Me("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return bt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ef={};Nn(Ef,{WebGpuBackend:()=>Cf});var If,Mf,kf,Cf,Ew=Z(()=>{gt(),he(),Kt(),Ru(),By(),Sw(),Tw(),If=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Mf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${If(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},kf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Cf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new kf(s),this.gpuDataManager=Gu(this),this.programManager=new Tf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Yi(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Nt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,d=a.programName,p=a.inputTensorViews,h=a.outputTensorViews,g=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(_=>({dims:_.dims,dataType:jt(_.dataType)})),outputsMetadata:h.map(_=>({dims:_.dims,dataType:jt(_.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let _="";p.forEach((T,v)=>{_+=`input[${v}]: [${T.dims}] | ${jt(T.dataType)}, `});let x="";h.forEach((T,v)=>{x+=`output[${v}]: [${T.dims}] | ${jt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${d}" ${_}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Tr("GPU",`${d}::${g}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),bt()}run(e,t,n,r,i,a){Nt(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let v=this.gpuDataManager.get(T);if(!v)throw new Error(`no GPU data for input: ${T}`);s.push(v)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=n.length===0?o.map((x,T)=>T):n;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let p=[],h=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(d[x])||d[x]<-3||d[x]>=a)throw new Error(`Invalid output index: ${d[x]}`);if(d[x]===-3)continue;let T=d[x]===-1,v=d[x]===-2,E=T||v?i(o[x].dataType,o[x].dims):r(d[x],o[x].dataType,o[x].dims);if(p.push(E),E.data===0)continue;let M=this.gpuDataManager.get(E.data);if(!M)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(M),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(M)}h.push(M)}if(s.length!==t.length||h.length!==p.length){if(h.length===0)return bt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(l){let x=0,T=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let A=k.type===10?2:4,z,Y;k.type===10?(Y=S.length>4?16:S.length>2?8:S.length*A,z=S.length>4?16:A*S.length):(Y=S.length<=2?S.length*A:16,z=16),x=Math.ceil(x/Y)*Y,T.push(x);let F=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/F)*z:S.length*A});let v=16;x=Math.ceil(x/v)*v;let E=new ArrayBuffer(x);l.forEach((k,S)=>{let A=T[S],z=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(E,A,z.length).set(z);else if(k.type===12)new Uint32Array(E,A,z.length).set(z);else if(k.type===10)new Uint16Array(E,A,z.length).set(z);else if(k.type===1)new Float32Array(E,A,z.length).set(z);else throw new Error(`Unsupported uniform type: ${jt(k.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,E,0,x),this.gpuDataManager.release(M.id),g={offset:0,size:x,buffer:M.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Mf(e,t,y),_=this.programManager.getArtifact(w);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(w,_),Me("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],v=T.type,E=typeof T.data=="number"?1:T.data.length,[M,k]=_.uniformVariablesInfo[x];if(v!==M||E!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${k}, got type ${v} with size ${E} in program "${_.programInfo.name}".`)}}if(Me("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(_,s,h,m,g),bt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Sf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Me("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await oa(this,e,t);return Xi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Af={};Nn(Af,{init:()=>Of});var qr,Rf,Of,Iw=Z(()=>{he(),Kt(),ye(),zy(),qr=class py{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(G.size(t)!==G.size(this.dims))throw new Error("Invalid new shape");return new py(this.module,this.dataType,this.data,t)}},Rf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),d=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,a)),h=[];for(let g=0;g<p;g++)h.push(Number(e.getValue(r*i++,a)));o.push(new qr(e,l,d,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new qr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=$n(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new qr(this.module,o,d,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Of=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Ew(),Yn(Ef)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,d=!1)=>{if(d)Me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{Me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),p)}},async(o,u,l)=>{Me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,d)=>{Me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let p=new Rf(t,s,Number(u));return s.computeKernel(Number(o),p,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Du(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,d)=>a.ensureTensor(s,o,u,l,d),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Nf,es,ts,an,zf,ns,Vr,rs,is,as,ss,os,us,Bf=Z(()=>{gt(),Ry(),Oy(),he(),wn(),qi(),xu(),Nf=(e,t)=>{Pe()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},es=async e=>{Nf(e.wasm.numThreads,Ar(e.logLevel))},ts=async(e,t)=>{var r,i;(i=(r=Pe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Iw(),Yn(Af)).init;t==="webgpu"&&await a("webgpu",Pe(),e,n),t==="webnn"&&await a("webnn",Pe(),e)}},an=new Map,zf=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},ns=(e,t)=>{let n=Pe(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ne("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],d=[];for(let p=0;p<l;p++){let h=Number(n.getValue(i+8+p*a,"*"));d.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(p+l)*a,"*")))}return[o,u,d]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Vr=e=>{let t=Pe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},rs=async(e,t)=>{var p,h,g,m;let n,r,i=Pe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Vr(e);let a=0,s=0,o=0,u=[],l=[],d=[];try{if([s,u]=await $u(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let A of t.externalData){let z=typeof A=="string"?A:A.path;S.push(Ki(typeof A=="string"?A:A.data).then(Y=>{i.mountExternalData(z,Y)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let A=S,z=A==null?void 0:A.context,Y=A==null?void 0:A.gpuDevice,F=A==null?void 0:A.deviceType,W=A==null?void 0:A.powerPreference;z?i.currentContext=z:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:F,powerPreference:W})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&Ne("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=zf(a),_=!!(t!=null&&t.enableGraphCapture),x=[],T=[],v=[],E=[],M=[];for(let S=0;S<y;S++){let[A,z,Y]=ns(a,S);A===0&&Ne("Can't get an input name."),l.push(A);let F=i.UTF8ToString(A);x.push(F),v.push(z===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:jt(z),shape:Y})}for(let S=0;S<w;S++){let[A,z,Y]=ns(a,S+y);A===0&&Ne("Can't get an output name."),d.push(A);let F=i.UTF8ToString(A);T.push(F),E.push(z===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:jt(z),shape:Y});{if(_&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let W=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[F])??"cpu",O=i.webnnIsGraphOutput;if(W==="cpu"&&O&&O(a,F)){M.push("ml-tensor-cpu-output");continue}if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if(_&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(W)}}let k=null;return M.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Ne("Can't create IO binding."),k={handle:o,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>ji(S))}),an.set(a,[a,l,d,k,_,!1]),[a,x,T,v,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),d.forEach(w=>i._OrtFree(w)),o!==0&&i._OrtReleaseBinding(o)!==0&&Ne("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ne("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},is=e=>{var u,l,d;let t=Pe(),n=an.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(d=t.webgpuOnReleaseSession)==null||d.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),an.delete(e)},as=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Pe(),u=o.PTR_SIZE,l=e[0],d=e[1],p=e[3],h=p,g,m;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=e[2].gpuBuffer;m=$n(_n(l),d);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=x(r,a,_,m)}}else if(p==="ml-tensor"){let _=e[2].mlTensor;m=$n(_n(l),d);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=x(r,_,_n(l),d)}else{let _=e[2];if(Array.isArray(_)){m=u*_.length,g=o._malloc(m),n.push(g);for(let x=0;x<_.length;x++){if(typeof _[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(g+x*u,_t(_[x],n),"*")}}else{let x=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&x&&T){let v=o.UTF8ToString(i);if(x(r,v)||T(r,v)){let E=_n(l);m=$n(E,d),h="ml-tensor";let M=o.webnnCreateTemporaryTensor,k=o.webnnUploadTensor;if(!M||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await M(r,E,d);k(S,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),g=S}else m=_.byteLength,g=o._malloc(m),n.push(g),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),g)}else m=_.byteLength,g=o._malloc(m),n.push(g),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),g)}}let y=o.stackSave(),w=o.stackAlloc(4*d.length);try{d.forEach((x,T)=>o.setValue(w+T*u,x,u===4?"i32":"i64"));let _=o._OrtCreateTensor(_n(l),g,m,w,d.length,ji(h));_===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(_)}finally{o.stackRestore(y)}},ss=async(e,t,n,r,i,a)=>{var F,W,O,q;let s=Pe(),o=s.PTR_SIZE,u=an.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],h=u[3],g=u[4],m=u[5],y=t.length,w=r.length,_=0,x=[],T=[],v=[],E=[],M=[],k=s.stackSave(),S=s.stackAlloc(y*o),A=s.stackAlloc(y*o),z=s.stackAlloc(w*o),Y=s.stackAlloc(w*o);try{[_,x]=gu(a),gn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await as(n[L],T,E,e,d[t[L]],t[L],g);for(let L=0;L<w;L++)await as(i[L],v,E,e,p[r[L]],y+r[L],g);yn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)s.setValue(S+L*o,T[L],"*"),s.setValue(A+L*o,d[t[L]],"*");for(let L=0;L<w;L++)s.setValue(z+L*o,v[L],"*"),s.setValue(Y+L*o,p[r[L]],"*");if(h&&!m){let{handle:L,outputPreferredLocations:P,outputPreferredLocationsEncoded:R}=h;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);gn("wasm bindInputsOutputs");for(let N=0;N<y;N++){let D=t[N];await s._OrtBindInput(L,d[D],T[N])!==0&&Ne(`Can't bind input[${N}] for session=${e}.`)}for(let N=0;N<w;N++){let D=r[N];(F=i[N])!=null&&F[3]?(M.push(v[N]),s._OrtBindOutput(L,p[D],v[N],0)!==0&&Ne(`Can't bind pre-allocated output[${N}] for session=${e}.`)):s._OrtBindOutput(L,p[D],0,R[D])!==0&&Ne(`Can't bind output[${N}] to ${P[N]} for session=${e}.`)}yn("wasm bindInputsOutputs"),an.set(e,[l,d,p,h,g,!0])}(W=s.jsepOnRunStart)==null||W.call(s,l),(O=s.webnnOnRunStart)==null||O.call(s,l);let K;h?K=await s._OrtRunWithBinding(l,h.handle,w,z,_):K=await s._OrtRun(l,A,S,y,Y,w,z,_),K!==0&&Ne("failed to call OrtRun().");let X=[],le=[];gn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let P=Number(s.getValue(z+L*o,"*"));if(P===v[L]||M.includes(v[L])){X.push(i[L]),P!==v[L]&&s._OrtReleaseTensor(P)!==0&&Ne("Can't release tensor.");continue}let R=s.stackSave(),N=s.stackAlloc(4*o),D=!1,U,j=0;try{s._OrtGetTensorData(P,N,N+o,N+2*o,N+3*o)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let te=o===4?"i32":"i64",ne=Number(s.getValue(N,te));j=s.getValue(N+o,"*");let fe=s.getValue(N+o*2,"*"),ve=Number(s.getValue(N+o*3,te)),ke=[];for(let ee=0;ee<ve;ee++)ke.push(Number(s.getValue(fe+ee*o,te)));s._OrtFree(fe)!==0&&Ne("Can't free memory for tensor dims.");let Re=ke.reduce((ee,J)=>ee*J,1);U=jt(ne);let ie=h==null?void 0:h.outputPreferredLocations[r[L]];if(U==="string"){if(ie==="gpu-buffer"||ie==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ee=[];for(let J=0;J<Re;J++){let be=s.getValue(j+J*o,"*"),We=s.getValue(j+(J+1)*o,"*"),Fe=J===Re-1?void 0:We-be;ee.push(s.UTF8ToString(be,Fe))}X.push([U,ke,ee,"cpu"])}else if(ie==="gpu-buffer"&&Re>0){let ee=s.jsepGetBuffer;if(!ee)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let J=ee(j),be=$n(ne,Re);if(be===void 0||!Vi(U))throw new Error(`Unsupported data type: ${U}`);D=!0,X.push([U,ke,{gpuBuffer:J,download:s.jsepCreateDownloader(J,be,U),dispose:()=>{s._OrtReleaseTensor(P)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(ie==="ml-tensor"&&Re>0){let ee=s.webnnEnsureTensor,J=s.webnnIsGraphInputOutputTypeSupported;if(!ee||!J)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if($n(ne,Re)===void 0||!Hi(U))throw new Error(`Unsupported data type: ${U}`);if(!J(e,U,!1))throw new Error(`preferredLocation "ml-tensor" for ${U} output is not supported by current WebNN Context.`);let be=await ee(e,j,ne,ke,!1);D=!0,X.push([U,ke,{mlTensor:be,download:s.webnnCreateMLTensorDownloader(j,U),dispose:()=>{s.webnnReleaseTensorId(j),s._OrtReleaseTensor(P)}},"ml-tensor"])}else if(ie==="ml-tensor-cpu-output"&&Re>0){let ee=s.webnnCreateMLTensorDownloader(j,U)(),J=X.length;D=!0,le.push((async()=>{let be=[J,await ee];return s.webnnReleaseTensorId(j),s._OrtReleaseTensor(P),be})()),X.push([U,ke,[],"cpu"])}else{let ee=Cr(U),J=new ee(Re);new Uint8Array(J.buffer,J.byteOffset,J.byteLength).set(s.HEAPU8.subarray(j,j+J.byteLength)),X.push([U,ke,J,"cpu"])}}finally{s.stackRestore(R),U==="string"&&j&&s._free(j),D||s._OrtReleaseTensor(P)}}h&&!g&&(s._OrtClearBoundOutputs(h.handle)!==0&&Ne("Can't clear bound outputs."),an.set(e,[l,d,p,h,g,!1]));for(let[L,P]of await Promise.all(le))X[L][2]=P;return yn("wasm ProcessOutputTensor"),X}finally{(q=s.webnnOnRunEnd)==null||q.call(s,l),s.stackRestore(k),T.forEach(K=>s._OrtReleaseTensor(K)),v.forEach(K=>s._OrtReleaseTensor(K)),E.forEach(K=>s._free(K)),_!==0&&s._OrtReleaseRunOptions(_),x.forEach(K=>s._free(K))}},os=e=>{let t=Pe(),n=an.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},us=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),sn,lt,Un,lr,cr,Hr,ls,jr,Mn,kn,Pf,Df,Uf,Lf,Ff,Gf,Wf,qf,Vf=Z(()=>{gt(),Bf(),wn(),Li(),sn=()=>!!ze.wasm.proxy&&typeof document<"u",Un=!1,lr=!1,cr=!1,jr=new Map,Mn=(e,t)=>{let n=jr.get(e);n?n.push(t):jr.set(e,[t])},kn=()=>{if(Un||!lr||cr||!lt)throw new Error("worker not ready")},Pf=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(cr=!0,ls[1](e.data.err)):(lr=!0,ls[0]()),Hr&&(URL.revokeObjectURL(Hr),Hr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=jr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Df=async()=>{if(!lr){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,sn())return new Promise((e,t)=>{lt==null||lt.terminate(),du().then(([n,r])=>{try{lt=r,lt.onerror=a=>t(a),lt.onmessage=Pf,ls=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||Bi)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),lt.postMessage(i),Hr=n}catch(i){t(i)}},t)});try{await Wi(ze.wasm),await es(ze),lr=!0}catch(e){throw cr=!0,e}finally{Un=!1}}},Uf=async e=>{if(sn())return kn(),new Promise((t,n)=>{Mn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};lt.postMessage(r)});await ts(ze,e)},Lf=async e=>sn()?(kn(),new Promise((t,n)=>{Mn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};lt.postMessage(r,[e.buffer])})):Vr(e),Ff=async(e,t)=>{if(sn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return kn(),new Promise((n,r)=>{Mn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),lt.postMessage(i,a)})}else return rs(e,t)},Gf=async e=>{if(sn())return kn(),new Promise((t,n)=>{Mn("release",[t,n]);let r={type:"release",in:e};lt.postMessage(r)});is(e)},Wf=async(e,t,n,r,i,a)=>{if(sn()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return kn(),new Promise((s,o)=>{Mn("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};lt.postMessage(l,us(u))})}else return ss(e,t,n,r,i,a)},qf=async e=>{if(sn())return kn(),new Promise((t,n)=>{Mn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};lt.postMessage(r)});os(e)}}),cs,Hf,jf,Mw=Z(()=>{gt(),Vf(),he(),Ri(),xu(),cs=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Hf=e=>{switch(e[3]){case"cpu":return new Le(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Le.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Hi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Le.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},jf=class{async fetchModelAndCopyToWasmMemory(e){return Lf(await Ki(e))}async loadModel(e,t){Nt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Ff(n,t),bt()}async dispose(){return Gf(this.sessionId)}async run(e,t,n){Nt();let r=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],g=p[1],m=this.inputNames.indexOf(h);if(m===-1)throw new Error(`invalid input '${h}'`);r.push(g),i.push(m)});let a=[],s=[];Object.entries(t).forEach(p=>{let h=p[0],g=p[1],m=this.outputNames.indexOf(h);if(m===-1)throw new Error(`invalid output '${h}'`);a.push(g),s.push(m)});let o=r.map((p,h)=>cs(p,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((p,h)=>p?cs(p,()=>`output "${this.outputNames[s[h]]}"`):null),l=await Wf(this.sessionId,i,o,s,u,n),d={};for(let p=0;p<l.length;p++)d[this.outputNames[s[p]]]=a[p]??Hf(l[p]);return bt(),d}startProfiling(){}endProfiling(){qf(this.sessionId)}}}),Kf={};Nn(Kf,{OnnxruntimeWebAssemblyBackend:()=>ps,initializeFlags:()=>ds,wasmBackend:()=>Yf});var ds,ps,Yf,kw=Z(()=>{gt(),Vf(),Mw(),ds=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?fy("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ps=class{async init(e){ds(),await Df(),await Uf(e)}async createInferenceSessionHandler(e,t){let n=new jf;return await n.loadModel(e,t),n}},Yf=new ps});gt(),gt(),gt();var Cw="1.27.0";{let e=(kw(),Yn(Kf)).wasmBackend;zn("webgpu",e,5),zn("webnn",e,5),zn("cpu",e,10),zn("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:Cw,enumerable:!0});/**
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
 */const Kr=new Map;function Xf(e,t){const n=Kr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Kr.set(e,n)}function at(e,t){const n=performance.now();try{return t()}finally{Xf(e,performance.now()-n)}}async function nt(e,t){const n=performance.now();try{return await t()}finally{Xf(e,performance.now()-n)}}function Aw(){return[...Kr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Rw(){Kr.clear()}const Ow=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Nw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),zw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function Qf(e){const t=Ow.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function Bw(e){const t=zw.exec(e);if(t===null)return Qf(e);const[,n,r,i,a]=t,s=Qf(a);if(n==="both")return s;const o=Nw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${o}${u} — ${s}`}function Pw(e,t,n,r){const i=t*n,a=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return a.set(e),a;for(let s=0;s<i;s+=1)a[s*4]=e[s*r],a[s*4+1]=e[s*r+1],a[s*4+2]=e[s*r+2],a[s*4+3]=255;return a}function st(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Ln(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Zf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Dw=114;function Uw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),s=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-s)/2),resizedWidth:a,resizedHeight:s}}function hs(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const p=(d+.5)*l-.5,h=Math.max(0,Math.min(i-1,Math.floor(p))),g=Math.min(i-1,h+1),m=Math.max(0,Math.min(1,p-h));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,_=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,_+1),T=Math.max(0,Math.min(1,w-_)),v=(h*r+_)*a,E=(h*r+x)*a,M=(g*r+_)*a,k=(g*r+x)*a,S=(d*t+y)*3;for(let A=0;A<3;A++){const z=s[v+A]*(1-T)+s[E+A]*T,Y=s[M+A]*(1-T)+s[k+A]*T;o[S+A]=Math.min(255,Math.max(0,Math.round(z*(1-m)+Y*m)))}}}return o}function Fn(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const p=d*l,h=Math.min((d+1)*l,i);for(let g=0;g<t;g++){const m=g*u,y=Math.min((g+1)*u,r);let w=0,_=0,x=0,T=0;for(let E=Math.floor(p);E<h;E++){const M=Math.min(E+1,h)-Math.max(E,p);if(!(M<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const A=S*M,z=(E*r+k)*a;w+=s[z]*A,_+=s[z+1]*A,x+=s[z+2]*A,T+=A}}const v=(d*t+g)*3;o[v]=Math.min(255,Math.max(0,st(w/T))),o[v+1]=Math.min(255,Math.max(0,st(_/T))),o[v+2]=Math.min(255,Math.max(0,st(x/T)))}}return o}function Jf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function dr(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n,d=h=>Math.max(0,Math.min(r-1,h)),p=h=>Math.max(0,Math.min(i-1,h));for(let h=0;h<n;h++){const g=(h+.5)*l-.5,m=Math.floor(g),y=Jf(g-m);for(let w=0;w<t;w++){const _=(w+.5)*u-.5,x=Math.floor(_),T=Jf(_-x),v=(h*t+w)*3;for(let E=0;E<3;E++){let M=0;for(let k=0;k<4;k++){const S=p(m-1+k)*r;let A=0;for(let z=0;z<4;z++)A+=T[z]*s[(S+d(x-1+z))*a+E];M+=y[k]*A}o[v+E]=Math.min(255,Math.max(0,Math.round(M)))}}}return o}function Yr(e,t,n=1){const r=Uw(e.width,e.height,t,n),i=hs(e,r.resizedWidth,r.resizedHeight),a=t*t,s=new Float32Array(3*a).fill(Dw/255);for(let o=0;o<r.resizedHeight;o++){const u=(o+r.padY)*t+r.padX,l=o*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const p=(l+d)*3,h=u+d;s[h]=i[p]/255,s[a+h]=i[p+1]/255,s[2*a+h]=i[p+2]/255}}return{tensor:s,params:r}}function Lw(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],d=e[s*6+3],p=e[s*6+4],h=e[s*6+5];if(p<n)continue;const g=Math.round(h);if(g<0||g>=r)continue;const m=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,_=(d-t.padY)/t.scale;i.push({classIndex:g,confidence:p,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(_-y)],boxFloat:[m,y,w-m,_-y]})}return i}const pr=.8,em=.65,Fw=110,Gw=1280;function Ww(e,t,n){if(n==null)return pr;if(n.length===0)return em;const r=Math.max(e,t);if(!(r>0))return pr;const i=Gw/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return pr;const s=a.length;return(s%2===1?a[(s-1)/2]:(a[s/2-1]+a[s/2])/2)>=Fw?em:pr}const tm=.25,nm=.6;function qw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),s=Math.trunc(Number(n[3]));if(![r,i,a,s].every(_=>Number.isFinite(_)))return null;const o=a-r,u=s-i;if(o<=0||u<=0)return null;const l=Math.trunc(o*(o>=u?tm:nm)),d=Math.trunc(u*(o>=u?nm:tm)),p=Math.max(0,r-l),h=Math.max(0,i-d),g=Math.min(Math.trunc(e),a+l),m=Math.min(Math.trunc(t),s+d),y=g-p,w=m-h;return y<=0||w<=0?null:{x:p,y:h,width:y,height:w}}const rm=3,Vw=.15,Hw=.6;function fs(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function im(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function jw(e,t,n){try{const r=Math.trunc(Number(n)),i=n!=null&&Number.isFinite(r)&&r!==0;if(!e||e.length<2)return null;const a=[Number(e[0][0]),Number(e[0][1])],s=[Number(e[1][0]),Number(e[1][1])];if(![...a,...s].every(E=>Number.isFinite(E)))return null;const o=fs(a,s);if(!(o>0))return null;const u=[];for(const E of t??[]){const M=Math.trunc(Number(E.n));if(!Number.isFinite(M)||M<rm)continue;const k=im(E.poly);k!==null&&u.push({owner:E.owner,c:k,n:M,d0:0,d1:0,ecart:0})}if(u.length<2)return null;u.sort((E,M)=>M.n-E.n);const l=u.slice(0,2);let d=!1;u.length>2&&l[1].n>0&&(d=u[2].n/l[1].n>Hw);for(const E of l)E.d0=fs(E.c,a),E.d1=fs(E.c,s),E.ecart=Math.abs(E.d0-E.d1);const p=[...l].sort((E,M)=>M.ecart-E.ecart),h=p[0],g=p[1],m=h.d0<h.d1?0:1,y=r>0?1:0,w=i?m===y?h:g:null,_=i?m===y?g:h:null,x=m===1?h.owner:g.owner,T=m===1?g.owner:h.owner,v=h.ecart/o<Vw;return{favoredOwner:(_==null?void 0:_.owner)??null,threatenedOwner:(w==null?void 0:w.owner)??null,ownerAtEnd0:T,ownerAtEnd1:x,distance:i?Math.abs(r):null,ambiguous:!!(v||d)}}catch{return null}}function Kw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}function Yw(e){try{const t=[];for(const u of e??[]){const l=Number(u==null?void 0:u.n);if(!Number.isFinite(l)||l<rm)continue;const d=im(u.poly);d!==null&&t.push({owner:u.owner,c:d,n:l})}if(t.length<2)return null;t.sort((u,l)=>l.n-u.n);const[n,r]=t;if(n.owner===r.owner)return null;const i=Math.abs(n.c[0]-r.c[0]);if(Math.abs(n.c[1]-r.c[1])>i){const[u,l]=n.c[1]<r.c[1]?[n,r]:[r,n];return{left:u.owner,right:l.owner}}const[s,o]=n.c[0]<r.c[0]?[n,r]:[r,n];return{left:s.owner,right:o.owner}}catch{return null}}const Xw=10.6;function Qw(e,t,n){if(!Number.isFinite(n)||n<=0)return null;const r=Number(e[0])-Number(t[0]),i=Number(e[1])-Number(t[1]),a=Math.hypot(r,i);return!Number.isFinite(a)||a<=0||a/n<Xw?null:[Number(e[0]),Number(e[1])]}const Zw=.6;function am(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,d=(e[a*6+3]-t.padY)/t.scale,p=st((o+l)/2),h=st((u+d)/2),g=st((l-o+(d-u))/4);g>=1&&r.push({cx:p,cy:h,r:g})}return r}function Jw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Zw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function eb(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Ln(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function sm(e,t,n){const r=am(e,t,n);return r.length===0?[]:eb(Jw(r))}function tb(e,t,n){return am(e,t,n)}function ms(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const nb=.5,rb=.7,ib=.55;function gs(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function om(e){if(e.length===0)return[];const t=(nb*gs(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,s=(i[1]+i[3])/2,o=n.find(u=>(u.cx-a)**2+(u.cy-s)**2<=t);if(o===void 0)n.push({cx:a,cy:s,boxes:[i]});else{o.boxes.push(i);const u=o.boxes.length;o.cx=(o.cx*(u-1)+a)/u,o.cy=(o.cy*(u-1)+s)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Ln(i.map(a=>a[0]))),Math.trunc(Ln(i.map(a=>a[1]))),Math.trunc(Ln(i.map(a=>a[2]))),Math.trunc(Ln(i.map(a=>a[3])))]);if(r.length>=2){const i=gs(r),a=r.map(()=>!0);for(let s=0;s<r.length;s++)if(a[s])for(let o=s+1;o<r.length;o++){if(!a[o])continue;const u=r[s],l=r[o],d=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),p=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),h=d*p,g=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(h>=rb*Math.min(g,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?o:s]=!1,!a[s])break}}r=r.filter((s,o)=>a[o])}if(r.length>=3){const i=gs(r);r=r.filter(([a,s,o,u])=>Math.min(o-a,u-s)>=ib*i)}return r}const ab=.7;function sb(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),a=Math.min(e[3],t[3]);if(i<=n||a<=r)return 0;const s=(i-n)*(a-r),o=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=o+u-s;return l>0?s/l:0}function um(e,t,n,r,i,a=ab){const s=t-4;if(s<=0||n<=0)return[];const o=[];for(let l=0;l<n;l+=1){let d=0,p=0;for(let h=0;h<s;h+=1){const g=e[(4+h)*n+l];g>d&&(d=g,p=h)}d<i||o.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:d,cls:p})}o.sort((l,d)=>d.score-l.score);const u=[];for(const l of o){let d=!1;for(const p of u)if(p.cls===l.cls&&sb(p.box,l.box)>a){d=!0;break}d||u.push(l)}return u.map(l=>l.box)}const lm=["brown","grey","blue","green","yellow","red","purple"],cm={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},ob=.7;function ys(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[s,o,u,l]=a.box;let d=!1;for(const p of r){const h=e[p];if(h.family===null||a.family===null||h.family!==a.family)continue;const[g,m,y,w]=h.box,_=Math.max(0,Math.min(s+u,g+y)-Math.max(s,g)),x=Math.max(0,Math.min(o+l,m+w)-Math.max(o,m)),T=Math.max(1,Math.min(u*l,y*w));if(_*x>=ob*T){d=!0;break}}d?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function Xr(e,t,n,r=lm.length){const i=r<=1,a=Lw(e,t,n,r).map(s=>{const o=i?null:lm[s.classIndex];return{color:o,family:o===null?null:cm[o],box:s.box,confidence:s.confidence}});return i?a:ys(a)}const ub=8,lb=.8,dm=1.25;function cb(e){if(e.length<ub)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*dm?t.push(s):u>o*dm&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<lb*e.length||i.length===0?[]:i.filter(s=>s.family!==null&&s.color!==null).map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const db=2.25,pm=8;function pb(e){if(e.length<pm)return[];const t=e.map(p=>[p.box[0]+p.box[2]/2,p.box[1]+p.box[3]/2]),n=e.map(p=>Math.hypot(p.box[2],p.box[3])).sort((p,h)=>p-h),r=db*n[Math.floor(n.length/2)],i=r*r,a=e.map((p,h)=>h),s=p=>{for(;a[p]!==p;)a[p]=a[a[p]],p=a[p];return p};for(let p=0;p<e.length;p++)for(let h=p+1;h<e.length;h++){const g=t[p][0]-t[h][0],m=t[p][1]-t[h][1];g*g+m*m<=i&&(a[s(p)]=s(h))}const o=new Map;for(let p=0;p<e.length;p++){const h=s(p);o.set(h,[...o.get(h)??[],p])}let u=[];for(const p of o.values())p.length>u.length&&(u=p);if(u.length<pm||u.length===e.length)return[];const l=new Set(u),d=e.map((p,h)=>h).filter(p=>!l.has(p));return d.filter(p=>e[p].family!==null&&e[p].color!==null).map(p=>({family:e[p].family,color:e[p].color,box:[...e[p].box],reason:`${e[p].color} banner sits in a detached group of ${d.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const Ye={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5,classes:7},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function Et(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const hb=.42,fb=22,mb=43,gb=120,yb=1.5,wb=.72,bb=110,hm=3;function hr(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*hb);if(l<1)return 0;let d=0;for(let p=0;p<i;p++)for(let h=0;h<r;h++){if((h-o)**2+(p-u)**2>l*l)continue;const g=(p*r+h)*a,m=s[g],y=s[g+1],w=s[g+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),d+=1)}return d}function _b(e){let t=0,n=0,r=0,i=hr(e,!1,(a,s,o)=>{const u=Et(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=hr(e,!0,(a,s,o)=>{const u=Et(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function $b(e){let t=0,n=0,r=hr(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=hr(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function xb(e){let t=0;const n=hr(e,!0,(r,i,a)=>{t+=Et(r,i,a).s});return n===0?null:t/n}function vb(e){const t=_b(e);if(t===null||t.s<=fb)return 1;if(t.s>=gb){const n=$b(e);return n!==null&&n>=yb?6:3}return t.s>=mb?3:6}function Sb(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function Tb(e,t){const n=[...t];if(e.length<hm||t.length!==e.length)return n;const r=e.map(s=>xb(s)),i=r.filter(s=>s!==null);if(i.length<hm)return n;const a=Ln(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<wb*a&&s<bb&&(n[o]=1)}),n}function fm(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),d=Math.max(0,u-s),p=new Uint8Array(l*d*3);for(let h=0;h<d;h++)for(let g=0;g<l;g++){const m=(h*l+g)*3;if((g+a-n)**2+(h+s-r)**2<=i*i){const w=((h+s)*e.width+(g+a))*e.channels;p[m]=e.data[w],p[m+1]=e.data[w+1],p[m+2]=e.data[w+2]}else p[m]=255,p[m+1]=255,p[m+2]=255}return{width:l,height:d,channels:3,data:p}}function Eb(e,t){const n=t.map(a=>fm(e,a)),r=n.map(a=>vb(a)),i=Sb(t,r);return Tb(n,i)}function Ib(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function mm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const d=l*i,p=Math.min((l+1)*i,e.width);let h=0,g=0;for(let m=Math.floor(o);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,o);if(!(y<=0))for(let w=Math.floor(d);w<p;w++){const _=Math.min(w+1,p)-Math.max(w,d);_<=0||(h+=e.data[m*e.width+w]*_*y,g+=_*y)}}r[s*t+l]=Math.min(255,Math.max(0,st(h/g)))}}return{width:t,height:n,data:r}}function Mb(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,st(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function kb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const d=s+l,p=a+u;if(!(d<0||d>=t||p<0||p>=n)&&r[p*t+d]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function Cb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const d=s+l,p=a+u;if(d>=0&&d<t&&p>=0&&p<n&&r[p*t+d]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function gm(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,d=0;s[d++]=u,i[u]=o;let p=0,h=0,g=0;for(;l<d;){const m=s[l++],y=m%t,w=m/t|0;p+=1,h+=y,g+=w;for(let _=-1;_<=1;_++)for(let x=-1;x<=1;x++){if(x===0&&_===0)continue;const T=y+x,v=w+_;if(T<0||T>=t||v<0||v>=n)continue;const E=v*t+T;r[E]>0&&i[E]===0&&(i[E]=o,s[d++]=E)}}a[o]={area:p,centroidX:h/p,centroidY:g/p},o+=1}return{labels:i,stats:a}}function Ab(e,t,n){return ym(Float32Array.from(e.data),e.width,t,n)}function ym(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let d=0;d<t;d++){const p=d-a,h=l-a,g=o*p-u*h+a,m=u*p+o*h+a,y=Math.floor(g),w=Math.floor(m),_=g-y,x=m-w,T=(M,k)=>M>=0&&M<t&&k>=0&&k<t?e[k*t+M]:r,v=T(y,w)*(1-_)+T(y+1,w)*_,E=T(y,w+1)*(1-_)+T(y+1,w+1)*_;i[l*t+d]=v*(1-x)+E*x}return i}const Rb=.9,Ob=.34,Nb=[.55,.6,.66,.72],zb=22,Bb=88,Pb=35,Gn=28,ws=4,Db=Array.from({length:15},(e,t)=>-21+t*3),wm=[-2,0,2],Ub=3,Lb=.3;function Fb(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Gb(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),d=Math.floor((u-s)/2),p=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let w=0;w<s;w++)l[(y+p)*u+(w+d)]=e.data[(y+r)*e.width+(w+t)];const h=Gn-2*ws,g=mm({width:u,height:u,data:l},h,h),m=new Float32Array(Gn*Gn);for(let y=0;y<h;y++)for(let w=0;w<h;w++)m[(y+ws)*Gn+(w+ws)]=g.data[y*h+w]>110?1:0;return m}function Wb(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Ob);if(u<4)return null;const l=s-u,d=o-u,p=2*u,h=2*u;if(p<6||h<6)return null;const g=new Int16Array(p*h),m=new Int16Array(p*h),y=new Int16Array(p*h),w=new Uint8Array(p*h),_=[],x=Math.min(p,h)/2;for(let L=0;L<p;L++)for(let P=0;P<h;P++){const R=((L+l)*n+(P+d))*i,{h:N,s:D,v:U}=Et(a[R],a[R+1],a[R+2]),j=L*h+P;g[j]=N,m[j]=D,y[j]=U,Math.sqrt((P-h/2)**2+(L-p/2)**2)/x<=t&&(w[j]=1,_.push(U))}if(_.length<16)return null;const T=Zf(_,55);let v=0,E=0,M=0;const k=L=>g[L]>=zb&&g[L]<=Bb&&m[L]>=Pb,S=L=>y[L]>=T&&m[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<p*h;L++)w[L]===1&&(M+=1,y[L]>=130&&!k(L)&&(v+=1),S(L)&&(E+=1));const A=v>.5*M&&E<.15*M,z=new Uint8Array(p*h);if(A){const L=Zf(_,45);for(let P=0;P<p*h;P++)z[P]=w[P]===1&&y[P]<=L?255:0}else for(let L=0;L<p*h;L++)z[L]=S(L)?255:0;const Y={width:h,height:p,data:z},F=kb(Y);let W=gm(F),O=W;if(W.stats.length<=1&&(W=gm(Y),O=W,W.stats.length<=1))return null;const q=Math.min(p,h)/2;let K=0,X=-1;for(let L=1;L<O.stats.length;L++){const P=O.stats[L];if(P===void 0)continue;const R=Math.hypot(P.centroidX-h/2,P.centroidY-p/2)/q,N=P.area*(1-.6*Math.min(R,1));N>X&&(X=N,K=L)}if(K===0)return null;const le=new Uint8Array(p*h);for(let L=0;L<p*h;L++)le[L]=O.labels[L]===K?255:0;return Gb(Cb({width:h,height:p,data:le}))}function qb(e,t,n,r,i,a){const s=Gn;let o=0,u=0;for(let l=0;l<s;l++){const d=l-a;if(!(d<0||d>=s))for(let p=0;p<s;p++){const h=p-i;if(h<0||h>=s)continue;const g=e[d*s+h];g!==0&&(u+=g,o+=g*n[l*s+p])}}return o/(u+r-o+1e-6)}function Vb(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Db){const a=i===0?e:ym(e,Gn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of wm)for(const u of wm){const l=qb(a,s,t,n,o,u);l>r&&(r=l)}}return r}function Hb(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of Nb){const o=Wb(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([Vb(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Lb)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,Ub))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}function Xt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let d=0;d<i;d++)for(let p=0;p<r;p++){let h,g;n===1?(h=i-1-d,g=p):n===2?(h=r-1-p,g=i-1-d):(h=d,g=r-1-p);const m=(d*r+p)*a,y=(g*o+h)*a;for(let w=0;w<a;w++)l[y+w]=s[m+w]}return{width:o,height:u,channels:a,data:l}}const jb=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,jb)*255));return e})();const Kb=5e3,Yb=.75,Xb=15,Qb=1.25,Zb=2.4,Jb=.003,e_=.85,t_=2600,n_=2,bs=.3,bm=.1,_m=.012,r_=22,$m=.5,xm=.12;function ft(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function i_(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,d]=e[u],[p,h]=e[(u+1)%4];r+=l*h-p*d}const i=Math.abs(r/2)/(t*n);if(i<Jb||i>e_)return!1;const a=e.map((u,l)=>{const d=e[(l+1)%4];return Math.hypot(d[0]-u[0],d[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=Qb&&o<=Zb}function a_(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function s_(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(bs*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(F=>[F[0],F[1],F[2]-s*(F[0]+F[1])+0]);for(let F=0;F<3;F++)l[F][2]=r[F][2]-s*r[F][0]-s*r[F][1];const d=ft(e,t),p=new e.Mat,h=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(d,p,h,new e.Size(o,u),e.WARP_INVERSE_MAP);const g=new e.Mat;e.cvtColor(p,g,e.COLOR_RGB2Lab),d.delete(),h.delete();const m=g.data,y=Math.max(4,Math.trunc(s/3)),w=[[],[],[]],_=(F,W)=>{const O=(W*o+F)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let F=0;F<u;F++)for(let W=0;W<o;W++)(F<y||F>=u-y||W<y||W>=o-y)&&_(W,F);const x=F=>{F.sort((O,q)=>O-q);const W=F.length>>1;return F.length%2?F[W]:(F[W-1]+F[W])/2},T=[x(w[0]),x(w[1]),x(w[2])],v=(F,W)=>{const O=(W*o+F)*3,q=m[O]-T[0],K=m[O+1]-T[1],X=m[O+2]-T[2];return Math.sqrt(q*q+K*K+X*X)>r_},E=Math.max(6,Math.trunc(bm*i)),M=Math.max(6,Math.trunc(bm*a)),k=Math.max(2,Math.trunc(_m*i)),S=Math.max(2,Math.trunc(_m*a)),A=F=>{let W=0,O=0;for(const q of F)O=q?O+1:0,O>W&&(W=O);return W/Math.max(1,F.length)},z=F=>{let W,O,q,K,X;if(F==="L"?(W=s,O=s+a,q=Math.max(0,s-k-E),K=Math.max(0,s-k),X=!1):F==="R"?(W=s,O=s+a,q=s+i+k,K=Math.min(o,s+i+k+E),X=!1):(W=Math.max(0,s-S-M),O=Math.max(0,s-S),q=s,K=s+i,X=!0),O<=W||K<=q)return 0;const le=[];if(X)for(let L=q;L<K;L++){let P=0;for(let R=W;R<O;R++)v(L,R)&&P++;le.push(P/(O-W)>$m)}else for(let L=W;L<O;L++){let P=0;for(let R=q;R<K;R++)v(R,L)&&P++;le.push(P/(K-q)>$m)}return A(le)},Y={L:z("L"),R:z("R"),T:z("T")};return p.delete(),g.delete(),Y}const o_=.5;function u_(e){return e!==null&&e.R>=xm?["R"]:[]}function vm(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=bs*a;if(!(s>0))return null;const o=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},d=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,_]=l[y],x=n[w],T=n[_];let v=-(T[1]-x[1]),E=T[0]-x[0];const M=(x[0]+T[0])/2,k=(x[1]+T[1])/2;v*(M-o)+E*(k-u)<0&&(v=-v,E=-E);const S=Math.hypot(v,E);S<=1e-6||(v=v/S*s,E=E/S*s,d.push([x[0]+v,x[1]+E],[T[0]+v,T[1]+E]))}const p=d.map(y=>y[0]),h=d.map(y=>y[1]),g=Math.round(Math.min(...p)),m=Math.round(Math.min(...h));return{x:g,y:m,width:Math.round(Math.max(...p))-g,height:Math.round(Math.max(...h))-m}}const l_=.88;function Sm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(bs*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*l_),d=o-l;if(d<1)return null;const p=ft(e,t),h=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),g=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(h,g),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-s*y[k*3]-s*y[k*3+1]]),_=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(p,x,_,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,d,u)),v=new e.Mat;T.copyTo(v);const E=v.data,M=new Uint8ClampedArray(d*u*3);M.set(E.subarray(0,M.length));for(const k of[p,h,g,m,_,x,T,v])try{k.delete()}catch{}return{width:d,height:u,channels:3,data:M}}function c_(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),d=Math.max(0,Math.trunc(i-u)),p=Math.min(n.width,Math.trunc(i+s+u)),h=Math.max(0,Math.trunc(a-l)),g=Math.min(n.height,Math.trunc(a+o+l));if(p-d<8||g-h<8)return null;const m=Math.max(n.width,n.height)<t_?n_:1,y=ft(e,n),w=ft(e,t),_=y.roi(new e.Rect(d,h,p-d,g-h)),x=new e.Mat;m!==1?e.resize(_,x,new e.Size(0,0),m,m,e.INTER_CUBIC):_.copyTo(x);const T=new e.Mat,v=new e.Mat;e.cvtColor(w,T,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const E=new e.ORB(Kb),M=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,A=new e.Mat,z=new e.Mat,Y=[y,w,_,x,T,v,M,k,S,A,z],F=te=>{for(const ne of Y)try{ne.delete()}catch{}try{E.delete()}catch{}return te};if(E.detectAndCompute(T,z,M,S),E.detectAndCompute(v,z,k,A),S.rows<8||A.rows<8)return F(null);const W=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;W.knnMatch(S,A,O,2);const q=[],K=[];for(let te=0;te<O.size();te++){const ne=O.get(te);if(ne.size()===2){const fe=ne.get(0),ve=ne.get(1);if(fe.distance<Yb*ve.distance){const ke=M.get(fe.queryIdx).pt,Re=k.get(fe.trainIdx).pt;q.push(ke.x,ke.y),K.push(Re.x,Re.y)}}}if(O.delete(),W.delete(),q.length/2<8)return F(null);const X=e.matFromArray(q.length/2,1,e.CV_32FC2,q),le=e.matFromArray(K.length/2,1,e.CV_32FC2,K),L=new e.Mat,P=e.findHomography(X,le,e.RANSAC,5,L);let R=0;for(let te=0;te<L.rows;te++)R+=L.data[te];const N=P.rows===3?[...P.data64F]:null;if(X.delete(),le.delete(),L.delete(),P.delete(),N===null||R<Xb)return F(null);const D=1/m,U=[[D,0,d],[0,D,h],[0,0,1]],j=[0,1,2].map(te=>[0,1,2].map(ne=>U[te][0]*N[ne]+U[te][1]*N[3+ne]+U[te][2]*N[6+ne]));return F({H:j,inliers:R})}const d_=620;function p_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function h_(e,t,n,r){const i=Tm(e,t,n,r);if(i!==null)return i;try{const[a,s,o,u]=r.map(E=>Math.trunc(E));if(Math.min(o,u)>=d_||o<=0||u<=0)return null;const l=Math.trunc(o*.25),d=Math.trunc(u*.25),p=Math.max(0,a-l),h=Math.max(0,s-d),g=Math.min(t.width,a+o+l),m=Math.min(t.height,s+u+d);if(g<=p||m<=h)return null;const y=ft(e,t),w=y.roi(new e.Rect(p,h,g-p,m-h)),_=new e.Mat;e.resize(w,_,new e.Size((g-p)*2,(m-h)*2),0,0,e.INTER_CUBIC);const x=p_(e,_);for(const E of[y,w,_])try{E.delete()}catch{}const T=[(a-p)*2,(s-h)*2,o*2,u*2],v=Tm(e,x,n,T);return v===null?null:{...v,footprint:v.footprint.map(([E,M])=>[E*.5+p,M*.5+h])}}catch{return null}}function Tm(e,t,n,r){const i=c_(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([_,x])=>a_(i.H,_,x));if(!i_(s,t.width,t.height))return null;const o=ft(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const d=ft(e,n),p=new e.Mat,h=new e.Mat;e.cvtColor(l,p,e.COLOR_RGB2GRAY),e.cvtColor(d,h,e.COLOR_RGB2GRAY);const g=new e.Mat;e.matchTemplate(p,h,g,e.TM_CCOEFF_NORMED);const m=g.data32F[0];for(const _ of[o,u,l,d,p,h,g])try{_.delete()}catch{}if(m<o_)return null;const y=s_(e,t,n,i.H);if(y===null)return null;const w=u_(y);return{built:Math.max(y.L,y.R,y.T)>=xm,footprint:s,overflow:w,edgeScores:y,inliers:i.inliers}}const f_=.3,m_=.3;function g_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=f_}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,d=Math.max(o,u,l)<m_;if(!r&&!d)return;t.some(([h,g])=>h>=a.zone.x0&&h<=a.zone.x1&&g>=a.zone.y0&&g<=a.zone.y1)||i.push(s)}),i}const Bt=128,Wn=.5,Em=.99,y_=.01;function w_(e,t){const n=t.length>0&&t.reduce((r,i)=>r+i,0)*2>t.length;return e!==null&&(e>=Em||e<=y_)?e>=Em:n}function _s(e){const t=Fn(e,Bt,Bt),n=Bt*Bt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Im(e){const t=e[1]??0;return{built:t>=Wn,prob:t}}const fr=120,mr=179,b_=1.3,__=3.6,$_=.45,x_=6e-4,v_=.02,S_=6e3,T_=.78,E_=1.25,I_=2.4,M_=.05,k_=1.5,C_=.5,A_=.9,R_=150,O_=18,N_=34,z_=90,B_=130,P_=.13,D_=.15,Qr="magistrates-guild",$s="merchants-guild";function U_(e,t){const n=ft(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[fr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[mr,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const d=new e.Mat,p=new e.Mat,h=new e.Mat,g=e.connectedComponentsWithStats(l,d,p,h,8);l.delete(),d.delete(),h.delete();const m=t.width*t.height,y=[];for(let w=1;w<g;w++){const _=p.intAt(w,0),x=p.intAt(w,1),T=p.intAt(w,2),v=p.intAt(w,3),E=p.intAt(w,4),M=E/m;M<x_||M>v_||E/Math.max(T*v,1)<$_||y.push({x:_,y:x,w:T,h:v})}return p.delete(),{blobs:y,mask:o,maskWidth:t.width}}function L_(e,t,n,r,i,a,s){const o=e,u=a,l=s,d=i;if(!d.gray){const D=ft(e,r);d.gray=new o.Mat,o.cvtColor(D,d.gray,o.COLOR_RGB2GRAY),D.delete(),d.k=new o.KeyPointVector,d.d=new o.Mat;const U=new o.Mat;u.detectAndCompute(d.gray,U,d.k,d.d),U.delete()}const p=n,h=new o.Mat,g=new o.KeyPointVector,m=new o.Mat;u.detectAndCompute(p,h,g,m),h.delete();const y=D=>(g.delete(),m.delete(),D);if(d.d.rows<8||m.rows<8)return y(null);const w=new o.DMatchVectorVector;l.knnMatch(d.d,m,w,2);const _=[],x=[];for(let D=0;D<w.size();D++){const U=w.get(D);if(U.size()===2){const j=U.get(0);if(j.distance<T_*U.get(1).distance){const te=d.k.get(j.queryIdx).pt,ne=g.get(j.trainIdx).pt;_.push(te.x,te.y),x.push(ne.x,ne.y)}}}if(w.delete(),_.length/2<8)return y(null);const T=o.matFromArray(_.length/2,1,o.CV_32FC2,_),v=o.matFromArray(x.length/2,1,o.CV_32FC2,x),E=new o.Mat,M=o.findHomography(T,v,o.RANSAC,5,E);if(T.delete(),v.delete(),E.delete(),M.rows!==3)return M.delete(),y(null);const k=[...M.data64F],S=(D,U)=>{const j=k[6]*D+k[7]*U+k[8];return[(k[0]*D+k[1]*U+k[2])/j,(k[3]*D+k[4]*U+k[5])/j]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,U])=>S(D,U));if(A.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return M.delete(),y(null);const z=A.map((D,U)=>{const j=A[(U+1)%4];return Math.hypot(j[0]-D[0],j[1]-D[1])}),Y=Math.min(...z);if(Y<1)return M.delete(),y(null);const F=Math.max(...z)/Y;let W=0;for(let D=0;D<4;D++){const[U,j]=A[D],[te,ne]=A[(D+1)%4];W+=U*ne-te*j}const O=t,q=Math.abs(W/2)/(O.rows*O.cols);if(F<E_||F>I_||q<M_||q>k_)return M.delete(),y(null);const K=new o.Mat;o.warpPerspective(O,K,M,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),M.delete();const X=new o.Mat;o.cvtColor(K,X,o.COLOR_RGB2GRAY),K.delete();const le=Math.trunc(r.height/2),L=X.roi(new o.Rect(0,0,r.width,le)),P=d.gray.roi(new o.Rect(0,0,r.width,le)),R=new o.Mat;o.matchTemplate(L,P,R,o.TM_CCOEFF_NORMED);const N=R.data32F[0];return L.delete(),P.delete(),R.delete(),X.delete(),y(N)}function F_(e,t,n){let r,i;if(n===Qr)r=$s,i=P_;else if(n===$s)r=Qr,i=D_;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let d=0,p=null;for(const[h,g]of[[0,l],[l,o]]){let m=0,y=0;for(let _=s;_<s+u;_++)for(let x=a+h;x<a+g;x++){const T=(_*e.width+x)*e.channels,{h:v,s:E,v:M}=Et(e.data[T],e.data[T+1],e.data[T+2]);if(v>=fr&&v<=mr&&E>=30&&E<=170&&M<=170)continue;m++,(r===$s?v>=O_&&v<=N_&&E>=z_&&M>=B_:v>=95&&v<=130&&E>=80)&&y++}if(m<20)continue;const w=y/m;w>d&&(d=w,p={x:a+h,y:s,w:g-h,h:u})}return d>=i&&p!==null?{id:r,box:p}:null}const G_=1.7,W_=140,q_=170,V_=.2,H_=.1,Mm=240,km=80,Cm=60,j_=50,Am="scientists-guild",Rm="tacticians-guild",Zr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function K_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let v=0;v<s;v++){let E=0;for(let M=0;M<a;M++)e[(i+v)*t+r+M]>0&&E++;o[v]=E/a}const u=[];for(let v=0;v<s;v++)o[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],d=u[u.length-1],p=d-l;if(p<5)return[];const h=a/p;if(h<b_||h>__)return[];if(h>=G_)return[{x:r,y:i+l,w:a,h:p}];const g=new Float32Array(s),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const E=Math.exp(-(v*v)/(2*m*m));y.push(E),w+=E}for(let v=0;v<s;v++){let E=0;for(let M=-4;M<=4;M++){const k=Math.min(s-1,Math.max(0,v+M));E+=o[k]*y[M+4]}g[v]=E/w}const _=l+Math.trunc(p*.3),x=l+Math.trunc(p*.78);let T=l+Math.trunc(p/2);if(x>_){let v=1/0;for(let E=_;E<x;E++)g[E]<v&&(v=g[E],T=E)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:d-T}]}function Y_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let d=0;d<s;d++){const p=((r+l)*e.width+n+d)*e.channels,h=(l*s+d)*3;u[h]=e.data[p],u[h+1]=e.data[p+1],u[h+2]=e.data[p+2]}return{width:s,height:o,channels:3,data:u}}function X_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=Et(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=W_&&s<=q_&&n++)}return t===0?0:n/t}function Q_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=Et(e.data[i],e.data[i+1],e.data[i+2]);!(a>=fr&&a<=mr)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function Om(e,t){const n=ft(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Mm,km),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Mm,height:km,channels:3,data:i}}function Z_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Nm(e,t){const n=Z_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:_,v:x}=Et(n.data[y],n.data[y+1],n.data[y+2]);!(w>=fr&&w<=mr&&_>=30&&_<=170&&x<=170)&&x>=40&&(i[m]=1,a++)}const s=a<20,o=ft(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let d=0,p=0,h=0,g=0;for(let m=0;m<r;m++)!s&&i[m]===0||(d+=l[m*3]*100/255,p+=l[m*3+1]-128,h+=l[m*3+2]-128,g++);return u.delete(),g===0?[0,0,0]:[d/g,p/g,h/g]}function J_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h:d,s:p,v:h}=Et(e.data[l],e.data[l+1],e.data[l+2]);d>=fr&&d<=mr&&p>=30&&p<=170&&h<=170||(t++,p>=70&&h>=50&&(d>=95&&d<=130?n++:d>=35&&d<=92?r++:d<=10?i++:d>=15&&d<=34&&h>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function e1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=Et(e.data[i],e.data[i+1],e.data[i+2]);s>=Cm&&o>=j_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<Cm&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function t1(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function zm(e,t){const n=ft(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function n1(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=Om(e,a);n.set(i,zm(e,s)),Zr.includes(i)&&r.set(i,Nm(e,s))}return{gray:n,warmLab:r}}function r1(e,t,n){const r=Om(e,t),i=J_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Qr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Am;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Rm;const a=e1(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=Qr;else if(o==="green")u=Am;else if(o==="red")u=Rm;else{const l=zm(e,r);let d="",p=-2;for(const h of Zr){const g=n.gray.get(h);if(g===void 0)continue;const m=t1(l,g);m>p&&(p=m,d=h)}u=d||Zr[0]}if(Zr.includes(u)&&n.warmLab.size>0){const l=Nm(e,r);let d=u,p=1/0;for(const[h,g]of n.warmLab){const m=Math.hypot(l[0]-g[0],l[1]-g[1],l[2]-g[2]);m<p&&(p=m,d=h)}return d}return u}function i1(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=U_(e,t);if(s.length===0||n.size===0)return a;const l=e,d=new l.ORB(S_),p=new l.BFMatcher(l.NORM_HAMMING),h=new Map;for(const w of n.keys())h.set(w,{});const g=ft(e,t);let m=null;try{for(const w of s){if(r!==void 0&&Date.now()>r)break;const _=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),T=Math.max(R_,Math.trunc(A_*Math.max(w.w,w.h))),v=Math.max(0,_-T),E=Math.max(0,x-T),M=Math.min(t.width,_+T),k=Math.min(t.height,x+T);if(M-v<16||k-E<16)continue;const S=g.roi(new l.Rect(v,E,M-v,k-E)),A=new l.Mat;l.cvtColor(S,A,l.COLOR_RGB2GRAY);let z=null,Y=-2;for(const[q,K]of n){if(r!==void 0&&Date.now()>r)break;const X=L_(e,S,A,K,h.get(q),d,p);X!==null&&X>Y&&(Y=X,z=q)}S.delete(),A.delete();const F=new Set;if(z!==null&&Y>=C_){a.push({id:z,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),F.add(z);const q=F_(t,w,z);q&&(a.push({id:q.id,boundingBox:{x:q.box.x,y:q.box.y,width:q.box.w,height:q.box.h},confidence:.9}),F.add(q.id))}if(i===void 0||i.size===0)continue;const W=K_(o,u,w);if(W.length!==2)continue;const O=W.map(q=>Y_(t,q));if(!O.some(q=>q.width*q.height===0||Q_(q)<H_))for(let q=0;q<W.length;q++){const K=O[q];if(X_(K)<V_)continue;m===null&&(m=n1(e,i));const X=r1(e,K,m);if(X&&!F.has(X)){F.add(X);const le=W[q];a.push({id:X,boundingBox:{x:le.x,y:le.y,width:le.w,height:le.h},confidence:1})}}}}finally{g.delete();for(const w of h.values()){const _=w;for(const x of["gray","k","d"])try{(y=_[x])==null||y.delete()}catch{}}try{d.delete(),p.delete()}catch{}}return a}const Bm=128,a1=.56,s1=15,o1=.58,u1=70,l1=50,c1=.12,d1=.2,p1=.1,h1=.17,Pm=.15;function f1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Dm(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),d=Math.max(0,o-u),p=Math.min(n,s+u),h=Math.min(r,o+u),g=p-l,m=h-d,y=new Uint8Array(g*m*i);for(let w=0;w<m;w++){const _=((w+d)*n+l)*i;y.set(a.subarray(_,_+g*i),w*g*i)}return{width:g,height:m,channels:i,data:y}}function m1(e){const t=Dm(e,a1),n=Ib(t),r=mm(n,Bm,Bm);return Mb(r)}function g1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,d=t[u]-i;a+=l*d,s+=l*l,o+=d*d}return a/(Math.sqrt(s*o)+1e-6)}function y1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Dm(e,o1),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let h=0;h<r*i;h++){const g=h*a,{h:m,s:y,v:w}=Et(s[g],s[g+1],s[g+2]);y>=u1&&w>=l1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const d=u/o,p=l/o;return d>=c1&&t.set("masonry",Pm*Math.min(1,d/d1)),p>=p1&&t.set("strategy",Pm*Math.min(1,p/h1)),t}function w1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=m1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=s1)a.push(Ab(n,l,i));const s=new Map;for(const[l,d]of t){let p=-1/0;for(const h of a){const g=g1(h,d);g>p&&(p=g)}s.set(l,p)}for(const[l,d]of y1(e))d>0&&s.has(l)&&s.set(l,s.get(l)+d);let o="",u=-1/0;for(const[l,d]of s)d>u&&(o=l,u=d);return[o,u]}const on=224,b1=512,_1=[.485,.456,.406],$1=[.229,.224,.225];function x1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function v1(e){const t=hs(e,on,on),n=on*on,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-_1[a])/$1[a];return r}function S1(e){const t=3*on*on,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(v1(Xt(e,r)),r*t);return n}function T1(e,t=b1){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function E1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const qn=96,I1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],M1=.45;function k1(e){const t=hs(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function C1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=M1?I1[t]??"":"",prob:n}}const Qt=128,A1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],R1=.5;let Um=null;function O1(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Um=e}function Lm(){return Um??R1}let Fm=null;function N1(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Fm=[...e]}function z1(){return Fm??A1}const Gm="__inverse";function B1(e){return e.endsWith(Gm)?[e.slice(0,-Gm.length),!0]:[e,!1]}function P1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n*3);for(let s=0;s<t*n;s++)for(let o=0;o<3;o++)a[s*3+o]=i[s*r+o];return a}function D1(e){const t=Math.min(Qt/e.width,Qt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?P1(e):t<1?Fn(e,n,r):dr(e,n,r),a=Qt*Qt,s=new Float32Array(3*a);s.fill(114/255);const o=Math.floor((Qt-r)/2),u=Math.floor((Qt-n)/2);for(let l=0;l<r;l++)for(let d=0;d<n;d++){const p=(l*n+d)*3,h=(l+o)*Qt+(d+u);for(let g=0;g<3;g++)s[g*a+h]=i[p+g]/255}return s}async function U1(e,t){const{index:n,prob:r}=L1(await t(D1(e))),[i,a]=B1(z1()[n]??"");return r<Lm()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:a}}function L1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const Pt=96,F1=[1,2,3,4,5,6,7],Wm=.8,G1=.99;function W1(e){const t=dr(e,e.width*2,e.height*2),n=e.width*2<Pt&&e.height*2<Pt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?dr(r,Pt,Pt):Fn(r,Pt,Pt),a=Pt*Pt,s=new Float32Array(3*a);for(let o=0;o<a;o++)for(let u=0;u<3;u++)s[u*a+o]=i[o*3+u]/255;return s}function q1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:F1[t],prob:e[t]}}const un=128,qm=.35,V1=["fp","laurel"],H1=.85,Vn=40;function j1(e){const r=(e.width<un&&e.height<un?dr:Fn)(e,un,un),i=un*un,a=new Float32Array(3*i);for(let s=0;s<i;s++)for(let o=0;o<3;o++)a[o*i+s]=r[s*3+o]/255;return a}function K1(e){return e[V1.indexOf("fp")]}const ln=128,Y1=.15,Jr=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],xs=7,Vm=.9;function X1(e,t,n){const[r,i,a,s]=e.map(Number);if(!(a>1)||!(s>1))return null;const o=r+a/2,u=i+s/2,l=Math.max(a,s)*(1+2*Y1),d=Math.max(0,st(o-l/2)),p=Math.max(0,st(u-l/2)),h=Math.min(t,st(o+l/2)),g=Math.min(n,st(u+l/2));return h-d<8||g-p<8?null:{x:d,y:p,w:h-d,h:g-p}}function Q1(e){const r=(e.width<ln&&e.height<ln?dr:Fn)(e,ln,ln),i=ln*ln,a=new Float32Array(3*i);for(let s=0;s<i;s++)for(let o=0;o<3;o++)a[o*i+s]=r[s*3+o]/255;return a}function Z1(e){let t=0;for(let a=1;a<Jr.length;a++)e[a]>e[t]&&(t=a);const n=e[t],r=t>=xs;let i=0;for(let a=1;a<xs;a++)e[a]>e[i]&&(i=a);return{className:Jr[t],probability:n,rejected:r&&n>=Vm,bestColour:Jr[i]}}function J1(e,t){const n=e.color,r={...e,classColor:t.className,classColorProba:Math.round(t.probability*1e4)/1e4};if(n==null||t.className===n)return r;const a=Jr.indexOf(t.className)<xs?`le classifieur préfère ${t.className} (P=${t.probability.toFixed(3)}) là où le détecteur lit ${n}`:`le classifieur penche pour ${t.className} (P=${t.probability.toFixed(3)}, sous le seuil de rejet de ${Vm.toFixed(2)}) là où le détecteur lit ${n}`;return e.suspect?r:{...r,suspect:!0,suspectReason:a}}const ei=3,e2=2.2,t2=.3,n2=.65,r2=3,i2=1.3,a2=.77;function Hm(e,t,n){const[r,i,a,s]=e,o=[];return r<=ei&&o.push("gauche"),i<=ei&&o.push("haut"),r+a>=t-ei&&o.push("droit"),i+s>=n-ei&&o.push("bas"),o}function jm(e){const t=e[3]/Math.max(e[2],1);return t>=i2?"portrait":t<=a2?"paysage":null}function vs(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function s2(e,t,n){for(const[r,i,a,s]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(s-i)/Math.max(n,1))>n2)return!0;return!1}function o2(e,t,n,r,i){try{const a=[...e],s=a.filter(w=>Hm(w.box,r,i).length>0);if(s.length===0)return{kept:a,dropped:[],suspects:[]};const o=a.filter(w=>!s.includes(w)),u=w=>({kept:o,dropped:s.map(_=>({banner:_,edgeReason:w})),suspects:[]});if(s2(n,r,i))return u("photo-piste");if(o.length<r2)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:s.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(s.length>(o.length+s.length)/3)return u("debordement-structurel");const l=vs(o.map(w=>w.box[2]*w.box[3])),d=vs(o.map(w=>w.box[2])),p=vs(o.map(w=>w.box[3])),h=new Set(o.map(w=>jm(w.box)).filter(w=>w!==null)),g=[...o],m=[],y=[];for(const w of s){const _=Hm(w.box,r,i),[,,x,T]=w.box,v=l>0?x*T/l:0,E=[];(_.includes("gauche")||_.includes("droit"))&&E.push(d>0?x/d:1),(_.includes("haut")||_.includes("bas"))&&E.push(p>0?T/p:1);const M=E.length>0?Math.min(...E):1,k=jm(w.box);v>e2?m.push({banner:w,edgeReason:"bord-grosse"}):M<t2?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&h.size>0&&!h.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(g.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:g,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const u2=1,l2=1.5;function c2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function d2(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],s=Math.hypot(i,a);if(s<=0)return null;const o=((e-n[0])*i+(t-n[1])*a)/(s*s);return[Math.abs((e-n[0])*a-(t-n[1])*i)/s,Math.abs(o-.5)*s]}function p2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function h2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,s,o]=t,u=i+s/2,l=a+o/2;let d=null;for(const[h,g]of c2(e)){const m=d2(u,l,h,g);m!==null&&(d===null||m[0]<d[0])&&(d=m)}if(d===null)return null;const p=p2(e);return p===null?null:{distBord:d[0]/r,decalLat:d[1]/r,perpendiculaire:p!==s>o}}catch{return null}}function f2(e,t,n,r=u2,i=l2){const a=[];for(const[s,o]of t??[]){const u=h2(e,o,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,s]))}return a.length===0?null:(a.sort((s,o)=>s[0]-o[0]||s[1]-o[1]),a[0][1])}const yt=64,Km=.5,m2=[.67,1.24];function Ym(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),s=Math.min(e.width,t+r),o=Math.min(e.height,n+r),u=s-i,l=o-a;if(u<=0||l<=0)return null;const d=e.channels,p=new Uint8ClampedArray(u*l*3),h=r*r;for(let w=0;w<l;w++){const _=a+w,x=_-n;for(let T=0;T<u;T++){const v=i+T,E=v-t,M=(w*u+T)*3;if(E*E+x*x<=h){const k=(_*e.width+v)*d;p[M]=e.data[k],p[M+1]=e.data[k+1],p[M+2]=e.data[k+2]}else p[M]=255,p[M+1]=255,p[M+2]=255}}const g=Fn({width:u,height:l,channels:3,data:p},yt,yt),m=yt*yt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let _=0;_<3;_++)y[_*m+w]=g[w*3+_]/255;return y}function g2(e){return e[1]}const ti=[1,3,6],y2=.5;function w2(e){if(e.length!==ti.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ti[t],prob:e[t]}}function b2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ti.includes(i.denomination)&&i.prob>=y2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const _2=2.25,ni=3,$2=1.15,x2=.5,v2=2.5,S2=.75,T2=2.25,E2=1.3,I2=.77;function ri(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function M2(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),t.length<=2)return t;const n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Xm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[(a+1)%i];if(o>t!=l>t){const d=(u-s)*(t-o)/(l-o)+s;e<d&&(r=!r)}}return r}function k2(e,t,n){if(n.length>=3&&Xm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[i>1?(a+1)%i:a],d=u-s,p=l-o,h=d*d+p*p,g=h===0?0:Math.max(0,Math.min(1,((e-s)*d+(t-o)*p)/h));r=Math.min(r,Math.hypot(e-(s+g*d),t-(o+g*p)))}return r}function C2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function A2(e,t,n){const[r,i]=e,a=t[0]-r,s=t[1]-i;if(a===0&&s===0)return!1;const[o,u,l,d]=n;let p=0,h=1;const g=[[-a,r-o],[a,l-r],[-s,i-u],[s,d-i]];for(const[m,y]of g){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?p=Math.max(p,w):h=Math.min(h,w),p>h)return!1}return p>=h?!1:p>=.1&&h<=.95||h-p>=.15}const Ss=e=>e.box[3]/Math.max(1,e.box[2]),Zt=e=>Ss(e)>$2,Hn=e=>Ss(e)>=E2||Ss(e)<=I2;function Ts(e){const[t,n,r,i]=e.box;if(r>=i){const s=7*i;return[t,n-s,r,i+2*s]}const a=7*r;return[t-a,n,r+2*a,i]}function Qm(e,t,n,r,i){const a=new Set(t),s=[...e.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:a.has(R)?"card":"tucked",src:["banner",R]})),...n.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:"wonder",src:["wonder",R]}))],o=e.map(()=>"player"),u=n.map(()=>"player");if(s.length===0)return{bannerOwner:o,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=s.map(P=>[P.box[0]+P.box[2]/2,P.box[1]+P.box[3]/2]);let d=s.filter(P=>P.kind!=="wonder").map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R);d.length===0&&(d=s.map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R));const p=d[Math.floor(d.length/2)],h=(_2*p)**2,g=s.map((P,R)=>R),m=P=>{let R=P;for(;g[R]!==R;)g[R]=g[g[R]],R=g[R];return R},y=s.map((P,R)=>P.kind==="card"?R:-1).filter(P=>P>=0),w=s.map((P,R)=>P.kind!=="card"?R:-1).filter(P=>P>=0);for(let P=0;P<y.length;P+=1)for(let R=P+1;R<y.length;R+=1){const N=y[P],D=y[R],U=s[N],j=s[D];if(Hn(U)&&Hn(j)&&Zt(U)!==Zt(j))continue;const te=l[N][0]-l[D][0],ne=l[N][1]-l[D][1],fe=te*te+ne*ne;let ve=fe<=h;!ve&&Hn(U)&&Hn(j)&&Zt(U)===Zt(j)&&fe<=(4*p)**2&&(ve=ri(Ts(U),Ts(j))<=.5*p),ve&&(g[m(N)]=m(D))}for(let P=0;P<w.length;P+=1)for(let R=P+1;R<w.length;R+=1){const N=w[P],D=w[R];ri(s[N].box,s[D].box)<=S2*p&&(g[m(N)]=m(D))}const _=new Map;for(const P of w){const R=m(P);_.set(R,[..._.get(R)??[],P])}const x=new Map;for(const P of y){const R=m(P);x.set(R,[...x.get(R)??[],P])}for(const P of _.values()){const R=P.filter(j=>s[j].kind==="wonder"&&Hn(s[j])).map(j=>Zt(s[j])),N=R.length>0?R.filter(Boolean).length*2>R.length:null,D=[];for(const[j,te]of x){let ne=Number.POSITIVE_INFINITY;for(const ke of P)for(const Re of te)ne=Math.min(ne,ri(s[ke].box,s[Re].box));if(ne>T2*p)continue;const ve=te.filter(ke=>Zt(s[ke])).length/te.length>=.5;N!==null&&ve!==N||D.push([j,ne,ve])}if(D.length===0)continue;const U=new Set(D.map(j=>j[2]));if(D.length>=2&&U.size===1&&N!==null){const j=D[0][0];for(const[te]of D.slice(1))g[m(te)]=m(j);g[m(P[0])]=m(j)}else{const j=D.reduce((te,ne)=>ne[1]<te[1]?ne:te);g[m(P[0])]=m(j[0])}}let T=new Map;for(let P=0;P<s.length;P+=1){const R=m(P);T.set(R,[...T.get(R)??[],P])}const v=s.map((P,R)=>P.kind==="wonder"?R:-1).filter(P=>P>=0);if(v.length>0){const P=(N,D)=>{const[U,j,te,ne]=Ts(s[N]),[fe,ve,ke,Re]=s[D].box,ie=Math.max(0,Math.min(U+te,fe+ke)-Math.max(U,fe)),ee=Math.max(0,Math.min(j+ne,ve+Re)-Math.max(j,ve));return ie*ee>=.9*s[N].box[2]*s[N].box[3]},R=new Map;for(let N=0;N<s.length;N+=1)if(!(s[N].kind!=="card"||!Hn(s[N])))for(const D of v){const U=ri(s[N].box,s[D].box);if(U<=.8*p&&Zt(s[N])!==Zt(s[D])&&P(N,D)){const j=R.get(D);(!j||U<j[1])&&R.set(D,[N,U])}}for(const[N,[D]]of R){const U=m(N);for(const[j,te]of T){const ne=te.indexOf(D);if(ne>=0&&j!==U){te.splice(ne,1),T.set(U,[...T.get(U)??[],D]),s[D].kind="tucked";break}}}T=new Map([...T].filter(([,N])=>N.length>0))}const E=P=>P.filter(R=>s[R].kind==="card").length,M=P=>{const R=P.filter(N=>s[N].kind==="card"||s[N].kind==="wonder");return R.length===0?null:R.filter(N=>Zt(s[N])).length/R.length},k=P=>[P.reduce((R,N)=>R+l[N][0],0)/P.length,P.reduce((R,N)=>R+l[N][1],0)/P.length],S=[i[0]/2,i[1]/2],A=[...T.values()].sort((P,R)=>{const N=E(P),D=E(R);if(N!==D)return D-N;const U=Math.hypot(k(P)[0]-S[0],k(P)[1]-S[1]),j=Math.hypot(k(R)[0]-S[0],k(R)[1]-S[1]);return U-j}),z=k(A[0]),Y=M(A[0]),F=A.map((P,R)=>{if(R===0||E(P)<ni)return"player";const N=M(P),D=N!==null&&Y!==null&&Math.abs(N-Y)>=x2,U=k(P),j=r.some(te=>A2(z,U,te));return D||j?"opponent":"player"});if(!F.includes("opponent")){const P=N=>N.reduce((D,U)=>D+(s[U].kind==="wonder"?1:0),0);let R=F.map((N,D)=>D).filter(N=>N>0&&(E(A[N])>=ni||P(A[N])>=2));if(R.reduce((N,D)=>N+P(A[D]),0)<1&&(R=[]),R.length>0&&(E(A[0])<2*ni||R.reduce((N,D)=>N+E(A[D]),0)<2*ni)&&(R=[]),R.length>0){const N=new Map(R.map(j=>[j,k(A[j])])),D=(j,te)=>(j[0]-te[0])**2+(j[1]-te[1])**2;if(R.every((j,te)=>R.slice(te+1).every(ne=>D(N.get(j),N.get(ne))<Math.min(D(N.get(j),z),D(N.get(ne),z)))))for(const j of R)F[j]="opponent"}}const W=[],O=[];let q=!1;A.forEach((P,R)=>{const N=F[R];N==="opponent"&&(q=!0);const D=[],U=[];for(const j of P){const[te,ne,fe,ve]=s[j].box;D.push([te,ne],[te+fe,ne],[te,ne+ve],[te+fe,ne+ve]),U.push(s[j].box);const[ke,Re]=s[j].src;ke==="banner"?o[Re]=N:u[Re]=N}W.push([N,M2(D)]),O.push([N,U])});const K=(P,R,N)=>Math.min(...O[N][1].map(D=>C2(P,R,D))),X=(P,R)=>W.map(([,N],D)=>N.length>=3&&Xm(P,R,N)?D:-1).filter(N=>N>=0),le=(P,R)=>{if(W.length===0)return"player";const N=p>0?v2*p:Number.POSITIVE_INFINITY,D=X(P,R);if(D.length>0){const te=D.reduce((ne,fe)=>K(P,R,fe)<K(P,R,ne)?fe:ne);return W[te][0]}let U=-1,j=Number.POSITIVE_INFINITY;return W.forEach(([,te],ne)=>{const fe=k2(P,R,te);fe<j&&(U=ne,j=fe)}),U>=0&&j<=N?W[U][0]:"none"},L=(P,R)=>{if(W.length===0)return"none";const N=X(P,R);if(N.length===0)return"none";const D=N.reduce((U,j)=>K(P,R,j)<K(P,R,U)?j:U);return W[D][0]};return{bannerOwner:o,wonderOwner:u,opponentFound:q,hulls:W,hullBoxCounts:O.map(([,P])=>P.length),pointOwner:le,pointInside:L}}const R2=3;function O2(e,t=R2){const n=e.length,r=Array.from({length:n},(s,o)=>o),i=s=>{for(;r[s]!==s;)r[s]=r[r[s]],s=r[s];return s};for(let s=0;s<n;s+=1)for(let o=s+1;o<n;o+=1){const u=e[s],l=e[o],d=Number(u.center[0]),p=Number(u.center[1]),h=Number(l.center[0]),g=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![d,p,h,g,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(d-h,p-g)<=t*(m+y)&&(r[i(s)]=i(o))}const a=new Map;for(let s=0;s<n;s+=1){const o=i(s);a.has(o)||a.set(o,[]),a.get(o).push(s)}return[...a.values()]}function N2(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),s=Number(n[3]),o=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,s)-t,0,t-Math.max(i,s));return Math.hypot(o,u)}function Es(e,t,n,r){const i=new Set(e.filter(s=>t.pointOwner(Number(s.center[0]),Number(s.center[1]))===n));if(i.size===0)return[];const a=[];for(const s of O2(e)){const o=s.map(y=>e[y]),u=o.filter(y=>i.has(y));if(u.length===0)continue;let l=0,d=0,p=0;for(const y of o){const w=Number(y.center[0]),_=Number(y.center[1]);d+=w,p+=_,t.pointInside(w,_)===n&&(l+=1)}const h=d/o.length,g=p/o.length,m=r&&r.length>0?Math.min(...r.map(y=>N2(h,g,y))):0;a.push({cle:[...s].sort((y,w)=>y-w).join(","),membres:o,miens:u,inside:l,dPiste:m,centre:[h,g],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return a}function z2(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let a=0;a<4;a+=1){if(i[a]>r[a])return n;if(i[a]<r[a])return t}return t})}function B2(e,t,n,r){const[i,a]=e.centre,s={};for(const d of["player","opponent"]){const p=Es(t,n,d,r).filter(h=>h.cle!==e.cle);s[d]=p.length===0?1/0:Math.min(...p.map(h=>Math.hypot(i-h.centre[0],a-h.centre[1])))}if(s.player!==s.opponent)return s.player>s.opponent?"player":"opponent";const o=d=>{const p=Es(t,n,d,r).find(h=>h.cle===e.cle);return p?[p.inside,p.dPiste,p.valeur]:[-1,-1,-1]},u=o("player"),l=o("opponent");for(let d=0;d<3;d+=1){if(u[d]>l[d])return"player";if(u[d]<l[d])return"opponent"}return"player"}function P2(e,t,n){const r={player:[],opponent:[]},i={};for(const s of["player","opponent"]){const o=Es(e,t,s,n);o.length>0&&(i[s]=z2(o))}const a=Object.keys(i);if(a.length===0)return r;if(a.length===2&&i.player.cle===i.opponent.cle){const s=B2(i.player,e,t,n);return r[s]=i[s].membres,r}for(const s of a)r[s]=i[s].membres;return r}function D2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{return P2(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const U2=1280,L2=80,F2=3,G2=3,W2=.3,q2=2.4,V2=1,H2=5.2,j2=5;function Is(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function K2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=W2&&r/n<=q2&&i/n>=V2&&i/n<=H2&&i/r<=j2}function Y2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*U2/r<L2}function X2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(o=>o[0]),a=r.poly.map(o=>o[1]),s=Math.max(1,i.length);return{hull:r,cx:i.reduce((o,u)=>o+u,0)/s,cy:a.reduce((o,u)=>o+u,0)/s,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),s=Number(r[2]),o=Number(r[3]);if(![i,a,s,o].every(Number.isFinite))continue;const u=i+s/2,l=a+o/2;let d=n[0],p=1/0;for(const h of n){const g=(u-h.cx)**2+(l-h.cy)**2;g<p&&(p=g,d=h)}d.extra.push([i,a],[i+s,a+o])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Q2(e,t,n,r,i=[]){const a=Is(n);if(!Y2(e,t,a))return[];const s=r.filter(l=>l.n>=G2&&l.poly.length>0).slice().sort((l,d)=>d.n-l.n).slice(0,2),o=Math.round(a*F2),u=[];for(const l of X2(s,i)){const d=l.poly.map(w=>w[0]),p=l.poly.map(w=>w[1]);if(d.length===0)continue;const h=Math.max(0,Math.trunc(Math.min(...d))-o),g=Math.max(0,Math.trunc(Math.min(...p))-o),m=Math.min(e,Math.trunc(Math.max(...d))+o),y=Math.min(t,Math.trunc(Math.max(...p))+o);m>h&&y>g&&u.push([h,g,m,y])}return u}function Z2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,s]=[e[0],e[1],e[2],e[3]];return K2(a,s,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(s)]:null}const J2=1.1,e$=3.2,t$=20,n$=.5,r$=1280,i$=.18,Zm=28,a$=.3;function s$(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let s=0;s<30;s++){const o=e.filter(d=>d<=r),u=e.filter(d=>d>r);if(o.length===0||u.length===0)return[e.map((d,p)=>p)];const l=(o.reduce((d,p)=>d+p,0)/o.length+u.reduce((d,p)=>d+p,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((s,o)=>(s<=r?i:a).push(o)),[i,a]}function o$(e,t,n=J2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),s=e.map(l=>l[1]+l[3]/2),o=Math.max(...a)-Math.min(...a)>Math.max(...s)-Math.min(...s)?a:s,u=[];for(const l of s$(o)){if(l.length===0)continue;const d=l.map(A=>e[A]),p=d.map(A=>Math.min(A[2],A[3])).sort((A,z)=>A-z),h=p[Math.trunc(p.length/2)],g=e$*h,m=Math.max(0,Math.min(...d.map(A=>A[0]))-g),y=Math.max(0,Math.min(...d.map(A=>A[1]))-g),w=Math.min(r,Math.max(...d.map(A=>A[0]+A[2]))+g),_=Math.min(i,Math.max(...d.map(A=>A[1]+A[3]))+g),x=Math.max(w-m,_-y);if(x<=0)continue;const T=n$*h*r$/x,v=T>0?Math.max(1,Math.ceil(t$/T)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(_)]);continue}const E=w-m>=_-y,k=(E?w-m:_-y)/v,S=k*(1+i$);for(let A=0;A<v;A++){let z=(E?m:y)+A*k-(S-k)/2;z=Math.max(E?m:y,z);const Y=Math.min(E?w:_,z+S);u.push(E?[Math.trunc(z),Math.trunc(y),Math.trunc(Y),Math.trunc(_)]:[Math.trunc(m),Math.trunc(z),Math.trunc(w),Math.trunc(Y)])}}return u.filter(([l,d,p,h])=>Math.max(r,i)/Math.max(1,Math.max(p-l,h-d))>=n)}function u$(e,t,n,r=Zm){const[i,a]=n,s=e;for(const[o,u,l,d]of t){const p=(o+l)/2+i,h=(u+d)/2+a;s.some(([m,y,w,_])=>{const x=p-(m+w)/2,T=h-(y+_)/2;return Math.hypot(x,T)<=r})||s.push([o+i,u+a,l+i,d+a])}return s}async function l$(e,t,n=Zm){const r=[];for(let i=0;i<e.length;i++){const a=e[i],s=[];for(const o of a.boxes)await t(o,i)||s.push([o[0],o[1],o[2],o[3]]);u$(r,s,a.offset,n)}return r}function c$(e,t,n,r=a$){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function d$(e,t,n){return n.some(([r,i,a,s])=>r<=e&&e<=a&&i<=t&&t<=s)}function p$(e,t,n,r){return n.length===0?!1:d$(e,t,n)&&!c$(e,t,r)}const Jm=4,eg=8,ii=5,Cn="base-game rule";function Dt(e,t){return{code:e,message:t,severity:"warning"}}function Ms(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function h$(e,t=""){const n=e.filter(s=>!!s),r=t||"a player",i=[];n.length>Jm&&i.push(Dt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Jm} (${Cn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=Ms(n);return a.length>0&&i.push(Dt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${Cn}), so one of the two readings is wrong.`)),i}function f$(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(s=>!!s))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>eg&&t.push(Dt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${eg} are in play (${Cn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,s]=n[i];for(let o=i+1;o<n.length;o++){const[u,l]=n[o],d=[...s].filter(p=>l.has(p)).sort();d.length>0&&t.push(Dt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${d.join(", ")} — the city split misread one of them.`))}}return t}function m$(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(s=>!!s));r.length>ii&&n.push(Dt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ii} are in play (${Cn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Ms(r);if(i.length>0&&n.push(Dt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Cn}).`)),t!==null){const a=t.filter(Boolean),s=r.length+a.length;s!==ii&&n.push(Dt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${s}, but exactly ${ii} are in play (${Cn}) — one is missing or one was counted twice.`));const o=new Set(a),u=[...new Set(r.filter(l=>o.has(l)))].sort();u.length>0&&n.push(Dt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function g$(e,t=""){const n=t||"a player",r=[],i=e.filter(s=>!s).length;i>0&&r.push(Dt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=Ms(e.filter(s=>!!s));return a.length>0&&r.push(Dt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${Cn}).`)),r}const y$=.25,w$=.45;function b$(e,t,n,r,i){const a=Math.cos(i),s=Math.sin(i),o=[n/2*a,n/2*s],u=[-r/2*s,r/2*a],d=[...[[e+o[0]+u[0],t+o[1]+u[1]],[e+o[0]-u[0],t+o[1]-u[1]],[e-o[0]-u[0],t-o[1]-u[1]],[e-o[0]+u[0],t-o[1]+u[1]]]].reverse();return[d[1],d[2],d[3],d[0]]}function ks(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function tg(e,t){const n=ks(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function _$(e,t,n){const r=ks(e,t),i=ks(e,n),a=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,a,!0))}finally{r.delete(),i.delete(),a.delete()}}function $$(e,t,n=w$){const r=[...t].sort((a,s)=>s.confidence-a.confidence),i=[];for(const a of r){let s=!1;for(const o of i){const u=_$(e,a.quad,o.quad);if(u<=0)continue;const l=tg(e,a.quad)+tg(e,o.quad)-u;if(u/Math.max(1e-6,l)>=n){s=!0;break}}s||i.push(a)}return i}function x$(e,t,n,r,i=y$){const a=[];for(let s=0;s<n;s++){const o=t[4*n+s];if(o<i)continue;const l=b$(t[s],t[n+s],t[2*n+s],t[3*n+s],t[5*n+s]).map(d=>[(d[0]-r.padX)/r.scale,(d[1]-r.padY)/r.scale]);a.push({quad:l,confidence:o})}return $$(e,a)}const v$=128,S$=88;function T$(e,t,n,r=v$,i=S$){const a=new e.Mat(t.height,t.width,e.CV_8UC3),s=a.data,o=t.channels;for(let h=0,g=t.width*t.height;h<g;h++)s[h*3]=t.data[h*o],s[h*3+1]=t.data[h*o+1],s[h*3+2]=t.data[h*o+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(h=>[h[0],h[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),d=e.getPerspectiveTransform(u,l),p=new e.Mat;try{return e.warpPerspective(a,p,d,new e.Size(r,i)),{data:new Uint8Array(p.data),width:r,height:i,channels:3}}finally{a.delete(),u.delete(),l.delete(),d.delete(),p.delete()}}function E$(e){return[e[2],e[3],e[0],e[1]]}const I$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],M$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],k$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],C$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],A$=[...M$,...k$,...C$,...I$];Object.fromEntries(A$.map(e=>[e.id,e]));const R$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const ng=.2,O$=.3,rg=.25,Cs={total:0,idDiff:0,verdictDiff:0},Ut={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},ai={total:0,memeK:0,memeKInverse:0,detail:[]};function N$(e,t,n){for(const r of e){let i=!1;for(let a=0,s=r.length-1;a<r.length;s=a++){const o=r[a],u=r[s];o[1]>n!=u[1]>n&&t<(u[0]-o[0])*(n-o[1])/(u[1]-o[1])+o[0]&&(i=!i)}if(i)return r.map(a=>[a[0],a[1]])}return null}function z$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=rg)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const d=o[2]/o[3];if(!(Math.abs(Math.log(d))<=rg)&&r>1==d>1)return!0}return!1}async function B$(e,t,n,r,i=[0,1,2,3]){const[a,s,o,u]=t;if(o<=0||u<=0)return null;const l=Math.round(o*ng),d=Math.round(u*ng),p=Math.max(0,Math.round(a-l)),h=Math.max(0,Math.round(s-d)),g=Math.min(e.width,Math.round(a+o+l)),m=Math.min(e.height,Math.round(s+u+d)),y=g-p,w=m-h;if(y<=0||w<=0)return null;const _=e.channels,x=new Uint8ClampedArray(y*w*_);for(let E=0;E<w;E++){const M=((h+E)*e.width+p)*_;x.set(e.data.subarray(M,M+y*_),E*y*_)}const T={width:y,height:w,channels:_,data:x};let v=null;for(const E of i){const M=E===0?T:Xt(T,E),k=M.width,S=k-Math.floor(O$*k),A=k-S;if(A<=0)continue;const z=new Uint8ClampedArray(A*M.height*M.channels);for(let q=0;q<M.height;q++){const K=(q*k+S)*M.channels;z.set(M.data.subarray(K,K+A*M.channels),q*A*M.channels)}const Y={width:A,height:M.height,channels:M.channels,data:z},F=_s(Y),O=(await n.run({[n.inputNames[0]]:new Le("float32",F,[1,3,Bt,Bt])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=O),v=v===null?O:Math.max(v,O)}return v}async function P$(e,t,n,r,i,a,s=[],o){var w;const u=async _=>(await r.run({[r.inputNames[0]]:new Le("float32",_,[1,3,Qt,Qt])}))[r.outputNames[0]].data,l=e.obbQuads===void 0?null:await nt("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(_){return console.warn("[wonders-obb] détection échouée, repli ORB :",_),null}});o!==void 0&&(o.n=l===null?0:l.length);const d=l===null?[]:l.map(_=>{const x=_.map(([M])=>M),T=_.map(([,M])=>M),v=Math.min(...x),E=Math.min(...T);return[Math.round(v),Math.round(E),Math.round(Math.max(...x)-v),Math.round(Math.max(...T)-E)]}),p=s.length===0?d:d.filter(([_,x,T,v])=>{const E=_+T/2,M=x+v/2;return!s.some(k=>{const S=k.x+k.width/2,A=k.y+k.height/2,z=.5*Math.min(k.width,k.height);return(E-S)**2+(M-A)**2<z*z})}),h=new Map;for(const _ of p){const[x,T,v,E]=_;if(v<=0||E<=0)continue;const M=l===null?null:N$(l,x+v/2,T+E/2);if(M===null||e.redresserQuad===void 0)continue;let k=M;const S=at("identify: redressement du quad",()=>e.redresserQuad(n,k)),A=Lm(),{id:z,prob:Y,inverse:F}=await nt("classifieur merveille (1 lecture)",()=>U1(S,u));if(z===""||Y<A)continue;F&&(k=E$(k).map(O=>[O[0],O[1]]));const W=h.get(z);(W===void 0||Y>W.prob)&&h.set(z,{prob:Y,box:_,quad:k})}const g=[],m=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[_,{prob:x,box:T,quad:v}]of h){const[E,M,k,S]=T;let A={x:Math.round(E),y:Math.round(M),width:Math.round(k),height:Math.round(S)},z=null,Y=[],F=null;if(v!==null){z=v;const N=z.map(te=>te[0]),D=z.map(te=>te[1]),U=Math.max(0,Math.round(Math.min(...N))),j=Math.max(0,Math.round(Math.min(...D)));if(A={x:U,y:j,width:Math.min(n.width,Math.round(Math.max(...N)))-U,height:Math.min(n.height,Math.round(Math.max(...D)))-j},m!==null)try{const te=await e.wonderRef(_),ne=z,fe=te===null||ne===null?null:at("identify: bande droite #63",()=>Sm(t,n,te,ne));if(fe!==null){const ve=at("identify: preprocess tuck",()=>_s(fe)),ke=await m.run({[m.inputNames[0]]:new Le("float32",ve,[1,3,Bt,Bt])});F=Im(ke[m.outputNames[0]].data).prob,Y=F>=Wn?["R"]:[]}}catch{}}else if(Date.now()<i)try{const N=await nt("chargement refs merveilles",()=>e.wonderRef(_));if(N!==null){const D=at("ORB registration (merveille)",()=>h_(t,n,N,T));if(D!==null){z=D.footprint,Y=D.overflow;const U=z.map(fe=>fe[0]),j=z.map(fe=>fe[1]),te=Math.max(0,Math.round(Math.min(...U))),ne=Math.max(0,Math.round(Math.min(...j)));if(A={x:te,y:ne,width:Math.min(n.width,Math.round(Math.max(...U)))-te,height:Math.min(n.height,Math.round(Math.max(...j)))-ne},m!==null)try{const fe=z,ve=fe===null?null:at("identify: bande droite #63",()=>Sm(t,n,N,fe));if(ve!==null){const ke=at("identify: preprocess tuck",()=>_s(ve)),Re=await m.run({[m.inputNames[0]]:new Le("float32",ke,[1,3,Bt,Bt])});F=Im(Re[m.outputNames[0]].data).prob}}catch{}}}}catch(N){console.warn(`[wonders-cls] ${_} registration failed:`,N)}const W=z!==null?vm(z,Y):null,O=v!==null&&z!==null?vm(z,["R"]):null,q=[];if(F!==null&&q.push(F>=Wn?1:0),y!==null)try{let N=[0,1,2,3];if(v!==null){const j=v[1][1]-v[0][1],te=v[1][0]-v[0][0],ne=(Math.round(Math.atan2(j,te)*180/Math.PI/90)%4+4)%4;N=[(0+ne)%4,(2+ne)%4]}const D=[0,0,0,0],U=await nt("identify: sonde marges (#68)",()=>B$(n,T,y,D,N));if(U!==null&&(q.push(U>=Wn?1:0),v!==null)){const j=v[1][1]-v[0][1],te=v[1][0]-v[0][0],ne=(Math.round(Math.atan2(j,te)*180/Math.PI/90)%4+4)%4,fe=Math.max(D[(0+ne)%4],D[(2+ne)%4]);Ut.total+=1;const ve=U>=Wn?1:0,ke=fe>=Wn?1:0;ve===1&&(Ut.positifs4+=1),ke===1&&(Ut.positifs2+=1),ve!==ke&&(Ut.divergent+=1,Ut.detail.push(`${_.slice(0,12)}:v4=${ve}/v2=${ke} p=[${D.map(Re=>Re.toFixed(2)).join(",")}]kQ${ne}`))}}catch{}const K=O??W??A,X=a.some(N=>{const D=N.box[0]+N.box[2]/2,U=N.box[1]+N.box[3]/2;return D>=K.x&&D<=K.x+K.width&&U>=K.y&&U<=K.y+K.height});q.push(X?1:0);let le=w_(F,q);le&&z$(K,A,a)&&(le=!1);const L=W??(le&&O!==null?O:null),P={id:_,name:((w=R$[_])==null?void 0:w.name)??_,builtWithCardUnderneath:le,boundingBox:A,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},R=L??A;g.push({obj:P,edgeScores:null,zone:{x0:R.x,y0:R.y,x1:R.x+R.width,y1:R.y+R.height},quad:z,region:L})}return g}function D$(e,t,n){if(t===n)return e;const r=`${t}: `;return e.message.startsWith(r)?{...e,message:`${n}: ${e.message.slice(r.length)}`}:e}const et="/7wd-scorer/models/",As=[];let It=null;function U$(){As.length=0,It=null}function L$(e){const t=performance.now();It!==null&&As.push({nom:It.nom,ms:Math.round(t-It.debut)}),It={nom:e,debut:t}}function ig(){const e=[...As];It!==null&&e.push({nom:`${It.nom} (en cours)`,ms:Math.round(performance.now()-It.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function ag(){const e={};for(const t of Object.keys(Ye))e[Ye[t].onnx]=oi.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ct)e[t]=n;return e}function F$(){var e,t;return Rs(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let sg=!1;const si=new Map;function Rs(){var e;sg||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,sg=!0)}const oi=new Set;let Os=0;function og(e){return Os+=1,e.finally(()=>{Os-=1})}function G$(){return Os>0}function W$(e){Rs();let t=si.get(e);return t===void 0&&(t=og(nt(`session: 1er chargement ${Ye[e].onnx}`,()=>Er.create(`${et}${Ye[e].onnx}`,{executionProviders:oi.has(e)?["wasm"]:["webgpu","wasm"]}))),si.set(e,t),t.catch(()=>si.delete(e))),t}const ct=new Map;let gr=0,yr=0;const ui=new Map;function Ns(e){const t=(It==null?void 0:It.nom)??"(hors etage)";ui.set(t,(ui.get(t)??0)+e)}function q$(){return[...ui.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let zs=0;function V$(){return{ms:Math.round(gr),appels:yr,preparationMs:Math.round(zs)}}function H$(){gr=0,yr=0,zs=0,Rw(),ui.clear(),kx()}const ug=new Set(["coin_yolo.onnx","token_yolo.onnx"]),Bs=new Set;let Ps=null;async function j$(e){if(Ps)return await Ps.catch(()=>{}),e();const t=e();return Ps=t.catch(()=>{}),t}async function Ds(e,t){return j$(()=>Er.create(`${et}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function mt(e){return og(nt(`session: 1er chargement ${e}`,()=>K$(e)))}async function K$(e){Rs();const t=!ug.has(e)&&!Bs.has(e);let n=null;if(t)try{n=await Ds(e,!0),ct.set(e,"webgpu")}catch(s){Bs.add(e),ct.set(e,`wasm (webgpu refuse a la creation: ${String(s).slice(0,60)})`)}else ct.set(e,ug.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Ds(e,!1)}catch(s){return ct.set(e,`ECHEC wasm: ${String(s).slice(0,160)}`),null}let r=n,i=ct.get(e)==="webgpu";const a=async(s,...o)=>{const u=performance.now();try{const l=await r.run(s,...o),d=performance.now()-u;return gr+=d,Ns(d),yr+=1,l}catch(l){if(!i)throw l;Bs.add(e),ct.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Ds(e,!1);const d=await r.run(s,...o),p=performance.now()-u;return gr+=p,Ns(p),yr+=1,d}};return new Proxy(r,{get(s,o,u){if(o==="run")return a;const l=Reflect.get(r,o,u);return typeof l=="function"?l.bind(r):l}})}let Us=null,Ls=null;const Y$=.65,X$=3e4;let Fs=null;function Gs(){return Fs===null&&(Fs=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Fs}const lg=new Map;function Ws(e){let t=lg.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${et}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),lg.set(e,t)),t}function Q$(e){return Ws(`wonder-refs/${e}.jpg`)}const cg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Z$(){const e=new Map;for(const t of cg){const n=await Ws(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function J$(){const e=new Map;for(const t of cg){const n=await Ws(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}function dg(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(p,h)=>i===1?[h,r-1-p]:i===2?[n-1-p,r-1-h]:[n-1-h,p],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(p=>p[0]),u=s.map(p=>p[1]),l=Math.min(...o),d=Math.min(...u);return{x:l,y:d,width:Math.max(...o)-l,height:Math.max(...u)-d}}function ex(){return Ls===null&&(Ls=fetch(`${et}laurel_gallery.json`).then(async e=>e.ok?Fb(await e.json()):[]).catch(()=>[])),Ls}function tx(e,t,n,r){return at("crop",()=>nx(e,t,n,r))}function nx(e,t,n,r){return cn(e,t-r,n-r,2*r,2*r)}function cn(e,t,n,r,i){return at("crop",()=>rx(e,t,n,r,i))}function rx(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),d=Math.max(0,u-s),p=new Uint8Array(l*d*3);for(let h=0;h<d;h++)for(let g=0;g<l;g++){const m=((h+s)*e.width+(g+a))*e.channels,y=(h*l+g)*3;p[y]=e.data[m],p[y+1]=e.data[m+1],p[y+2]=e.data[m+2]}return{width:l,height:d,channels:3,data:p}}function ix(){return Us===null&&(Us=fetch(`${et}token_templates.json`).then(async e=>e.ok?f1(await e.json()):new Map).catch(()=>new Map)),Us}let qs=null;function Vs(){return qs===null&&(qs=(async()=>{try{const e=await fetch(`${et}token_embed_index.json`);if(!e.ok)return null;const t=x1(await e.json()),n=await mt("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),qs}const ax=.92;let Hs=null;function js(){return Hs===null&&(Hs=(async()=>{try{return(await fetch(`${et}guild_classifier.onnx`,{method:"HEAD"})).ok?await mt("guild_classifier.onnx"):null}catch{return null}})()),Hs}let Ks=null;function Ys(){return Ks===null&&(Ks=(async()=>{try{return(await fetch(`${et}laurel_digit.onnx`,{method:"HEAD"})).ok?await mt("laurel_digit.onnx"):null}catch{return null}})()),Ks}let Xs=null,Qs=null;function Zs(){return Qs===null&&(Qs=(async()=>{try{return(await fetch(`${et}banner_class.onnx`,{method:"HEAD"})).ok?await mt("banner_class.onnx"):null}catch{return null}})()),Qs}const sx=.7;function ox(e,t){const[n,r,i,a]=e,[s,o,u,l]=t;if(i<=0||a<=0||u<=0||l<=0)return!1;const d=Math.max(0,Math.min(n+i,s+u)-Math.max(n,s)),p=Math.max(0,Math.min(r+a,o+l)-Math.max(r,o));return d*p>=sx*Math.max(1,Math.min(i*a,u*l))}async function pg(e,t,n){if(t.length===0)return t;const r=await Zs();if(r===null)return t;const i=[];for(const a of t)try{const s=X1(a.box,e.width,e.height);if(s===null){i.push(a);continue}const o=cn(e,s.x,s.y,s.w,s.h),u=Q1(o),l=await r.run({[r.inputNames[0]]:new Le("float32",u,[1,3,ln,ln])}),d=Z1(l[r.outputNames[0]].data);if(d.rejected)n==null||n.push({box:a.box,className:d.className});else{const p=a;if(p.color===null||p.color===void 0){const h=d.bestColour;i.push({...p,color:h,family:cm[h]})}else i.push(J1(p,d))}}catch{i.push(a)}return i}function Js(){return Xs===null&&(Xs=(async()=>{try{return(await fetch(`${et}laurel_filter.onnx`,{method:"HEAD"})).ok?await mt("laurel_filter.onnx"):null}catch{return null}})()),Xs}async function ux(e,t,n){let[r,i,a,s]=t,o=a-r,u=s-i;if(o<=0||u<=0)return null;if(o<Vn){const w=Math.floor((r+a)/2);r=w-Math.floor(Vn/2),a=w+Math.floor(Vn/2),o=a-r}if(u<Vn){const w=Math.floor((i+s)/2);i=w-Math.floor(Vn/2),s=w+Math.floor(Vn/2),u=s-i}const l=Math.trunc(qm*o),d=Math.trunc(qm*u),p=Math.max(0,r-l),h=Math.max(0,i-d),g=Math.min(e.width,a+l),m=Math.min(e.height,s+d),y=cn(e,p,h,g-p,m-h);if(y.width<=0||y.height<=0)return null;try{const w=j1(y),_=await n.run({[n.inputNames[0]]:new Le("float32",w,[1,3,un,un])});return K1(_[n.outputNames[0]].data)}catch{return null}}let eo=null;function to(){return eo===null&&(eo=(async()=>{try{return(await fetch(`${et}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await mt("coin_filter_cnn.onnx"):null}catch{return null}})()),eo}let no=null;function ro(){return no===null&&(no=(async()=>{try{return(await fetch(`${et}coin_denom.onnx`,{method:"HEAD"})).ok?await mt("coin_denom.onnx"):null}catch{return null}})()),no}async function lx(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Ym(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*yt*yt);r.forEach((u,l)=>i.set(u,l*u.length));const s=(await n.run({[n.inputNames[0]]:new Le("float32",i,[t.length,3,yt,yt])}))[n.outputNames[0]].data,o=ti.length;return t.map((u,l)=>w2(s.subarray(l*o,l*o+o)))}catch{return null}}async function cx(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let g=0;g<t.length;g++){const m=Ym(e,Math.round(t[g].cx),Math.round(t[g].cy),Math.round(u[g]));if(m===null)return null;l.push(m)}const d=new Float32Array(t.length*3*yt*yt);l.forEach((g,m)=>d.set(g,m*g.length));const h=(await n.run({[n.inputNames[0]]:new Le("float32",d,[t.length,3,yt,yt])}))[n.outputNames[0]].data;return t.map((g,m)=>g2(h.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),s=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,o=Math.trunc(s);if(o>=8){const u=await r(t.map(()=>o));if(u!==null)return i.map((l,d)=>Math.max(l,u[d]))}return i}catch{return null}}let io=null;function ao(){return io===null&&(io=(async()=>{try{return(await fetch(`${et}tuck_classifier.onnx`,{method:"HEAD"})).ok?await mt("tuck_classifier.onnx"):null}catch{return null}})()),io}const hg=.1;let so=null;function li(){return so===null&&(so=(async()=>{try{return(await fetch(`${et}track_band_brut.onnx`,{method:"HEAD"})).ok?await mt("track_band_brut.onnx"):null}catch{return null}})()),so}async function fg(e,t,n){try{const r=Yr(t,1280,Ww(t.width,t.height,n)),a=(await e.run({[e.inputNames[0]]:new Le("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return um(a.data,a.dims[1]??0,a.dims[2]??0,r.params,hg)}catch{return[]}}let oo=null;const dx=.4;function px(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function hx(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||px(a,u)>=dx)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function uo(){return oo===null&&(oo=(async()=>{try{return(await fetch(`${et}tuck_box.onnx`,{method:"HEAD"})).ok?await mt("tuck_box.onnx"):null}catch{return null}})()),oo}let lo=null;function co(){return lo===null&&(lo=(async()=>{try{return(await fetch(`${et}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await fx(),await mt("wonder_classifier.onnx")):null}catch{return null}})()),lo}let mg=!1;async function fx(){if(mg)return;const e=await(await fetch(`${et}wonder_classifier_seuil.json`)).json();O1(Number(e.seuil)),N1(e.classes),mg=!0}let gg=null,yg=null;async function mx(e){var p;gg??(gg=mt("wonder_obb.onnx"));const t=await gg;if(t===null)return null;const n=await Gs();if(n===null)return null;yg=n;const{tensor:r,params:i}=Yr(e,1024),s=(await t.run({[t.inputNames[0]]:new Le("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],o=s.dims[s.dims.length-1],u=s.data;let l=0;for(let h=0;h<o;h++){const g=u[4*o+h];g>l&&(l=g)}const d=x$(n,u,o,i);return ct.set("wonder_obb.onnx",`${ct.get("wonder_obb.onnx")??"?"} | dims=${s.dims} scoreMax=${l.toFixed(4)} dets=${d.length} q0=${(p=d[0])!=null&&p.quad[0]?JSON.stringify(d[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),d.map(h=>h.quad.map(g=>[g[0],g[1]]))}const gx={wonderRef:Q$,tuckClassifier:ao,tuckBoxClassifier:uo,obbQuads:mx,redresserQuad:(e,t)=>T$(yg,e,t)};async function yx(e,t){const n=await Vs();if(n!==null)try{const r=S1(e),i=new Le("float32",r,[4,3,on,on]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=E1(n.index,T1(s));return u<ax?["",-1]:[o,u]}catch{}return w1(e,t)}const wg=new WeakMap;async function ci(e){const t=wg.get(e);if(t!==void 0)return await t;const n=nt("decodage image",()=>wx(e));return wg.set(e,n),await n}async function wx(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",a=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${a}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const bg=new WeakMap;async function Lt(e,t){let n=bg.get(t);n===void 0&&(n=new Map,bg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=bx(e,t);return n.set(e,i),await i}async function bx(e,t){const n=Ye[e],r=performance.now(),{tensor:i,params:a}=Yr(t,n.input);zs+=performance.now()-r;const s=async()=>{const o=await W$(e),u={[o.inputNames[0]]:new Le("float32",i,[1,3,n.input,n.input])},l=performance.now(),d=await o.run(u),p=performance.now()-l;gr+=p,Ns(p),yr+=1;const h=d[o.outputNames[0]];return{rows:new Float32Array(h.data),params:a}};try{return await s()}catch(o){if(oi.has(e))throw o;return oi.add(e),si.delete(e),await s()}}const _x=6,$x=4,xx=5,vx=2;async function Sx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await ci(e),r=await Lt("banner",n),i=Xr(r.rows,r.params,Ye.banner.conf,Ye.banner.classes);if(t.banners=i.length,i.length>=_x)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Lt("laurel",n),s=ms(a.rows,a.params,Ye.laurel.conf);if(t.laurels=s.length,s.length>=$x)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Lt("coin",n),u=sm(o.rows,o.params,Ye.coin.conf);return t.coins=u.length,u.length>=xx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=vx?{...t,kind:"board",confidence:.4}:t}function Tx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function _g(e,t,n,r,i,a,s,o){let u=0;r(`${i}: card banners…`,.04);const l=await Lt("banner",e),d=Xr(l.rows,l.params,Ye.banner.conf,Ye.banner.classes),p=[],h=await pg(e,d,p),g=p.filter(ie=>ie.className==="objet_hors_jeu").map(ie=>ie.box);let m=ys(h).filter(ie=>ie.color!==null&&ie.family!==null);r(`${i}: progress tokens…`,.08);let y=[];const w=await li();w!==null&&(y=await fg(w,e,m)),y.length>0&&m.length>0&&(m=m.filter(ie=>{const ee=ie.box[0]+ie.box[2]/2,J=ie.box[1]+ie.box[3]/2;return!y.some(([be,We,Fe,Se])=>Math.min(be,Fe)<=ee&&ee<=Math.max(be,Fe)&&Math.min(We,Se)<=J&&J<=Math.max(We,Se))}));const _=await Lt("token",e),x=await ix(),T=[],v=[];for(const ie of tb(_.rows,_.params,Ye.token.conf)){if(v.push({cx:ie.cx,cy:ie.cy,r:ie.r}),y.some(([be,We,Fe,Se])=>ie.cx>=be&&ie.cx<=Fe&&ie.cy>=We&&ie.cy<=Se))continue;const[ee,J]=await yx(fm(e,ie),x);ee===""&&J<0?v.pop():ee===""?u+=1:!T.some(be=>be.id===ee)&&!o.some(be=>be.id===ee)&&T.push({id:ee,center:[ie.cx,ie.cy],radius:ie.r,confidence:Math.round(J*1e4)/1e4})}r(`${i}: coins…`,.14);const E=await Lt("coin",e),M=sm(E.rows,E.params,Ye.coin.conf).filter(ie=>!v.some(ee=>(ie.cx-ee.cx)**2+(ie.cy-ee.cy)**2<=ie.r*ie.r)),k=await to(),S=k!==null?await cx(e,M,k):null,A=(S!==null?M.filter((ie,ee)=>S[ee]>=Km).map(ie=>ie.r):[]).sort((ie,ee)=>ie-ee),z=A.length>0?A.length%2===1?A[(A.length-1)/2]:(A[A.length/2-1]+A[A.length/2])/2:null,[Y,F]=m2,W=M.map((ie,ee)=>{const J=S!==null?S[ee]:null;return J===null||J>=Km?"keep":z!==null&&z>0&&ie.r/z>=Y&&ie.r/z<=F?"suspect":"drop"}),O=M.filter((ie,ee)=>W[ee]==="keep"),q=Eb(e,O),K=await ro(),X=K!==null?await lx(e,O,K):null,le=b2(q,X??q.map(()=>null));le.map(ie=>ie.value);const L=[];let P=0;if(M.forEach((ie,ee)=>{if(W[ee]==="drop")return;if(W[ee]==="suspect"){const be=S[ee];L.push({denomination:null,center:[ie.cx,ie.cy],radius:ie.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${be.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const J=le[P++];L.push({denomination:J.value,center:[ie.cx,ie.cy],radius:ie.r,denomSource:J.source??"colour"})}),M.length>0&&L.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${M.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),L.length>=2){const ie=L.map(J=>J.radius).sort((J,be)=>J-be),ee=ie.length%2===1?ie[(ie.length-1)/2]:(ie[ie.length/2-1]+ie[ie.length/2])/2;if(ee>0)for(const J of L)J.radius/ee>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/ee).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(L.length>=2)for(let ie=0;ie<L.length;ie+=1)for(let ee=ie+1;ee<L.length;ee+=1){const J=L[ie],be=L[ee],We=Math.hypot(J.center[0]-be.center[0],J.center[1]-be.center[1]);if(We<1.1*Math.min(J.radius,be.radius))for(const Fe of[J,be])Fe.suspect||(Fe.suspect=!0,Fe.suspectReason=`almost concentric with another coin (${We.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const R=[],N=[],D=[],U=Date.now()+X$;let j=null;const te=[];let ne=!1;const fe={n:0},ve=await co();if(ve!==null&&(j=await nt("opencv.js (chargement)",()=>Gs()),j!==null)){r(`${i}: identifying wonders…`,.35);const ie=await nt("identifyWondersByClassifier",()=>P$(gx,j,e,ve,U,m,[],fe));for(const ee of ie)R.some(J=>J.id===ee.obj.id)||s.some(J=>J.id===ee.obj.id)||(R.push(ee.obj),te.push({obj:ee.obj,edgeScores:ee.edgeScores,zone:ee.zone}),N.push(ee.zone),D.push({quad:ee.quad,region:ee.region}));ne=ie.length>0}if(!ne){const ie=g_(te.map(ee=>({built:ee.obj.builtWithCardUnderneath,edgeScores:ee.edgeScores,zone:ee.zone})),m.map(ee=>[ee.box[0]+ee.box[2]/2,ee.box[1]+ee.box[3]/2]));for(const ee of ie){const J=te[ee];J.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(m.length>0){const ee=new Set(ie);for(let J=0;J<te.length;J++){const be=te[J];if(ee.has(J)||!be.obj.builtWithCardUnderneath)continue;const We=be.obj.tuckRegion;if(We===void 0)continue;if(!m.some(Se=>{const Q=Se.box[0]+Se.box[2]/2,se=Se.box[1]+Se.box[3]/2;return Q>=We.x&&Q<=We.x+We.width&&se>=We.y&&se<=We.y+We.height})){const Se=be.obj;Se.builtWithCardUnderneath=!1,Se.suspect=!0,Se.suspectReason="built-unconfirmed"}}}}const ke=async()=>{let ie=R.slice();const ee=[];m.forEach((Se,Q)=>{const se=Se.box[0]+Se.box[2]/2,de=Se.box[1]+Se.box[3]/2;N.some(_e=>se>=_e.x0&&se<=_e.x1&&de>=_e.y0&&de<=_e.y1)||ee.push(Q)});const J=[],be=[];ie.forEach((Se,Q)=>{const se=Se.boundingBox;se&&se.width>0&&(J.push(Q),be.push([se.x,se.y,se.width,se.height]))});const We=Se=>{const Q=[];return Se.forEach((se,de)=>{const _e=se.box[0]+se.box[2]/2,xe=se.box[1]+se.box[3]/2;N.some(ge=>_e>=ge.x0&&_e<=ge.x1&&xe>=ge.y0&&xe<=ge.y1)||Q.push(de)}),Q};let Fe=Qm(m.map(Se=>Se.box),ee,be,y,[e.width,e.height]);try{const Se=Q2(e.width,e.height,m.map(Q=>Q.box),Fe.hulls.map(([Q,se],de)=>({owner:Q,poly:se,n:Fe.hullBoxCounts[de]??0})),be);if(Se.length>0){const Q=Is(m.map(de=>de.box)),se=[];for(const de of Se){const[_e,xe,ge,me]=de,pe=cn(e,_e,xe,ge-_e,me-xe);if(pe.width<=0||pe.height<=0)continue;const ot=await Lt("banner",pe);for(const tt of Xr(ot.rows,ot.params,Ye.banner.conf,Ye.banner.classes)){const De=Z2(tt.box,de,Q);De&&se.push({...tt,box:De})}}if(se.length>0){const de=me=>me.color!==null&&g.some(pe=>ox(me.box,pe)),_e=new Map((await pg(e,se.filter(me=>!de(me)))).map(me=>[me.box.slice(0,4).join(","),me])),xe=se.map(me=>de(me)?me:_e.get(me.box.slice(0,4).join(","))).filter(me=>me!==void 0&&me.color!==null&&me.family!==null),ge=ys([...m,...xe]);ge.length>m.length&&(m=ge,Fe=Qm(m.map(me=>me.box),We(m),be,y,[e.width,e.height]))}}}catch(Se){console.warn("[#129 city-rescan] skipped:",Se)}return a!==void 0&&(a.hulls=Fe.hulls.map(([Se,Q],se)=>({owner:Se,poly:Q,n:Fe.hullBoxCounts[se]??0})),a.bandBoxes=y,a.image=e),{split:Fe,photoWonders:ie,splitWonderIdx:J}};let Re=null;try{Re=await ke()}catch(ie){console.warn("[city-split] failed (side unfiltered):",ie)}return{bannerDetections:m,photoCoins:L,photoTokenDiscs:v,discs:M,bandBoxes:y,bandSession:w,wonderFootprints:N,wonderTuckGates:D,photoTokensList:T,geo:Re,cv:j,regDeadline:U,unidentifiedTokens:u}}async function $g(e,t,n,r,i,a,s,o,u,l){let d=e.bannerDetections,p=e.cv;const{photoCoins:h,photoTokenDiscs:g,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:_,wonderTuckGates:x,photoTokensList:T,geo:v,regDeadline:E}=e,M={},k=[],S=[];let A=0;const z=[];let Y=0,F=0;const W=[],O=[],q=[],K=t==="opponent";let X=(Q,se)=>!K,le=(Q,se)=>!K,L=null;if(v!==null)try{const{split:Q,photoWonders:se,splitWonderIdx:de}=v;X=(me,pe)=>Q.pointOwner(me,pe)==="opponent"===K;const _e=K?"opponent":"player";if(le=(me,pe)=>Q.pointOwner(me,pe)===_e,n){const me=Q;L=pe=>new Set(D2(pe,me,_e,y))}d=d.filter((me,pe)=>Q.bannerOwner[pe]==="opponent"===K);const xe=se.map(()=>"player");de.forEach((me,pe)=>{xe[me]=Q.wonderOwner[pe]});const ge=[];se.forEach((me,pe)=>{xe[pe]==="opponent"===K&&ge.push(me)});for(const me of ge)O.push(me);_.length=0;for(const me of ge){const pe=me.tuckRegion??me.boundingBox;pe&&_.push({x0:pe.x,y0:pe.y,x1:pe.x+pe.width,y1:pe.y+pe.height})}for(const me of T)X(me.center[0],me.center[1])&&q.push(me)}catch(Q){console.warn("[city-split] failed (side unfiltered):",Q)}const P=L!==null?L(h):null;for(const Q of h)(P!==null?!P.has(Q):!le(Q.center[0],Q.center[1]))||(A+=Q.denomination??0,S.push(Q));const R=new Set,N=[],D=Is(d.map(Q=>Q.box));x.forEach((Q,se)=>{if(Q.quad===null||Q.region===null){const ge=_[se];ge&&N.push(ge);return}const de=Q.region,_e=[];d.forEach((ge,me)=>{const pe=ge.box[0]+ge.box[2]/2,ot=ge.box[1]+ge.box[3]/2;pe>=de.x&&pe<=de.x+de.width&&ot>=de.y&&ot<=de.y+de.height&&_e.push([me,ge.box])});const xe=f2(Q.quad,_e,D);xe!==null&&R.add(xe)});let U=[],j=0;d.forEach((Q,se)=>{if(R.has(se)){F+=1,j+=1;return}const de=Q.box[0]+Q.box[2]/2,_e=Q.box[1]+Q.box[3]/2;if(N.some(xe=>de>=xe.x0&&de<=xe.x1&&_e>=xe.y0&&_e<=xe.y1)){F+=1,j+=1;return}U.push(Q)});const te=o2(U,j,y,a.width,a.height);U=te.kept;for(const Q of U)M[Q.family]=(M[Q.family]??0)+1,Y+=1;const ne=cb(U),fe=new Set(ne.map(Q=>Q.box.join(",")));for(const Q of pb(U))fe.has(Q.box.join(","))||(ne.push(Q),fe.add(Q.box.join(",")));for(const Q of te.suspects)fe.has(Q.box.join(","))||(ne.push(Q),fe.add(Q.box.join(",")));for(const Q of ne)W.push(Q);if(U.some(Q=>Q.family==="guild")){const Q=await js();if(Q!==null){o(`${u}: identifying guilds…`,.75);for(const se of U)if(se.family==="guild")try{const[de,_e,xe,ge]=se.box,me=cn(a,de,_e,xe,ge),pe=k1(me),ot={[Q.inputNames[0]]:new Le("float32",pe,[1,3,qn,qn])},De=(await Q.run(ot))[Q.outputNames[0]].data,{id:Xe,prob:ut}=C1(De);Xe!==""&&!z.some(kt=>kt.id===Xe)&&!l.some(kt=>kt.id===Xe)&&z.push({id:Xe,boundingBox:{x:de,y:_e,width:xe,height:ge},confidence:Math.round(ut*1e4)/1e4})}catch(de){console.warn("[guild-cls] failed:",de)}}else if(Date.now()<E)try{const se=p??await Gs();if(se!==null){const de=await Z$();if(de.size>0){o(`${u}: identifying guilds…`,.75);const _e=await J$();for(const xe of i1(se,a,de,E,_e))!z.some(ge=>ge.id===xe.id)&&!l.some(ge=>ge.id===xe.id)&&z.push(xe)}}}catch(se){console.warn("[guilds-reg] failed:",se)}}o(`${u}: laurels…`,.8);const ke=await nt("laurier: chargement galerie gabarits",()=>ex()),Re=[];for(const Q of[0]){const se=Q===0?a:Xt(a,Q),de=await nt("laurier: passe PLEINE photo",()=>Lt("laurel",se));for(const[_e,xe,ge,me]of at("laurier: decodage YOLO (JS)",()=>ms(de.rows,de.params,Ye.laurel.conf))){const pe=dg({x:_e,y:xe,width:ge-_e,height:me-xe},Q,a.width,a.height);Re.push([pe.x,pe.y,pe.x+pe.width,pe.y+pe.height])}}const ie=[{boxes:at("laurier: dedup",()=>om(Re)),offset:[0,0]}],ee=[a],J=[];try{const Q=o$(d.map(se=>se.box),[a.width,a.height]);ct.set("_tta.onnx",`total=${Cs.total} idDiff=${Cs.idDiff} verdictDiff=${Cs.verdictDiff}`),ct.set("_marge2.onnx",`total=${Ut.total} pos4=${Ut.positifs4} pos2=${Ut.positifs2} divergent=${Ut.divergent} `+Ut.detail.slice(0,10).join(" | ")),ct.set("_ttaObb.onnx",`total=${ai.total} memeK=${ai.memeK} inv=${ai.memeKInverse} `+ai.detail.slice(0,12).join(" ")),ct.set("_tuilage.onnx",`groupes=? tuiles=${Q.length} bannieres=${d.length} image=${a.width}x${a.height}`);for(const[se,de,_e,xe]of Q){const ge=cn(a,se,de,_e-se,xe-de);if(ge.width<=0||ge.height<=0)continue;const me=[];for(const pe of[0]){const ot=pe===0?ge:Xt(ge,pe),tt=await nt("laurier: passe par TUILE (#113)",()=>Lt("laurel",ot));for(const[De,Xe,ut,kt]of at("laurier: decodage YOLO (JS)",()=>ms(tt.rows,tt.params,Ye.laurel.conf))){const Ct=dg({x:De,y:Xe,width:ut-De,height:kt-Xe},pe,ge.width,ge.height);me.push([Ct.x,Ct.y,Ct.x+Ct.width,Ct.y+Ct.height])}}if(ie.push({boxes:om(me),offset:[se,de]}),ee.push(ge),w!==null)try{const pe=await nt("laurier: bande de piste sur tuile (#114)",async()=>{const De=Yr(ge,1280,pr);return{sortie:await w.run({[w.inputNames[0]]:new Le("float32",De.tensor,[1,3,1280,1280])}),params:De.params}}),ot={params:pe.params},tt=pe.sortie[w.outputNames[0]];for(const[De,Xe,ut,kt]of um(tt.data,tt.dims[1]??0,tt.dims[2]??0,ot.params,hg))J.push([De+se,Xe+de,ut+se,kt+de])}catch{}}}catch(Q){console.warn("[laurel-containers] failed:",Q)}const[be,We]=await nt("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([Ys(),Js()]));let Fe=await l$(ie,async(Q,se)=>{if(We===null)return!1;const de=ee[se]??a,_e=await nt("laurier: filtre FP (#49)",()=>ux(de,[Math.trunc(Q[0]),Math.trunc(Q[1]),Math.trunc(Q[2]),Math.trunc(Q[3])],We));return _e!==null&&_e>=H1});const Se=[...y,...J];Fe=Fe.filter(([Q,se,de,_e])=>!p$((Q+de)/2,(se+_e)/2,Se,d.map(xe=>xe.box)));for(const[Q,se,de,_e]of Fe){const xe=Math.trunc((Q+de)/2),ge=Math.trunc((se+_e)/2);if([...g,...m].some(He=>(xe-He.cx)**2+(ge-He.cy)**2<=He.r*He.r)||!X(xe,ge))continue;const pe=Math.min(Math.trunc(de-Q),Math.trunc(_e-se)),ot=Math.max(6,Math.trunc(Math.max(de-Q,_e-se)*Rb)),tt=tx(a,xe,ge,ot);let De=null,Xe=0,ut=!1;if(be!==null&&pe>=6){const He=cn(a,Math.trunc(Q),Math.trunc(se),Math.trunc(de-Q),Math.trunc(_e-se)),Qe=async dn=>{let wr=null,jn=0;for(const hi of dn){const fi=hi===0?He:Xt(He,hi),mi=W1(fi),mo=await nt("laurier: lecture chiffre (CNN)",()=>be.run({[be.inputNames[0]]:new Le("float32",mi,[1,3,Pt,Pt])})),{value:gi,prob:br}=q1(mo[be.outputNames[0]].data);if(br>jn&&(wr=gi,jn=br),wr!==null&&jn>=G1)break}return{v:wr,p:jn}},Ft=await Qe([0,2]);let At=Ft.v,Rt=Ft.p;if(At===null||Rt<Wm){const dn=await Qe([1,3]);dn.v!==null&&dn.p>Rt&&(At=dn.v,Rt=dn.p)}At!==null&&Rt>=Wm&&(De=At,Xe=Rt)}if(De===null&&pe>=6){const He=new Map;for(const Qe of[0,1,2,3]){const Ft=Qe===0?tt:Xt(tt,Qe),[At,Rt]=at("laurier: lecteur GABARITS (repli, JS pur)",()=>Hb(Ft,ke));At!==null&&(He.set(At,Math.max(He.get(At)??0,Rt)),Rt>Xe&&(De=At,Xe=Rt))}De!==null&&Xe<Y$&&(De=null),ut=De!==null&&[...He.entries()].some(([Qe,Ft])=>Qe!==De&&Ft>=Xe-.1)}const kt=_.some(He=>xe>=He.x0&&xe<=He.x1&&ge>=He.y0&&ge<=He.y1),Ct=[...z,...l].some(He=>{const Qe=He.boundingBox;return Qe!==void 0&&xe>=Qe.x&&xe<=Qe.x+Qe.width&&ge>=Qe.y&&ge<=Qe.y+Qe.height});k.push({value:De,valueRead:De!==null,center:[Math.round((Q+de)/2),Math.round((se+_e)/2)],boundingBox:{x:Math.trunc(Q),y:Math.trunc(se),width:Math.trunc(de-Q),height:Math.trunc(_e-se)},confidence:Math.round(Xe*1e4)/1e4,excluded:kt||Ct,photoIndex:i-1,...ut?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:M,laurels:k,coins:S,coinTotal:A,guilds:z,bannerCount:Y,tuckedExcluded:F,bannerSuspects:W,cityWondersKept:O,cityTokensKept:q}}function xg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function vg(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function Sg(e,t,n){const{byFamily:r,laurels:i,coins:a,progressTokens:s,wonders:o,guilds:u,bannerSuspects:l,coinTotal:d,unidentifiedTokens:p,bannerCount:h,tuckedExcluded:g}=e;g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):h>0&&o.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(T=>T.id).join(", ")+" — confirm in the review."});const y=o.filter(T=>T.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(T=>T.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${o.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),p>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${p} token disc(s) found but not identified — pick them in the review below.`}),s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+s.map(T=>T.id).join(", ")+" — confirm in the review."}),a.length>0){const T=a.filter(E=>E.denomSource==="cnn").length,v=a.length-T;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${d} from ${a.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${d} from ${a.length} tile(s) — ${T} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=hx(u,o);for(const T of[...h$(o.map(v=>v.id),t),...g$(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:T.message});const _=i.filter(T=>!T.excluded),x=_.filter(T=>T.valueRead);return{...Tx(),wonders:o,guilds:w,progressTokens:s,laurels:i,cardVictoryPoints:{value:x.reduce((T,v)=>T+(v.value??0),0),laurelsKept:_.length,laurelsUnread:_.length-x.length,complete:_.length===x.length},cardCounts:{byFamily:r,source:h>0?"yolo":"none",tuckedExcluded:g,...l.length>0?{suspects:l}:{}},coins:{total:d,confidence:a.length>0?.5:0,source:a.length===0?"none":a.some(T=>T.denomSource==="cnn")?"local-cnn":"local-colour",coins:a}}}async function Ex(e,t,n,r,i=()=>{},a="player",s,o=!1){const u=xg();let l=0;for(const d of e){l+=1;const p=`${t} photo ${l}/${e.length}`;r(`${p}: reading pixels…`,.01);const h=await ci(d),g=await _g(h,n,t,r,p,s,u.wonders,u.progressTokens);u.unidentifiedTokens+=g.unidentifiedTokens;const m=await $g(g,a,o,t,l,h,n,r,p,u.guilds);vg(u,m),i()}return Sg(u,t,n)}const Mt=1280,Ix=.3,di=9;let po=null;function pi(){return po===null&&(po=(async()=>{try{return(await fetch(`${et}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await mt("pawn_ends_brut.onnx"):null}catch{return null}})()),po}function Mx(e){const t=Mt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),a=i.getContext("2d",{willReadFrequently:!0}),s=Pw(e.data,e.width,e.height,e.channels);a.putImageData(new ImageData(s,e.width,e.height),0,0);const u=new OffscreenCanvas(Mt,Mt).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Mt,Mt),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Mt,Mt),d=Mt*Mt,p=new Float32Array(3*d);for(let h=0;h<d;h+=1)p[h]=l[h*4]/255,p[d+h]=l[h*4+1]/255,p[2*d+h]=l[h*4+2]/255;return{tensor:p,r:t}}const Ge={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null,classes:new Set};function kx(){Ge.appels=0,Ge.inferences=0,Ge.bandes=0,Ge.detail=[],Ge.premiereGagne=null,Ge.classes=new Set}function Tg(){ct.set("_pion.onnx",`appels=${Ge.appels} inferences=${Ge.inferences} bandes=${Ge.bandes} premiereGagne=${Ge.premiereGagne??"n/a"} classes=${Ge.classes.size===0?"aucune":[...Ge.classes].sort().join(",")}${Cx()} | ${Ge.detail.join(" ")}`)}function Cx(){const e=Ge.classes,t=(e.has(1)?1:0)+(e.has(2)?1:0);return e.size===0?" (piste illisible)":e.has(0)&&t===2?" (tout vu)":!e.has(0)&&t===2?" (PION manquant, geometrie disponible)":e.has(0)&&t===1?" (pion a la capitale : il masque un medaillon — TRAITE par #82)":e.has(0)&&t===0?" (pion seul, aucun medaillon)":" (un seul medaillon, pas de pion)"}async function ho(e,t){Ge.inferences+=1;const{tensor:n,r}=at("pion: mise en tenseur 1280x1280",()=>Mx(t)),a=(await e.run({[e.inputNames[0]]:new Le("float32",n,[1,3,Mt,Mt])}))[e.outputNames[0]],s=a.data,o=a.dims[2]??0,u=(a.dims[1]??4)-4,l=at("pion: depouillement des ancres brutes",()=>{const d=new Map;for(let p=0;p<u;p+=1){const h=(4+p)*o;let g=-1,m=Ix;for(let y=0;y<o;y+=1){const w=s[h+y];w>=m&&(m=w,g=y)}if(g>=0){const y=(s[g]+s[2*o+g])/2/r,w=(s[o+g]+s[3*o+g])/2/r,_=(s[2*o+g]-s[g])/r,x=(s[3*o+g]-s[o+g])/r;d.set(p,{conf:m,cx:y,cy:w,diam:(_+x)/2})}}return d});for(const d of l.keys())Ge.classes.add(d);return l}async function fo(e,t,n){const r=Ge.inferences,i=`a${Ge.appels}`;Ge.appels+=1;const a=await nt("pion: UNE passe (les 4 rotations)",()=>Ax(e,t,n));return Ge.detail.push(`${i}:${Ge.inferences-r}inf conf=${a===null?"rien":a.confidence.toFixed(2)}`),Tg(),a}async function Ax(e,t,n){let r=null;const i=1.8;for(const v of n??[0,1,2,3]){const E=v===0?t:at("pion: rotation de l'image",()=>Xt(t,v)),M=await ho(e,E);if(M.has(0)&&M.has(1)&&M.has(2)){const k=M.get(0).conf+M.get(1).conf+M.get(2).conf;if((r===null||k>r.score)&&(r={score:k,det:M,k:v}),k>=i)break}}if(r===null)for(const v of n??[0,1,2,3]){const E=v===0?t:Xt(t,v),M=await ho(e,E);if(M.has(1)&&M.has(2)){const k=M.get(1).conf+M.get(2).conf;(r===null||k>r.score)&&(r={score:k,det:M,k:v})}}let a=!1;if(r===null)for(const v of n??[0,1,2,3]){const E=v===0?t:Xt(t,v),M=await ho(e,E),k=M.get(0);if(k===void 0)continue;const S=M.has(1)&&!M.has(2)?1:!M.has(1)&&M.has(2)?2:null;if(S===null)continue;const A=M.get(S),z=Qw([k.cx,k.cy],[A.cx,A.cy],A.diam);if(z===null)continue;const Y=k.conf+A.conf;if(r===null||Y>r.score){const F=new Map(M);F.set(S===2?1:2,{conf:A.conf,cx:z[0],cy:z[1],diam:A.diam}),r={score:Y,det:F,k:v},a=!0}}if(r===null)return null;const s=!r.det.has(0),o=r.det.get(0)??{conf:0,cx:0,cy:0},u=r.det.get(1),l=r.det.get(2),d=l.cx-u.cx,p=l.cy-u.cy,h=(u.cx+l.cx)/2,g=(u.cy+l.cy)/2,m=d*d+p*p;if(m<=0)return null;const y=((o.cx-h)*d+(o.cy-g)*p)/m*(2*di),w=s?0:Math.min(di,Math.max(-di,st(y))),_=s?0:Math.min(o.conf,u.conf,l.conf),x=(v,E)=>{const M=r.k%4;return M===0?[v,E]:M===1?[E,t.height-1-v]:M===2?[t.width-1-v,t.height-1-E]:[t.width-1-E,v]},T=[u,l].map(v=>{const[E,M]=x(v.cx,v.cy);return[st(E),st(M)]});return{position:w,confidence:Math.round(_*1e4)/1e4,ends:T,k:r.k,found:!s,endOccluded:a}}async function Eg(e,t,n){let r=null,i=null;for(const a of n){const s=qw(t.width,t.height,a);if(s===null)continue;const o=cn(t,s.x,s.y,s.width,s.height);if(o.width===0||o.height===0)continue;Ge.bandes+=1;const u=await fo(e,o,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Ge.premiereGagne===null?Ge.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Ge.premiereGagne=!1),Tg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,d])=>[l+s.x,d+s.y])})}return r}function Ig(){const e=[Vs,js,Ys,Zs,Js,to,ro,ao,li,uo,co,pi];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function Rx(e,t){Ig();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const s=(m,y=0)=>{t(m,i>0?Math.min(.99,(a+y)/i):void 0)},o=()=>{a+=1};for(const m of["left","right"]){const y=e[m];y.length>0&&(r[m]=await Ex(y,m,n,s,o))}let u=null,l=null;if(e.both!==void 0){const m={},y=await ci(e.both),w=await _g(y,n,"both",s,"both photo 1/1",m,[],[]),_={player:[],opponent:[]},x=async(M,k)=>{const S=xg();S.unidentifiedTokens+=w.unidentifiedTokens;const A=_[M];return vg(S,await $g(w,M,!0,k,1,y,A,s,`${k} photo 1/1`,S.guilds)),o(),Sg(S,k,A)},T={player:await x("player","left"),opponent:await x("opponent","right")};if(s("military pawn…",.95),m.image!==void 0)try{const M=await pi();M!==null&&(m.bandBoxes!==void 0&&m.bandBoxes.length>0&&(u=await Eg(M,m.image,m.bandBoxes)),u===null&&(u=await fo(M,m.image)))}catch(M){console.warn("[#125] both-photo pawn read failed:",M)}u!==null&&(l=jw(u.ends,m.hulls??[],u.position));const v=l!==null&&!l.ambiguous?Kw(l):null;let E={left:"player"};if(v!==null)E={left:v.left,right:v.right},r.left=T[v.left],r.right=T[v.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`});else{const M=Yw(m.hulls??[]);M!==null?(E={left:M.left,right:M.right},r.left=T[M.left],r.right=T[M.right],n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: no readable military track, so LEFT and RIGHT were taken from the PHOTO LAYOUT (cities stacked vertically -> the TOP one is left; side by side -> the LEFTMOST one is left). Swap them in the review if the seating is the other way around."})):(r.left=T.player,r.right=T.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: neither the military track nor the photo layout could tell the two cities apart — LEFT and RIGHT are UNDECIDED and must be checked in the review."}))}for(const M of["player","opponent"]){const k=M==="player"?"left":"right",S=E.left===M?"left":"right";for(const A of _[M])n.push(D$(A,k,S))}}{const m={},y={};for(const w of["left","right"]){const _=r[w];_!=null&&(m[w]=_.wonders.map(x=>x.id),y[w]=_.progressTokens.map(x=>x.id))}for(const w of[...f$(m),...m$(y)])n.push({code:"INCONSISTENT_STATE",message:w.message})}let d={conflictPawnPosition:0,found:!1,confidence:0},p=!1;if(e.board!==void 0)try{const m=await ci(e.board),y=await pi();if(y!==null){let w=await fo(y,m);if(w===null){const _=await li();if(_!==null){const x=await Lt("banner",m),T=Xr(x.rows,x.params,Ye.banner.conf,Ye.banner.classes),v=await fg(_,m,T);w=await Eg(y,m,v)}}w!==null&&(d={conflictPawnPosition:w.position,found:w.found,confidence:w.confidence},p=w.endOccluded,n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${w.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(m){console.warn("[pawn] on-device read failed:",m)}else u!==null&&l!==null&&(d={conflictPawnPosition:u.position,found:u.found,confidence:u.confidence},p=u.endOccluded);if(p&&d.found&&n.push({code:"LOW_CONFIDENCE",message:`The conflict pawn appears to SIT ON its end medallion (the capital), which hides it from the detector: position ${d.conflictPawnPosition} was DEDUCED from the track length, not read end to end. Confirm it — at this distance it decides a military supremacy.`}),!d.found){const m=x=>{var T,v;return Number(((v=(T=x==null?void 0:x.cardCounts)==null?void 0:T.byFamily)==null?void 0:v.military)??0)},y=m(r.left),w=m(r.right),_=Math.abs(y-w);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:_>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${y} military cards and the other ${w}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const h=d.conflictPawnPosition,g=Math.abs(h)>=di?{type:"military",winner:h>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:d,outcome:g,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(a,s)=>{L$(a);const o=G$()?"Initialisation des modèles de vision…":Bw(a);self.postMessage({id:t,progress:o,...s!==void 0?{fraction:s}:{},...a!==r?{perfPartiel:{providers:ag(),etapes:ig(),etapeCourante:o}}:{}}),r=a};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){Ig(),await Promise.allSettled([Vs(),js(),Ys(),Zs(),Js(),to(),ro(),ao(),li(),uo(),co(),pi()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),U$(),H$();const a=performance.now(),s=n==="classify"?await Sx(e.data.file):await Rx(e.data.payload,i);self.postMessage({id:t,ok:!0,result:s,perf:{etapes:ig(),providers:ag(),runtime:F$(),inference:V$(),famillesJs:Aw(),inferenceParEtape:q$(),totalMs:Math.round(performance.now()-a)}})}catch(a){self.postMessage({id:t,ok:!1,error:String(a)})}})()}})();
