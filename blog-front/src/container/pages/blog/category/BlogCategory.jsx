import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import FullWidthLayout from "../../../../hocs/layouts/FullWidthLayout"
import { get_blog_list_category, get_blog_list_category_page, get_blog_list_page } from "../../../../redux/actions/blog"
import BlogCard from "../../../../components/blog/BlogCard"
import SmallSetPagination from "../../../../components/paginacion/SmallSetPagination"
import BlogLoading from "../../../../components/loaders/BlogLoader"
import CAtegoryBlogList from "../../../../components/blog/CategoryBlogList"


function BlogCategory({
	blog_list,
	get_blog_list_category,
	get_blog_list_category_page,
	count
}) {

	const params = useParams()
	const category_id = params.category_id

	useEffect(() => {
		get_blog_list_category(category_id)
	}, [])

	return (
		<FullWidthLayout>
			<CAtegoryBlogList get_blog_list_page={get_blog_list_category_page} blog_list={blog_list} category_id={category_id} />
		</FullWidthLayout>
	)
}

const mapStateToProps = state => ({
	blog_list: state.blog.blog_list_category,
	count: state.blog.count
})

export default connect(mapStateToProps, {
	get_blog_list_category,
	get_blog_list_category_page
})(BlogCategory)