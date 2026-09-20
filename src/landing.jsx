import React from 'react';
import {ArrowRight,Menu,X,Sparkles} from 'lucide-react';
import {site} from './config';
import './landing.css';

export default function Landing(){
  const [menu,setMenu]=React.useState(false);
  const [data,setData]=React.useState(site);
  React.useEffect(()=>{fetch('/api/store').then(r=>r.ok?r.json():site).then(setData).catch(()=>{})},[]);
  const L=data.landing||{};const S=L.sections||{};const show=id=>S[id]!==false;
  const [ai,setAi]=React.useState(false),[email,setEmail]=React.useState(''),[notice,setNotice]=React.useState('');
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
        <img src={L.hero?.image||(L.collections?.[0]?.image||(L.collections?.[0]?.image||site.collections[0].image))} alt="Nexora editorial fashion"/>
        <div className="lheroShade"/>
        <div className="lheroCopy"><span>{L.hero?.badge||'NEW SEASON · 2026'}</span><h1>{L.hero?.title||'Quietly distinct.'}</h1><p>{L.hero?.subtitle||'Modern essentials for a wardrobe with intention. Refined silhouettes, tactile fabrics and pieces made to stay.'}</p><a className="lbutton" href="#collection">{L.hero?.primary||'Explore the collection'} <ArrowRight/></a></div>
        <div className="lheroMark">NEXORA / 01</div>
      </section>
      <section id="collection" className="lintro"><span>{L.intro?.eyebrow||'THE NEXORA EDIT'}</span><h2>{L.intro?.title||'Designed for now. Made for longer.'}</h2><p>{L.intro?.text||'We believe personal style is built slowly: through proportion, texture and the confidence to repeat what works.'}</p></section>
      <section className="ltiles">
        <a href="/" className="ltile"><img src={site.collections[0].image} alt="The quiet edit"/><div><span>01 / THE QUIET EDIT</span><h3>{L.collections?.[0]?.title||'Soft structure'}</h3><b>Explore <ArrowRight/></b></div></a>
        <a href="/" className="ltile"><img src={(L.collections?.[1]?.image||(L.collections?.[1]?.image||site.collections[1].image))} alt="After hours"/><div><span>02 / AFTER HOURS</span><h3>{L.collections?.[1]?.title||'Sharper after dark'}</h3><b>Explore <ArrowRight/></b></div></a>
      </section>
      {show('story')&&<section id="story" className="lstory"><div className="storyImage"><img src={L.story?.image||data.products?.[0]?.image||site.products[0].image} alt={L.story?.heading||'Nexora story'}/><small>NEXORA / STORY</small></div><div className="storyCopy"><span>{L.story?.eyebrow||'OUR APPROACH'}</span><h2>{L.story?.heading||'Fewer, better things.'}</h2><p>{L.story?.text||''}</p><div className="stats">{(L.story?.stats||[]).map((s,i)=><div key={i}><b>{s[0]}</b><small>{s[1]}</small></div>)}</div></div></section>}
{show('journal')&&<section id="journal" className="ljournal"><div><span>THE JOURNAL</span><h2>Style notes<br/><i>without the noise.</i></h2></div>{(L.journal||[]).map((j,i)=><article key={i}>{j.image&&<img src={j.image} alt=""/>}<small>{j.category||'STYLE NOTE'} {j.date&&'· '+j.date}</small><h3>{j.title}</h3><p>{j.text}</p><a href={j.link||'/'}>Read the edit <ArrowRight size={15}/></a></article>)}</section>}
{show('reviews')&&<section className="admin-review-section"><span>CLIENT NOTES</span><h2>Real words,<br/><i>real style.</i></h2><div className="review-strip">{(L.testimonials||[]).map(r=><article key={r.id}><img src={r.image||site.products[0].image} alt={r.name}/><b>{r.name}</b><small>{'★'.repeat(Number(r.rating||5))}</small><p>“{r.review}”</p></article>)}</div></section>}
{show('newsletter')&&<section className="lcta newsletter"><span>NEXORA WEB</span><h2>{L.newsletter?.heading||'Make space for your style.'}</h2><p>{L.newsletter?.text}</p><form onSubmit={async e=>{e.preventDefault();const r=await fetch('/api/subscribe',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email})});setNotice(r.ok?'You’re on the list.':'Please enter a valid email.');if(r.ok)setEmail('')}}><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address"/><button className="lbutton dark">{L.newsletter?.button||'Join the list'} <ArrowRight/></button></form><small>{notice}</small></section>}</main>
    <footer className="lfooter"><b>{data.brand||'NEXORA WEB'}</b><span>{L.footer?.description||data.tagline}</span><div>{L.social?.instagram&&<a href={L.social.instagram}>Instagram</a>} {L.social?.facebook&&<a href={L.social.facebook}>Facebook</a>} {L.social?.tiktok&&<a href={L.social.tiktok}>TikTok</a>} {L.social?.whatsapp&&<a href={L.social.whatsapp}>WhatsApp</a>}</div><span>{L.footer?.copyright||'© 2026 Nexora Web'}</span></footer>
    <button className="lai" onClick={()=>setAi(!ai)} aria-label="Open Nexora AI"><Sparkles size={20}/></button>
    {ai&&<div className="laibox"><b>Nexora AI</b><p>Ask me about the collection, styling ideas, or where to start.</p><a href="/">Open shopping assistant <ArrowRight size={14}/></a></div>}
  </div>
}