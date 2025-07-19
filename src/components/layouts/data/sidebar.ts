import {
    LayoutDashboard,
    Users,
    Frame,
    ChartNoAxesCombined,
    Settings,
  } from 'lucide-react'
  import { Command, GalleryVerticalEnd } from 'lucide-react'
import type { SidebarData } from '../types'
  export const sidebarData: SidebarData = {
    user: {
      name: 'admin',
      email: 'admin@gmail.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'Shadcn Admin',
        logo: Command,
        plan: 'Vite + ShadcnUI',
      },
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
      },
    ],
    navGroups: [
      {
        title: 'General',
        items: [
          {
            title: 'Dashboard',
            url: '/admin',
            icon: LayoutDashboard,
          },
        ],
      },
      {
        title: 'Publicidades',
        items: [
          {
            title: 'Diseño de publicidades',
            url: '/admin/publicidades',
            icon: Frame,
          },
        ],
      },
      {
        title: 'Consultas',
        items: [
          {
            title: 'Consultas',
            url: '/admin/consultas',
            icon: ChartNoAxesCombined,
          },
        ],
      },
      {
        title: 'Administración',
        items: [
          {
            title: 'Usuarios',
            url: '/admin/usuarios',
            icon: Users,
          },
        ],
      },
      {
        title: 'Otras',
        items: [
          {
            title: 'Configuración',
            url: '/admin/configuracion',
            icon: Settings,
          },
        ],
      },
    ],
  }