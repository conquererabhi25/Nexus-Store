export const formatCurrancy = (amount:number | null)=>{
    const Value = amount || 0 
    return new Intl.NumberFormat("en-us",{
        style:'currency',
        currency:'USD',


    }).format(Value)
}