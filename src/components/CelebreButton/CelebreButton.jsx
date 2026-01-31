import styles from './CelebreButton.module.css'

export default function CelebreButton({
  title,
  icon,
  iconPosition = 'right',
  iconGap = 10,
  disabled = false,
  backgroundColor = 'var(--secodary-color)',
  className,
  type = 'button',
  style,
  ...props
}) {
  const hasIcon = Boolean(icon)
  const resolvedIconGap =
    typeof iconGap === 'number' ? `${iconGap}px` : iconGap

  const mergedStyle = {
    ...style,
    '--button-bg': backgroundColor,
    '--button-content-gap': resolvedIconGap,
  }

  const iconElement = hasIcon ? (
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  ) : null

  return (
    <button
      type={type}
      className={`${styles.button}${className ? ` ${className}` : ''}`}
      disabled={disabled}
      style={mergedStyle}
      {...props}
    >
      <span className={styles.content}>
        {iconPosition === 'left' ? iconElement : null}
        <span className={styles.title}>{title}</span>
        {iconPosition === 'right' ? iconElement : null}
      </span>
    </button>
  )
}
