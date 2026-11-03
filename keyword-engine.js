/* Deterministic phrase scoring. No AI, network, or personal-data logging. */
(function(scope){
 function normalize(text){return String(text).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim()}
 function match(text,rules){const q=' '+normalize(text)+' ';return rules.map(rule=>{const matched=Object.entries(rule.terms).filter(([term])=>{if(term==='is'&&!q.includes(' lexus is ')&&!/\bIS\b/.test(String(text)))return false;return q.includes(' '+normalize(term)+' ')});return {department:rule.department,score:matched.reduce((sum,[,weight])=>sum+weight,0),keywords:matched.map(([term])=>term),response:rule.response}}).filter(r=>r.score>0).sort((a,b)=>b.score-a.score)}
 const engine={normalize,match};if(typeof module!=='undefined'&&module.exports)module.exports=engine;else scope.DarkmodeKeywords=engine;
})(typeof window!=='undefined'?window:globalThis);
