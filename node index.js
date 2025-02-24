
#### index.js

```javascript
#!/usr/bin/env node

const facts = [
  "Zeus is the king of the Greek gods.",
  "Thor wields the mighty hammer Mjolnir.",
  "In Norse mythology, Odin sacrificed his eye for wisdom.",
  "Ra was the sun god in ancient Egyptian mythology."
];

function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}

console.log("Welcome to Odyssey Myth Facts!");
console.log("Here's a random mythological fact:");
console.log(getRandomFact());
