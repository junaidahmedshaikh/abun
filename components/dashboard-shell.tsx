"use client"

import type React from "react"

import { useState } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { ChatButton } from "@/components/chat-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function DashboardShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <AppSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <SidebarInset className="flex-1">
          <div className="absolute right-4 top-4 z-10">
            <ThemeToggle />
          </div>
          <main className="flex-1 overflow-hidden">{children}</main>
          <ChatButton />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
