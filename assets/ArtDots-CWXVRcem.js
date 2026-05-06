const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-BUdyUPn-.js","./Geometry-Dr0FCqAY.js","./chunk-CilyBKbf.js","./FederatedEventTarget-D6k5C-RJ.js","./FilterSystem-DBGyDAjK.js","./canvasUtils-CkRNMORe.js","./CanvasPool-D4l2DMdc.js","./init-DH0cRFsD.js","./webworkerAll-B7o4Wc5G.js","./WebGPURenderer-DlgqAohv.js","./RenderTargetSystem-B0UBs1fk.js","./getTextureBatchBindGroup-B5DRM2P2.js","./BufferResource-BxDi75Ey.js","./WebGLRenderer-BanWP3pR.js","./CanvasRenderer-CXxuyOxj.js"])))=>i.map(i=>d[i]);
import{I as e,K as t,L as n,M as r,Q as i,R as a,T as o,a as s,nt as c,v as l}from"./dist-CL_bAmHc.js";import{a as u}from"./app-BWzqiQus.js";import{A as d,F as f,J as p,Q as m,S as h,T as g,V as _,Y as v,_ as y,a as b,b as x,d as S,et as C,f as w,n as T,nt as E,o as D,r as O,rt as k,s as A,t as j,u as M,v as N,x as P,y as F}from"./Geometry-Dr0FCqAY.js";import"./FilterSystem-DBGyDAjK.js";import{t as I}from"./canvasUtils-CkRNMORe.js";import{n as L}from"./CanvasRenderer-CXxuyOxj.js";import{D as R,a as z,i as B,l as V,u as H,w as U}from"./RenderTargetSystem-B0UBs1fk.js";var ee={extension:{type:E.Environment,name:`browser`,priority:-1},test:()=>!0,load:async()=>{await u(()=>import(`./browserAll-BUdyUPn-.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},te={extension:{type:E.Environment,name:`webworker`,priority:0},test:()=>typeof self<`u`&&self.WorkerGlobalScope!==void 0,load:async()=>{await u(()=>import(`./webworkerAll-B7o4Wc5G.js`),__vite__mapDeps([8,4,1,2,5,6,7]),import.meta.url)}},W;function ne(e){return W===void 0&&(W=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??z.defaultOptions.failIfMajorPerformanceCaveat};try{if(!y.get().getWebGLRenderingContext())return!1;let e=y.get().createCanvas().getContext(`webgl`,t),n=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension(`WEBGL_lose_context`);t&&t.loseContext()}return e=null,n}catch{return!1}})()),W}var G;async function re(e={}){return G===void 0&&(G=await(async()=>{let t=y.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),G}var K=[`webgl`,`webgpu`,`canvas`];async function ie(e){let t=[];e.preference?Array.isArray(e.preference)?t=e.preference.slice():(t.push(e.preference),K.forEach(n=>{n!==e.preference&&t.push(n)})):t=K.slice();let n,r={};for(let i=0;i<t.length;i++){let a=t[i];if(a===`webgpu`&&await re()){let{WebGPURenderer:t}=await u(async()=>{let{WebGPURenderer:e}=await import(`./WebGPURenderer-DlgqAohv.js`).then(e=>e.t);return{WebGPURenderer:e}},__vite__mapDeps([9,2,1,10,11,12,6]),import.meta.url);n=t,r={...e,...e.webgpu};break}else if(a===`webgl`&&ne(e.failIfMajorPerformanceCaveat??z.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await u(async()=>{let{WebGLRenderer:e}=await import(`./WebGLRenderer-BanWP3pR.js`).then(e=>e.t);return{WebGLRenderer:e}},__vite__mapDeps([13,2,1,10,12]),import.meta.url);n=t,r={...e,...e.webgl};break}else if(a===`canvas`){let{CanvasRenderer:t}=await u(async()=>{let{CanvasRenderer:e}=await import(`./CanvasRenderer-CXxuyOxj.js`).then(e=>e.t);return{CanvasRenderer:e}},__vite__mapDeps([14,2,1,10,11,5]),import.meta.url);n=t,r={...e,...e.canvasOptions};break}}if(delete r.webgpu,delete r.webgl,delete r.canvasOptions,!n)throw Error(`No available renderer for the current environment`);let i=new n;return await i.init(r),i}var q=class{static init(e){Object.defineProperty(this,`resizeTo`,{configurable:!0,set(e){globalThis.removeEventListener(`resize`,this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener(`resize`,this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&=(cancelAnimationFrame(this._resizeId),null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,t;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:n,clientHeight:r}=this._resizeTo;e=n,t=r}this.renderer.resize(e,t),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener(`resize`,this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};q.extension=E.Application;var ae=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,`ticker`,{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,x.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?F.shared:new F,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}};ae.extension=E.Application,k.add(q),k.add(ae);var oe=class e{constructor(...e){this.stage=new P,e[0]!==void 0&&p(v,`Application constructor options are deprecated, please use Application.init() instead.`)}async init(t){t={...t},this.stage||=new P,this.renderer=await ie(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return p(v,`Application.view is deprecated, please use Application.canvas instead.`),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(t=!1,n=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};oe._plugins=[];var se=oe;k.handleByList(E.Application,se._plugins),k.add(B);var ce=class{execute(e,t){let n=e.renderer,r=n.canvasContext.activeContext,i=t.particleChildren,a=t.texture;r.save(),n.canvasContext.setContextTransform(t.worldTransform,t.roundPixels),n.canvasContext.setBlendMode(t.groupBlendMode);let o=t.groupColorAlpha,s=n.filter?.alphaMultiplier??1,c=(o>>>24&255)/255*s;for(let e=0;e<i.length;e++){let t=i[e],n=t.texture||a;if(!n?.source?.resource)continue;let o=t.color,s=(o>>>24&255)/255*c;if(s<=0)continue;let l=o&16777215,u=((l&255)<<16)+(l&65280)+(l>>16&255),d=n.source.resource;u!==16777215&&(d=I.getTintedCanvas({texture:n},u));let f=n.frame,p=n.source.resolution,m=f.x*p,h=f.y*p,g=f.width*p,_=f.height*p;r.globalAlpha=s;let v=-t.anchorX*f.width,y=-t.anchorY*f.height;t.rotation!==0||t.scaleX!==1||t.scaleY!==1?(r.save(),r.translate(t.x,t.y),r.rotate(t.rotation),r.scale(t.scaleX,t.scaleY),r.drawImage(d,m,h,g,_,v,y,f.width,f.height),r.restore()):r.drawImage(d,m,h,g,_,t.x+v,t.y+y,f.width,f.height)}r.restore()}};function le(e,t=null){let n=e*6;if(n>65535?t||=new Uint32Array(n):t||=new Uint16Array(n),t.length!==n)throw Error(`Out buffer length is incorrect, got ${t.length} and expected ${n}`);for(let e=0,r=0;e<n;e+=6,r+=4)t[e+0]=r+0,t[e+1]=r+1,t[e+2]=r+2,t[e+3]=r+0,t[e+4]=r+2,t[e+5]=r+3;return t}function ue(e){return{dynamicUpdate:de(e,!0),staticUpdate:de(e,!1)}}function de(e,t){let n=[];n.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let r=0;for(let i in e){let a=e[i];if(t!==a.dynamic)continue;n.push(`offset = index + ${r}`),n.push(a.code);let o=S(a.format);r+=o.stride/4}n.push(`
            index += stride * 4;
        }
    `),n.unshift(`
        var stride = ${r};
    `);let i=n.join(`
`);return Function(`ps`,`f32v`,`u32v`,i)}var fe=class{constructor(e){this._size=0,this._generateParticleUpdateCache={};let t=this._size=e.size??1e3,n=e.properties,r=0,i=0;for(let e in n){let t=n[e],a=S(t.format);t.dynamic?i+=a.stride:r+=a.stride}this._dynamicStride=i/4,this._staticStride=r/4,this.staticAttributeBuffer=new R(t*4*r),this.dynamicAttributeBuffer=new R(t*4*i),this.indexBuffer=le(t);let a=new j,o=0,s=0;this._staticBuffer=new T({data:new Float32Array(1),label:`static-particle-buffer`,shrinkToFit:!1,usage:O.VERTEX|O.COPY_DST}),this._dynamicBuffer=new T({data:new Float32Array(1),label:`dynamic-particle-buffer`,shrinkToFit:!1,usage:O.VERTEX|O.COPY_DST});for(let e in n){let t=n[e],r=S(t.format);t.dynamic?(a.addAttribute(t.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:o*4,format:t.format}),o+=r.size):(a.addAttribute(t.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:s*4,format:t.format}),s+=r.size)}a.addIndex(this.indexBuffer);let c=this.getParticleUpdate(n);this._dynamicUpload=c.dynamicUpdate,this._staticUpload=c.staticUpdate,this.geometry=a}getParticleUpdate(e){let t=pe(e);return this._generateParticleUpdateCache[t]||(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e)),this._generateParticleUpdateCache[t]}generateParticleUpdate(e){return ue(e)}update(e,t){e.length>this._size&&(t=!0,this._size=Math.max(e.length,this._size*1.5|0),this.staticAttributeBuffer=new R(this._size*this._staticStride*4*4),this.dynamicAttributeBuffer=new R(this._size*this._dynamicStride*4*4),this.indexBuffer=le(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));let n=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,n.float32View,n.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),t){let t=this.staticAttributeBuffer;this._staticUpload(e,t.float32View,t.uint32View),this._staticBuffer.setDataWithSize(t.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}};function pe(e){let t=[];for(let n in e){let r=e[n];t.push(n,r.code,r.dynamic?`d`:`s`)}return t.join(`_`)}var me=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`,he=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`,ge=`
struct ParticleUniforms {
  uTranslationMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uRound:f32,
  uResolution:vec2<f32>,
};

fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
{
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

   if(uniforms.uRound == 1.0) {
       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);
   }

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`,_e=class extends D{constructor(){let e=w.from({vertex:he,fragment:me}),t=M.from({fragment:{source:ge,entryPoint:`mainFragment`},vertex:{source:ge,entryPoint:`mainVertex`}});super({glProgram:e,gpuProgram:t,resources:{uTexture:g.WHITE.source,uSampler:new d({}),uniforms:{uTranslationMatrix:{value:new m,type:`mat3x3<f32>`},uColor:{value:new C(16777215),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}}}})}},J=class{constructor(e,t){this.state=b.for2d(),this.localUniforms=new A({uTranslationMatrix:{value:new m,type:`mat3x3<f32>`},uColor:{value:new Float32Array(4),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}}),this.renderer=e,this.adaptor=t,this.defaultShader=new _e,this.state=b.for2d(),this._managedContainers=new H({renderer:e,type:`renderable`,name:`particleContainer`})}validateRenderable(e){return!1}addRenderable(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}getBuffers(e){return e._gpuData[this.renderer.uid]||this._initBuffer(e)}_initBuffer(e){return e._gpuData[this.renderer.uid]=new fe({size:e.particleChildren.length,properties:e._properties}),this._managedContainers.add(e),e._gpuData[this.renderer.uid]}updateRenderable(e){}execute(e){let t=e.particleChildren;if(t.length===0)return;let n=this.renderer,r=this.getBuffers(e);e.texture||=t[0].texture;let i=this.state;r.update(t,e._childrenDirty),e._childrenDirty=!1,i.blendMode=U(e.blendMode,e.texture._source);let a=this.localUniforms.uniforms,o=a.uTranslationMatrix;e.worldTransform.copyTo(o);let s=n.globalUniforms.globalUniformData;o.tx-=s.offset.x,o.ty-=s.offset.y,o.prepend(s.projectionMatrix),a.uResolution=s.resolution,a.uRound=n._roundPixels|e._roundPixels,V(e.groupColorAlpha,a.uColor,0),this.adaptor.execute(this,e)}destroy(){this._managedContainers.destroy(),this.renderer=null,this.defaultShader&&=(this.defaultShader.destroy(),null)}};J.extension={type:[E.CanvasPipes],name:`particle`};var ve=class extends J{constructor(e){super(e,new ce)}};ve.extension={type:[E.CanvasPipes],name:`particle`};var ye=class{execute(e,t){let n=e.state,r=e.renderer,i=t.shader||e.defaultShader;i.resources.uTexture=t.texture._source,i.resources.uniforms=e.localUniforms;let a=r.gl,o=e.getBuffers(t);r.shader.bind(i),r.state.set(n),r.geometry.bind(o.geometry,i.glProgram);let s=o.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?a.UNSIGNED_SHORT:a.UNSIGNED_INT;a.drawElements(a.TRIANGLES,t.particleChildren.length*6,s,0)}},be=class extends J{constructor(e){super(e,new ye)}};be.extension={type:[E.WebGLPipes],name:`particle`};var xe=class{execute(e,t){let n=e.renderer,r=t.shader||e.defaultShader;r.groups[0]=n.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),r.groups[1]=n.texture.getTextureBindGroup(t.texture);let i=e.state,a=e.getBuffers(t);n.encoder.draw({geometry:a.geometry,shader:t.shader||e.defaultShader,state:i,size:t.particleChildren.length*6})}},Se=class extends J{constructor(e){super(e,new xe)}};Se.extension={type:[E.WebGPUPipes],name:`particle`};var Ce=class e{constructor(t){if(t instanceof g)this.texture=t,h(this,e.defaultOptions,{});else{let n={...e.defaultOptions,...t};h(this,n,{})}}get alpha(){return this._alpha}set alpha(e){this._alpha=Math.min(Math.max(e,0),1),this._updateColor()}get tint(){return f(this._tint)}set tint(e){this._tint=C.shared.setValue(e??16777215).toBgrNumber(),this._updateColor()}_updateColor(){this.color=this._tint+((this._alpha*255|0)<<24)}};Ce.defaultOptions={anchorX:0,anchorY:0,x:0,y:0,scaleX:1,scaleY:1,rotation:0,tint:16777215,alpha:1};var we=Ce,Te={vertex:{attributeName:`aVertex`,format:`float32x2`,code:`
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,dynamic:!1},position:{attributeName:`aPosition`,format:`float32x2`,code:`
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,dynamic:!0},rotation:{attributeName:`aRotation`,format:`float32`,code:`
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,dynamic:!1},uvs:{attributeName:`aUV`,format:`float32x2`,code:`
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,dynamic:!1},color:{attributeName:`aColor`,format:`unorm8x4`,code:`
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,dynamic:!1}};k.add(be),k.add(Se),k.add(ve);var Ee=new _(0,0,0,0),De=class e extends N{constructor(t={}){t={...e.defaultOptions,...t,dynamicProperties:{...e.defaultOptions.dynamicProperties,...t?.dynamicProperties}};let{dynamicProperties:n,shader:r,roundPixels:i,texture:a,particles:o,...s}=t;super({label:`ParticleContainer`,...s}),this.renderPipeId=`particle`,this.batched=!1,this._childrenDirty=!1,this.texture=a||null,this.shader=r,this._properties={};for(let e in Te){let t=Te[e],r=n[e];this._properties[e]={...t,dynamic:r}}this.allowChildren=!0,this.roundPixels=i??!1,this.particleChildren=o??[]}addParticle(...e){for(let t=0;t<e.length;t++)this.particleChildren.push(e[t]);return this.onViewUpdate(),e[0]}removeParticle(...e){let t=!1;for(let n=0;n<e.length;n++){let r=this.particleChildren.indexOf(e[n]);r>-1&&(this.particleChildren.splice(r,1),t=!0)}return t&&this.onViewUpdate(),e[0]}update(){this._childrenDirty=!0}onViewUpdate(){this._childrenDirty=!0,super.onViewUpdate()}get bounds(){return Ee}updateBounds(){}destroy(e=!1){if(super.destroy(e),typeof e==`boolean`?e:e?.texture){let t=typeof e==`boolean`?e:e?.textureSource,n=this.texture??this.particleChildren[0]?.texture;n&&n.destroy(t)}this.texture=null,this.shader?.destroy()}removeParticles(e,t){e??=0,t??=this.particleChildren.length;let n=this.particleChildren.splice(e,t-e);return this.onViewUpdate(),n}removeParticleAt(e){let t=this.particleChildren.splice(e,1);return this.onViewUpdate(),t[0]}addParticleAt(e,t){return this.particleChildren.splice(t,0,e),this.onViewUpdate(),e}addChild(...e){throw Error(`ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()`)}removeChild(...e){throw Error(`ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()`)}removeChildren(e,t){throw Error(`ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()`)}removeChildAt(e){throw Error(`ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()`)}getChildAt(e){throw Error(`ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()`)}setChildIndex(e,t){throw Error(`ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()`)}getChildIndex(e){throw Error(`ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()`)}addChildAt(e,t){throw Error(`ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()`)}swapChildren(e,t){throw Error(`ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()`)}reparentChild(...e){throw Error(`ParticleContainer.reparentChild() is not available with the particle container`)}reparentChildAt(e,t){throw Error(`ParticleContainer.reparentChildAt() is not available with the particle container`)}};De.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1};var Oe=De;k.add(ee,te);var ke=Math.sqrt(3),Ae=Math.sqrt(5);.5*(ke-1),(3-ke)/6;var je=1/3,Y=1/6;(Ae-1)/4,(5-Ae)/20;var X=e=>Math.floor(e)|0,Z=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Me(e=Math.random){let t=Ne(e),n=new Float64Array(t).map(e=>Z[e%12*3]),r=new Float64Array(t).map(e=>Z[e%12*3+1]),i=new Float64Array(t).map(e=>Z[e%12*3+2]);return function(e,a,o){let s,c,l,u,d=(e+a+o)*je,f=X(e+d),p=X(a+d),m=X(o+d),h=(f+p+m)*Y,g=f-h,_=p-h,v=m-h,y=e-g,b=a-_,x=o-v,S,C,w,T,E,D;y>=b?b>=x?(S=1,C=0,w=0,T=1,E=1,D=0):y>=x?(S=1,C=0,w=0,T=1,E=0,D=1):(S=0,C=0,w=1,T=1,E=0,D=1):b<x?(S=0,C=0,w=1,T=0,E=1,D=1):y<x?(S=0,C=1,w=0,T=0,E=1,D=1):(S=0,C=1,w=0,T=1,E=1,D=0);let O=y-S+Y,k=b-C+Y,A=x-w+Y,j=y-T+2*Y,M=b-E+2*Y,N=x-D+2*Y,P=y-1+3*Y,F=b-1+3*Y,I=x-1+3*Y,L=f&255,R=p&255,z=m&255,B=.6-y*y-b*b-x*x;if(B<0)s=0;else{let e=L+t[R+t[z]];B*=B,s=B*B*(n[e]*y+r[e]*b+i[e]*x)}let V=.6-O*O-k*k-A*A;if(V<0)c=0;else{let e=L+S+t[R+C+t[z+w]];V*=V,c=V*V*(n[e]*O+r[e]*k+i[e]*A)}let H=.6-j*j-M*M-N*N;if(H<0)l=0;else{let e=L+T+t[R+E+t[z+D]];H*=H,l=H*H*(n[e]*j+r[e]*M+i[e]*N)}let U=.6-P*P-F*F-I*I;if(U<0)u=0;else{let e=L+1+t[R+1+t[z+1]];U*=U,u=U*U*(n[e]*P+r[e]*F+i[e]*I)}return 32*(s+c+l+u)}}function Ne(e){let t=new Uint8Array(512);for(let e=0;e<512/2;e++)t[e]=e;for(let n=0;n<512/2-1;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let e=256;e<512;e++)t[e]=t[e-256];return t}var Q=200,Pe=5,$=15,Fe=o({__name:`ArtDots`,setup(o){let u=t(`el`),d=window.innerWidth,f=window.innerHeight,p=Me(),m=new Set,h=[];function g(e,t,n){return(p(e/Q,t/Q,n)-.5)*2*Math.PI}let _=i();function v(e){let t=new L().circle(0,0,1).fill(13421772);return e.renderer.generateTexture(t)}function y({dotTexture:e,particleContainer:t}){for(let n=-$/2;n<d+$;n+=$)for(let r=-$/2;r<f+$;r+=$){let i=`${n}-${r}`;if(m.has(i))continue;m.add(i);let a=new we(e);a.anchorX=.5,a.anchorY=.5,t.addParticle(a);let o=Math.random()*.5+.5;h.push({x:n,y:r,opacity:o,particle:a})}}async function b(){if(u.value==null)return;let e=new se;await e.init({backgroundAlpha:0,antialias:!0,resolution:window.devicePixelRatio,eventMode:`none`,autoDensity:!0}),u.value.appendChild(e.canvas),await r(),e.renderer.resize(window.innerWidth,window.innerHeight);let t=new Oe({dynamicProperties:{position:!0,alpha:!0}});e.stage.addChild(t);let n=v(e);y({dotTexture:n,particleContainer:t}),e.ticker.add(()=>{let e=Date.now()/1e4;for(let t of h){let{x:n,y:r,opacity:i,particle:a}=t,o=g(n,r,e),s=(p(n/Q,r/Q,e*2)+.5)*Pe,c=n+Math.cos(o)*s,l=r+Math.sin(o)*s;a.x=c,a.y=l,a.alpha=(Math.abs(Math.cos(o))*.8+.2)*i}}),_.run(()=>{s(`resize`,async()=>{d=window.innerWidth,f=window.innerHeight,e.renderer.resize(d,f),y({dotTexture:n,particleContainer:t})}),c(()=>{try{e?.destroy(!0,{children:!0,texture:!0,textureSource:!0})}catch(e){console.error(e)}})})}return e(async()=>{await b()}),n(()=>{_.stop()}),(e,t)=>(a(),l(`div`,{ref_key:`el`,ref:u,"z--1":``,fixed:``,"size-screen":``,"left-0":``,"right-0":``,"top-0":``,"bottom-0":``,"pointer-events-none":``,"dark:invert":``},null,512))}});export{Fe as default};