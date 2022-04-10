// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: PARAGRAPH SEPARATOR (U+2029) may occur between any two tokens
esid: sec-line-terminators
es5id: 7.3_A1.4
description: Insert PARAGRAPH SEPARATOR (\u2029) between tokens of var x=1
---*/

var x = 1 ;

assert.sameValue(x, 1);

reportCompare(0, 0);
