"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  ChevronDown,
  FileText,
  FolderOpen,
  HelpCircle,
  LayoutDashboard,
  Link2,
  MessageSquare,
  PenTool,
  Settings,
  ShoppingCart,
  User,
  Users,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppSidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function AppSidebar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: AppSidebarProps) {
  const [activeArticleSubmenu, setActiveArticleSubmenu] = useState(true);

  return (
    <TooltipProvider delayDuration={300}>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader className="border-b border-border/40 pb-2 bg-gradient-to-b from-background to-muted/30">
          <div className="flex items-center px-4 py-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent relative">
                abun
                <span className="absolute -inset-1 rounded-lg blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 -z-10"></span>
              </div>
            </Link>
            <div className="ml-auto flex items-center gap-2">
              <SidebarTrigger />
            </div>
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg" tooltip="Workspace">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-gradient-to-br from-pink-500 to-violet-500 text-white">
                          A
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-medium truncate max-w-[120px]">
                          amazon.com
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Workspace
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="ml-auto h-4 w-4 opacity-50 shrink-0" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Avatar className="mr-2 h-4 w-4">
                      <AvatarFallback className="bg-gradient-to-br from-pink-500 to-violet-500 text-white text-[10px]">
                        A
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate">amazon.com</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Avatar className="mr-2 h-4 w-4">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-[10px]">
                        E
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate">ebay.com</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Avatar className="mr-2 h-4 w-4">
                      <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-[10px]">
                        W
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate">walmart.com</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-0">
                    <button className="flex w-full items-center px-2 py-1.5 text-sm">
                      <PenTool className="mr-2 h-4 w-4" />
                      <span>Create Workspace</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Dashboard">
                    <Link href="/">
                      <LayoutDashboard className="h-4 w-4 shrink-0" />
                      <span className="truncate">Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton
                    onClick={() =>
                      setActiveArticleSubmenu(!activeArticleSubmenu)
                    }
                    isActive={activeArticleSubmenu}
                    tooltip="Articles"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="truncate">Articles</span>
                    <ChevronDown
                      className={cn(
                        "ml-auto h-4 w-4 transition-transform shrink-0",
                        activeArticleSubmenu && "rotate-180"
                      )}
                    />
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Articles</TooltipContent>
              </Tooltip>
              {activeArticleSubmenu && (
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Create Article
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Create Article
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild isActive>
                          <Link
                            href="/"
                            className="relative overflow-hidden group truncate"
                          >
                            <span className="relative z-10 truncate">
                              Generated Articles
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Generated Articles
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Keyword Projects
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Keyword Projects
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            AI Keyword to Article
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        AI Keyword to Article
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Steal Competitor Keyword
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Steal Competitor Keyword
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Import Keyword from GSC
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Import Keyword from GSC
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Manual Keyword to Article
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Manual Keyword to Article
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Bulk Keyword to Article
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Bulk Keyword to Article
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Longtail Keyword to Article
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Longtail Keyword to Article
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="/" className="truncate">
                            Article Settings
                          </Link>
                        </SidebarMenuSubButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        Article Settings
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Auto Blog">
                    <Link href="/">
                      <BarChart3 className="h-4 w-4 shrink-0" />
                      <span className="truncate">Auto Blog</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Auto Blog</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Internal Links">
                    <Link href="/">
                      <Link2 className="h-4 w-4 shrink-0" />
                      <span className="truncate">Internal Links</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Internal Links</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Free Backlinks">
                    <Link href="/">
                      <Link2 className="h-4 w-4 shrink-0" />
                      <span className="truncate">Free Backlinks</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Free Backlinks</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Integrations">
                    <Link href="/">
                      <Zap className="h-4 w-4 shrink-0" />
                      <span className="truncate">Integrations</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Integrations</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Subscription">
                    <Link href="/">
                      <Users className="h-4 w-4 shrink-0" />
                      <span className="truncate">Subscription</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Subscription</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Affiliate Program">
                    <Link href="/">
                      <ShoppingCart className="h-4 w-4 shrink-0" />
                      <span className="truncate">Affiliate Program</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Affiliate Program</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Help Center">
                    <Link href="/">
                      <HelpCircle className="h-4 w-4 shrink-0" />
                      <span className="truncate">Help Center</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Help Center</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Updates">
                    <Link href="/">
                      <FolderOpen className="h-4 w-4 shrink-0" />
                      <span className="truncate">Updates</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Updates</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Live Chat Support">
                    <Link href="/">
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      <span className="truncate">Live Chat Support</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Live Chat Support</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t border-border/40 pt-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Profile">
                    <Link href="/">
                      <User className="h-4 w-4 shrink-0" />
                      <span className="truncate">Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Profile</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="/">
                      <Settings className="h-4 w-4 shrink-0" />
                      <span className="truncate">Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  );
}
