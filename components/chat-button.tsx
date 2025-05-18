"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

import { ChatModal } from "@/components/chat-modal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full p-0 shadow-lg transition-all",
          "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
          "animate-fade-in",
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 animate-in zoom-in" />
        ) : (
          <MessageSquare className="h-6 w-6 animate-in zoom-in" />
        )}
        <span className="sr-only">Open Chat</span>
      </Button>
      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
