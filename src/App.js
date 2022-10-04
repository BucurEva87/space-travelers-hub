import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import RocketsView from './components/RocketsView/RocketsView';
import MissionsView from './components/MissionsView/MissionsView';
import MyProfile from './components/MyProfile/MyProfile';

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route
        path="/rockets"
        index
        element={<RocketsView />}
      >
        Rockets
      </Route>
      <Route
        path="/missions"
        element={(
          <ul>
            <li key="uidrisd"><MissionsView /></li>
          </ul>
        )}
      >
        Rockets
      </Route>
      <Route
        path="/myprofile"
        element={<MyProfile />}
      >
        My Profile
      </Route>
      <Route
        path="/"
        element={<Navigate to="/rockets" />}
      />
    </Routes>
  </Router>
);

export default App;
