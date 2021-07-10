import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import NavigationBar from './components/NavigationBar';
import Items from './pages/Items';
import useItemContext from './hooks/useItemContext';
import ItemContext from './context/ItemContext';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';

const App = () => {
    const context = useItemContext();
    return (
        <ItemContext.Provider value={context}>
            <Router>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/items" />} />
                    <Route exact path="/items" component={Items} />
                    <Route exact path="/items/:id" component={ItemDetails} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/notfound" component={NotFound} />
                    <Route path="*" render={() => <Redirect to="/notfound" />} />
                </Switch>
            </Router>
        </ItemContext.Provider>
    );
};

export default App;
