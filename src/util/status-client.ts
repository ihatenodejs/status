import { type Service } from "@/types/services"
import { type StatusResponse } from "@/types/status"

export async function getStatus(service: Service): Promise<StatusResponse> {
  const response = await fetch(`/api/status?service=${service.name}`)
  return response.json()
}
