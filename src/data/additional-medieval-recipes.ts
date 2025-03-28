
import { Recipe } from '../types/recipe';

export const additionalMedievalRecipes: Recipe[] = [
  {
    id: 'medieval-6',
    title: 'Knight\'s Haunch',
    slug: 'knights-haunch',
    description: 'A grand roasted leg of meat fit for warriors returning from battle, seasoned with herbs from the castle garden.',
    ingredients: [
      { name: 'Lamb or venison leg', quantity: '1 whole', notes: '5-6 pounds' },
      { name: 'Garlic', quantity: '6 cloves', notes: 'Sliced' },
      { name: 'Rosemary', quantity: '3 sprigs' },
      { name: 'Thyme', quantity: '4 sprigs' },
      { name: 'Sage', quantity: '5 leaves', notes: 'Chopped' },
      { name: 'Salt', quantity: '2 tbsp', notes: 'Sea salt' },
      { name: 'Honey', quantity: '3 tbsp', notes: 'For glazing' },
      { name: 'Wine', quantity: '1 cup', notes: 'Red, preferably aged' },
      { name: 'Black pepper', quantity: '1 tsp', notes: 'Freshly ground, if available' }
    ],
    steps: [
      { instructions: 'Make small incisions all over the meat and insert garlic slices.' },
      { instructions: 'Mix salt, chopped sage, and black pepper, then rub thoroughly all over the meat.' },
      { instructions: 'Allow meat to rest and absorb seasonings for at least 2 hours.', note: 'Longer is better for flavor development.' },
      { instructions: 'Prepare a large fire in the hearth or pit, allowing it to develop good coals.' },
      { instructions: 'Place the meat on a spit above the coals, not directly in flames.' },
      { instructions: 'Rotate slowly and continuously, basting occasionally with wine.', note: 'A squire or apprentice is traditionally assigned this task.' },
      { instructions: 'After 1 hour, brush with honey and continue roasting.' },
      { instructions: 'Add rosemary and thyme sprigs directly to the coals for aromatic smoke.' },
      { instructions: 'Cook until juices run clear when pierced in the thickest part.', note: 'Approximately 20 minutes per pound.' },
      { instructions: 'Rest the meat for 20 minutes before carving and serving.' }
    ],
    cookingTime: '3-4 hours',
    servings: 8,
    difficulty: 'Hard',
    era: 'medieval',
    tags: ['feast', 'meat', 'celebration']
  },
  {
    id: 'medieval-7',
    title: 'Trencher Bread',
    slug: 'trencher-bread',
    description: 'A dense, flat loaf designed to serve as an edible plate for meats and stews. The original disposable dinnerware!',
    ingredients: [
      { name: 'Rye flour', quantity: '4 cups' },
      { name: 'Wheat flour', quantity: '2 cups', notes: 'Coarsely ground' },
      { name: 'Salt', quantity: '1 tbsp' },
      { name: 'Water', quantity: '2 cups', notes: 'Warm' },
      { name: 'Sourdough starter', quantity: '1/2 cup', notes: 'Active' },
      { name: 'Ale', quantity: '1/4 cup', notes: 'For flavor' },
      { name: 'Honey', quantity: '1 tbsp', notes: 'Optional' }
    ],
    steps: [
      { instructions: 'Combine flours and salt in a large wooden bowl.' },
      { instructions: 'Mix sourdough starter with warm water and ale.' },
      { instructions: 'Create a well in the center of the flour and pour in the liquid mixture.' },
      { instructions: 'Add honey if using, then stir with a wooden spoon until dough forms.' },
      { instructions: 'Turn onto a floured surface and knead vigorously for 10 minutes.', note: 'The dough should be quite stiff.' },
      { instructions: 'Shape into round, flat loaves about 8 inches across and 1 inch thick.' },
      { instructions: 'Let rise in a warm place for 1-2 hours, or until somewhat increased in size.', note: 'These loaves won\'t rise much due to the dense nature.' },
      { instructions: 'Score the tops with a cross pattern using a sharp knife.' },
      { instructions: 'Bake in a hot oven until firm and golden, about 30-40 minutes.', note: 'The bread should sound hollow when tapped on the bottom.' },
      { instructions: 'Cool completely before using as a trencher for serving meat and sauce.' }
    ],
    cookingTime: '3 hours',
    servings: 4,
    difficulty: 'Medium',
    era: 'medieval',
    tags: ['bread', 'utensil', 'staple']
  },
  {
    id: 'medieval-8',
    title: 'Hypocras Spiced Wine',
    slug: 'hypocras-spiced-wine',
    description: 'A luxurious spiced wine served at noble feasts, named after Hippocrates and thought to aid digestion.',
    ingredients: [
      { name: 'Red wine', quantity: '1 bottle', notes: 'Full-bodied' },
      { name: 'Honey', quantity: '1/2 cup' },
      { name: 'Cinnamon sticks', quantity: '2' },
      { name: 'Ginger root', quantity: '1 inch piece', notes: 'Sliced' },
      { name: 'Cardamom pods', quantity: '5', notes: 'Lightly crushed' },
      { name: 'Grains of paradise', quantity: '1/4 tsp', notes: 'Or black pepper if unavailable' },
      { name: 'Nutmeg', quantity: '1/4 tsp', notes: 'Grated' },
      { name: 'Cloves', quantity: '5 whole' },
      { name: 'Long pepper', quantity: '2', notes: 'Optional, if available' }
    ],
    steps: [
      { instructions: 'Pour wine into a non-reactive pot.' },
      { instructions: 'Add honey and stir until dissolved.' },
      { instructions: 'Add all spices and bring to a bare simmer.', note: 'Do not boil or the alcohol will evaporate too quickly.' },
      { instructions: 'Remove from heat, cover, and let steep for at least 1 hour.', note: 'Traditionally steeped overnight for fuller flavor.' },
      { instructions: 'Strain through a fine cloth (traditionally a "Hippocratic sleeve").', note: 'Multiple strainings will produce a clearer drink.' },
      { instructions: 'Pour into a clean vessel for storage.' },
      { instructions: 'Serve warm in small cups, as it is quite potent.', note: 'Traditionally served at the beginning or end of a feast.' }
    ],
    cookingTime: '1-12 hours',
    servings: 8,
    difficulty: 'Easy',
    era: 'medieval',
    tags: ['beverage', 'spiced', 'noble']
  },
  // Add more medieval recipes here
];
