import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "../components/ErrorBoundary";

const ProblemChild = () => {
    throw new Error("Test error");
};

describe("ErrorBoundary", () => {
    it("renders fallback UI when a child throws an error", () => {
        render(
            <ErrorBoundary>
                <ProblemChild />
            </ErrorBoundary>
        );

        expect(
            screen.getByText("Oops! Something went wrong.")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Reload Page")
        ).toBeInTheDocument();
    });

    it("renders children when no error occurs", () => {
        render(
            <ErrorBoundary>
                <div>Safe Content</div>
            </ErrorBoundary>
        );

        expect(screen.getByText("Safe Content")).toBeInTheDocument();
    });
});
