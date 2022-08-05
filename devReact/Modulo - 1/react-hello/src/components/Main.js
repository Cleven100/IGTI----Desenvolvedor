import React from 'react'

export default function Main() {
    const name = 'test';
    const age = '52'
    return (
        <main>
            <div className="container mx-auto p-4">
                <p>O seu nome é {name} e possui {age} anos</p>
            </div>
        </main>
    )
}
