
import { Recipe } from '../types/recipe';

export const additionalApocalypticRecipes: Recipe[] = [
  {
    id: 'apocalyptic-6',
    title: 'Scavenger Stew',
    slug: 'scavenger-stew',
    description: 'A hearty stew made from foraged ingredients and scavenged goods, perfect for surviving the wasteland.',
    ingredients: [
      { name: 'Assorted vegetables', quantity: '2 cups', notes: 'Foraged roots, greens, tubers' },
      { name: 'Canned goods', quantity: '1 cup', notes: 'Beans, tomatoes, corn' },
      { name: 'Dried meats or jerky', quantity: '1/2 pound' },
      { name: 'Bone broth or water', quantity: '4 cups' },
      { name: 'Foraged herbs and spices', quantity: '1 tbsp', notes: 'Whatever is available' }
    ],
    steps: [
      { instructions: 'Prepare the foraged vegetables by cleaning and chopping them into bite-sized pieces.' },
      { instructions: 'In a large pot, combine the vegetables, canned goods, dried meats, and bone broth or water.' },
      { instructions: 'Bring the stew to a boil, then reduce heat and simmer for at least 30 minutes.', note: 'Simmer until vegetables are tender and flavors have melded.' },
      { instructions: 'Season with foraged herbs and spices to taste.' },
      { instructions: 'Serve hot and enjoy the nourishing flavors of the wasteland.' }
    ],
    cookingTime: '45 minutes',
    servings: 4,
    difficulty: 'Easy',
    era: 'apocalyptic',
    tags: ['vegetarian-friendly', 'survival', 'foraging']
  },
  {
    id: 'apocalyptic-7',
    title: 'Waste-Not Wraps',
    slug: 'waste-not-wraps',
    description: 'Creative wraps made from leftover ingredients and foraged greens, minimizing waste and maximizing flavor.',
    ingredients: [
      { name: 'Leftover cooked grains', quantity: '1 cup', notes: 'Rice, quinoa, or barley' },
      { name: 'Cooked or canned beans', quantity: '1/2 cup' },
      { name: 'Chopped vegetables', quantity: '1 cup', notes: 'Fresh or preserved' },
      { name: 'Foraged edible greens', quantity: '1 handful' },
      { name: 'Salvaged tortillas or flatbreads', quantity: '2' },
      { name: 'Cooked meat or fish', quantity: '1/4 cup', notes: 'Optional' }
    ],
    steps: [
      { instructions: 'Gather your leftover cooked grains, beans, vegetables, and foraged greens.' },
      { instructions: 'If using, chop any larger pieces of vegetables or meat into smaller, more manageable sizes.', note: 'This helps create an even texture in the wrap.' },
      { instructions: 'Warm the tortillas or flatbreads if desired.' },
      { instructions: 'Lay out a tortilla or flatbread and spread a layer of cooked grains and beans over the surface.' },
      { instructions: 'Top with chopped vegetables, foraged greens, and any optional meat or fish.' },
      { instructions: 'Wrap the ingredients tightly in the tortilla or flatbread.' },
      { instructions: 'Serve immediately and enjoy the resourceful flavors of the wasteland.' }
    ],
    cookingTime: '30 minutes',
    servings: 2,
    difficulty: 'Easy',
    era: 'apocalyptic',
    tags: ['wraps', 'leftovers', 'foraging', 'resourceful', 'vegetarian-friendly']
  }
];
