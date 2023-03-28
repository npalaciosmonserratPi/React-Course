import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  
  return (
    <>
      <h1>{ title } </h1>
      <h2>{ subTitle }</h2>
    </>
  );
};
 
FirstApp.defaultProps = {
 // title: 'No hay titulo',
 subTitle: 'No hay subtítulo'
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

