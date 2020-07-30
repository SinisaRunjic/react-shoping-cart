export default function formatCurrencly(num){
    return "$" + Number(num.toFixed(2).toLocaleString() + " " )
}