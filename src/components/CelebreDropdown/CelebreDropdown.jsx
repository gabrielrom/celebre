import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './CelebreDropdown.module.css'

function CelebreDropdown({
  label,
  placeholder = 'Selecione',
  options = [],
  value,
  defaultValue = null,
  onSelected,
  className,
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const isControlled = value !== undefined
  const [selectedOption, setSelectedOption] = useState(defaultValue)
  const rootRef = useRef(null)
  const buttonId = useId()
  const listboxId = useId()

  const resolvedValue = isControlled ? value : selectedOption
  const displayText = resolvedValue ?? placeholder
  const isPlaceholder = resolvedValue == null

  useEffect(() => {
    function handleMouseDown(event) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(event.target)) setIsOpen(false)
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function handleToggle() {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }

  function handleSelect(option) {
    if (!isControlled) setSelectedOption(option)
    setIsOpen(false)
    onSelected?.(option)
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.dropdown}${className ? ` ${className}` : ''}`}
    >
      {label ? <p className={styles.label}>{label}</p> : null}

      <button
        id={buttonId}
        type="button"
        className={styles.trigger}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        disabled={disabled}
      >
        <span
          className={`${styles.value}${isPlaceholder ? ` ${styles.placeholder}` : ''}`}
        >
          {displayText}
        </span>

        <span className={styles.icon} aria-hidden="true">
          <ChevronDown size={12} />
        </span>
      </button>

      {isOpen ? (
        <div
          id={listboxId}
          className={styles.menu}
          role="listbox"
          aria-labelledby={buttonId}
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={styles.option}
              role="option"
              aria-selected={resolvedValue === option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default CelebreDropdown

