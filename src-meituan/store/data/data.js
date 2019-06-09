
let data = (state={data:[],sum:0},action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "INIE_FN":
        {
            let {data} = action;
            console.log(data)
            newState.data = data;
            newState.sum = newState.data.reduce((a,b)=>{
                return a+b.children.reduce((p,n)=>{
                    return p+n.num*n.price;
                },0)
            },0)
        }
        return newState;
        case "ADD":
        {
            let {index,index1} = action;
            newState.data[index].children[index1].num++;
            newState.sum = newState.data.reduce((a,b)=>{
                return a+b.children.reduce((p,n)=>{
                    return p+n.num*n.price;
                },0)
            },0)
            localStorage.shop = JSON.stringify(newState.data)
        }
        return newState;
        case "DIS":
        {
            let {index,index1} = action;
            newState.data[index].children[index1].num--;
            newState.sum = newState.data.reduce((a,b)=>{
                return a+b.children.reduce((p,n)=>{
                    return p+n.num*n.price;
                },0)
            },0)
            localStorage.shop = JSON.stringify(newState.data)
        }
        return newState;
        default :return state;
    }
    
}
export default data