import React from 'react';
import {ArrowRight,Menu,X,Sparkles} from 'lucide-react';
import {site} from './config';
import './landing.css';

export default function Landing(){
  const [menu,setMenu]=React.useState(false);
  const [ai,setAi]=React.useState(false);
  return <div className="landing">
    <header className="lhead">
      <a className="lbrand" href="/">NEXORA</a>
      <nav className={menu?'lmnav open':'lmnav'}>
        {['Collection','Story','Journal'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}
        <a className="lshop" href="/">Shop the collection <ArrowRight size={14}/></a>
      </nav>
      <button className="lmenu" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="lhero">
        <img src={site.collections[0].image} alt="Nexora editorial fashion"/>
        <div className="lheroShade"/>
        <div className="lheroCopy"><span>NEW SEASON · 2026</span><h1>Quietly<br/><em>distinct.</em></h1><p>Modern essentials for a wardrobe with intention. Refined silhouettes, tactile fabrics and pieces made to stay.</p><a className="lbutton" href="#collection">Explore the collection <ArrowRight/></a></div>
        <div className="lheroMark">NEXORA / 01</div>
      </section>
      <section id="collection" className="lintro"><span>THE NEXORA EDIT</span><h2>Designed for now.<br/><i>Made for longer.</i></h2><p>We believe personal style is built slowly: through proportion, texture and the confidence to repeat what works. Every Nexora piece is selected with that philosophy in mind.</p></section>
      <section className="ltiles">
        <a href="/" className="ltile"><img src={site.collections[0].image} alt="The quiet edit"/><div><span>01 / THE QUIET EDIT</span><h3>Soft structure</h3><b>Explore <ArrowRight/></b></div></a>
        <a href="/" className="ltile"><img src={site.collections[1].image} alt="After hours"/><div><span>02 / AFTER HOURS</span><h3>Sharper after dark</h3><b>Explore <ArrowRight/></b></div></a>
      </section>
      <section id="story" className="lstory"><div className="storyImage"><img src={site.products[0].image} alt={site.products[0].name}/><small>SCULPTED LINEN BLAZER / 01</small></div><div className="storyCopy"><span>OUR APPROACH</span><h2>Fewer, better<br/><i>things.</i></h2><p>From a precise shoulder to a soft hand-feel, the details are intentionally quiet. We design around repeat wear, not one-off moments.</p><a href="/" className="ltext">Discover Nexora <ArrowRight/></a></div></section>
      <section id="journal" className="ljournal"><div><span>THE JOURNAL</span><h2>Style notes<br/><i>without the noise.</i></h2></div><article><small>STYLE NOTE 01</small><h3>Build around your best neutral.</h3><p>Stone, black, ivory and cocoa give stronger pieces room to breathe.</p><a href="/">Read the edit <ArrowRight size={15}/></a></article><article><small>STYLE NOTE 02</small><h3>Texture changes everything.</h3><p>Pair clean silhouettes with linen, wool and leather for depth without excess.</p><a href="/">Read the edit <ArrowRight size={15}/></a></article></section>
      <section className="lcta"><span>NEXORA WEB</span><h2>Make space for<br/><i>your style.</i></h2><a className="lbutton dark" href="/">Shop now <ArrowRight/></a></section>
    </main>
    <footer className="lfooter"><b>NEXORA</b><span>Modern fashion, considered.</span><span>© 2026 Nexora Web</span></footer>
    <button className="lai" onClick={()=>setAi(!ai)} aria-label="Open Nexora AI"><Sparkles size={20}/></button>
    {ai&&<div className="laibox"><b>Nexora AI</b><p>Ask me about the collection, styling ideas, or where to start.</p><a href="/">Open shopping assistant <ArrowRight size={14}/></a></div>}
  </div>
}