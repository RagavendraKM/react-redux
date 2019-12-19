import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//State from the redux store is mapped to our component props
const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}


//Maps our dispatch our action creator to our component
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () =>  { 
            return dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)