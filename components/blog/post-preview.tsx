import Link from "next/link"
import DateFormatter from "../misc/date-formatter"

type Props = {
  title: string
  dateCreated?: string
  slug: string
}

const PostPreview = ({ title, dateCreated, slug }: Props) => {
  return (
    <div>
      <Link as={`/${slug}`} href="/[...slug]">{title}</Link>
      {dateCreated && (
        <span>
          {' '}
          <DateFormatter dateString={dateCreated} />
        </span>
      )}
    </div>
  )
}

export default PostPreview;
