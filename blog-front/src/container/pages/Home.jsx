import { connect } from "react-redux";
import FullWidthLayout from "../../hocs/layouts/FullWidthLayout";

function Home({
}){

    return (
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Home)