export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};
export const updateArray = (oldArrayObject, newArrayObject) => {
    return [
        ...oldArrayObject,
        ...newArrayObject
    ]
};