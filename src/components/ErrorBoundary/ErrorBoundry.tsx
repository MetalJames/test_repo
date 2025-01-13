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
        // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can log the error to an error reporting service (e.g., Sentry, New Relic)
        console.error("Uncaught Error:", error, info);
    }

    render() {
        if (this.state.hasError) {
        // Render fallback UI
        return (
            this.props.fallback || (
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Something went wrong.</h2>
                <p className="text-gray-600">
                We&apos;re sorry, but an unexpected error has occurred.
                </p>
            </div>
            )
        );
        }

        // Render children if there’s no error
        return this.props.children;
    }
}
