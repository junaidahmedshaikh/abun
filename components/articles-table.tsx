"use client"

import { useState } from "react"
import { ArrowUpDown, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample data based on the screenshot
const articles = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 4575,
    createdOn: "20 hours ago",
    status: "draft",
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 3480,
    createdOn: "21 hours ago",
    status: "draft",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 2676,
    createdOn: "a day ago",
    status: "draft",
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant",
    traffic: 2900,
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "draft",
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1793,
    createdOn: "---",
    status: "draft",
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: 3600,
    words: 2647,
    createdOn: "---",
    status: "draft",
  },
  {
    id: 7,
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks",
    traffic: 8100,
    words: 2261,
    createdOn: "---",
    status: "draft",
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: 880,
    words: 1543,
    createdOn: "---",
    status: "draft",
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1974,
    createdOn: "---",
    status: "draft",
  },
]

interface ArticlesTableProps {
  searchQuery: string
}

export function ArticlesTable({ searchQuery }: ArticlesTableProps) {
  const [selectedArticles, setSelectedArticles] = useState<number[]>([])
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [entriesPerPage, setEntriesPerPage] = useState("10")

  // Filter articles based on search query
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keyword.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort articles based on column and direction
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (!sortColumn) return 0

    let valueA, valueB

    switch (sortColumn) {
      case "title":
        valueA = a.title
        valueB = b.title
        break
      case "keyword":
        valueA = a.keyword
        valueB = b.keyword
        break
      case "traffic":
        valueA = a.traffic
        valueB = b.traffic
        break
      case "words":
        valueA = a.words
        valueB = b.words
        break
      case "createdOn":
        valueA = a.createdOn
        valueB = b.createdOn
        break
      default:
        return 0
    }

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleSelectAll = () => {
    if (selectedArticles.length === sortedArticles.length) {
      setSelectedArticles([])
    } else {
      setSelectedArticles(sortedArticles.map((article) => article.id))
    }
  }

  const handleSelectArticle = (id: number) => {
    if (selectedArticles.includes(id)) {
      setSelectedArticles(selectedArticles.filter((articleId) => articleId !== id))
    } else {
      setSelectedArticles([...selectedArticles, id])
    }
  }

  // Mobile card view for articles
  const MobileArticleCard = ({ article }: { article: (typeof articles)[0] }) => (
    <div className="mb-4 rounded-lg border border-primary/10 bg-card/80 backdrop-blur-sm p-4 shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          <Checkbox
            checked={selectedArticles.includes(article.id)}
            onCheckedChange={() => handleSelectArticle(article.id)}
            aria-label={`Select ${article.title}`}
            className="mr-2"
          />
          <h3 className="font-medium line-clamp-2">{article.title}</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative flex h-6 w-6 items-center justify-center ml-2 shrink-0">
                <div
                  className={`absolute inset-0 rounded-full ${
                    article.status === "published"
                      ? "bg-green-100 dark:bg-green-900/30"
                      : "bg-blue-100 dark:bg-blue-900/30"
                  }`}
                ></div>
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    article.status === "published" ? "bg-green-500 animate-pulse" : "bg-blue-500"
                  } shadow-[0_0_5px_rgba(59,130,246,0.5)]`}
                ></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{article.status === "published" ? "Published" : "Draft"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
        <div>
          <span className="text-muted-foreground">Keyword:</span>
          <div className="font-medium">{article.keyword}</div>
          <div className="text-xs text-muted-foreground">[{article.traffic.toLocaleString()}]</div>
        </div>
        <div>
          <span className="text-muted-foreground">Words:</span>
          <div className="font-medium">{article.words}</div>
        </div>
        <div>
          <span className="text-muted-foreground">Created:</span>
          <div className="font-medium">{article.createdOn}</div>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full text-blue-500 border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 transition-all hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] group"
      >
        <Eye className="mr-1 h-4 w-4 group-hover:animate-pulse" />
        View
      </Button>
    </div>
  )

  return (
    <div className="space-y-4">
      {/* Desktop view */}
      <div className="hidden md:block rounded-md border border-primary/10 bg-card/80 backdrop-blur-sm shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="[&_tr:hover]:bg-primary/5">
            <TableHeader className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedArticles.length === sortedArticles.length && sortedArticles.length > 0}
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all articles"
                  />
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("title")}
                    className="flex items-center gap-1 font-medium"
                  >
                    Article Title
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("keyword")}
                    className="flex items-center gap-1 font-medium"
                  >
                    Keyword [Traffic]
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("words")}
                    className="flex items-center gap-1 font-medium"
                  >
                    Words
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("createdOn")}
                    className="flex items-center gap-1 font-medium"
                  >
                    Created On
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-center">Action</TableHead>
                <TableHead className="text-center">Publish</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedArticles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No articles found.
                  </TableCell>
                </TableRow>
              ) : (
                sortedArticles.map((article) => (
                  <TableRow key={article.id} className="group">
                    <TableCell>
                      <Checkbox
                        checked={selectedArticles.includes(article.id)}
                        onCheckedChange={() => handleSelectArticle(article.id)}
                        aria-label={`Select ${article.title}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium max-w-[300px] truncate" title={article.title}>
                      {article.title}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="truncate" title={article.keyword}>
                          {article.keyword}
                        </span>
                        <span className="text-sm text-muted-foreground">[{article.traffic.toLocaleString()}]</span>
                      </div>
                    </TableCell>
                    <TableCell>{article.words}</TableCell>
                    <TableCell>{article.createdOn}</TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-500 border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 transition-all hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] group"
                      >
                        <Eye className="mr-1 h-4 w-4 group-hover:animate-pulse" />
                        View
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex justify-center">
                              <div className="relative flex h-6 w-6 items-center justify-center">
                                <div
                                  className={`absolute inset-0 rounded-full ${
                                    article.status === "published"
                                      ? "bg-green-100 dark:bg-green-900/30"
                                      : "bg-blue-100 dark:bg-blue-900/30"
                                  }`}
                                ></div>
                                <div
                                  className={`h-2.5 w-2.5 rounded-full ${
                                    article.status === "published" ? "bg-green-500 animate-pulse" : "bg-blue-500"
                                  } shadow-[0_0_5px_rgba(59,130,246,0.5)]`}
                                ></div>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{article.status === "published" ? "Published" : "Draft"}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {sortedArticles.length === 0 ? (
          <div className="text-center p-4 border border-dashed rounded-md">No articles found.</div>
        ) : (
          sortedArticles.map((article) => <MobileArticleCard key={article.id} article={article} />)
        )}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="whitespace-nowrap">
            Total {sortedArticles.length} Article{sortedArticles.length !== 1 ? "s" : ""} | Show
          </span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="h-8 w-16">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="whitespace-nowrap">per page</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">1 / 1</span>
        </div>
      </div>
    </div>
  )
}
