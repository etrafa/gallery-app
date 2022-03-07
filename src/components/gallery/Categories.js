const Categories = () => {
  const categories = [
    "Current Events",
    "Wallpapers",
    "3D Renders",
    "Textures & Patterns",
    "Experimental",
    "Architecture",
    "Nature",
    "Busniess & Work",
    "Fashion",
    "Film",
    "Food & Drink",
    "Health & Wellness",
    "People",
    "Interiors",
    "Street Photography",
    "Travel",
    "Animals",
    "Spirituality",
    "Arts & Culture",
    "History",
    "Athletics",
  ];
  return (
    <ul className="flex sm:overflow-x-auto lg:overflow-hidden">
      {categories.map((category) => (
        <a>
          <li className="pl-2 pt-2">{category}</li>
        </a>
      ))}
    </ul>
  );
};

export default Categories;
