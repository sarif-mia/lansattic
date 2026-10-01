if (!customElements.get('lansattic-announcements')) {
  customElements.define('lansattic-announcements', class extends HTMLElement {
    connectedCallback() {
      this.abort = new AbortController();
      const on = (el, event, fn) => el.addEventListener(event, fn, {signal: this.abort.signal});
      this.slides = [...this.querySelectorAll('.la-slide')]; this.index = 0;
      this.motion = matchMedia('(prefers-reduced-motion: reduce)');
      this.paused = this.dataset.autoplay !== 'true' || this.motion.matches;
      this.show = i => { this.index = (i + this.slides.length) % this.slides.length; this.slides.forEach((s,n) => s.hidden = n !== this.index); };
      this.start = () => { clearInterval(this.timer); if (!this.paused && !this.hovered && !this.contains(document.activeElement) && !document.hidden && this.slides.length > 1) this.timer = setInterval(() => this.show(this.index+1), Number(this.dataset.speed) || 3000); };
      on(this,'mouseenter',()=>{this.hovered=true;this.start();});on(this,'mouseleave',()=>{this.hovered=false;this.start();});
      on(this,'focusin',()=>this.start());on(this,'focusout',()=>setTimeout(()=>this.isConnected && this.start(),0));
      on(document,'visibilitychange',()=>this.start());
      on(this.motion,'change',()=>{this.paused=this.motion.matches || this.dataset.autoplay !== 'true';this.start();});
      on(document,'shopify:block:select',e=>{const i=this.slides.findIndex(s=>s===e.target || s.contains(e.target));if(i>=0){this.paused=true;this.show(i);this.start();}});
      let touchX;on(this,'touchstart',e=>{touchX=e.touches[0].clientX;});on(this,'touchend',e=>{const delta=e.changedTouches[0].clientX-touchX;if(Math.abs(delta)>40){this.show(this.index+(delta<0?1:-1));this.start();}});
      this.show(0);this.start();
    }
    disconnectedCallback(){clearInterval(this.timer);this.abort?.abort();}
  });
}
