export const pause = async (seconds: number) => new Promise(resolve => setTimeout(resolve, seconds * 1000));
