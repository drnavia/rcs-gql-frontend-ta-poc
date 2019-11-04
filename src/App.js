import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache} from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importar Componentes
import Header from './componentes/Layout/Header';
import Footer from './componentes/Layout/Footer';

import Inicio from './componentes/Home/Inicio';
import Dashboard from './componentes/Dashboard/Dashboard';
import Broadcast from './componentes/Dashboard/Broadcast';

const client = new ApolloClient({
    uri: "http://localhost:8008/graphql",
    cache: new InMemoryCache({
        addTypename: false
    }),
    onError: ({networkError, graphQLErrors}) => {
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Inicio} />
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route exact path="/dashboard/broadcast/:id" component={Broadcast} />
                            </Switch>
                        </div>
                        <Footer />
                    </Fragment>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;