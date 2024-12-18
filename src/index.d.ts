declare module "js-christmas" {
  interface SnowStormOptions {
      onlyOnChristmasDay?: boolean;
      maxSnowflakes?: number;
      particlesPerThousandPixels?: number;
      fallSpeed?: number;
      pauseWhenNotActive?: boolean;
  }

  export default class JSChristmas {
      constructor();
      snowStorm(options?: SnowStormOptions): void;
  }
}
