const authExceptions = [
  "UnauthorizedError", 
  "JsonWebTokenError", 
  "TokenExpiredError"
]

export function handleError(e: any) {
  console.error(e)

  const errMsg = e?.response?.data?.error?.message || e?.message
  const errName = e?.response?.data?.error?.name || e?.name

  if (authExceptions.includes(errName)) 
    localStorage.removeItem("token")

  alert(`${errName} ${errMsg}`)
}