if (!customElements.get('lansattic-review-carousel')) {
  customElements.define('lansattic-review-carousel', class extends HTMLElement {
    connectedCallback() {
      this.track = this.querySelector('.eth-reviews');
      this.cards = [...this.querySelectorAll('.eth-review')];
      this.dots = [...this.querySelectorAll('.eth-dot')];
      if (!this.track || this.cards.length < 2) return;
      this.mobile = matchMedia('(max-width: 749px)');
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)');
      this.index = 0;
      this.events = new AbortController();
      const options = { signal: this.events.signal };
      this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.go(index), options));
      this.track.addEventListener('scroll', () => {
        const step = this.cards[1].offsetLeft - this.cards[0].offsetLeft;
        this.index = Math.max(0, Math.min(this.cards.length - 1, Math.round(this.track.scrollLeft / step)));
        this.dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === this.index)));
      }, options);
      this.track.addEventListener('pointerdown', () => this.stop(), options);
      this.track.addEventListener('pointerup', () => this.start(), options);
      this.track.addEventListener('pointercancel', () => this.start(), options);
      this.addEventListener('focusin', () => this.stop(), options);
      this.addEventListener('focusout', (event) => {
        if (!this.contains(event.relatedTarget)) this.start();
      }, options);
      this.mobile.addEventListener('change', () => {
        if (!this.mobile.matches) this.track.scrollTo({ left: 0, behavior: 'instant' });
        this.start();
      }, options);
      this.reduced.addEventListener('change', () => {
          this.start();
      }, options);
      document.addEventListener('visibilitychange', () => this.start(), options);
      this.observer = new IntersectionObserver(([entry]) => {
        this.visible = entry.intersectionRatio >= 0.25;
        this.start();
      }, { threshold: 0.25 });
      this.observer.observe(this);
      this.setAttribute('ready', '');
    }
    go(index) {
      const left = this.cards[index].offsetLeft - this.cards[0].offsetLeft;
      this.track.scrollTo({ left, behavior: this.reduced.matches ? 'instant' : 'smooth' });
    }
    start() {
      this.stop();
      if (!this.mobile.matches || !this.visible || this.reduced.matches || document.hidden) return;
      this.timer = setInterval(() => {
        if (!this.contains(document.activeElement)) this.go((this.index + 1) % this.cards.length);
      }, 3000);
    }
    stop() { clearInterval(this.timer); this.timer = null; }
    disconnectedCallback() {
      this.stop();
      this.events?.abort();
      this.observer?.disconnect();
    }
  });
}
