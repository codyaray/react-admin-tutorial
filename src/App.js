import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './components/UserList';
import { PostList, PostCreate, PostEdit } from "./components/posts";
import jsonServerProvider from 'ra-data-json-server';
import createHistory from 'history/createBrowserHistory';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/dashboard';
import authProvider from './authProvider';

const history = createHistory();

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} history={history}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
