import { useEffect } from "react";
import { connect } from "react-redux";
import BlogList from "../../../components/blog/BlogList";
import Header from "../../../components/blog/Header";
import FullWidthLayout from "../../../hocs/layouts/FullWidthLayout";
import { get_blog_list, get_blog_list_page } from "../../../redux/actions/blog"

function Blog({
}){

    return (
        <FullWidthLayout>
            <Header />
            <BlogList />
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Blog)