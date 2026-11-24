
function FilterBar({ categories = [], selectedCategory, onFilter }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 my-4">

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`btn ${
            selectedCategory === category
              ? 'btn-primary'
              : 'btn-outline-primary'
          } rounded-pill px-4`}
          onClick={() => onFilter(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default FilterBar;
