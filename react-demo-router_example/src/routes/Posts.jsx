const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <h4>
            by {post.author} - {post.date}
          </h4>
          <p>{post.content}</p>
          <p>
            <strong>Status:</strong> {post.published ? "true" : "false"}
          </p>
          <button>Switch status</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;
