if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.error('GSAP или ScrollTrigger не загружены. Убедитесь, что они подключены через CDN.');
} else {
  gsap.registerPlugin(ScrollTrigger);
}

const trusedTrigger = {
  start: 'top 50%',
  // end: 'top 10%',
  scrub: 1,      
  markers: false,   
};

class trused {
  constructor(container) {
    this.container = container;
    this.trigger = this.container;
    this.width = window.innerWidth;
    this.trusedImg = this.container.querySelectorAll('[data-trused-img]');

    // Создаем timeline и добавляем анимации
    this.tl1 = gsap.timeline({
      scrollTrigger: {
        ...trusedTrigger,
        trigger: this.trigger,
      },
    });

    this.initAnimation();
  }

  initAnimation() {
    if (this.width > 768) {
      this.tl1.set(this.trusedImg[0], { y: "-10%"})
      this.tl1.set(this.trusedImg[1], { y: "150%"})
      this.tl1.to(this.trusedImg[0], {
        y: "5%",
        duration: 4, // Продолжительность анимации
      }, "0");
      this.tl1.to(this.trusedImg[1], {
        y: "0%",
        duration: 4, // Продолжительность анимации
      }, "<");
    } else {
      return
    }
  }
}

class trusedController {
  constructor() {
    this.instances = [];
    let datatrused = document.querySelectorAll('[data-trused-parent]');
    if (datatrused.length) {
      datatrused.forEach((container) => {
        this.instances.push(new trused(container));
      });
    }
  }
}

const trusedInstance = new trusedController();
window.trusedController = trusedInstance;