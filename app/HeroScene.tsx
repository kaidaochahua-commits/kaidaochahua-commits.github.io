"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import ColorBends from "./ColorBends";

const images = ["1.png","1 2.png","11.png","12.png","1备份 10.png","1备份 2.png","1备份 47.png","1备份 9.png","4.png","5.png","5 2.png","画板备份 14.png","画板备份 25.png"];

export default function HeroScene() {
  const reduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const galleryRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const root=galleryRef.current;if(!root)return;
    const cards=Array.from(root.querySelectorAll<HTMLElement>("figure"));
    let frame=0,last=performance.now(),offset=0;
    const render=(now:number)=>{const width=root.clientWidth,cardWidth=cards[0]?.offsetWidth||220,spacing=cardWidth*.64+10,total=spacing*cards.length;offset+=(now-last)*(reduced ? .012 : .035);last=now;
      cards.forEach((card,i)=>{const raw=i*spacing-offset+total/2;const baseX=((raw%total+total)%total)-total/2;const n=Math.min(Math.abs(baseX)/(width*.55),1.32);const x=baseX*(1+.28*n);const y=62;const scale=.61+n*.36;const rotateY=-baseX/width*46;const rotateZ=-baseX/width*5.5;const z=-145+n*165;card.style.transform=`translate3d(${x}px,${y}px,${z}px) scale(${scale}) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;card.style.zIndex=String(Math.round(60+n*45));card.style.opacity=String(Math.max(.28,1-Math.max(0,n-1)*1.3));});frame=requestAnimationFrame(render)};
    frame=requestAnimationFrame(render);return()=>cancelAnimationFrame(frame);
  },[reduced]);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    setPointer({ x: event.clientX / innerWidth - .5, y: event.clientY / innerHeight - .5 });
  };
  return <div className="heroStage galleryHero" onPointerMove={move} style={{"--hero-x":`${pointer.x * 26}px`,"--hero-y":`${pointer.y * 18}px`} as React.CSSProperties}>
    <div className="colorBendsFrame"><ColorBends rotation={275} speed={0.75} colors={["#0027ff","#ff0000","#6787ff"]} transparent autoRotate={0.3} scale={2} frequency={1} warpStrength={1} mouseInfluence={2.3} parallax={1.4} noise={0.15} iterations={1} intensity={1.5} bandWidth={4.5}/></div>
    <div className="heroHeadline">
      <p>PORTFOLIO · PRODUCT DESIGNER</p>
      <h1 className="editorialTitle"><span className="editorialLeadLine">Design products that</span><span className="editorialLine">people remember</span></h1>
      <h2>AI × UI × Motion — turning complex ideas into clear, memorable digital experiences.</h2>
      <a href="#work">Explore selected work <b>→</b></a>
    </div>
    <div className="galleryGlow" />
    <div className="heroGallery" ref={galleryRef} aria-label="Selected visual work">
      <div className="galleryTrack">{images.map((src,index)=><figure key={src}><img src={`/hero-cover/${encodeURIComponent(src)}`} alt={`Selected project ${index+1}`}/></figure>)}</div>
    </div>
    <div className="heroBenefits"><div><b>Product Strategy</b><span>From ambiguity to a clear product direction.</span></div><div><b>Interaction & Motion</b><span>Interfaces that feel responsive, fluid and alive.</span></div><div><b>Visual Systems</b><span>Distinctive design languages built to scale.</span></div></div>
  </div>;
}
