import React from 'react'

export default function Container({ children }) {
    return (
        <div className="max-w-6xl mx-auto text-gray-800 min-h-screen relative">
            {children}
        </div>)
}