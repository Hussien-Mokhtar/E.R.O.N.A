export default function ShopBrandsDynamic({ shop2Brands }) {
    return (
      <>
  {/* --------------brands----------- */}
        <div className=" flex justify-between ">
        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" /> <span>{shop2Brands.name}</span>
        </div>
        <div className="">
          <span>({shop2Brands.products_count})</span> 
        </div> 
      </div>

  
      </>
    );
  }
  