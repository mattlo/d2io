import React, {Component, ErrorInfo, ReactNode} from 'react';

export interface IErrorBoundaryProps {
  children : ReactNode;
  defaultErrorMessage ?: string;
}

export default class ErrorBoundary extends Component<IErrorBoundaryProps> {
  state = {
    hasError: false,
    error: new Error('')
  };

  static getDerivedStateFromError(error : Error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error : Error, info : ErrorInfo) {
    // eslint-disable-next-line no-console
    console.debug('caught error within ErrorBoundary');
    // eslint-disable-next-line no-console
    console.error(error, info);
    this.setState({error});
    // @TODO add client side error logging here
  }

  render() {
    return !this.state.hasError ? (
      this.props.children
    ) : (
      <div>
        {this.props.defaultErrorMessage || 'An error has occurred on this page.'}
        <pre style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
          {this.state.error.message}
          {'\n'}
          {this.state.error.stack}
        </pre>
      </div>
    );
  }
}
