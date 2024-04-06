// it is not jsx file because we are not going to use any of state fxn props or event 
function getTicket(n)
{
    let arr=new Array(n);
    for(let i=0;i<n;i++)
    {
        arr[i]=Math.floor(Math.random()*10);
    }
    // console.log(arr);
    return arr;
}
function sum(arr)
{
    return arr.reduce((sum,curr)=> sum+curr,0);
}
export {getTicket,sum};