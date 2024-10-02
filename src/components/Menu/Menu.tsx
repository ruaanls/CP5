import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <nav>
        <ul>
            <li><Link href="/"><h1>Checkpoint 5</h1></Link></li>
            <li><Link href="/ideia1/">Ideia 1</Link></li>
            <li><Link href="/ideia2">Ideia 2</Link></li>
            <li><Link href="/ideia3">Ideia 3</Link></li>
        </ul>
    </nav>
  )
}
