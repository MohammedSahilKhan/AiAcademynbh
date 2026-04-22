import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  providers: [AnimationService],
  template: `
    <!-- Hero Section with Gradient Background -->
    <section class="bg-gradient-to-br from-primary via-primary to-primary/80 py-16 md:py-24 px-4 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">Our Courses</h1>
        <p class="text-xl text-secondary animate-fade-in-down" style="animation-delay: 0.2s;">Explore our comprehensive course catalog</p>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="py-16 md:py-24 bg-primary px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Course Card 1 -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden hover:border-accent transition-smooth transform hover:scale-105 backdrop-blur-sm hover:bg-secondary/20">
            <div class="h-48 bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">📚</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-3">RSCIT</h3>
              <p class="text-secondary mb-4">
                Rajasthan State Certification in Information Technology. A comprehensive course covering basic computer skills, MS Office, and internet basics.
              </p>
              <div class="space-y-2 mb-6 text-sm text-secondary">
                <p><span class="text-accent font-semibold">Duration:</span> 3 Months</p>
                <p><span class="text-accent font-semibold">Level:</span> Beginner</p>
                <p><span class="text-accent font-semibold">Certificate:</span> State Recognized</p>
              </div>
              <a
                href="tel:7734922886"
                class="block w-full bg-accent text-primary py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-smooth transform hover:scale-105"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <!-- Course Card 2 -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden hover:border-accent transition-smooth transform hover:scale-105 backdrop-blur-sm hover:bg-secondary/20">
            <div class="h-48 bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">💼</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-3">Tally</h3>
              <p class="text-secondary mb-4">
                Master accounting software Tally ERP. Learn bookkeeping, GST compliance, and financial management with hands-on practice.
              </p>
              <div class="space-y-2 mb-6 text-sm text-secondary">
                <p><span class="text-accent font-semibold">Duration:</span> 2 Months</p>
                <p><span class="text-accent font-semibold">Level:</span> Beginner to Intermediate</p>
                <p><span class="text-accent font-semibold">Certificate:</span> Recognized</p>
              </div>
              <a
                href="tel:7734922886"
                class="block w-full bg-accent text-primary py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-smooth transform hover:scale-105"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <!-- Course Card 3 -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden hover:border-accent transition-smooth transform hover:scale-105 backdrop-blur-sm hover:bg-secondary/20">
            <div class="h-48 bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">💻</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-3">Basic Computer</h3>
              <p class="text-secondary mb-4">
                Perfect for absolute beginners. Learn computer fundamentals, Windows OS, keyboard shortcuts, and basic troubleshooting.
              </p>
              <div class="space-y-2 mb-6 text-sm text-secondary">
                <p><span class="text-accent font-semibold">Duration:</span> 1 Month</p>
                <p><span class="text-accent font-semibold">Level:</span> Beginner</p>
                <p><span class="text-accent font-semibold">Certificate:</span> Yes</p>
              </div>
              <a
                href="tel:7734922886"
                class="block w-full bg-accent text-primary py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-smooth transform hover:scale-105"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <!-- Course Card 4 -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden hover:border-accent transition-smooth transform hover:scale-105 backdrop-blur-sm hover:bg-secondary/20">
            <div class="h-48 bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">🤖</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-3">AI & Automation</h3>
              <p class="text-secondary mb-4">
                Explore the future of technology. Learn AI fundamentals, automation tools, and practical applications in modern business.
              </p>
              <div class="space-y-2 mb-6 text-sm text-secondary">
                <p><span class="text-accent font-semibold">Duration:</span> 4 Months</p>
                <p><span class="text-accent font-semibold">Level:</span> Intermediate</p>
                <p><span class="text-accent font-semibold">Certificate:</span> Yes</p>
              </div>
              <a
                href="tel:7734922886"
                class="block w-full bg-accent text-primary py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-smooth transform hover:scale-105"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <!-- Course Card 5 -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden hover:border-accent transition-smooth transform hover:scale-105 backdrop-blur-sm hover:bg-secondary/20">
            <div class="h-48 bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">📊</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-3">Advanced Excel</h3>
              <p class="text-secondary mb-4">
                Become an Excel expert. Learn formulas, pivot tables, data analysis, and automation techniques for business professionals.
              </p>
              <div class="space-y-2 mb-6 text-sm text-secondary">
                <p><span class="text-accent font-semibold">Duration:</span> 6 Weeks</p>
                <p><span class="text-accent font-semibold">Level:</span> Intermediate</p>
                <p><span class="text-accent font-semibold">Certificate:</span> Yes</p>
              </div>
              <a
                href="tel:7734922886"
                class="block w-full bg-accent text-primary py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-smooth transform hover:scale-105"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <!-- Course Card 6 -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden hover:border-accent transition-smooth transform hover:scale-105 backdrop-blur-sm hover:bg-secondary/20">
            <div class="h-48 bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">🌐</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-3">Web Basics</h3>
              <p class="text-secondary mb-4">
                Introduction to web development. Learn HTML, CSS, and basic web design principles to create your first website.
              </p>
              <div class="space-y-2 mb-6 text-sm text-secondary">
                <p><span class="text-accent font-semibold">Duration:</span> 2 Months</p>
                <p><span class="text-accent font-semibold">Level:</span> Beginner</p>
                <p><span class="text-accent font-semibold">Certificate:</span> Yes</p>
              </div>
              <a
                href="tel:7734922886"
                class="block w-full bg-accent text-primary py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-smooth transform hover:scale-105"
              >
                Enroll Now
              </a>
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
          Have Questions About Our Courses?
        </h2>
        <p class="text-xl text-secondary mb-12 animate-fade-in-up" style="animation-delay: 0.2s;">
          Contact us today for detailed information and enrollment.
        </p>
        <a
          href="https://wa.me/917734922886?text=Hi%20AI%20Academy%20Team,%20I%20have%20questions%20about%20your%20courses."
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
export class CoursesComponent implements OnInit, OnDestroy {
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
