
import { Recipe } from '../types/recipe';

export const additionalCyberpunkRecipes: Recipe[] = [
  {
    id: 'cyberpunk-6',
    title: 'Binary Burger',
    slug: 'binary-burger',
    description: 'A dual-state burger that exists in two flavor profiles simultaneously, switching between them as you eat.',
    ingredients: [
      { name: 'Quantum-state protein patty', quantity: '1', notes: 'Lab-grown with state-shifting proteins' },
      { name: 'Reality-bending bun', quantity: '1', notes: 'Spliced with perception-altering compounds' },
      { name: 'Schrödinger's cheese', quantity: '2 slices', notes: 'Both melted and solid simultaneously' },
      { name: 'Paradox sauce', quantity: '2 tbsp', notes: 'Sweet and spicy at the same time' },
      { name: 'Probability lettuce', quantity: '1 leaf', notes: 'Harvested from quantum farms' },
      { name: 'Uncertainty tomato', quantity: '2 slices', notes: 'Position and flavor cannot be simultaneously known' },
      { name: 'Flavor-encrypted pickles', quantity: '3 slices', notes: 'Each bite reveals a different encrypted flavor' },
      { name: 'Neural-interface sesame seeds', quantity: '1 tsp', notes: 'Connects directly to taste receptors' }
    ],
    steps: [
      { instructions: 'Sync your neural taste implant with the cooking interface.', note: 'Required to experience the full dual-state effect.' },
      { instructions: 'Heat non-Euclidean grill to exactly 101°C in this dimension.', note: 'The temperature will appear different depending on your perspective.' },
      { instructions: 'Place quantum patty on grill until it reaches the uncertain state.', note: 'The patty should flicker between rare and well-done.' },
      { instructions: 'Apply Schrödinger's cheese and observe without measuring until it exists in dual states.' },
      { instructions: 'Toast reality-bending bun until the probability function collapses.', note: 'You'll know it's ready when you can't tell if it's toasted or not.' },
      { instructions: 'Layer paradox sauce on both bun halves using a quantum spatula.' },
      { instructions: 'Assemble burger in reversed order from how you think it should be.', note: 'This creates the quantum entanglement necessary for flavor shifting.' },
      { instructions: 'Sprinkle neural-interface sesame seeds as you take your first bite.', note: 'Each person will experience a completely different burger based on their brainwave patterns.' }
    ],
    cookingTime: 'Both 15 minutes and 3 hours simultaneously',
    servings: 'Either 1 or 0',
    difficulty: 'Medium',
    era: 'cyberpunk',
    tags: ['quantum', 'reality-bending', 'fast food']
  },
  {
    id: 'cyberpunk-7',
    title: 'Encrypted Espresso',
    slug: 'encrypted-espresso',
    description: 'A high-security stimulant that unlocks different cognitive enhancements based on your neural cryptographic key.',
    ingredients: [
      { name: 'Quantum-secured coffee beans', quantity: '20g', notes: 'DNA-locked to authorized users' },
      { name: 'Nano-purified water', quantity: '30ml', notes: 'Filtered at the molecular level' },
      { name: 'Neural-stimulating sweetener', quantity: '1 capsule', notes: 'Personalized psychoactive profile' },
      { name: 'Memory-enhancing milk foam', quantity: '10ml', notes: 'Optional, increases recall by 43%' },
      { name: 'Cognitive-acceleration powder', quantity: '1 pinch', notes: 'Time-release formula' },
      { name: 'Biometric authentication spice', quantity: '1 dash', notes: 'Verifies authorized consumption' }
    ],
    steps: [
      { instructions: 'Scan your retina to unlock the quantum-secured bean container.', note: 'Unauthorized access attempts will denature the compounds.' },
      { instructions: 'Grind beans using a zero-knowledge authentication grinder.', note: 'The grind adjusts based on your current neural capacity needs.' },
      { instructions: 'Heat nano-purified water to precisely 92.7°C using quantum calibration.' },
      { instructions: 'Apply 9 bars of pressure through the grounds for exactly 24.7 seconds.', note: 'This pressurization sequence encodes your specific cognitive enhancement pattern.' },
      { instructions: 'Dissolve your personal neural-stimulating sweetener capsule.', note: 'Each capsule is uniquely keyed to your neural pathways.' },
      { instructions: 'Apply biometric authentication spice in a fractal pattern on top.', note: 'The pattern should match your unique thought signature.' },
      { instructions: 'Add memory-enhancing milk foam if additional recall is needed for today's tasks.' },
      { instructions: 'Consume within 127 seconds before encryption expires.', note: 'Effects include 4-8 hours of accelerated cognition with proper authorization.' }
    ],
    cookingTime: '4.7 minutes',
    servings: 1,
    difficulty: 'Easy',
    era: 'cyberpunk',
    tags: ['stimulant', 'encrypted', 'cognitive', 'beverage']
  },
  {
    id: 'cyberpunk-8',
    title: 'Firewall Fondue',
    slug: 'firewall-fondue',
    description: 'A communal dish that protects against digital intrusion, popular among hackers during sensitive operations.',
    ingredients: [
      { name: 'Security-enhanced cheese blend', quantity: '400g', notes: 'Multi-layered protection profile' },
      { name: 'Anti-malware wine', quantity: '150ml', notes: 'Virus scanning properties' },
      { name: 'Zero-day garlic', quantity: '3 cloves', notes: 'Undiscovered by surveillance systems' },
      { name: 'Encryption herbs', quantity: '1 tbsp', notes: 'Proprietary blend' },
      { name: 'Neural-firewall chili', quantity: '1 tsp', notes: 'Heat level scales with threat detection' },
      { name: 'Intrusion-detection breadcubes', quantity: '300g', notes: 'Alerts to unauthorized access attempts' },
      { name: 'Biometric vegetable array', quantity: 'Assorted', notes: 'For dipping' },
      { name: 'Authentication salt', quantity: '1 tsp', notes: 'Validates user identity' }
    ],
    steps: [
      { instructions: 'Establish a secure perimeter around your dining space.', note: 'Check for surveillance devices before proceeding.' },
      { instructions: 'Rub the fondue pot with zero-day garlic to establish base security layer.' },
      { instructions: 'Heat anti-malware wine until simmering, scanning for contaminants.' },
      { instructions: 'Gradually add security-enhanced cheese, stirring in a cryptographic pattern.', note: 'The specific stirring pattern implements your personal encryption algorithm.' },
      { instructions: 'Add encryption herbs and authentication salt when cheese is 70% melted.' },
      { instructions: 'Increase heat and add neural-firewall chili according to current threat level.' },
      { instructions: 'Maintain at precisely 71°C to keep security protocols active.', note: 'Temperature fluctuations may create vulnerabilities.' },
      { instructions: 'Serve immediately with intrusion-detection breadcubes and biometric vegetable array.', note: 'Each guest must authenticate before dipping by touching the pot's integrated scanner.' },
      { instructions: 'If the cheese ever separates, a security breach has occurred. Dispose of immediately.' }
    ],
    cookingTime: '30 minutes',
    servings: 4,
    difficulty: 'Medium',
    era: 'cyberpunk',
    tags: ['security', 'communal', 'hacker culture']
  },
  // Add more cyberpunk recipes here
];
