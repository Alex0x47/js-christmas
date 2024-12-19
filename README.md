# jschristmas 🎄

A lightweight JavaScript package to add Christmas effects to your website. Perfect for adding some holiday cheer to your web applications!

<img src="https://raw.githubusercontent.com/Alex0x47/js-christmas/refs/heads/main/assets/demo.gif" width="600px" />

## Features
- ❄️ Snowstorm effect with customizable settings
- More to come (maybe) 🤓

## Installation

```bash
npm install jschristmas
```

## Quick Start

```javascript
import JSChristmas from 'jschristmas';

const christmas = new JSChristmas();

// Add snow effect
christmas.snowStorm();
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
| `stopAfter` | number | null | Stop generating snow after X milliseconds |

## Examples

### Heavy Snow Effect
```javascript
christmas.snowStorm({
    maxSnowflakes: 450,
    fallSpeed: 1.7,
    particlesPerThousandPixels: 0.3
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
