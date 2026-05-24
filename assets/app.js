const applications = [
  {company:'BrightData Labs', role:'BI Analyst', stage:'Interview', date:'May 21'},
  {company:'PropStack Systems', role:'Frontend Developer', stage:'Applied', date:'May 20'},
  {company:'Nexa AI', role:'AI Integration Dev', stage:'Screening', date:'May 19'},
  {company:'MarketGrid', role:'Data Analyst', stage:'Offer', date:'May 18'},
  {company:'CivicDash', role:'Full Stack Developer', stage:'Rejected', date:'May 16'},
  {company:'HomeAtlas', role:'React Developer', stage:'Interview', date:'May 15'}
];
function render(stage='All'){
 const list = stage==='All'?applications:applications.filter(a=>a.stage===stage);
 document.querySelector('#rows').innerHTML=list.map(a=>`<div class="row"><strong>${a.company}</strong><span>${a.role}</span><span>${a.date}</span><span class="badge">${a.stage}</span></div>`).join('')
}
document.querySelector('#stage')?.addEventListener('change',e=>render(e.target.value));render();
