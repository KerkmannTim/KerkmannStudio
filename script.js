
// Simple smooth-scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Minimal contact handler (mailto fallback)
window.submitContact = function(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get('name'); const email = fd.get('email'); const msg = fd.get('message');
  const mailto = `mailto:info@kerkmann.studio?subject=Projektanfrage%20${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nKontakt: ' + email)}`;
  document.getElementById('contact-status').textContent = 'Öffne E‑Mail‑Programm...';
  window.location.href = mailto;
  setTimeout(()=>{ document.getElementById('contact-status').textContent = 'Wenn kein Mailprogramm geöffnet wurde, sende an: info@kerkmann.studio'; }, 1200);
  return false;
}
