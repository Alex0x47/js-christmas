declare module "js-christmas" {
  interface SnowStormOptions {
      onlyOnChristmasDay?: boolean;
      maxSnowflakes?: number;
      particlesPerThousandPixels?: number;
      fallSpeed?: number;
      stopAfter?: number;
  }
  
  export default class JSChristmas {
      constructor();
      snowStorm(options?: SnowStormOptions): void;
  }
}
