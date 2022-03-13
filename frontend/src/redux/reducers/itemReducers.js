import * as actionTypes from '../constants/itemsConstants';

export const getItemReducer = (state= {items:[]} , action) =>{
    
    switch(action.type){
        case actionTypes.GET_ITEMS_REQUEST:
            return{
                loading:true,
                items:[],
            };
        case actionTypes.GET_ITEMS_SUCCESS:
            return{
                loading:false,
                items:action.payload,
            };
        case actionTypes.GET_ITEMS_FAIL:
            return{
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }

};

export const getItemDetailsReducer = (state = { item:{}}, action)=>{
    switch(action.type){
        case actionTypes.GET_ITEM_DETAILS_REQUEST:
            return{
                loading:true,
            };
        case actionTypes.GET_ITEM_DETAILS_SUCCESS:
            return{
                loading:false,
                item:action.payload,
            };
        case actionTypes.GET_ITEM_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload,
            };
        case actionTypes.GET_ITEM_DETAILS_RESET:
            return{
                item:{},
            };
        default:
            return state;
    }
};