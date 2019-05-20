
const merge = (a,b) => {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0].toLowerCase() < b[0].toLowerCase() ? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

export const mergeSort = (arr) => {    
    if (arr.length < 2) return arr;
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid));
    var subRight = mergeSort(arr.slice(mid));
    
    return merge(subLeft, subRight);
}
 
//var test = [{id:1, name:"john"},{id:2, name:"aaa"},{id:3, name:"zzz"},{id:4, name:"bbb"}];
//console.log(mergeSort(test)); // -> [0, 1, 2, 2, 3, 5, 9, 14]


export const sortedData = (data, prop, isAsc) => {
    return data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1));
}

export const searchWidgets = (data, query) => {
    return data.filter((widget) => {
        return widget.name.includes(query)
    })
}