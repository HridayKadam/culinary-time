
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
  category?: string;
  tags?: string[];
  calories?: number;
  protein?: string;
  carbs?: string;
  fat?: string;
  isSecret?: boolean;
  secretUnlockHint?: string;
  featured?: boolean;
  userNotes?: string;
  userModified?: boolean;
}

export interface UserRecipe extends Recipe {
  originalId?: string; // Reference to original recipe if this is a user-modified version
  createdAt: number;
  lastModified: number;
}
