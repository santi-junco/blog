import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "../../../redux/actions/blog";
import FullWidthLayout from "../../../hocs/layouts/FullWidthLayout";

function BlogPost({
}){

    const params = useParams()
    const slug = params.slug

    useState(()=>{
        get_blog()
    },[])

    return (
        <FullWidthLayout>
            Blog
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(BlogPost)