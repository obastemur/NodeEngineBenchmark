/*
 The MIT License (MIT)

 Copyright (c) 2015 Oguz Bastemur

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */


var fs = require('fs');
var path = require('path');
var testVersion = '1.0.1';
var folder = path.join(process.cwd(), 'sunspider-' + testVersion);
var files = fs.readdirSync(folder);
var totalTime = 0;
var counter = 0;
var runner = setInterval(function() {
  if (counter < files.length) {
    var file = files[counter];
    counter++;

    if (path.extname(file) != '.js') return;
    for (var i = 0; i < 10; i++) {
      var out = jxcore.utils.cmdSync(process.argv[0] + " runSingle.js " + folder + path.sep + file);
      if (out.exitCode) {
        throw new Error(out.out);
      }
      totalTime += parseInt(out.out);
    }
  } else {
    clearInterval(runner);

    console.log("Average of 10 runs: ", totalTime / 10);
  }
}, 128);
