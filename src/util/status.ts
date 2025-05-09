import { type Service } from "@/types/services"
import { type StatusResponse } from "@/types/status"

async function checkServiceStatus(service: Service): Promise<StatusResponse> {
  try {
    const response = await fetch(service.url)
    return {
      status: response.status === 200 ? "online" : "offline",
    }
  } catch {
    return {
      status: "offline",
    }
  }
}

export async function getStatus(service: Service): Promise<StatusResponse> {
  return checkServiceStatus(service)
}
