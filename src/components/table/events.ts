// table 폴더에서 사용될 함수 정의
export const useTableEvents = () => {
    // 날짜 출력 로직
    const handleCalCurrentDay = () => {
        const today = new Date();
        const formattedYear = today.getFullYear().toString().slice(-2);
        const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

        return formattedFull;
    }

    return { handleCalCurrentDay };
}