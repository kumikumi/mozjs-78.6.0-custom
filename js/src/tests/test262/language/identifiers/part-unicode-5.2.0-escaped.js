// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v5.2.0 ID_Continue characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var _\u0816\u0817\u0818\u0819\u081B\u081C\u081D\u081E\u081F\u0820\u0821\u0822\u0823\u0825\u0826\u0827\u0829\u082A\u082B\u082C\u082D\u0900\u094E\u0955\u109A\u109B\u109C\u109D\u19DA\u1A55\u1A56\u1A57\u1A58\u1A59\u1A5A\u1A5B\u1A5C\u1A5D\u1A5E\u1A60\u1A61\u1A62\u1A63\u1A64\u1A65\u1A66\u1A67\u1A68\u1A69\u1A6A\u1A6B\u1A6C\u1A6D\u1A6E\u1A6F\u1A70\u1A71\u1A72\u1A73\u1A74\u1A75\u1A76\u1A77\u1A78\u1A79\u1A7A\u1A7B\u1A7C\u1A7F\u1A80\u1A81\u1A82\u1A83\u1A84\u1A85\u1A86\u1A87\u1A88\u1A89\u1A90\u1A91\u1A92\u1A93\u1A94\u1A95\u1A96\u1A97\u1A98\u1A99\u1CD0\u1CD1\u1CD2\u1CD4\u1CD5\u1CD6\u1CD7\u1CD8\u1CD9\u1CDA\u1CDB\u1CDC\u1CDD\u1CDE\u1CDF\u1CE0\u1CE1\u1CE2\u1CE3\u1CE4\u1CE5\u1CE6\u1CE7\u1CE8\u1CED\u1CF2\u1DFD\u2CEF\u2CF0\u2CF1\uA6F0\uA6F1\uA8E0\uA8E1\uA8E2\uA8E3\uA8E4\uA8E5\uA8E6\uA8E7\uA8E8\uA8E9\uA8EA\uA8EB\uA8EC\uA8ED\uA8EE\uA8EF\uA8F0\uA8F1\uA980\uA981\uA982\uA983\uA9B3\uA9B4\uA9B5\uA9B6\uA9B7\uA9B8\uA9B9\uA9BA\uA9BB\uA9BC\uA9BD\uA9BE\uA9BF\uA9C0\uA9D0\uA9D1\uA9D2\uA9D3\uA9D4\uA9D5\uA9D6\uA9D7\uA9D8\uA9D9\uAA7B\uAAB0\uAAB2\uAAB3\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE3\uABE4\uABE5\uABE6\uABE7\uABE8\uABE9\uABEA\uABEC\uABED\uABF0\uABF1\uABF2\uABF3\uABF4\uABF5\uABF6\uABF7\uABF8\uABF9\u{11080}\u{11081}\u{11082}\u{110B0}\u{110B1}\u{110B2}\u{110B3}\u{110B4}\u{110B5}\u{110B6}\u{110B7}\u{110B8}\u{110B9}\u{110BA};

reportCompare(0, 0);
