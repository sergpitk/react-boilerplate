import React from 'react'

export default function ProductItem({name, price}) {
    return (
        <div>
            <p>
                {name}
            </p>
            <p>
                {price}
            </p>
        </div>
    )
}
