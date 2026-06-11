const STORAGE_KEY = 'naomiPromptDirector.v1';

const basePacks = [
  {
    name: 'Moody hotel satin', tags: ['indoor','hotel','night','dress'], vibe: 'seductive-luxury',
    wardrobe: 'wearing a form-fitting black satin off-shoulder mini dress with a sculpted sweetheart neckline, long sheer black sleeves, body-hugging silhouette, cinched waist, subtle shine across the fabric, hem at upper-thigh length, sheer black tights, delicate gold necklace, small gold hoop earrings, simple black stiletto heels, elegant seductive evening styling, flattering waist and hip line',
    environment: 'in a moody luxury boutique hotel suite at night with cream plaster walls, dark walnut furniture, linen curtains partly open to faint city lights, a low velvet lounge chair, neutral bedding softly blurred in the background, brass accents, deep shadows, muted black beige and gold palette',
    lighting: 'soft warm low evening lamp light, sensual but realistic shadow shaping across the face and body, sharp focus, realistic skin texture, gentle contrast, subtle photographic grain, warm neutral color temperature, muted black beige and gold color grade, clear fabric texture and satin highlights'
  },
  {
    name: 'High-rise city burgundy', tags: ['indoor','apartment','night','city','dress'], vibe: 'seductive-luxury',
    wardrobe: 'wearing a fitted deep burgundy bodycon mini dress with a clean square neckline, long sleeves, smooth stretch fabric, cinched waist, sheer black tights, delicate gold necklace, black pointed heels, warm seductive evening styling, flattering waist and hip line',
    environment: 'in a modern high-rise apartment at night with floor-to-ceiling windows, soft city lights outside, warm interior lamps, dark reflective glass, walnut furniture, cream walls, linen textures, muted city-luxury atmosphere',
    lighting: 'mixed city-window and warm interior lamp light, cool blue city reflections balanced with warm skin tones, sharp focus, subtle grain, realistic shadows, cinematic high-rise evening color grade, no excessive bokeh'
  },
  {
    name: 'Cocktail lounge leather', tags: ['indoor','lounge','night','skirt'], vibe: 'bold-nightlife',
    wardrobe: 'wearing a black fitted bodysuit with a high-waisted black leather mini skirt, sheer black tights, delicate gold jewelry, black pointed heels, sleek confident evening styling, flattering waist and hip line',
    environment: 'in a moody hotel cocktail lounge corner with dark velvet seating, low brass tables, amber wall sconces, black marble accents, deep shadows, warm reflections, muted gold and burgundy palette, refined evening nightlife atmosphere',
    lighting: 'warm amber wall-sconce lighting with soft directional shadows, sharp subject focus, subtle film grain, realistic skin texture, gentle contrast, deep evening color grade, natural fabric detail, refined nightlife photo realism'
  },
  {
    name: 'Dressing room blazer', tags: ['indoor','dressing-room','mirror','blazer'], vibe: 'fashion-editorial',
    wardrobe: 'wearing a fitted black satin slip-style mini dress layered under a cropped tailored black blazer, sheer black tights, delicate gold jewelry, black pointed heels, sleek confident evening styling, polished but seductive silhouette',
    environment: 'in an upscale walk-in wardrobe and dressing room with warm vanity lights, dark wood shelving, hanging neutral-toned clothes, a full-length mirror, cream walls, brass hardware, soft carpet, intimate getting-ready atmosphere',
    lighting: 'soft vanity mirror lighting, warm even glow across the face, gentle shadows under the cheekbones and collarbones, sharp focus, realistic skin texture, subtle grain, polished but natural evening photo finish'
  },
  {
    name: 'Balcony sweater dress', tags: ['outdoor','balcony','night','city','dress'], vibe: 'soft-seductive',
    wardrobe: 'wearing a charcoal grey off-shoulder fitted sweater dress with long sleeves, sculpted waist, soft ribbed knit texture, sheer black tights, small gold hoops, black heels, cozy seductive evening styling',
    environment: 'on a private high-rise balcony at night with city lights in the distance, warm indoor light spilling through glass doors, dark railing, soft curtains behind her, muted black gold and city-blue palette, cinematic evening atmosphere',
    lighting: 'cool city-night ambience mixed with warm indoor spill light, realistic shadows, sharp subject focus, subtle grain, flattering skin tones, cinematic blue-and-gold evening color grade'
  },
  {
    name: 'Beach sunset swim', tags: ['outdoor','beach','sunset','swimwear'], vibe: 'summer-sultry',
    wardrobe: 'wearing a tasteful black high-waisted bikini with a structured bandeau top, sheer oversized white linen shirt worn open as a cover-up, delicate gold anklet and small hoop earrings, barefoot beach styling, elegant swimwear silhouette',
    environment: 'on a quiet sandy beach near the shoreline with soft waves, pale sand, distant rocks, a folded linen towel and minimal beach bag nearby, open sky and ocean horizon, relaxed upscale summer atmosphere',
    lighting: 'golden-hour sunset light, warm low sun from the side, soft rim light along hair and shoulders, natural skin texture, gentle contrast, subtle grain, warm peach and gold color grade, sharp realistic lifestyle photo'
  },
  {
    name: 'Poolside resort', tags: ['outdoor','pool','sun','swimwear','resort'], vibe: 'summer-sultry',
    wardrobe: 'wearing a sleek dark espresso one-piece swimsuit with a low square neckline, high-cut leg, thin gold chain belt detail, oversized linen shirt draped loosely from the shoulders, gold sunglasses pushed into her hair, elegant resort styling',
    environment: 'beside a quiet luxury resort pool with pale stone deck, cream loungers, folded towels, potted palms, clear blue water reflections, minimal modern architecture, upscale sunny vacation atmosphere',
    lighting: 'bright warm late-afternoon sun softened by partial shade, crisp realistic shadows, clear fabric and water reflections, sharp focus, natural skin texture, subtle grain, clean resort lifestyle color grade'
  },
  {
    name: 'Rooftop golden hour', tags: ['outdoor','rooftop','sunset','dress'], vibe: 'summer-sultry',
    wardrobe: 'wearing a fitted ivory ribbed knit mini dress with a deep square neckline, thin straps, sculpted waist, delicate gold jewelry, nude strappy heels, warm elegant summer styling, flattering fitted silhouette',
    environment: 'on a private rooftop terrace with low cream seating, planters, glass railing, city skyline in the distance, soft outdoor cushions, minimal luxury decor, relaxed sunset atmosphere',
    lighting: 'warm golden-hour rooftop light, soft side illumination, gentle shadows, subtle photographic grain, sharp focus, warm cream and gold color grade, realistic premium social-media photo finish'
  },
  {
    name: 'Modern kitchen after dark', tags: ['indoor','kitchen','night','bodysuit'], vibe: 'candid-lifestyle',
    wardrobe: 'wearing a fitted black long-sleeve bodysuit tucked into high-waisted tailored cream trousers, slim black belt, delicate gold necklace, small hoops, black heels, sleek confident lifestyle styling',
    environment: 'in a sleek modern condo kitchen at night with a dark stone island, warm pendant lights, walnut cabinets, cream walls, subtle reflections, minimal luxury decor, intimate after-hours lifestyle atmosphere',
    lighting: 'warm pendant light from above and slightly forward, realistic shadow falloff, sharp fabric detail, subtle grain, natural skin texture, muted luxury condo color grade, no excessive bokeh'
  },
  {
    name: 'Rainy window casual', tags: ['indoor','apartment','rain','cozy'], vibe: 'soft-seductive',
    wardrobe: 'wearing an oversized cream off-shoulder knit sweater slipping slightly at one shoulder, fitted black micro shorts mostly covered by the sweater hem, bare legs, delicate gold necklace, cozy intimate styling without lingerie',
    environment: 'in a cozy modern apartment beside a large rain-streaked window, soft neutral sofa, folded throw blanket, walnut side table, warm lamp glow, blurred city rain outside, intimate quiet evening atmosphere',
    lighting: 'soft warm lamp light mixed with cool rainy window reflections, gentle contrast, natural shadows, subtle grain, realistic skin texture, moody cozy blue-and-amber color grade'
  },
  {
    name: 'Garden patio linen', tags: ['outdoor','patio','day','summer'], vibe: 'fresh-lifestyle',
    wardrobe: 'wearing a fitted black linen corset-style top with high-waisted cream linen shorts, delicate gold jewelry, flat leather sandals, effortless summer styling, flattering waistline, tasteful feminine silhouette',
    environment: 'on a private garden patio with stone pavers, olive trees, cream outdoor cushions, rattan chair, small wood table, neutral ceramics, soft greenery, refined Mediterranean summer atmosphere',
    lighting: 'soft late-morning diffused sunlight through greenery, realistic dappled shadows, sharp focus, natural skin texture, subtle grain, warm cream green and tan color grade'
  },
  {
    name: 'Gym mirror athleisure', tags: ['indoor','gym','mirror','athleisure'], vibe: 'fitness-lifestyle',
    wardrobe: 'wearing a fitted dark charcoal matching workout set with a cropped square-neck athletic top, high-waisted contour leggings, white ankle socks, clean black trainers, minimal gold studs, sporty fitted silhouette',
    environment: 'in a private luxury apartment gym with dark rubber flooring, full-length mirrors, matte black weights, walnut accent wall, towel bench, minimal clean equipment, premium fitness lifestyle atmosphere',
    lighting: 'clean soft overhead gym lighting with subtle side fill, sharp focus, realistic skin texture, natural fabric detail, gentle contrast, neutral black grey and warm wood color grade'
  }
];

const sections = [
  { key: 'wardrobe', title: 'Wardrobe fallback / manual lock', paste: 'Paste into WARDROBE fallback/manual lock' },
  { key: 'environment', title: 'Environment fallback / manual lock', paste: 'Paste into ENVIRONMENT fallback/manual lock' },
  { key: 'lighting', title: 'Lighting/style fallback / manual lock', paste: 'Paste into LIGHTING/STYLE fallback/manual lock' },
  { key: 'brief', title: 'User creative brief', paste: 'Paste into USER CREATIVE BRIEF' },
  { key: 'gaze', title: 'Gaze / expression bias', paste: 'Paste into GAZE / EXPRESSION BIAS' },
  { key: 'rear', title: 'Rear / side bias · Shot 3', paste: 'Paste into REAR / SIDE BIAS · SHOT 3' },
  { key: 'variety', title: 'Pose variety / anti-repetition', paste: 'Paste into POSE VARIETY / ANTI-REPETITION' }
];

const vibes = {
  'seductive-luxury': 'seductive upscale lifestyle shoot, fitted evening outfit, confident eye contact, varied flattering poses, tasteful sensuality, realistic influencer photo',
  'summer-sultry': 'sun-warmed sultry summer lifestyle shoot, tasteful fitted resort styling, confident eye contact, relaxed vacation energy, varied flattering poses, realistic influencer photo',
  'bold-nightlife': 'bold evening nightlife lifestyle shoot, sleek fitted outfit, magnetic eye contact, refined sultry confidence, varied camera angles, realistic premium social-media photo',
  'soft-seductive': 'soft seductive intimate lifestyle shoot, cozy fitted styling, warm expressive eyes, natural half-smile, varied flattering poses, realistic candid influencer photo',
  'fashion-editorial': 'fashion-forward editorial lifestyle shoot, garment readability prioritized, fitted styling, confident direct gaze, clean intentional compositions, realistic influencer photo',
  'candid-lifestyle': 'candid lifestyle shoot, unposed in-between moments, fitted styling, playful expression, direct connection with camera, realistic social-media photo',
  'fitness-lifestyle': 'premium fitness lifestyle shoot, fitted athletic styling, confident eye contact, sculpted but natural movement, clean realistic social-media photo',
  'fresh-lifestyle': 'fresh upscale daytime lifestyle shoot, fitted summer styling, natural confident expression, soft realistic light, varied flattering poses, realistic influencer photo'
};

const defaults = {
  locks: { wardrobe:false, environment:false, lighting:false, brief:false, gaze:false, rear:false, variety:false },
  selected: {}, logicMode: 'pack', vibe: 'seductive-luxury', keepConsistency: true, antiCollage: true,
  customPacks: []
};
let state = loadState();
let packs = [...basePacks, ...(state.customPacks || [])];

function loadState(){ try { return {...defaults, ...(JSON.parse(localStorage.getItem(STORAGE_KEY))||{})}; } catch { return structuredClone(defaults); } }
function save(){ state.customPacks = packs.filter(p=>p.custom); localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); toast('Saved'); }
const pick = arr => arr[Math.floor(Math.random()*arr.length)];
const byVibe = v => packs.filter(p => p.vibe === v || (p.tags||[]).includes(v));
function augment(key, text){
  let t = (text || '').trim();
  if(state.keepConsistency){
    if(key==='wardrobe' && !/same outfit/i.test(t)) t += ', same outfit throughout the photoshoot';
    if(key==='environment' && !/same location/i.test(t)) t += ', same location throughout the photoshoot';
    if(key==='lighting' && !/same lighting|consistent lighting/i.test(t)) t += ', same lighting direction and color grade throughout the photoshoot';
  }
  return t;
}
function composeFromPack(pack){
  return {
    wardrobe: augment('wardrobe', pack.wardrobe), environment: augment('environment', pack.environment), lighting: augment('lighting', pack.lighting),
    brief: vibes[state.vibe] || vibes['seductive-luxury'],
    gaze: 'confident engaging presence, direct eye contact with the camera, warm magnetic connection with the lens, sultry half-smile, playful smirk, expressive eyes, naturally varied inviting expression',
    rear: 'favor a side, three-quarter rear, or over-the-shoulder body orientation with her face turned back toward the camera, emphasizing waist and hip line tastefully, keeping eye contact alive even when her body faces away',
    variety: 'each photo from this shoot is its own distinct photograph: vary camera distance, camera angle, body orientation, crop, gaze, expression, and hand placement between photos; no repeated pose or composition'
  };
}
function smartPack(){ const pool = byVibe(state.vibe); return pick(pool.length ? pool : packs); }
function randomIndependent(){
  return {
    wardrobe: augment('wardrobe', pick(packs).wardrobe), environment: augment('environment', pick(packs).environment), lighting: augment('lighting', pick(packs).lighting),
    brief: vibes[state.vibe] || vibes['seductive-luxury'], gaze: composeFromPack(smartPack()).gaze, rear: composeFromPack(smartPack()).rear, variety: composeFromPack(smartPack()).variety
  };
}
function randomize(all=false){
  const generated = state.logicMode === 'independent' ? randomIndependent() : composeFromPack(smartPack());
  for(const s of sections){ if(all || !state.locks[s.key]) state.selected[s.key] = generated[s.key]; }
  render();
}
function render(){
  document.getElementById('logicMode').value = state.logicMode;
  document.getElementById('keepConsistency').checked = state.keepConsistency;
  document.getElementById('antiCollage').checked = state.antiCollage;
  const vibeSelect = document.getElementById('vibeSelect');
  vibeSelect.innerHTML = Object.entries(vibes).map(([k,v])=>`<option value="${k}">${label(k)}</option>`).join('');
  vibeSelect.value = state.vibe;
  const root = document.getElementById('sectionCards'); root.innerHTML = '';
  for(const s of sections){
    const card = document.createElement('article'); card.className = `card ${state.locks[s.key]?'locked':''}`;
    card.innerHTML = `<div class="card-head"><div><h3>${s.title}</h3><p class="sub">${s.paste}</p></div><div class="lockline"><label><input type="checkbox" data-lock="${s.key}" ${state.locks[s.key]?'checked':''}/> Lock</label></div></div><textarea class="prompt" data-key="${s.key}">${state.selected[s.key]||''}</textarea><div class="card-actions"><button class="small" data-random="${s.key}">Randomize this</button><button class="small secondary" data-copy="${s.key}">Copy</button></div>`;
    root.appendChild(card);
  }
  document.querySelectorAll('[data-lock]').forEach(el=>el.onchange=e=>{state.locks[e.target.dataset.lock]=e.target.checked; render();});
  document.querySelectorAll('[data-key]').forEach(el=>el.oninput=e=>{state.selected[e.target.dataset.key]=e.target.value;});
  document.querySelectorAll('[data-random]').forEach(el=>el.onclick=e=>{ const was=state.locks[e.target.dataset.random]; state.locks[e.target.dataset.random]=false; randomize(false); state.locks[e.target.dataset.random]=was; render(); });
  document.querySelectorAll('[data-copy]').forEach(el=>el.onclick=e=>copy(state.selected[e.target.dataset.copy]||''));
  updateCombined();
}
function updateCombined(){
  let block = sections.map(s => `${s.title}\n${state.selected[s.key]||''}`).join('\n\n---\n\n');
  if(state.antiCollage) block += '\n\n---\n\nNegative add-on\ncollage, photo collage, contact sheet, grid layout, split screen, multiple photos in one image, multiple panels, duplicate woman, repeated subject, multiple copies of the same woman, storyboard, four images, multiple frames, blank expression, looking away in every shot';
  document.getElementById('combinedOutput').textContent = block;
}
function label(k){ return k.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' '); }
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1300); }
async function copy(txt){ await navigator.clipboard.writeText(txt); toast('Copied'); }

document.getElementById('randomizeAll').onclick=()=>randomize(false);
document.getElementById('copyAll').onclick=()=>copy(document.getElementById('combinedOutput').textContent);
document.getElementById('copyCombined').onclick=()=>copy(document.getElementById('combinedOutput').textContent);
document.getElementById('saveState').onclick=save;
document.getElementById('logicMode').onchange=e=>{state.logicMode=e.target.value; randomize(false);};
document.getElementById('vibeSelect').onchange=e=>{state.vibe=e.target.value; randomize(false);};
document.getElementById('keepConsistency').onchange=e=>{state.keepConsistency=e.target.checked; randomize(false);};
document.getElementById('antiCollage').onchange=e=>{state.antiCollage=e.target.checked; updateCombined();};
document.getElementById('addPack').onclick=()=>{
  const p={ name: newPackName.value||'Custom style set', wardrobe:newWardrobe.value, environment:newEnvironment.value, lighting:newLighting.value, tags:newNotes.value.split(',').map(x=>x.trim()).filter(Boolean), vibe: state.vibe, custom:true };
  if(!p.wardrobe || !p.environment || !p.lighting){ toast('Fill wardrobe, environment, lighting'); return; }
  packs.push(p); save(); newPackName.value=newWardrobe.value=newEnvironment.value=newLighting.value=newNotes.value=''; randomize(false);
};

if(!Object.keys(state.selected||{}).length) randomize(true); else render();
