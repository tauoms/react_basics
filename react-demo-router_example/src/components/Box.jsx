const Box = ({ name, title, location, email, address, phone }) => {
  return (
    <div className="box">
      <p>{name}</p>
      <p>{title}</p>
      <p>{location}</p>
      {address ? (
        <>
          <p>
            E-mail: {email}
            <br />
            Phone: {phone}
          </p>
          <p>
            {address.street}
            <br />
            {address.suite}
            <br />
            {address.city}
            <br />
            {address.zipcode}
            <br />
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Box;
