import OrderList from "@/components/dashboardTabs/orderlist"
import AddProduct from "@/components/dashboardTabs/addproduct"

export const navList = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Menu',
    route: '/menu'
  },
  {
    name: 'Contact',
    route: '/contact'
  },
  {
    name: 'Dashboard',
    route: '/dashboard'
  },
]

export const menuList = [
  {
    name: 'Bundle'
  },
  {
    name: 'Burger'
  },
  {
    name: 'Pizza'
  },
  {
    name: 'Fries'
  },
  {
    name: 'Drinks'
  },
]

export const DashBoard = [
  {
    name: 'Orders',
    tabpage: <OrderList/>
  },
  {
    name: 'Product',
    tabpage: <AddProduct/>
  },
  {
    name: 'Add Product',
    tabpage: <AddProduct/>
  },
]