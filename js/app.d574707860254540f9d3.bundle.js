(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,o)=>{const a=o(89),l=o(863),{lightningChart:n,SurfaceSeriesTypes3D:s,ColorHSV:r,ColorRGBA:i,IndividualPointFill:c,PalettedFill:d,SolidFill:m,LUT:h,UIOrigins:u,UIBackgrounds:p,UIElementBuilders:w,UILayoutBuilders:y,emptyFill:g,Themes:x}=a,{createWaterDropDataGenerator:f}=l,k=n().Chart3D({theme:x[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Simple 3D Surface Mesh");k.forEachAxis((e=>e.setInterval({start:-3.55,end:3.55,stopAxisAfter:!1})));const v=new h({steps:[{value:-1.5,color:i(0,0,255)},{value:-.2,color:i(255,255,255)}],interpolate:!0}),C=new h({steps:[{value:0,color:i(0,0,0)},{value:30,color:i(255,255,0)},{value:45,color:i(255,204,0)},{value:60,color:i(255,128,0)},{value:100,color:i(255,0,0)}],interpolate:!0}),S=150,M=k.addSurfaceSeries({type:s.Mesh,rows:150,columns:S,start:{x:0,z:0},end:{x:100,z:100},pixelate:!0});f().setRows(150).setColumns(S).setWaterDrops([{rowNormalized:.2,columnNormalized:.6,amplitude:23},{rowNormalized:.5,columnNormalized:.5,amplitude:74},{rowNormalized:.7,columnNormalized:.3,amplitude:16}]).setOffsetLevel(58).setVolatility(25).generate().then((e=>{M.invalidateValuesOnly(e)})),M.invalidateColorsOnly(((e,t)=>Math.random()>=.8?i(255,0,0):void 0)),M.invalidateGeometryOnly(((e,t,o)=>{const a=2*e*Math.PI/149,l=Math.abs((n=t,2.5+Math.cos(4*n*Math.PI/S)-(e=>.3*Math.sin(4*e*Math.PI/S))(t)));var n;return{x:Math.sin(a)*l,y:Math.cos(a)*l,z:t}})),(async()=>{const e=await fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0906/camera.json").then((e=>e.json()));if(!e)return void console.log("No Camera animation data.");console.log("Loaded Camera animation data.");let t=0;const o=()=>{if(L.getOn()){const{cameraLocation:o}=e.frames[Math.floor(t)%e.frames.length];k.setCameraLocation(o),t+=1.5}requestAnimationFrame(o)};requestAnimationFrame(o)})();const I=k.addUIElement(y.Column.setBackground(p.Rectangle));I.setPosition({x:0,y:100}).setOrigin(u.LeftTop).setMargin(10).setPadding(4).setAutoDispose({type:"max-height",maxHeight:.3});const O=[],B=(e,t,o=!1)=>{const a=I.addElement(w.CheckBox).setText(e);o&&(a.setOn(!0),t()),a.onSwitch(((e,o)=>{o&&(t(),a.setMouseInteractions(!1),O.forEach((e=>e.checkBox!==a&&e.checkBox.setOn(!1).setMouseInteractions(!0))))})),O.push({checkBox:a})};B("Color look up by Y",(()=>M.setFillStyle(new d({lut:v,lookUpProperty:"y"})))),B("Color look up by Value",(()=>M.setFillStyle(new d({lut:C,lookUpProperty:"value"}))),!0),B("Individual Color",(()=>M.setFillStyle((new c).setFallbackColor(i(0,255,0))))),B("Solid color",(()=>M.setFillStyle(new m({color:r(360*Math.random())}))));const U=I.addElement(w.CheckBox);U.onSwitch(((e,t)=>(e=>{M.setWireframeStyle(e?new m({color:i(0,0,0,50)}):g),U.setText(e?"Hide wireframe":"Show wireframe")})(t))),U.setOn(!0);const F=e=>{L.setText(e?"Disable camera animation":"Enable camera animation"),L.getOn()!==e&&L.setOn(e)},L=I.addElement(w.CheckBox);L.onSwitch(((e,t)=>F(t))),F(!0),k.onBackgroundMouseDrag((()=>{F(!1)})),k.addLegendBox().add(k).setAutoDispose({type:"max-width",maxWidth:.3})}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);