import SearchField from "../component/searchField"
import { CLASSES } from "../constant/classConstant"
import ListCard from "../component/listCard"

const SchoolWork = () => {
  return (
    <>
      <SearchField sw="w-1/3" />
      <hr className="mt-10" />
      <div className="mt-4">
        {CLASSES.map((item) => (
          <ListCard block={item.class} noWorks={item.workSubmitted} />
        ))}
      </div>
    </>
  )
}

export default SchoolWork
