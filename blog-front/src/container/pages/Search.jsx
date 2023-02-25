import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BlogListSearch from "../../components/blog/BlogListSearch";
import FullWidthLayout from "../../hocs/layouts/FullWidthLayout";
import { search_blog } from "../../redux/actions/blog";

function Search({
    search_blog,
    posts
}){
    
    const param = useParams()
    const term = param.term

    useEffect(()=>{
        search_blog(term)
    },[])

    return(
        <FullWidthLayout>
            <BlogListSearch blog_list={posts}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    posts: state.blog.filtered_posts
})

export default connect(mapStateToProps, {
    search_blog,
})(Search)