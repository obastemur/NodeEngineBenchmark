var fs = require('fs');
var path = require('path');
var testVersion = '1.0.1';
var folder = path.join(process.cwd(), 'sunspider-' + testVersion);
var files = fs.readdirSync(folder);
var totalTime = 0, subCounter = 1;
var vm = require('vm');

{
  var script = fs.readFileSync("./octane.js") + "";
  var sandbox = {print: console.log};
  var context = vm.createContext(sandbox);
  vm.runInContext(script, context);
  console.log("------\n");
}

setInterval(function(){
  if (subCounter == 10) {
    console.log("Total SunSpider AVG. Time", totalTime/ 10);
    process.exit(0);
  }

  subCounter++;
  for(var counter = 0;counter < files.length; counter++) {
    var file = files[counter];

    if (path.extname(file) != '.js') continue;

    var script = fs.readFileSync(folder + path.sep + file) + "";
    var sandbox = {print: console.log};
    var context = vm.createContext(sandbox);

    var subTotal = vm.runInContext("var START_TIME=Date.now();" + script + ";Date.now()-START_TIME", context);
    totalTime += subTotal;
  }
}, 123);