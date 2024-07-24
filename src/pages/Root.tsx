import { useOutlet } from 'react-router-dom';

// URL 경로에 맞는 <Root />의 children 페이지 출력
export default function Root() {
  const outlet = useOutlet();

  return <>{outlet}</>;
}