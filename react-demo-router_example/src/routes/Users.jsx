import Box from "../components/Box";

const Users = ({ users }) => {
  return (
    <div className="boxes">
      {users.map((user) => (
        <Box key={user.id} name={user.name} {...user} />
      ))}
    </div>
  );
};

export default Users;
