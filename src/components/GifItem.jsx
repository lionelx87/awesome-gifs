import PropTypes from 'prop-types'
export const GifItem = ({ title, url, id }) => {

  const onClick = () => {
    navigator.clipboard.writeText(url);
  };
  
  return (
    <div className="card animate__animated animate__zoomInDown" onClick={ onClick }>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}