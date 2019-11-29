import React, { Component } from 'react'
import { CountContext } from './Context'

export default class TestClass extends Component {
    static contextType = CountContext

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    onClick() {
        this.setState(this.state.count + 1)
    }

    render() {
        const { count, setCount } = this.contextType
        return (
            <buton onClick={setCount(count + 1)}>
                Count: {this.state.count}
            </buton>
        )
    }

    render() {
        return (
            <CountContext.Consumer>
                {({count, setCount}) => {
                    <buton onClick={setCount(count + 1)}>
                        Count: {this.state.count}
                    </buton>
                }}
            </CountContext.Consumer>
        )
    }
}