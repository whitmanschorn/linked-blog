import Link from "next/link"

type Props = {
  backlinks: {
    [k: string]: {
      title: string
      excerpt: string
    }
  }
}

const Backlinks = ({ backlinks }: Props) => {
  return (
    <>
      {Object.keys(backlinks).map((slug) => (
        <div key={slug}>
          <Link as={slug} href="[...slug]">{backlinks[slug].title}</Link>
        </div>
      ))}
    </>
  )
}

export default Backlinks
