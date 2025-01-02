function Card({ currentValue, setUser, arr, setEditUser }) {
  console.log(currentValue);
  // function getFullData(user) {
  //   return [user.name];
  // }

  function handleDelete() {
    setUser(
      arr.filter((item) => {
        return currentValue.id !== item.id;
      })
    );
  }

  return (
    <div className="text-white bg-rose-900 w-44 flex  pl-3 gap-3 flex-col ml-10 rounded-md ">
      <div className="">
        <h1 className="p-1 ">Name:{currentValue.name}</h1>
        <h3 className="p-1 ">email:{currentValue.email}</h3>
        <h3 className="p-1 ">role: {currentValue.role}</h3>
      </div>
      <div className="flex flex-row gap-3 pb-3">
        <button
          className="bg-blue-600 p-1 rounded-md"
          onClick={() => {
            setEditUser(currentValue);
          }}
        >
          Edit
        </button>
        <button  className="bg-red-600 p-1 rounded-md" onClick={handleDelete} >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
