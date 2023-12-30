# Fictional Facts Generator

## Overview

The Fictional Facts Generator is a whimsical JavaScript program and marks my first off-platform project for Codecademy. This program is creatively designed to generate fun and imaginative facts by randomly combining predefined elements. The facts are categorized into two moods: dramatic and funny. Each generated fact is a unique concoction, blending a randomly chosen year, scenario, manner, and reason, showcasing my initial foray into JavaScript programming.

## Features

- **Two Fact Moods:** Generate facts in either a dramatic or funny style.
- **Random Fact Creation:** Utilizes randomness to ensure a diverse and unexpected array of facts.
- **Customizable Fact Elements:** Easily modifiable arrays for years, scenarios, manners, and reasons.
- **Fact Verification:** Checks for duplicates before adding a new fact to the collection.

## How to Run

1. Ensure you have a JavaScript environment (like Node.js) installed.
2. Copy the code into a `.js` file.
3. Run the file using a JavaScript interpreter (e.g., `node yourfile.js` in the terminal).

## Functions

- `pickMood()`: Randomly selects a mood (`funny` or `dramatic`).
- `randomSelector(array)`: Picks a random element from an array.
- `randomSelectorObjectKeyValue(object, key)`: Chooses a random value from a given key in an object.
- `factFactory()`: Generates a new fact based on random selections.
- `processFact(fact)`: Processes manually added facts to match the format of generated facts.
- `addFact(mood, year, fact)`: Manually adds a new fact to the collection.

## Usage Example

```javascript
factFactory(); // Generates and logs a random fact.

// Adds a manually created.
// The fact reads: "In 2078, people will walk on handstand because the magnetic poles were inverted. This happens every 1000 years."
// The function first converts the mood to lowercase, processes the fact string to ensure proper capitalization and spacing,
// Then checks if the 'funny' category exists in the 'facts' object.
// If it exists, the fact is added to the 'funny' array within 'facts' if it's not already there.
// If the category doesn't exist, it's created and the fact is added.
addFact(
  "Funny",
  2078,
  "People will walk on handstand because the magnetic poles were inverted.this happens every 1000 years."
);
```
