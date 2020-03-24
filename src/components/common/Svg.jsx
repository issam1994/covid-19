import React from 'react'

export default function Svg({path, size, className, ...rest}) {
    const sizes = {xlarge: "w-24 h-24",large: "w-12 h-12", small:"w-8 h-8"}
    return (
        <svg className={`fill-current ${sizes[size || 'small']} ${className}`} viewBox='0 0 22 22' {...rest}>
            <path d={path} />
        </svg>
    )
}