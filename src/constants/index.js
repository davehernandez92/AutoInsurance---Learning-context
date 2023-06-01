export const MAKES = [
    {id: 1, name: "Audi"},
    {id: 2, name: "Mazda"},
    {id: 3, name: "Ford"},
];
export const TYPES = [
    {id: 1, name: "Comprehensive"},
    {id: 2, name: "Full Plus"},
   
];

const YEARMAX = new Date().getFullYear() + 1;
export const YEARS = Array.from(
    new Array(20),
    (value, index) => YEARMAX - index
);