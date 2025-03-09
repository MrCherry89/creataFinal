if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.error('GSAP или ScrollTrigger не загружены. Убедитесь, что они подключены через CDN.');
} else {
  gsap.registerPlugin(ScrollTrigger);
}

const dayElement = document.querySelector('[data-screen-one-picture]') || null;

function runOnLargeScreens() {
  if (window.innerWidth > 1024) {
    if (dayElement) {
      const updateClipPath = (x, y) => {
        // Получаем позицию элемента относительно viewport
        const rect = dayElement.getBoundingClientRect();
        // Вычисляем координаты относительно элемента
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        // Применяем clipPath
        dayElement.style.clipPath = `circle(100px at ${relativeX}px ${relativeY}px)`;
      };
    
      // Обработчик движения мыши
      document.addEventListener('mousemove', (evt) => {
        updateClipPath(evt.clientX, evt.clientY);
      });
    
      // Обработчик движения на сенсорных устройствах
      document.addEventListener('touchmove', (evt) => {
        evt.preventDefault();
        const touch = evt.touches[0];
        updateClipPath(touch.clientX, touch.clientY);
      }, { passive: false });
    }
  }
}

runOnLargeScreens();
window.addEventListener('resize', runOnLargeScreens);



class firstScreen {
  constructor(container) {
    this.container = container;
    this.firstScreenLogo = this.container.querySelectorAll('[data-firstScreen-logo]');
    this.firstScreenLine = this.container.querySelectorAll('[data-firstScreen-line]');
    this.firstScreenLine2 = this.container.querySelectorAll('[data-firstScreen-line-2]');
    this.firstScreenCube = this.container.querySelectorAll('[data-screen-one-cube]');
    this.firstScreenText = this.container.querySelectorAll('[data-screen-one-text]');

    let tl1 = gsap.timeline({});
    tl1.set(this.firstScreenLogo, { y: "-105%" });
    tl1.set(this.firstScreenCube[0], { y: "-115%", rotate: "-0.5deg" });
    tl1.set(this.firstScreenCube[1], { y: "115%" });
    tl1.set(this.firstScreenLine, { height: "40vh" });
    tl1.set(this.firstScreenLine2, { height: "40vh" });
    tl1.set(this.firstScreenText, { autoAlpha: 0 });

    tl1.to(this.firstScreenLine, {
      height: "0",
      duration: 3,
      delay: 0,
    }, "0");
    tl1.to(this.firstScreenLine2, {
      height: "0",
      duration: 2.2,
      delay: 0,
    }, "0");
    tl1.to(this.firstScreenLogo, {
      y: "0",
      duration: 3,
      delay: 0,
    }, "<");
    tl1.to(this.firstScreenCube[0], {
      y: "0",
      rotate: 0,
      duration: 2,
      delay: 0,
    }, "<");
    tl1.to(this.firstScreenCube[1], {
      y: "0",
      duration: 3,
      delay: 0,
    }, "<");
    tl1.to(this.firstScreenText, {
      autoAlpha: 1,
      duration: 1,
      delay: 0,
    }, ">");
  }
}

class firstScreenController {
  constructor() {
    this.instances = [];
    let dataFirstScreen = document.querySelectorAll('[data-firstScreen]');
    if (dataFirstScreen.length) {
      dataFirstScreen.forEach((container) => {
        this.instances.push(new firstScreen(container));
      });
    }
  }
}

const firstScreenInstance = new firstScreenController();
window.firstScreenController = firstScreenInstance;