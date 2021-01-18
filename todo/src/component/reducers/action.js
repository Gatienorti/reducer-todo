export const SET_ITEM = 'SET_ITEM'
export const SET_COMPLETED = 'SET_COMPLETED'
export const SET_CLEAR = 'SET_CLEAR'

export const setItem = (item) =>{
    return({type:SET_ITEM, payload:item, completed:false, id:Date.now()})
}
export const setCompleted = (id) =>{
    return({type:SET_COMPLETED, payload:id})
}
export const setClear = () =>{
    return({type:SET_CLEAR})
}