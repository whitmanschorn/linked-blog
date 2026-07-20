type Props = {
  currPage: number
  maxPage: number
}

function getPaginationArr(currPage: number, maxPage: number, numItems: number = 5) {
  const pageList = [currPage]
  while (pageList.length < numItems) {
    const leftDelta = Math.abs(pageList[0] - currPage);
    const rightDelta = Math.abs(pageList[pageList.length - 1] - currPage);
    if ((leftDelta <= rightDelta || pageList[pageList.length - 1] == maxPage) && pageList[0] > 1) {
      pageList.unshift(pageList[0] - 1);
    } else if ((leftDelta > rightDelta || pageList[0] == 1) && pageList[pageList.length - 1] < maxPage) {
      pageList.push(pageList[pageList.length - 1] + 1);
    } else {
      break;
    }
  }
  return pageList;
}

function Pagination({ currPage, maxPage }: Props) {
  const paginationArr = getPaginationArr(currPage, maxPage);
  return (
    <div style={{ marginTop: '1.6em' }}>
      {currPage > 1 && <a href={`/posts/${currPage - 1}`}>prev</a>}
      {currPage > 1 && ' '}
      {paginationArr.map((i) => (
        <span key={i}>
          {i === currPage ? <b>{i}</b> : <a href={`/posts/${i}`}>{i}</a>}{' '}
        </span>
      ))}
      {currPage < maxPage && <a href={`/posts/${currPage + 1}`}>next</a>}
    </div>
  )
}

export default Pagination;
