import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';
import usePostContext from './hooks/usePostContext';
import PostContext from './context/PostContext';
import PostDetails from './pages/PostDetails';
import EditPost from './pages/EditPost';

const App = () => {
    const value = usePostContext();
    return (
        <Router>
            <PostContext.Provider value={value}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/posts" />} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/posts/:id" component={PostDetails} />
                    <Route exact path="/create-post" component={CreatePost} />
                    <Route exact path="/edit-post/:id" component={EditPost} />
                    <Route exact path="/notfound" component={NotFound} />
                    <Route path="*" render={() => <Redirect to="/notfound" />} />
                </Switch>
            </PostContext.Provider>
        </Router>
    );
};

export default App;
