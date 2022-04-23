const SetPagination = (props) => {
  const { setPageSize, pageSize } = props
  return (
    <label>
      Show
      <select
        className="table-controls__page-size"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      entries
    </label>
  )
}

export default SetPagination
