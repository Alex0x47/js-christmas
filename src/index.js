class JSChristmas {
  constructor() {
    console.log("js-christmas - developed by https://gitquest.dev/player/Alex0x47")
  }

  snowStorm(options = {}) {
    const {
      onlyOnChristmasDay = false,
      maxSnowflakes = 200,
      particlesPerThousandPixels = 0.1,
      fallSpeed = 1.25,
      pauseWhenNotActive = false,
      stopAfter = null
    } = options;

    const today = new Date();
    const isChristmasDay = today.getMonth() === 11 && today.getDate() === 25;

    if (onlyOnChristmasDay && !isChristmasDay) {
      console.log("It's not Christmas Day!");
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

  christmasLights(options = {}) {
    const {
      pattern = 'classic',
      colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff69b4'],
      size = 'medium',
      position = 'top',
      blinkSpeed = 1,
      spacing = 30
    } = options;

    // Create container for the string and lights
    const lightsContainer = document.createElement('div');
    lightsContainer.classList.add('christmas-lights-container');
    lightsContainer.style.position = 'fixed';
    lightsContainer.style.zIndex = '99998';

    // Position the container
    switch(position) {
      case 'top':
        lightsContainer.style.top = '-15px';
        lightsContainer.style.left = '0';
        lightsContainer.style.right = '0';
        break;
      case 'bottom':
        lightsContainer.style.bottom = '-15px';
        lightsContainer.style.left = '0';
        lightsContainer.style.right = '0';
        break;
      case 'left':
        lightsContainer.style.top = '0';
        lightsContainer.style.bottom = '0';
        lightsContainer.style.left = '0';
        lightsContainer.style.flexDirection = 'column';
        break;
      case 'right':
        lightsContainer.style.top = '0';
        lightsContainer.style.bottom = '0';
        lightsContainer.style.right = '0';
        lightsContainer.style.flexDirection = 'column';
        break;
      case 'all':
        return this._createFrameLights(options);
    }

    // Create the wire
    const wire = document.createElement('div');
    wire.classList.add('christmas-wire');
    lightsContainer.appendChild(wire);

    // Calculate number of lights
    const screenWidth = window.innerWidth;
    const numberOfLights = Math.floor(screenWidth / spacing);

    // Create lights
    for (let i = 0; i < numberOfLights; i++) {
      const lightWrapper = document.createElement('div');
      lightWrapper.classList.add('light-wrapper');
      
      const light = document.createElement('div');
      light.classList.add('christmas-light');
      light.style.backgroundColor = colors[i % colors.length];
      
      // Set size based on option
      const lightSize = this._getLightSize(size);
      light.style.width = lightSize;
      light.style.height = lightSize;
      
      // Add animation delay
      light.style.animationDelay = `${(i * 0.1) / blinkSpeed}s`;

      lightWrapper.appendChild(light);
      wire.appendChild(lightWrapper);
    }

    document.body.appendChild(lightsContainer);
    this._addEnhancedLightStyles(pattern, blinkSpeed);
  }

  _getLightSize(size) {
    switch(size) {
      case 'small': return '12px';
      case 'medium': return '15px';
      case 'large': return '20px';
      default: return '15px';
    }
  }

  _createFrameLights(options) {
    // Create lights for all sides
    this.christmasLights({ ...options, position: 'top' });
    this.christmasLights({ ...options, position: 'bottom' });
    this.christmasLights({ ...options, position: 'left' });
    this.christmasLights({ ...options, position: 'right' });
  }

  _addEnhancedLightStyles(pattern, blinkSpeed) {
    const style = document.createElement('style');
    style.textContent = `
      .christmas-lights-container {
        pointer-events: none;
      }

      .christmas-wire {
        position: relative;
        display: flex;
        justify-content: space-between;
        background-color: #222;
        height: 2px;
        margin: 15px;
      }

      .light-wrapper {
        position: relative;
        width: 2px;
        height: 20px;
        background-color: #222;
      }

      .christmas-light {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        animation: lightGlow ${1.5 / blinkSpeed}s ease-in-out infinite;
      }

      .christmas-light::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        background-color: #444;
        border-radius: 2px;
      }

      .christmas-light::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: 
          0 0 5px currentColor,
          0 0 10px currentColor,
          0 0 15px currentColor,
          0 0 20px currentColor;
        animation: lightFlare ${2 / blinkSpeed}s ease-in-out infinite;
        opacity: 0.8;
      }

      @keyframes lightGlow {
        0%, 100% { transform: translateX(-50%) scale(1); }
        50% { transform: translateX(-50%) scale(0.88); }
      }

      @keyframes lightFlare {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
  }
}

export default JSChristmas;
