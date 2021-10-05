import React from 'react';
import { Router, Route ,Switch   } from 'react-router-dom'
import StreamCreate from './streams/streamCreate';
import StreamEdit from './streams/streamEdit';
import StreamDelete from './streams/streamDelete';
import StreamList from './streams/streamList';
import StreamShow from './streams/streamShow';
import Header  from './headers';
import history from '../history'




const App = ()=>{
    return (<div className="ui container" >


        <Router history={history} >
          <div style={{margin:"2%"}} >
          <Header />
          </div>
          <div>
            <Switch>
           <Route path="/" exact component={StreamList} ></Route>
           <Route path="/streams/new" exact component={StreamCreate} ></Route>
           <Route path="/streams/edit/:id" exact component={StreamEdit} ></Route>
           <Route path="/streams/delete/:id" exact component={StreamDelete} ></Route>
           <Route path="/streams/:id" exact component={StreamShow} ></Route>
           </Switch>
          </div>

        </Router>
    </div>);
}

export default App;