import PropTypes from "prop-types";
import { Header ,Footer} from "../../routes";

export const Layout =({children}) => {
    return (
    <>
        <Header/>
        <main className="h-[500vh]">{children}</main>
    </>
    )
};

Layout.propTypes = {
    children: PropTypes.any,
  };