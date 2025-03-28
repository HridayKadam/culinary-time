
import { Recipe } from '../types/recipe';

export const cyberpunkRecipes: Recipe[] = [
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
    era: 'cyberpunk',
    featured: true
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
    era: 'cyberpunk',
    featured: true
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
  {
    id: 'cyberpunk-4',
    title: 'Neural Network Nachos',
    slug: 'neural-network-nachos',
    description: 'Interactive snack food that changes flavor profiles based on your current emotional state.',
    ingredients: [
      { name: 'Smart corn chips', quantity: '200g', notes: 'With embedded flavor-shifting nanites' },
      { name: 'Mood-sensing cheese sauce', quantity: '150ml', notes: 'Changes spice level based on stress levels' },
      { name: 'Lab-grown guacamole', quantity: '100g', notes: 'Perfect ripeness every time' },
      { name: 'Synth-bean protein', quantity: '75g', notes: 'Texture adapts to your preference' },
      { name: 'Neuro-salsa', quantity: '100ml', notes: 'Memory-enhancing tomato blend' },
      { name: 'Serotonin-boosting sour cream', quantity: '50g' },
      { name: 'Dopamine jalapeños', quantity: '5', notes: 'Sliced' },
      { name: 'Biochemical cilantro', quantity: '2 tbsp', notes: 'Genetically modified to taste good to everyone' }
    ],
    steps: [
      { instructions: 'Calibrate your smart plate by scanning your retina.', note: 'This allows the plate to read your current emotional state.' },
      { instructions: 'Layer smart corn chips on the plate in a specific geometric pattern.', note: 'The pattern helps optimize the nanite distribution.' },
      { instructions: 'Heat mood-sensing cheese sauce to exactly 63°C and pour over chips.' },
      { instructions: 'Add synth-bean protein while it\'s still reconfiguring for optimal texture.' },
      { instructions: 'Layer neuro-salsa, lab-grown guacamole, and serotonin-boosting sour cream in triangular segments.' },
      { instructions: 'Scatter dopamine jalapeños and biochemical cilantro across the top.' },
      { instructions: 'Allow the dish 30 seconds to scan and adapt to your brain chemistry before eating.', note: 'You may notice the colors shifting slightly as it calibrates.' },
      { instructions: 'Consume within 15 minutes before the smart ingredients lose their adaptive properties.' }
    ],
    cookingTime: '10 minutes',
    servings: 2,
    difficulty: 'Medium',
    era: 'cyberpunk',
    tags: ['interactive', 'mood-enhancing', 'snack']
  },
  {
    id: 'cyberpunk-5',
    title: 'Holographic Sushi',
    slug: 'holographic-sushi',
    description: 'Artisan sushi that projects visual stories while you eat, enhancing the flavor experience with synchronized visual stimuli.',
    ingredients: [
      { name: 'AR-enhanced rice', quantity: '2 cups', notes: 'Infused with micro-projectors' },
      { name: 'Lab-cultivated fish protein', quantity: '200g', notes: 'Texture and flavor of tuna' },
      { name: 'Synthetic nori', quantity: '5 sheets', notes: 'With embedded conductive circuits' },
      { name: 'Digital wasabi', quantity: '15g', notes: 'Intensity adjusts to preferred spice level' },
      { name: 'Smart ginger', quantity: '30g', notes: 'Changes color based on freshness' },
      { name: 'Memory-enhancing soy sauce', quantity: '50ml', notes: 'Contains neural boosters' },
      { name: 'Edible circuit paste', quantity: '10g', notes: 'For connecting the visual components' },
      { name: 'Flavor-amplifying microgreens', quantity: '1 handful' }
    ],
    steps: [
      { instructions: 'Boot up your sushi-preparation surface and select "Holographic Mode".', note: 'Make sure your neural interface is paired with the surface.' },
      { instructions: 'Combine AR-enhanced rice with 2 tbsp of the edible circuit paste, mixing gently.', note: 'Over-mixing will damage the micro-projectors.' },
      { instructions: 'Lay synthetic nori sheets on the smart surface to program them with your chosen visual story.' },
      { instructions: 'Shape rice into rectangles, making a small depression for the fish protein.' },
      { instructions: 'Place lab-cultivated fish protein on each rice rectangle.' },
      { instructions: 'Wrap with programmed nori, using remaining circuit paste at the seam to complete the circuit.' },
      { instructions: 'Arrange on a conductive plate and activate by drizzling with a few drops of memory-enhancing soy sauce.' },
      { instructions: 'Garnish with flavor-amplifying microgreens and serve with digital wasabi and smart ginger.' },
      { instructions: 'The holographic display will activate when the diner\'s chopsticks (or neural fork) make contact with the sushi.' }
    ],
    cookingTime: '25 minutes',
    servings: 2,
    difficulty: 'Hard',
    era: 'cyberpunk',
    tags: ['augmented reality', 'sensory', 'futuristic']
  },
  // More cyberpunk recipes can be added here
];
