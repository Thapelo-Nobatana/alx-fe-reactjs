function UserCard({ user }) {
  if (!user) return null;

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} width={120} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <p>
        Followers: {user.followers} | Following: {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        Visit Profile
      </a>
    </div>
  );
}

export default UserCard;
