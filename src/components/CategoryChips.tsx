import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryChipsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryChips = ({ categories, selected, onSelect }: CategoryChipsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Badge
        variant={selected === "All" ? "default" : "outline"}
        className={cn(
          "cursor-pointer whitespace-nowrap px-4 py-2 transition-all hover:scale-105",
          selected === "All" && "shadow-md"
        )}
        onClick={() => onSelect("All")}
      >
        All Products
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selected === category ? "default" : "outline"}
          className={cn(
            "cursor-pointer whitespace-nowrap px-4 py-2 transition-all hover:scale-105",
            selected === category && "shadow-md"
          )}
          onClick={() => onSelect(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};
