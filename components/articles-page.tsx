"use client"

import { useState } from "react"
import { FileText, Search } from "lucide-react"

import { ArticlesTable } from "@/components/articles-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Articles</h1>
          </div>
          <Tabs defaultValue="generated" className="w-full">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="overflow-x-auto pb-2 md:pb-0">
                <TabsList className="inline-flex w-auto min-w-full md:w-auto p-1 bg-muted/50 backdrop-blur-sm">
                  <TabsTrigger
                    value="generated"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 whitespace-nowrap"
                  >
                    Generated Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="published"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 whitespace-nowrap"
                  >
                    Published Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="scheduled"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 whitespace-nowrap"
                  >
                    Scheduled Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="archived"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 whitespace-nowrap"
                  >
                    Archived Articles
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for Title & Keywords..."
                  className="w-full pl-8 md:w-[300px] bg-background/50 backdrop-blur-sm border-primary/20 focus-visible:ring-primary/30 transition-all focus-visible:shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <TabsContent value="generated" className="mt-6 space-y-4">
              <ArticlesTable searchQuery={searchQuery} />
            </TabsContent>
            <TabsContent value="published" className="mt-6 space-y-4">
              <div className="flex h-[300px] md:h-[400px] items-center justify-center rounded-md border border-dashed border-primary/20 bg-muted/20 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 rounded-lg bg-background/50 shadow-sm border border-primary/10">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-muted-foreground">No published articles found</div>
                  <Button variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                    Create New Article
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="scheduled" className="mt-6 space-y-4">
              <div className="flex h-[300px] md:h-[400px] items-center justify-center rounded-md border border-dashed border-primary/20 bg-muted/20 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 rounded-lg bg-background/50 shadow-sm border border-primary/10">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-muted-foreground">No scheduled articles found</div>
                  <Button variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                    Create New Article
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="archived" className="mt-6 space-y-4">
              <div className="flex h-[300px] md:h-[400px] items-center justify-center rounded-md border border-dashed border-primary/20 bg-muted/20 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 rounded-lg bg-background/50 shadow-sm border border-primary/10">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-muted-foreground">No archived articles found</div>
                  <Button variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                    Create New Article
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
