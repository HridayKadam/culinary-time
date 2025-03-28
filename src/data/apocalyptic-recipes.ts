
import { Recipe } from '../types/recipe';

export const apocalypticRecipes: Recipe[] = [
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
    era: 'apocalyptic',
    featured: true
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
    era: 'apocalyptic',
    featured: true
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
      { instructions: 'Bury containers in the cold earth of the northern cave for at least 30 days before using.', note: 'The cave\'s natural radiation-blocking properties enhance preservation.' },
      { instructions: 'Once opened, a jar must be consumed within 3 days or shared with other survivors.' }
    ],
    cookingTime: '30 days',
    servings: 12,
    difficulty: 'Hard',
    era: 'apocalyptic',
    isSecret: true,
    secretUnlockHint: 'Only those who have endured the longest winter know where the sweet things hide.'
  },
  {
    id: 'apocalyptic-4',
    title: 'Fallout Flapjacks',
    slug: 'fallout-flapjacks',
    description: 'Energy-dense breakfast cakes made from scavenged grain alternatives, designed to fuel a full day of wasteland exploration.',
    ingredients: [
      { name: 'Emergency protein powder', quantity: '1 cup', notes: 'Military ration if available' },
      { name: 'Crushed cattail roots', quantity: '1 cup', notes: 'Dried and ground to flour' },
      { name: 'Salvaged baking powder', quantity: '1 tsp', notes: 'Test for potency first' },
      { name: 'Powdered milk', quantity: '2 tbsp', notes: 'Pre-war if possible' },
      { name: 'Wild honey', quantity: '3 tbsp', notes: 'Check radiation levels first' },
      { name: 'Purified water', quantity: 'As needed', notes: 'Triple-filtered' },
      { name: 'Pine needle oil', quantity: '1 tsp', notes: 'For vitamin C' },
      { name: 'Preserved berries', quantity: '1/4 cup', notes: 'Optional but recommended for morale' }
    ],
    steps: [
      { instructions: 'Test all ingredients with radiation counter. Green light only.', note: 'Contaminated ingredients will show as orange or red on the counter.' },
      { instructions: 'Mix dry ingredients in a salvaged metal bowl, checking for any debris or contaminants.' },
      { instructions: 'Create a well in the center and add honey and a small amount of water.', note: 'Add water gradually - different protein powders absorb differently.' },
      { instructions: 'Mix until just combined. Batter should be thick but pourable.', note: 'Overmixing will make them tough - preserve your jaw strength for tougher situations.' },
      { instructions: 'Add pine needle oil and fold in preserved berries if using.' },
      { instructions: 'Heat a flat metal surface over your campfire or shelter stove until water droplets dance on it.' },
      { instructions: 'Pour small portions of batter onto the hot surface, cooking until bubbles form on top.' },
      { instructions: 'Flip and cook for another 1-2 minutes.', note: 'Try to flip only once to conserve energy and heat.' },
      { instructions: 'Stack and store in clean cloth. Will remain good for 2 days in cool conditions.' }
    ],
    cookingTime: '20 minutes',
    servings: 5,
    difficulty: 'Easy',
    era: 'apocalyptic',
    tags: ['breakfast', 'survival', 'energy food']
  },
  {
    id: 'apocalyptic-5',
    title: 'Radiation Resistant Root Beer',
    slug: 'radiation-resistant-root-beer',
    description: 'A foraged beverage that helps the body process and eliminate radiation exposure, with a surprisingly pleasant earthy taste.',
    ingredients: [
      { name: 'Wild sassafras roots', quantity: '1 cup', notes: 'Cleaned and chopped' },
      { name: 'Dandelion root', quantity: '1/2 cup', notes: 'Dried and roasted' },
      { name: 'Burdock root', quantity: '1/4 cup', notes: 'Sliced thin' },
      { name: 'Purified water', quantity: '8 cups', notes: 'De-radiated' },
      { name: 'Wild honey', quantity: '1/2 cup', notes: 'Or whatever sweetener you can find' },
      { name: 'Activated charcoal', quantity: '1 tbsp', notes: 'Medical grade' },
      { name: 'Mint leaves', quantity: '1 handful', notes: 'For flavor and digestive support' },
      { name: 'Potassium iodide', quantity: '1 pinch', notes: 'From emergency kits' }
    ],
    steps: [
      { instructions: 'Place all roots in a large pot with the activated charcoal.', note: 'The charcoal binds to radioactive particles.' },
      { instructions: 'Add water and bring to a boil, then reduce to a simmer.' },
      { instructions: 'Cover and simmer for 30 minutes, allowing the roots to release their compounds.', note: 'A darker color indicates stronger detoxifying properties.' },
      { instructions: 'Remove from heat and add mint leaves and potassium iodide.', note: 'The iodide helps protect the thyroid from radiation.' },
      { instructions: 'Cover and steep for an additional 15 minutes.' },
      { instructions: 'Strain through a clean cloth, capturing as much liquid as possible.' },
      { instructions: 'While still warm (not hot), stir in honey until dissolved.' },
      { instructions: 'Allow to cool completely, then store in sealed bottles.', note: 'Consume 8oz daily during radiation storms or after exposure.' },
      { instructions: 'Shake before drinking and consume within 5 days.' }
    ],
    cookingTime: '1.5 hours',
    servings: 6,
    difficulty: 'Medium',
    era: 'apocalyptic',
    tags: ['beverage', 'medicinal', 'radiation treatment']
  },
  // More apocalyptic recipes can be added here
];
