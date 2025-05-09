import { StatusCard } from "@/components/StatusCard"
import { Services } from "@/config/Services"

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-col items-center my-10">
        <h1 className="text-3xl font-bold">LibreCloud Status</h1>
        <p className="text-sm text-gray-500 mt-2">
          Live data provided by Cloudflare
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {Services.map((service) => (
          <StatusCard key={service.name} service={service} />
        ))}
      </div>
    </main>
  )
}
