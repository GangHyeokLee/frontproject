interface RouteType {
  path: string;
  route: string;
}

interface Routes {
  [key: string]: RouteType;
}

export const ROUTES: Routes = Object.freeze({
  HOME: {
    path: '/',
    route: "MainPage"
  },
  LOGIN: {
    path: '/login',
    route: "LoginPage"
  },
  REGISTER: {
    path: '/register',
    route: "SignUpSelectPage"
  },
  USER_REGISTER: {
    path: '/register/user',
    route: "SignUpNormal"
  },
  SELLER_REGISTER: {
    path: '/register/seller',
    route: "SignUpSeller"
  },
  PRODUCTS: {
    path: '/products',
    route: "ProductList"
  },
  PRODUCT_DETAIL: {
    path: '/product/:id',
    route: "ProductDetail"
  },
  ADD: {
    path: '/add',
    route: "AddProduct"
  },
  EDIT: {
    path: '/edit/:id',
    route: "AddProduct"
  },
  CART: {
    path: '/cart',
    route: "OrderFunnel"
  },
  PAYMENT: {
    path: '/payment',
    route: "OrderFunnel"
  },
  RECEIPT: {
    path: '/receipt/:id',
    route: "ReceiptPage"
  }
});

