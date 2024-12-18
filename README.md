# js-christmas 🎄

A lightweight JavaScript package to add Christmas effects to your website. Perfect for adding some holiday cheer to your web applications!

## Features
- ❄️ Snowstorm effect with customizable settings
- 💡 Christmas lights with multiple patterns and positions

## Installation

```bash
npm install js-christmas
```

## Usage

```javascript
import JSChristmas from 'js-christmas';

const jsChristmas = new JSChristmas();
jsChristmas.snowStorm();
jsChristmas.christmasLights();
```


## Options

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

Add twinkling Christmas lights to your page edges:


### Snowstorm

```javascript
christmas.christmasLights({
position: 'top',
colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'],
blinkSpeed: 1
});
```


### Lights Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `pattern` | string | 'classic' | Light animation pattern |
| `colors` | string[] | ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff69b4'] | Array of light colors |
| `size` | string | 'medium' | Size of lights ('small', 'medium', 'large') |
| `position` | string | 'top' | Position of lights ('top', 'bottom', 'left', 'right', 'all') |
| `blinkSpeed` | number | 1 | Speed of blinking animation |
| `spacing` | number | 30 | Space between lights in pixels |

## Examples

### Framing the Page with Lights

```javascript
christmas.christmasLights({
position: 'all',
colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'],
size: 'large',
blinkSpeed: 0.5,
spacing: 50
});
```
### Heavy Snow Effect

```javascript
christmas.snowStorm({
maxSnowflakes: 500,
fallSpeed: 2,
pauseWhenNotActive: true,
stopAfter: 10000 // Stop after 10 seconds
});
```

### Christmas Day Only

```javascript
christmas.snowStorm({
onlyOnChristmasDay: true,
maxSnowflakes: 100,
fallSpeed: 1,
pauseWhenNotActive: false,
stopAfter: 30000 // Stop after 30 seconds
});
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
The package is designed to be lightweight and performance-optimized:
- Automatic pause when tab is inactive (optional)
- Efficient DOM manipulation
- Smooth animations using CSS transitions
- Cleanup of unused elements

## License
ISC

## Author
[Alex0x47](https://gitquest.dev/player/Alex0x47)
