import React, { lazy, Suspense, useRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Switch } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Watch = lazy(() => import('./pages/Watch'));
const Anime = lazy(() => import('./pages/Anime'));
const Manga = lazy(() => import('./pages/Manga'));
const ComingSoon = lazy(() => import('./components/ComingSoon/ComingSoon'));
function App() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/anime" component={Anime} />
                        <Route path="/manga" component={Manga} />
                        <Route path="/music" component={ComingSoon} />
                        <Route path="/watch/:id" component={Watch} />
                        <Route path="/search" component={Search} />
                        <Route path="/recently-played" component={ComingSoon} />
                        <Route path="/fav" component={ComingSoon} />
                        <Route path="/for-you" component={ComingSoon} />
                        <Route path="/lists" component={ComingSoon} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
}

export default App;
