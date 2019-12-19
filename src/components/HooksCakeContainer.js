import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    // Accepts selector called state and Returns whatever returned by selector function
    const numOfCakes = useSelector(state => state.cake.numOfCakes) 
    const dispatch = useDispatch() //Returns a reference to dispatch function from redux store
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
