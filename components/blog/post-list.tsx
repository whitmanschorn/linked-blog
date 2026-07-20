import React from 'react';

import PostPreview from './post-preview'
import type Post from '../../interfaces/post'

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <section>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          dateCreated={post.dateCreated}
          slug={post.slug}
        />
      ))}
    </section>
  );
}

export default PostList;
