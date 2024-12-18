# js-christmas 🎄

A lightweight JavaScript package to add Christmas effects to your website. Perfect for adding some holiday cheer to your web applications!

## Features
- ❄️ Snowstorm effect with customizable settings
- 💡 Christmas lights with multiple patterns and positions

## Installation

```bash
npm install js-christmas
```

## Quick Start

```javascript
import JSChristmas from 'js-christmas';

const christmas = new JSChristmas();

// Add snow effect
christmas.snowStorm();

// Add Christmas lights
christmas.christmasLights();
```

## Snow Effect ❄️

Add beautiful falling snowflakes to your website:

```javascript
christmas.snowStorm({
    maxSnowflakes: 200,
    fallSpeed: 1.25,
    stopAfter: 5000 // Stop after 5 seconds
});
```

### Snow Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `onlyOnChristmasDay` | boolean | false | Only show snow on December 25th |
| `maxSnowflakes` | number | 200 | Maximum number of snowflakes |
| `particlesPerThousandPixels` | number | 0.1 | Density of snowflakes |
| `fallSpeed` | number | 1.25 | Speed multiplier for falling snow |
| `pauseWhenNotActive` | boolean | false | Pause animation when tab is inactive |
| `stopAfter` | number | null | Stop generating snow after X milliseconds |

## Christmas Lights 💡

Add twinkling Christmas lights to your page:

```javascript
christmas.christmasLights({
    pattern: 'wave',
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'],
    blinkSpeed: 1
});
```

### Lights Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `pattern` | string | 'classic' | Animation pattern ('classic', 'wave', 'chase', 'twinkle', 'alternate') |
| `colors` | string[] | ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff69b4'] | Array of light colors |
| `size` | string | 'medium' | Size of lights ('small', 'medium', 'large') |
| `blinkSpeed` | number | 1 | Speed of blinking animation |
| `spacing` | number | 30 | Space between lights in pixels |

## Examples

### Twinkling Lights
```javascript
christmas.christmasLights({
    pattern: 'twinkle',
    colors: ['#ff0000', '#00ff00', '#ffffff'], // Red, green, and white
    size: 'large',
    blinkSpeed: 0.8
});
```

### Heavy Snow Effect
```javascript
christmas.snowStorm({
    maxSnowflakes: 300,
    fallSpeed: 1.5,
    particlesPerThousandPixels: 0.2
});
```

### Christmas Day Only
```javascript
christmas.snowStorm({
    onlyOnChristmasDay: true,
    maxSnowflakes: 250
});
```

## License
ISC

## Author
[Alex0x47](https://gitquest.dev/player/Alex0x47)
