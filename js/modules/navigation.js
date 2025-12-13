/* modules/navigation.js */
class Navigation {
  constructor() {
    this.nav = document.querySelector('.eco-nav');
    this.menuToggle = document.querySelector('.menu-toggle');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.menuClose = document.querySelector('.menu-close');
    
    this.init();
  }
  
  init() {
    this.addEventListeners();
    this.handleScroll();
    this.setupKeyboardNavigation();
  }
  
  addEventListeners() {
    // Menu toggle
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.toggleMobileMenu());
    }
    
    // Close menu
    if (this.menuClose) {
      this.menuClose.addEventListener('click', () => this.closeMobileMenu());
    }
    
    // Close menu on link click
    const mobileLinks = this.mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });
    
    // Close menu on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMobileMenu();
    });
    
    // Handle scroll
    window.addEventListener('scroll', () => this.handleScroll());
  }
  
  toggleMobileMenu() {
    const isActive = this.mobileMenu.classList.contains('active');
    
    if (isActive) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }
  
  openMobileMenu() {
    this.mobileMenu.classList.add('active');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  
  closeMobileMenu() {
    this.mobileMenu.classList.remove('active');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  handleScroll() {
    if (window.scrollY > 50) {
      this.nav.classList.add('scrolled');
    } else {
      this.nav.classList.remove('scrolled');
    }
  }
  
  setupKeyboardNavigation() {
    // Trap focus in mobile menu
    this.mobileMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusableElements = this.mobileMenu.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

// Export for use in mini.js
export default Navigation;
