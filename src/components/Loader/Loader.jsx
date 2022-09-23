import { Audio } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color='green'
      ariaLabel='three-dots-loading'
      wrapperStyle={
        {
          display: 'flex',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#CCC'
        }
      }
      wrapperClass
    />
  )
}
export default Loader
