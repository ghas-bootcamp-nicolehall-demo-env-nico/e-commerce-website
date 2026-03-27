import { sanitizeUrl } from '@braintree/sanitize-url'

export function buildPaymentRedirectUrl (baseUrl: string, orderId: string, token: string): string {
  const redirectUrl = `${baseUrl}/api/wallet/callback?order=${orderId}&token=${token}`
  return sanitizeUrl(redirectUrl)
}
