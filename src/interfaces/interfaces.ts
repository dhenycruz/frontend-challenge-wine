export interface Product {
  id: number,
  image: string,
  name: string,
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
  type: string,
  classification: string,
  volume: string,
  size: string,
  Rating: number,
  rating: number,
  country: string,
  region: string,
  flag: string,
  sommelierComment: string,
}

export interface Response {
  data: {
    page: number,
    totalPages: number,
    itemsPerPage: number,
    totalItems: number,
    items: Product[],
  }
}

export interface ReturnProducts {
  page: number,
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: Product[],
}
