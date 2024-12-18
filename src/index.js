class JSChristmas {
  constructor() {
      console.log("JSChristmas initialized!");
  }

  snowStorm(options = {}) {
      const { onlyOnChristmasDay = false } = options;
      const today = new Date();
      const isChristmasDay = today.getMonth() === 11 && today.getDate() === 25;

      if (onlyOnChristmasDay && !isChristmasDay) {
          console.log("It's not Christmas Day!");
          return;
      }

      console.log("Let it snow! 🎄");
  }
}

export default JSChristmas;
