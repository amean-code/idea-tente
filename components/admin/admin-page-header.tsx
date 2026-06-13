interface AdminPageHeaderProps {
  title: string
  description: string
}

/**
 * Admin içerik alanında sayfa başlığı ve kısa açıklama gösterir.
 */
export function AdminPageHeader({ title, description }: AdminPageHeaderProps) {
  return (
    <div className="mb-6 space-y-1">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">{title}</h1>
      <p className="max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
    </div>
  )
}
