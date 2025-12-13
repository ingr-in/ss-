/* modules/calculator.js */
class EcoCalculator {
  constructor() {
    this.form = document.querySelector('.calc-form');
    this.resultValue = document.querySelector('.result-value');
    this.resultCard = document.querySelector('.result-card');
    
    this.init();
  }
  
  init() {
    if (this.form) {
      this.setupEventListeners();
      this.calculateInitial();
    }
  }
  
  setupEventListeners() {
    // Real-time calculation on input
    const inputs = this.form.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.debounceCalculate();
      });
      
      // Add visual feedback
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
      });
    });
    
    // Range input visual feedback
    const rangeInputs = this.form.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(range => {
      range.addEventListener('input', () => {
        this.updateRangeValue(range);
      });
      this.updateRangeValue(range); // Initial update
    });
    
    // Form reset
    const resetBtn = this.form.querySelector('.btn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.resetCalculator();
      });
    }
  }
  
  updateRangeValue(range) {
    const valueDisplay = range.nextElementSibling;
    if (valueDisplay && valueDisplay.classList.contains('range-value')) {
      valueDisplay.textContent = range.value + (range.dataset.unit || '');
    }
  }
  
  calculateInitial() {
    // Set initial calculation
    setTimeout(() => {
      this.performCalculation();
    }, 500);
  }
  
  debounceCalculate() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.performCalculation();
    }, 300);
  }
  
  performCalculation() {
    if (!this.form) return;
    
    // Get form values
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    this.resultCard.classList.add('calculating');
    
    // Simulate calculation delay
    setTimeout(() => {
      // Example calculation (replace with actual formula)
      const electricity = parseFloat(data.electricity || 0);
      const transport = parseFloat(data.transport || 0);
      const diet = parseFloat(data.diet || 1);
      const waste = parseFloat(data.waste || 0);
      
      // Simple carbon footprint calculation
      const carbonFootprint = (electricity * 0.5 + transport * 0.3 + waste * 0.2) * diet;
      const ecoScore = Math.max(0, Math.min(100, 100 - carbonFootprint * 10));
      
      // Update result
      this.updateResult(ecoScore);
      
      // Remove loading state
      this.resultCard.classList.remove('calculating');
    }, 600);
  }
  
  updateResult(score) {
    if (!this.resultValue) return;
    
    const currentScore = parseFloat(this.resultValue.textContent) || 0;
    const scoreDiff = score - currentScore;
    
    // Animate number change
    this.animateNumber(currentScore, score);
    
    // Add feedback class for animation
    this.resultValue.classList.add('updated');
    setTimeout(() => {
      this.resultValue.classList.remove('updated');
    }, 1000);
    
    // Update color based on score
    this.updateResultColor(score);
  }
  
  animateNumber(from, to) {
    const duration = 800;
    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = from + (to - from) * easeOutQuart;
      this.resultValue.textContent = Math.round(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }
  
  updateResultColor(score) {
    const colors = {
      good: '#10B981',    // Green
      medium: '#F59E0B',  // Yellow
      poor: '#EF4444'     // Red
    };
    
    let color;
    if (score >= 70) color = colors.good;
    else if (score >= 40) color = colors.medium;
    else color = colors.poor;
    
    this.resultValue.style.color = color;
  }
  
  resetCalculator() {
    this.form.reset();
    
    // Reset range values
    const rangeInputs = this.form.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(range => {
      this.updateRangeValue(range);
    });
    
    // Reset result
    this.resultValue.textContent = '0';
    this.resultValue.style.color = '';
    this.resultCard.classList.add('resetting');
    
    setTimeout(() => {
      this.resultCard.classList.remove('resetting');
    }, 500);
  }
}

// Export for use in mini.js
export default EcoCalculator;
