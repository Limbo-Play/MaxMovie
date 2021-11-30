import PropTypes from "prop-types";


export default function NetworkTitle({title}) {
    return (
        <span className="sectionTitle">{title}</span>
    )
}


NetworkTitle.propTypes = {
  title: PropTypes.string,
};