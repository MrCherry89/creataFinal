// Проверяем, загружены ли GSAP и ScrollTrigger
if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.error('GSAP или ScrollTrigger не загружены. Убедитесь, что они подключены через CDN.');
} else {
  gsap.registerPlugin(ScrollTrigger);
}


class Footer {
  constructor(container) {
    this.container = container;
    this.footerLogo = this.container.querySelector('[data-footer-logo]');
    this.footerLine = this.container.querySelector('[data-footer-line]');
    this.footerLine2 = this.container.querySelector('[data-footer-line-2]');

    // Инициализация анимации при прокрутке
    this.initScrollTrigger();
  }

  initScrollTrigger() {
    gsap.timeline({
      scrollTrigger: {
        trigger: this.container,
        start: 'top 90%',
        once: true, // Анимация срабатывает только один раз
        //  markers: true,
      }
    })
      .set(this.footerLogo, { y: "-105%" })
      .set(this.footerLine, { height: "40vh" })
      .set(this.footerLine2, { height: "40vh" })
      .to(this.footerLine, {
        height: "0",
        duration: 3,
        delay: 0,
      }, "0")
      .to(this.footerLine2, {
        height: "0",
        duration: 2.2,
        delay: 0,
      }, "0")
      .to(this.footerLogo, {
        y: "0",
        duration: 3,
        delay: 0,
      }, "<");
  }
}

class FooterController {
  constructor() {
    this.instances = [];
    let isMobile = window.matchMedia('(max-width: 768px)').matches;
    window.addEventListener('resize', function () {
      isMobile = window.matchMedia('(max-width: 768px)').matches;
    }, true);
    if (!isMobile) {
      let dataFooter = document.querySelectorAll('[data-footer]');

      if (dataFooter.length) {
        dataFooter.forEach((container) => {
          this.instances.push(new Footer(container));
        });
      }
    } else {
      return;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new FooterController();
});

