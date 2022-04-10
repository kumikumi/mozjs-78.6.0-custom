// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Control`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000000, 0x00001F],
    [0x00007F, 0x00009F]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Control}+$/u,
  matchSymbols,
  "\\p{General_Category=Control}"
);
testPropertyEscapes(
  /^\p{General_Category=Cc}+$/u,
  matchSymbols,
  "\\p{General_Category=Cc}"
);
testPropertyEscapes(
  /^\p{General_Category=cntrl}+$/u,
  matchSymbols,
  "\\p{General_Category=cntrl}"
);
testPropertyEscapes(
  /^\p{gc=Control}+$/u,
  matchSymbols,
  "\\p{gc=Control}"
);
testPropertyEscapes(
  /^\p{gc=Cc}+$/u,
  matchSymbols,
  "\\p{gc=Cc}"
);
testPropertyEscapes(
  /^\p{gc=cntrl}+$/u,
  matchSymbols,
  "\\p{gc=cntrl}"
);
testPropertyEscapes(
  /^\p{Control}+$/u,
  matchSymbols,
  "\\p{Control}"
);
testPropertyEscapes(
  /^\p{Cc}+$/u,
  matchSymbols,
  "\\p{Cc}"
);
testPropertyEscapes(
  /^\p{cntrl}+$/u,
  matchSymbols,
  "\\p{cntrl}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000020, 0x00007E],
    [0x0000A0, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Control}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Control}"
);
testPropertyEscapes(
  /^\P{General_Category=Cc}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Cc}"
);
testPropertyEscapes(
  /^\P{General_Category=cntrl}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=cntrl}"
);
testPropertyEscapes(
  /^\P{gc=Control}+$/u,
  nonMatchSymbols,
  "\\P{gc=Control}"
);
testPropertyEscapes(
  /^\P{gc=Cc}+$/u,
  nonMatchSymbols,
  "\\P{gc=Cc}"
);
testPropertyEscapes(
  /^\P{gc=cntrl}+$/u,
  nonMatchSymbols,
  "\\P{gc=cntrl}"
);
testPropertyEscapes(
  /^\P{Control}+$/u,
  nonMatchSymbols,
  "\\P{Control}"
);
testPropertyEscapes(
  /^\P{Cc}+$/u,
  nonMatchSymbols,
  "\\P{Cc}"
);
testPropertyEscapes(
  /^\P{cntrl}+$/u,
  nonMatchSymbols,
  "\\P{cntrl}"
);

reportCompare(0, 0);
