export enum CategoryTranslations {
  electronics = 'Електроніка',
  home_appliances = 'Побутова техніка',
  tourism = 'Туризм',
  transport = 'Транспорт',
}

export const translateCategory = (category: string): string => {
  return CategoryTranslations[category as keyof typeof CategoryTranslations] || category
}
