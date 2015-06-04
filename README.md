Run sunspider and octane tests locally on (alphabetical order) [IO.JS](http://iojs.org) / [JXcore](http://jxcore.com) / [Node.JS](http://nodejs.org) to measure the embedded JavaScript engine performance.

#### Remarks

 - Test files are standard JS engine benchmarks.
 - Bechmarks do not measure the underlying framework's performance. So, this is not a comparison tool for i.e. JXcore vs Node etc.
 - This implementation is designed to stress the GC / calculations / memory stability of the engine within the framework.

#### How To

```
[node process] runTest.js
```

#### Sample Result
MacBook Pro i7-2.7Ghz (JXcore 0.3.0.1 SM 34 / V8 3.14) Results;  

**SpiderMonkey 34**  

Richards: 22106  
DeltaBlue: 25641  
Crypto: 22738  
RayTrace: 28099  
EarleyBoyer: 19687  
RegExp: 3347  
Splay: 19228  
NavierStokes: 27640  

**Octane Score (version 7): 18319 (Higher is faster)**

**Total SunSpider AVG. Time 164.6 ms**


**v8 3.14**  

Richards: 16355  
DeltaBlue: 20523  
Crypto: 19987  
RayTrace: 19832  
EarleyBoyer: 35854  
RegExp: 5295  
Splay: 5696  
NavierStokes: 24906  

**Octane Score (version 7): 15642 (Higher is faster)**

**Total SunSpider AVG. Time 165.4 ms**


#### Intention
Measure embedded JS engine performance for Node.JS platform.

