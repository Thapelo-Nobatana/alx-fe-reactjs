
const UserProfile = ({name , age ,bio}) => {
  return (
    <>
        <h2>user's name {name}</h2>
        <p>age: {age}</p>
        <p>Bio: { bio}</p>
    </>
  )
}

export default UserProfile;