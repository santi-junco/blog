import { Link } from "react-router-dom"

function BlogCard(data) {
	
	const post = data.data

	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
			<div className="flex-shrink-0">
				<img className="h-48 w-full object-cover" src="#" alt="" />
			</div>
			<div className="flex-1 bg-white p-6 flex flex-col justify-between">
				<div className="flex-1">
					<p className="text-sm font-medium text-indigo-600">
						<Link to={`/blog/category/${post.category.id}/`} className="hover:underline">
							{post.category.name}
						</Link>
					</p>
					<Link to={`/blog/post/${post.slug}`} className="block mt-2">
						<p className="text-xl font-semibold text-gray-900">{post.title}</p>
						<p className="mt-3 text-base text-gray-500">{post.desciption}</p>
					</Link>
				</div>
				{/* <div className="mt-6 flex items-center">
					<div className="flex-shrink-0">
						<a href="#">
							<span className="sr-only">{post.author namme}</span>
							<img className="h-10 w-10 rounded-full" src="#" alt="" />
						</a>
					</div>
					<div className="ml-3">
						<p className="text-sm font-medium text-gray-900">
							<a href="#" className="hover:underline">
								author namme
							</a>
						</p>
						<div className="flex space-x-1 text-sm text-gray-500">
							<time>{post.published}</time>
							<span aria-hidden="true">&middot;</span>
							<span>rread time</span>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default BlogCard