import React, { useState, useEffect } from 'react'
import { CountContext } from './Context'

export default () => {
    const [count, setCount] = useState(0)
    const onClick = setCount(count + 1)
    useEffect(
        () => console.log('mount'),
        []
    )
    useEffect(
        () => console.log('update')
    )
    useEffect(
        () => console.log('update'),
        [count]
    )
    return <button onClick={onClick}>Count: {this.state.count}</button>
}