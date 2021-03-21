# Case Change

> Convert String in  Object,Array or Plain String to  `lowercase`.

## Installation

```
npm install lower-case --save
```

## Usage

```js
import { Lower } from "lower-case";
```

#### [lowercase]

> Convert String in Object, Array or String variable to lowercase. Specific type of requirement can be addressed like Object Keys or Object values to be lowercased, Retrieve Object keys or values lowercased as array. Find below example for your best needs.

```js
console.log(Lower.isLowerCased("shahul B")); 
//OUTPUT: false

console.log(Lower.getStringLowerCased("jAckl")); 
//OUTPUT: jackl

console.log(Lower.getStringLowerCasedWithPos("SHAHUL HAMEED BUHARI", 4, 5)); 
// OUTPUT: SHAHuL HAMEED BUHARI

console.log(Lower.getObjectLowerCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
// OUTPUT: {"t":1,"u":{"k":["jko","opl"],"shahul":"piano","b":{"jill_jack":[{"banana":"jill_jack"},{"jill_jack":"apple"}]}},"family":["shahul","farook"]}

console.log(Lower.getObjectKeysLowercased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"t":1,"u":{"k":["JKO","opl"],"shahul":"PIANO","b":{"jill_jack":[{"banana":"JILL_JACK"},{"jill_jack":"APPLE"}]}},"family":["shahul","farook"]}

console.log(Lower.getObjectvaluesLowercased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["jko","opl"],"SHAHUL":"piano","B":{"JILL_JACK":[{"BANANA":"jill_jack"},{"JILL_JACK":"apple"}]}},"Family":["shahul","farook"]}

console.log(Lower.getKeysLowerCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:["t","u","k","shahul","b","jill_jack","banana","jill_jack","family"]

console.log(Lower.getValuesLowerCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:[1,"jko","opl","piano","jill_jack","apple","shahul","farook"]

console.log(Lower.getArrayLowercased([{ "Shahul": "hAmeed" }]));
//OUTPUT: [ { shahul: 'hameed' } ]

console.log(Lower.getArrValLowerCasedByIndex([{ "Shahul": "hAmeed" },{ ABU: 'FAZIL' } ], 0));
//OUTPUT: [ { shahul: 'hameed' }, { ABU: 'FAZIL' } ]

```

## License

MIT
