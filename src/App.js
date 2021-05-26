import './App.css';
import { Route } from 'react-router-dom';
import SimpleNews from './component/SimpleNews';
import NewsList from './component/NewsList';
import Categories from './component/Categories';
import { useCallback, useState } from 'react';
import NewsPage from "./pages/NewsPage";

function App() {
  // return <SimpleNews />;

  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => {
  //   setCategory(category);
  // }, []);
  //
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect}/>
  //     <NewsList category={category}/>
  //   </>
  // );

  // ?는 category값이 선택적이라는 것을 의미한다.
  return <Route path={"/:category?"} component={NewsPage} />;
}

export default App;
