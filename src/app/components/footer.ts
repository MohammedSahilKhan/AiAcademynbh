import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-primary border-t border-secondary/20 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- About -->
          <div>
            <h3 class="text-accent font-bold text-lg mb-4">AI Academy</h3>
            <p class="text-gray-300 text-sm">
              Building the future with quality tech education and hands-on training.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li><a routerLink="/" class="hover:text-accent transition">Home</a></li>
              <li><a routerLink="/courses" class="hover:text-accent transition">Courses</a></li>
              <li><a routerLink="/gallery" class="hover:text-accent transition">Gallery</a></li>
              <li><a routerLink="/about" class="hover:text-accent transition">About</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-semibold mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-accent">📞</span>
                <a href="tel:7734922886" class="hover:text-accent transition">7734922886</a>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent">📍</span>
                <span>AI Academy, Ishakabad, Nimbahera, Chittorgarh – 312601</span>
              </li>
            </ul>
          </div>

          <!-- Hours -->
          <div>
            <h4 class="text-white font-semibold mb-4">Hours</h4>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-secondary/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AI Academy. All rights reserved. | To Build Future for Better Growth</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
