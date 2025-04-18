const fs = require('fs');
const jsc = require('jsverify');

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

var result = hasCycle(testGraph1, testGraph2);
jsc.assert(JSON.stringify(result) == JSON.stringify(true));
