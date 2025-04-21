const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var testGraph1 = [  // 4 nodes, isomorphic to testGraph2
    [0,1,1,1],
    [1,0,0,1],
    [1,0,0,1],
    [1,1,1,0]
];

var testGraph2 = [  // 4 nodes, isomorphic to testGraph1
    [0,1,1,1],
    [1,0,1,1],
    [1,1,0,0],
    [1,1,0,0]
];

var testGraph3 = [ // 4 nodoes, isomorphic to testGraph4
    [0,0,0,1],
    [0,0,0,1],
    [0,0,0,1],
    [1,1,1,0]
];

var testGraph4 = [ // 4 nodes, isomorphic to testGraph3
    [0,1,0,0],
    [1,0,1,1],
    [0,1,0,0],
    [0,1,0,0]
]

var testGraph5 = [ // 3 nodes
    [0,0,1],
    [0,0,1],
    [1,1,0]
];

var testGraph6 = [ // 4 nodes, same degrees as testGraph1 and testGraph2 but NOT isomorphic
    [0,1,1,1],
    [1,0,1,1],
    [1,1,0,0],
    [1,0,0,1]
];

var result = are_isomorphic(testGraph1, testGraph2);
assert(JSON.stringify(result) == JSON.stringify(true));

var result = are_isomorphic(testGraph3, testGraph4);
assert(JSON.stringify(result) == JSON.stringify(true));

var result = are_isomorphic(testGraph1, testGraph4);
assert(JSON.stringify(result) == JSON.stringify(false));

var result = are_isomorphic(testGraph1, testGraph6);
assert(JSON.stringify(result) == JSON.stringify(false));

var result = are_isomorphic(testGraph2, testGraph5);
assert(JSON.stringify(result) == JSON.stringify(false));
