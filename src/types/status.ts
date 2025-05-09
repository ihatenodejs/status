export interface StatusResponse {
  error?: string
  status?: "online" | "offline" | "error"
}