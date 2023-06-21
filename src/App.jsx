import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AddPlace from './routes/AddPlace';
import DeletePlace from './routes/DeletePlace';
import MyReservations from './routes/MyReservations';
import Reserve from './routes/Reserve';
import Places from './routes/Places';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';
import LogIn from './routes/LogIn';
import SignUp from './routes/Signup';
import PlaceDetails from './routes/PlaceDetails';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Places />} />
      <Route path="/places/:id" element={<PlaceDetails />} />
      <Route path="addplace" element={<AddPlace />} />
      <Route path="deleteplace" element={<DeletePlace />} />
      <Route path="myreservations" element={<MyReservations />} />
      <Route path="reserve" element={<Reserve />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
    <Route path="login" element={<LogIn />} />
    <Route path="signup" element={<SignUp />} />
  </Routes>

);

export default App;
