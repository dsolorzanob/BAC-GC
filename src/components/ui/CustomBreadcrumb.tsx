import * as React from "react"
import { ChevronRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  isCurrentPage?: boolean
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

export function CustomBreadcrumb({
  items,
  separator = <ChevronRight />,
  className,
}: CustomBreadcrumbProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrentPage || index === items.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink 
                  href={item.href || "#"}
                  className="hover:text-info transition-colors duration-200"
                >
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// Alternative component with simpler props for common use cases
interface SimpleBreadcrumbProps {
  items: Array<{ label: string; href?: string }>
  currentPage: string
  separator?: React.ReactNode
  className?: string
}

export function SimpleBreadcrumb({
  items,
  currentPage,
  separator = <ChevronRight />,
  className,
}: SimpleBreadcrumbProps) {
  const breadcrumbItems: BreadcrumbItem[] = [
    ...items,
    { label: currentPage, isCurrentPage: true },
  ]

  return (
    <CustomBreadcrumb
      items={breadcrumbItems}
      separator={separator}
      className={className}
    />
  )
} 