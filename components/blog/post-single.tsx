import React from 'react';
import Author from '../../interfaces/author';
import Backlinks from '../misc/backlinks';
import PostBody from './post-body';
import PostMeta from './post-meta';

type Props = {
  title: string,
  content: string,
  dateCreated?: string,
  author?: Author,
  backlinks: { [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

function PostSingle({
  title,
  dateCreated,
  author,
  content,
  backlinks
}: Props) {
  const hasBacklinks = Object.keys(backlinks).length > 0
  return (
    <article>
      <h1>{title}</h1>

      {(author || dateCreated) && (
        <PostMeta author={author} dateCreated={dateCreated} />
      )}

      <PostBody content={content} />

      {hasBacklinks && (
        <>
          <hr />
          <h2>Backlinks</h2>
          <Backlinks backlinks={backlinks} />
        </>
      )}
    </article>
  );
}

export default PostSingle;
