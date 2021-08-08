import { Route, Switch } from 'react-router-dom';

// 不明なRouteは全てNotFound
const NotFound = () => {
  return(
    <h1>ページが見つかりません</h1>
  )
}

class App extends Component {

render() {
  return (
    {/* Switchで囲むとURLにマッチされた最初の<Route>だけレンダリング */}
    <Switch>
      {/* URLでマッチさせたい要素を書いていく */}
      {/* component={Home}とかでもOK。今回はWrapMainContentでラッパーしている。詳細後述。 */}
      {/* exactを入れることで厳密なURL比較が可能に */}
      <Route exact path="/" component={WrapMainContent(Home)} />} />
      <Route exact path="/info" component={WrapMainContent(Info)}/>
      <Route exact path="/settings" component={WrapMainContent(Settings)}/>
      {/* URLヒットしないときはNot Found画面を表示する */}
      <Route component={WrapMainContent(NotFound)}/>
    </Switch>
    <Link to="/info">Info</Link>
  );
}

}
