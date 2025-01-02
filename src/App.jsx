import { useEffect, useState } from "react";
import Card from "./component/Card";
function App() {
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [editUser, setEditUser] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setUser([...user, { ...formData, id: Date.now() }]);
    console.log(user);
  }

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  return (
    <div className="flex justify-center items-center py-24">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="bg-rose-900 w-96 h-[50vh] gap-2 flex items-center justify-center flex-col rounded-md p-5"
      >
        <input
          value={formData.name}
          className="w-11/12 h-10 rounded-full text-center "
          type="name"
          placeholder="Name"
          // first broke and then create one and take data
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <input
          value={formData.email}
          className="  w-11/12 h-10  rounded-full text-center"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          value={formData.role}
          className="w-11/12 h-10  rounded-full text-center"
          type="text"
          placeholder="Role"
          onChange={(e) => {
            setFormData({ ...formData, role: e.target.value });
          }}
        />
        <button className="bg-fuchsia-900 h-10 text-white rounded-full w-11/12">
          {editUser == null ? `Adduser` : `Edituser`}
        </button>
      </form>
      {/* <Card user={user} /> */}
      {user.map((currentValue) => {
        return (
          <Card
            currentValue={currentValue}
            arr={user}
            setUser={setUser}
            key={currentValue.id}
            setEditUser={setEditUser}
          />
        );
      })}
    </div>
  );
}

export default App;
