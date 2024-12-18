declare module "js-christmas" {
  interface SnowStormOptions {
      onlyOnChristmasDay?: boolean;
      maxSnowflakes?: number;
      particlesPerThousandPixels?: number;
      fallSpeed?: number;
      pauseWhenNotActive?: boolean;
      stopAfter?: number;
  }

  interface ChristmasLightsOptions {
    pattern?: string;
    colors?: string[];
    size?: string;
    position?: string;
    blinkSpeed?: number;
    spacing?: number;
  }

  export default class JSChristmas {
      constructor();
      snowStorm(options?: SnowStormOptions): void;
      christmasLights(options?: ChristmasLightsOptions): void;
  }
}
