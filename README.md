# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.
 
I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action. 

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst case is $\Theta(v^2 * v!)$.

I chose to use undirected, unweighted graphs represented by adjacency matrices. I am using a brute force method to test for isomorphism. 

The function has two sets of nested for loops followed by another for loop that compares the degrees of each graph to each other. Each loop runs v times which gives the total time of all five loops (two are nested) of $2v^2 + v$. The two sorting methods that are called on I believe will add $2vlogv$ time. 

Next an array of indices is created with takes v time. Then a function that generates all the permutations of that array is called which takes v! time, which must be multiplied by another v as it adds each permutation to an array. Thus the total time of this section is $v*v!$.

Next a for loop going through each permutation is used. Within it it calls a function of $v^2$ complexity (as it swaps all rows and columns). Then it compares the two graphs, constant runtime. Thus for this section, the runtime is $v^2 * v!$. 

Altogether, the runtime is $T(v) = v^2 * v! + v * v! + 2v^2 + 2vlogv + v$. 

And thus the runtime complexity is $T(v) ∈ \Theta(v^2 * v!)$.


### Sources:

I used this site to learn about methods to detect isomorphism and how that may look in code: https://tonicanada.medium.com/brute-force-code-for-isomorphisms-1241ef180570

I used chatgpt to figure out which method was best for what I needed and how some of that may look in javascript. My functions have segments of code from what was provided. I used this prompt: "what is the best method to test isomorphism between two graphs in coding, javascript specifically"

I used this site to look into some JavaScript methods and operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
