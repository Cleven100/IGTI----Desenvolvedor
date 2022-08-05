import React from 'react'

export default function Main({children}) {
    const name = 'test';
    const age = '52'
    return (
        <main className="container mx-auto p-4">
            {children}
        </main>
    )
}
