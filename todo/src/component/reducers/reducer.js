import {SET_ITEM, SET_COMPLETED, SET_CLEAR} from './action'

export const initialState=[]

const reducer = (state, action) =>{
    switch(action.type){
        case(SET_ITEM):
            return([...state, {item: action.payload, completed: action.completed, id:action.id} ])
        case(SET_COMPLETED):
            return([...state.map((i)=>
                    i.id===action.payload?{...i, completed:!i.completed}:i
                )])
        case(SET_CLEAR):
            return([...state.filter((i)=>
                !i.completed)])
        default:
            return(state)
    }
}

export default reducer