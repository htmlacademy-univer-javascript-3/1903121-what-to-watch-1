export type review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
};
export type addReview = {
  id: number
  comment: string
  rating: number
};
