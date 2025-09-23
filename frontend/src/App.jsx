import { Routes, Route } from "react-router";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import AddUser from "./pages/addUser";
import UserList from "./pages/UserList";

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </PageLayout>
  );
}
