
export default function BlogCategory({blog3}) {
  return (
    <>
<div className="container mx-auto font-medium text-gray-500 pt-4 lg:text-left text-center">
<h1 >{blog3.category_name} <span>({blog3.posts_count})</span></h1>

</div>
    </>
  )
}
