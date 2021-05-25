import React, { useState } from 'react';
import axios from 'axios';
import newsApiKey from '../private/NewsApiKey';

const SimpleNews = () => {
  const [data, setData] = useState(null);
  /*
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        setData(response.data);
      });
  };
  */
  const newsApis = {
    fakeApi: 'https://jsonplaceholder.typicode.com/todos/1',
    totalNewsApi:
      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=' +
      newsApiKey.key,
  };

  const onClick = async () => {
    try {
      const response = await axios.get(newsApis.totalNewsApi);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default SimpleNews;

/*
## 전체 뉴스 불러오기
GET https://newsapi.org/v2/top-headlines?country=kr&apiKey=~
  ## 특정 카테고리 뉴스 불러오기
GET https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=~
  ## 카테고리 종류
business, entertainment, health, science, sports, technology
카테고리를 생략하면 모든 카테고리의 뉴스를 불러온다.

## newsapi에서 제공하는 API를 사용하여 최신 뉴스를 불러온 후 보여준다.
newsapi에서 API 키를 발급받을 때는 https://newsapi.org/register에 가입하면 된다.

*/
