'use client'

import jsPDF from 'jspdf'
import { useEffect } from 'react'

export default function JspdfApplication() {
  useEffect(() => {
    const doc = new jsPDF()
    doc.text('Coding4Devs', 15, 15)
    doc.save('doc.pdf')
  }, [])

  return 'jsPDF File..'
}
