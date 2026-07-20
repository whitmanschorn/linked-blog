import Author from "../../interfaces/author"
import DateFormatter from "../misc/date-formatter"

type Props = {
  author?: Author,
  dateCreated?: string,
}

const PostMeta = ({ author, dateCreated }: Props) => {
  if (!(author || dateCreated)) return null;
  return (
    <p>
      {author && <>{author.name}</>}
      {author && dateCreated && <>{' · '}</>}
      {dateCreated && <DateFormatter dateString={dateCreated} />}
    </p>
  )
}

export default PostMeta;
