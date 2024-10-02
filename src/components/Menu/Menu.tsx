import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <nav>
        <ul>
            <li><Link href="/"><h1>Checkpoint 5</h1></Link></li>
            <li><Link href="/ideias/1">Ideia 1</Link></li>
            <li><Link href="/ideias/2">Ideia 2</Link></li>
            <li><Link href="/ideias/3">Ideia 3</Link></li>
        </ul>
    </nav>
  )
}
