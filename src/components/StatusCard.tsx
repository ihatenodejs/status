"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "./ui/card"
import { SiCloudflare } from "react-icons/si"
import { TbServer } from "react-icons/tb"
import { type Service } from "@/types/services"
import { useEffect, useState } from "react"
import { getStatus } from "@/util/status-client"

interface Status {
  cloudflare: "online" | "offline" | "loading" | "error"
}

async function getCloudflareStatus(service: Service, setIsCloudflareLoading: (isLoading: boolean) => void) {
  try {
    const response = await getStatus(service)
    setIsCloudflareLoading(false)
    
    if (response.error) {
      console.log("[!]", response.error)
      return "error" as Status["cloudflare"]
    }

    return (response.status === "online" ? "online" : "offline") as Status["cloudflare"]
  } catch (error) {
    setIsCloudflareLoading(false)
    console.error(error)
    return "error" as Status["cloudflare"]
  }
}

export function StatusCard({ service }: { service: Service }) {
  const [status, setStatus] = useState<Status>({
    cloudflare: "loading"
  })
  const [isCloudflareLoading, setIsCloudflareLoading] = useState(true)

  useEffect(() => {
    const checkStatus = async () => {
      const cloudflareStatus = await getCloudflareStatus(service, setIsCloudflareLoading)
      setStatus({ cloudflare: cloudflareStatus })
    }
    checkStatus()
  }, [service])

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center gap-2">
          <TbServer size={24} />
          <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="-mt-4">
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center gap-2">
            <SiCloudflare size={20} />
            <p>Cloudflare</p>
          </div>
          {status.cloudflare === "online" && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-green-500">Online</p>
            </div>
          )}
          {status.cloudflare === "offline" && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p className="text-sm text-red-500">Offline</p>
            </div>
          )}
          {status.cloudflare === "error" && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p className="text-sm text-red-500">Error</p>
            </div>
          )}
          {isCloudflareLoading && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p className="text-sm text-yellow-500">Loading</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}