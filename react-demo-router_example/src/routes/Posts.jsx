const Posts = ({ posts, updatePostStatus }) => {
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
            <strong>Status:</strong> {post.published ? "Read" : "Unread"}
          </p>
          <button onClick={() => updatePostStatus(post.id, post.published)}>
            {post.published ? "Mark Unread" : "Mark Read"}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;
