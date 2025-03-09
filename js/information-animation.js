if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.error('GSAP или ScrollTrigger не загружены. Убедитесь, что они подключены через CDN.');
} else {
  gsap.registerPlugin(ScrollTrigger);
}

const informationTrigger = {
  start: 'top 50%',
  // end: 'top 10%',
  scrub: 1,      
  markers: false,   
};

class information {
  constructor(container) {
    this.container = container;
    this.trigger = this.container;
    this.width = window.innerWidth;
    this.informationImg = this.container.querySelectorAll('[data-information-img]');

    // Создаем timeline и добавляем анимации
    this.tl1 = gsap.timeline({
      scrollTrigger: {
        ...informationTrigger,
        trigger: this.trigger,
      },
    });

    this.initAnimation();
  }

  initAnimation() {
    if (this.width > 768) {
      this.tl1.set(this.informationImg[0], { y: "50%"})
      this.tl1.set(this.informationImg[1], { y: "-10%"})
      this.tl1.to(this.informationImg[0], {
        y: "0%",
        duration: 2, // Продолжительность анимации
      }, "0");
      this.tl1.to(this.informationImg[1], {
        y: "60%",
        duration: 2, // Продолжительность анимации
      }, "<");
    } else {
      return
    }
  }
}

class informationController {
  constructor() {
    this.instances = [];
    let datainformation = document.querySelectorAll('[data-information-parent]');
    if (datainformation.length) {
      datainformation.forEach((container) => {
        this.instances.push(new information(container));
      });
    }
  }
}

const informationInstance = new informationController();
window.informationController = informationInstance;