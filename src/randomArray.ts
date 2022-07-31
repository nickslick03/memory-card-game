export const randomArray = <T>(arr: T[], returnArr: T[] = []): T[] => {
    if(arr.length === 0) return returnArr;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomArray(arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1)), returnArr.concat(arr[randomIndex]));
};
