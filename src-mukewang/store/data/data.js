
function getsum(newState){
    return newState.sumprice = newState.shopcar.filter(item=>item.check).reduce((p,n)=>p+n.price*n.num,0)
}
const data = (state={
        shopcar:[],
        sumprice:0,
        allCheck:false
    },action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "CAR_FN":
        {
            let {obj} = action;
            newState.shopcar.push(obj);
            getsum(newState)
        }
        return newState;
        case "CHECK_FN":
        {   
            let {index,check} = action
            newState.shopcar[index].check = check;
            newState.allCheck = newState.shopcar.every(item=>item.check)
            getsum(newState)
        }
        return newState;
        case "CHECK_ALL":
        {
            let {check} = action
            newState.allCheck = check;
            newState.shopcar.map(item=>item.check=check)
            getsum(newState)
        }
        return newState;
        default :return state;
    }
    
}
export default data;