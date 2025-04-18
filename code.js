function are_isomorphic(graph1, graph2) {
    // brute force method, not most efficient
    // check 1: same number of vertices?
    if (graph1.length != graph2.length) {return false;}     // check number of vertices
    // check 2: vertices of same degrees?
    var degreeArr1 = [];                                    // array to hold vertex degrees
    var degreeArr2 = [];
    for (var i = 0; i < graph1.length; i++) {               // going through each vertex in graph1
        var tmpSum = 0;                                     // counting degrees
        tmpSum = graph1[i].length;                          // v time
        degreeArr1.push(tmpSum);
    }
    for (var i = 0; i < graph2.length; i++) {               // going through each vertex in graph2
        var tmpSum = 0;                                     // counting degrees
        tmpSum = graph2[i].length;                          // v time
        degreeArr2.push(tmpSum);
    }
    degreeArr1.sort();
    degreeArr2.sort();
    for (var i = 0; i < graph1.length; i++) {               // checking if graphs have same vertex degrees
        if (degreeArr1[i] != degreeArr2[i]) {return false;} // v time
    }
    

    // check 3: is there a permutation of graph 1 that makes it equal to graph 2
    // v! time :(
    var indices = [];                               // create array from 0 to n-1
    for (var i = 0; i < graph1.length; i++) {       // this array will be what we generate permutations of 
        indices.push(i);                            // we will then apply those permutations to graph1 and see if any equal graph2
    }                                               // v time
    
    var permutations = getPermutations(indices);    // get all permutations, n! time

    for (var i = 0; i < permutations.length; i++) {                 // go through each permutation, v time
        var permuted = reorderMatrix(graph1, permutations[i]);      // reorder graph according to it
        if (JSON.stringify(permuted) == JSON.stringify(graph2)) {   // see if two graphs are equal, json for comparison
            return true;                                            // if equal, are isomorphic, return true
        }
    }
    return false;                                                   // else are not isomorphic, return false
}


function getPermutations(arr) {                     // generate array of all permutations of input, v! time
    if (arr.length <= 1) {return [arr];}            // if empty or only has one vertex, will only have that one permutation, return in array
    var perms = [];                                 // array to hold permutations
    for (var i = 0; i < arr.length; i++) {
      var rest = [...arr.slice(0, i), ...arr.slice(i + 1)];     // remove item from array at i
      for (var p of getPermutations(rest)) {        // recurisve call with smaller array, p is permutation
        perms.push([arr[i], ...p]);                 // push permutation to perms array, pushes element at i and whatever is in p
      }
    }
    return perms;                                   // return array of permutations
}

function reorderMatrix(matrix, permutation) {               // v x v = v^2 complexity
    var rows = permutation.map(i => matrix[i]);             // switches rows around in matrix according to permutation
    return rows.map(row => permutation.map(i => row[i]));   // switches around columns in matrix according to permutation
}
