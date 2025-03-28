
import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  // Medieval Era Recipes
  {
    id: 'medieval-1',
    title: 'Ye Olde Hearty Stew',
    slug: 'hearty-stew',
    description: 'A traditional medieval stew that warms both body and soul. Perfect for cold winter days in the castle.',
    ingredients: [
      { name: 'Venison', quantity: '1 pound', notes: 'Cut into cubes' },
      { name: 'Root vegetables', quantity: '2 cups', notes: 'Turnips, carrots, and parsnips' },
      { name: 'Barley', quantity: '1/2 cup' },
      { name: 'Onions', quantity: '2 medium', notes: 'Roughly chopped' },
      { name: 'Garlic', quantity: '3 cloves', notes: 'Minced' },
      { name: 'Fresh herbs', quantity: '1 bundle', notes: 'Thyme, rosemary, and sage' },
      { name: 'Ale', quantity: '1 cup', notes: 'Dark ale preferred' },
      { name: 'Stock', quantity: '4 cups', notes: 'Bone broth' },
      { name: 'Salt', quantity: '1 tsp', notes: 'Sea salt' }
    ],
    steps: [
      { instructions: 'Brown the venison in a cast iron pot over open flame.', note: 'The meat must be seared properly to seal in flavors.' },
      { instructions: 'Add onions and garlic, cook until softened.' },
      { instructions: 'Pour in the ale and bring to a simmer, allowing the alcohol to cook off.' },
      { instructions: 'Add stock, vegetables, barley, and herb bundle.' },
      { instructions: 'Cover and simmer for 2 hours, stirring occasionally.', note: 'The longer it cooks, the better the flavor develops.' },
      { instructions: 'Season with salt to taste before serving.' }
    ],
    cookingTime: '2.5 hours',
    servings: 6,
    difficulty: 'Medium',
    era: 'medieval'
  },
  {
    id: 'medieval-2',
    title: 'Royal Honey Cakes',
    slug: 'honey-cakes',
    description: 'Sweet treats fit for nobility, these honey-soaked cakes were a luxury in medieval times.',
    ingredients: [
      { name: 'Flour', quantity: '2 cups', notes: 'Stone-ground wheat flour' },
      { name: 'Honey', quantity: '1 cup', notes: 'Raw, unfiltered' },
      { name: 'Butter', quantity: '1/2 cup', notes: 'Softened' },
      { name: 'Eggs', quantity: '3 large' },
      { name: 'Almond meal', quantity: '1 cup' },
      { name: 'Rosewater', quantity: '2 tbsp' },
      { name: 'Cinnamon', quantity: '1 tsp' },
      { name: 'Nutmeg', quantity: '1/4 tsp', notes: 'Freshly ground' },
      { name: 'Salt', quantity: 'Pinch' }
    ],
    steps: [
      { instructions: 'Combine flour, almond meal, cinnamon, nutmeg, and salt in a bowl.' },
      { instructions: 'In a separate bowl, cream together butter and half the honey.', note: 'The mixture should be smooth and creamy.' },
      { instructions: 'Beat in eggs one at a time, then add rosewater.' },
      { instructions: 'Gradually fold in dry ingredients until a batter forms.' },
      { instructions: 'Pour batter into greased earthenware moulds or a shallow pan.' },
      { instructions: 'Bake in a moderate oven until golden and firm to touch.', note: 'About 25-30 minutes in a modern oven at 350°F.' },
      { instructions: 'While still warm, drizzle with remaining honey and allow to soak in.' }
    ],
    cookingTime: '45 minutes',
    servings: 8,
    difficulty: 'Medium',
    era: 'medieval'
  },
  {
    id: 'medieval-3',
    title: 'Mystical Herbal Mead',
    slug: 'herbal-mead',
    description: 'A secret recipe known only to the most trusted apothecaries of the realm.',
    ingredients: [
      { name: 'Honey', quantity: '3 cups', notes: 'Wildflower honey preferred' },
      { name: 'Water', quantity: '1 gallon' },
      { name: 'Lavender', quantity: '1 tbsp', notes: 'Dried flowers' },
      { name: 'Rosemary', quantity: '1 sprig' },
      { name: 'Elderflower', quantity: '2 tbsp', notes: 'Dried' },
      { name: 'Lemon balm', quantity: '1 handful' },
      { name: 'Cloves', quantity: '3 whole' },
      { name: 'Cinnamon stick', quantity: '1 small' },
      { name: 'Brewing yeast', quantity: '1 packet', notes: 'Modern equivalent of wild yeast' }
    ],
    steps: [
      { instructions: 'Heat water until just below boiling point.', note: 'Never allow it to boil fully.' },
      { instructions: 'Stir in honey until completely dissolved.' },
      { instructions: 'Add all herbs and spices, cover, and let steep until the mixture cools to room temperature.' },
      { instructions: 'Strain the mixture through a fine cloth into a fermentation vessel.' },
      { instructions: 'Add yeast, seal with an airlock, and store in a cool, dark place.' },
      { instructions: 'Allow to ferment for 4-6 weeks, then bottle.', note: 'The longer it ages, the more potent its magical properties become.' }
    ],
    cookingTime: '6 weeks',
    servings: 12,
    difficulty: 'Hard',
    era: 'medieval',
    isSecret: true,
    secretUnlockHint: 'Search among the herbs of healing and wisdom.'
  },

  // Cyberpunk Era Recipes
  {
    id: 'cyberpunk-1',
    title: 'Neon Ramen 2.0',
    slug: 'neon-ramen',
    description: 'The ultimate street food of Neo-Tokyo. This glow-in-the-dark ramen is both nutritious and visually stunning.',
    ingredients: [
      { name: 'Syntho-noodles', quantity: '200g', notes: 'Lab-grown wheat protein strands' },
      { name: 'Broth concentrate', quantity: '2 packets', notes: 'Umami-boosted flavor cubes' },
      { name: 'Cultured protein', quantity: '100g', notes: 'Lab-grown meat, sliced thin' },
      { name: 'Bioluminescent algae', quantity: '1 tbsp', notes: 'For the glow effect' },
      { name: 'Nano-vegetables', quantity: '1/2 cup', notes: 'Enhanced nutritional profile' },
      { name: 'Smart-spice blend', quantity: '1 tsp', notes: 'Cognitive enhancement formula' },
      { name: 'Hydroponic green onions', quantity: '2 stalks', notes: 'Sliced' },
      { name: 'Nutrient oil', quantity: '1 tbsp', notes: 'Infused with omega complexes' },
      { name: 'Black market hot sauce', quantity: '1 tsp', notes: 'Unregulated endorphin stimulant' }
    ],
    steps: [
      { instructions: 'Activate broth concentrate in 500ml purified water.', note: 'Water must be heated to exactly 92°C for optimal molecular bonding.' },
      { instructions: 'Add smart-spice blend and nutrient oil, whisk to integrate.', note: 'Whisking creates micro-emulsions for better bioavailability.' },
      { instructions: 'Flash-cook syntho-noodles for exactly 2 minutes 45 seconds.' },
      { instructions: 'Sear cultured protein on high heat with nano-vegetables.', note: 'The protein will change color from translucent to opaque when ready.' },
      { instructions: 'Combine all elements in a temperature-regulating bowl.' },
      { instructions: 'Add bioluminescent algae last and do not stir—let it create patterns on the surface.' },
      { instructions: 'Garnish with hydroponic green onions and black market hot sauce to taste.' }
    ],
    cookingTime: '15 minutes',
    servings: 1,
    difficulty: 'Medium',
    era: 'cyberpunk'
  },
  {
    id: 'cyberpunk-2',
    title: 'Memory-Boost Mocktail',
    slug: 'memory-boost-mocktail',
    description: 'A non-alcoholic neural enhancer that temporarily improves recall and processing speed. Popular among netrunners.',
    ingredients: [
      { name: 'Nootropic tea', quantity: '100ml', notes: 'Cold-brewed' },
      { name: 'Synthetic blueberry extract', quantity: '20ml', notes: 'Enhanced antioxidant formula' },
      { name: 'Ginkgo concentrate', quantity: '5ml', notes: 'Memory enhancement' },
      { name: 'Adaptogenic mushroom syrup', quantity: '15ml', notes: 'Lion\'s mane variant' },
      { name: 'Electrolyte powder', quantity: '1/2 packet', notes: 'Neural conductor blend' },
      { name: 'Sparkling water', quantity: '200ml' },
      { name: 'Vitamin B12 mist', quantity: '2 sprays', notes: 'For finishing' },
      { name: 'Microalga ice cubes', quantity: '3 cubes', notes: 'Oxygen-enriched' }
    ],
    steps: [
      { instructions: 'Scan all ingredients with your food safety app to verify authenticity.', note: 'Black market counterfeits can cause neural degradation!' },
      { instructions: 'Combine nootropic tea and mushroom syrup in a shaker.', note: 'The compounds begin activating on contact.' },
      { instructions: 'Add ginkgo concentrate and blueberry extract, shake vigorously for 10 seconds.' },
      { instructions: 'Fill a graphene-lined glass with microalga ice cubes.' },
      { instructions: 'Pour mixture over ice, then slowly add sparkling water to create gradient layers.' },
      { instructions: 'Dissolve electrolyte powder across the surface.' },
      { instructions: 'Finish with B12 mist and serve immediately.', note: 'Efficacy decreases 37% after 5 minutes of exposure to oxygen.' }
    ],
    cookingTime: '5 minutes',
    servings: 1,
    difficulty: 'Easy',
    era: 'cyberpunk'
  },
  {
    id: 'cyberpunk-3',
    title: 'Black ICE Cream',
    slug: 'black-ice-cream',
    description: 'A dangerous dessert that causes temporary synesthesia, letting you taste colors and see flavors.',
    ingredients: [
      { name: 'Activated charcoal base', quantity: '2 cups', notes: 'Food-grade neural activator' },
      { name: 'Synthetic dairy matrix', quantity: '1 cup', notes: 'Enhanced fat molecules' },
      { name: 'Psychoactive sweetener', quantity: '3 tbsp', notes: 'Legal in most districts' },
      { name: 'Quantum-stabilized air', quantity: '200ml', notes: 'For texture manipulation' },
      { name: 'Mood-altering flavor pods', quantity: '2 pods', notes: 'Choose your experience' },
      { name: 'Temporal vanilla', quantity: '1 tsp', notes: 'Slows perception of melting' },
      { name: 'Perception-shift crystals', quantity: '1 pinch', notes: 'Creates the synesthetic effect' },
      { name: 'Endorphin triggers', quantity: '1/4 tsp', notes: 'Calibrated for human response' }
    ],
    steps: [
      { instructions: 'Initialize your molecular printer with encrypted recipe code.', note: 'This recipe requires license verification.' },
      { instructions: 'Prime the printer with all ingredients except perception-shift crystals.' },
      { instructions: 'Select texture profile #37 (quantum-stabilized micro-bubbles).' },
      { instructions: 'Begin molecular assembly process while chilling to -15°C.', note: 'The mixture will appear to move on its own—this is normal.' },
      { instructions: 'At exactly 82% completion, add perception-shift crystals.', note: 'Adding too early will cause hallucinations; too late will dampen effects.' },
      { instructions: 'Complete printing process and serve within a Faraday cage dish to contain effects.', note: 'Effects should not spread beyond the consumer.' },
      { instructions: 'Warn consumers of the 15-20 minute psychoactive experience.', note: 'Not recommended before operating heavy machinery or neural interfaces.' }
    ],
    cookingTime: '30 minutes',
    servings: 4,
    difficulty: 'Hard',
    era: 'cyberpunk',
    isSecret: true,
    secretUnlockHint: 'Only those who have tasted the electric edge between reality and digital can access this recipe.'
  },

  // Apocalyptic Era Recipes
  {
    id: 'apocalyptic-1',
    title: 'Wasteland Stew',
    slug: 'wasteland-stew',
    description: 'A hardy, adaptable stew made from scavenged ingredients. High in nutrients and radiation-cleansing compounds.',
    ingredients: [
      { name: 'Protein source', quantity: '1 pound', notes: 'Whatever you can hunt/find' },
      { name: 'Purified water', quantity: '6 cups', notes: 'Must be filtered twice' },
      { name: 'Scavenged root vegetables', quantity: '3 cups', notes: 'Check radiation levels before using' },
      { name: 'Wild greens', quantity: '2 handfuls', notes: 'Dandelion greens, chickweed, etc.' },
      { name: 'Preserved spice mix', quantity: '2 tbsp', notes: 'Pre-fall seasoning if available' },
      { name: 'Immunity mushrooms', quantity: '1/2 cup', notes: 'The ones with blue spots' },
      { name: 'Scrap iron nail', quantity: '1', notes: 'For iron fortification' },
      { name: 'Smoke tablets', quantity: '2', notes: 'For flavor and preservation' }
    ],
    steps: [
      { instructions: 'Test all ingredients with radiation detector. Discard anything over 150 rads.', note: 'Contamination is not worth the risk.' },
      { instructions: 'In a salvaged pot, boil water with the iron nail for 10 minutes.', note: 'This leaches iron into the water for added nutrition.' },
      { instructions: 'Add protein and simmer until barely cooked.' },
      { instructions: 'Add root vegetables and continue cooking until softened.', note: 'If fuel is scarce, dice smaller for faster cooking.' },
      { instructions: 'Mix in wild greens during the last few minutes.', note: 'Overcooking destroys vital nutrients.' },
      { instructions: 'Add immunity mushrooms and dissolve smoke tablets.' },
      { instructions: 'Remove nail before serving.', note: 'The nail can be reused approximately 10 times before its iron content is depleted.' },
      { instructions: 'Let sit covered for 5 minutes before consumption.', note: 'Share with your survival group for better community relations.' }
    ],
    cookingTime: '45 minutes',
    servings: 4,
    difficulty: 'Medium',
    era: 'apocalyptic'
  },
  {
    id: 'apocalyptic-2',
    title: 'Bunker Bread',
    slug: 'bunker-bread',
    description: 'A dense, long-lasting bread that can be made with minimal ingredients and improvised equipment.',
    ingredients: [
      { name: 'Survival flour', quantity: '4 cups', notes: 'Can be made from ground dried beans, nuts, or grains' },
      { name: 'Clean water', quantity: '1.5 cups', notes: 'Distilled preferred' },
      { name: 'Salt', quantity: '1 tbsp', notes: 'Essential mineral supplement' },
      { name: 'Wild yeast starter', quantity: '1/2 cup', notes: 'Captured from the air or from fruit skins' },
      { name: 'Scavenged seeds', quantity: '1/4 cup', notes: 'For added nutrition' },
      { name: 'Hardwood ash', quantity: '1 tsp', notes: 'Acts as a leavening agent' }
    ],
    steps: [
      { instructions: 'Mix flour, salt, and ash in a container with a sealed lid.', note: 'Shake vigorously to incorporate air.' },
      { instructions: 'Add yeast starter and water, mix until a shaggy dough forms.' },
      { instructions: 'Knead dough for 10 minutes to develop what gluten is available.', note: 'This builds structure and strength for better preservation.' },
      { instructions: 'Fold in scavenged seeds and form into a round loaf.' },
      { instructions: 'Place in a scavenged can or improvised dutch oven.' },
      { instructions: 'Cover and let rise in the warmest part of your shelter for 4-24 hours.', note: 'Longer is better, but any rise is beneficial.' },
      { instructions: 'Bake in improvised oven or over coals until the bread sounds hollow when tapped.', note: 'Approximately 45-60 minutes depending on heat source.' },
      { instructions: 'Cool completely before storing in airtight container.', note: 'Can last up to 2 weeks if kept dry.' }
    ],
    cookingTime: '5-24 hours (including rising time)',
    servings: 8,
    difficulty: 'Medium',
    era: 'apocalyptic'
  },
  {
    id: 'apocalyptic-3',
    title: 'Last Hope Preserves',
    slug: 'last-hope-preserves',
    description: 'A secret method for preserving the last seasonal fruits with minimal resources, creating a morale-boosting treat that lasts for years.',
    ingredients: [
      { name: 'Foraged fruits', quantity: '4 cups', notes: 'Whatever is available' },
      { name: 'Emergency honey', quantity: '1 cup', notes: 'From the last-known bee colonies' },
      { name: 'Citric acid powder', quantity: '1 tbsp', notes: 'Scavenged from pre-fall supplies' },
      { name: 'Sea salt', quantity: '1 tsp', notes: 'From coastal expeditions' },
      { name: 'Clean spring water', quantity: '1/2 cup', notes: 'From the hidden source' },
      { name: 'Wild mint', quantity: '5 leaves', notes: 'For natural preservation' },
      { name: 'Vault-grade alcohol', quantity: '1/4 cup', notes: 'Minimum 80 proof' }
    ],
    steps: [
      { instructions: 'This recipe must be prepared during a new moon.', note: 'The darkness provides additional protection from contamination.' },
      { instructions: 'Sterilize all equipment with vault-grade alcohol.', note: 'Every surface must be pristine.' },
      { instructions: 'Mash fruits with a clean stone tool, removing any damaged portions.', note: 'Even minor contamination can ruin the entire batch.' },
      { instructions: 'Heat spring water just below boiling and dissolve honey, salt, and citric acid.' },
      { instructions: 'Combine fruit mash with the liquid and simmer at exactly 92°C for 12 minutes.', note: 'Temperature control is critical—too high destroys nutrients, too low fails to preserve.' },
      { instructions: 'Add mint leaves during the final 2 minutes.' },
      { instructions: 'While still hot, transfer to sterilized glass containers and seal immediately.', note: 'A proper seal will create a vacuum as it cools, indicated by a slight depression in the lid.' },
      { instructions: 'Bury containers in the cold earth of the northern cave for at least 30 days before using.', note: 'The cave's natural radiation-blocking properties enhance preservation.' },
      { instructions: 'Once opened, a jar must be consumed within 3 days or shared with other survivors.' }
    ],
    cookingTime: '30 days',
    servings: 12,
    difficulty: 'Hard',
    era: 'apocalyptic',
    isSecret: true,
    secretUnlockHint: 'Only those who have endured the longest winter know where the sweet things hide.'
  }
];

export const getRecipesByEra = (era: 'medieval' | 'cyberpunk' | 'apocalyptic'): Recipe[] => {
  return recipes.filter(recipe => recipe.era === era);
};

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.slug === slug);
};

export const getSecretRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.isSecret);
};

export const getNonSecretRecipes = (): Recipe[] => {
  return recipes.filter(recipe => !recipe.isSecret);
};
