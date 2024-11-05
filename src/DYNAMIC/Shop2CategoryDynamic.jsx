export default function Shop2CategoryDynamic({ shop2 }) {
  return (
    <>
      <div className=" flex justify-between ">
        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" /> <span>{shop2.name}</span>
        </div>
        <div className="">
          <span>({shop2.products_count})</span> 
        </div> 
      </div>
    </>
  );
}
