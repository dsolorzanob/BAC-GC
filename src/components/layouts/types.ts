import type { LucideIcon } from 'lucide-react'
import type { LinkProps } from 'react-router-dom'

 interface SidebarData {
  user: {
    name: string
    email: string
    avatar: string
  }
  teams: Array<{
    name: string
    logo: LucideIcon
    plan: string
  }>
  navGroups: Array<{
    title: string
    items: Array<{
      title: string
      url: string
      icon: LucideIcon
    }>
  }>
} 

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
  disabled?: boolean
}

type NavLink = BaseNavItem & {
  url: LinkProps['to']
  items?: never
}

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps['to'] })[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  items: NavItem[]
}



export type { NavGroup, NavItem, NavCollapsible, NavLink, SidebarData }