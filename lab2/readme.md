# EventLoop

 js is synchronous and single threaded bydefault 
  
  ## there can be async behaviour
   - with browser\api -
   setTimeout, setInterval,setImmediate, nextTick
   - with promises
   - with event haandlers

# promise
  - a function not executed immmeditely but it must be executed after a while it has some status during the execution at final
  - it may resolve ()= success
  - reject = unsuccess
  ## call back function 
  - that pass as argumnet or the parameter to another function  

 # moder java script is divided into 2 categories
  1. common.js( cjs)-->  support OOPS
  -first priority (nextTick,setImmediate/setTimeout)
  2. mdulejs (.mjs) --> follow modular approach--> import
  - priority(promises,nextTick,setImmediate/setTimeout)