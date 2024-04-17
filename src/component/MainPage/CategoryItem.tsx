import { TabsTrigger } from "@/components/ui/tabs"
import React from 'react'

const CategoryItem: React.FC<{ name: string; setFilter: React.Dispatch<React.SetStateAction<string>> }> = ({ name, setFilter }) => {
  return (
    <TabsTrigger className="w-24 h-fit py-3 mx-12 text-xl justify-center items-center" value={name}
      onClick={() => setFilter(name)}
    >
      {name}
    </TabsTrigger>
  )
}

export default CategoryItem