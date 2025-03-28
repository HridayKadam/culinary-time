
import { Recipe } from '../types/recipe';

export const medievalRecipes: Recipe[] = [
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
    era: 'medieval',
    featured: true
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
    era: 'medieval',
    featured: true
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
  {
    id: 'medieval-4',
    title: 'Pottage of Nine Herbs',
    slug: 'nine-herbs-pottage',
    description: 'A nourishing soup believed to ward off illness and evil spirits, this medieval pottage combines nine sacred herbs.',
    ingredients: [
      { name: 'Oats', quantity: '1 cup' },
      { name: 'Leeks', quantity: '2', notes: 'Sliced thin' },
      { name: 'Fennel', quantity: '1 bulb', notes: 'Chopped' },
      { name: 'Sorrel', quantity: '1 handful', notes: 'Torn' },
      { name: 'Sage', quantity: '5 leaves', notes: 'Minced' },
      { name: 'Thyme', quantity: '3 sprigs' },
      { name: 'Mint', quantity: '7 leaves' },
      { name: 'Borage', quantity: '1 handful', notes: 'Flowers and leaves' },
      { name: 'Chamomile', quantity: '1 tbsp', notes: 'Dried flowers' },
      { name: 'Vegetable stock', quantity: '6 cups' },
      { name: 'Salt', quantity: '1 tsp' }
    ],
    steps: [
      { instructions: 'Combine oats and stock in a cauldron over medium flame.', note: 'Clay or iron pots work best for traditional flavor.' },
      { instructions: 'Bring to a gentle simmer, stirring occasionally to prevent sticking.' },
      { instructions: 'Add leeks and fennel, continue to simmer for 15 minutes.' },
      { instructions: 'One by one, add each herb, starting with thyme and sage, and ending with chamomile.', note: 'The order of herbs is important for both flavor and spiritual properties.' },
      { instructions: 'Simmer for 30 more minutes, until oats are fully softened.' },
      { instructions: 'Add salt to taste. Serve hot with a sprinkle of borage flowers on top.' }
    ],
    cookingTime: '1 hour',
    servings: 4,
    difficulty: 'Easy',
    era: 'medieval',
    tags: ['vegetarian', 'medicinal', 'soup']
  },
  {
    id: 'medieval-5',
    title: 'Blackbird Pie',
    slug: 'blackbird-pie',
    description: 'A savory pie with a surprise twist - no blackbirds are harmed in the making of this medieval-inspired dish!',
    ingredients: [
      { name: 'Flour', quantity: '3 cups', notes: 'Plus extra for dusting' },
      { name: 'Butter', quantity: '1 cup', notes: 'Cold and cubed' },
      { name: 'Salt', quantity: '1 tsp' },
      { name: 'Cold water', quantity: '6-8 tbsp' },
      { name: 'Beef', quantity: '1 pound', notes: 'Stewing beef, cubed' },
      { name: 'Chicken livers', quantity: '4 oz', notes: 'Optional but traditional' },
      { name: 'Onions', quantity: '2 medium', notes: 'Diced' },
      { name: 'Carrots', quantity: '2', notes: 'Diced' },
      { name: 'Prunes', quantity: '1/2 cup', notes: 'Pitted and chopped' },
      { name: 'Red wine', quantity: '1/2 cup' },
      { name: 'Beef stock', quantity: '1 cup' },
      { name: 'Black pepper', quantity: '1 tsp', notes: 'Freshly ground' },
      { name: 'Nutmeg', quantity: '1/4 tsp' },
      { name: 'Egg', quantity: '1', notes: 'For egg wash' }
    ],
    steps: [
      { instructions: 'Make the pastry by combining flour and salt, then cutting in the butter until mixture resembles coarse crumbs.' },
      { instructions: 'Add cold water a tablespoon at a time until dough comes together. Divide into two portions (one slightly larger), wrap and chill.' },
      { instructions: 'Brown the beef and livers in a pot, then remove and set aside.' },
      { instructions: 'In the same pot, cook onions and carrots until softened.' },
      { instructions: 'Return meat to pot, add prunes, wine, stock, and spices. Simmer for 1 hour or until meat is tender.' },
      { instructions: 'Cool the filling completely.', note: 'Hot filling will make the pastry soggy.' },
      { instructions: 'Roll out the larger portion of dough and line a deep pie dish.' },
      { instructions: 'Add the filling, then cover with the remaining dough, crimping edges to seal.' },
      { instructions: 'Cut a small hole in the center and four slits around it (for the "blackbirds" to escape).' },
      { instructions: 'Brush with beaten egg and bake at 375°F for 45 minutes until golden brown.' },
      { instructions: 'For presentation, insert 4 small pastry birds into the slits after baking, so they appear to be "singing".' }
    ],
    cookingTime: '2.5 hours',
    servings: 6,
    difficulty: 'Hard',
    era: 'medieval',
    tags: ['pie', 'meat', 'feast']
  },
  // More medieval recipes can be added here
];
