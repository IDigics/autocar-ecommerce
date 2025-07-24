interface CardItem {
  icon?: string;
  title: string;
  description?: string;
  items?: string[];
}

interface CardListProps {
  items: CardItem[];
  columns?: 1 | 2 | 3;
}

export default function CardList({ items, columns = 2 }: CardListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3 md:grid-cols-2",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {items.map((item, index) => (
        <div key={index} className="bg-[#F8F8F5] p-6 rounded-xl">
          {item.icon && (
            <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
          )}
          <h5 className="font-semibold text-[#0D1B2A] mb-2">{item.title}</h5>
          {item.description && (
            <p className="text-sm text-[#71797E] mb-3">{item.description}</p>
          )}
          {item.items && (
            <ul className="space-y-1">
              {item.items.map((listItem, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[#71797E] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span>
                  {listItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
