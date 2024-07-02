import propTypes from "prop-types"

function BackArrowIcon({ color, width, height }) {
  return (
    <svg width={width || "14"} height={height || "24"} viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" >
      <path d="M13.2801 1.06228C13.6063 1.38864 13.7896 1.83122 13.7896 2.29269C13.7896 2.75417 13.6063 3.19675 13.2801 3.52311L4.66544 12.1377L13.2801 20.7524C13.5971 21.0806 13.7725 21.5202 13.7685 21.9765C13.7646 22.4328 13.5816 22.8693 13.2589 23.192C12.9362 23.5147 12.4997 23.6977 12.0434 23.7017C11.5871 23.7056 11.1475 23.5302 10.8193 23.2132L0.974196 13.3682C0.647935 13.0418 0.464651 12.5992 0.464651 12.1377C0.464651 11.6763 0.647935 11.2337 0.974196 10.9073L10.8193 1.06228C11.1456 0.736018 11.5882 0.552734 12.0497 0.552734C12.5111 0.552734 12.9537 0.736018 13.2801 1.06228Z" fill={color} />
    </svg >
  )
}

BackArrowIcon.propTypes = {
  color: propTypes.string.isRequired,
  width: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
}
export default BackArrowIcon