export interface FoodDrugInteraction {
  drugClass: string
  category?: string
  interaction: string
  layman: string
  scientific: string
}

export interface FoodProfile {
  id: string
  name: string
  image: string
  scientificName: string
  forms: string[]
  nutrients: string[]
  effect: string
  interactions: FoodDrugInteraction[]
  advice: string[]
  scientificBackground: string[]
}
