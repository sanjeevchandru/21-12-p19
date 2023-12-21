document.write("18.Binary Search"+"<br>");
let el=2;
let x= (arr,el)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==el){
            return i;
        }
    }
}
document.write("The index position of "+el+" = "+x([1, 2, 3, 4, 5, 7, 8, 9],el)+"<br>");