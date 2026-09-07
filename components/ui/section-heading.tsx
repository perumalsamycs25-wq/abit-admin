import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  invert = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]',
            invert ? 'text-gold' : 'text-accent-foreground',
          )}
        >
          <span className="h-px w-6 bg-gold" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-3xl font-bold text-balance sm:text-4xl',
          invert ? 'text-primary-foreground' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty',
            invert ? 'text-primary-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
