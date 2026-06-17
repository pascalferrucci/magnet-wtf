// ─── User ────────────────────────────────────────────────────────────────────

export type UserRole = 'creator' | 'brand'

export interface Profile {
  id: string
  username: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  role: UserRole
  created_at: string
}

// ─── Page / Fork ─────────────────────────────────────────────────────────────

export interface MagnetPage {
  id: string
  owner_id: string
  slug: string // '' = main page, 'summer' = @user/summer
  title: string | null
  theme: PageTheme
  is_main: boolean
  published: boolean
  created_at: string
  updated_at: string
}

export interface PageTheme {
  background: string
  accent: string
  font: string
  radius: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

// ─── Widget ──────────────────────────────────────────────────────────────────

export type WidgetSize = {
  w: 1 | 2 | 3 | 4
  h: 1 | 2 | 3 | 4
}

export type WidgetType =
  | 'link'
  | 'social'
  | 'text'
  | 'image'
  | 'video'
  | 'embed'
  | 'product'
  | 'form'
  | 'analytics'
  | 'project'
  | 'profile_card'
  | 'music'
  | 'calendar'
  | 'map'

export interface Widget {
  id: string
  page_id: string
  type: WidgetType
  size: WidgetSize
  position: { x: number; y: number } // col, row on the 4-col grid
  content: Record<string, unknown>
  delegated_from: string | null // user_id of the widget source
  delegated_by: string | null   // profile that originally shared it
  created_at: string
  updated_at: string
}

// ─── Pin (follower without account) ──────────────────────────────────────────

export interface Pin {
  id: string
  page_id: string
  email: string
  created_at: string
}

// ─── Invite codes ─────────────────────────────────────────────────────────────

export interface InviteCode {
  id: string
  code: string
  created_by: string
  used_by: string | null
  used_at: string | null
  created_at: string
}
