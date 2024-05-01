import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CloudflareScriptService {

  constructor() { }

  loadScript() {
    if (!document.body) return;
    const js = "window['__CF$cv$params']={r:'86ed327f8c55d3fc',t:'MTcxMjE5MDcwNC43MDMwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='../../assets/cdn-cgi/challenge-platform/h/g/scripts/jsd/dc6b543c1346/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
    const script = document.createElement('script');
    script.innerHTML = js;
    document.body.appendChild(script);
   
  }
}
