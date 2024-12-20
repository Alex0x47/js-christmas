declare module "jschristmas" {
  interface SnowStormOptions {
      onlyOnChristmasDay?: boolean;
      color?: string;
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
