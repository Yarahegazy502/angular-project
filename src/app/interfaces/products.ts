export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: IProductRate
}

interface IProductRate {
  rate: number,
  count: number
}
