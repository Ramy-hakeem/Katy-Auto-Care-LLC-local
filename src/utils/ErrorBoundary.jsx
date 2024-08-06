import React from "react";
import PropTypes from "prop-types";



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  // this react call it if any error found 
  static getDerivedStateFromError() {
    // Update state so the component render.
    return { hasError: true };
  }

  // this react call it after he found the error 
  componentDidCatch(error, errorInfo) {
    // Log the error if needed
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              {` We're sorry, but something went wrong. Please try again later.`}
            </p>
            <button
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
