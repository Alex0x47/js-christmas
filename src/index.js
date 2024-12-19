class JSChristmas {
  constructor() {
    console.log("Christmas Effects by https://github.com/Alex0x47/js-christmas")
  }

  snowStorm(options = {}) {
    const {
      onlyOnChristmasDay = false,
      maxSnowflakes = 200,
      particlesPerThousandPixels = 0.1,
      fallSpeed = 1.25,
      stopAfter = null
    } = options;

    const pauseWhenNotActive = false;
    const today = new Date();
    const isChristmasDay = today.getMonth() === 11 && today.getDate() === 25;

    if (onlyOnChristmasDay && !isChristmasDay) {
      return;
    }

    const snowContainer = this._createSnowContainer();
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;
    let hasStopped = false;

    // Reset the snowflake position and animation
    function resetSnowflake(snowflake) {
      const size = Math.random() * 5 + 1;
      const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
      const viewportHeight = window.innerHeight;

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * viewportWidth}px`;
      snowflake.style.top = `-${size}px`;

      const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.animationTimingFunction = "linear";
      snowflake.style.animationName = Math.random() < 0.5 ? "fall" : "diagonal-fall";

      setTimeout(() => {
        if (parseInt(snowflake.style.top, 10) < viewportHeight) {
          if (!hasStopped) {
            resetSnowflake(snowflake);
          }
        } else {
          snowflake.remove(); // Remove when it goes off the bottom edge
        }
      }, animationDuration * 1000);
    }

    // Create a new snowflake element
    function createSnowflake() {
      if (snowflakes.length < maxSnowflakes) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflakes.push(snowflake);
        snowContainer.appendChild(snowflake);
        resetSnowflake(snowflake);
      }
    }

    // Generate snowflakes periodically
    function generateSnowflakes() {
      const numberOfParticles = Math.ceil((window.innerWidth * window.innerHeight) / 1000) * particlesPerThousandPixels;
      const interval = 5000 / numberOfParticles;

      clearInterval(snowflakeInterval);
      snowflakeInterval = setInterval(() => {
        if (!stopAfter || (stopAfter && Date.now() < startTime + stopAfter)) {
          if (isTabActive && snowflakes.length < maxSnowflakes) {
            requestAnimationFrame(createSnowflake);
          }
        } else {
          hasStopped = true;
          clearInterval(snowflakeInterval);
        }
      }, interval);
    }

    // Handle visibility change to pause/resume snowflakes
    function handleVisibilityChange() {
      if (!pauseWhenNotActive) return;

      isTabActive = !document.hidden;
      if (isTabActive) {
        generateSnowflakes();
      } else {
        clearInterval(snowflakeInterval);
      }
    }

    // Dynamically add required styles
    this._addStyles();

    // Start snow generation
    const startTime = Date.now();
    generateSnowflakes();

    // Handle window resizing
    window.addEventListener("resize", () => {
      clearInterval(snowflakeInterval);
      setTimeout(generateSnowflakes, 1000);
    });

    // Handle visibility change (pause on tab switch)
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }

  // Private method to create the snow container
  _createSnowContainer() {
    const existingContainer = document.querySelector(".snow-container");
    if (existingContainer) return existingContainer;

    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow-container");
    document.body.appendChild(snowContainer);
    return snowContainer;
  }

  // Private method to add necessary styles
  _addStyles() {
    const style = document.createElement("style");
    style.textContent = `
          body, html {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
              width: 100vw;
              height: auto;
          }

          .snow-container {
              position: fixed;
              top: 0;
              left: 0;
              overflow: hidden;
              width: 100vw;
              height: 100vh;
              z-index: 99999;
              pointer-events: none;
          }

          .snowflake {
              position: absolute;
              background-color: white;
              border-radius: 50%;
              opacity: 0.8;
              pointer-events: none;
          }

          @keyframes fall {
              0% {
                  opacity: 0;
                  transform: translateY(0);
              }
              10% {
                  opacity: 1;
              }
              100% {
                  opacity: 0.5;
                  transform: translateY(100vh);
              }
          }

          @keyframes diagonal-fall {
              0% {
                  opacity: 0;
                  transform: translate(0, 0);
              }
              10% {
                  opacity: 1;
              }
              100% {
                  opacity: 0.25;
                  transform: translate(10vw, 100vh);
              }
          }
      `;
    document.head.appendChild(style);
  }
}

export default JSChristmas;
