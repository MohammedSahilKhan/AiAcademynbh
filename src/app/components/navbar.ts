import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="sticky top-0 z-50 bg-primary/95 border-b border-secondary/20 backdrop-blur-xl shadow-lg transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a
            routerLink="/"
            class="flex items-center gap-2 font-bold text-2xl text-white hover:text-accent transition-smooth transform hover:scale-105"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd4584bbc1b5045baa267f2ad3d77e04f%2Fb467b40f8edc4b45b4de6afa485efbef?format=webp&width=100&height=150"
              alt="AI Academy Logo"
              class="h-10 w-auto drop-shadow-lg"
            >
            <span class="hidden sm:inline bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">AI Academy</span>
          </a>

          <!-- Menu -->
          <div class="hidden md:flex gap-8">
            <a
              routerLink="/"
              routerLinkActive="text-accent"
              [routerLinkActiveOptions]="{ exact: true }"
              class="text-white hover:text-accent transition-smooth duration-300 relative group"
            >
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              routerLink="/courses"
              routerLinkActive="text-accent"
              class="text-white hover:text-accent transition-smooth duration-300 relative group"
            >
              Courses
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              routerLink="/gallery"
              routerLinkActive="text-accent"
              class="text-white hover:text-accent transition-smooth duration-300 relative group"
            >
              Gallery
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              routerLink="/about"
              routerLinkActive="text-accent"
              class="text-white hover:text-accent transition-smooth duration-300 relative group"
            >
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <!-- CTA Button -->
          <a
            href="https://wa.me/917734922886?text=Hi%20AI%20Academy%20Team,%20I'm%20interested%20in%20your%20courses."
            target="_blank"
            class="hidden sm:inline-block bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-smooth transform hover:scale-110 btn-animated shadow-lg hover:shadow-xl hover:shadow-accent/40"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {}
