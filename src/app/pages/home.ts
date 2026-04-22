import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section with Gradient Background -->
    <section class="min-h-screen relative bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center px-4 py-20 overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style="animation-delay: 1s;"></div>

      <div class="text-center max-w-2xl relative z-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fd4584bbc1b5045baa267f2ad3d77e04f%2Fb467b40f8edc4b45b4de6afa485efbef?format=webp&width=200&height=300"
          alt="AI Academy Logo"
          class="h-32 w-auto mx-auto mb-8 animate-float drop-shadow-2xl"
        />
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
          Learn Skills. Build Career.
        </h1>
        <p class="text-xl md:text-2xl text-secondary mb-12 font-light animate-fade-in-down" style="animation-delay: 0.2s;">
          RSCIT | Tally | AI Courses
        </p>

        <!-- CTA Buttons with Animation -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 0.4s;">
          <a
            routerLink="/courses"
            class="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-smooth transform hover:scale-110 shadow-lg btn-animated hover:shadow-2xl hover:shadow-accent/50"
          >
            Join Now
          </a>
          <a
            href="tel:7734922886"
            class="border-2 border-accent text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-primary transition-smooth transform hover:scale-110 btn-animated"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>

    <!-- Courses Preview Section -->
    <section class="py-16 md:py-24 bg-primary px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Popular Courses</h2>
          <p class="text-secondary text-lg">Choose from our carefully curated courses</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
          <!-- Course Card 1: RSCIT -->
          <div
            class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-smooth transform hover:scale-110 cursor-pointer group backdrop-blur-sm hover:bg-secondary/20"
          >
            <div class="text-5xl mb-4 group-hover:text-accent transition-smooth">📚</div>
            <h3 class="text-2xl font-bold text-white mb-3">RSCIT</h3>
            <p class="text-secondary mb-6">
              Rajasthan State Certification in Information Technology
            </p>
            <div class="flex justify-between items-center">
              <span class="text-accent font-semibold">3 Months</span>
              <a routerLink="/courses" class="text-accent hover:text-yellow-300 font-bold transition-smooth">→</a>
            </div>
          </div>

          <!-- Course Card 2: Tally -->
          <div
            class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-smooth transform hover:scale-110 cursor-pointer group backdrop-blur-sm hover:bg-secondary/20"
          >
            <div class="text-5xl mb-4 group-hover:text-accent transition-smooth">💼</div>
            <h3 class="text-2xl font-bold text-white mb-3">Tally</h3>
            <p class="text-secondary mb-6">
              Master accounting with Tally ERP software
            </p>
            <div class="flex justify-between items-center">
              <span class="text-accent font-semibold">2 Months</span>
              <a routerLink="/courses" class="text-accent hover:text-yellow-300 font-bold transition-smooth">→</a>
            </div>
          </div>

          <!-- Course Card 3: Basic -->
          <div
            class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-smooth transform hover:scale-110 cursor-pointer group backdrop-blur-sm hover:bg-secondary/20"
          >
            <div class="text-5xl mb-4 group-hover:text-accent transition-smooth">💻</div>
            <h3 class="text-2xl font-bold text-white mb-3">Basic Computer</h3>
            <p class="text-secondary mb-6">
              Fundamentals of computer operations and usage
            </p>
            <div class="flex justify-between items-center">
              <span class="text-accent font-semibold">1 Month</span>
              <a routerLink="/courses" class="text-accent hover:text-yellow-300 font-bold transition-smooth">→</a>
            </div>
          </div>

          <!-- Course Card 4: AI -->
          <div
            class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-smooth transform hover:scale-110 cursor-pointer group backdrop-blur-sm hover:bg-secondary/20"
          >
            <div class="text-5xl mb-4 group-hover:text-accent transition-smooth">🤖</div>
            <h3 class="text-2xl font-bold text-white mb-3">AI & Automation</h3>
            <p class="text-secondary mb-6">
              Learn artificial intelligence and automation basics
            </p>
            <div class="flex justify-between items-center">
              <span class="text-accent font-semibold">4 Months</span>
              <a routerLink="/courses" class="text-accent hover:text-yellow-300 font-bold transition-smooth">→</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 md:py-24 bg-secondary/5 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose AI Academy?</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="scroll-animate text-center p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/10 transition-smooth">
            <div class="text-6xl mb-6 inline-block animate-float">🎯</div>
            <h3 class="text-2xl font-bold text-white mb-3">Practical Training</h3>
            <p class="text-secondary">
              Hands-on learning with real-world projects and industry-standard tools
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="scroll-animate text-center p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/10 transition-smooth" style="animation-delay: 0.1s;">
            <div class="text-6xl mb-6 inline-block animate-float" style="animation-delay: 0.5s;">👥</div>
            <h3 class="text-2xl font-bold text-white mb-3">Beginner-Friendly</h3>
            <p class="text-secondary">
              No prior experience needed. Our expert instructors guide you from scratch
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="scroll-animate text-center p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/10 transition-smooth" style="animation-delay: 0.2s;">
            <div class="text-6xl mb-6 inline-block animate-float" style="animation-delay: 1s;">💎</div>
            <h3 class="text-2xl font-bold text-white mb-3">Personal Attention</h3>
            <p class="text-secondary">
              Small batch sizes ensure personalized guidance and quick doubt resolution
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section with Animated Background -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary via-primary to-secondary/10 px-4 relative overflow-hidden">
      <!-- Animated accent elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10 scroll-animate">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
          Ready to Transform Your Career?
        </h2>
        <p class="text-xl text-secondary mb-12 animate-fade-in-up" style="animation-delay: 0.2s;">
          Join hundreds of students who have successfully completed our courses and landed their dream jobs.
        </p>

        <a
          href="https://wa.me/917734922886?text=Hi%20AI%20Academy%20Team,%20I'm%20ready%20to%20enroll%20in%20a%20course."
          target="_blank"
          class="inline-block bg-accent text-primary px-12 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-smooth transform hover:scale-110 shadow-lg btn-animated hover:shadow-2xl hover:shadow-accent/50 animate-scale-in"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }
}
