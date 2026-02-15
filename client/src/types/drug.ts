export interface DrugFoodInteraction {
  foodCategory: string
  examples?: string
  interaction: string
  layman: string
  scientific: string
}

export interface DrugProfile {
  id: string
  name: string
  image: string
  drugClass: string
  system: string
  uses: string[]
  interactions: DrugFoodInteraction[]
  advice: string[]
  scientificBackground: string[]
}
