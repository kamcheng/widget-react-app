import { sortedData, mergeSort, searchData } from '../util'

const testArrObj = [{"id":1, "name":"ccc"},{"id":2, "name":"aaa"},{"id":3, "name":"ddd"},{"id":4, "name":"bbb"}];
const sortedArrObjASC = [{"id":2, "name":"aaa"},{"id":4, "name":"bbb"},{"id":1, "name":"ccc"},{"id":3, "name":"ddd"}];
const sortedArrObjDESC = [{"id":3, "name":"ddd"},{"id":1, "name":"ccc"},{"id":4, "name":"bbb"},{"id":2, "name":"aaa"}];

describe("Test mergeSort", () => {
    it("Array should be sorted by property name in ASC", () => {
        expect(mergeSort(testArrObj, "name", true))
          .toEqual(sortedArrObjASC)
    });
    it("Array should be sorted by property name in DESC", () => {
        expect(mergeSort(testArrObj, "name", false))
          .toEqual(sortedArrObjDESC)
    });
});



const searchArrObj = [{"id":1, "name":"ccca", "description":"test"},{"id":2, "name":"aaab", "description":"test"},
{"id":3, "name":"dddca", "description":"test"},{"id":4, "name":"bbbca", "description":"test"}];

const filteredObj = [{"id":1, "name":"ccca", "description":"test"},{"id":3, "name":"dddca", "description":"test"},
{"id":4, "name":"bbbca", "description":"test"}];

describe("Test searchData", () => {
    it("Array should be filtered out by name ca", () => {
        expect(searchData(searchArrObj, "ca"))
          .toEqual(filteredObj)
    });
});

