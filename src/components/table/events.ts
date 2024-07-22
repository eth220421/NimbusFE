export const useTableEvents = () => {
    const handleCalCurrentDay = () => {
        const today = new Date();
        const formattedYear = today.getFullYear().toString().slice(-2);
        const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

        return formattedFull;
    }

    return { handleCalCurrentDay };
}