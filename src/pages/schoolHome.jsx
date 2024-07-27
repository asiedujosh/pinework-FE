import SearchField from "../component/searchField"
import { BOOKS } from "../constant/books"
import Card from "../component/card"

const SchoolHome = () => {
  const handleAddClick = () => {
    alert("Add button clicked!")
  }

  return (
    <>
      <SearchField sw="w-1/3" />
      <hr className="mt-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {BOOKS.map((item) => (
          <Card
            image={item.image}
            title={item.title}
            description={item.description}
            actionText={"Add"}
            onAdd={handleAddClick}
          />
        ))}
      </div>
    </>
  )
}

export default SchoolHome
