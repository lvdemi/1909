export default {
    computeTotal(state){
        let cars = state.cars
        let total = {average:0,num:0}
        cars.forEach(item=>{
            total.average += item.rating.average * item.num
            total.num += item.num
        })
        return total
    }
}