import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1> 
      <h2>{ subTitle }</h2>
    </>
  );
};
 
FirstApp.defaultProps = {
 title: 'No hay titulo',
 subTitle: 'No hay subtítulo'
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

