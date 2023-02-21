import { connect } from "react-redux"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"

const FullWidthLayout = ({children}) => {
    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, {

})(FullWidthLayout)