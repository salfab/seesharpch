var k1=Object.defineProperty;var E1=(ct,pt,Yt)=>pt in ct?k1(ct,pt,{enumerable:!0,configurable:!0,writable:!0,value:Yt}):ct[pt]=Yt;var Dm=(ct,pt,Yt)=>E1(ct,typeof pt!="symbol"?pt+"":pt,Yt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ct=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Yt=Object.getOwnPropertyNames,Lm=Object.prototype.hasOwnProperty,qm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),Zt=(e,t)=>{for(var n in t)ct(e,n,{get:t[n],enumerable:!0})},Gm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Yt(t))!Lm.call(e,i)&&i!==n&&ct(e,i,{get:()=>t[i],enumerable:!(r=pt(t,i))||r.enumerable});return e},un=e=>Gm(ct({},"__esModule",{value:!0}),e),ln,$t,Qt,Ua,Pa,La=X(()=>{ln=new Map,$t=[],Qt=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=ln.get(e);if(r===void 0)ln.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=$t.indexOf(e);i!==-1&&$t.splice(i,1);for(let a=0;a<$t.length;a++)if(ln.get($t[a]).priority<=n){$t.splice(a,0,e);return}$t.push(e)}return}throw new TypeError("not a valid backend")},Ua=async e=>{let t=ln.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Pa=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?$t:n,i,a=[],s=new Set;for(let u of r){let d=await Ua(u);typeof d=="string"?a.push({name:u,err:d}):(i||(i=d),i===d&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),Wm=X(()=>{La()}),qa,Vm=X(()=>{qa="1.27.0"}),br,Be,Ga=X(()=>{Vm(),br="warning",Be={wasm:{},webgl:{},webgpu:{},versions:{common:qa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);br=e}},get logLevel(){return br}},Object.defineProperty(Be,"logLevel",{enumerable:!0})}),ke,Fm=X(()=>{Ga(),ke=Be}),Wa,Va,Hm=X(()=>{Wa=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=a*i,p=0,f=c,m=c*2,g=-1;s==="RGBA"?(p=0,f=c,m=c*2,g=c*3):s==="RGB"?(p=0,f=c,m=c*2):s==="RBG"&&(p=0,m=c,f=c*2);for(let _=0;_<a;_++)for(let b=0;b<i;b++){let x=(e.data[p++]-d[0])*u[0],$=(e.data[f++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],S=g===-1?255:(e.data[g++]-d[3])*u[3];r.fillStyle="rgba("+x+","+$+","+I+","+S+")",r.fillRect(b,_,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Va=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,c;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,_=2,b=3,x=0,$=p,I=p*2,S=-1;o==="RGBA"?(x=0,$=p,I=p*2,S=p*3):o==="RGB"?(x=0,$=p,I=p*2):o==="RBG"&&(x=0,I=p,$=p*2),r=n.createImageData(i,a);for(let k=0;k<a*i;m+=f,g+=f,_+=f,b+=f,k++)r.data[m]=(e.data[x++]-c[0])*d[0],r.data[g]=(e.data[$++]-c[1])*d[1],r.data[_]=(e.data[I++]-c[2])*d[2],r.data[b]=S===-1?255:(e.data[S++]-c[3])*d[3]}else throw new Error("Can not access image data");return r}}),Rn,Fa,Ha,ja,Ka,Xa,jm=X(()=>{xr(),Rn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,c=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,f=0,m=1,g=2,_=3,b=0,x=d,$=d*2,I=-1;o==="RGB"&&(p=3,f=0,m=1,g=2,_=-1),u==="RGBA"?I=d*3:u==="RBG"?(b=0,$=d,x=d*2):u==="BGR"&&($=0,x=d,b=d*2);for(let S=0;S<d;S++,f+=p,g+=p,m+=p,_+=p)c[b++]=(e[f]+s[0])/a[0],c[x++]=(e[m]+s[1])/a[1],c[$++]=(e[g]+s[2])/a[2],I!==-1&&_!==-1&&(c[I++]=(e[_]+s[3])/a[3]);return u==="RGBA"?new We("float32",c,[1,4,n,r]):new We("float32",c,[1,3,n,r])},Fa=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let p=d(c);if(p!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;p.drawImage(e,0,0),s=p.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let c,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,p=t.resizedWidth):(c=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=p,t!==void 0){let f=u();f.width=p,f.height=c;let m=d(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,p,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let p=d(c);if(p!=null){let f=e.height,m=e.width;return p.drawImage(e,0,0,m,f),s=p.getImageData(0,0,m,f).data,o.height=f,o.width=m,Rn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,p)=>{let f=u(),m=d(f);if(!e||!m)return p();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let _=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,c(Rn(_.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Rn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ha=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new We({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},ja=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new We({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Ka=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new We({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Xa=(e,t,n)=>new We({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),At,dn,$r,Ya,Km=X(()=>{At=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),dn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),$r=!1,Ya=()=>{if(!$r){$r=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(At.set("int64",BigInt64Array),dn.set(BigInt64Array,"int64")),t&&(At.set("uint64",BigUint64Array),dn.set(BigUint64Array,"uint64")),r?(At.set("float16",n),dn.set(n,"float16")):At.set("float16",Uint16Array)}}}),Za,Qa,Xm=X(()=>{xr(),Za=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Qa=(e,t)=>{switch(e.location){case"cpu":return new We(e.type,e.data,t);case"cpu-pinned":return new We({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new We({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),We,xr=X(()=>{Hm(),jm(),Km(),Xm(),We=class{constructor(e,t,n){Ya();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=At.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=At.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=dn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Za(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Fa(e,t)}static fromTexture(e,t){return Ha(e,t)}static fromGpuBuffer(e,t){return ja(e,t)}static fromMLTensor(e,t){return Ka(e,t)}static fromPinnedBuffer(e,t,n){return Xa(e,t,n)}toDataURL(e){return Wa(this,e)}toImageData(e){return Va(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Qa(this,e)}}}),qe,Ja=X(()=>{xr(),qe=We}),On,vr,it,Xe,zt,Rt,es=X(()=>{Ga(),On=(e,t)=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.timeStamp(`${e}::ORT::${t}`)},vr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),On("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},it=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||vr("BEGIN",e)},Xe=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||vr("END",e)},zt=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.time(`ORT::${e}`)},Rt=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.timeEnd(`ORT::${e}`)}}),ts,Ym=X(()=>{La(),Ja(),es(),ts=class Um{constructor(t){this.handler=t}async run(t,n,r){it(),zt("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof qe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof qe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(c.indexOf(p)!==-1){let f=n[p];(f===null||f instanceof qe)&&(d=!0,s=!1,i[p]=f)}if(d){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,a),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof qe?u[d]=c:u[d]=new qe(c.type,c.data,c.dims)}return Rt("InferenceSession.run"),Xe(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){it(),zt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,p=0,f=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(f=t.byteLength-p,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||p+f>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-p}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,p,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Pa(s),d=await o.createInferenceSessionHandler(a,u);return Rt("InferenceSession.create"),Xe(),new Um(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Jt,Zm=X(()=>{Ym(),Jt=ts}),Qm=X(()=>{}),Jm=X(()=>{}),eg=X(()=>{}),tg=X(()=>{}),ng={};Zt(ng,{InferenceSession:()=>Jt,TRACE:()=>On,TRACE_EVENT_BEGIN:()=>zt,TRACE_EVENT_END:()=>Rt,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Xe,Tensor:()=>qe,env:()=>ke,registerBackend:()=>Qt});var He=X(()=>{Wm(),Fm(),Zm(),Ja(),Qm(),Jm(),es(),eg(),tg()}),Sr=X(()=>{}),ns={};Zt(ns,{default:()=>rs});var Ir,Tr,rs,rg=X(()=>{var e;Up(),Ot(),zr(),Ir="ort-wasm-proxy-worker",Tr=((e=globalThis.self)==null?void 0:e.name)===Ir,Tr&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Br(r.wasm).then(()=>{Hi(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ji(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=Jn(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Xi(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":Yi(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;Qi(i,a,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},ea([...s,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":Ji(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),rs=Tr?null:t=>new Worker(t??Ve,{type:"module",name:Ir})}),is={};Zt(is,{default:()=>ss});async function as(e={}){var Bm,Nm;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Bm=self.name)==null?void 0:Bm.startsWith("em-pthread"));t.mountExternalData=(l,h)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=l=>async(...h)=>{var w;try{if(t.Yc)throw Error("Session already started");let y=t.Yc={Kd:h[0],errors:[]},T=await l(...h);if(t.Yc!==y)throw Error("Session mismatch");(w=t.dd)==null||w.flush();let E=y.errors;if(0<E.length){let R=await Promise.all(E);if(R=R.filter(P=>P),0<R.length)throw Error(R.join(`
`))}return T}finally{t.Yc=null}};t.jsepInit=(l,h)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let w=t.dd;t.jsepRegisterBuffer=(y,T,E,R)=>w.registerBuffer(y,T,E,R),t.jsepGetBuffer=y=>w.getBuffer(y),t.jsepCreateDownloader=(y,T,E)=>w.createDownloader(y,T,E),t.jsepOnCreateSession=y=>{w.onCreateSession(y)},t.jsepOnReleaseSession=y=>{w.onReleaseSession(y)},t.jsepOnRunStart=y=>w.onRunStart(y),t.Id=(y,T)=>{w.upload(y,T)}}else if(l==="webnn"){let w=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=y=>w.onRunStart(y),t.webnnOnRunEnd=w.onRunEnd.bind(w),t.webnnOnReleaseSession=y=>{w.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,T)=>w.createMLTensorDownloader(y,T),t.webnnRegisterMLTensor=(y,T,E,R)=>w.registerMLTensor(y,T,E,R),t.webnnCreateMLContext=y=>w.createMLContext(y),t.webnnRegisterMLConstant=(y,T,E,R,P,Q)=>w.registerMLConstant(y,T,E,R,P,t.Xc,Q),t.webnnRegisterGraphInput=w.registerGraphInput.bind(w),t.webnnIsGraphInput=w.isGraphInput.bind(w),t.webnnRegisterGraphOutput=w.registerGraphOutput.bind(w),t.webnnIsGraphOutput=w.isGraphOutput.bind(w),t.webnnCreateTemporaryTensor=w.createTemporaryTensor.bind(w),t.webnnIsGraphInputOutputTypeSupported=w.isGraphInputOutputTypeSupported.bind(w)}};let s=()=>{let l=h=>(...w)=>{let y=lt;return w=h(...w),lt!=y?new Promise((T,E)=>{Ia={resolve:T,reject:E}}):w};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=l(t[h])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,d=(l,h)=>{throw h},c=self.location.href,p="";if(n||r){try{p=new URL(".",c).href}catch{}r&&(u=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async l=>{if(M(l))return new Promise((w,y)=>{var T=new XMLHttpRequest;T.open("GET",l,!0),T.responseType="arraybuffer",T.onload=()=>{T.status==200||T.status==0&&T.response?w(T.response):y(T.status)},T.onerror=y,T.send(null)});var h=await fetch(l,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,_,b,x,$=console.log.bind(console),I=console.error.bind(console),S=$,k=I,C=!1,M=l=>l.startsWith("file://");function v(){kt.buffer!=N.buffer&&Y()}if(i){let l=function(h){try{var w=h.data,y=w.Sc;if(y==="load"){let T=[];self.onmessage=E=>T.push(E),x=()=>{postMessage({Sc:"loaded"});for(let E of T)l(E);self.onmessage=l};for(let E of w.xd)t[E]&&!t[E].proxy||(t[E]=(...R)=>{postMessage({Sc:"callHandler",wd:E,args:R})},E=="print"&&(S=t[E]),E=="printErr"&&(k=t[E]));kt=w.Od,Y(),m=w.Pd,te(),_r()}else if(y==="run"){(function(T){var E=(v(),G)[T+52>>>2>>>0];T=(v(),G)[T+56>>>2>>>0],Ff(E,E-T),pe(E)})(w.Rc),Ma(w.Rc,0,0,1,0,0),Fh(),xa(w.Rc),O||(Pf(),O=!0);try{ww(w.Md,w.bd)}catch(T){if(T!="unwind")throw T}}else w.target!=="setimmediate"&&(y==="checkMailbox"?O&&cr():y&&(k(`worker: received unknown command ${y}`),k(w)))}catch(T){throw Lf(),T}};var O=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=l}var N,F,L,V,A,G,H,K,ae,U,J,W=!1;function Y(){var l=kt.buffer;t.HEAP8=N=new Int8Array(l),L=new Int16Array(l),t.HEAPU8=F=new Uint8Array(l),V=new Uint16Array(l),t.HEAP32=A=new Int32Array(l),t.HEAPU32=G=new Uint32Array(l),H=new Float32Array(l),K=new Float64Array(l),ae=new BigInt64Array(l),U=new BigUint64Array(l)}function z(){W=!0,i?x():bt.sb()}function B(l){throw k(l="Aborted("+l+")"),C=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),b==null||b(l),l}function j(){return{a:{ma:Gb,gb:qb,g:bw,J:$w,f:xw,o:vw,h:Sw,ha:Iw,b:Tw,T:kw,Ha:Zh,n:Ew,$:tf,Xa:nf,Da:rf,Fa:af,Ya:sf,Va:of,Oa:uf,Ua:lf,ka:df,Ea:cf,Ba:pf,Wa:hf,Ca:ff,bb:Cw,ea:Mw,wa:Aw,ua:Rw,da:Bw,O:Nw,H:Dw,va:Uw,_:Fw,xa:Hw,Ra:jw,za:Xw,Ia:Yw,sa:Zw,fa:Qw,Qa:xa,_a:Jw,R:rb,r:ub,c:ba,hb:lb,y:db,M:cb,D:pb,l:hb,s:xf,ib:fb,I:mb,S:gb,j:yb,u:_b,q:wb,k:bb,La:$b,Ma:xb,Na:vb,Ja:Tf,Ka:kf,ta:Ef,db:Ib,ab:kb,v:Eb,aa:Cb,ga:Mb,$a:Tb,W:Ab,Za:zb,Aa:Rb,F:Sb,U:Ob,la:gr,ya:Nb,fb:Bb,eb:Db,Sa:zf,Ta:Rf,Ga:Oe,V:Of,ja:Bf,Pa:Nf,ia:Df,kb:S1,na:w1,lb:v1,oa:_1,G:l1,e:Hb,t:Vb,w:Wb,B:n1,mb:m1,K:s1,x:Xb,pa:g1,Y:b1,ba:f1,nb:h1,ob:p1,P:r1,qa:c1,pb:d1,N:o1,Z:y1,d:Fb,A:Kb,m:jb,jb:I1,p:Zb,z:Qb,C:Yb,E:Jb,L:i1,qb:u1,Q:$1,ca:a1,X:x1,rb:t1,ra:e1,i:Pb,a:kt,cb:_e}}}async function te(){function l(y,T){var E=bt=y.exports;y={};for(let[R,P]of Object.entries(E))typeof P=="function"?(E=eb(P),y[R]=E):y[R]=P;return bt=y,bt=(function(){var R=bt,P=ee=>ce=>ee(ce)>>>0,Q=ee=>()=>ee()>>>0;return(R=Object.assign({},R)).tb=P(R.tb),R.Xb=Q(R.Xb),R.Zb=P(R.Zb),R.lc=P(R.lc),R.mc=Q(R.mc),R.qc=P(R.qc),R})(),jt.push(bt._b),Uf=(y=bt).tb,Pf=y.ub,t._OrtInit=y.vb,t._OrtGetLastError=y.wb,t._OrtCreateSessionOptions=y.xb,t._OrtAppendExecutionProvider=y.yb,t._OrtAddFreeDimensionOverride=y.zb,t._OrtAddSessionConfigEntry=y.Ab,t._OrtReleaseSessionOptions=y.Bb,t._OrtCreateSession=y.Cb,t._OrtReleaseSession=y.Db,t._OrtGetInputOutputCount=y.Eb,t._OrtGetInputOutputMetadata=y.Fb,t._OrtFree=y.Gb,t._OrtCreateTensor=y.Hb,t._OrtGetTensorData=y.Ib,t._OrtReleaseTensor=y.Jb,t._OrtCreateRunOptions=y.Kb,t._OrtAddRunConfigEntry=y.Lb,t._OrtReleaseRunOptions=y.Mb,t._OrtCreateBinding=y.Nb,t._OrtBindInput=y.Ob,t._OrtBindOutput=y.Pb,t._OrtClearBoundOutputs=y.Qb,t._OrtReleaseBinding=y.Rb,t._OrtRunWithBinding=y.Sb,t._OrtRun=y.Tb,t._OrtEndProfiling=y.Ub,t._JsepOutput=y.Vb,t._JsepGetNodeName=y.Wb,yr=y.Xb,dt=t._free=y.Yb,Mn=t._malloc=y.Zb,Ma=y.ac,Lf=y.bc,qf=y.cc,Gf=y.dc,Aa=y.ec,Wf=y.fc,Vf=y.gc,me=y.hc,An=y.ic,Ff=y.jc,pe=y.kc,za=y.lc,he=y.mc,Hf=y.nc,Ra=y.oc,jf=y.pc,Kf=y.qc,Xf=y.rc,Oa=y.sc,Yf=y.tc,Zf=y.uc,Qf=y.vc,Jf=y.wc,em=y.xc,tm=y.yc,nm=y.zc,rm=y.Ac,im=y.Bc,am=y.Cc,sm=y.Dc,om=y.Ec,um=y.Fc,lm=y.Gc,dm=y.Hc,cm=y.Ic,pm=y.Jc,hm=y.Kc,fm=y.Lc,mm=y.Mc,gm=y.Nc,ym=y.Pc,_m=y.Qc,wm=y.$c,bm=y.ad,$m=y.fd,xm=y.jd,vm=y.kd,Sm=y.ld,Im=y.md,Tm=y.nd,km=y.od,Em=y.pd,Cm=y.qd,Mm=y.vd,Am=y.Td,zm=y.Ud,Rm=y.Vd,Om=y.Wd,m=T,bt}var h,w=j();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(w,(T,E)=>{y(l(T,E))})}):i?l(new WebAssembly.Instance(m,j()),m):(J??(J=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(y){var T=J;if(!f&&!M(T))try{var E=fetch(T,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,y)}catch(R){k(`wasm streaming compile failed: ${R}`),k("falling back to ArrayBuffer instantiation")}return(async function(R,P){try{var Q=await(async function(ee){if(!f)try{var ce=await o(ee);return new Uint8Array(ce)}catch{}if(ee==J&&f)ee=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";ee=u(ee)}return ee})(R);return await WebAssembly.instantiate(Q,P)}catch(ee){k(`failed to asynchronously prepare wasm: ${ee}`),B(ee)}})(T,y)})(w),l(h.instance,h.module))}class Z{constructor(h){Dm(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var de=l=>{l.terminate(),l.onmessage=()=>{}},ve=[],fe=0,Ie=null,Se=l=>{Le.length==0&&(jh(),Hh(Le[0]));var h=Le.pop();if(!h)return 6;_t.push(h),ot[l.Rc]=h,h.Rc=l.Rc;var w={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return h.postMessage(w,l.rd),0},ye=0,se=(l,h,...w)=>{var y,T=16*w.length,E=he(),R=za(T),P=R>>>3;for(y of w)typeof y=="bigint"?((v(),ae)[P++>>>0]=1n,(v(),ae)[P++>>>0]=y):((v(),ae)[P++>>>0]=0n,(v(),K)[P++>>>0]=y);return l=qf(l,0,T,R,h),pe(E),l};function _e(l){if(i)return se(0,1,l);if(g=l,!(0<ye)){for(var h of _t)de(h);for(h of Le)de(h);Le=[],_t=[],ot={},C=!0}d(0,new Z(l))}function Ue(l){if(i)return se(1,0,l);Oe(l)}var Oe=l=>{if(g=l,i)throw Ue(l),"unwind";_e(l)},Le=[],_t=[],jt=[],ot={},Vh=l=>{var h=l.Rc;delete ot[h],Le.push(l),_t.splice(_t.indexOf(l),1),l.Rc=0,Gf(h)};function Fh(){jt.forEach(l=>l())}var Hh=l=>new Promise(h=>{l.onmessage=T=>{var E=T.data;if(T=E.Sc,E.Zc&&E.Zc!=yr()){var R=ot[E.Zc];R?R.postMessage(E,E.rd):k(`Internal error! Worker sent a message "${T}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else T==="checkMailbox"?cr():T==="spawnThread"?Se(E):T==="cleanupThread"?dr(()=>{Vh(ot[E.Nd])}):T==="loaded"?(l.loaded=!0,h(l)):E.target==="setimmediate"?l.postMessage(E):T==="uncaughtException"?l.onerror(E.error):T==="callHandler"?t[E.wd](...E.args):T&&k(`worker sent an unknown command ${T}`)},l.onerror=T=>{throw k(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var w,y=[];for(w of[])t.propertyIsEnumerable(w)&&y.push(w);l.postMessage({Sc:"load",xd:y,Od:kt,Pd:m})});function jh(){var l=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Le.push(l)}var kt,ww=(l,h)=>{ye=0,l=Oa(l,h),0<ye?g=l:Aa(l)},or=[],ur=0;function bw(l){var h=new ga(l>>>=0);return(v(),N)[h.Tc+12>>>0]==0&&(Kh(h,!0),ur--),Xh(h,!1),or.push(h),Kf(l)}var sn=0,$w=()=>{me(0,0);var l=or.pop();Hf(l.cd),sn=0};function Kh(l,h){h=h?1:0,(v(),N)[l.Tc+12>>>0]=h}function Xh(l,h){h=h?1:0,(v(),N)[l.Tc+13>>>0]=h}class ga{constructor(h){this.cd=h,this.Tc=h-24}}var ya=l=>{var h=sn;if(!h)return An(0),0;var w=new ga(h);(v(),G)[w.Tc+16>>>2>>>0]=h;var y=(v(),G)[w.Tc+4>>>2>>>0];if(!y)return An(0),h;for(var T of l){if(T===0||T===y)break;if(jf(T,y,w.Tc+16))return An(T),h}return An(y),h};function xw(){return ya([])}function vw(l){return ya([l>>>0])}function Sw(l,h,w,y){return ya([l>>>0,h>>>0,w>>>0,y>>>0])}var Iw=()=>{var l=or.pop();l||B("no exception to throw");var h=l.cd;throw(v(),N)[l.Tc+13>>>0]==0&&(or.push(l),Xh(l,!0),Kh(l,!1),ur++),Ra(h),sn=h};function Tw(l,h,w){var y=new ga(l>>>=0);throw h>>>=0,w>>>=0,(v(),G)[y.Tc+16>>>2>>>0]=0,(v(),G)[y.Tc+4>>>2>>>0]=h,(v(),G)[y.Tc+8>>>2>>>0]=w,Ra(l),ur++,sn=l}var kw=()=>ur;function Yh(l,h,w,y){return i?se(2,1,l,h,w,y):Zh(l,h,w,y)}function Zh(l,h,w,y){if(l>>>=0,h>>>=0,w>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var T=[];return i&&T.length===0?Yh(l,h,w,y):(l={Ld:w,Rc:l,bd:y,rd:T},i?(l.Sc="spawnThread",postMessage(l,T),0):Se(l))}function Ew(l){throw sn||(sn=l>>>0),sn}var Qh=globalThis.TextDecoder&&new TextDecoder,Jh=(l,h,w,y)=>{if(w=h+w,y)return w;for(;l[h]&&!(h>=w);)++h;return h},ef=(l,h=0,w,y)=>{if(16<(w=Jh(l,h>>>=0,w,y))-h&&l.buffer&&Qh)return Qh.decode(l.buffer instanceof ArrayBuffer?l.subarray(h,w):l.slice(h,w));for(y="";h<w;){var T=l[h++];if(128&T){var E=63&l[h++];if((224&T)==192)y+=String.fromCharCode((31&T)<<6|E);else{var R=63&l[h++];65536>(T=(240&T)==224?(15&T)<<12|E<<6|R:(7&T)<<18|E<<12|R<<6|63&l[h++])?y+=String.fromCharCode(T):(T-=65536,y+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else y+=String.fromCharCode(T)}return y},ze=(l,h,w)=>(l>>>=0)?ef((v(),F),l,h,w):"";function tf(l,h,w){return i?se(3,1,l,h,w):0}function nf(l,h){if(i)return se(4,1,l,h)}function rf(l,h){if(i)return se(5,1,l,h)}function af(l,h,w){if(i)return se(6,1,l,h,w)}function sf(l,h,w){return i?se(7,1,l,h,w):0}function of(l,h){if(i)return se(8,1,l,h)}function uf(l,h,w){if(i)return se(9,1,l,h,w)}function lf(l,h,w,y){if(i)return se(10,1,l,h,w,y)}function df(l,h,w,y){if(i)return se(11,1,l,h,w,y)}function cf(l,h,w,y){if(i)return se(12,1,l,h,w,y)}function pf(l){if(i)return se(13,1,l)}function hf(l,h){if(i)return se(14,1,l,h)}function ff(l,h,w){if(i)return se(15,1,l,h,w)}var Cw=()=>B(""),ut=l=>{l>>>=0;for(var h="";;){var w=(v(),F)[l++>>>0];if(!w)return h;h+=String.fromCharCode(w)}},_a={},wa={},on=class extends Error{constructor(l){super(l),this.name="BindingError"}};function wt(l,h,w={}){return(function(y,T,E={}){var R=T.name;if(!y)throw new on(`type "${R}" must have a positive integer typeid pointer`);if(wa.hasOwnProperty(y)){if(E.yd)return;throw new on(`Cannot register type '${R}' twice`)}wa[y]=T,_a.hasOwnProperty(y)&&(T=_a[y],delete _a[y],T.forEach(P=>P()))})(l,h,w)}var mf=(l,h,w)=>{switch(h){case 1:return w?y=>(v(),N)[y>>>0]:y=>(v(),F)[y>>>0];case 2:return w?y=>(v(),L)[y>>>1>>>0]:y=>(v(),V)[y>>>1>>>0];case 4:return w?y=>(v(),A)[y>>>2>>>0]:y=>(v(),G)[y>>>2>>>0];case 8:return w?y=>(v(),ae)[y>>>3>>>0]:y=>(v(),U)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${l}`)}};function Mw(l,h,w,y,T){l>>>=0,w>>>=0,h=ut(h>>>0);let E=R=>R;if(y=y===0n){let R=8*w;E=P=>BigInt.asUintN(R,P),T=E(T)}wt(l,{name:h,Oc:E,Vc:(R,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:mf(h,w,!y),Wc:null})}function Aw(l,h,w,y){wt(l>>>=0,{name:h=ut(h>>>0),Oc:function(T){return!!T},Vc:function(T,E){return E?w:y},Uc:function(T){return this.Oc((v(),F)[T>>>0])},Wc:null})}var gf=[],Kt=[0,1,,1,null,1,!0,1,!1,1];function ba(l){9<(l>>>=0)&&--Kt[l+1]===0&&(Kt[l]=void 0,gf.push(l))}var Ke=l=>{if(!l)throw new on(`Cannot use deleted val. handle = ${l}`);return Kt[l]},rt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=gf.pop()||Kt.length;return Kt[h]=l,Kt[h+1]=1,h}};function $a(l){return this.Oc((v(),G)[l>>>2>>>0])}var zw={name:"emscripten::val",Oc:l=>{var h=Ke(l);return ba(l),h},Vc:(l,h)=>rt(h),Uc:$a,Wc:null};function Rw(l){return wt(l>>>0,zw)}var Ow=(l,h)=>{switch(h){case 4:return function(w){return this.Oc((v(),H)[w>>>2>>>0])};case 8:return function(w){return this.Oc((v(),K)[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${l}`)}};function Bw(l,h,w){w>>>=0,wt(l>>>=0,{name:h=ut(h>>>0),Oc:y=>y,Vc:(y,T)=>T,Uc:Ow(h,w),Wc:null})}function Nw(l,h,w,y,T){l>>>=0,w>>>=0,h=ut(h>>>0);let E=P=>P;if(y===0){var R=32-8*w;E=P=>P<<R>>>R,T=E(T)}wt(l,{name:h,Oc:E,Vc:(P,Q)=>Q,Uc:mf(h,w,y!==0),Wc:null})}function Dw(l,h,w){function y(E){var R=(v(),G)[E>>>2>>>0];return E=(v(),G)[E+4>>>2>>>0],new T((v(),N).buffer,E,R)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];wt(l>>>=0,{name:w=ut(w>>>0),Oc:y,Uc:y},{yd:!0})}var Et=(l,h,w)=>{var y=(v(),F);if(h>>>=0,0<w){var T=h;w=h+w-1;for(var E=0;E<l.length;++E){var R=l.codePointAt(E);if(127>=R){if(h>=w)break;y[h++>>>0]=R}else if(2047>=R){if(h+1>=w)break;y[h++>>>0]=192|R>>6,y[h++>>>0]=128|63&R}else if(65535>=R){if(h+2>=w)break;y[h++>>>0]=224|R>>12,y[h++>>>0]=128|R>>6&63,y[h++>>>0]=128|63&R}else{if(h+3>=w)break;y[h++>>>0]=240|R>>18,y[h++>>>0]=128|R>>12&63,y[h++>>>0]=128|R>>6&63,y[h++>>>0]=128|63&R,E++}}y[h>>>0]=0,l=h-T}else l=0;return l},lr=l=>{for(var h=0,w=0;w<l.length;++w){var y=l.charCodeAt(w);127>=y?h++:2047>=y?h+=2:55296<=y&&57343>=y?(h+=4,++w):h+=3}return h};function Uw(l,h){wt(l>>>=0,{name:h=ut(h>>>0),Oc(w){var y=(v(),G)[w>>>2>>>0];return y=ze(w+4,y,!0),dt(w),y},Vc(w,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var T=typeof y=="string";if(!(T||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new on("Cannot pass non-string to std::string");var E=T?lr(y):y.length,R=Mn(4+E+1),P=R+4;return(v(),G)[R>>>2>>>0]=E,T?Et(y,P,E+1):(v(),F).set(y,P>>>0),w!==null&&w.push(dt,R),R},Uc:$a,Wc(w){dt(w)}})}var yf=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Pw=(l,h,w)=>{if(l>>>=1,16<(h=Jh((v(),V),l,h/2,w))-l&&yf)return yf.decode((v(),V).slice(l,h));for(w="";l<h;++l){var y=(v(),V)[l>>>0];w+=String.fromCharCode(y)}return w},Lw=(l,h,w)=>{if(w??(w=2147483647),2>w)return 0;var y=h;w=(w-=2)<2*l.length?w/2:l.length;for(var T=0;T<w;++T){var E=l.charCodeAt(T);(v(),L)[h>>>1>>>0]=E,h+=2}return(v(),L)[h>>>1>>>0]=0,h-y},qw=l=>2*l.length,Gw=(l,h,w)=>{var y="";l>>>=2;for(var T=0;!(T>=h/4);T++){var E=(v(),G)[l+T>>>0];if(!E&&!w)break;y+=String.fromCodePoint(E)}return y},Ww=(l,h,w)=>{if(h>>>=0,w??(w=2147483647),4>w)return 0;var y=h;w=y+w-4;for(var T=0;T<l.length;++T){var E=l.codePointAt(T);if(65535<E&&T++,(v(),A)[h>>>2>>>0]=E,(h+=4)+4>w)break}return(v(),A)[h>>>2>>>0]=0,h-y},Vw=l=>{for(var h=0,w=0;w<l.length;++w)65535<l.codePointAt(w)&&w++,h+=4;return h};function Fw(l,h,w){if(l>>>=0,h>>>=0,w=ut(w>>>=0),h===2)var y=Pw,T=Lw,E=qw;else y=Gw,T=Ww,E=Vw;wt(l,{name:w,Oc:R=>{var P=(v(),G)[R>>>2>>>0];return P=y(R+4,P*h,!0),dt(R),P},Vc:(R,P)=>{if(typeof P!="string")throw new on(`Cannot pass non-string to C++ string type ${w}`);var Q=E(P),ee=Mn(4+Q+h);return(v(),G)[ee>>>2>>>0]=Q/h,T(P,ee+4,Q+h),R!==null&&R.push(dt,ee),ee},Uc:$a,Wc(R){dt(R)}})}function Hw(l,h){wt(l>>>=0,{zd:!0,name:h=ut(h>>>0),Oc:()=>{},Vc:()=>{}})}function jw(l){Ma(l>>>0,!r,1,!n,131072,!1),Fh()}var dr=l=>{if(!C)try{if(l(),!(0<ye))try{i?yr()&&Aa(g):Oe(g)}catch(h){h instanceof Z||h=="unwind"||d(0,h)}}catch(h){h instanceof Z||h=="unwind"||d(0,h)}},Kw=!Atomics.waitAsync||((Nm=globalThis.navigator)==null?void 0:Nm.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function xa(l){l>>>=0,Kw||(Atomics.waitAsync((v(),A),l>>>2,l).value.then(cr),l+=128,Atomics.store((v(),A),l>>>2,1))}var cr=()=>dr(()=>{var l=yr();l&&(xa(l),Vf())});function Xw(l,h){(l>>>=0)==h>>>0?setTimeout(cr):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=ot[l])&&l.postMessage({Sc:"checkMailbox"})}var va=[];function Yw(l,h,w,y,T){for(h>>>=0,T>>>=0,va.length=0,w=T>>>3,y=T+y>>>3;w<y;){var E;E=(v(),ae)[w++>>>0]?(v(),ae)[w++>>>0]:(v(),K)[w++>>>0],va.push(E)}return(h?Ba[h]:Lb[l])(...va)}var Zw=()=>{ye=0};function Qw(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):Vh(ot[l])}function Jw(l){}var pr=l=>{try{l()}catch(h){B(h)}};function eb(l){var h=(...w)=>{hr.push(l);try{return l(...w)}finally{C||(hr.pop(),lt&&Ct===1&&hr.length===0&&(Ct=0,ye+=1,pr(zm),typeof Fibers<"u"&&Fibers.Zd()))}};return bf.set(l,h),h}var Ct=0,lt=null,_f=0,hr=[],Sa=new Map,wf=new Map,bf=new Map,tb=0,Ia=null,nb=[],$f=l=>(function(h){if(!C){if(Ct===0){var w=!1,y=!1;h((T=0)=>{if(!C&&(_f=T,w=!0,y)){Ct=2,pr(()=>Rm(lt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),T=!1;try{var E=(function(){var Q=(v(),A)[lt+8>>>2>>>0];return Q=wf.get(Q),Q=bf.get(Q),--ye,Q()})()}catch(Q){E=Q,T=!0}var R=!1;if(!lt){var P=Ia;P&&(Ia=null,(T?P.reject:P.resolve)(E),R=!0)}if(T&&!R)throw E}}),y=!0,w||(Ct=1,lt=(function(){var T=Mn(65548),E=T+12;if((v(),G)[T>>>2>>>0]=E,(v(),G)[T+4>>>2>>>0]=E+65536,E=hr[0],!Sa.has(E)){var R=tb++;Sa.set(E,R),wf.set(R,E)}return E=Sa.get(E),(v(),A)[T+8>>>2>>>0]=E,T})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),pr(()=>Am(lt)))}else Ct===2?(Ct=0,pr(Om),dt(lt),lt=null,nb.forEach(dr)):B(`invalid state: ${Ct}`);return _f}})(h=>{l().then(h)});function rb(l){return l>>>=0,$f(async()=>{var h=await Ke(l);return rt(h)})}var Ta=[],ib=l=>{var h=Ta.length;return Ta.push(l),h},ab=(l,h)=>{for(var w=Array(l),y=0;y<l;++y){var T=y,E=(v(),G)[h+4*y>>>2>>>0],R=wa[E];if(R===void 0)throw l=`parameter ${y}`,E=Uf(E),h=ut(E),dt(E),new on(`${l} has unknown type ${h}`);w[T]=R}return w},sb=(l,h,w)=>{var y=[];return l=l(y,w),y.length&&((v(),G)[h>>>2>>>0]=rt(y)),l},ob={},fr=l=>{var h=ob[l];return h===void 0?ut(l):h};function ub(l,h,w){var[y,...T]=ab(l,h>>>0);h=y.Vc.bind(y);var E=T.map(Q=>Q.Uc.bind(Q));l--;var R={toValue:Ke};switch(l=E.map((Q,ee)=>{var ce=`argFromPtr${ee}`;return R[ce]=Q,`${ce}(args${ee?"+"+8*ee:""})`}),w){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:R.getStringOrSymbol=fr,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${l})`,y.zd||(R.toReturnWire=h,R.emval_returnValue=sb,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,w=new Function(Object.keys(R),P)(...Object.values(R)),P=`methodCaller<(${T.map(Q=>Q.name)}) => ${y.name}>`,ib(Object.defineProperty(w,"name",{value:P}))}function lb(l,h){return h>>>=0,(l=Ke(l>>>0))==Ke(h)}function db(l){return(l>>>=0)?(l=fr(l),rt(globalThis[l])):rt(globalThis)}function cb(l){return l=fr(l>>>0),rt(t[l])}function pb(l,h){return h>>>=0,l=Ke(l>>>0),h=Ke(h),rt(l[h])}function hb(l){9<(l>>>=0)&&(Kt[l+1]+=1)}function xf(l,h,w,y,T){return Ta[l>>>0](h>>>0,w>>>0,y>>>0,T>>>0)}function fb(l,h,w,y,T){return xf(l>>>0,h>>>0,w>>>0,y>>>0,T>>>0)}function mb(){return rt([])}function gb(l){l=Ke(l>>>0);for(var h=Array(l.length),w=0;w<l.length;w++)h[w]=l[w];return rt(h)}function yb(l){return rt(fr(l>>>0))}function _b(){return rt({})}function wb(l){for(var h=Ke(l>>>=0);h.length;){var w=h.pop();h.pop()(w)}ba(l)}function bb(l,h,w){h>>>=0,w>>>=0,l=Ke(l>>>0),h=Ke(h),w=Ke(w),l[h]=w}function $b(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),A)[h>>>2>>>0]=l.getUTCSeconds(),(v(),A)[h+4>>>2>>>0]=l.getUTCMinutes(),(v(),A)[h+8>>>2>>>0]=l.getUTCHours(),(v(),A)[h+12>>>2>>>0]=l.getUTCDate(),(v(),A)[h+16>>>2>>>0]=l.getUTCMonth(),(v(),A)[h+20>>>2>>>0]=l.getUTCFullYear()-1900,(v(),A)[h+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[h+28>>>2>>>0]=l}var vf=l=>l%4==0&&(l%100!=0||l%400==0),Sf=[0,31,60,91,121,152,182,213,244,274,305,335],If=[0,31,59,90,120,151,181,212,243,273,304,334];function xb(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),A)[h>>>2>>>0]=l.getSeconds(),(v(),A)[h+4>>>2>>>0]=l.getMinutes(),(v(),A)[h+8>>>2>>>0]=l.getHours(),(v(),A)[h+12>>>2>>>0]=l.getDate(),(v(),A)[h+16>>>2>>>0]=l.getMonth(),(v(),A)[h+20>>>2>>>0]=l.getFullYear()-1900,(v(),A)[h+24>>>2>>>0]=l.getDay();var w=(vf(l.getFullYear())?Sf:If)[l.getMonth()]+l.getDate()-1|0;(v(),A)[h+28>>>2>>>0]=w,(v(),A)[h+36>>>2>>>0]=-60*l.getTimezoneOffset(),w=new Date(l.getFullYear(),6,1).getTimezoneOffset();var y=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(w!=y&&l.getTimezoneOffset()==Math.min(y,w)),(v(),A)[h+32>>>2>>>0]=l}function vb(l){l>>>=0;var h=new Date((v(),A)[l+20>>>2>>>0]+1900,(v(),A)[l+16>>>2>>>0],(v(),A)[l+12>>>2>>>0],(v(),A)[l+8>>>2>>>0],(v(),A)[l+4>>>2>>>0],(v(),A)[l>>>2>>>0],0),w=(v(),A)[l+32>>>2>>>0],y=h.getTimezoneOffset(),T=new Date(h.getFullYear(),6,1).getTimezoneOffset(),E=new Date(h.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(E,T);return 0>w?(v(),A)[l+32>>>2>>>0]=+(T!=E&&R==y):0<w!=(R==y)&&(T=Math.max(E,T),h.setTime(h.getTime()+6e4*((0<w?R:T)-y))),(v(),A)[l+24>>>2>>>0]=h.getDay(),w=(vf(h.getFullYear())?Sf:If)[h.getMonth()]+h.getDate()-1|0,(v(),A)[l+28>>>2>>>0]=w,(v(),A)[l>>>2>>>0]=h.getSeconds(),(v(),A)[l+4>>>2>>>0]=h.getMinutes(),(v(),A)[l+8>>>2>>>0]=h.getHours(),(v(),A)[l+12>>>2>>>0]=h.getDate(),(v(),A)[l+16>>>2>>>0]=h.getMonth(),(v(),A)[l+20>>>2>>>0]=h.getYear(),l=h.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Tf(l,h,w,y,T,E,R){return i?se(16,1,l,h,w,y,T,E,R):-52}function kf(l,h,w,y,T,E){if(i)return se(17,1,l,h,w,y,T,E)}var Cn={},Sb=()=>performance.timeOrigin+performance.now();function Ef(l,h){if(i)return se(18,1,l,h);if(Cn[l]&&(clearTimeout(Cn[l].id),delete Cn[l]),!h)return 0;var w=setTimeout(()=>{delete Cn[l],dr(()=>Wf(l,performance.timeOrigin+performance.now()))},h);return Cn[l]={id:w,Yd:h},0}function Ib(l,h,w,y){l>>>=0,h>>>=0,w>>>=0,y>>>=0;var T=new Date().getFullYear(),E=new Date(T,0,1).getTimezoneOffset();T=new Date(T,6,1).getTimezoneOffset();var R=Math.max(E,T);(v(),G)[l>>>2>>>0]=60*R,(v(),A)[h>>>2>>>0]=+(E!=T),l=(h=P=>{var Q=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(Q/60)).padStart(2,"0")}${String(Q%60).padStart(2,"0")}`})(E),h=h(T),T<E?(Et(l,w,17),Et(h,y,17)):(Et(l,y,17),Et(h,w,17))}var Tb=()=>Date.now();function kb(l,h,w){return w>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(v(),ae)[w>>>3>>>0]=BigInt(l),0):28}var ka=[],Cf=(l,h)=>{ka.length=0;for(var w;w=(v(),F)[l++>>>0];){var y=w!=105;h+=(y&=w!=112)&&h%8?4:0,ka.push(w==112?(v(),G)[h>>>2>>>0]:w==106?(v(),ae)[h>>>3>>>0]:w==105?(v(),A)[h>>>2>>>0]:(v(),K)[h>>>3>>>0]),h+=y?8:4}return ka};function Eb(l,h,w){return l>>>=0,h=Cf(h>>>0,w>>>0),Ba[l](...h)}function Cb(l,h,w){return l>>>=0,h=Cf(h>>>0,w>>>0),Ba[l](...h)}var Mb=()=>{};function Ab(l,h){return k(ze(l>>>0,h>>>0))}var zb=()=>{throw ye+=1,"unwind"};function Rb(){return 4294901760}var Ob=()=>navigator.hardwareConcurrency,Xt={},mr=l=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+h[1]:0},Mf=l=>{for(var h of l)(l=mr(h))&&(Xt[l]=h)};function Bb(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Mf(l),Xt.gd=mr(l[3]),Xt.Jd=l,Xt.gd}function gr(l){if(!(l=Xt[l>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(l))l=h[1];else{if(!(h=/^(.+?)@/.exec(l)))return 0;l=h[1]}dt(gr.hd??0),h=lr(l)+1;var w=Mn(h);return w&&Et(l,w,h),gr.hd=w,gr.hd}function Nb(l){l>>>=0;var h=(v(),F).length;if(l<=h||4294901760<l)return!1;for(var w=1;4>=w;w*=2){var y=h*(1+.2/w);y=Math.min(y,l+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(l,y)/65536))-kt.buffer.byteLength+65535)/65536|0;try{kt.grow(y),Y();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}function Db(l,h,w){if(l>>>=0,h>>>=0,Xt.gd==l)var y=Xt.Jd;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),Mf(y);for(var T=3;y[T]&&mr(y[T])!=l;)++T;for(l=0;l<w&&y[l+T];++l)(v(),A)[h+4*l>>>2>>>0]=mr(y[l+T]);return l}var Ea,Ca={},Af=()=>{var y;if(!Ea){var l,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((y=globalThis.navigator)==null?void 0:y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Ca)Ca[l]===void 0?delete h[l]:h[l]=Ca[l];var w=[];for(l in h)w.push(`${l}=${h[l]}`);Ea=w}return Ea};function zf(l,h){if(i)return se(19,1,l,h);l>>>=0,h>>>=0;var w,y=0,T=0;for(w of Af()){var E=h+y;(v(),G)[l+T>>>2>>>0]=E,y+=Et(w,E,1/0)+1,T+=4}return 0}function Rf(l,h){if(i)return se(20,1,l,h);l>>>=0,h>>>=0;var w=Af();for(var y of((v(),G)[l>>>2>>>0]=w.length,l=0,w))l+=lr(y)+1;return(v(),G)[h>>>2>>>0]=l,0}function Of(l){return i?se(21,1,l):52}function Bf(l,h,w,y){return i?se(22,1,l,h,w,y):52}function Nf(l,h,w,y){return i?se(23,1,l,h,w,y):70}var Ub=[null,[],[]];function Df(l,h,w,y){if(i)return se(24,1,l,h,w,y);h>>>=0,w>>>=0,y>>>=0;for(var T=0,E=0;E<w;E++){var R=(v(),G)[h>>>2>>>0],P=(v(),G)[h+4>>>2>>>0];h+=8;for(var Q=0;Q<P;Q++){var ee=l,ce=(v(),F)[R+Q>>>0],we=Ub[ee];ce===0||ce===10?((ee===1?S:k)(ef(we)),we.length=0):we.push(ce)}T+=P}return(v(),G)[y>>>2>>>0]=T,0}function Pb(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)jh();ve.push(async()=>{var h=(async function(){if(!i)return Promise.all(Le.map(Hh))})();fe++,await h,--fe==0&&Ie&&(h=Ie,Ie=null,h())})})(),i||(kt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Y()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>he(),t.stackRestore=l=>pe(l),t.stackAlloc=l=>za(l),t.setValue=function(l,h,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":case"i8":(v(),N)[l>>>0]=h;break;case"i16":(v(),L)[l>>>1>>>0]=h;break;case"i32":(v(),A)[l>>>2>>>0]=h;break;case"i64":(v(),ae)[l>>>3>>>0]=BigInt(h);break;case"float":(v(),H)[l>>>2>>>0]=h;break;case"double":(v(),K)[l>>>3>>>0]=h;break;case"*":(v(),G)[l>>>2>>>0]=h;break;default:B(`invalid type for setValue: ${w}`)}},t.getValue=function(l,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),N)[l>>>0];case"i16":return(v(),L)[l>>>1>>>0];case"i32":return(v(),A)[l>>>2>>>0];case"i64":return(v(),ae)[l>>>3>>>0];case"float":return(v(),H)[l>>>2>>>0];case"double":return(v(),K)[l>>>3>>>0];case"*":return(v(),G)[l>>>2>>>0];default:B(`invalid type for getValue: ${h}`)}},t.UTF8ToString=ze,t.stringToUTF8=Et,t.lengthBytesUTF8=lr;var Uf,Pf,yr,dt,Mn,Ma,Lf,qf,Gf,Aa,Wf,Vf,me,An,Ff,pe,za,he,Hf,Ra,jf,Kf,Xf,Oa,Yf,Zf,Qf,Jf,em,tm,nm,rm,im,am,sm,om,um,lm,dm,cm,pm,hm,fm,mm,gm,ym,_m,wm,bm,$m,xm,vm,Sm,Im,Tm,km,Em,Cm,Mm,Am,zm,Rm,Om,bt,Lb=[_e,Ue,Yh,tf,nf,rf,af,sf,of,uf,lf,df,cf,pf,hf,ff,Tf,kf,Ef,zf,Rf,Of,Bf,Nf,Df],Ba={1003524:(l,h,w,y,T)=>{if(t===void 0||!t.Xc)return 1;if((l=ze(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(h=Number(h>>>0),w=Number(w>>>0),y=Number(y>>>0),h+w>l.byteLength)return 3;try{let E=l.subarray(h,h+w);switch(T){case 0:(v(),F).set(E,y>>>0);break;case 1:t.Qd?t.Qd(y,E):t.Id(y,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,h,w)=>{t.td(l,(v(),F).subarray(h>>>0,h+w>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w),!0)},1004704:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,h,w)=>{t.$b("HardSigmoid",l,{alpha:h,beta:w})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,h,w)=>{t.$b("Clip",l,{min:h,max:w})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,h)=>{t.$b("Elu",l,{alpha:h})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,h)=>{t.$b("LeakyRelu",l,{alpha:h})},1006444:(l,h)=>{t.$b("ThresholdedRelu",l,{alpha:h})},1006514:(l,h)=>{t.$b("Cast",l,{to:h})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,h,w,y,T)=>{t.$b("ReduceMean",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007283:(l,h,w,y,T)=>{t.$b("ReduceMax",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007457:(l,h,w,y,T)=>{t.$b("ReduceMin",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007631:(l,h,w,y,T)=>{t.$b("ReduceProd",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007806:(l,h,w,y,T)=>{t.$b("ReduceSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007980:(l,h,w,y,T)=>{t.$b("ReduceL1",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008153:(l,h,w,y,T)=>{t.$b("ReduceL2",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008326:(l,h,w,y,T)=>{t.$b("ReduceLogSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008503:(l,h,w,y,T)=>{t.$b("ReduceSumSquare",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008683:(l,h,w,y,T)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,h,w)=>{t.$b("Transpose",l,{perm:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[]})},1009040:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:ze(w),format:y?"NHWC":"NCHW"})},1009173:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:ze(w),format:y?"NHWC":"NCHW"})},1009306:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Mt)=>{t.$b("ConvTranspose",l,{format:Q?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[T],pads:[E,R],strides:[P],wIsConst:()=>!!(v(),N)[ee>>>0],outputPadding:ce?Array.from((v(),A).subarray(Number(ce)>>>0,Number(we)>>>0)):[],outputShape:Te?Array.from((v(),A).subarray(Number(Te)>>>0,Number(Ce)>>>0)):[],activation:ze(Mt)})},1009739:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),A).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[Q>>>0],outputPadding:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],outputShape:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[],activation:ze(Ce)})},1010400:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Mt)=>{t.$b("ConvTranspose",l,{format:Q?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[T],pads:[E,R],strides:[P],wIsConst:()=>!!(v(),N)[ee>>>0],outputPadding:ce?Array.from((v(),A).subarray(Number(ce)>>>0,Number(we)>>>0)):[],outputShape:Te?Array.from((v(),A).subarray(Number(Te)>>>0,Number(Ce)>>>0)):[],activation:ze(Mt)})},1010833:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),A).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[Q>>>0],outputPadding:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],outputShape:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[],activation:ze(Ce)})},1011494:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1011585:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("AveragePool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1012064:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1012155:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("AveragePool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1012634:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1012721:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("MaxPool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1013196:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1013283:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("MaxPool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1013758:(l,h,w,y,T)=>{t.$b("Gemm",l,{alpha:h,beta:w,transA:y,transB:T})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,h,w,y)=>{t.$b("ArgMax",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014024:(l,h,w,y)=>{t.$b("ArgMin",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014132:(l,h)=>{t.$b("Softmax",l,{axis:h})},1014195:(l,h)=>{t.$b("Concat",l,{axis:h})},1014255:(l,h,w,y,T)=>{t.$b("Split",l,{axis:h,numOutputs:w,splitSizes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,h)=>{t.$b("Gather",l,{axis:Number(h)})},1014536:(l,h)=>{t.$b("GatherElements",l,{axis:Number(h)})},1014615:(l,h)=>{t.$b("GatherND",l,{batch_dims:Number(h)})},1014694:(l,h,w,y,T,E,R,P,Q,ee,ce)=>{t.$b("Resize",l,{antialias:h,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],coordinateTransformMode:ze(T),cubicCoeffA:E,excludeOutside:R,extrapolationValue:P,keepAspectRatioPolicy:ze(Q),mode:ze(ee),nearestMode:ze(ce)})},1015056:(l,h,w,y,T,E,R)=>{t.$b("Slice",l,{starts:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[],ends:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[],axes:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015486:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,h)=>{t.$b("Einsum",l,{equation:ze(h)})},1015734:(l,h,w,y,T)=>{t.$b("Pad",l,{mode:h,value:w,pads:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1015877:(l,h,w,y,T,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!T,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016046:(l,h,w,y,T,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!T,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016215:(l,h,w)=>{t.$b("CumSum",l,{exclusive:Number(h),reverse:Number(w)})},1016312:(l,h,w)=>{t.$b("DequantizeLinear",l,{axis:h,blockSize:w})},1016402:(l,h,w,y,T)=>{t.$b("GridSample",l,{align_corners:h,mode:ze(w),padding_mode:ze(y),format:T?"NHWC":"NCHW"})},1016572:(l,h,w,y,T)=>{t.$b("GridSample",l,{align_corners:h,mode:ze(w),padding_mode:ze(y),format:T?"NHWC":"NCHW"})},1016742:(l,h)=>{t.$b("ScatterND",l,{reduction:ze(h)})},1016827:(l,h,w,y,T,E,R,P,Q)=>{t.$b("Attention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:T,doRotary:E,qkvHiddenSizes:R?Array.from((v(),A).subarray(Number(P)>>>0,Number(P)+R>>>0)):[],pastPresentShareBuffer:!!Q})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Mt,Na)=>{t.$b("Conv",l,{format:we?"NHWC":"NCHW",auto_pad:h,dilations:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],group:T,kernel_shape:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:P?Array.from((v(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],strides:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Te)>>>0],activation:ze(Ce),activation_params:Mt?Array.from((v(),H).subarray(Number(Mt)>>>0,Number(Na)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,h,w,y,T,E,R,P,Q)=>{t.$b("GroupQueryAttention",l,{numHeads:h,kvNumHeads:w,scale:y,softcap:T,doRotary:E,rotaryInterleaved:R,smoothSoftmax:P,localWindowSize:Q})},1018124:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018235:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018346:(l,h,w,y,T,E)=>{t.$b("MatMulNBits",l,{k:h,n:w,accuracyLevel:y,bits:T,blockSize:E})},1018473:(l,h,w,y,T,E)=>{t.$b("MultiHeadAttention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:T,doRotary:E})},1018632:(l,h)=>{t.$b("QuickGelu",l,{alpha:h})},1018696:(l,h,w,y,T)=>{t.$b("RotaryEmbedding",l,{interleaved:!!h,numHeads:w,rotaryEmbeddingDim:y,scale:T})},1018835:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1018937:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1019039:(l,h,w,y)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:h,quantizeAxis:w,blockSize:y})},1019160:l=>{t.Fd(l)},1019194:(l,h)=>t.Hd(Number(l),Number(h),t.Yc.Kd,t.Yc.errors)};function qb(l,h,w){return $f(async()=>{await t.Dd(Number(l),Number(h),Number(w))})}function Gb(){return typeof wasmOffsetConverter<"u"}function Wb(l,h,w,y){var T=he();try{return rm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function Vb(l,h,w){var y=he();try{return Jf(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function Fb(l){var h=he();try{Yf(l)}catch(w){if(pe(h),w!==w+0)throw w;me(1,0)}}function Hb(l,h){var w=he();try{return Oa(l,h)}catch(y){if(pe(w),y!==y+0)throw y;me(1,0)}}function jb(l,h,w){var y=he();try{Xf(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function Kb(l,h){var w=he();try{im(l,h)}catch(y){if(pe(w),y!==y+0)throw y;me(1,0)}}function Xb(l,h,w,y,T,E,R){var P=he();try{return tm(l,h,w,y,T,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function Yb(l,h,w,y,T,E){var R=he();try{Zf(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function Zb(l,h,w,y){var T=he();try{nm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function Qb(l,h,w,y,T){var E=he();try{Qf(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function Jb(l,h,w,y,T,E,R){var P=he();try{sm(l,h,w,y,T,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function e1(l,h,w,y,T,E,R){var P=he();try{om(l,h,w,y,T,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function t1(l,h,w,y,T,E,R,P){var Q=he();try{cm(l,h,w,y,T,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function n1(l,h,w,y,T){var E=he();try{return am(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function r1(l,h,w){var y=he();try{return pm(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function i1(l,h,w,y,T,E,R,P){var Q=he();try{hm(l,h,w,y,T,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function a1(l,h,w,y,T,E,R,P,Q,ee,ce,we){var Te=he();try{um(l,h,w,y,T,E,R,P,Q,ee,ce,we)}catch(Ce){if(pe(Te),Ce!==Ce+0)throw Ce;me(1,0)}}function s1(l,h,w,y,T,E){var R=he();try{return lm(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function o1(l,h,w){var y=he();try{return fm(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;return me(1,0),0n}}function u1(l,h,w,y,T,E,R,P,Q){var ee=he();try{em(l,h,w,y,T,E,R,P,Q)}catch(ce){if(pe(ee),ce!==ce+0)throw ce;me(1,0)}}function l1(l){var h=he();try{return mm(l)}catch(w){if(pe(h),w!==w+0)throw w;me(1,0)}}function d1(l,h){var w=he();try{return Mm(l,h)}catch(y){if(pe(w),y!==y+0)throw y;return me(1,0),0n}}function c1(l){var h=he();try{return gm(l)}catch(w){if(pe(h),w!==w+0)throw w;return me(1,0),0n}}function p1(l,h,w,y){var T=he();try{return xm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function h1(l,h,w,y,T){var E=he();try{return vm(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function f1(l,h,w,y,T,E){var R=he();try{return Sm(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function m1(l,h,w,y,T,E){var R=he();try{return Im(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function g1(l,h,w,y,T,E,R,P){var Q=he();try{return dm(l,h,w,y,T,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function y1(l,h,w,y,T){var E=he();try{return Tm(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;return me(1,0),0n}}function _1(l,h,w,y){var T=he();try{return km(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function w1(l,h,w,y){var T=he();try{return Em(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function b1(l,h,w,y,T,E,R,P,Q,ee,ce,we){var Te=he();try{return Cm(l,h,w,y,T,E,R,P,Q,ee,ce,we)}catch(Ce){if(pe(Te),Ce!==Ce+0)throw Ce;me(1,0)}}function $1(l,h,w,y,T,E,R,P,Q,ee,ce){var we=he();try{bm(l,h,w,y,T,E,R,P,Q,ee,ce)}catch(Te){if(pe(we),Te!==Te+0)throw Te;me(1,0)}}function x1(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Mt,Na){var T1=he();try{$m(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Mt,Na)}catch(Da){if(pe(T1),Da!==Da+0)throw Da;me(1,0)}}function v1(l,h,w){var y=he();try{return ym(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function S1(l,h,w){var y=he();try{return _m(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function I1(l,h,w,y){var T=he();try{wm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function _r(){if(0<fe)Ie=_r;else if(i)_==null||_(t),z();else{for(var l=ve;0<l.length;)l.shift()(t);0<fe?Ie=_r:(t.calledRun=!0,C||(z(),_==null||_(t)))}}return i||(bt=await te(),_r()),t.PTR_SIZE=4,W?t:new Promise((l,h)=>{_=l,b=h})}var ss,os,ig=X(()=>{var e,t;ss=as,os=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),os&&as()}),kr,Er,us,Ve,ls,Bn,ds,cs,Cr,ps,Mr,hs,Ar,fs,zr=X(()=>{Sr(),kr=typeof location>"u"?void 0:location.origin,Er=self.location.href>"file:"&&self.location.href<"file;",us=()=>{{if(Er){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,kr).href}return self.location.href}},Ve=us(),ls=()=>{if(Ve&&!Ve.startsWith("blob:"))return Ve.substring(0,Ve.lastIndexOf("/")+1)},Bn=(e,t)=>{try{let n=t??Ve;return(n?new URL(e,n):new URL(e)).origin===kr}catch{return!1}},ds=(e,t)=>{let n=t??Ve;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},cs=(e,t)=>`${t??"./"}${e}`,Cr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ps=async e=>(await import(e)).default,Mr=(rg(),un(ns)).default,hs=async()=>{if(!Ve)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Bn(Ve))return[void 0,Mr()];let e=await Cr(Ve);return[e,Mr(e)]},Ar=(ig(),un(is)).default,fs=async(e,t,n,r)=>{let i=Ar&&!(e||t);if(i)if(Ve)i=Bn(Ve)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ar];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??ds(a,t),o=n&&s&&!Bn(s,t),u=o?await Cr(s):s??cs(a,t);return[o?u:void 0,await ps(u)]}}}),Rr,Nn,cn,Or,ms,gs,ys,Br,Ee,Ot=X(()=>{zr(),Nn=!1,cn=!1,Or=!1,ms=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},gs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ys=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Br=async e=>{if(Nn)return Promise.resolve();if(cn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Or)throw new Error("previous call to 'initializeWebAssembly()' failed.");cn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ys())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!gs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ms();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,c=e.wasmBinary,[p,f]=await fs(o,a,n>1,!!c||!!d),m=!1,g=[];if(t>0&&g.push(new Promise(_=>{setTimeout(()=>{m=!0,_()},t)})),g.push(new Promise((_,b)=>{let x={numThreads:n};if(c)x.wasmBinary=c,x.locateFile=$=>$;else if(d||a)x.locateFile=$=>d??a+$;else if(o&&o.indexOf("blob:")!==0)x.locateFile=$=>new URL($,o).href;else if(p){let $=ls();$&&(x.locateFile=I=>$+I)}f(x).then($=>{cn=!1,Nn=!0,Rr=$,_(),p&&URL.revokeObjectURL(p)},$=>{cn=!1,Or=!0,b($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ee=()=>{if(Nn&&Rr)return Rr;throw new Error("WebAssembly is not initialized yet.")}}),Ye,Dn,xe,Nr=X(()=>{Ot(),Ye=(e,t)=>{let n=Ee(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Dn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")Dn(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},xe=e=>{let t=Ee(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),_s,ag=X(()=>{Ot(),Nr(),_s=e=>{let t=Ee(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Ye(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&xe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Dn(e.extra,"",new WeakSet,(s,o)=>{let u=Ye(s,r),d=Ye(o,r);t._OrtAddRunConfigEntry(n,u,d)!==0&&xe(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),ws,bs,$s,Bt,xs,vs,sg=X(()=>{Ot(),Nr(),ws=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},bs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},$s=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Bt=(e,t,n,r)=>{let i=Ye(t,r),a=Ye(n,r);Ee()._OrtAddSessionConfigEntry(e,i,a)!==0&&xe(`Can't set a session config entry: ${t} - ${n}.`)},xs=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",Bt(e,"session.disable_quant_qdq","1",n),Bt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&Bt(e,"deviceType",p,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Bt(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Ye(a,n),u=s.length,d=0,c=0;if(u>0){d=Ee()._malloc(u*Ee().PTR_SIZE),n.push(d),c=Ee()._malloc(u*Ee().PTR_SIZE),n.push(c);for(let p=0;p<u;p++)Ee().setValue(d+p*Ee().PTR_SIZE,s[p][0],"*"),Ee().setValue(c+p*Ee().PTR_SIZE,s[p][1],"*")}await Ee()._OrtAppendExecutionProvider(e,o,d,c,u)!==0&&xe(`Can't append execution provider: ${a}.`)}},vs=async e=>{let t=Ee(),n=0,r=[],i=e||{};$s(i);try{let a=ws(i.graphOptimizationLevel??"all"),s=bs(i.executionMode??"sequential"),o=typeof i.logId=="string"?Ye(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?Ye(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,d,c),n===0&&xe("Can't create session options."),i.executionProviders&&await xs(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Bt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,f]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=Ye(p,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&xe(`Can't set a free dimension override: ${p} - ${f}.`)}return i.extra!==void 0&&Dn(i.extra,"",new WeakSet,(p,f)=>{Bt(n,p,f,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&xe("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),Nt,ht,Dt,Un,Pn,Dr,Ur,Pr,oe=X(()=>{Nt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ht=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Dt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Un=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Pn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Dr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ur=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Lr,Ss=X(()=>{Sr(),Lr=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Is,Ts,ks,Es,qr,Cs,ge,ft=X(()=>{oe(),Is=["V","I","W","E","F"],Ts=(e,t)=>{console.log(`[${Is[e]},${new Date().toISOString()}]${t}`)},qr=(e,t)=>{ks=e,Es=t},Cs=(e,t)=>{let n=Pn(e),r=Pn(ks);n>=r&&Ts(n,typeof t=="function"?t():t)},ge=(...e)=>{Es&&Cs(...e)}}),Ms,en,D,Ln,As,zs,Rs,ue=X(()=>{Ms=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},en=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=Ms.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let c=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(c>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class wr{static size(t){return wr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return wr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return wr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Ln=class zn{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)zn.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return zn.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return zn.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(zn.adjustPadAndReturnShape(n[d+2],i[d],a[d],s[d],o,d,d+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let d=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/n+1)}},As=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!en.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},zs=-34028234663852886e22,Rs=34028234663852886e22}),Gr,Os=X(()=>{oe(),Gr=(e,t)=>new(Un(t))(e)}),Wr,Vr,Fr,Bs,Hr,Ns,jr,Kr,Xr,Ds,Us,og=X(()=>{oe(),ft(),Wr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Vr=(e,t)=>{if(t==="int32")return e;let n=Wr.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Un(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Fr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Bs=1,Hr=()=>Bs++,Ns=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),jr=(e,t)=>{let n=Wr.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Kr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return jr(this.dataType,this.tensorShape)}destroy(){ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Fr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Xr=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Ns.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==jr(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Vr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Fr(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ds=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Hr();return this.tensorTrackersById.set(e,new Xr(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Hr(),s=new Kr({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Xr(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,n)){ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Kr({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Us=(...e)=>new Ds(...e)}),pn,Ps,Ls,ug=X(()=>{oe(),Ot(),Os(),og(),ft(),pn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ps=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Ls=class{constructor(e){this.tensorManager=Us(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,qr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Ps(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=pn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=pn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ee().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Gr(n,t)}}registerMLTensor(e,t,n,r){let i=pn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let p=Vr(new Uint8Array(d),"int64");c=new Int32Array(p.buffer),i.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ge("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=pn.get(Nt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Yr=X(()=>{}),Zr,qn,Gn,qs,Gs,Qr,Jr,Ws,Vs,lg=X(()=>{ft(),Yr(),Zr=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),qn=[],Gn=e=>Math.ceil(Number(e)/16)*16,qs=e=>{for(let t=0;t<qn.length;t++){let n=qn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Gs=1,Qr=()=>Gs++,Jr=async(e,t,n,r)=>{let i=Gn(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},Ws=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Zr)qn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Gn(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Gn(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Qr();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=qs(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:Qr(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Jr(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Zr.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Vs=(...e)=>new Ws(...e)}),Fs,$e,Ae=X(()=>{Fs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$e=e=>new Fs(e)}),tn,Wn,Re,De,ie,Me,ei,nn,xt,re,hn,q,ne,Hs,ti,js,Ks,le=X(()=>{oe(),ue(),tn=64,Wn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Re=(e,t=1)=>{let n=Wn(e,t);return typeof n=="string"?n:n[0]},De=(e,t=1)=>{let n=Wn(e,t);return typeof n=="string"?n:n[1]},ie=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},Me=e=>e%4===0?4:e%2===0?2:1,ei=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,nn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,xt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,hn=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Wn(t,i),c=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],f={indices:u,value:c,storage:p,tensor:t},m=W=>typeof W=="string"?W:`${W}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=a?"uniforms.":"",b=`${_}${e}_shape`,x=`${_}${e}_strides`,$="";for(let W=0;W<s-1;W++)$+=`
    let dim${W} = current / ${re(x,W,s)};
    let rest${W} = current % ${re(x,W,s)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;$+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=W=>(g.offsetToIndices=!0,s<2?W:`o2i_${e}(${W})`),k=[];if(s>=2)for(let W=s-1;W>=0;W--)k.push(`${re(x,W,s)} * (indices[${W}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,M=W=>(g.indicesToOffset=!0,s<2?W:`i2o_${e}(${W})`),v=(...W)=>s===0?"0u":`${f.indices}(${W.map(m).join(",")})`,O=(W,Y)=>s<2?`${W}`:`${re(W,Y,s)}`,N=(W,Y,z)=>s<2?`${W}=${z};`:`${re(W,Y,s)}=${z};`,F={},L=(W,Y)=>{g.broadcastedIndicesToOffset=!0;let z=`${Y.name}broadcastedIndicesTo${e}Offset`;if(z in F)return`${z}(${W})`;let B=[];for(let j=s-1;j>=0;j--){let te=Y.indicesGet("outputIndices",j+Y.rank-s);B.push(`${O(x,j)} * (${te} % ${O(b,j)})`)}return F[z]=`fn ${z}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${z}(${W})`},V=(W,Y)=>(()=>{if(f.storage===f.value)return`${e}[${W}]=${Y};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${Y}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=W=>(()=>{if(f.storage===f.value)return`${e}[${W}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${W}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${W}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),G=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${c} {
    return ${A(`i2o_${e}(indices)`)};
  }`,H=s<2?"":(()=>{let W=o.map(z=>`d${z}: u32`).join(", "),Y=o.map(z=>`d${z}`).join(", ");return`
  fn get_${e}(${W}) -> ${c} {
    return get_${e}ByIndices(${v(Y)});
  }`})(),K=(...W)=>{if(W.length!==s)throw new Error(`indices length must be ${s}`);let Y=W.map(m).join(",");return s===0?A("0u"):s===1?A(Y[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${Y})`)},ae=W=>s<2?A(W):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${W})`),U=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${c}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,J=s<2?"":(()=>{let W=o.map(z=>`d${z}: u32`).join(", "),Y=o.map(z=>`d${z}`).join(", ");return`
  fn set_${e}(${W}, value: ${c}) {
    set_${e}ByIndices(${v(Y)}, value);
  }`})();return{impl:()=>{let W=[],Y=!1;return g.offsetToIndices&&(W.push(I),Y=!0),g.indicesToOffset&&(W.push(C),Y=!0),g.broadcastedIndicesToOffset&&(Object.values(F).forEach(z=>W.push(z)),Y=!0),g.set&&(W.push(J),Y=!0),g.setByIndices&&(W.push(U),Y=!0),g.get&&(W.push(H),Y=!0),g.getByIndices&&(W.push(G),Y=!0),!a&&Y&&W.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${x} = ${f.indices}(${D.computeStrides(n).join(",")});`),W.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:M,broadcastedIndicesToOffset:L,indices:v,indicesGet:O,indicesSet:N,set:(...W)=>{if(W.length!==s+1)throw new Error(`indices length must be ${s}`);let Y=W[s];if(typeof Y!="string")throw new Error("value must be string");let z=W.slice(0,s).map(m).join(",");return s===0?V("0u",Y):s===1?V(z[0],Y):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${z}, ${Y})`)},setByOffset:V,setByIndices:(W,Y)=>s<2?V(W,Y):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${Y});`),get:K,getByOffset:A,getByIndices:ae,usage:r,name:e,strides:x,shape:b,rank:s}},q=(e,t,n,r=1)=>hn(e,t,n,"input",r),ne=(e,t,n,r=1)=>hn(e,t,n,"output",r),Hs=(e,t,n)=>hn(e,t,n,"atomicOutput",1),ti=(e,t,n,r=1)=>hn(e,t,n,"internal",r),js=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=tn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ks=(e,t)=>new js(e,t)}),Xs,ni,Ys,Zs,Qs,Js,Fe,eo,to,vt=X(()=>{oe(),ue(),Ae(),le(),Xs=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ni=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ys=(e,t)=>D.sortBasedOnPerm(e,ni(e.length,t)),Zs=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Qs=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Js=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Fe=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ni(r,t),a=Ys(e.dims,i),s=e.dims,o=a,u=r<2||Js(i,e.dims),d;if(u)return d=g=>{let _=q("input",n,s,4),b=ne("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:d};let{newShape:c,newPerm:p}=Qs(e.dims,i),f=D.areEqual(p,[2,3,1]),m=D.areEqual(p,[3,1,2]);if(c.length===2||f||m){s=f?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[s[1],s[0]];let g=16;return d=_=>{let b=q("a",n,s.length),x=ne("output",n,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${g+1}>, ${g}>;
  ${_.mainStart([g,g,1])}
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:_},...ie(s,o)]}},getShaderSource:d}}return d=g=>{let _=q("a",n,s.length),b=ne("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Zs(i,r,_,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ie(s,o)]}},getShaderSource:d}},eo=(e,t)=>{Xs(e.inputs,t.perm),e.compute(Fe(e.inputs[0],t.perm))},to=e=>$e({perm:e.perm})}),no,ro,io,ao,so,oo,uo,lo,co,po,Ze,ho,fo,mo,go,yo,_o,wo,bo,$o,xo,dg=X(()=>{oe(),ue(),le(),ii(),vt(),no={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ro={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},io={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ao={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},so=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},oo=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},uo=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},lo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},co=(e,t)=>{let n=[];if(!lo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},po=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=D.size(a),d=D.size(s),c=q("_A",n[0].dataType,o),p=ne("output",i,a),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,g=_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(c,p)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${io[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${no[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ro[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${ao[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ze=(e,t,n,r)=>{let i=e.inputs.length===1?n:ri(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=D.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=co(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Fe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=so(o.length,u.dims.length));let[c,p]=oo(u.dims,o),f=c;i.keepDims&&(f=uo(c,s)),e.compute(po(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,p),{inputs:[u]})},ho=(e,t)=>{Ze(e,"ReduceMeanShared",t,"mean")},fo=(e,t)=>{Ze(e,"ReduceL1Shared",t,"l1")},mo=(e,t)=>{Ze(e,"ReduceL2Shared",t,"l2")},go=(e,t)=>{Ze(e,"ReduceLogSumExpShared",t,"logSumExp")},yo=(e,t)=>{Ze(e,"ReduceMaxShared",t,"max")},_o=(e,t)=>{Ze(e,"ReduceMinShared",t,"min")},wo=(e,t)=>{Ze(e,"ReduceProdShared",t,"prod")},bo=(e,t)=>{Ze(e,"ReduceSumShared",t,"sum")},$o=(e,t)=>{Ze(e,"ReduceSumSquareShared",t,"sumSquare")},xo=(e,t)=>{Ze(e,"ReduceLogSumShared",t,"logSum")}}),Qe,vo,Vn,ri,Je,So,Io,To,ko,Eo,Co,Mo,Ao,zo,Ro,et,Oo,Bo,No,Do,Uo,Po,Lo,qo,Go,Wo,ii=X(()=>{oe(),ue(),Ae(),le(),dg(),Qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},vo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Vn=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],d=n[0].dims,c=d.length,p=D.normalizeAxes(i,c),f=!o&&p.length===0;d.forEach((_,b)=>{f||p.indexOf(b)>=0?s&&u.push(1):u.push(_)});let m=u.length,g=D.size(u);return{name:e,shaderCache:t,getShaderSource:_=>{let b=[],x=q("_A",n[0].dataType,c),$=ne("output",a,m),I=r(x,$,p),S=I[2];for(let k=0,C=0;k<c;k++)f||p.indexOf(k)>=0?(s&&C++,S=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${I[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${x.indicesSet("input_indices",k,`j${k}`)}
                  ${S}
                }`):(b.push(`${x.indicesSet("input_indices",k,$.indicesGet("output_indices",C))};`),C++);return`

        ${_.registerUniform("output_size","u32").declareVariables(x,$)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${S}
          ${I[3]}
          ${I.length===4?$.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ie(d,u)]})}},ri=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),$e({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Je=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:ri(i,n);e.compute(Vn(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?vo:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},So=(e,t)=>{Qe(e.inputs),Je(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Io=(e,t)=>{Qe(e.inputs),Je(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},To=(e,t)=>{Qe(e.inputs),Je(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ko=(e,t)=>{Qe(e.inputs),Je(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Eo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Co=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Mo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Ao=(e,t)=>{Qe(e.inputs),Je(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},zo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Ro=(e,t)=>{Qe(e.inputs),Je(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},et=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Oo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Co(e,t):ho(e,t)},Bo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Io(e,t):fo(e,t)},No=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?To(e,t):mo(e,t)},Do=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ko(e,t):go(e,t)},Uo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eo(e,t):yo(e,t)},Po=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mo(e,t):_o(e,t)},Lo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ao(e,t):wo(e,t)},qo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zo(e,t):bo(e,t)},Go=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ro(e,t):$o(e,t)},Wo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?So(e,t):xo(e,t)}}),ai,Vo,Fo,si,cg=X(()=>{oe(),Ae(),ii(),ai=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Vo=(e,t)=>{ai(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Vn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Fo=(e,t)=>{ai(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Vn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},si=e=>$e(e)}),Ho,Fn,jo,Ko,Xo,fn,Yo,Zo,oi=X(()=>{oe(),ue(),Yr(),le(),Ho=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],d=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,f=p,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=d;if(p!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=s.dims[3])}let b=g+_,x=-1,$=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:x,inputHiddenSize:c,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Fn=(e,t,n)=>t&&e?`
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
    `,jo=(e,t,n,r,i,a,s,o)=>{let u=Me(s?1:a),d=64,c=a/u;c<d&&(d=32);let p=Math.ceil(a/u/d),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:p}],m=Re(e.dataType,u),g=De(1,u),_=["type"];s&&_.push("type"),o&&_.push("type");let b=x=>{let $=ne("x",e.dataType,e.dims,u),I=[$],S=s?q("seq_lens",s.dataType,s.dims):void 0;S&&I.push(S);let k=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;k&&I.push(k);let C=De(e.dataType),M=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(M).declareVariables(...I)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Fn(S,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${g}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:_},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Ko=(e,t,n,r,i,a,s,o,u)=>{let d=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,d],p=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=p?[a.batchSize,f,d,a.headSize]:void 0,g=a.nReps?a.nReps:1,_=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=Me(a.headSize),x=a.headSize/b,$=12,I={x:Math.ceil(d/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:_},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],k=p&&r&&D.size(r.dims)>0,C=["type","type"];k&&C.push("type"),i&&C.push("type"),o&&C.push("type"),u&&C.push("type");let M=[{dims:c,dataType:t.dataType,gpuDataType:0}];p&&M.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=O=>{let N=q("q",t.dataType,t.dims,b),F=q("key",n.dataType,n.dims,b),L=[N,F];if(k){let U=q("past_key",r.dataType,r.dims,b);L.push(U)}i&&L.push(q("attention_bias",i.dataType,i.dims));let V=o?q("seq_lens",o.dataType,o.dims):void 0;V&&L.push(V);let A=u?q("total_sequence_length_input",u.dataType,u.dims):void 0;A&&L.push(A);let G=ne("output",t.dataType,c),H=[G];p&&H.push(ne("present_key",t.dataType,m,b));let K=De(1,b),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${N.type.storage}, ${$*$}>;
  ${O.registerUniforms(ae).declareVariables(...L,...H)}
  ${O.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Fn(V,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${K}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&p?`
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
          value += ${K}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(b){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${b}`)}})()};
        output[outputIdx] = ${G.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:M,dispatchGroup:I,programUniforms:S}),getShaderSource:v}},Xo=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,p=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,c],_=12,b={x:Math.ceil(i.vHeadSize/_),y:Math.ceil(i.sequenceLength/_),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:d}],$=p&&r&&D.size(r.dims)>0,I=["type","type"];$&&I.push("type"),s&&I.push("type"),o&&I.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];p&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=C=>{let M=q("probs",t.dataType,t.dims),v=q("v",n.dataType,n.dims),O=[M,v];$&&O.push(q("past_value",r.dataType,r.dims));let N=s?q("seq_lens",s.dataType,s.dims):void 0;s&&O.push(N);let F=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(F);let L=[ne("output",t.dataType,g)];p&&L.push(ne("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${M.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${M.type.value}, ${_*_}>;
  ${C.registerUniforms(V).declareVariables(...O,...L)}
  ${C.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Fn(N,F,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${M.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:x}),getShaderSource:k}},fn=(e,t,n,r,i,a,s,o,u,d,c=void 0,p=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,g=f>1?o:void 0,_=f>1?d.pastSequenceLength:0,b=_+d.kvSequenceLength,x=u&&D.size(u.dims)>0?u:void 0,$=[t,n];m&&D.size(m.dims)>0&&$.push(m),x&&$.push(x),c&&$.push(c),p&&$.push(p);let I=e.compute(Ko(f,t,n,m,x,d,_,c,p),{inputs:$,outputs:f>1?[-1,1]:[-1]})[0];e.compute(jo(I,d.batchSize,d.numHeads,_,d.sequenceLength,b,c,p),{inputs:c&&p?[I,c,p]:[I],outputs:[]});let S=[I,r];g&&D.size(g.dims)>0&&S.push(g),c&&S.push(c),p&&S.push(p),e.compute(Xo(f,I,r,g,d,_,c,p),{inputs:S,outputs:f>1?[0,2]:[0]})},Yo=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=p=>{let f=ne("output_q",u[0].dataType,n),m=ne("output_k",u[0].dataType,n),g=ne("output_v",u[0].dataType,n),_=q("input",u[0].dataType,u[0].dims),b=q("weight",u[1].dataType,u[1].dims),x=q("bias",u[2].dataType,u[2].dims),$=_.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${p.registerUniforms(I).declareVariables(_,b,x,f,m,g)}
  ${p.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Zo=(e,t)=>{let n=Ho(e.inputs,t),[r,i,a]=Yo(e,n);return fn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Qo,Jo,eu,tu,pg=X(()=>{He(),oe(),ue(),Ae(),le(),Qo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Jo=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Me(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=D.size(a)/s,d=r,c=d?a.length:a,p=q("x",e[0].dataType,e[0].dims,s),f=q("scale",e[1].dataType,e[1].dims,o),m=q("bias",e[2].dataType,e[2].dims,o),g=q("inputMean",e[3].dataType,e[3].dims,o),_=q("inputVar",e[4].dataType,e[4].dims,o),b=ne("y",e[0].dataType,c,s),x=()=>{let I="";if(r)I=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")I=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<f.rank;S++)I+=`cIndices[${S}] = outputIndices[${S}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},$=I=>`
  const epsilon = ${n};
  ${I.registerUniform("outputSize","u32").declareVariables(p,f,m,g,_,b)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(a)]:[{type:12,data:u}]})}},eu=e=>$e(e),tu=(e,t)=>{let{inputs:n,outputCount:r}=e,i=eu({...t,outputCount:r});if(ke.webgpu.validateInputContent&&Qo(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Jo(n,i))}}),nu,ru,iu,hg=X(()=>{ue(),le(),nu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ru=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,a=q("input",i,t,4),s=q("bias",i,[n],4),o=q("residual",i,t,4),u=ne("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},iu=e=>{nu(e.inputs),e.compute(ru(e.inputs))}}),au,be,su,ou,uu,lu,du,cu,pu,hu,fu,mu,gu,yu,_u,wu,mn,bu,Hn,$u,xu,vu,Su,Iu,Tu,ku,Eu,Cu,Mu,Au,zu,Ru,Ou,Bu,Nu,ui,Du,li,di,Uu,Pu,Lu,qu,Gu,Wu,ci=X(()=>{oe(),ue(),Ae(),le(),au=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=q("inputData",n,[o],4),c=ne("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(d,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},be=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>au(d,D.size(e.dims),e.dataType,a,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(D.size(d[0].dims)/64/4)},programUniforms:u})}},su=e=>{e.compute(be(e.inputs[0],"Abs","abs"))},ou=e=>{e.compute(be(e.inputs[0],"Acos","acos"))},uu=e=>{e.compute(be(e.inputs[0],"Acosh","acosh"))},lu=e=>{e.compute(be(e.inputs[0],"Asin","asin"))},du=e=>{e.compute(be(e.inputs[0],"Asinh","asinh"))},cu=e=>{e.compute(be(e.inputs[0],"Atan","atan"))},pu=e=>{e.compute(be(e.inputs[0],"Atanh","atanh"))},hu=e=>$e(e),fu=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(be(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},mu=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return $e({min:t,max:n})},gu=(e,t)=>{let n=t||mu(e.inputs),r=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},yu=e=>{e.compute(be(e.inputs[0],"Ceil","ceil"))},_u=e=>{e.compute(be(e.inputs[0],"Cos","cos"))},wu=e=>{e.compute(be(e.inputs[0],"Cosh","cosh"))},mn=e=>$e(e),bu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Hn=(e="f32")=>`
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
}`,$u=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Hn(t)))},xu=e=>{e.compute(be(e.inputs[0],"Exp","exp"))},vu=e=>{e.compute(be(e.inputs[0],"Floor","floor"))},Su=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Hn(t)))},Iu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Tu=e=>{e.compute(be(e.inputs[0],"Not",t=>`!${t}`))},ku=e=>{e.compute(be(e.inputs[0],"Neg",t=>`-${t}`))},Eu=e=>{e.compute(be(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Cu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Mu=e=>{e.compute(be(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Au=e=>$e(e),zu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Ru=e=>{e.compute(be(e.inputs[0],"Sin","sin"))},Ou=e=>{e.compute(be(e.inputs[0],"Sinh","sinh"))},Bu=e=>{e.compute(be(e.inputs[0],"Sqrt","sqrt"))},Nu=e=>{e.compute(be(e.inputs[0],"Tan","tan"))},ui=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Du=e=>{e.compute(be(e.inputs[0],"Tanh",ui))},li=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ui("v")};
}
`,di=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Uu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"FastGelu",di,li(t),void 0,e.inputs[0].dataType))},Pu=(e,t)=>{let n=De(e.inputs[0].dataType);return e.compute(be(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Lu=e=>{e.compute(be(e.inputs[0],"Log","log"))},qu=(e,t)=>`
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
`,Gu=e=>`quick_gelu_impl(${e})`,Wu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"QuickGelu",Gu,qu(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Vu,Fu,Hu,fg=X(()=>{ue(),le(),ci(),Vu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Fu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=q("input",e[0].dataType,e[0].dims,4),r=q("bias",e[0].dataType,[e[0].dims[2]],4),i=ne("output",e[0].dataType,t,4),a=D.size(t)/4,s=Re(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Hn(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Hu=e=>{Vu(e.inputs),e.compute(Fu(e.inputs))}}),ju,Ku,tt,Xu,Yu,Zu,Qu,Ju,el,tl,nl,rl,il,mg=X(()=>{oe(),ue(),le(),ju=(e,t,n,r,i,a,s,o,u,d,c,p)=>{let f,m;typeof o=="string"?f=m=($,I)=>`${o}((${$}),(${I}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=ne("outputData",c,r.length,4),_=q("aData",u,t.length,4),b=q("bData",d,n.length,4),x;if(i)if(a){let $=D.size(t)===1,I=D.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;$||I?x=g.setByOffset("global_idx",m($?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),I?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):x=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=g.setByOffset("global_idx",m(_.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(I,S,k="")=>{let C=`aData[indexA${S}][componentA${S}]`,M=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${I}[${S}] = ${k}(${f(C,M)});
          `};c===9?x=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(_,b,g)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Ku=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),d=!D.areEqual(o,u),c=o,p=D.size(o),f=!1,m=!1,g=[d];if(d){let _=en.calcShape(o,u,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");c=_.slice(),p=D.size(c);let b=D.size(o)===1,x=D.size(u)===1,$=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push(x),g.push($),g.push(I);let S=1;for(let k=1;k<c.length;k++){let C=o[o.length-k],M=u[u.length-k];if(C===M)S*=C;else break}S%4===0?(m=!0,f=!0):(b||x||$||I)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>ju(_,o,u,c,f,d,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(c)/4)},...ie(o,u,c)]})}},tt=(e,t,n,r,i,a)=>{e.compute(Ku(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Xu=e=>{tt(e,"Add",(t,n)=>`${t}+${n}`)},Yu=e=>{tt(e,"Div",(t,n)=>`${t}/${n}`)},Zu=e=>{tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Qu=e=>{tt(e,"Mul",(t,n)=>`${t}*${n}`)},Ju=e=>{let t=q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},el=e=>{tt(e,"Sub",(t,n)=>`${t}-${n}`)},tl=e=>{tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},nl=e=>{tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},rl=e=>{tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},il=e=>{tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),al,sl,ol,ul,ll,dl,gg=X(()=>{oe(),ue(),Ae(),le(),al=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==r.dims[d])throw new Error("non concat dimensions must match")})}})},sl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ol=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},ul=(e,t,n,r)=>{let i=D.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],c=[{type:12,data:i}];for(let _=0;_<e.length;++_)o+=e[_].dims[t],a[_]=o,d.push(e[_].dims.length),s[_]=q(`input${_}`,r,d[_]),u.push("rank"),c.push({type:12,data:a[_]});for(let _=0;_<e.length;++_)c.push(...ie(e[_].dims));c.push(...ie(n));let p=ne("output",r,n.length),f=p.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),g=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)_.registerUniform(`sizeInConcatAxis${b}`,"u32");return _.declareVariables(...s,p)})()}

  ${sl(a.length,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ol(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:g}},ll=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);al(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>D.size(o.dims)>0);e.compute(ul(s,i,a,n[0].dataType),{inputs:s})},dl=e=>$e({axis:e.axis})}),Ut,Pt,Lt,pi,qt=X(()=>{oe(),ue(),Ut=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Pt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Lt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},pi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[zs,Rs];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ne,cl,hi=X(()=>{Ne=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},cl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),pl,yg=X(()=>{pl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),gn,fi,mi=X(()=>{oe(),ue(),le(),qt(),gn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${re(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,re(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},fi=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],c=s[s.length-1],p=Me(d),f=Me(c),m=Me(u),g=D.size(n)/p/m,_=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),x=[D.size(b),u,d],$=[{type:12,data:g},{type:12,data:u},{type:12,data:d},{type:12,data:c}];Pt(t,$),$.push(...ie(b,s,o)),_&&$.push(...ie(e[2].dims)),$.push(...ie(x));let I=S=>{let k=ti("batch_dims",e[0].dataType,b.length),C=q("a",e[0].dataType,s.length,f),M=q("b",e[1].dataType,o.length,p),v=ne("output",e[0].dataType,x.length,p),O=Re(v.type.tensor),N=Ut(t,v.type.value,O),F=[C,M],L="";if(_){let G=i?p:1;F.push(q("bias",e[2].dataType,e[2].dims.length,G)),L=`${i?`value += bias[col / ${G}];`:`value += ${v.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Lt(t,V);let A=()=>{let G=`var a_data: ${C.type.value};`;for(let H=0;H<f;H++)G+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${p}];`;for(let H=0;H<m;H++){G+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${f}];`;for(let K=0;K<f;K++)G+=`
            values[${H}] = fma(${M.type.value}(a_data${f===1?"":`[${K}]`}), b_data${K}, values[${H}]);
`}return G};return`
  ${S.registerUniforms(V).registerInternalVariables(k).declareVariables(...F,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${gn("a_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${M.type.indices};
    ${gn("b_indices",M,M.rank-2,k.rank,"batch_indices")}
    ${M.indicesSet("b_indices",M.rank-2,0)}
    ${M.indicesSet("b_indices",M.rank-1,0)}
    let b_offset = ${M.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${L}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${f};${m};${i}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:I}}}),hl,fl,gi,yi,ml,_i,gl,jn,wi=X(()=>{oe(),ue(),le(),qt(),mi(),hi(),hl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,fl=(e,t)=>e?`
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
        }`,gi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],c=i?u:a,p=i?a:u,f=c/t[0],m=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${c/f}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${d/e[0]}>, ${a}>;

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
          ${hl(i,r)}
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

          ${fl(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},yi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ml=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",_i=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],p=i?d:a,f=i?a:d;if(!(f%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=p/t[0],_=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${yi(i,r)}
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${_};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${yi(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
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
      ${ml(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${p}>, ${f}>;
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
    ${b}
  }
`},gl=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,d=Re(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ne(e,d)} {
      var value = ${Ne(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${gn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ne(e,d)} {
      var value = ${Ne(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${gn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ne(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ne(e,d)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},jn=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),p=D.size(c),f=s[s.length-2],m=s[s.length-1],g=o[o.length-1],_=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],x=[8,8,1],$=[Math.ceil(g/x[0]/b[0]),Math.ceil(f/x[1]/b[1]),Math.ceil(p/x[2]/b[2])],I=_?4:1,S=[...u,f,m/I],k=S.length,C=[...d,m,g/I],M=C.length,v=[p,f,g/I],O=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];Pt(t,O),O.push(...ie(c,S,C));let N=["rank","rank"],F=e.length>2;F&&(O.push(...ie(e[2].dims)),N.push("rank")),O.push(...ie(v));let L=V=>{let A=c.length,G=ti("batchDims",e[0].dataType,A,1),H=Re(e[0].dataType),K=q("a",e[0].dataType,k,I),ae=q("b",e[1].dataType,M,I),U=ne("result",e[0].dataType,v.length,I),J=[K,ae];if(F){let j=i?I:1;J.push(q("bias",e[2].dataType,e[2].dims.length,j))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Lt(t,W);let Y=Re(U.type.tensor),z=Ut(t,U.type.value,Y),B=gl(I,F,z,[G,K,ae,U],i);return`
  ${V.registerUniforms(W).registerInternalVariables(G).declareVariables(...J,U)}
  ${B}
  ${_?gi(b,x,H,G):_i(b,x,H,G)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${_};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:O}),getShaderSource:L}}}),yl,_l,_g=X(()=>{oe(),ft(),le(),qt(),hi(),yg(),wi(),yl=(e,t,n,r,i=!1,a,s=4,o=4,u=4,d="f32")=>{let c=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",_=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=e?"row":"col",x=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ne(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${_}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,I=e?t&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ne(s,d)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ne(s,d)}(0.0);`,S=e?r&&n?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ne(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ne(o,d)}(0.0);`,k=Ne(u,d),C=Ne(e?s:o,d),M=Ne(e?o:s,d),v=Ut(a,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?I:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?S:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${cl(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},_l=(e,t,n,r,i,a,s,o,u)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],p=n[0],f=d?n[2]:n[3],m=d?n[1]:n[2],g=d?n[3]:n[1],_=d&&(c%4===0||c%3===0)&&g%4===0,b=d?g:f*m,x=d?f*m:g,$=[8,8,1],I=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/$[0]/I[0]),Math.ceil(x/$[1]/I[1]),Math.ceil(p/$[2]/I[2])];ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let k=_?d&&c%4!==0?3:4:1,C=$[1]*I[1],M=$[0]*I[0],v=Math.max($[0]*k,$[1]),O=r%C===0,N=i%M===0,F=a%v===0,L=_?[k,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Pt(t,V),V.push(...ie(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(V.push(...ie(e[2].dims)),A.push("rank")),V.push(...ie(n));let G=H=>{let K=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Lt(t,K);let ae=_?4:1,U=Re(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${U}>`:U}) {
        result[flatIndex] = ${_?`vec4<${U}>`:U}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${U}>`:U}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,W=q("x",e[0].dataType,e[0].dims.length,k===3?1:k),Y=q("w",e[1].dataType,e[1].dims.length,ae),z=[W,Y],B=ne("result",e[0].dataType,n.length,ae);if(s){let j=q("bias",e[2].dataType,e[2].dims.length,ae);z.push(j),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${U}>`:U} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${pl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(K).declareVariables(...z,B)}
        ${J}
        ${yl(d,O,N,F,s,t,L[0],L[1],L[2],U)}
        ${_?gi(I,$,U,void 0,!d,v):_i(I,$,U,void 0,!d,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${_};${O};${N};${F};${C};${M};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:V}),getShaderSource:G}}}),wl,bi,yn,bl,$i,$l,xl,vl,wg=X(()=>{oe(),ft(),ue(),le(),qt(),hi(),wl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},bi=e=>typeof e=="number"?[e,e,e]:e,yn=(e,t)=>t<=1?e:e+(e-1)*(t-1),bl=(e,t,n,r=1)=>{let i=yn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},$i=(e,t,n,r,i)=>{i==null&&(i=bl(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},$l=(e,t,n,r,i,a,s,o,u,d)=>{let c,p,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=$i([t,n,r,1],[o,u,d],1,[i,a,s],e);p=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((_,b,x)=>_===x[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=$i([t,n,r,1],[o,u,d],1,[i,a,s],e[0]);p=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),f=Math.ceil(n/a),m=Math.ceil(r/s);let g=(p-1)*i+o-t,_=(f-1)*a+u-n,b=(m-1)*s+d-r,x=Math.floor(g/2),$=g-x,I=Math.floor(_/2),S=_-I,k=Math.floor(b/2),C=b-k;c={top:I,bottom:S,left:k,right:C,front:x,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:p,outHeight:f,outWidth:m}},xl=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,d,c,p;if(s==="channelsLast")[o,u,d,c,p]=e;else if(s==="channelsFirst")[o,p,u,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,g,_]=t,[b,x,$]=bi(n),[I,S,k]=bi(r),C=yn(m,I),M=yn(g,S),v=yn(_,k),{padInfo:O,outDepth:N,outHeight:F,outWidth:L}=$l(i,u,d,c,b,x,$,C,M,v),V=a?f*p:f,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,V,N,F,L]:s==="channelsLast"&&(A=[o,N,F,L,V]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:c,inChannels:p,outDepth:N,outHeight:F,outWidth:L,outChannels:V,padInfo:O,strideDepth:b,strideHeight:x,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:_,effectiveFilterDepth:C,effectiveFilterHeight:M,effectiveFilterWidth:v,dilationDepth:I,dilationHeight:S,dilationWidth:k,inShape:e,outShape:A,filterShape:t}},vl=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,x)=>x)},d=[Math.ceil(wl(u.x.map(b=>n[b]))/o[0]),1,1];ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,p=D.size(n),f=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Pt(t,f),f.push(...ie(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...ie(e[2].dims)),m.push("rank")),f.push(...ie(n));let _=b=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Lt(t,x);let $=1,I=Re(e[0].dataType),S=q("x",e[0].dataType,e[0].dims.length,c),k=q("W",e[1].dataType,e[1].dims.length,$),C=[S,k],M=ne("result",e[0].dataType,n.length,$),v="";if(g){let F=q("bias",e[2].dataType,e[2].dims.length,$);C.push(F),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?re("coords",4,5):re("coords",1,5)}];
        }`}let O=Ne(c,I),N=Ut(t,O,I);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${b.registerUniforms(x).declareVariables(...C,M)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,S.rank)};
              let d2 = ${s?re("coords",S.rank-1,S.rank):re("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?re("coords",1,S.rank):re("coords",2,S.rank)},
              ${s?re("coords",2,S.rank):re("coords",3,S.rank)},
              ${s?re("coords",3,S.rank):re("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?re("uniforms.x_shape",1,S.rank):re("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?re("uniforms.x_shape",2,S.rank):re("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?re("uniforms.x_shape",3,S.rank):re("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?re("uniforms.x_shape",4,S.rank):re("uniforms.x_shape",1,S.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:_}}}),Sl,Il,bg=X(()=>{oe(),ue(),le(),qt(),Sl=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?n[3]:n[1],c=d/t.group,p=u&&c>=4?Me(d):1,f=D.size(n)/p,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Pt(t,m),m.push(...ie(s,[o[0],o[1],o[2],o[3]/p]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ie([n[0],n[1],n[2],n[3]/p]));let _=b=>{let x=ne("output",e[0].dataType,n.length,p),$=Re(x.type.tensor),I=Ut(t,x.type.value,$),S=q("x",e[0].dataType,s.length),k=q("w",e[1].dataType,o.length,p),C=[S,k];i&&C.push(q("b",e[2].dataType,e[2].dims,p));let M=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Lt(t,M);let v=u?`
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
  ${b.registerUniforms(M).declareVariables(...C,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${a}
    ${I}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},Il=(e,t,n,r)=>{let i=e.length>2,a=Me(n[3]),s=Me(n[2]),o=D.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[n[0],n[1],n[2],n[3]/a],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Pt(t,p),p.push(...ie(u,d,c));let f=(s-1)*t.strides[1]+d[1],m=g=>{let _=ne("output",e[0].dataType,c.length,a),b=Re(_.type.tensor),x=Ut(t,_.type.value,b),$=q("x",e[0].dataType,u.length,a),I=q("w",e[1].dataType,d.length,a),S=[$,I];i&&S.push(q("b",e[2].dataType,e[2].dims,a));let k=i?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Lt(t,C),`
  ${g.registerUniforms(C).declareVariables(...S,_)}
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
    var values: array<${_.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
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
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
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
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}}}),Tl,Kn,kl,Xn,xi,vi,El,Cl,Si,$g=X(()=>{ue(),_g(),wg(),wi(),bg(),qt(),mi(),vt(),Tl=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],c=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),p=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-c[m]+i[m])/i[m]));return p.splice(0,0,s),p.splice(a?3:1,0,d),p},Kn=[2,3,1,0],kl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Xn=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Ln.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},xi=e=>{let t=pi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},vi=(e,t,n,r)=>{let i=n.format==="NHWC",a=Tl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let C=[t[0]];if(i){let M=e.kernelCustomData.wT??e.compute(Fe(t[1],Kn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=M),C.push(M)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Il(C,n,a,r),{inputs:C}):e.compute(Sl(C,n,a,r),{inputs:C});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],p=t[1].dims[3],f=a[i?1:2],m=a[i?2:3],g=a[i?3:1],_=i&&c===o&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(_||c===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let C=a[0],M,v,O,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(Fe(t[1],Kn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),_){let A=o*u*d;M=t[0].reshape([1,C,A]),v=V.reshape([1,A,g]),O=[1,C,g]}else M=t[0].reshape([C,o*u,d]),v=V.reshape([1,d,g]),O=[C,f*m,g];N.push(M),N.push(v)}else M=t[0].reshape([C,d,o*u]),v=t[1].reshape([1,g,d]),O=[C,g,f*m],N.push(v),N.push(M);s&&N.push(t[2]);let F=O[2],L=N[0].dims[N[0].dims.length-1];F<8&&L<8?e.compute(fi(N,n,a,O,i,r),{inputs:N}):e.compute(jn(N,n,a,O,i,r),{inputs:N});return}let b=!0,x=e.kernelCustomData.wT??e.compute(Fe(t[1],Kn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let $=[t[0],x];s&&$.push(t[2]);let I=i?f*m:g,S=i?g:f*m,k=c*p*d;e.compute(_l($,n,a,I,S,k,s,b,r),{inputs:$})},El=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Xn({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);vi(e,r,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Cl=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Xn(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=xl(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(vl(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Si=(e,t)=>{if(kl(e.inputs,t),e.inputs[0].dims.length===3)El(e,t);else if(e.inputs[0].dims.length===5)Cl(e,e.inputs,t);else{let n=Xn(t,e.inputs);vi(e,e.inputs,n)}}}),Ml,xg=X(()=>{oe(),ft(),ue(),le(),Ml=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],c=a?Me(u):1,p=a&&d===1&&u>=4,f=p?Math.floor(u/4)*4:Math.floor(u/c)*c,m=u-f,g=a?Me(d):1,_=a?d===1?c:g:1,b=D.size(i)/g,x=[Math.ceil(b/64),1,1];ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let $=["rank","rank"],I=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],k=[t.dilations[0],t.dilations[1]],C=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],M=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:I},{type:12,data:S},{type:12,data:k},{type:12,data:C},{type:6,data:M},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];r&&(v.push(...ie(e[2].dims)),$.push("rank")),v.push(...ie(i));let O=N=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:M.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Re(e[0].dataType),V=a?1:2,A=a?2:3,G=a?3:1,H=q("W",e[1].dataType,e[1].dims.length,_),K=q("Dy",e[0].dataType,e[0].dims.length,c),ae=[K,H];r&&ae.push(q("bias",e[2].dataType,[i[G]].length,g));let U=ne("result",e[0].dataType,i.length,g),J=()=>{let z="";if(p)c===4?z+=`
        let xValue = ${K.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?z+=`
          dotProd = dotProd + dot(vec4<${L}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}), vec4<${L}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(z+=`
          dotProd = dotProd + dot(vec4<${L}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}, ${K.getByOffset("x_offset + 2u")}, ${K.getByOffset("x_offset + 3u")}), vec4<${L}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(z+=`
                  let xValue = ${a?K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):K.get("batch","inputChannel","idyR","idyC")};
        `,c===1)z+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)z+=`
            let wValue${B} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return z},W=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let z="";if(c===1){z+="dotProd = dotProd";for(let B=0;B<m;B++)z+=`
            + ${K.getByOffset(`x_offset + ${B}`)} * ${H.getByOffset(`w_offset + ${B}`)}`;z+=";"}else if(c===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);z+=`
          let xValue = ${K.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return z},Y=`
            let outputIndices = ${U.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${U.indicesGet("outputIndices",0)};
            let d1 = ${U.indicesGet("outputIndices",G)};
            let r = ${U.indicesGet("outputIndices",V)};
            let c = ${U.indicesGet("outputIndices",A)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${U.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                ${p?`
                var x_offset = ${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:c}) {
                  ${J()}
                  inputChannel = inputChannel + ${p?4:c};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${U.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(F).declareVariables(...ae,U)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${_}${g}${p}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:O}}}),Al,zl,Rl,Ii,Ol,Bl,Ti,Nl,Dl,vg=X(()=>{xg(),qt(),vt(),Al=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,zl=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Rl=(e,t,n,r,i,a,s,o,u,d)=>{let c=e.length-2,p=d.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,_=e.length-c-(o?1:0);g<c;++g,++_){let b=e[_],x=p?b*s[g]:d[g],$=Al(b,s[g],a[g],t[_],n[g],x);zl($,r,a,g,g+c),p&&d.push(s[g]*(b-1)+u[g]+(t[_]-1)*n[g]+1-a[g]-a[g+c])}d.splice(0,0,f),d.splice(o?3:1,0,m)},Ii=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,f)=>p*f,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Rl(o,n,u,e.autoPad,e.group,i,d,r,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:d}),c},Ol=e=>{let t=pi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),c=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:c,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Bl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ti=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Fe(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Ml(a,n,r),{inputs:a})},Nl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=Ii({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Ti(e,r,d,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Dl=(e,t)=>{if(Bl(e.inputs,t),e.inputs[0].dims.length===3)Nl(e,t);else{let n=Ii(t,e.inputs);Ti(e,e.inputs,n)}}}),Ul,Pl,Ll,Sg=X(()=>{oe(),ue(),Ae(),le(),Ul=(e,t,n,r)=>{let i=D.size(t),a=t.length,s=q("input",e,a),o=ne("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=D.normalizeAxis(u,a),c=p=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=re("uniforms.input_shape","uniforms.axis",a),g=r.reverse?f+(r.exclusive?" + 1":""):"0",_=r.reverse?m:f+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${_};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ie(t,t)]}),getShaderSource:c}},Pl=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Ul(r,n,i,t),{inputs:[0]})},Ll=e=>{let t=e.exclusive===1,n=e.reverse===1;return $e({exclusive:t,reverse:n})}}),ql,Gl,Wl,Vl,Fl,Ig=X(()=>{oe(),ue(),Ae(),le(),ql=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Gl=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Wl=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=c?[n,r,i,d,d,a/d**2]:[n,r,i,a/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[n,d,d,a/d**2,r,i]:[n,a/d**2,d,d,r,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),f=p.dims.length,m=e.dataType,g=q("a",m,f),_=ne("output",m,f),b=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(g,_)}

  ${Gl(o,f,g,_)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let $=u?[n,r*d,i*d,a/d**2]:[n,a/d**2,r*d,i*d],I=D.size($),S=p.dims,k=D.sortBasedOnPerm(S,o);return{outputs:[{dims:$,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ie(S,k)]}},getShaderSource:b}},Vl=(e,t)=>{ql(e.inputs),e.compute(Wl(e.inputs[0],t))},Fl=e=>$e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Yn,_n,ki,Hl,jl,Kl,Xl,Ei,Yl,Zl,Ql,Tg=X(()=>{oe(),ue(),Ae(),le(),Yn="[a-zA-Z]|\\.\\.\\.",_n="("+Yn+")+",ki="^"+_n+"$",Hl="("+_n+",)*"+_n,jl="^"+Hl+"$",Kl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Xl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(jl)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(ki)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(_n)))throw new Error("Invalid RHS");(i=r.match(RegExp(Yn,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(ki))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Yn,"g")),d=new Kl(r);return u==null||u.forEach((c,p)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);d.addSymbol(g,p+m),this.addSymbol(g,n[o++],r)}}else d.addSymbol(c,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[o++],r)}),d}},Ei=e=>e+"_max",Yl=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,c)=>q(`input${c}`,t,d)),a=D.size(r),s=ne("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),u=d=>{let c=[],p="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],_=[],b=[],x=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,k)=>{var C;if(n.rhs.symbolToIndices.has(k)){let M=(C=n.rhs.symbolToIndices.get(k))==null?void 0:C[0];M!==void 0&&n.lhs.forEach((v,O)=>{if(S.inputIndices.includes(O)){let N=v.symbolToIndices.get(k);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(F=>{c.push(`${i[O].indicesSet(`input${O}Indices`,F,s.indicesGet("outputIndices",M))}`)})}})}else n.lhs.forEach((M,v)=>{if(S.inputIndices.includes(v)){let O=M.symbolToIndices.get(k);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${k}`)}`)}),x.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),_.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${Ei(k)}; ${k}++) {`),b.push("}")});let I=$?[...c,`let sum = ${i.map((S,k)=>S.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...c,f,..._,...g,p,...x,m,...b];return`
            ${d.registerUniforms(o.map(S=>({name:`${Ei(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>n.symbolToInfo.has(p)).map(p=>{var f;return{type:12,data:((f=n.symbolToInfo.get(p))==null?void 0:f.dimValue)||0}});d.push({type:12,data:a});let c=e.map((p,f)=>[...ie(p)]).reduce((p,f)=>p.concat(f),d);return c.push(...ie(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:u}},Zl=(e,t)=>{let n=new Xl(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Yl(i,e.inputs[0].dataType,n,r))},Ql=e=>{let t=e.equation.replace(/\s+/g,"");return $e({equation:t})}}),Jl,Ci,ed,td,nd,kg=X(()=>{oe(),ue(),le(),Jl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ci=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},ed=(e,t)=>e.length>t.length?Ci(e,t):Ci(t,e),td=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=ed(t,n),i=e[0].dataType,a=i===9||D.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(D.size(r)/o),d=p=>{let f=q("input",i,t.length,s),m=ne("output",i,r.length,o),g;if(i===9){let _=(b,x,$="")=>`
          let outputIndices${x} = ${m.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${f.broadcastedIndicesToOffset(`outputIndices${x}`,m)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${b}[${x}] = ${$}(${f.getByOffset(`index${x}`)}[component${x}]);
        `;g=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${_("data",0,"u32")}
        ${_("data",1,"u32")}
        ${_("data",2,"u32")}
        ${_("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},c=[{type:12,data:u},...ie(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},nd=e=>{Jl(e.inputs),e.compute(td(e.inputs),{inputs:[0]})}}),rd,id,Eg=X(()=>{oe(),ue(),le(),ci(),rd=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4===0,a=s=>{let o=q("x",t,[1],4),u=q("bias",t,[1],4),d=ne("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(o,u,d)}

    ${li(De(t))}

    ${s.mainStart(tn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",di("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/tn/4)}})}},id=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?Uu(e):e.compute(rd(e.inputs))}}),ad,sd,od,ud,Cg=X(()=>{oe(),ue(),Ae(),le(),ad=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},sd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,d=Math.ceil(D.size(s)/u),c=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ie(e[0].dims,e[1].dims,s)],p=f=>{let m=q("data",e[0].dataType,e[0].dims.length,u),g=q("inputIndices",e[1].dataType,e[1].dims.length),_=ne("output",e[0].dataType,s.length,u),b=$=>{let I=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let k=0;k<I;k++)S+=`${I>1?`indicesIndices${$}[${k}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${k}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${g.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${m.type.indices};
        `;for(let k=0,C=0;k<i;k++)k===a?(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = u32(idx${$});`,C+=I):(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${C}]`:`outputIndices${$}`};`,C++);return S},x;if(e[0].dataType===9){let $=(I,S,k="")=>`
          let outputIndices${S} = ${_.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${I}[${S}] = ${k}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;x=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${_.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${_.offsetToIndices("global_idx")};
      ${b("")};
      let value = ${m.getByIndices("dataIndices")};
      ${_.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:p}},od=e=>$e({axis:e.axis}),ud=(e,t)=>{let n=e.inputs;ad(n),e.compute(sd(e.inputs,t))}}),ld,dd,cd,Mg=X(()=>{oe(),ue(),le(),ld=(e,t,n,r,i,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],c=[a];d.push(...ie(t.dims,c));let p=f=>{let m=q("indices_data",t.dataType,t.dims.length),g=ne("input_slice_offsets_data",12,1,1),_=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(..._)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},dd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=D.sizeToDimension(a,a.length-1),u=D.sizeFromDimension(r,t.batchDims+s),d=D.sizeToDimension(r,t.batchDims),c=D.sizeFromDimension(r,t.batchDims),p=o/d,f=new Array(s),m=u;for(let S=0;S<s;++S)f[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=ld(e,n[1],f,t.batchDims,r,o,p,c,s),_=t.batchDims+s;if(_>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(_)),x=D.size(b),$=[{type:12,data:x},{type:12,data:u},...ie(n[0].dims,g.dims,b)],I=S=>{let k=q("data",n[0].dataType,n[0].dims.length),C=q("slice_offsets",12,g.dims.length),M=ne("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,C,M)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:$}),getShaderSource:I},{inputs:[n[0],g]})},cd=e=>({batchDims:e.batch_dims,cacheKey:""})}),pd,hd,fd,md,Ag=X(()=>{oe(),ue(),Ae(),le(),pd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.gatherAxis,i),s=D.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=D.size(o),d=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ie(...e.map((m,g)=>m.dims),o)],f=m=>{let g=q("data",e[0].dataType,e[0].dims.length),_=q("inputIndices",e[1].dataType,e[1].dims.length),b=q("scales",e[2].dataType,e[2].dims.length),x=e.length>3?q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=ne("output",d,o.length),I=[g,_,b];x&&I.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...I,$)}
        ${m.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${_.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${_.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${_.getByIndices("indices_indices")};
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
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${De(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},fd=(e,t)=>{let n=e.inputs;pd(n,t),e.compute(hd(e.inputs,t))},md=e=>$e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),gd,yd,_d,wd,zg=X(()=>{oe(),ue(),Ae(),le(),gd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},yd=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=n[o],d=a.slice(0),c=D.size(d),p=q("input",r,i),f=q("indicesInput",s,a.length),m=ne("output",r,d.length),g=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return g.push(...ie(n,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,f,m)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},_d=e=>$e({axis:e.axis}),wd=(e,t)=>{let n=e.inputs;gd(n),e.compute(yd(e.inputs,t))}}),bd,$d,xd,vd,Rg=X(()=>{oe(),ue(),le(),bd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},$d=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=As.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),c=Math.ceil(i/u),p=!0,f=D.size(o),m=[{type:12,data:p?d:f},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ie(e[2].dims)),g.push("rank")),m.push(...ie(o));let _=x=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",S=q("a",e[0].dataType,e[0].dims),k=q("b",e[1].dataType,e[1].dims),C=S.type.value,M=null,v=[S,k];e.length===3&&(M=q("c",e[2].dataType,e[2].dims.length),v.push(M));let O=ne("output",e[0].dataType,o.length);v.push(O);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(N).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${I}
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${C}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=x=>{let $=q("a",e[0].dataType,e[0].dims),I=q("b",e[1].dataType,e[1].dims),S=null,k=[$,I];e.length===3&&(S=q("c",e[2].dataType,e[2].dims.length),k.push(S));let C=ne("output",e[0].dataType,o.length);k.push(C);let M=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",O="";t.transA&&t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(M).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${u}>, ${u}>;
  ${x.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
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
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},xd=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},vd=(e,t)=>{bd(e.inputs),e.compute($d(e.inputs,t))}}),at,mt,Gt,Wt,Sd,Id,Td,kd,Ed,Cd,Md,Ad,zd,Rd,Og=X(()=>{oe(),ue(),Ae(),le(),[at,mt,Gt,Wt]=[0,1,2,3],Sd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Id=`
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
`,Td=e=>`
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
`,kd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ed=e=>`
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
`,Cd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${at}] = batch;
     indices[${mt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Gt}] = u32(r);
            indices[${Wt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Gt}] = u32(clamp(r, 0, H - 1));
          indices[${Wt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Gt}] = gs_reflect(r, border[1], border[3]);
          indices[${Wt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Md=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${at}], indices[${mt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${at}], indices[${mt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${at}], indices[${mt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${at}], indices[${mt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${at}], indices[${mt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${at}], indices[${mt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ad=(e,t)=>{let n=q("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=q("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[at,mt,Gt,Wt]=[0,3,1,2]);let s=ne("output",e[0].dataType,a.length),o=n.type.value,u=D.size(a),d=[{type:12,data:u},...ie(e[0].dims,r,a)],c=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${Id}
  ${Td(o)}
  ${kd(t)}
  ${Ed(t)}
  ${Cd(n,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Gt}]);
      let W_in = i32(uniforms.x_shape[${Wt}]);

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
      var grid_indices = vec3<u32>(indices[${at}], indices[${Gt}], indices[${Wt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Md(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let f=D.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:c}},zd=(e,t)=>{Sd(e.inputs),e.compute(Ad(e.inputs,t))},Rd=e=>$e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Pe,Od,Bd,Mi,Nd,wn,Dd,Ud=X(()=>{oe(),ue(),Ae(),Yr(),oi(),le(),vt(),Pe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Od=(e,t)=>{let n=e[0],r=Pe(e,1),i=Pe(e,2),a=Pe(e,3),s=Pe(e,4),o=Pe(e,5),u=Pe(e,6),d=Pe(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],p=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=p,g=0,_=0,b=Math.floor(f/t.numHeads);if(u&&d&&D.size(u.dims)&&D.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],_=u.dims[2]}else if(u&&D.size(u.dims)||d&&D.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&D.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,I=0;if(s&&D.size(s.dims)>0){I=8;let M=s.dims;throw M.length===1?M[0]===c?I=1:M[0]===3*c+2&&(I=3):M.length===2&&M[0]===c&&M[1]===$&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,k=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],S=!0}}let C=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:b,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:S,qkvFormat:x}},Bd=e=>$e({...e}),Mi=$e({perm:[0,2,1,3]}),Nd=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=D.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],c=p=>{let f=ne("qkv_with_bias",t.dataType,o),m=q("qkv",t.dataType,o),g=q("bias",n.dataType,o),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(m,g,f)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},wn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&D.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Nd(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(Fe(u,Mi.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(Fe(u,Mi.perm),{inputs:[u],outputs:[-1]})[0]},Dd=(e,t)=>{let n=Od(e.inputs,t),r=e.inputs[0],i=Pe(e.inputs,1),a=Pe(e.inputs,2),s=Pe(e.inputs,3),o=Pe(e.inputs,4),u=Pe(e.inputs,5),d=Pe(e.inputs,6),c=Pe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,f=wn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(p)return fn(e,f,i,a,o,void 0,d,c,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=wn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=wn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);fn(e,f,m,g,o,void 0,d,c,u,n)}}),Pd,Ld,qd,Gd,Ai,Wd,Vd,Fd=X(()=>{oe(),ue(),Ae(),le(),Pd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ld=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),$e({numOutputs:r,axis:t.axis,splitSizes:n})},qd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Gd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ai=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,a=D.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=q("input",i,n.length),u=new Array(t.numOutputs),d=[],c=[],p=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){p+=t.splitSizes[g],u[g]=p;let _=n.slice();_[a]=t.splitSizes[g],c.push(_),s[g]=ne(`output${g}`,i,_.length),d.push({dims:c[g],dataType:e[0].dataType})}f.push({type:12,data:u},...ie(n,...c));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${qd(u.length)}
  ${Gd(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${re("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Wd=(e,t)=>{Pd(e.inputs);let n=e.inputs.length===1?t:Ld(e.inputs,t);e.compute(Ai(e.inputs,n),{inputs:[0]})},Vd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return $e({axis:t,numOutputs:r,splitSizes:n})}}),Hd,Zn,jd,Kd=X(()=>{oe(),ue(),Ae(),le(),Hd=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!D.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],d=n.dims[n.dims.length-2],c=i.dims[0],p=D.sizeFromDimension(n.dims,1)/d,f=o===0?i.dims[1]*2:p/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Zn=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,c=e[2].dims[1],p=i===0?c*2:d/r,f=new Array(s,u,d/p,p-c),m=D.computeStrides(f),g=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=b=>{let x=q("input",e[0].dataType,e[0].dims.length),$=q("position_ids",e[1].dataType,e[1].dims.length),I=q("cos_cache",e[2].dataType,e[2].dims.length),S=q("sin_cache",e[3].dataType,e[3].dims.length),k=ne("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables(x,$,I,S,k)}

        ${b.mainStart(tn)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",ne("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${x.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:$e({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/tn)},programUniforms:g})}},jd=(e,t)=>{Hd(e.inputs,t),e.compute(Zn(e.inputs,t))}}),Xd,Yd,zi,Zd,Qd,Bg=X(()=>{Ae(),oe(),oi(),Ud(),Fd(),vt(),Kd(),le(),Xd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],d=n.dims[1],c=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=d,f=0,m=!r||r.dims.length===0,g=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=g*t.numHeads);let _=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(_&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(_||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let $=0,I=!1,S=t.kvNumHeads?g*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],I=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=k.dims.reduce((M,v)=>M*v,1);if(C!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${C}.`);for(let M=0;M<k.dims.length;M++)if(k.dims[M]!==1&&k.dims[M]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${M}] = ${k.dims[M]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:x}},Yd=$e({perm:[0,2,1,3]}),zi=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Fe(r,Yd.perm),{inputs:[r],outputs:[-1]})[0]),r},Zd=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let p=q("seq_lens",n.dataType,n.dims),f=q("total_seq_lens",r.dataType,r.dims),m=ne("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(p,f,m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},Qd=(e,t)=>{var S;let n=Xd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=$e({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[f,m,g]=!i&&!a?e.compute(Ai([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],_,b;if(t.doRotary){let k=e.compute(Zd(n.batchSize,n.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],M=e.inputs[8],v=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[f,k,C,M],N=[-1];_=e.compute(Zn(O,v),{inputs:O,outputs:N})[0],O.splice(0,1,m);let F=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(Zn(O,F),{inputs:O,outputs:N})[0]}let x=wn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?_:f,void 0,0),$=zi(e,t.doRotary?b:m,n),I=zi(e,g,n);fn(e,x,$,I,void 0,void 0,s,o,void 0,n,u,d)}}),Ri,Jd,ec,tc,Ng=X(()=>{oe(),ue(),vt(),le(),Ri=(e,t,n,r,i,a,s,o)=>{let u=Me(a),d=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,p=i*s,f=64;p===1&&(f=256);let m=[i,s,a/u],g=[i,s,2],_=["rank","type","type"],b=[];b.push(...ie(m,g));let x=$=>{let I=q("x",t.dataType,3,u),S=q("scale",n.dataType,n.dims),k=q("bias",r.dataType,r.dims),C=ne("output",1,3,2),M=[I,S,k,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${f}>;
  const workgroup_size = ${f}u;
  ${$.declareVariables(...M)}
  ${$.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
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
      let sum_final = ${xt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${xt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:p},programUniforms:b}),getShaderSource:x},{inputs:[t,n,r],outputs:[-1]})[0]},Jd=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=D.sizeFromDimension(r,a),d=Me(u),c=D.size(i)/d,p=Ri(e,t[0],t[1],t[2],s,u,o,n.epsilon),f=[s,o,u/d],m=[s,o],g=["type","none"],_=b=>{let x=q("x",t[0].dataType,f.length,d),$=q("scale_shift",1,m.length,2),I=ne("output",t[0].dataType,f.length,d),S=[x,$,I];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ie(f,m,f)]}),getShaderSource:_},{inputs:[t[0],p]})},ec=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=D.sizeFromDimension(r,1)/s,u=Me(s),d=D.size(i)/u,c=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],f=!1,m=[0,r.length-1];for(let x=0;x<r.length-2;x++)f=f||r[x+1]!==1,m.push(x+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(Fe(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(x,$)=>r[m[$]])),_=Ri(e,g,t[1],t[2],a,o,s,n.epsilon),b=x=>{let $=Re(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,S=M=>{let v=M===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${O}(scale.${v}))`;case 2:return`vec2<${$}>(${O}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${O}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=q("input",t[0].dataType,t[0].dims,u),C=ne("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:b},{inputs:[t[0],_]})},tc=(e,t)=>{t.format==="NHWC"?ec(e,e.inputs,t):Jd(e,e.inputs,t)}}),nc,rc,ic,Dg=X(()=>{oe(),ue(),le(),nc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},rc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),d=D.sizeToDimension(i,u),c=D.sizeFromDimension(i,u),p=D.size(a.dims),f=s?D.size(s.dims):0;if(p!==c||s&&f!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let g=Me(c),_=["type","type"],b=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/g)},{type:1,data:t.epsilon}];s&&_.push("type");let x=n>1,$=n>2,I=k=>{let C=Re(e[0].dataType),M=[q("x",e[0].dataType,e[0].dims,g),q("scale",a.dataType,a.dims,g)];s&&M.push(q("bias",s.dataType,s.dims,g)),M.push(ne("output",e[0].dataType,o,g)),x&&M.push(ne("mean_data_output",1,m)),$&&M.push(ne("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(v).declareVariables(...M)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ei("f32",g)};
    var mean_square_vector = ${ei("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${nn(C,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${nn(C,g,"x[j + offset]")};
      let f32scale = ${nn(C,g,"scale[j]")};
      output[j + offset] = ${M[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${nn(C,g,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return x&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:_},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:b}),getShaderSource:I}},ic=(e,t)=>{nc(e.inputs),e.compute(rc(e.inputs,t,e.outputCount))}}),ac,sc,Ug=X(()=>{ue(),mi(),wi(),ac=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},sc=e=>{ac(e.inputs);let t=en.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(fi(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),d=[1,a,n],c=[o,u];e.compute(jn(c,{activation:""},t,d),{inputs:c})}else e.compute(jn(e.inputs,{activation:""},t))}}}),oc,uc,lc,dc,cc,Pg=X(()=>{oe(),ue(),Ae(),le(),oc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(u)!==d)throw new Error("zeroPoints input size error.")}},uc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Me(t.k),f=Me(d),m=Me(s),g=o.concat([i,s]),_=i>1&&s/m%2===0?2:1,b=D.size(g)/m/_,x=64,$=[],I=[u,i,a/p],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,d/f),$.push(...ie(I)),$.push(...ie(S)),$.push(...ie(e[2].dims)),e.length===4&&$.push(...ie(D.convertShape(e[3].dims)));let k=[u,i,s/m];$.push(...ie(k));let C=M=>{let v=I.length,O=q("a",e[0].dataType,v,p),N=q("b",12,S.length,f),F=q("scales",e[2].dataType,e[2].dims.length),L=[O,N,F],V=e.length===4?q("zero_points",12,e[3].dims.length):void 0;V&&L.push(V);let A=k.length,G=ne("output",e[0].dataType,A,m),H=Re(e[0].dataType),K=(()=>{switch(p){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ae=Math.floor(32/t.bits),U=Math.floor(ae/8),J=()=>{let z="";for(let B=0;B<U;B++){let j=B*t.bits*4,te=j+t.bits;z+=`
          // reuse a data (pass ${B})
            var input_offset${B>0?B:""} = ${B===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${B>0?B:""}: ${K};
            for (var j${B>0?B:""}: u32 = 0; j${B>0?B:""} < ${8/p}; j${B>0?B:""}++) {
              a_data${B>0?B:""}[j${B>0?B:""}] = ${O.getByOffset(`input_offset${B>0?B:""}`)};
              input_offset${B>0?B:""}++;
            }
          `;for(let Z=0;Z<m*_;Z++)z+=`
            b_value = ${f===1?`b${Z}_data`:`b${Z}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${B*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${j}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${te}u) & b_mask);`}
            b_quantized_values = ${K}(${Array.from({length:4},(de,ve)=>`${H}(b_value_lower[${ve}]), ${H}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${p===1?`${K}(${Array.from({length:8},(de,ve)=>`(b_quantized_values[${ve}] - ${V?`zero_point${Z}`:"zero_point"}) * scale${Z}`).join(", ")});`:`(b_quantized_values - ${K}(${Array(8).fill(`${V?`zero_point${Z}`:"zero_point"}`).join(",")})) * scale${Z};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(Z/m)}]${m>1?`[${Z%m}]`:""} += ${Array.from({length:8/p},(de,ve)=>`${p===1?`a_data${B>0?B:""}[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data${B>0?B:""}[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `}return z},W=()=>{let z=`
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
            let zero_point = ${H}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let B=0;B<m*_;B++)z+=`
            let scale${B} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${H}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return z},Y=()=>{let z=`col_index = col * ${m};`;for(let B=0;B<m*_;B++)z+=`
            let b${B}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${K};
            var b_dequantized_values: ${K};`,z};return`
        var<workgroup> workgroup_shared: array<${G.type.value}, ${_*x}>;
        ${M.declareVariables(...L,G)}
        ${M.mainStart([x,1,1])}
          let output_indices = ${G.offsetToIndices(`(global_idx / ${x}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${Y()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${J()}
                word_offset += ${ae/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${G.type.value} = ${G.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${G.setByIndices(`${G.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${m};${_};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:b},programUniforms:$}),getShaderSource:C}},lc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Me(t.k),f=Me(d),m=o.concat([i,s]),g=128,_=s%8===0?8:s%4===0?4:1,b=g/_,x=Math.floor(32/t.bits),$=b*f*x,I=$/p,S=$/t.blockSize,k=D.size(m)/_,C=[],M=[u,i,a/p],v=D.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),C.push(...ie(M)),C.push(...ie(v)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(D.convertShape(e[3].dims)));let O=[u,i,s];C.push(...ie(O));let N=F=>{let L=M.length,V=q("a",e[0].dataType,L,p),A=q("b",12,v.length,f),G=q("scales",e[2].dataType,e[2].dims.length),H=[V,A,G],K=e.length===4?q("zero_points",12,e[3].dims.length):void 0;K&&H.push(K);let ae=O.length,U=ne("output",e[0].dataType,ae),J=Re(e[0].dataType),W=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${U.type.value}, ${b}>, ${_}>;
        ${F.declareVariables(...H,U)}
        ${F.mainStart([b,_,1])}
          let output_indices = ${U.offsetToIndices(`workgroup_index * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${g})
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
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${J}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${J}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${G.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let Y=Math.floor(x/8),z="";for(let B=0;B<Y;B++){let j=B*t.bits*4,te=j+t.bits;z+=`
              ${W()}
              {${t.bits===2?`
                let half_word = b_value >> ${B*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(Z,de)=>`${J}(b_value_lower[${de}]), ${J}(b_value_upper[${de}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Z,de)=>`${`dot(a_data${de}, b_dequantized_values[${de}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${U.type.value} = ${U.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${U.setByIndices(`${U.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${b};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:N}},dc=(e,t)=>{oc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(lc(e.inputs,t)):e.compute(uc(e.inputs,t))},cc=e=>$e(e)}),pc,hc,fc,mc,gc,yc,_c,wc,bc,Lg=X(()=>{oe(),ue(),le(),pc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},hc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${re("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${re("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},fc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${re("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${re("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${re("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},mc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${re("uniforms.x_shape",i,t)})) {
                  k = i32(${re("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${re("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},gc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${re("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${re("uniforms.x_shape",i,t)})) {
                  k -= i32(${re("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${re("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},yc=(e,t,n)=>{switch(n.mode){case 0:return hc(e,t,n.pads.length);case 1:return fc(e,t,n.pads.length);case 2:return mc(e,t,n.pads.length);case 3:return gc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},_c=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=D.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ie(e[0].dims,n));let o=["rank"],u=d=>{let c=ne("output",e[0].dataType,n.length),p=q("x",e[0].dataType,r.length),f=p.type.value,m=yc(c,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(g).declareVariables(p,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:a}),getShaderSource:u}},wc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},bc=(e,t)=>{pc(e.inputs);let n=wc(e.inputs,t);e.compute(_c(e.inputs,n),{inputs:[0]})}}),bn,Oi,Bi,Ni,Di,$c,xc,Ui,Pi,vc,Sc,Li,Ic,Tc,qi,kc,Ec,Cc,Mc,qg=X(()=>{He(),oe(),ue(),le(),bn=e=>{if(ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Oi=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();Ln.adjustPoolAttributes(n,i,s,o,u,d);let c=Ln.computePoolOutputShape(n,i,o,u,s,d,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=c.slice();return f.push(f.splice(1,1)[0]),[p,r?f:c]},Bi=(e,t)=>{let n=t.format==="NHWC",r=D.size(e),i=D.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],p=!!(d+c);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(_+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:_},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,p,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,c)=>d+c);return[a,s,!!u,!1,!1]}},Ni=(e,t,n,r,i,a,s,o,u,d,c,p)=>{let f=i.format==="NHWC",m=t.type.value,g=ne("output",t.type.tensor,r);if(i.kernelShape.length<=2){let _="",b="",x="",$=n-(f?2:1);if(c?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let I=n-(f?3:2);p?b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
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
              ${_}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let _=i.kernelShape.length,b=i.pads.length,x="";return d?x=`
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

              var offsets: array<u32, ${_}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${_-1}u; j++) {
                  offsets[j] = offset / ${re("uniforms.kernelStrides","j",_)};
                  offset -= offsets[j] * ${re("uniforms.kernelStrides","j",_)};
                }
                offsets[${_-1}] = offset;

                isPad = false;
                for (var j = ${n-_}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${re("uniforms.strides",`j - ${n-_}u`,_)}
                    + offsets[j - ${n-_}u] - ${re("uniforms.pads","j - 2u",b)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},Di=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,$c=e=>`${Di(e)};${e.countIncludePad}`,xc=e=>`${Di(e)};${e.storageOrder};${e.dilations}`,Ui=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Pi=(e,t,n,r)=>{let[i,a]=Oi(t,r,n),s=q("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,p,f,m,g]=Bi(a,i);c.push(...ie(t.dims,a));let _=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:c}),getShaderSource:b=>Ni(b,s,t.dims.length,a.length,i,u,d,0,p,f,m,g)}},vc=e=>{let t=e.count_include_pad!==0,n=Ui(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:$c(r)}},Sc=(e,t)=>{bn(e.inputs),e.compute(Pi("AveragePool",e.inputs[0],!1,t))},Li={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Ic=e=>{let t=e.format;return{format:t,...Li,cacheKey:t}},Tc=(e,t)=>{bn(e.inputs),e.compute(Pi("GlobalAveragePool",e.inputs[0],!0,t))},qi=(e,t,n,r)=>{let[i,a]=Oi(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=q("x",t.dataType,t.dims.length),d=["rank"],[c,p,f,m,g]=Bi(a,i);return c.push(...ie(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:c}),getShaderSource:_=>Ni(_,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,p,f,m,g)}},kc=(e,t)=>{bn(e.inputs),e.compute(qi("MaxPool",e.inputs[0],!1,t))},Ec=e=>{let t=e.storage_order,n=e.dilations,r=Ui(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:xc(i)}},Cc=e=>{let t=e.format;return{format:t,...Li,cacheKey:t}},Mc=(e,t)=>{bn(e.inputs),e.compute(qi("GlobalMaxPool",e.inputs[0],!0,t))}}),Ac,zc,Rc,Oc,Gg=X(()=>{oe(),ue(),Ae(),le(),Ac=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},zc=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=D.size(a),u=r===3||r===2,d=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,p=e.length>2?e[2]:void 0,f=p?u?[Math.ceil(D.size(p.dims)/4)]:p.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,g=m===!1&&c.length===1,_=Me(o),b=m&&(!u||_===4),x=b?_:1,$=b&&!u?_:1,I=q("input",u?12:r,d.length,$),S=q("scale",s,c.length),k=p?q("zero_point",u?12:r,f.length):void 0,C=ne("output",s,a.length,x),M=[I,S];k&&M.push(k);let v=[d,c];p&&v.push(f);let O=[{type:12,data:o/x},{type:12,data:n},{type:12,data:t.blockSize},...ie(...v,a)],N=F=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(L).declareVariables(...M,C)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/x/64),y:1,z:1},programUniforms:O})}},Rc=(e,t)=>{Ac(e.inputs,t),e.compute(zc(e.inputs,t))},Oc=e=>$e({axis:e.axis,blockSize:e.blockSize})}),Bc,Nc,Dc,Wg=X(()=>{He(),oe(),le(),Bc=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Nc=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...ie(a)],u=d=>{let c=ne("output",r,a.length),p=c.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(f).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Dc=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ke.webgpu.validateInputContent&&Bc(t,n,r),e.compute(Nc(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Uc,Pc,Lc,qc,Vg=X(()=>{oe(),ue(),Ae(),le(),Uc=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Pc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(D.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=D.sizeFromDimension(n,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,i)],c=p=>{let f=q("indices",e[1].dataType,e[1].dims.length),m=q("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Hs("output",e[0].dataType,i.length):ne("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,g)}
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
    ${Uc(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},Lc=e=>$e({reduction:e.reduction}),qc=(e,t)=>{e.compute(Pc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Gc,Wc,Vc,Gi,Fc,Hc,jc,Kc,Xc,Yc,Zc,Qc,Wi,Jc,ep,tp,np,rp,ip,ap,Fg=X(()=>{oe(),ue(),Ae(),le(),Gc=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Wc=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Vc=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Gc(r,t),t.axes.length>0&&Wc(r,t.axes,d).forEach((c,p)=>r[p]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Gi=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Fc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Gi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Gi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Hc=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",jc=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},Kc=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Xc=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},Yc=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${re("uniforms.scales","i",r)};
        var roi_low = ${re("uniforms.roi","i",i)};
        var roi_hi = ${re("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${re("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Zc=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${re("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${re("uniforms.roi","i",a)};
          var roi_hi = ${re("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${re("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",r.length)};
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
    }`,Qc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Wi=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Jc=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Wi(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
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
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ep=(e,t,n,r,i,a,s,o,u,d)=>{let c=n.length===2,[p,f]=c?[0,1]:[2,3],m=e.type.value,g=_=>{let b=_===p?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",_)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[_]},
        ${r[_]}, ${n[_]}, ${a[_]}, ${a[_]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[_]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${m} = originalIdx + ${m}(i);
          if (${b} < 0 || ${b} >= ${n[_]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${b} = max(0, min(${b}, ${n[_]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",_,`u32(${b})`)};
          data[i + 1] = ${_===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(p)};
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
    `},tp=(e,t,n,r,i)=>{let[a,s,o,u,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Wi(e,d,a,3)}
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
      var channel: u32 = ${n.length>3?`u32(originalIndices[${d}])`:"0"};
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
    }`},np=(e,t,n,r,i,a)=>{let s=e.dims,o=jc(a,t.axes,s.length),u=Kc(s,r,i,t.axes),d=r.slice();r.length===0&&(d=s.map(($,I)=>$===0?1:u[I]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=Xc(s,d,t)));let c=ne("output",e.dataType,u.length),p=q("input",e.dataType,s.length),f=D.size(u),m=s.length===u.length&&s.every(($,I)=>$===u[I]),g=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,b=p.type.value,x=$=>`
      ${m?"":`
      ${Fc(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Qc(p,s)};
              ${Hc(t.nearestMode,n,b)};
              ${Zc(p,c,s,u,d.length,o.length,g)};
              `;case"linear":return`
              ${Yc(c,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Jc(p,c,s,g,_)}`;if(s.length===3||s.length===5)return`${tp(p,c,s,g,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ep(p,c,s,u,d,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,c)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ie(s,u)]})}},rp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},ip=(e,t)=>{let n=[],r=[],i=[],a=rp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Vc(e.inputs,t,a,n,r,i),e.compute(np(e.inputs[0],t,a,n,r,i),{inputs:[0]})},ap=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return $e({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),sp,op,up,Hg=X(()=>{oe(),ue(),le(),sp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},op=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=D.size(a),o=a,u=s,d=a.slice(-1)[0],c=r?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,_=n>3,b=64,x=Me(d),$=[{type:12,data:u},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],I=k=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],M=[q("x",e[0].dataType,e[0].dims,x),q("skip",e[1].dataType,e[1].dims,x),q("gamma",e[2].dataType,e[2].dims,x)];p&&M.push(q("beta",e[3].dataType,e[3].dims,x)),f&&M.push(q("bias",e[4].dataType,e[4].dims,x)),M.push(ne("output",e[0].dataType,o,x)),m&&M.push(ne("mean_output",1,c)),g&&M.push(ne("inv_std_output",1,c)),_&&M.push(ne("input_skip_bias_sum",e[0].dataType,o,x));let v=Re(e[0].dataType),O=Re(1,x);return`

      ${k.registerUniforms(C).declareVariables(...M)}
      var<workgroup> sum_shared : array<${O}, ${b}>;
      var<workgroup> sum_squared_shared : array<${O}, ${b}>;

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
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${nn(v,x,"value")};
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
        let mean = ${xt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xt("square_sum",x)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:c,dataType:1}),n>2&&S.push({dims:c,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${m};${g};${_}`,inputDependencies:e.map((k,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:$})}},up=(e,t)=>{sp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(op(e.inputs,t,e.outputCount,!1),{outputs:n})}}),lp,$n,dp,Vi,cp,pp,hp,fp,jg=X(()=>{oe(),ue(),Ae(),le(),lp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},$n=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},dp=(e,t)=>{if(e.length>1){let n=$n(e,1),r=$n(e,2),i=$n(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),$e({starts:n,ends:r,axes:i})}else return t},Vi=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},cp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${re("uniforms.input_shape","i",n.length)};
            let steps_i = ${re("uniforms.steps","i",n.length)};
            let signs_i = ${re("uniforms.signs","i",n.length)};
            let starts_i = ${re("uniforms.starts","i",n.length)};
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
      }`,pp=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=$n(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((x,$)=>Vi(x,$,n,i,a)),o=t.ends.map((x,$)=>Vi(x,$,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let x=0;x<n.length;++x)i.includes(x)||(s.splice(x,0,0),o.splice(x,0,n[x]),a.splice(x,0,1));let u=a.map(x=>Math.sign(x));a.forEach((x,$,I)=>{if(x<0){let S=(o[$]-s[$])/x,k=s[$],C=k+S*a[$];s[$]=C,o[$]=k,I[$]=-x}});let d=n.slice(0);i.forEach((x,$)=>{d[x]=Math.ceil((o[x]-s[x])/a[x])});let c={dims:d,dataType:e[0].dataType},p=ne("output",e[0].dataType,d.length),f=q("input",e[0].dataType,e[0].dims.length),m=D.size(d),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],_=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ie(e[0].dims,d)],b=x=>`
      ${x.registerUniforms(g).declareVariables(f,p)}
        ${cp(f,p,n)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:_})}},hp=(e,t)=>{lp(e.inputs,t);let n=dp(e.inputs,t);e.compute(pp(e.inputs,n),{inputs:[0]})},fp=e=>{let t=e.starts,n=e.ends,r=e.axes;return $e({starts:t,ends:n,axes:r})}}),mp,gp,yp,_p,Kg=X(()=>{oe(),ue(),Ae(),vt(),le(),mp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},gp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),a=r.length,s=D.normalizeAxis(t.axis,a),o=s<r.length-1,u,d=[];o?(d=Array.from({length:a},(M,v)=>v),d[s]=a-1,d[a-1]=s,u=e.compute(Fe(n,d),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,p=c[a-1],f=i/p,m=Me(p),g=p/m,_=64;f===1&&(_=256);let b=(M,v)=>v===4?`max(max(${M}.x, ${M}.y), max(${M}.z, ${M}.w))`:v===2?`max(${M}.x, ${M}.y)`:v===3?`max(max(${M}.x, ${M}.y), ${M}.z)`:M,x=q("x",u.dataType,u.dims,m),$=ne("result",u.dataType,u.dims,m),I=x.type.value,S=Re(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,k=M=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${M.registerUniform("packedCols","i32").declareVariables(x,$)}
      ${M.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
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
          rowMaxShared = ${I}(${b("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
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
          rowSumShared = ${I}(${xt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${m};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Fe(C,d),{inputs:[C]})},yp=(e,t)=>{mp(e.inputs),gp(e,t)},_p=e=>$e({axis:e.axis})}),Fi,wp,bp,$p,xp,Xg=X(()=>{oe(),ue(),le(),Fi=e=>Array.from(e.getBigInt64Array(),Number),wp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Fi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},bp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},$p=(e,t)=>{let n=e[0].dims,r=t??Fi(e[1]),i=bp(n,r),a=D.size(i),s=e[0].dataType,o=q("input",s,n.length),u=ne("output",s,i.length),d=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ie(e[0].dims,i)]}),getShaderSource:d}},xp=e=>{wp(e.inputs),e.compute($p(e.inputs),{inputs:[0]})}}),vp,Sp,Ip,Yg=X(()=>{oe(),ue(),le(),vp=(e,t,n,r,i)=>{let a=ne("output_data",i,n.length,4),s=q("a_data",t[1].dataType,t[1].dims.length,4),o=q("b_data",t[2].dataType,t[2].dims.length,4),u=q("c_data",t[0].dataType,t[0].dims.length,4),d,c=(p,f,m)=>`select(${f}, ${p}, ${m})`;if(!r)d=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(f,m,g="")=>{let _=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,x=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${f}[${m}] = ${g}(${c(_,b,x)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Sp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(D.areEqual(t,n)&&D.areEqual(n,r)),s=t,o=D.size(t);if(a){let d=en.calcShape(en.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=D.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>vp(d,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(r,t,n,s)]})}},Ip=e=>{e.compute(Sp(e.inputs))}}),Tp,Zg=X(()=>{cg(),oi(),pg(),hg(),fg(),mg(),gg(),$g(),vg(),Sg(),Ig(),Tg(),kg(),Eg(),Cg(),Mg(),Ag(),zg(),Rg(),Og(),Bg(),Ng(),Dg(),Ug(),Pg(),Ud(),Lg(),qg(),Gg(),Wg(),Vg(),ii(),Fg(),Kd(),Hg(),jg(),Kg(),Fd(),Xg(),vt(),ci(),Yg(),Tp=new Map([["Abs",[su]],["Acos",[ou]],["Acosh",[uu]],["Add",[Xu]],["ArgMax",[Fo,si]],["ArgMin",[Vo,si]],["Asin",[lu]],["Asinh",[du]],["Atan",[cu]],["Atanh",[pu]],["Attention",[Zo]],["AveragePool",[Sc,vc]],["BatchNormalization",[tu]],["BiasAdd",[iu]],["BiasSplitGelu",[Hu]],["Cast",[fu,hu]],["Ceil",[yu]],["Clip",[gu]],["Concat",[ll,dl]],["Conv",[Si,xi]],["ConvTranspose",[Dl,Ol]],["Cos",[_u]],["Cosh",[wu]],["CumSum",[Pl,Ll]],["DepthToSpace",[Vl,Fl]],["DequantizeLinear",[Rc,Oc]],["Div",[Yu]],["Einsum",[Zl,Ql]],["Elu",[bu,mn]],["Equal",[Zu]],["Erf",[$u]],["Exp",[xu]],["Expand",[nd]],["FastGelu",[id]],["Floor",[vu]],["FusedConv",[Si,xi]],["Gather",[ud,od]],["GatherElements",[wd,_d]],["GatherBlockQuantized",[fd,md]],["GatherND",[dd,cd]],["Gelu",[Su]],["Gemm",[vd,xd]],["GlobalAveragePool",[Tc,Ic]],["GlobalMaxPool",[Mc,Cc]],["Greater",[tl]],["GreaterOrEqual",[rl]],["GridSample",[zd,Rd]],["GroupQueryAttention",[Qd]],["HardSigmoid",[zu,Au]],["InstanceNormalization",[tc]],["LayerNormalization",[ic]],["LeakyRelu",[Iu,mn]],["Less",[nl]],["LessOrEqual",[il]],["Log",[Lu]],["MatMul",[sc]],["MatMulNBits",[dc,cc]],["MaxPool",[kc,Ec]],["Mul",[Qu]],["MultiHeadAttention",[Dd,Bd]],["Neg",[ku]],["Not",[Tu]],["Pad",[bc]],["Pow",[Ju]],["QuickGelu",[Wu,mn]],["Range",[Dc]],["Reciprocal",[Eu]],["ReduceMin",[Po]],["ReduceMean",[Oo]],["ReduceMax",[Uo]],["ReduceSum",[qo]],["ReduceProd",[Lo]],["ReduceL1",[Bo]],["ReduceL2",[No]],["ReduceLogSum",[Wo]],["ReduceLogSumExp",[Do]],["ReduceSumSquare",[Go]],["Relu",[Cu]],["Resize",[ip,ap]],["RotaryEmbedding",[jd]],["ScatterND",[qc,Lc]],["Sigmoid",[Mu]],["Sin",[Ru]],["Sinh",[Ou]],["Slice",[hp,fp]],["SkipLayerNormalization",[up]],["Split",[Wd,Vd]],["Sqrt",[Bu]],["Softmax",[yp,_p]],["Sub",[el]],["Tan",[Nu]],["Tanh",[Du]],["ThresholdedRelu",[Pu,mn]],["Tile",[xp]],["Transpose",[eo,to]],["Where",[Ip]]])}),kp,Qg=X(()=>{He(),ft(),le(),kp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){it(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Xe(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=Ks(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Xe(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ep={};Zt(Ep,{WebGpuBackend:()=>zp});var Cp,Mp,Ap,zp,Jg=X(()=>{He(),oe(),ft(),Os(),lg(),Zg(),Qg(),Cp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Mp=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Cp(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Ap=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},zp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Ap(s),this.gpuDataManager=Vs(this),this.programManager=new kp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,qr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,c=a.programName,p=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(x=>({dims:x.dims,dataType:ht(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:ht(x.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:c,startTime:_,endTime:b});else{let x="";p.forEach((I,S)=>{x+=`input[${S}]: [${I.dims}] | ${ht(I.dataType)}, `});let $="";f.forEach((I,S)=>{$+=`output[${S}]: [${I.dims}] | ${ht(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${c}" ${x}${$}start time: ${_} ns, execution time: ${b-_} ns`)}On("GPU",`${c}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Xe()}run(e,t,n,r,i,a){it(e.name);let s=[];for(let $=0;$<t.length;++$){let I=t[$].data;if(I===0)continue;let S=this.gpuDataManager.get(I);if(!S)throw new Error(`no GPU data for input: ${I}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),c=n.length===0?o.map(($,I)=>I):n;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let p=[],f=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(c[$])||c[$]<-3||c[$]>=a)throw new Error(`Invalid output index: ${c[$]}`);if(c[$]===-3)continue;let I=c[$]===-1,S=c[$]===-2,k=I||S?i(o[$].dataType,o[$].dims):r(c[$],o[$].dataType,o[$].dims);if(p.push(k),k.data===0)continue;let C=this.gpuDataManager.get(k.data);if(!C)throw new Error(`no GPU data for output: ${k.data}`);if(I&&this.temporaryData.push(C),S){let M=this.kernelPersistentData.get(this.currentKernelId);M||(M=[],this.kernelPersistentData.set(this.currentKernelId,M)),M.push(C)}f.push(C)}if(s.length!==t.length||f.length!==p.length){if(f.length===0)return Xe(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let $=0,I=[];d.forEach(M=>{let v=typeof M.data=="number"?[M.data]:M.data;if(v.length===0)return;let O=M.type===10?2:4,N,F;M.type===10?(F=v.length>4?16:v.length>2?8:v.length*O,N=v.length>4?16:O*v.length):(F=v.length<=2?v.length*O:16,N=16),$=Math.ceil($/F)*F,I.push($);let L=M.type===10?8:4;$+=v.length>4?Math.ceil(v.length/L)*N:v.length*O});let S=16;$=Math.ceil($/S)*S;let k=new ArrayBuffer($);d.forEach((M,v)=>{let O=I[v],N=typeof M.data=="number"?[M.data]:M.data;if(M.type===6)new Int32Array(k,O,N.length).set(N);else if(M.type===12)new Uint32Array(k,O,N.length).set(N);else if(M.type===10)new Uint16Array(k,O,N.length).set(N);else if(M.type===1)new Float32Array(k,O,N.length).set(N);else throw new Error(`Unsupported uniform type: ${ht(M.type)}`)});let C=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,k,0,$),this.gpuDataManager.release(C.id),m={offset:0,size:$,buffer:C.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),_=g[1]===1&&g[2]===1,b=Mp(e,t,_),x=this.programManager.getArtifact(b);if(x||(x=this.programManager.build(e,g),this.programManager.setArtifact(b,x),ge("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let $=0;$<d.length;$++){let I=d[$],S=I.type,k=typeof I.data=="number"?1:I.data.length,[C,M]=x.uniformVariablesInfo[$];if(S!==C||k!==M)throw new Error(`Uniform variable ${$} mismatch: expect type ${C} with size ${M}, got type ${S} with size ${k} in program "${x.programInfo.name}".`)}}if(ge("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(x,s,f,g,m),Xe(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Tp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ge("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{u&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Jr(this,e,t);return Gr(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Rp={};Zt(Rp,{init:()=>Bp});var Qn,Op,Bp,e0=X(()=>{oe(),ft(),ue(),ug(),Qn=class Pm{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new Pm(this.module,this.dataType,this.data,t)}},Op=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(r*i++,a)),c=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,a)),f=[];for(let m=0;m<p;m++)f.push(Number(e.getValue(r*i++,a)));o.push(new Qn(e,d,c,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new Qn(this.module,u,this.output(o,d),d),a=(o,u)=>{let d=Dt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Qn(this.module,o,c,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Bp=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Jg(),un(Ep)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,c=!1)=>{if(c)ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),p)}},async(o,u,d)=>{ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,c)=>{ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new Op(t,s,Number(u));return s.computeKernel(Number(o),p,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Ls(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,c)=>a.ensureTensor(s,o,u,d,c),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Np,Hi,ji,St,Dp,Ki,Jn,Xi,Yi,Zi,Qi,Ji,ea,Up=X(()=>{He(),ag(),sg(),oe(),Ot(),Nr(),Ss(),Np=(e,t)=>{Ee()._OrtInit(e,t)!==0&&xe("Can't initialize onnxruntime.")},Hi=async e=>{Np(e.wasm.numThreads,Pn(e.logLevel))},ji=async(e,t)=>{var r,i;(i=(r=Ee()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(e0(),un(Rp)).init;t==="webgpu"&&await a("webgpu",Ee(),e,n),t==="webnn"&&await a("webnn",Ee(),e)}},St=new Map,Dp=e=>{let t=Ee(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&xe("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Ki=(e,t)=>{let n=Ee(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&xe("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let d=n.HEAPU32[i/4+1],c=[];for(let p=0;p<d;p++){let f=Number(n.getValue(i+8+p*a,"*"));c.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(p+d)*a,"*")))}return[o,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Jn=e=>{let t=Ee(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Xi=async(e,t)=>{var p,f,m,g;let n,r,i=Ee();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Jn(e);let a=0,s=0,o=0,u=[],d=[],c=[];try{if([s,u]=await vs(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let O of t.externalData){let N=typeof O=="string"?O:O.path;v.push(Lr(typeof O=="string"?O:O.data).then(F=>{i.mountExternalData(N,F)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let O=v,N=O==null?void 0:O.context,F=O==null?void 0:O.gpuDevice,L=O==null?void 0:O.deviceType,V=O==null?void 0:O.powerPreference;N?i.currentContext=N:F?i.currentContext=await i.webnnCreateMLContext(F):i.currentContext=await i.webnnCreateMLContext({deviceType:L,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&xe("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,b]=Dp(a),x=!!(t!=null&&t.enableGraphCapture),$=[],I=[],S=[],k=[],C=[];for(let v=0;v<_;v++){let[O,N,F]=Ki(a,v);O===0&&xe("Can't get an input name."),d.push(O);let L=i.UTF8ToString(O);$.push(L),S.push(N===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:ht(N),shape:F})}for(let v=0;v<b;v++){let[O,N,F]=Ki(a,v+_);O===0&&xe("Can't get an output name."),c.push(O);let L=i.UTF8ToString(O);I.push(L),k.push(N===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:ht(N),shape:F});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[L])??"cpu",A=i.webnnIsGraphOutput;if(V==="cpu"&&A&&A(a,L)){C.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(x&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(V)}}let M=null;return C.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&xe("Can't create IO binding."),M={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Pr(v))}),St.set(a,[a,d,c,M,x,!1]),[a,$,I,S,k]}catch(_){throw d.forEach(b=>i._OrtFree(b)),c.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&xe("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&xe("Can't release session."),_}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&xe("Can't release session options."),u.forEach(_=>i._free(_)),(g=i.unmountExternalData)==null||g.call(i)}},Yi=e=>{var u,d,c;let t=Ee(),n=St.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&xe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&xe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&xe("Can't release session."),St.delete(e)},Zi=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Ee(),u=o.PTR_SIZE,d=e[0],c=e[1],p=e[3],f=p,m,g;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let x=e[2].gpuBuffer;g=Dt(Nt(d),c);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,a,x,g)}}else if(p==="ml-tensor"){let x=e[2].mlTensor;g=Dt(Nt(d),c);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,x,Nt(d),c)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,m=o._malloc(g),n.push(m);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(m+$*u,Ye(x[$],n),"*")}}else{let $=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&$&&I){let S=o.UTF8ToString(i);if($(r,S)||I(r,S)){let k=Nt(d);g=Dt(k,c),f="ml-tensor";let C=o.webnnCreateTemporaryTensor,M=o.webnnUploadTensor;if(!C||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await C(r,k,c);M(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),m=v}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}}let _=o.stackSave(),b=o.stackAlloc(4*c.length);try{c.forEach(($,I)=>o.setValue(b+I*u,$,u===4?"i32":"i64"));let x=o._OrtCreateTensor(Nt(d),m,g,b,c.length,Pr(f));x===0&&xe(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(x)}finally{o.stackRestore(_)}},Qi=async(e,t,n,r,i,a)=>{var L,V,A,G;let s=Ee(),o=s.PTR_SIZE,u=St.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],c=u[1],p=u[2],f=u[3],m=u[4],g=u[5],_=t.length,b=r.length,x=0,$=[],I=[],S=[],k=[],C=[],M=s.stackSave(),v=s.stackAlloc(_*o),O=s.stackAlloc(_*o),N=s.stackAlloc(b*o),F=s.stackAlloc(b*o);try{[x,$]=_s(a),zt("wasm prepareInputOutputTensor");for(let U=0;U<_;U++)await Zi(n[U],I,k,e,c[t[U]],t[U],m);for(let U=0;U<b;U++)await Zi(i[U],S,k,e,p[r[U]],_+r[U],m);Rt("wasm prepareInputOutputTensor");for(let U=0;U<_;U++)s.setValue(v+U*o,I[U],"*"),s.setValue(O+U*o,c[t[U]],"*");for(let U=0;U<b;U++)s.setValue(N+U*o,S[U],"*"),s.setValue(F+U*o,p[r[U]],"*");if(f&&!g){let{handle:U,outputPreferredLocations:J,outputPreferredLocationsEncoded:W}=f;if(c.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${c.length}).`);zt("wasm bindInputsOutputs");for(let Y=0;Y<_;Y++){let z=t[Y];await s._OrtBindInput(U,c[z],I[Y])!==0&&xe(`Can't bind input[${Y}] for session=${e}.`)}for(let Y=0;Y<b;Y++){let z=r[Y];(L=i[Y])!=null&&L[3]?(C.push(S[Y]),s._OrtBindOutput(U,p[z],S[Y],0)!==0&&xe(`Can't bind pre-allocated output[${Y}] for session=${e}.`)):s._OrtBindOutput(U,p[z],0,W[z])!==0&&xe(`Can't bind output[${Y}] to ${J[Y]} for session=${e}.`)}Rt("wasm bindInputsOutputs"),St.set(e,[d,c,p,f,m,!0])}(V=s.jsepOnRunStart)==null||V.call(s,d),(A=s.webnnOnRunStart)==null||A.call(s,d);let H;f?H=await s._OrtRunWithBinding(d,f.handle,b,N,x):H=await s._OrtRun(d,O,v,_,F,b,N,x),H!==0&&xe("failed to call OrtRun().");let K=[],ae=[];zt("wasm ProcessOutputTensor");for(let U=0;U<b;U++){let J=Number(s.getValue(N+U*o,"*"));if(J===S[U]||C.includes(S[U])){K.push(i[U]),J!==S[U]&&s._OrtReleaseTensor(J)!==0&&xe("Can't release tensor.");continue}let W=s.stackSave(),Y=s.stackAlloc(4*o),z=!1,B,j=0;try{s._OrtGetTensorData(J,Y,Y+o,Y+2*o,Y+3*o)!==0&&xe(`Can't access output tensor data on index ${U}.`);let te=o===4?"i32":"i64",Z=Number(s.getValue(Y,te));j=s.getValue(Y+o,"*");let de=s.getValue(Y+o*2,"*"),ve=Number(s.getValue(Y+o*3,te)),fe=[];for(let ye=0;ye<ve;ye++)fe.push(Number(s.getValue(de+ye*o,te)));s._OrtFree(de)!==0&&xe("Can't free memory for tensor dims.");let Ie=fe.reduce((ye,se)=>ye*se,1);B=ht(Z);let Se=f==null?void 0:f.outputPreferredLocations[r[U]];if(B==="string"){if(Se==="gpu-buffer"||Se==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ye=[];for(let se=0;se<Ie;se++){let _e=s.getValue(j+se*o,"*"),Ue=s.getValue(j+(se+1)*o,"*"),Oe=se===Ie-1?void 0:Ue-_e;ye.push(s.UTF8ToString(_e,Oe))}K.push([B,fe,ye,"cpu"])}else if(Se==="gpu-buffer"&&Ie>0){let ye=s.jsepGetBuffer;if(!ye)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=ye(j),_e=Dt(Z,Ie);if(_e===void 0||!Dr(B))throw new Error(`Unsupported data type: ${B}`);z=!0,K.push([B,fe,{gpuBuffer:se,download:s.jsepCreateDownloader(se,_e,B),dispose:()=>{s._OrtReleaseTensor(J)!==0&&xe("Can't release tensor.")}},"gpu-buffer"])}else if(Se==="ml-tensor"&&Ie>0){let ye=s.webnnEnsureTensor,se=s.webnnIsGraphInputOutputTypeSupported;if(!ye||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Dt(Z,Ie)===void 0||!Ur(B))throw new Error(`Unsupported data type: ${B}`);if(!se(e,B,!1))throw new Error(`preferredLocation "ml-tensor" for ${B} output is not supported by current WebNN Context.`);let _e=await ye(e,j,Z,fe,!1);z=!0,K.push([B,fe,{mlTensor:_e,download:s.webnnCreateMLTensorDownloader(j,B),dispose:()=>{s.webnnReleaseTensorId(j),s._OrtReleaseTensor(J)}},"ml-tensor"])}else if(Se==="ml-tensor-cpu-output"&&Ie>0){let ye=s.webnnCreateMLTensorDownloader(j,B)(),se=K.length;z=!0,ae.push((async()=>{let _e=[se,await ye];return s.webnnReleaseTensorId(j),s._OrtReleaseTensor(J),_e})()),K.push([B,fe,[],"cpu"])}else{let ye=Un(B),se=new ye(Ie);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(s.HEAPU8.subarray(j,j+se.byteLength)),K.push([B,fe,se,"cpu"])}}finally{s.stackRestore(W),B==="string"&&j&&s._free(j),z||s._OrtReleaseTensor(J)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&xe("Can't clear bound outputs."),St.set(e,[d,c,p,f,m,!1]));for(let[U,J]of await Promise.all(ae))K[U][2]=J;return Rt("wasm ProcessOutputTensor"),K}finally{(G=s.webnnOnRunEnd)==null||G.call(s,d),s.stackRestore(M),I.forEach(H=>s._OrtReleaseTensor(H)),S.forEach(H=>s._OrtReleaseTensor(H)),k.forEach(H=>s._free(H)),x!==0&&s._OrtReleaseRunOptions(x),$.forEach(H=>s._free(H))}},Ji=e=>{let t=Ee(),n=St.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&xe("Can't get an profile file name."),t._OrtFree(i)},ea=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),It,Ge,rn,xn,vn,er,ta,tr,Vt,Ft,Pp,Lp,qp,Gp,Wp,Vp,Fp,Hp,jp=X(()=>{He(),Up(),Ot(),zr(),It=()=>!!ke.wasm.proxy&&typeof document<"u",rn=!1,xn=!1,vn=!1,tr=new Map,Vt=(e,t)=>{let n=tr.get(e);n?n.push(t):tr.set(e,[t])},Ft=()=>{if(rn||!xn||vn||!Ge)throw new Error("worker not ready")},Pp=e=>{switch(e.data.type){case"init-wasm":rn=!1,e.data.err?(vn=!0,ta[1](e.data.err)):(xn=!0,ta[0]()),er&&(URL.revokeObjectURL(er),er=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=tr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Lp=async()=>{if(!xn){if(rn)throw new Error("multiple calls to 'initWasm()' detected.");if(vn)throw new Error("previous call to 'initWasm()' failed.");if(rn=!0,It())return new Promise((e,t)=>{Ge==null||Ge.terminate(),hs().then(([n,r])=>{try{Ge=r,Ge.onerror=a=>t(a),Ge.onmessage=Pp,ta=[e,t];let i={type:"init-wasm",in:ke};!i.in.wasm.wasmPaths&&(n||Er)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),Ge.postMessage(i),er=n}catch(i){t(i)}},t)});try{await Br(ke.wasm),await Hi(ke),xn=!0}catch(e){throw vn=!0,e}finally{rn=!1}}},qp=async e=>{if(It())return Ft(),new Promise((t,n)=>{Vt("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ke}};Ge.postMessage(r)});await ji(ke,e)},Gp=async e=>It()?(Ft(),new Promise((t,n)=>{Vt("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};Ge.postMessage(r,[e.buffer])})):Jn(e),Wp=async(e,t)=>{if(It()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ft(),new Promise((n,r)=>{Vt("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ge.postMessage(i,a)})}else return Xi(e,t)},Vp=async e=>{if(It())return Ft(),new Promise((t,n)=>{Vt("release",[t,n]);let r={type:"release",in:e};Ge.postMessage(r)});Yi(e)},Fp=async(e,t,n,r,i,a)=>{if(It()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ft(),new Promise((s,o)=>{Vt("run",[s,o]);let u=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};Ge.postMessage(d,ea(u))})}else return Qi(e,t,n,r,i,a)},Hp=async e=>{if(It())return Ft(),new Promise((t,n)=>{Vt("end-profiling",[t,n]);let r={type:"end-profiling",in:e};Ge.postMessage(r)});Ji(e)}}),na,Kp,Xp,t0=X(()=>{He(),jp(),oe(),Sr(),Ss(),na=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Kp=e=>{switch(e[3]){case"cpu":return new qe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Dr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return qe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Ur(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return qe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Xp=class{async fetchModelAndCopyToWasmMemory(e){return Gp(await Lr(e))}async loadModel(e,t){it();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Wp(n,t),Xe()}async dispose(){return Vp(this.sessionId)}async run(e,t,n){it();let r=[],i=[];Object.entries(e).forEach(p=>{let f=p[0],m=p[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(p=>{let f=p[0],m=p[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(g)});let o=r.map((p,f)=>na(p,()=>`input "${this.inputNames[i[f]]}"`)),u=a.map((p,f)=>p?na(p,()=>`output "${this.outputNames[s[f]]}"`):null),d=await Fp(this.sessionId,i,o,s,u,n),c={};for(let p=0;p<d.length;p++)c[this.outputNames[s[p]]]=a[p]??Kp(d[p]);return Xe(),c}startProfiling(){}endProfiling(){Hp(this.sessionId)}}}),Yp={};Zt(Yp,{OnnxruntimeWebAssemblyBackend:()=>ia,initializeFlags:()=>ra,wasmBackend:()=>Zp});var ra,ia,Zp,n0=X(()=>{He(),jp(),t0(),ra=()=>{(typeof ke.wasm.initTimeout!="number"||ke.wasm.initTimeout<0)&&(ke.wasm.initTimeout=0);let e=ke.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ke.wasm.simd=!1),typeof ke.wasm.proxy!="boolean"&&(ke.wasm.proxy=!1),typeof ke.wasm.trace!="boolean"&&(ke.wasm.trace=!1),typeof ke.wasm.numThreads!="number"||!Number.isInteger(ke.wasm.numThreads)||ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ke.wasm.numThreads=1;else{let t=typeof navigator>"u"?qm("node:os").cpus().length:navigator.hardwareConcurrency;ke.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ia=class{async init(e){ra(),await Lp(),await qp(e)}async createInferenceSessionHandler(e,t){let n=new Xp;return await n.loadModel(e,t),n}},Zp=new ia});He(),He(),He();var r0="1.27.0";{let e=(n0(),un(Yp)).wasmBackend;Qt("webgpu",e,5),Qt("webnn",e,5),Qt("cpu",e,10),Qt("wasm",e,10)}Object.defineProperty(ke.versions,"web",{value:r0,enumerable:!0});/**
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
 */const i0=114;function a0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function Qp(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,d=i/n;for(let c=0;c<n;c++){const p=(c+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,p-f));for(let _=0;_<t;_++){const b=(_+.5)*u-.5,x=Math.max(0,Math.min(r-1,Math.floor(b))),$=Math.min(r-1,x+1),I=Math.max(0,Math.min(1,b-x)),S=(f*r+x)*a,k=(f*r+$)*a,C=(m*r+x)*a,M=(m*r+$)*a,v=(c*t+_)*3;for(let O=0;O<3;O++){const N=s[S+O]*(1-I)+s[k+O]*I,F=s[C+O]*(1-I)+s[M+O]*I;o[v+O]=Math.min(255,Math.max(0,Math.round(N*(1-g)+F*g)))}}}return o}function s0(e,t){const n=a0(e.width,e.height,t),r=Qp(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(i0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let d=0;d<n.resizedWidth;d++){const c=(u+d)*3,p=o+d;a[p]=r[c]/255,a[i+p]=r[c+1]/255,a[2*i+p]=r[c+2]/255}}return{tensor:a,params:n}}function o0(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],d=e[s*6+2],c=e[s*6+3],p=e[s*6+4],f=e[s*6+5];if(p<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,_=(u-t.padY)/t.scale,b=(d-t.padX)/t.scale,x=(c-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(g),Math.trunc(_),Math.trunc(b-g),Math.trunc(x-_)],boxFloat:[g,_,b-g,x-_]})}return i}function Sn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Jp(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function eh(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const u0=.6,l0=.8;function th(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,d=(e[a*6+2]-t.padX)/t.scale,c=(e[a*6+3]-t.padY)/t.scale,p=Sn((o+d)/2),f=Sn((u+c)/2),m=Sn((d-o+(c-u))/4);m>=1&&r.push({cx:p,cy:f,r:m})}return r}function d0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(u0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function c0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=l0*(n.r+r.r))&&t.push(n);return t}function p0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Jp(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function nh(e,t,n){const r=th(e,t,n);return r.length===0?[]:p0(c0(d0(r)))}function h0(e,t,n){return th(e,t,n)}function rh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const ih=["brown","grey","blue","green","yellow","red","purple"],f0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function ah(e,t,n){return o0(e,t,n,ih.length).map(r=>{const i=ih[r.classIndex];return{color:i,family:f0[i],box:r.box,confidence:r.confidence}})}const m0=8,g0=.8,sh=1.25;function y0(e){if(e.length<m0)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*sh?t.push(s):u>o*sh&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<g0*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const gt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function nt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const _0=.42,w0=22,b0=43,$0=120,x0=1.5,v0=.72,S0=110,oh=3;function In(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),d=Math.trunc(Math.min(r,i)*_0);if(d<1)return 0;let c=0;for(let p=0;p<i;p++)for(let f=0;f<r;f++){if((f-o)**2+(p-u)**2>d*d)continue;const m=(p*r+f)*a,g=s[m],_=s[m+1],b=s[m+2];!t&&g>=250&&_>=250&&b>=250||(n(g,_,b),c+=1)}return c}function I0(e){let t=0,n=0,r=0,i=In(e,!1,(a,s,o)=>{const u=nt(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=In(e,!0,(a,s,o)=>{const u=nt(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function T0(e){let t=0,n=0,r=In(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=In(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function k0(e){let t=0;const n=In(e,!0,(r,i,a)=>{t+=nt(r,i,a).s});return n===0?null:t/n}function E0(e){const t=I0(e);if(t===null||t.s<=w0)return 1;if(t.s>=$0){const n=T0(e);return n!==null&&n>=x0?6:3}return t.s>=b0?3:6}function C0(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function M0(e,t){const n=[...t];if(e.length<oh||t.length!==e.length)return n;const r=e.map(s=>k0(s)),i=r.filter(s=>s!==null);if(i.length<oh)return n;const a=Jp(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<v0*a&&s<S0&&(n[o]=1)}),n}function uh(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),d=Math.max(0,o-a),c=Math.max(0,u-s),p=new Uint8Array(d*c*3);for(let f=0;f<c;f++)for(let m=0;m<d;m++){const g=(f*d+m)*3;if((m+a-n)**2+(f+s-r)**2<=i*i){const b=((f+s)*e.width+(m+a))*e.channels;p[g]=e.data[b],p[g+1]=e.data[b+1],p[g+2]=e.data[b+2]}else p[g]=255,p[g+1]=255,p[g+2]=255}return{width:d,height:c,channels:3,data:p}}function A0(e,t){const n=t.map(a=>uh(e,a)),r=n.map(a=>E0(a)),i=C0(t,r);return M0(n,i)}function z0(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function lh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let d=0;d<t;d++){const c=d*i,p=Math.min((d+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const _=Math.min(g+1,u)-Math.max(g,o);if(!(_<=0))for(let b=Math.floor(c);b<p;b++){const x=Math.min(b+1,p)-Math.max(b,c);x<=0||(f+=e.data[g*e.width+b]*x*_,m+=x*_)}}r[s*t+d]=Math.min(255,Math.max(0,Sn(f/m)))}}return{width:t,height:n,data:r}}function R0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Sn(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function O0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const c=s+d,p=a+u;if(!(c<0||c>=t||p<0||p>=n)&&r[p*t+c]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function B0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const c=s+d,p=a+u;if(c>=0&&c<t&&p>=0&&p<n&&r[p*t+c]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function aa(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let d=0,c=0;s[c++]=u,i[u]=o;let p=0,f=0,m=0;for(;d<c;){const g=s[d++],_=g%t,b=g/t|0;p+=1,f+=_,m+=b;for(let x=-1;x<=1;x++)for(let $=-1;$<=1;$++){if($===0&&x===0)continue;const I=_+$,S=b+x;if(I<0||I>=t||S<0||S>=n)continue;const k=S*t+I;r[k]>0&&i[k]===0&&(i[k]=o,s[c++]=k)}}a[o]={area:p,centroidX:f/p,centroidY:m/p},o+=1}return{labels:i,stats:a}}function N0(e,t,n){return dh(Float32Array.from(e.data),e.width,t,n)}function dh(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let d=0;d<t;d++)for(let c=0;c<t;c++){const p=c-a,f=d-a,m=o*p-u*f+a,g=u*p+o*f+a,_=Math.floor(m),b=Math.floor(g),x=m-_,$=g-b,I=(C,M)=>C>=0&&C<t&&M>=0&&M<t?e[M*t+C]:r,S=I(_,b)*(1-x)+I(_+1,b)*x,k=I(_,b+1)*(1-x)+I(_+1,b+1)*x;i[d*t+c]=S*(1-$)+k*$}return i}const D0=.9,U0=.34,P0=[.55,.6,.66,.72],L0=22,q0=88,G0=35,an=28,sa=4,W0=Array.from({length:15},(e,t)=>-21+t*3),ch=[-2,0,2],V0=3,F0=.3;function H0(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function j0(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let _=0;_<e.height;_++)for(let b=0;b<e.width;b++)e.data[_*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,_),i=Math.max(i,_));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),d=new Uint8Array(u*u),c=Math.floor((u-s)/2),p=Math.floor((u-o)/2);for(let _=0;_<o;_++)for(let b=0;b<s;b++)d[(_+p)*u+(b+c)]=e.data[(_+r)*e.width+(b+t)];const f=an-2*sa,m=lh({width:u,height:u,data:d},f,f),g=new Float32Array(an*an);for(let _=0;_<f;_++)for(let b=0;b<f;b++)g[(_+sa)*an+(b+sa)]=m.data[_*f+b]>110?1:0;return g}function K0(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*U0);if(u<4)return null;const d=s-u,c=o-u,p=2*u,f=2*u;if(p<6||f<6)return null;const m=new Int16Array(p*f),g=new Int16Array(p*f),_=new Int16Array(p*f),b=new Uint8Array(p*f),x=[],$=Math.min(p,f)/2;for(let U=0;U<p;U++)for(let J=0;J<f;J++){const W=((U+d)*n+(J+c))*i,{h:Y,s:z,v:B}=nt(a[W],a[W+1],a[W+2]),j=U*f+J;m[j]=Y,g[j]=z,_[j]=B,Math.sqrt((J-f/2)**2+(U-p/2)**2)/$<=t&&(b[j]=1,x.push(B))}if(x.length<16)return null;const I=eh(x,55);let S=0,k=0,C=0;const M=U=>m[U]>=L0&&m[U]<=q0&&g[U]>=G0,v=U=>_[U]>=I&&g[U]<=95&&!M(U)&&b[U]===1;for(let U=0;U<p*f;U++)b[U]===1&&(C+=1,_[U]>=130&&!M(U)&&(S+=1),v(U)&&(k+=1));const O=S>.5*C&&k<.15*C,N=new Uint8Array(p*f);if(O){const U=eh(x,45);for(let J=0;J<p*f;J++)N[J]=b[J]===1&&_[J]<=U?255:0}else for(let U=0;U<p*f;U++)N[U]=v(U)?255:0;const F={width:f,height:p,data:N},L=O0(F);let V=aa(L),A=V;if(V.stats.length<=1&&(V=aa(F),A=V,V.stats.length<=1))return null;const G=Math.min(p,f)/2;let H=0,K=-1;for(let U=1;U<A.stats.length;U++){const J=A.stats[U];if(J===void 0)continue;const W=Math.hypot(J.centroidX-f/2,J.centroidY-p/2)/G,Y=J.area*(1-.6*Math.min(W,1));Y>K&&(K=Y,H=U)}if(H===0)return null;const ae=new Uint8Array(p*f);for(let U=0;U<p*f;U++)ae[U]=A.labels[U]===H?255:0;return j0(B0({width:f,height:p,data:ae}))}function X0(e,t,n,r,i,a){const s=an;let o=0,u=0;for(let d=0;d<s;d++){const c=d-a;if(!(c<0||c>=s))for(let p=0;p<s;p++){const f=p-i;if(f<0||f>=s)continue;const m=e[c*s+f];m!==0&&(u+=m,o+=m*n[d*s+p])}}return o/(u+r-o+1e-6)}function Y0(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of W0){const a=i===0?e:dh(e,an,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of ch)for(const u of ch){const d=X0(a,s,t,n,o,u);d>r&&(r=d)}}return r}function Z0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of P0){const o=K0(e,s);if(o!==null)for(const{label:u,bits:d}of t)n.push([Y0(o,d),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<F0)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,V0))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const yt=48,Q0=320;function J0(e){return["blank",...e.characters," "]}function ey(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function ty(e,t){const n=Math.trunc(yt*t),r=e.width/e.height,i=Math.ceil(yt*r)>n?n:Math.ceil(yt*r),a=new Float32Array(3*yt*n),s=yt*n,o=e.width/i,u=e.height/yt;for(let d=0;d<yt;d++){const c=(d+.5)*u-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(c))),f=Math.min(e.height-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let g=0;g<i;g++){const _=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(_))),x=Math.min(e.width-1,b+1),$=Math.max(0,Math.min(1,_-b));for(let I=0;I<3;I++){const S=2-I,k=(p*e.width+b)*e.channels+S,C=(p*e.width+x)*e.channels+S,M=(f*e.width+b)*e.channels+S,v=(f*e.width+x)*e.channels+S,O=e.data[k]*(1-$)+e.data[C]*$,N=e.data[M]*(1-$)+e.data[v]*$,F=O*(1-m)+N*m;a[I*s+d*n+g]=(F/255-.5)/.5}}}return{tensor:a,width:n}}const ny=62,ry=8,iy=5;function oa(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function ay(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function nr(e,t){return e.length===0&&t.length===0?100:200*ay(e,t)/(e.length+t.length)}function ph(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return nr(n(e),n(t))}function sy(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),a=[...n].filter(c=>!r.has(c)).sort(),s=[...r].filter(c=>!n.has(c)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),d=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(nr(o,u),nr(o,d),nr(u,d))}function oy(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[oa(i),oa(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function uy(e,t){const n=oa(e);if(!n||t.length===0)return null;const i=oy(t).map(c=>({...c,score:sy(n,c.key)})).sort((c,p)=>p.score-c.score).slice(0,ry).filter(c=>c.score>=ny);if(i.length===0)return null;const a=i[0].score,s=i.filter(c=>a-c.score<=iy),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],d=[ph(o,u.key),u.score];for(const c of s.slice(1)){const p=[ph(o,c.key),c.score];(p[0]>d[0]||p[0]===d[0]&&p[1]>d[1])&&(u=c,d=p)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const ly=2560,dy=.3,cy=.5,py=1.6,hy=3,fy=5;function my(e){const t=Math.min(1,ly/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const d=(u+.5)*o-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,d-c));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,g-_));for(let $=0;$<3;$++){const I=2-$,S=(c*e.width+_)*e.channels+I,k=(c*e.width+b)*e.channels+I,C=(p*e.width+_)*e.channels+I,M=(p*e.width+b)*e.channels+I,v=e.data[S]*(1-x)+e.data[k]*x,O=e.data[C]*(1-x)+e.data[M]*x,N=v*(1-f)+O*f;a[$*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function gy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const d=o+t;e[d]>u&&(u=e[d]),s+1<t&&e[d+1]>u&&(u=e[d+1])}r[o]=u}}return r}function yy(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function _y(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,d=o-a,c=Math.hypot(u,d);if(c===0)continue;const p=u/c,f=d/c;let m=1/0,g=-1/0,_=1/0,b=-1/0;for(const[S,k]of e){const C=S*p+k*f,M=-S*f+k*p;C<m&&(m=C),C>g&&(g=C),M<_&&(_=M),M>b&&(b=M)}const x=g-m,$=b-_,I=x*$;if(I<n){n=I;const S=(m+g)/2,k=(_+b)/2;t={cx:S*p-k*f,cy:S*f+k*p,w:x,h:$,angle:Math.atan2(f,p)}}}return t}function wy(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),d=Math.abs(s*a)+Math.abs(o*i),c=Math.max(0,Math.floor(r.cx-u)),p=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-d)),m=Math.min(n-1,Math.ceil(r.cy+d));let g=0,_=0;for(let b=f;b<=m;b++)for(let x=c;x<=p;x++){const $=x-r.cx,I=b-r.cy,S=$*i+I*a,k=-$*a+I*i;Math.abs(S)<=s&&Math.abs(k)<=o&&(g+=e[b*t+x],_+=1)}return _===0?0:g/_}function by(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((_,b)=>_[0]-b[0]),[o,u,d,c]=s,[p,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=d[1]<=c[1]?[d,c]:[c,d];return[[p[0],p[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function $y(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>dy?255:0;s=gy(s,i,a);const o={width:i,height:a,data:s},{labels:u}=aa(o),d=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const _=u[m*i+g];if(_===0)continue;let b=d.get(_);b===void 0&&(b=new Map,d.set(_,b));const x=b.get(m);x===void 0?b.set(m,[g,g]):(g<x[0]&&(x[0]=g),g>x[1]&&(x[1]=g))}const c=n/i,p=r/a,f=[];for(const[m,g]of d){const _=[];for(const[N,[F,L]]of g)_.push([F-.5,N-.5],[F-.5,N+.5],[L+.5,N-.5],[L+.5,N+.5]);const b=_y(yy(_));if(Math.min(b.w,b.h)<hy)continue;const x=wy(e,i,a,b);if(x<cy)continue;const $=b.w*b.h*py/(2*(b.w+b.h)),I={...b,w:b.w+2*$,h:b.h+2*$};if(Math.min(I.w,I.h)<fy+2)continue;const k=by(I).map(([N,F])=>[Math.min(n,Math.max(0,Math.round(N*c))),Math.min(r,Math.max(0,Math.round(F*p)))]),C=k.map(N=>N[0]),M=k.map(N=>N[1]),v=Math.min(...C),O=Math.min(...M);f.push({quad:k,x:v,y:O,width:Math.max(...C)-v,height:Math.max(...M)-O,score:x})}return f.sort((m,g)=>g.score-m.score)}function xy(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=vy([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),d=new Uint8Array(s*o*e.channels);for(let p=0;p<o;p++)for(let f=0;f<s;f++){const m=u[6]*f+u[7]*p+u[8],g=(u[0]*f+u[1]*p+u[2])/m,_=(u[3]*f+u[4]*p+u[5])/m,b=Math.floor(g),x=Math.floor(_),$=g-b,I=_-x,S=Math.max(0,Math.min(e.width-1,b)),k=Math.max(0,Math.min(e.width-1,b+1)),C=Math.max(0,Math.min(e.height-1,x)),M=Math.max(0,Math.min(e.height-1,x+1));for(let v=0;v<e.channels;v++){const O=e.data[(C*e.width+S)*e.channels+v],N=e.data[(C*e.width+k)*e.channels+v],F=e.data[(M*e.width+S)*e.channels+v],L=e.data[(M*e.width+k)*e.channels+v],V=O*(1-$)+N*$,A=F*(1-$)+L*$;d[(p*s+f)*e.channels+v]=Math.round(V*(1-I)+A*I)}}const c={width:s,height:o,channels:e.channels,data:d};return o/s>=1.5?Tn(c,3):c}function vy(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let d=i;d<8;d++)n[o][d]-=u*n[i][d];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Tn(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,d=new Uint8Array(o*u*a);for(let c=0;c<i;c++)for(let p=0;p<r;p++){let f,m;n===1?(f=i-1-c,m=p):n===2?(f=r-1-p,m=i-1-c):(f=c,m=r-1-p);const g=(c*r+p)*a,_=(m*o+f)*a;for(let b=0;b<a;b++)d[_+b]=s[g+b]}return{width:o,height:u,channels:a,data:d}}const Sy=5e3,hh=.75,Iy=15,Ty=1.25,ky=2.4,Ey=.003,Cy=.85,My=4,fh=2600,mh=2,gh=.3,yh=.1,_h=.012,Ay=22,wh=.5,rr=.12;function je(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function zy(e,t,n,r){const i=r.map(Z=>Z[0]),a=r.map(Z=>Z[1]),s=i.reduce((Z,de)=>Z+de,0)/i.length,o=a.reduce((Z,de)=>Z+de,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const d=u*My,c=Math.max(0,Math.trunc(s-d)),p=Math.min(n.width,Math.trunc(s+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(n.height,Math.trunc(o+d));if(p-c<8||m-f<8)return null;const g=Math.max(n.width,n.height)<fh?mh:1,_=je(e,n),b=je(e,t),x=new e.Rect(c,f,p-c,m-f),$=_.roi(x),I=new e.Mat;g!==1?e.resize($,I,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(I);const S=new e.Mat,k=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(I,k,e.COLOR_RGB2GRAY);const C=new e.ORB(Sy),M=new e.KeyPointVector,v=new e.KeyPointVector,O=new e.Mat,N=new e.Mat,F=new e.Mat,L=[_,b,$,I,S,k,M,v,O,N,F],V=Z=>{for(const de of L)try{de.delete()}catch{}try{C.delete()}catch{}return Z};if(C.detectAndCompute(S,F,M,O),C.detectAndCompute(k,F,v,N),O.rows<8||N.rows<8)return V(null);const A=new e.BFMatcher(e.NORM_HAMMING),G=new e.DMatchVectorVector;A.knnMatch(O,N,G,2);const H=[],K=[];for(let Z=0;Z<G.size();Z++){const de=G.get(Z);if(de.size()===2){const ve=de.get(0),fe=de.get(1);if(ve.distance<hh*fe.distance){const Ie=M.get(ve.queryIdx).pt,Se=v.get(ve.trainIdx).pt;H.push(Ie.x,Ie.y),K.push(Se.x,Se.y)}}}if(G.delete(),A.delete(),H.length/2<8)return V(null);const ae=e.matFromArray(H.length/2,1,e.CV_32FC2,H),U=e.matFromArray(K.length/2,1,e.CV_32FC2,K),J=new e.Mat,W=e.findHomography(ae,U,e.RANSAC,5,J);let Y=0;for(let Z=0;Z<J.rows;Z++)Y+=J.data[Z];const z=W.rows===3?[...W.data64F]:null;if(ae.delete(),U.delete(),J.delete(),W.delete(),z===null||Y<Iy)return V(null);const B=1/g,j=[[B,0,c],[0,B,f],[0,0,1]],te=[0,1,2].map(Z=>[0,1,2].map(de=>j[Z][0]*z[de]+j[Z][1]*z[3+de]+j[Z][2]*z[6+de]));return V({H:te,inliers:Y})}function bh(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[d,c]=e[u],[p,f]=e[(u+1)%4];r+=d*f-p*c}const i=Math.abs(r/2)/(t*n);if(i<Ey||i>Cy)return!1;const a=e.map((u,d)=>{const c=e[(d+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=Ty&&o<=ky}function $h(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function xh(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(gh*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const d=r.map(L=>[L[0],L[1],L[2]-s*(L[0]+L[1])+0]);for(let L=0;L<3;L++)d[L][2]=r[L][2]-s*r[L][0]-s*r[L][1];const c=je(e,t),p=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(c,p,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),c.delete(),f.delete();const g=m.data,_=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],x=(L,V)=>{const A=(V*o+L)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let L=0;L<u;L++)for(let V=0;V<o;V++)(L<_||L>=u-_||V<_||V>=o-_)&&x(V,L);const $=L=>{L.sort((A,G)=>A-G);const V=L.length>>1;return L.length%2?L[V]:(L[V-1]+L[V])/2},I=[$(b[0]),$(b[1]),$(b[2])],S=(L,V)=>{const A=(V*o+L)*3,G=g[A]-I[0],H=g[A+1]-I[1],K=g[A+2]-I[2];return Math.sqrt(G*G+H*H+K*K)>Ay},k=Math.max(6,Math.trunc(yh*i)),C=Math.max(6,Math.trunc(yh*a)),M=Math.max(2,Math.trunc(_h*i)),v=Math.max(2,Math.trunc(_h*a)),O=L=>{let V=0,A=0;for(const G of L)A=G?A+1:0,A>V&&(V=A);return V/Math.max(1,L.length)},N=L=>{let V,A,G,H,K;if(L==="L"?(V=s,A=s+a,G=Math.max(0,s-M-k),H=Math.max(0,s-M),K=!1):L==="R"?(V=s,A=s+a,G=s+i+M,H=Math.min(o,s+i+M+k),K=!1):(V=Math.max(0,s-v-C),A=Math.max(0,s-v),G=s,H=s+i,K=!0),A<=V||H<=G)return 0;const ae=[];if(K)for(let U=G;U<H;U++){let J=0;for(let W=V;W<A;W++)S(U,W)&&J++;ae.push(J/(A-V)>wh)}else for(let U=V;U<A;U++){let J=0;for(let W=G;W<H;W++)S(W,U)&&J++;ae.push(J/(H-G)>wh)}return O(ae)},F={L:N("L"),R:N("R"),T:N("T")};return p.delete(),m.delete(),F}const Ry=6e3,Oy=8,By=.5,Ny=.6;function Dy(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<fh?mh:1,a=je(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(Ry),d=new e.Mat,c=new e.KeyPointVector,p=new e.Mat;u.detectAndCompute(o,d,c,p);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(p.rows<8)return f;for(const[g,_]of n){if(r!==void 0&&Date.now()>r)break;const b=je(e,_),x=new e.Mat;e.cvtColor(b,x,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,I=new e.Mat;u.detectAndCompute(x,d,$,I);const S=[b,$,I],k=()=>{for(const te of S)te.delete();x.delete()};if(I.rows<8){k();continue}const C=new e.DMatchVectorVector;m.knnMatch(I,p,C,2);const M=[],v=[];for(let te=0;te<C.size();te++){const Z=C.get(te);if(Z.size()===2){const de=Z.get(0);if(de.distance<hh*Z.get(1).distance){const ve=$.get(de.queryIdx).pt,fe=c.get(de.trainIdx).pt;M.push(ve.x,ve.y),v.push(fe.x,fe.y)}}}if(C.delete(),M.length/2<8){k();continue}const O=e.matFromArray(M.length/2,1,e.CV_32FC2,M),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),F=new e.Mat,L=e.findHomography(O,N,e.RANSAC,5,F);let V=0;for(let te=0;te<F.rows;te++)V+=F.data[te];const A=L.rows===3?[...L.data64F]:null;if(O.delete(),N.delete(),F.delete(),L.delete(),A===null||V<Oy){k();continue}const G=1/i,H=[[G*A[0],G*A[1],G*A[2]],[G*A[3],G*A[4],G*A[5]],[A[6],A[7],A[8]]],K=[[0,0],[_.width,0],[_.width,_.height],[0,_.height]].map(([te,Z])=>$h(H,te,Z));if(!bh(K,t.width,t.height)){k();continue}const ae=je(e,t),U=e.matFromArray(3,3,e.CV_64F,H.flat()),J=new e.Mat;e.warpPerspective(ae,J,U,new e.Size(_.width,_.height),e.WARP_INVERSE_MAP);const W=new e.Mat;e.cvtColor(J,W,e.COLOR_RGB2GRAY);const Y=new e.Mat;e.matchTemplate(W,x,Y,e.TM_CCOEFF_NORMED);const z=Y.data32F[0];if(ae.delete(),U.delete(),J.delete(),W.delete(),Y.delete(),z<By){k();continue}const B=xh(e,t,_,H),j=B===null?[]:Object.keys(B).filter(te=>B[te]>=rr);f.push({id:g,confidence:Math.max(0,z),footprint:K,built:B!==null&&Math.max(B.L,B.R,B.T)>=rr,tuckRegion:vh(K,j)}),k()}}finally{o.delete(),d.delete(),c.delete(),p.delete();try{u.delete(),m.delete()}catch{}}return f}function vh(e,t){if(e.length<4||t.length===0)return null;const n=e.map(_=>[_[0],_[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=gh*a;if(!(s>0))return null;const o=n.reduce((_,b)=>_+b[0],0)/n.length,u=n.reduce((_,b)=>_+b[1],0)/n.length,d={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const _ of["L","R","T"]){if(!t.includes(_))continue;const[b,x]=d[_],$=n[b],I=n[x];let S=-(I[1]-$[1]),k=I[0]-$[0];const C=($[0]+I[0])/2,M=($[1]+I[1])/2;S*(C-o)+k*(M-u)<0&&(S=-S,k=-k);const v=Math.hypot(S,k);v<=1e-6||(S=S/v*s,k=k/v*s,c.push([$[0]+S,$[1]+k],[I[0]+S,I[1]+k]))}const p=c.map(_=>_[0]),f=c.map(_=>_[1]),m=Math.round(Math.min(...p)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...f))-g}}function Uy(e,t,n,r){const i=zy(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([d,c])=>$h(i.H,d,c));if(!bh(s,t.width,t.height))return null;const o=xh(e,t,n,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=rr);return{built:Math.max(o.L,o.R,o.T)>=rr,footprint:s,overflow:u,inliers:i.inliers}}const kn=120,En=179,Py=1.3,Ly=3.6,qy=.45,Gy=6e-4,Wy=.02,Vy=6e3,Fy=.78,Hy=1.25,jy=2.4,Ky=.05,Xy=1.5,Yy=.5,Zy=.9,Qy=150,Jy=18,e_=34,t_=90,n_=130,r_=.13,i_=.15,ir="magistrates-guild",ua="merchants-guild";function a_(e,t){const n=je(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[kn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[En,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),d=new e.Mat;e.morphologyEx(s,d,e.MORPH_CLOSE,u),s.delete(),u.delete();const c=new e.Mat,p=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(d,c,p,f,8);d.delete(),c.delete(),f.delete();const g=t.width*t.height,_=[];for(let b=1;b<m;b++){const x=p.intAt(b,0),$=p.intAt(b,1),I=p.intAt(b,2),S=p.intAt(b,3),k=p.intAt(b,4),C=k/g;C<Gy||C>Wy||k/Math.max(I*S,1)<qy||_.push({x,y:$,w:I,h:S})}return p.delete(),{blobs:_,mask:o,maskWidth:t.width}}function s_(e,t,n,r,i,a,s){const o=e,u=a,d=s,c=i;if(!c.gray){const z=je(e,r);c.gray=new o.Mat,o.cvtColor(z,c.gray,o.COLOR_RGB2GRAY),z.delete(),c.k=new o.KeyPointVector,c.d=new o.Mat;const B=new o.Mat;u.detectAndCompute(c.gray,B,c.k,c.d),B.delete()}const p=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(p,f,m,g),f.delete();const _=z=>(m.delete(),g.delete(),z);if(c.d.rows<8||g.rows<8)return _(null);const b=new o.DMatchVectorVector;d.knnMatch(c.d,g,b,2);const x=[],$=[];for(let z=0;z<b.size();z++){const B=b.get(z);if(B.size()===2){const j=B.get(0);if(j.distance<Fy*B.get(1).distance){const te=c.k.get(j.queryIdx).pt,Z=m.get(j.trainIdx).pt;x.push(te.x,te.y),$.push(Z.x,Z.y)}}}if(b.delete(),x.length/2<8)return _(null);const I=o.matFromArray(x.length/2,1,o.CV_32FC2,x),S=o.matFromArray($.length/2,1,o.CV_32FC2,$),k=new o.Mat,C=o.findHomography(I,S,o.RANSAC,5,k);if(I.delete(),S.delete(),k.delete(),C.rows!==3)return C.delete(),_(null);const M=[...C.data64F],v=(z,B)=>{const j=M[6]*z+M[7]*B+M[8];return[(M[0]*z+M[1]*B+M[2])/j,(M[3]*z+M[4]*B+M[5])/j]},O=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([z,B])=>v(z,B));if(O.some(z=>!Number.isFinite(z[0])||!Number.isFinite(z[1])))return C.delete(),_(null);const N=O.map((z,B)=>{const j=O[(B+1)%4];return Math.hypot(j[0]-z[0],j[1]-z[1])}),F=Math.min(...N);if(F<1)return C.delete(),_(null);const L=Math.max(...N)/F;let V=0;for(let z=0;z<4;z++){const[B,j]=O[z],[te,Z]=O[(z+1)%4];V+=B*Z-te*j}const A=t,G=Math.abs(V/2)/(A.rows*A.cols);if(L<Hy||L>jy||G<Ky||G>Xy)return C.delete(),_(null);const H=new o.Mat;o.warpPerspective(A,H,C,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),C.delete();const K=new o.Mat;o.cvtColor(H,K,o.COLOR_RGB2GRAY),H.delete();const ae=Math.trunc(r.height/2),U=K.roi(new o.Rect(0,0,r.width,ae)),J=c.gray.roi(new o.Rect(0,0,r.width,ae)),W=new o.Mat;o.matchTemplate(U,J,W,o.TM_CCOEFF_NORMED);const Y=W.data32F[0];return U.delete(),J.delete(),W.delete(),K.delete(),_(Y)}function o_(e,t,n){let r,i;if(n===ir)r=ua,i=r_;else if(n===ua)r=ir,i=i_;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const d=Math.trunc(o/2);let c=0,p=null;for(const[f,m]of[[0,d],[d,o]]){let g=0,_=0;for(let x=s;x<s+u;x++)for(let $=a+f;$<a+m;$++){const I=(x*e.width+$)*e.channels,{h:S,s:k,v:C}=nt(e.data[I],e.data[I+1],e.data[I+2]);if(S>=kn&&S<=En&&k>=30&&k<=170&&C<=170)continue;g++,(r===ua?S>=Jy&&S<=e_&&k>=t_&&C>=n_:S>=95&&S<=130&&k>=80)&&_++}if(g<20)continue;const b=_/g;b>c&&(c=b,p={x:a+f,y:s,w:m-f,h:u})}return c>=i&&p!==null?{id:r,box:p}:null}const u_=1.7,l_=140,d_=170,c_=.2,p_=.1,Sh=240,Ih=80,Th=60,h_=50,kh="scientists-guild",Eh="tacticians-guild",ar=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function f_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let k=0;for(let C=0;C<a;C++)e[(i+S)*t+r+C]>0&&k++;o[S]=k/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const d=u[0],c=u[u.length-1],p=c-d;if(p<5)return[];const f=a/p;if(f<Py||f>Ly)return[];if(f>=u_)return[{x:r,y:i+d,w:a,h:p}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,_=[];let b=0;for(let S=-4;S<=4;S++){const k=Math.exp(-(S*S)/(2*g*g));_.push(k),b+=k}for(let S=0;S<s;S++){let k=0;for(let C=-4;C<=4;C++){const M=Math.min(s-1,Math.max(0,S+C));k+=o[M]*_[C+4]}m[S]=k/b}const x=d+Math.trunc(p*.3),$=d+Math.trunc(p*.78);let I=d+Math.trunc(p/2);if($>x){let S=1/0;for(let k=x;k<$;k++)m[k]<S&&(S=m[k],I=k)}return[{x:r,y:i+d,w:a,h:I-d},{x:r,y:i+I,w:a,h:c-I}]}function m_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let d=0;d<o;d++)for(let c=0;c<s;c++){const p=((r+d)*e.width+n+c)*e.channels,f=(d*s+c)*3;u[f]=e.data[p],u[f+1]=e.data[p+1],u[f+2]=e.data[p+2]}return{width:s,height:o,channels:3,data:u}}function g_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=nt(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=l_&&s<=d_&&n++)}return t===0?0:n/t}function y_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=nt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=kn&&a<=En)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function Ch(e,t){const n=je(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Sh,Ih),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Sh,height:Ih,channels:3,data:i}}function __(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Mh(e,t){const n=__(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const _=g*3,{h:b,s:x,v:$}=nt(n.data[_],n.data[_+1],n.data[_+2]);!(b>=kn&&b<=En&&x>=30&&x<=170&&$<=170)&&$>=40&&(i[g]=1,a++)}const s=a<20,o=je(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const d=u.data;let c=0,p=0,f=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(c+=d[g*3]*100/255,p+=d[g*3+1]-128,f+=d[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[c/m,p/m,f/m]}function w_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const d=u*e.channels,{h:c,s:p,v:f}=nt(e.data[d],e.data[d+1],e.data[d+2]);c>=kn&&c<=En&&p>=30&&p<=170&&f<=170||(t++,p>=70&&f>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&f>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function b_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=nt(e.data[i],e.data[i+1],e.data[i+2]);s>=Th&&o>=h_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<Th&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function $_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,d=t[o]-r;i+=u*d,a+=u*u,s+=d*d}return i/(Math.sqrt(a*s)+1e-6)}function Ah(e,t){const n=je(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function x_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=Ch(e,a);n.set(i,Ah(e,s)),ar.includes(i)&&r.set(i,Mh(e,s))}return{gray:n,warmLab:r}}function v_(e,t,n){const r=Ch(e,t),i=w_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ir;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return kh;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Eh;const a=b_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const d of Object.keys(s))s[d]>s[o]&&(o=d);if(s[o]<=0)return"";let u;if(o==="blue")u=ir;else if(o==="green")u=kh;else if(o==="red")u=Eh;else{const d=Ah(e,r);let c="",p=-2;for(const f of ar){const m=n.gray.get(f);if(m===void 0)continue;const g=$_(d,m);g>p&&(p=g,c=f)}u=c||ar[0]}if(ar.includes(u)&&n.warmLab.size>0){const d=Mh(e,r);let c=u,p=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(d[0]-m[0],d[1]-m[1],d[2]-m[2]);g<p&&(p=g,c=f)}return c}return u}function S_(e,t,n,r,i){var _;const a=[],{blobs:s,mask:o,maskWidth:u}=a_(e,t);if(s.length===0||n.size===0)return a;const d=e,c=new d.ORB(Vy),p=new d.BFMatcher(d.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=je(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const x=b.x+Math.trunc(b.w/2),$=b.y+Math.trunc(b.h/2),I=Math.max(Qy,Math.trunc(Zy*Math.max(b.w,b.h))),S=Math.max(0,x-I),k=Math.max(0,$-I),C=Math.min(t.width,x+I),M=Math.min(t.height,$+I);if(C-S<16||M-k<16)continue;const v=m.roi(new d.Rect(S,k,C-S,M-k)),O=new d.Mat;d.cvtColor(v,O,d.COLOR_RGB2GRAY);let N=null,F=-2;for(const[G,H]of n){if(r!==void 0&&Date.now()>r)break;const K=s_(e,v,O,H,f.get(G),c,p);K!==null&&K>F&&(F=K,N=G)}v.delete(),O.delete();const L=new Set;if(N!==null&&F>=Yy){a.push({id:N,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),L.add(N);const G=o_(t,b,N);G&&(a.push({id:G.id,boundingBox:{x:G.box.x,y:G.box.y,width:G.box.w,height:G.box.h},confidence:.9}),L.add(G.id))}if(i===void 0||i.size===0)continue;const V=f_(o,u,b);if(V.length!==2)continue;const A=V.map(G=>m_(t,G));if(!A.some(G=>G.width*G.height===0||y_(G)<p_))for(let G=0;G<V.length;G++){const H=A[G];if(g_(H)<c_)continue;g===null&&(g=x_(e,i));const K=v_(e,H,g);if(K&&!L.has(K)){L.add(K);const ae=V[G];a.push({id:K,boundingBox:{x:ae.x,y:ae.y,width:ae.w,height:ae.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const x=b;for(const $ of["gray","k","d"])try{(_=x[$])==null||_.delete()}catch{}}try{c.delete(),p.delete()}catch{}}return a}const zh=128,I_=.56,T_=15,k_=.58,E_=70,C_=50,M_=.12,A_=.2,z_=.1,R_=.17,Rh=.15;function O_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Oh(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const d=Math.max(0,s-u),c=Math.max(0,o-u),p=Math.min(n,s+u),f=Math.min(r,o+u),m=p-d,g=f-c,_=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const x=((b+c)*n+d)*i;_.set(a.subarray(x,x+m*i),b*m*i)}return{width:m,height:g,channels:i,data:_}}function B_(e){const t=Oh(e,I_),n=z0(t),r=lh(n,zh,zh);return R0(r)}function N_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const d=e[u]-r,c=t[u]-i;a+=d*c,s+=d*d,o+=c*c}return a/(Math.sqrt(s*o)+1e-6)}function D_(e){const t=new Map([["masonry",0],["strategy",0]]),n=Oh(e,k_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,d=0;for(let f=0;f<r*i;f++){const m=f*a,{h:g,s:_,v:b}=nt(s[m],s[m+1],s[m+2]);_>=E_&&b>=C_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(d+=1))}const c=u/o,p=d/o;return c>=M_&&t.set("masonry",Rh*Math.min(1,c/A_)),p>=z_&&t.set("strategy",Rh*Math.min(1,p/R_)),t}function U_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=B_(e);let r=0;for(const d of n.data)r+=d;const i=r/n.data.length,a=[];for(let d=0;d<360;d+=T_)a.push(N0(n,d,i));const s=new Map;for(const[d,c]of t){let p=-1/0;for(const f of a){const m=N_(f,c);m>p&&(p=m)}s.set(d,p)}for(const[d,c]of D_(e))c>0&&s.has(d)&&s.set(d,s.get(d)+c);let o="",u=-1/0;for(const[d,c]of s)c>u&&(o=d,u=c);return[o,u]}const Tt=224,P_=512,L_=[.485,.456,.406],q_=[.229,.224,.225];function G_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function W_(e){const t=Qp(e,Tt,Tt),n=Tt*Tt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-L_[a])/q_[a];return r}function V_(e){const t=3*Tt*Tt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(W_(Tn(e,r)),r*t);return n}function F_(e,t=P_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function H_(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const st="/7wd-scorer/models/";let Bh=!1;const sr=new Map;function Nh(){var e;Bh||(ke.wasm.wasmPaths="/7wd-scorer/ort/",ke.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Bh=!0)}const la=new Set;function j_(e){Nh();let t=sr.get(e);return t===void 0&&(t=Jt.create(`${st}${gt[e].onnx}`,{executionProviders:la.has(e)?["wasm"]:["webgpu","wasm"]}),sr.set(e,t),t.catch(()=>sr.delete(e))),t}let da=null,ca=null;const K_=.75,X_=4,Y_=.65,Z_=3e4;let pa=null;function Dh(){return pa===null&&(pa=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),pa}const Uh=new Map;function ha(e){let t=Uh.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${st}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),Uh.set(e,t)),t}function Ph(e){return ha(`wonder-refs/${e}.jpg`)}const Lh=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Q_(){const e=new Map;for(const t of Lh){const n=await ha(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function J_(){const e=new Map;for(const t of Lh){const n=await ha(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const ew=.6,tw=12,nw=45e3;let fa=null;function qh(){return fa===null&&(Nh(),fa=(async()=>{try{const[e,t,n,r]=await Promise.all([Jt.create(`${st}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),Jt.create(`${st}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${st}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${st}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:J0(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),fa}async function rw(e,t){const n=Math.max(Q0/yt,t.width/t.height),{tensor:r,width:i}=ty(t,n),a={[e.rec.inputNames[0]]:new qe("float32",r,[1,3,yt,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,d]=s.dims,c=s.data,p=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,_=-1/0;const b=m*d;for(let x=0;x<d;x++){const $=c[b+x];$>_&&(_=$,g=x)}p[m]=g,f[m]=_}return ey(p,f,e.charset)}async function iw(e,t){const n=await qh();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+nw;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`);const o=Tn(e,s),u=my(o),d={[n.det.inputNames[0]]:new qe("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(d))[n.det.outputNames[0]],p=$y(c.data,u,o.width,o.height).slice(0,tw);console.debug(`[wonders-ocr] rot ${s*90}: ${p.length} det boxes`,p.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of p){if(Date.now()>i){a=!0;break e}const m=xy(o,f.quad);if(m.width<m.height*1.5)continue;const[g,_]=await rw(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${_.toFixed(2)}`),_<ew||g.trim().length<X_)continue;const b=uy(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<K_||b.kind!=="wonder")continue;const x=r.get(b.id);(x===void 0||b.confidence>x.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:Gh(f,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Gh(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(p,f)=>i===1?[f,r-1-p]:i===2?[n-1-p,r-1-f]:[n-1-f,p],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(p=>p[0]),u=s.map(p=>p[1]),d=Math.min(...o),c=Math.min(...u);return{x:d,y:c,width:Math.max(...o)-d,height:Math.max(...u)-c}}function aw(){return ca===null&&(ca=fetch(`${st}laurel_gallery.json`).then(async e=>e.ok?H0(await e.json()):[]).catch(()=>[])),ca}function sw(e,t,n,r){return ow(e,t-r,n-r,2*r,2*r)}function ow(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),d=Math.max(0,o-a),c=Math.max(0,u-s),p=new Uint8Array(d*c*3);for(let f=0;f<c;f++)for(let m=0;m<d;m++){const g=((f+s)*e.width+(m+a))*e.channels,_=(f*d+m)*3;p[_]=e.data[g],p[_+1]=e.data[g+1],p[_+2]=e.data[g+2]}return{width:d,height:c,channels:3,data:p}}function uw(){return da===null&&(da=fetch(`${st}token_templates.json`).then(async e=>e.ok?O_(await e.json()):new Map).catch(()=>new Map)),da}let ma=null;function lw(){return ma===null&&(ma=(async()=>{try{const e=await fetch(`${st}token_embed_index.json`);if(!e.ok)return null;const t=G_(await e.json());return{session:await Jt.create(`${st}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),ma}async function dw(e,t){const n=await lw();if(n!==null)try{const r=V_(e),i=new qe("float32",r,[4,3,Tt,Tt]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=H_(n.index,F_(s));return[o,u]}catch{}return U_(e,t)}async function Wh(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Ht(e,t){const n=gt[e],{tensor:r,params:i}=s0(t,n.input),a=async()=>{const s=await j_(e),o={[s.inputNames[0]]:new qe("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(la.has(e))throw s;return la.add(e),sr.delete(e),await a()}}const cw=6,pw=2,hw=5,fw=2;async function mw(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Wh(e),r=await Ht("banner",n),i=ah(r.rows,r.params,gt.banner.conf);if(t.banners=i.length,i.length>=cw)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Ht("laurel",n),s=rh(a.rows,a.params,gt.laurel.conf);if(t.laurels=s.length,s.length>=pw)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Ht("coin",n),u=nh(o.rows,o.params,gt.coin.conf);return t.coins=u.length,u.length>=hw?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=fw?{...t,kind:"board",confidence:.4}:t}function gw(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function yw(e,t,n,r){const i={},a=[],s=[],o=[],u=[],d=[],c=[];let p=0,f=0,m=0,g=0,_=0;for(const I of e){_+=1;const S=`${t} photo ${_}/${e.length}`;r(`${S}: reading pixels…`);const k=await Wh(I);r(`${S}: card banners…`);const C=await Ht("banner",k),M=ah(C.rows,C.params,gt.banner.conf);r(`${S}: progress tokens…`);const v=await Ht("token",k),O=await uw(),N=[];for(const z of h0(v.rows,v.params,gt.token.conf)){N.push({cx:z.cx,cy:z.cy,r:z.r});const[B,j]=await dw(uh(k,z),O);B===""?f+=1:o.some(te=>te.id===B)||o.push({id:B,center:[z.cx,z.cy],radius:z.r,confidence:Math.round(j*1e4)/1e4})}r(`${S}: coins…`);const F=await Ht("coin",k),L=nh(F.rows,F.params,gt.coin.conf).filter(z=>!N.some(B=>(z.cx-B.cx)**2+(z.cy-B.cy)**2<=z.r*z.r)),V=A0(k,L),A=[];if(L.forEach((z,B)=>{const j=V[B];p+=j,A.push({denomination:j,center:[z.cx,z.cy],radius:z.r,denomSource:"colour"})}),A.length>=2){const z=A.map(j=>j.radius).sort((j,te)=>j-te),B=z.length%2===1?z[(z.length-1)/2]:(z[z.length/2-1]+z[z.length/2])/2;if(B>0)for(const j of A)j.radius/B>2&&(j.suspect=!0,j.suspectReason=`radius ${j.radius}px is ${(j.radius/B).toFixed(1)}x the photo's median coin radius — probably not a coin`)}s.push(...A),r(`${S}: wonder names…`);const G=await iw(k,z=>r(`${S}: ${z}`)),H=[],K=Date.now()+Z_,ae=G.wonders.length>0?await Dh():null;for(const z of G.wonders){let B=null;if(ae!==null&&Date.now()<K){r(`${S}: registering ${z.name}…`);try{const j=await Ph(z.id);if(j!==null){const te=Uy(ae,k,j,[[z.nameBox.x,z.nameBox.y],[z.nameBox.x+z.nameBox.width,z.nameBox.y],[z.nameBox.x+z.nameBox.width,z.nameBox.y+z.nameBox.height],[z.nameBox.x,z.nameBox.y+z.nameBox.height]]);if(te!==null){const Z=te.footprint.map(Ie=>Ie[0]),de=te.footprint.map(Ie=>Ie[1]),ve=Math.max(0,Math.round(Math.min(...Z))),fe=Math.max(0,Math.round(Math.min(...de)));B={built:te.built,boundingBox:{x:ve,y:fe,width:Math.min(k.width,Math.round(Math.max(...Z)))-ve,height:Math.min(k.height,Math.round(Math.max(...de)))-fe},tuckRegion:vh(te.footprint,te.overflow)}}}}catch(j){console.warn(`[wonders-reg] ${z.id} failed:`,j)}}if(B!==null){const j=B.tuckRegion??B.boundingBox;H.push({x0:j.x,y0:j.y,x1:j.x+j.width,y1:j.y+j.height})}else{const j=Math.max(8,z.nameBox.height),te=Math.round(z.nameBox.width*.15);H.push({x0:z.nameBox.x-te,y0:z.nameBox.y-j*2.5,x1:z.nameBox.x+z.nameBox.width+te,y1:z.nameBox.y+z.nameBox.height+j*2.5})}u.some(j=>j.id===z.id)||u.push({id:z.id,name:z.name,builtWithCardUnderneath:(B==null?void 0:B.built)??!0,boundingBox:(B==null?void 0:B.boundingBox)??{x:0,y:0,width:0,height:0},...B!=null&&B.tuckRegion?{tuckRegion:B.tuckRegion}:{},confidence:z.confidence})}if(G.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${S}: the wonder-name read ran out of its time budget on this device — ${G.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),ae!==null&&G.wonders.length>0&&Date.now()<K)try{const z=await qh(),B=(z==null?void 0:z.catalog.filter(te=>te.kind==="wonder").map(te=>te.id))??[],j=new Map;for(const te of B)if(!u.some(Z=>Z.id===te)){const Z=await Ph(te);Z!==null&&j.set(te,Z)}if(j.size>0){r(`${S}: searching occluded wonders…`);const te=Dy(ae,k,j,K);for(const Z of te){const de=Z.footprint.map(Ue=>Ue[0]),ve=Z.footprint.map(Ue=>Ue[1]),fe=Math.max(0,Math.round(Math.min(...de))),Ie=Math.max(0,Math.round(Math.min(...ve))),Se={x:fe,y:Ie,width:Math.min(k.width,Math.round(Math.max(...de)))-fe,height:Math.min(k.height,Math.round(Math.max(...ve)))-Ie};if(u.some(Ue=>{const Oe=Ue.boundingBox,Le=Math.max(0,Math.min(Oe.x+Oe.width,Se.x+Se.width)-Math.max(Oe.x,Se.x)),_t=Math.max(0,Math.min(Oe.y+Oe.height,Se.y+Se.height)-Math.max(Oe.y,Se.y)),jt=Le*_t,ot=Oe.width*Oe.height+Se.width*Se.height-jt;return ot>0&&jt/ot>Ny}))continue;const se=z==null?void 0:z.catalog.find(Ue=>Ue.id===Z.id);u.push({id:Z.id,name:(se==null?void 0:se.nameFr)??(se==null?void 0:se.name)??Z.id,builtWithCardUnderneath:Z.built,boundingBox:Se,...Z.tuckRegion?{tuckRegion:Z.tuckRegion}:{},confidence:Math.round(Z.confidence*1e4)/1e4});const _e=Z.tuckRegion??Se;H.push({x0:_e.x,y0:_e.y,x1:_e.x+_e.width,y1:_e.y+_e.height})}}}catch(z){console.warn("[wonders-reg] discovery failed:",z)}const U=[];for(const z of M){const B=z.box[0]+z.box[2]/2,j=z.box[1]+z.box[3]/2;if(H.some(Z=>B>=Z.x0&&B<=Z.x1&&j>=Z.y0&&j<=Z.y1)){g+=1;continue}U.push(z),i[z.family]=(i[z.family]??0)+1,m+=1}for(const z of y0(U))c.push(z);const J=U.some(z=>z.family==="guild");if((J||G.wonders.length>0)&&Date.now()<K)try{const z=ae??(J?await Dh():null);if(z!==null){const B=await Q_();if(B.size>0){r(`${S}: identifying guilds…`);const j=await J_();for(const te of S_(z,k,B,K,j))d.some(Z=>Z.id===te.id)||d.push(te)}}}catch(z){console.warn("[guilds-reg] failed:",z)}r(`${S}: laurels…`);const W=await aw(),Y=[];for(const z of[0,1,2,3]){const B=z===0?k:Tn(k,z),j=await Ht("laurel",B);for(const[te,Z,de,ve]of rh(j.rows,j.params,gt.laurel.conf)){const fe=Gh({x:te,y:Z,width:de-te,height:ve-Z},z,k.width,k.height),Ie=fe.x+fe.width/2,Se=fe.y+fe.height/2,ye=.6*Math.max(fe.width,fe.height);Y.some(([_e,Ue,Oe,Le])=>{const _t=(_e+Oe)/2,jt=(Ue+Le)/2;return(Ie-_t)**2+(Se-jt)**2<ye*ye})||Y.push([fe.x,fe.y,fe.x+fe.width,fe.y+fe.height])}}for(const[z,B,j,te]of Y){const Z=Math.trunc((z+j)/2),de=Math.trunc((B+te)/2);if([...N,...L].some(_e=>(Z-_e.cx)**2+(de-_e.cy)**2<=_e.r*_e.r))continue;const fe=Math.max(6,Math.trunc(Math.max(j-z,te-B)*D0)),Ie=sw(k,Z,de,fe);let Se=null,ye=0;for(const _e of[0,1,2,3]){const Ue=_e===0?Ie:Tn(Ie,_e),[Oe,Le]=Z0(Ue,W);Oe!==null&&Le>ye&&(Se=Oe,ye=Le)}Se!==null&&ye<Y_&&(Se=null);const se=H.some(_e=>Z>=_e.x0&&Z<=_e.x1&&de>=_e.y0&&de<=_e.y1);a.push({value:Se,valueRead:Se!==null,center:[Math.round((z+j)/2),Math.round((B+te)/2)],boundingBox:{x:Math.trunc(z),y:Math.trunc(B),width:Math.trunc(j-z),height:Math.trunc(te-B)},confidence:Math.round(ye*1e4)/1e4,excluded:se,photoIndex:_-1})}}g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):m>0&&u.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const b=i.guild??0;b!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${b} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(I=>I.id).join(", ")+" — confirm in the review."});const x=u.filter(I=>I.boundingBox.width===0);x.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${x.map(I=>I.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${u.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),f>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${f} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(I=>I.id).join(", ")+" — confirm in the review."}),s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${p} from ${s.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const $=a.filter(I=>I.valueRead);return{...gw(),wonders:u,guilds:d,progressTokens:o,laurels:a,cardVictoryPoints:{value:$.reduce((I,S)=>I+(S.value??0),0),laurelsKept:a.length,laurelsUnread:a.length-$.length,complete:a.length===$.length},cardCounts:{byFamily:i,source:m>0?"yolo":"none",tuckedExcluded:g,...c.length>0?{suspects:c}:{}},coins:{total:p,confidence:s.length>0?.5:0,source:s.length>0?"local-colour":"none",coins:s}}}async function _w(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null};for(const i of["left","right"]){const a=e[i];a.length>0&&(r[i]=await yw(a,i,n,t))}return e.hasBoard&&n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:r,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=n==="classify"?await mw(e.data.file):await _w(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
