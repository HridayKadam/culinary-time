
export interface Ingredient {
  name: string;
  quantity: string;
  notes?: string;
}

export interface Step {
  instructions: string;
  note?: string;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  ingredients: Ingredient[];
  steps: Step[];
  cookingTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  era: 'medieval' | 'cyberpunk' | 'apocalyptic';
  isSecret?: boolean;
  secretUnlockHint?: string;
}
