if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.error('GSAP или ScrollTrigger не загружены. Убедитесь, что они подключены через CDN.');
} else {
  gsap.registerPlugin(ScrollTrigger);
}

const starTrigger = {
  start: 'top top',
  scrub: 4,      
  markers: false,   
};

class star {
  constructor(container) {
    this.container = container;
    this.trigger = this.container;
    this.width = window.innerWidth;
    this.star = this.container.querySelector('[data-star]');
    this.starLine = this.container.querySelectorAll('[data-star-line]');

    // Создаем timeline и добавляем анимации
    this.tl1 = gsap.timeline({
      scrollTrigger: {
        ...starTrigger,
        trigger: this.trigger,
      },
    });

    this.initAnimation();
  }

  initAnimation() {
    if (this.width > 768) {
      // Анимация для десктопной версии
      this.tl1.to(this.star, {
        rotate: "230deg",
        duration: 1, // Продолжительность анимации
      }, "0");
    } else {
      // Анимация для мобильной версии
      this.tl1.to(this.star, {
        rotate: "230deg",
        duration: 1, // Продолжительность анимации
      }, "0");
    }
  }
}

class starController {
  constructor() {
    this.instances = [];
    let datastar = document.querySelectorAll('[data-star-parent]');
    if (datastar.length) {
      datastar.forEach((container) => {
        this.instances.push(new star(container));
      });
    }
  }
}

const starInstance = new starController();
window.starController = starInstance;