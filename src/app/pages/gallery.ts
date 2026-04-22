import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section with Gradient Background -->
    <section class="bg-gradient-to-br from-primary via-primary to-primary/80 py-16 md:py-24 px-4 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">Gallery</h1>
        <p class="text-xl text-secondary animate-fade-in-down" style="animation-delay: 0.2s;">Explore our classrooms, events, and student achievements</p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 md:py-24 bg-primary px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Gallery Item 1 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Classroom learning"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Classroom Learning</span>
            </div>
          </div>

          <!-- Gallery Item 2 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                alt="Computer lab"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Computer Lab</span>
            </div>
          </div>

          <!-- Gallery Item 3 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=400&fit=crop"
                alt="Student projects"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Student Projects</span>
            </div>
          </div>

          <!-- Gallery Item 4 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Training session"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Training Session</span>
            </div>
          </div>

          <!-- Gallery Item 5 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Team collaboration"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Team Collaboration</span>
            </div>
          </div>

          <!-- Gallery Item 6 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                alt="Certification event"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Certification Event</span>
            </div>
          </div>

          <!-- Gallery Item 7 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Expert instructors"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Expert Instructors</span>
            </div>
          </div>

          <!-- Gallery Item 8 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=400&fit=crop"
                alt="Success stories"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Success Stories</span>
            </div>
          </div>

          <!-- Gallery Item 9 -->
          <div class="scroll-animate relative overflow-hidden rounded-xl group cursor-pointer transform transition-smooth hover:scale-105">
            <div class="h-64 bg-gradient-to-br from-accent/40 to-secondary/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                alt="Workshops"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span class="text-white text-lg font-semibold">Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section with Animated Background -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary via-primary to-secondary/10 px-4 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10 scroll-animate">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
          Interested in Joining Our Community?
        </h2>
        <p class="text-xl text-secondary mb-12 animate-fade-in-up" style="animation-delay: 0.2s;">
          Be part of the AI Academy family and kickstart your career journey.
        </p>
        <a
          href="https://wa.me/917734922886?text=Hi%20AI%20Academy%20Team,%20I'm%20interested%20in%20learning%20more%20about%20your%20academy."
          target="_blank"
          class="inline-block bg-accent text-primary px-12 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-smooth transform hover:scale-110 shadow-lg btn-animated hover:shadow-2xl hover:shadow-accent/50 animate-scale-in"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class GalleryComponent implements OnInit, OnDestroy {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }
}
