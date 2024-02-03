export const projects = [
  {
    name: 'Main Project',
    address: '38507 Kihn Mountains, New York',
    kwcSize: 7000,
    state: 'NY',
    utility: 'NYSEG',
    type: 'NEM',
    subscription: {
      current: 111,
      diff: 5,
    },
    allocation: {
      current: 100,
      diff: 5,
    },
    kwhProduction: 9975000,
    revenue: {
      current: 230000,
      diffAmount: 20450,
      diff: 5,
    },
    ar: {
      current: 20400,
      diffAmount: 2450,
      diff: -5,
    },
    creditRate: 0.0877,
    churn: {
      current: 9,
      diff: 1,
    },
  },
  {
    name: 'Lansing 532',
    address: '38507 Kihn Mountains, Miami',
    kwcSize: 5100,
    state: 'MI',
    utility: 'NYSEG',
    type: 'NEM',
    subscription: {
      current: 24,
      diff: -2,
    },
    allocation: {
      current: 19,
      diff: -6,
    },
    kwhProduction: 1000000,
    revenue: {
      current: 420750,
      diffAmount: -2150,
      diff: -1,
    },
    ar: {
      current: 40750,
      diffAmount: -150,
      diff: 1,
    },
    creditRate: 0.0134,
    churn: {
      current: 4,
      diff: 7,
    },
  },
];
