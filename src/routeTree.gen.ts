/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
import { Route as rootRouteImport } from './routes/__root'
import { Route as AdminLoginRouteImport } from './routes/admin.login'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as WishlistRouteImport } from './routes/wishlist'
import { Route as ShopRouteImport } from './routes/shop'
import { Route as CartRouteImport } from './routes/cart'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ProductIdRouteImport } from './routes/product.$id'

const AdminLoginRoute = AdminLoginRouteImport.update({ id: '/admin/login', path: '/admin/login', getParentRoute: () => rootRouteImport } as any)
const AdminRoute = AdminRouteImport.update({ id: '/admin', path: '/admin', getParentRoute: () => rootRouteImport } as any)
const WishlistRoute = WishlistRouteImport.update({ id: '/wishlist', path: '/wishlist', getParentRoute: () => rootRouteImport } as any)
const ShopRoute = ShopRouteImport.update({ id: '/shop', path: '/shop', getParentRoute: () => rootRouteImport } as any)
const CartRoute = CartRouteImport.update({ id: '/cart', path: '/cart', getParentRoute: () => rootRouteImport } as any)
const AboutRoute = AboutRouteImport.update({ id: '/about', path: '/about', getParentRoute: () => rootRouteImport } as any)
const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const ProductIdRoute = ProductIdRouteImport.update({ id: '/product/$id', path: '/product/$id', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRoute
  '/cart': typeof CartRoute
  '/shop': typeof ShopRoute
  '/wishlist': typeof WishlistRoute
  '/admin/login': typeof AdminLoginRoute
  '/product/$id': typeof ProductIdRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRoute
  '/cart': typeof CartRoute
  '/shop': typeof ShopRoute
  '/wishlist': typeof WishlistRoute
  '/admin/login': typeof AdminLoginRoute
  '/product/$id': typeof ProductIdRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRoute
  '/cart': typeof CartRoute
  '/shop': typeof ShopRoute
  '/wishlist': typeof WishlistRoute
  '/admin/login': typeof AdminLoginRoute
  '/product/$id': typeof ProductIdRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/admin' | '/cart' | '/shop' | '/wishlist' | '/admin/login' | '/product/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/admin' | '/cart' | '/shop' | '/wishlist' | '/admin/login' | '/product/$id'
  id: '__root__' | '/' | '/about' | '/admin' | '/cart' | '/shop' | '/wishlist' | '/admin/login' | '/product/$id'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  AdminRoute: typeof AdminRoute
  CartRoute: typeof CartRoute
  ShopRoute: typeof ShopRoute
  WishlistRoute: typeof WishlistRoute
  AdminLoginRoute: typeof AdminLoginRoute
  ProductIdRoute: typeof ProductIdRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/admin/login': { id: '/admin/login'; path: '/admin/login'; fullPath: '/admin/login'; preLoaderRoute: typeof AdminLoginRouteImport; parentRoute: typeof rootRouteImport }
    '/admin': { id: '/admin'; path: '/admin'; fullPath: '/admin'; preLoaderRoute: typeof AdminRouteImport; parentRoute: typeof rootRouteImport }
    '/wishlist': { id: '/wishlist'; path: '/wishlist'; fullPath: '/wishlist'; preLoaderRoute: typeof WishlistRouteImport; parentRoute: typeof rootRouteImport }
    '/shop': { id: '/shop'; path: '/shop'; fullPath: '/shop'; preLoaderRoute: typeof ShopRouteImport; parentRoute: typeof rootRouteImport }
    '/cart': { id: '/cart'; path: '/cart'; fullPath: '/cart'; preLoaderRoute: typeof CartRouteImport; parentRoute: typeof rootRouteImport }
    '/about': { id: '/about'; path: '/about'; fullPath: '/about'; preLoaderRoute: typeof AboutRouteImport; parentRoute: typeof rootRouteImport }
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/product/$id': { id: '/product/$id'; path: '/product/$id'; fullPath: '/product/$id'; preLoaderRoute: typeof ProductIdRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute, AboutRoute, AdminRoute, CartRoute, ShopRoute, WishlistRoute, AdminLoginRoute, ProductIdRoute,
}
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
