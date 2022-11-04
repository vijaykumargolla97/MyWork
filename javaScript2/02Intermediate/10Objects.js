var iphone = {
    brand: "apple Phone",
    model: "iphone 14",
    Year: 2022,
    lamched: true,
    premiumModel: "best very time",
    logo: "bited apple",
    SIM: 1,
    touchscreen: "yes",
};
console.log(iphone);
//  brand: 'apple Phone',
//   model: 'iphone 14',
//   Year: 2022,
//   lamched: true,
//   premiumModel: 'best very time',
//   logo: 'bited apple',
//   SIM: 1,
//   touchscreen: 'yes'

console.log(iphone.model);
// console.log(iphone.model);
// result is 'iphone 14'

iphone.Year = "sep" + 2022;
console.log(iphone.Year);
// result is sep2022

console.table(iphone);
//  using console.table you will get table
// ┌──────────────┬──────────────────┐
// │   (index)    │      Values      │
// ├──────────────┼──────────────────┤
// │    brand     │  'apple Phone'   │
// │    model     │   'iphone 14'    │
// │     Year     │    'sep2022'     │
// │   lamched    │       true       │
// │ premiumModel │ 'best very time' │
// │     logo     │  'bited apple'   │
// │     SIM      │        1         │
// │ touchscreen  │      'yes'       │
// └──────────────┴──────────────────┘
