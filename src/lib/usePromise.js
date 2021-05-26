import React, {useEffect, useState} from 'react';

const UsePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    setLoading(false);
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
};

export default UsePromise;

/*
  # usePromise 커스텀 Hook 만들기
  컴포넌트에서 API 호출처럼 Promise를 사용해야 하는 경우 더욱 간결하게 코드를
  작성할 수 있도록 해 주는 커스텀 Hook을 만들어보자.

  프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 보통 src 디렉터리에 lib 디렉터리를 만든 후 그 안에 작성한다.

  usePromise를 사용하면 NewsList에서 대기 중 상태관리와 useEffect 설정을 직접 하지 않아도 되므로
  코드가 훨씬 간결해진다. 요청 상태를 관리할 때 무조건 커스텀 Hook을 만들어서 사용해야 하는 것은 아니지만,
  상황에 따라 적절히 사용하면 좋은 코드를 만들어 갈 수 있다.
 */
