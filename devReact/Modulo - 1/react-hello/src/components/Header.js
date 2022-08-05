import React from 'react'

function Header({ children, size }) {

    console.log(size);

    let fontSize = 'text-xl';

    if (size === 'large') {
        fontSize = 'text-3xl'
    }
    return (
        <header>
            <div className="bg-green-300 mx-auto p-4">
                <h1 className={`text-center font-semibold ${fontSize}`}>
                    {children}
                </h1>

            </div>
        </header>
    )
}

export default Header