
import { Recipe } from '../types/recipe';

export const additionalApocalypticRecipes: Recipe[] = [
  {
    id: 'apocalyptic-6',
    title: 'Last Chance Canned Meat',
    slug: 'last-chance-canned-meat',
    description: 'A preservation technique for extending the usable life of scavenged protein in the wasteland.',
    ingredients: [
      { name: 'Protein source', quantity: '5 pounds', notes: 'Whatever you can hunt/find that\'s safe' },
      { name: 'Sea salt', quantity: '1/2 cup', notes: 'Radiation tested' },
      { name: 'Salvaged vinegar', quantity: '2 cups', notes: 'Pre-war if possible' },
      { name: 'Bay leaves', quantity: '5', notes: 'Foraged from protected areas' },
      { name: 'Peppercorns', quantity: '1 tbsp', notes: 'Traded from southern settlements' },
      { name: 'Purified water', quantity: 'As needed', notes: 'Triple filtered' },
      { name: 'Scavenged garlic', quantity: '6 cloves', notes: 'Wild-grown preferred' },
      { name: 'Pressure canner', quantity: '1', notes: 'Must be intact and functional' },
      { name: 'Recycled jars with lids', quantity: '8-10', notes: 'Inspected for cracks or damage' }
    ],
    steps: [
      { instructions: 'Sterilize all jars, lids, and tools using boiling water for 10 minutes.', note: 'Contamination leads to botulism - a death sentence in the wasteland.' },
      { instructions: 'Cut protein into uniform 1-inch cubes, removing all gristle, fat, and any suspicious tissue.', note: 'Test all meat with your radiation detector first.' },
      { instructions: 'Create a brine by dissolving salt in vinegar and 1 cup of purified water.' },
      { instructions: 'Soak meat in brine for 30 minutes to draw out impurities and begin preservation.' },
      { instructions: 'Drain meat and rinse with purified water.' },
      { instructions: 'Pack jars with meat, leaving 1-inch headspace. Add 1 bay leaf, a few peppercorns, and 1 garlic clove to each jar.' },
      { instructions: 'Pour fresh purified water into jars, maintaining 1-inch headspace.' },
      { instructions: 'Secure lids according to salvaged canner manual specifications.', note: 'Different models require different techniques - follow exactly.' },
      { instructions: 'Process in pressure canner at 10 pounds pressure for 90 minutes.', note: 'Monitor pressure constantly - fluctuations risk spoilage or explosion.' },
      { instructions: 'Allow canner to depressurize naturally before opening.', note: 'Rushing this step can cause jars to break or lids to fail.' },
      { instructions: 'Store in cool, dark place. Mark with production date. Lasts 2-3 years if properly sealed.' }
    ],
    cookingTime: '3 hours',
    servings: '8-10 jars',
    difficulty: 'Hard',
    era: 'apocalyptic',
    tags: ['preservation', 'protein', 'long-term storage']
  },
  {
    id: 'apocalyptic-7',
    title: 'Crisis Comfort Mac',
    slug: 'crisis-comfort-mac',
    description: 'A warming comfort food adapted for post-collapse ingredients that boosts morale in bunker shelters.',
    ingredients: [
      { name: 'Dried pasta', quantity: '2 cups', notes: 'Any salvaged shape' },
      { name: 'Powdered cheese', quantity: '1/4 cup', notes: 'From emergency rations' },
      { name: 'Powdered milk', quantity: '2 tbsp', notes: 'Reconstituted' },
      { name: 'Dried mushrooms', quantity: '1/4 cup', notes: 'Foraged, radiation-checked' },
      { name: 'Nutritional yeast', quantity: '2 tbsp', notes: 'For extra protein and B vitamins' },
      { name: 'Canned peas', quantity: '1/2 cup', notes: 'Drained' },
      { name: 'Potassium iodide', quantity: '1 pinch', notes: 'From med-kits, for thyroid protection' },
      { name: 'Oil', quantity: '1 tbsp', notes: 'Whatever type is available' },
      { name: 'Clean water', quantity: '3 cups', notes: 'Filtered' }
    ],
    steps: [
      { instructions: 'Check all ingredients with radiation detector. Safety first.' },
      { instructions: 'Rehydrate dried mushrooms in 1 cup warm water for 20 minutes.', note: 'Save the mushroom water - it contains valuable nutrients.' },
      { instructions: 'Boil remaining water in a covered pot to minimize evaporation.' },
      { instructions: 'Add pasta and cook until just tender, about 8-10 minutes.', note: 'Slightly undercook as it will continue to soften in the sauce.' },
      { instructions: 'Drain pasta, reserving 1/2 cup of pasta water in case sauce needs thinning.' },
      { instructions: 'Return pot to low heat, add oil and drained, chopped mushrooms.' },
      { instructions: 'Stir in powdered milk, powdered cheese, nutritional yeast, and mushroom water.' },
      { instructions: 'Mix continuously until a sauce forms, adding reserved pasta water if too thick.' },
      { instructions: 'Add pasta and canned peas, stirring to coat evenly.' },
      { instructions: 'Sprinkle with potassium iodide and serve immediately.', note: 'One batch boosts group morale by approximately 37% according to wasteland psychological metrics.' }
    ],
    cookingTime: '30 minutes',
    servings: 3,
    difficulty: 'Easy',
    era: 'apocalyptic',
    tags: ['comfort food', 'morale booster', 'bunker meal']
  },
  {
    id: 'apocalyptic-8',
    title: 'Survival Cache Cookies',
    slug: 'survival-cache-cookies',
    description: 'Dense, nutrient-packed cookies that last for months when properly stored, perfect for emergency caches or long scouting missions.',
    ingredients: [
      { name: 'Oats', quantity: '2 cups', notes: 'Rolled or steel-cut' },
      { name: 'Nut butter', quantity: '1 cup', notes: 'Any type available' },
      { name: 'Honey or equivalent', quantity: '1/2 cup', notes: 'For binding and preservation' },
      { name: 'Dried fruit', quantity: '1 cup', notes: 'Whatever is available' },
      { name: 'Scavenged seeds', quantity: '1/2 cup', notes: 'Sunflower, pumpkin, etc.' },
      { name: 'Protein powder', quantity: '1/4 cup', notes: 'If available' },
      { name: 'Powdered egg', quantity: '2 tbsp', notes: 'Reconstituted' },
      { name: 'Salt', quantity: '1/2 tsp', notes: 'For electrolyte balance' },
      { name: 'Potassium chloride', quantity: '1/4 tsp', notes: 'Salvaged from water softener salt' }
    ],
    steps: [
      { instructions: 'Test all ingredients for radiation contamination. Green readings only.' },
      { instructions: 'Toast oats and seeds in a dry pan until fragrant.', note: 'This improves flavor and destroys any microorganisms.' },
      { instructions: 'Reconstitute powdered egg with minimal water - just enough to form a paste.' },
      { instructions: 'Mix nut butter and honey in a bowl until well combined.' },
      { instructions: 'Add reconstituted egg, salt, and potassium chloride, mixing thoroughly.' },
      { instructions: 'Fold in toasted oats, seeds, dried fruit, and protein powder.' },
      { instructions: 'If mixture is too dry to hold together, add 1-2 tbsp of clean water.', note: 'Dough should be stiff but moldable.' },
      { instructions: 'Form into 2-inch diameter balls and flatten to 1/2-inch thickness.' },
      { instructions: 'Arrange on a metal sheet and bake near fire or in solar oven until edges brown.', note: 'Approximately 15-20 minutes in a 350°F equivalent heat.' },
      { instructions: 'Cool completely before storing in airtight containers or wrapping individually in waxed cloth.' },
      { instructions: 'Label with production date. Each cookie provides approximately 300 calories of survival energy.' }
    ],
    cookingTime: '45 minutes',
    servings: '12 cookies',
    difficulty: 'Easy',
    era: 'apocalyptic',
    tags: ['portable', 'long-lasting', 'energy food']
  },
  // Add more apocalyptic recipes here
];
