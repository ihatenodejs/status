import { getStatus } from "@/util/status"
import { type StatusResponse } from "@/types/status"
import { Services } from "@/config/Services"
import { type Service } from "@/types/services"

const handler = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const serviceName = searchParams.get("service")
  const service: Service | undefined = Services.find((service) => service.name === serviceName)

  if (!service) {
    return new Response(JSON.stringify({ error: "Service not found" }), { 
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const status: StatusResponse = await getStatus(service)
  return new Response(JSON.stringify(status), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const GET = handler