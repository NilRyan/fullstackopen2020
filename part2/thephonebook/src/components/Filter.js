const Filter = ({filterTerm, filter}) => {
  return (
    <div>
        filter shown with <input value = {filterTerm} onChange = {filter}></input>
    </div>

  )
}

export default Filter
