import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
// dispatch are used to trigger actions

const Home = () => {


    const {c} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const addBtn = () => {
        dispatch({
            type : "INCREMENT"
        })
    }

    const subBtn = () => {
        dispatch({
            type : "DECREMENT"
        })
    }

    const incbtn25 = () => {
        dispatch({
            type : "INCREMENTBYVALUE",
            payload : 25
        })
    }
  return (
    <div>

        <h2>from home -- {c}</h2>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decrement</button>
        <button onClick={incbtn25}>Inc By 25</button>
    </div>
  )
}

export default Home