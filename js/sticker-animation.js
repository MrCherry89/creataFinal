if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.error('GSAP или ScrollTrigger не загружены. Убедитесь, что они подключены через CDN.');
} else {
  gsap.registerPlugin(ScrollTrigger);
}

const stickerTrigger = {
  start: 'top 50%',
  // end: 'top 10%',
  scrub: 1,      
  markers: false,   
};

class sticker {
  constructor(container) {
    this.container = container;
    this.trigger = this.container;
    this.width = window.innerWidth;
    this.stickerImg = this.container.querySelectorAll('[data-sticker-img]');

    // Создаем timeline и добавляем анимации
    this.tl1 = gsap.timeline({
      scrollTrigger: {
        ...stickerTrigger,
        trigger: this.trigger,
      },
    });

    this.initAnimation();
  }

  initAnimation() {
    if (this.width > 768) {
      this.tl1.set(this.stickerImg[0], { y: "-10%"})
      this.tl1.set(this.stickerImg[1], { left: "-50px"})
      this.tl1.set(this.stickerImg[3], { right: "-120px"})
      this.tl1.to(this.stickerImg[0], {
        y: "0%",
        duration: 4, // Продолжительность анимации
      }, "0");
      this.tl1.to(this.stickerImg[1], {
        left: "0px",
        duration: 4, // Продолжительность анимации
      }, "<");
      this.tl1.to(this.stickerImg[2], {
        right: "0px",
        duration: 4, // Продолжительность анимации
      }, "<");
    } else {
      return
    }
  }
}

class stickerController {
  constructor() {
    this.instances = [];
    let datasticker = document.querySelectorAll('[data-sticker-parent]');
    if (datasticker.length) {
      datasticker.forEach((container) => {
        this.instances.push(new sticker(container));
      });
    }
  }
}

const stickerInstance = new stickerController();
window.stickerController = stickerInstance;