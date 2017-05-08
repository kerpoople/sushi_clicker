import React from 'react';

//Upgrades and their values.

class StoreItems {
  constructor() {
    this.upgrades = [
       {
        title: "Nigiri",
        clicksRequired: [10, 100, 500, 5000, 20000, 50000, 150000, "Unavailable"],
        effect: "Every click is double",
        effect_multiply: 2,
        effect_ticker: 0,
        effect_bonus: 0,
        icon_active: "img/upgrade1.png",
        icon_inactive: "img/upgrade1_inactive.png",
      },

      {
        title: "Sashimi",
        clicksRequired: [50, 1000, 2000, 4000, 8000, 12000, "Unavailable"],
        effect: "10 extra clicks every second",
        effect_multiply: 0,
        effect_ticker: 10,
        effect_bonus: 0,
        icon_active: "img/sashimi_active.png",
        icon_inactive: "img/sashimi_inactive.png",
      },

      {
        title: "Miso",
        clicksRequired: [20000, 40000, 80000, 160000, "Unavailable"],
        effect: "100 extra clicks every second",
        effect_multiply: 0,
        effect_ticker: 100,
        effect_bonus: 0,
        icon_active: "img/miso_active.png",
        icon_inactive: "img/miso_inactive.png",
      },

      {
        title: "Fatty Tuna",
        clicksRequired: [5000, 10000, 20000, 40000, "Unavailable"],
        effect: "5000 click bonus",
        effect_multiply: 0,
        effect_ticker: 0,
        effect_bonus: 5000,
        icon_active: "img/fattytuna_active.png",
        icon_inactive: "img/fattytuna_inactive.png",
      },

      {
        title: "Ginger",
        clicksRequired: [150000, 300000, 600000, 1200000, "Unavailable"],
        effect: "1000 extra clicks every second",
        effect_multiply: 0,
        effect_ticker: 1000,
        effect_bonus: 0,
        icon_active: "img/ginger_active.png",
        icon_inactive: "img/ginger_inactive.png",
      },


    ];
  }
}

export default StoreItems;
