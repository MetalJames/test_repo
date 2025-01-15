import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Uncaught Error:", error, info);
    }

    handleReload = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    handleDemoAlert = () => {
        alert("This is just a demo. Support is not available.");
    };

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="flex flex-col items-center p-6 text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            Oops! Something went wrong.
                        </h2>
                        <p className="text-gray-600 mb-4">
                            We're sorry for the inconvenience. You can try
                            reloading the page or contact support for further
                            assistance.
                        </p>
                        <div className="w-full md:w-1/2 xl:w-1/4 flex items-center justify-around">
                            <button
                                onClick={this.handleReload}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Reload Page
                            </button>
                            <button
                                onClick={this.handleDemoAlert}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                            >
                                Contact Support (Demo)
                            </button>
                        </div>
                    </div>
                )
            );
        }
        return this.props.children;
    }
};