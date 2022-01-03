import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleRestaurant() {
    const {id} = useParams()
    return (
        <div>
            restaurant {id}
        </div>
    )
}
