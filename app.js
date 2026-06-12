const STORAGE_KEY = 'naomiPromptDirector.v3';

const sections = [
  ['wardrobe','Wardrobe fallback / manual lock','Paste into WARDROBE fallback/manual lock'],
  ['environment','Environment fallback / manual lock','Paste into ENVIRONMENT fallback/manual lock'],
  ['lighting','Lighting/style fallback / manual lock','Paste into LIGHTING/STYLE fallback/manual lock'],
  ['brief','User creative brief','Paste into USER CREATIVE BRIEF'],
  ['gaze','Gaze / expression bias','Paste into GAZE / EXPRESSION BIAS'],
  ['rear','Rear / side bias · Shot 3','Paste into REAR / SIDE BIAS · SHOT 3'],
  ['variety','Pose variety / anti-repetition','Paste into POSE VARIETY / ANTI-REPETITION']
].map(([key,title,paste])=>({key,title,paste}));

const vibes = {
  'seductive-luxury':'seductive upscale lifestyle shoot, fitted evening outfit, confident eye contact, tasteful sensuality, realistic influencer photo',
  'summer-sultry':'sun-warmed sultry summer lifestyle shoot, tasteful resort styling, confident eye contact, relaxed vacation energy, realistic influencer photo',
  'bold-nightlife':'bold evening nightlife lifestyle shoot, sleek fitted outfit, magnetic eye contact, refined sultry confidence, realistic premium social-media photo',
  'soft-seductive':'soft seductive intimate lifestyle shoot, cozy fitted styling, warm expressive eyes, natural half-smile, realistic candid influencer photo',
  'fashion-editorial':'fashion-forward editorial lifestyle shoot, garment readability prioritized, fitted styling, confident direct gaze, realistic influencer photo',
  'candid-lifestyle':'candid lifestyle shoot, unposed in-between moments, fitted styling, playful expression, realistic social-media photo',
  'fitness-lifestyle':'premium fitness lifestyle shoot, fitted athletic styling, confident eye contact, sculpted but natural movement, clean realistic photo',
  'fresh-lifestyle':'fresh upscale daytime lifestyle shoot, fitted summer styling, natural confident expression, soft realistic light, realistic influencer photo'
};

const banks = {
  wardrobe: {
    'seductive-luxury':['fitted satin off-shoulder mini dress with long sheer sleeves','bodycon square-neck mini dress with long sleeves','ribbed knit off-shoulder sweater dress','satin slip mini dress under cropped tailored blazer','corset-style top with high-waisted tailored trousers','minimal sleeveless midi dress with sculpted waist'],
    'summer-sultry':['structured high-waisted bikini with oversized linen shirt cover-up','sleek one-piece swimsuit with linen shirt draped from shoulders','halter mini dress with open-back detail','ribbed knit mini dress with thin straps','linen two-piece set with cropped square-neck top and tailored shorts','floral sundress with softly cinched waist'],
    'bold-nightlife':['fitted bodysuit with high-waisted leather mini skirt','mini dress under long leather trench coat worn open','velvet mini dress with long sleeves and square neckline','satin mini dress with thin straps','lace-sleeve mini dress with opaque lining','cropped tank with leather mini skirt and boots'],
    'soft-seductive':['oversized off-shoulder knit sweater with fitted shorts barely visible','cable-knit sweater dress with long sleeves','ribbed tank dress with low square neckline','soft belted spa robe over ribbed tank dress','off-shoulder knit mini dress with wool socks','relaxed fitted tank top with lounge shorts'],
    'fashion-editorial':['strapless midi dress with sculpted bodice','deep satin midi dress with square neckline','corset-style top with wide-leg trousers','charcoal strapless mini dress with sheer tights','sleeveless turtleneck with pencil skirt','minimal square-neck midi dress'],
    'candid-lifestyle':['long-sleeve top with high-waisted straight-leg jeans','ribbed tank top with lounge shorts','long-sleeve knit mini dress with loafers','cropped long-sleeve top with high-waisted leggings','bodysuit with tailored trousers','casual sundress with leather sandals'],
    'fitness-lifestyle':['matching workout set with cropped square-neck athletic top and contour leggings','pilates set with square-neck crop top and high-waisted leggings','athletic crop top with high-waisted biker shorts','yoga set with sports bra and leggings','tennis dress with pleated mini skirt','fitted track jacket with contour leggings'],
    'fresh-lifestyle':['linen corset-style top with high-waisted shorts','square-neck sundress with thin straps','sand linen mini dress with deep square neckline','sage linen two-piece set','white ribbed tank with dark denim shorts and riding boots','navy linen mini dress with strappy sandals']
  },
  environment: {
    indoor:['in a moody boutique hotel suite with cream plaster walls, walnut furniture, linen curtains and brass accents','in a modern high-rise apartment with floor-to-ceiling windows, city lights and warm interior lamps','in an upscale walk-in wardrobe with vanity lights, dark wood shelving, full-length mirror and brass hardware','inside a contemporary art gallery with white walls, polished concrete floor and large abstract canvases','in a sleek modern condo kitchen with dark stone island, walnut cabinets and warm pendant lights','inside a cozy modern cabin with snowy window, stone fireplace, wood walls and cream boucle chair','inside a boutique bookstore corner with tall wood shelves, leather reading chair and small brass lamp','in a modern executive office after dark with glass walls, walnut desk and city lights outside'],
    outdoor:['on a private rooftop terrace with city skyline, glass railing, planters and low cream seating','on a quiet sandy beach near shoreline with soft waves, pale sand and open ocean horizon','beside a luxury resort pool with pale stone deck, cream loungers, blue water and potted palms','on a private yacht deck near a marina with teak flooring, chrome railings and calm blue water','on a quiet European cafe patio with marble tables, potted flowers and cobblestone street','on whitewashed resort stairs with bougainvillea, cream stucco and terracotta pots','on a quiet city street at night with wet pavement reflections and warm storefront lights','on a private garden patio with olive trees, rattan chair, stone pavers and soft greenery','on a private tennis club court with green fencing, clay-toned surface and manicured hedges','outside a clean luxury horse stable with dark wood doors, pale gravel path and green paddock'],
    fitness:['in a private apartment gym with full-length mirrors, matte black weights and walnut accent wall','inside a boutique pilates studio with reformers, pale wood floors, cream walls and large mirror','on a quiet outdoor running track at sunset with red lanes, empty bleachers and distant trees','on a rooftop yoga terrace with wood decking, rolled mat, potted greenery and soft city skyline']
  },
  lighting:['soft warm low evening lamp light, realistic shadow shaping, sharp focus, subtle grain, warm neutral color grade','mixed cool city-window and warm interior lamp light, sharp focus, subtle grain, cinematic blue-and-gold color grade','golden-hour sunset side light, soft rim light, natural skin texture, warm peach and gold color grade','bright late-afternoon sun softened by partial shade, crisp realistic shadows, clean lifestyle color grade','soft diffused morning window light, gentle shadows, cream beige and wood color grade','warm amber wall-sconce lighting, deeper shadows, sharp subject focus, cinematic black and gold grade','clean gallery track lighting with soft directional highlights, sharp focus, neutral editorial color grade','magenta and cyan neon light mixed with soft face fill, sharp focus, cinematic nightlife color contrast','soft tropical shade with warm sun filtering through palms, dappled shadows, green cream and tan color grade','warm fireplace glow mixed with soft lamp light, deep cozy shadows, amber cream and wood-toned color grade']
};

const palettes = {
  'seductive-luxury':['black','deep burgundy','espresso brown','charcoal grey','emerald green','dark plum','navy blue','champagne satin','deep wine red'],
  'summer-sultry':['white','ivory','coral','turquoise blue','espresso brown','sage green','navy blue','sand beige','sunset orange'],
  'bold-nightlife':['black','emerald green','deep red','silver satin','midnight blue','dark plum','champagne gold','burgundy','gunmetal grey'],
  'soft-seductive':['cream','oatmeal beige','chocolate brown','soft ivory','charcoal grey','dusty rose','warm taupe','espresso brown'],
  'fashion-editorial':['black','white','deep red','charcoal grey','ivory','silver grey','camel beige','emerald green'],
  'candid-lifestyle':['white','black','chocolate brown','heather grey','cream','navy blue','olive green','washed blue denim'],
  'fitness-lifestyle':['black','dark charcoal','mocha brown','sage green','navy blue','stone grey','deep burgundy','espresso brown'],
  'fresh-lifestyle':['white','cream','sage green','sand beige','navy blue','coral','sky blue','olive green','black']
};

const defaults = {locks:{wardrobe:false,environment:false,lighting:false,brief:false,gaze:false,rear:false,variety:false}, selected:{}, logicMode:'pack', vibe:'seductive-luxury', keepConsistency:true, antiCollage:true, randomizeOutfitColor:true, customPacks:[]};
let state = load();
const pick = a => a[Math.floor(Math.random()*a.length)];
function load(){try{return {...defaults,...(JSON.parse(localStorage.getItem(STORAGE_KEY))||{})}}catch{return structuredClone(defaults)}}
function save(){localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); toastMsg('Saved')}
function envPool(){ if(state.vibe==='fitness-lifestyle') return banks.environment.fitness; if(['summer-sultry','fresh-lifestyle'].includes(state.vibe)) return banks.environment.outdoor; if(state.vibe==='bold-nightlife') return [...banks.environment.indoor,...banks.environment.outdoor]; return [...banks.environment.indoor,...banks.environment.outdoor]; }
function guidance(){return {
  brief:vibes[state.vibe],
  gaze:'confident engaging presence, direct eye contact with the camera, eyes near the lens, warm magnetic connection, varied expressions including soft smile, playful half-smile, subtle smirk, relaxed laugh, calm closed-mouth smile, and inviting serious gaze',
  rear:'favor a mix of full-body angles: side view, three-quarter rear, over-the-shoulder body orientation, walking-away-with-face-turned-back, and seated side angle; keep her face visible and eye contact alive even when her body faces away',
  variety:'prioritize full-body and three-quarter-body compositions before waist-up crops; vary camera distance, low angle, eye-level angle, slight high angle, body orientation, crop, hand placement, gaze, and expression between photos; include at least one full-body outfit read with shoes visible and one wider environmental shot; no repeated pose or composition'
}}
function wardrobe(){ const color=state.randomizeOutfitColor?pick(palettes[state.vibe]||palettes['seductive-luxury']):''; return `wearing a ${color?color+' ':''}${pick(banks.wardrobe[state.vibe]||banks.wardrobe['seductive-luxury'])}, flattering fitted silhouette, tasteful styling`; }
function augment(k,t){ if(!state.keepConsistency) return t; if(k==='wardrobe') return t+', same outfit throughout the photoshoot'; if(k==='environment') return t+', same location throughout the photoshoot'; if(k==='lighting') return t+', same lighting direction and color grade throughout the photoshoot'; return t; }
function generated(){ const g=guidance(); return {wardrobe:augment('wardrobe',wardrobe()), environment:augment('environment',pick(envPool())), lighting:augment('lighting',pick(banks.lighting)), ...g}; }
function sectionValue(k){ if(['brief','gaze','rear','variety'].includes(k)) return guidance()[k]; if(k==='wardrobe') return augment('wardrobe',wardrobe()); if(k==='environment') return augment('environment',pick(envPool())); if(k==='lighting') return augment('lighting',pick(banks.lighting)); }
function randomize(all=false){ const g=generated(); for(const s of sections){ if(all || !state.locks[s.key]) state.selected[s.key]=g[s.key]; } render(); }
function randomizeSection(k){ state.selected[k]=sectionValue(k); render(); }
function render(){
  logicMode.value=state.logicMode; keepConsistency.checked=state.keepConsistency; antiCollage.checked=state.antiCollage; randomizeOutfitColor.checked=state.randomizeOutfitColor;
  vibeSelect.innerHTML=Object.keys(vibes).map(k=>`<option value="${k}">${label(k)} (${(banks.wardrobe[k]||[]).length} clothes)</option>`).join(''); vibeSelect.value=state.vibe;
  sectionCards.innerHTML='';
  for(const s of sections){const card=document.createElement('article');card.className=`card ${state.locks[s.key]?'locked':''}`;card.innerHTML=`<div class="card-head"><div><h3>${s.title}</h3><p class="sub">${s.paste}</p></div><div class="lockline"><label><input type="checkbox" data-lock="${s.key}" ${state.locks[s.key]?'checked':''}/> Lock</label></div></div><textarea class="prompt" data-key="${s.key}">${state.selected[s.key]||''}</textarea><div class="card-actions"><button class="small" data-random="${s.key}">Randomize this</button><button class="small secondary" data-copy="${s.key}">Copy</button></div>`;sectionCards.appendChild(card)}
  document.querySelectorAll('[data-lock]').forEach(e=>e.onchange=x=>{state.locks[x.target.dataset.lock]=x.target.checked;render()});
  document.querySelectorAll('[data-key]').forEach(e=>e.oninput=x=>{state.selected[x.target.dataset.key]=x.target.value;updateCombined()});
  document.querySelectorAll('[data-random]').forEach(e=>e.onclick=x=>randomizeSection(x.target.dataset.random));
  document.querySelectorAll('[data-copy]').forEach(e=>e.onclick=x=>copy(state.selected[x.target.dataset.copy]||''));
  updateCombined();
}
function updateCombined(){let block=sections.map(s=>`${s.title}\n${state.selected[s.key]||''}`).join('\n\n---\n\n'); if(state.antiCollage) block+='\n\n---\n\nNegative add-on\ncollage, photo collage, contact sheet, grid layout, split screen, multiple photos in one image, multiple panels, duplicate woman, repeated subject, multiple copies of the same woman, storyboard, four images, multiple frames, blank expression, looking away in every shot, tight waist-up crop in every image, cropped legs, hidden full outfit'; combinedOutput.textContent=block;}
function label(k){return k.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ')}
function toastMsg(m){const el=document.getElementById('toast');el.textContent=m;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1200)}
async function copy(t){await navigator.clipboard.writeText(t);toastMsg('Copied')}
randomizeAll.onclick=()=>randomize(false); copyAll.onclick=()=>copy(combinedOutput.textContent); copyCombined.onclick=()=>copy(combinedOutput.textContent); saveState.onclick=save;
logicMode.onchange=e=>{state.logicMode=e.target.value;randomize(false)}; vibeSelect.onchange=e=>{state.vibe=e.target.value;randomize(false)}; keepConsistency.onchange=e=>{state.keepConsistency=e.target.checked;randomize(false)}; antiCollage.onchange=e=>{state.antiCollage=e.target.checked;updateCombined()}; randomizeOutfitColor.onchange=e=>{state.randomizeOutfitColor=e.target.checked;randomizeSection('wardrobe')};
addPack.onclick=()=>{ if(!newWardrobe.value||!newEnvironment.value||!newLighting.value){toastMsg('Fill wardrobe, environment, lighting');return} banks.wardrobe[state.vibe].push(newWardrobe.value.replace(/^wearing\s+/i,'')); banks.environment.indoor.push(newEnvironment.value); banks.lighting.push(newLighting.value); save(); newPackName.value=newWardrobe.value=newEnvironment.value=newLighting.value=newNotes.value=''; randomize(false); };
if(!Object.keys(state.selected||{}).length) randomize(true); else render();
