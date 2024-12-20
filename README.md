# jschristmas 🎄

A lightweight JavaScript package to add Christmas effects to your website. Perfect for adding some holiday cheer to your web applications!

<img src="https://raw.githubusercontent.com/Alex0x47/js-christmas/refs/heads/main/assets/demo.gif" width="600px" />

## Features
- ❄️ Snowstorm effect with customizable settings
- More to come (maybe) 🤓

## Installation

You can install the package using npm:

```bash
npm install jschristmas
```

Or you can download the script from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/jschristmas@0.0.8/dist/index.browser.min.js"></script>
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
| `color` | string | "white" | Color of the snowflakes, can be a hex code or a CSS color name |
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

### Christmas Day Only With Red Snowflakes
```javascript
christmas.snowStorm({
    onlyOnChristmasDay: true,
    maxSnowflakes: 250,
    color: "#fe4242"
});
```

## License
ISC

## Author
[Alex0x47](https://gitquest.dev/player/Alex0x47), creator of:
- [GitQuest: Commit & Conquer](https://gitquest.dev), the tournament for developers
- [StablePush](https://stablepush.dev), a CI/CD tool that checks your SEO and accessibility at every commit
- [Indie Dev Tools](https://indiedev.tools), a collection of tools for indie developers

##
<a href="https://indiedev.tools/tool/js-christmas-t_m4uyx6uyavap21ffpw" target="_blank"><img width="250" alt="Logo of the website Indie Dev Tools" src="https://indiedev.tools/featured_on_idt.png"/></a>