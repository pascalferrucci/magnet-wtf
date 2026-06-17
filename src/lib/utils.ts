import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatUsername(username: string) {
  return `@${username}`
}

export function getProfileUrl(username: string, fork?: string) {
  const base = `/${username}`
  return fork ? `${base}/${fork}` : base
}

export function generateShortCode(length = 4): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}
