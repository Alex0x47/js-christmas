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
    onlyOnChristmasDay?: boolean;
    pattern?: string;
    colors?: string[];
    size?: string;
    blinkSpeed?: number;
    spacing?: number;
  }

  export default class JSChristmas {
      constructor();
      snowStorm(options?: SnowStormOptions): void;
      christmasLights(options?: ChristmasLightsOptions): void;
  }
}
