import { mockXHR } from "wl-http"

import menu from './data/menu'
const mocks = [
  {
    intercept: true,
    fetchs: menu
  }
]

mockXHR(mocks);
