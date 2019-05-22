
const merge = (a,b, prop, isAsc) => {
    var result = [];
    while (a.length >0 && b.length >0) {
        if(isAsc) {
            result.push(a[0][prop] < b[0][prop] ? a.shift() : b.shift());
        } else {
            result.push(a[0][prop] > b[0][prop] ? a.shift() : b.shift());
        }
    }
    return result.concat(a.length? a : b);
}

export const mergeSort = (arr, prop, isAsc) => {    
    if (arr.length < 2) return arr;
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid), prop, isAsc);
    var subRight = mergeSort(arr.slice(mid), prop, isAsc);
    
    return merge(subLeft, subRight, prop, isAsc);
}

export const sortedData = (data, prop, isAsc) => {
    return data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1));
}

const searchFieldNames = ["description", "name"];

export const searchData = (data, query) => {
    return data.filter((widget) => {
        return searchFieldNames.find((field) => {
            return widget[field].toLowerCase().indexOf(query.toLowerCase()) != -1
        })
    })
}