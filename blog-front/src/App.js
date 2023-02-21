import Error404 from "./container/errors/Error404";
import Home from "./container/pages/Home";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Rout, Route, Routes } from "react-router-dom";
import Blog from "./container/pages/blog/Blog";
import BlogPost from "./container/pages/blog/BlogPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/post/:slug" element={<BlogPost/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
