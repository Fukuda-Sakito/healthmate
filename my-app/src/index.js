import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
      <Router> {/* このRouter（もしくはBrowserRouter）で囲む */}
        <App/>
      </Router> {/* このRouter（もしくはBrowserRouter）で囲む */}
  , document.getElementById('root'));
registerServiceWorker();
