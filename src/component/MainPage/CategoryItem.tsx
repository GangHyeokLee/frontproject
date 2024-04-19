import { TabsTrigger } from "@/components/ui/tabs"
import React from 'react'

interface CategoryItemProps {
  name: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryItem = ({ name, setFilter }: CategoryItemProps) => {
  return (
    <TabsTrigger className="w-24 h-fit py-3 mx-12 text-xl justify-center items-center" value={name}
      onClick={() => setFilter(name)}
    >
      {name}
    </TabsTrigger>
  )
}

export default CategoryItem