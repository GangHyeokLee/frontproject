import { Tabs, TabsList } from "@/components/ui/tabs"
import CategoryItem from "./CategoryItem"

const categories = [
  'ALL', '상의', '하의', '신발', '모자', '안경'
]

const SampleProduct: React.FC<{ setFilter: React.Dispatch<React.SetStateAction<string>> }> = ({ setFilter }) => {

  return (
    <div className="flex flex-col w-full h-fit justify-center">
      <div className="mt-10 font-bold text-6xl flex justify-center">
        OOTD
      </div>
      <Tabs>
        <TabsList className={`mt-5 items-center flex justify-center bg-gray-300 h-fit`}>
          {categories.map((x) =>
            <CategoryItem name={x} setFilter={setFilter} />
          )}
        </TabsList>
      </Tabs>


    </div>
  )
}

export default SampleProduct