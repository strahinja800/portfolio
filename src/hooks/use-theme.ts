'use client'

import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function readStorage(): Theme {
  try {
    const v = localStorage.getItem('theme')
    return v === 'light' || v === 'dark' ? v : 'dark'
  } catch {
    return 'dark'
  }
}

function writeStorage(theme: Theme) {
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // storage blocked — UI still updates, just won't persist
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const saved = readStorage()
    setTheme(saved)
    document.documentElement.dataset.theme = saved === 'light' ? 'light' : ''
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    writeStorage(next)
    document.documentElement.dataset.theme = next === 'light' ? 'light' : ''
  }

  return { theme, toggle }
}
