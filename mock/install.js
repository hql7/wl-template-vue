import { mockXHR } from "./index"

import menu from './data/menu'
const mocks = [
  {
    intercept: true,
    fetchs: menu
  }
]

mockXHR(mocks);
