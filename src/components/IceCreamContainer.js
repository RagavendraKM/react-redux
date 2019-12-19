import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
} 

//State from the redux store is mapped to our component props
const mapStateToProps = state => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}


//Maps our dispatch our action creator to our component
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () =>  { 
            return dispatch(buyIceCream())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)