// |reftest| skip-if(!this.hasOwnProperty('Atomics')) -- Atomics is not enabled unconditionally
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-atomics.exchange
description: Testing descriptor property of Atomics.exchange
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'exchange', {
  enumerable: false,
  writable: true,
  configurable: true,
});

reportCompare(0, 0);
