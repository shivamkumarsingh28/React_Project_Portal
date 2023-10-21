import React from 'react'

function Button({ children }) {
    return (

        <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
        >
            {children}
        </a>

    );
}

export default Button