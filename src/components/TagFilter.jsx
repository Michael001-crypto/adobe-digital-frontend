const TagFilter = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <button
        onClick={() => onSelectTag("All")}
        className={`px-3 py-1 rounded-full border ${
          selectedTag === "All"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-800 dark:text-white"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`px-3 py-1 rounded-full border ${
            selectedTag === tag
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 dark:text-white"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;