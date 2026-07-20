type Props = {
  title: string
  content: string
}

/*
 * Visibility is controlled entirely by .note-preview rules in
 * styles/additional-styles/utils.css — do not set `display` inline here, an
 * inline style outranks the stylesheet and the preview can never hide.
 */
const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview">
      <b className="note-preview-title">{title}</b>
      <span className="note-preview-body">{content}</span>
    </span>
  )
}

export default NotePreview
