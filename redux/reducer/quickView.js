import * as Types from '../constants/actionTypes'

export default (state = null , action)=>{
    switch (action.type) {
        
        case Types.OPEN_QUICK_VIEW :
            console.log("quickview active")
            return {
                ...action.payload.product
            }
        
        case Types.CLOSE_QUICK_VIEW :
        console.log("quickview close")
            return  null
        
        default:
            return state
    }
}