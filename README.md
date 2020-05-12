Lec 29(Redux Thunk Get Request)
-------------------------------

Lets see how to make get request to API end point and display the fetched data in UI.
We need 2 packages for this - axios and redux-thunk
=>redux thunk - will allow us to define async action creators in our application

npm install axios redux-thunk

now we will apply redux-thunk middleware to our redux store
in store.js,
we will import thunk from redux-thunk
and then will pass this thunk to applyMiddleware function.
Although we dont need the logger but lets keep it also 
=============================================================================================
                Store.js
                --------

import thunk from 'redux-thunk'; //new


//const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
const store = createStore(
                rootReducer,
                composeWithDevTools(applyMiddleware(logger,thunk))   //new- thunk added
                ); 
=============================================================================================                
Now we will define our async action creator
In userActions.js,
we have 3 action creators - fetchUsersRequest , fetchUsersSuccess and fetchUsersFailure
we will add one more action creator - fetchUsers

The other 3 action creators will return an action but this action creator "fetchUsers" is different
as it return a function while the other 3 returns action
Also this is different because it is not pure function and allowed to have side-effect like API calls
Note : this function receives "dispatch" as its argument 

============================================================================================= 
        userActions.js
        ---------------

import axios from 'axios'; //new code
...
...

export const fetchUsers = () => {   //new code
    console.log('4. UserActions - fetchUsers');
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {      
                console.log('7. UserActions - fetchUsers - then');          
                const users = response.data;
                dispatch(fetchUsersSuccess(users))
                console.log('10. UserActions - fetchUsers - then completed');  
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(fetchUsersFailure(errMsg));
            })
    }
}
============================================================================================= 

Now the final step is to subscribe our UserComponent to redux store and display list of users

So in UserContainer.js,
we will first do necessary imports as below :
---------------------------------------------
import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/user/userActions';
---------------------------------------------

then define - mapStateToProps and  mapDispatchToProps
and then make changes in useEffect and return JSX

The code is there in ==> src\components\UserContainer.js

----------------------------------------------------------------------------
Finally in App.js we will include UserContainer

App.js
------
return (
    <Provider store={store}>
    <div className="App">
      {/*     //new code
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <ItemContainer itemDisplay="cake" />
      <ItemContainer/>
      */}
    
      <UserContainer/>   //new code
    </div>
    </Provider>
  );






