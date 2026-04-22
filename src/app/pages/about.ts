import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section with Gradient Background -->
    <section class="bg-gradient-to-br from-primary via-primary to-primary/80 py-16 md:py-24 px-4 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">About AI Academy</h1>
        <p class="text-xl text-secondary animate-fade-in-down" style="animation-delay: 0.2s;">Transforming Lives Through Education</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 md:py-24 bg-primary px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-4xl font-bold text-white mb-6 animate-fade-in-down">Our Mission</h2>
          <p class="text-2xl text-accent font-semibold italic animate-fade-in-up" style="animation-delay: 0.2s;">
            "To Build Future for Better Growth"
          </p>
        </div>

        <p class="text-lg text-secondary leading-relaxed mb-8 scroll-animate">
          At AI Academy, we are dedicated to empowering students with practical tech skills and industry knowledge. Our comprehensive courses are designed to bridge the gap between academic learning and real-world application, ensuring that every student gains practical experience and professional certifications.
        </p>

        <p class="text-lg text-secondary leading-relaxed scroll-animate" style="animation-delay: 0.1s;">
          We believe in personalized attention, hands-on training, and making quality education accessible to everyone. Whether you're a complete beginner or looking to upskill, AI Academy has the right course for you.
        </p>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="py-16 md:py-24 bg-secondary/5 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-4xl font-bold text-white mb-2 animate-fade-in-down">Meet Our Founder</h2>
          <p class="text-secondary animate-fade-in-down" style="animation-delay: 0.1s;">Leading the way in tech education</p>
        </div>

        <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-8 md:p-12 backdrop-blur-sm hover:bg-secondary/20 transition-smooth">
          <div class="text-center mb-8">
            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-accent/40 to-secondary/40 mx-auto flex items-center justify-center mb-6">
              <span class="text-6xl">👨‍💼</span>
            </div>
            <h3 class="text-3xl font-bold text-white mb-2">Sahil Yusufzai</h3>
            <p class="text-accent text-xl font-semibold">Co-Founder</p>
          </div>

          <div class="space-y-6">
            <!-- Qualifications -->
            <div>
              <h4 class="text-xl font-bold text-accent mb-3">Qualifications</h4>
              <ul class="space-y-2 text-secondary">
                <li class="flex items-center gap-3">
                  <span class="text-accent">✓</span>
                  <span>Master of Computer Applications (MCA)</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-accent">✓</span>
                  <span>Bachelor of Computer Applications (BCA)</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="text-accent">✓</span>
                  <span>Certified Ethical Hacking (CEH)</span>
                </li>
              </ul>
            </div>

            <!-- Experience -->
            <div>
              <h4 class="text-xl font-bold text-accent mb-3">Experience</h4>
              <p class="text-secondary">
                With extensive expertise in computer applications, cybersecurity, and IT education, Sahil has dedicated his career to making quality tech education accessible to everyone. His passion for mentoring and innovative teaching methods has helped hundreds of students achieve their career goals.
              </p>
            </div>

            <!-- Vision -->
            <div>
              <h4 class="text-xl font-bold text-accent mb-3">Vision</h4>
              <p class="text-secondary">
                To create a future where everyone has access to quality tech education and can build a successful career in the technology industry. Sahil believes in the power of practical training and personalized guidance to transform lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-16 md:py-24 bg-primary px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-4xl font-bold text-white mb-2 animate-fade-in-down">Get In Touch</h2>
          <p class="text-secondary animate-fade-in-down" style="animation-delay: 0.1s;">Connect with us for courses and inquiries</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Address Card -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-8 backdrop-blur-sm hover:bg-secondary/20 transition-smooth hover:scale-105">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="text-2xl font-bold text-white mb-4">Our Location</h3>
            <p class="text-secondary mb-4">
              AI Academy<br />
              Ishakabad, Nimbahera<br />
              Chittorgarh – 312601<br />
              Rajasthan, India
            </p>
            <a
              href="https://maps.google.com/?q=AI+Academy+Chittorgarh"
              target="_blank"
              class="text-accent hover:text-yellow-300 font-semibold transition"
            >
              View on Google Maps →
            </a>
          </div>

          <!-- Contact Card -->
          <div class="scroll-animate bg-secondary/10 border border-secondary/30 rounded-xl p-8 backdrop-blur-sm hover:bg-secondary/20 transition-smooth hover:scale-105" style="animation-delay: 0.1s;">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-2xl font-bold text-white mb-4">Contact Info</h3>
            <p class="text-secondary mb-6">
              <span class="font-semibold">Phone:</span><br />
              <a href="tel:7734922886" class="text-accent hover:text-yellow-300 transition">
                7734922886
              </a>
            </p>
            <p class="text-secondary">
              <span class="font-semibold">Hours:</span><br />
              Mon - Fri: 9:00 AM - 6:00 PM<br />
              Sat: 10:00 AM - 4:00 PM<br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 md:py-24 bg-secondary/5 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-4xl font-bold text-white mb-2 animate-fade-in-down">Our Core Values</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="scroll-animate text-center p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/10 transition-smooth">
            <div class="text-5xl mb-4 animate-float">💡</div>
            <h3 class="text-xl font-bold text-white mb-3">Innovation</h3>
            <p class="text-secondary">
              We stay updated with the latest technologies and teaching methodologies.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="scroll-animate text-center p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/10 transition-smooth" style="animation-delay: 0.1s;">
            <div class="text-5xl mb-4 animate-float" style="animation-delay: 0.5s;">🤝</div>
            <h3 class="text-xl font-bold text-white mb-3">Integrity</h3>
            <p class="text-secondary">
              We believe in transparent and ethical practices in everything we do.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="scroll-animate text-center p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/10 transition-smooth" style="animation-delay: 0.2s;">
            <div class="text-5xl mb-4 animate-float" style="animation-delay: 1s;">🌟</div>
            <h3 class="text-xl font-bold text-white mb-3">Excellence</h3>
            <p class="text-secondary">
              We strive for excellence in every course and student interaction.
            </p>
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
          Ready to Start Your Learning Journey?
        </h2>
        <p class="text-xl text-secondary mb-12 animate-fade-in-up" style="animation-delay: 0.2s;">
          Contact us today and take the first step towards a brighter future.
        </p>
        <a
          href="https://wa.me/917734922886?text=Hi%20Sahil,%20I'm%20interested%20in%20learning%20more%20about%20AI%20Academy."
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
export class AboutComponent implements OnInit, OnDestroy {
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
