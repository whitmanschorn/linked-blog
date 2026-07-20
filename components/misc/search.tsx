import { useEffect, useRef, useState } from "react"
import PostPreview from "../blog/post-preview";
import { useRouter } from 'next/router'


function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event)
      }
    }
    // Bind the event listener
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
}

function Search({ visible, setVisible }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (visible) {
      inputRef.current?.focus();
    }
  }, [visible])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        setVisible(true);
      }
      if (e.key === 'Escape') {
        setVisible(false);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  }, [])

  useOutsideAlerter(containerRef, (e: MouseEvent) => {
    setVisible(false);
    e.stopPropagation();
  });

  useEffect(() => {
    setVisible(false);
  }, [router.asPath])


  async function handleChangeInput(e) {
    const res = await fetch(`/api/search?q=${e.target.value}`)
    setSearchResults(await res.json());
  }

  return (
    <div
      ref={containerRef}
      style={{ display: visible ? 'block' : 'none', margin: '0.8em 0' }}
    >
      <label className="sr-only" htmlFor="search">Search</label>
      <input
        ref={inputRef}
        id="search"
        type="search"
        placeholder="Search my notes"
        onChange={handleChangeInput}
        style={{
          width: '100%',
          font: 'inherit',
          padding: '2px 4px',
          border: '1px solid var(--pg-text)',
          background: 'var(--pg-bg)',
          color: 'var(--pg-text)',
        }}
      />

      {searchResults.map((res) => (
        <PostPreview
          key={res.item.slug}
          title={res.item.title}
          slug={res.item.slug}
          dateCreated={res.item.dateCreated}
        />
      ))}
    </div>
  )
}

export default Search