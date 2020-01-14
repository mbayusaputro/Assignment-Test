const transit: Array<object> = [
  {
    name: 'Direct',
    alias: 'direct',
    active: true,
  },
  {
    name: '1 Transit',
    alias: '1transit',
    active: false,
  },
  {
    name: '2+ Transit',
    alias: '2transit',
    active: false,
  },
];

const airport: Array<object> = [
  {
    name: 'Balikpapan',
    alias: 'balikpapan',
    active: true,
  },
  {
    name: 'Jakarta',
    alias: 'jakarta',
    active: false,
  },
  {
    name: 'Makassar',
    alias: 'makassar',
    active: false,
  },
  {
    name: 'Medan',
    alias: 'medan',
    active: false,
  },
];

const facility: Array<object> = [
  {
    name: 'Baggage',
    alias: 'baggage',
    active: true,
  },
  {
    name: 'Wi-Fi',
    alias: 'wifi',
    active: false,
  },
  {
    name: 'Meals',
    alias: 'meals',
    active: false,
  },
  {
    name: 'Hedon',
    alias: 'hedon',
    active: false,
  },
];

const airline: Array<object> = [
  {
    name: 'Garuda Indonesia',
    alias: 'garuda',
    active: true,
  },
  {
    name: 'Citilink',
    alias: 'citilink',
    active: false,
  },
  {
    name: 'Sriwijaya Air',
    alias: 'sriwijaya',
    active: false,
  },
  {
    name: 'Lion Air',
    alias: 'lion',
    active: false,
  },
];

const dept_time: Array<object> = [
  {
    name: '00:00 - 06:00',
    alias: '0',
    active: true,
  },
  {
    name: '06:00 - 12:00',
    alias: '6',
    active: false,
  },
  {
    name: '12:00 - 18:00',
    alias: '12',
    active: false,
  },
  {
    name: '18:00 - 24:00',
    alias: '18',
    active: false,
  },
];

const arri_time: Array<object> = [
  {
    name: '00:00 - 06:00',
    alias: '0',
    active: true,
  },
  {
    name: '06:00 - 12:00',
    alias: '6',
    active: false,
  },
  {
    name: '12:00 - 18:00',
    alias: '12',
    active: false,
  },
  {
    name: '18:00 - 24:00',
    alias: '18',
    active: false,
  },
];
export {transit, airport, airline, dept_time, arri_time, facility};
