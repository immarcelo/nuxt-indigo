export interface IProduct {
  id: number
  title: string
  price: number
  descripton: string
  category: string
  image: string
  rating: {
    count: number
    rate: number
  }
}
