import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private observer: IntersectionObserver | null = null;

  constructor(private ngZone: NgZone) {}

  initScrollAnimations(): void {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => {
              entry.target.classList.add('visible');
            });
            this.observer?.unobserve(entry.target);
          }
        });
      }, options);

      // Observe all scroll-animate elements
      document.querySelectorAll('.scroll-animate').forEach(el => {
        this.observer?.observe(el);
      });
    });
  }

  observeElement(element: HTMLElement): void {
    if (this.observer && element.classList.contains('scroll-animate')) {
      this.observer.observe(element);
    }
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
