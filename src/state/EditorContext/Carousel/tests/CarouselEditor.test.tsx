// import { render, screen, fireEvent } from "@testing-library/react";
// import { CarouselEditor } from "../components/CarouselEditor";
// import { EditorProvider } from "../../Provider";

// describe("CarouselEditor", () => {
//     it("renders without crashing", () => {
//         render(
//             <EditorProvider>
//                 <CarouselEditor />
//             </EditorProvider>
//         );
//         expect(screen.getByText("Carousel Editor")).toBeInTheDocument();
//     });

//     it("opens modal to add image", () => {
//         render(
//             <EditorProvider>
//                 <CarouselEditor />
//             </EditorProvider>
//         );

//         const addButton = screen.getByText("Add Image");
//         fireEvent.click(addButton);

//         expect(
//             screen.getByText("Add New Image")
//         ).toBeInTheDocument();
//     });

//     it("displays feedback modal on invalid image URL", () => {
//         render(
//             <EditorProvider>
//                 <CarouselEditor />
//             </EditorProvider>
//         );

//         const addButton = screen.getByText("Add Image");
//         fireEvent.click(addButton);

//         const input = screen.getByPlaceholderText(
//             "https://example.com/image.jpg"
//         );
//         fireEvent.change(input, { target: { value: "invalid-url" } });

//         const confirmButton = screen.getByText("Confirm");
//         fireEvent.click(confirmButton);

//         expect(
//             screen.getByText("Invalid image URL. Please try again.")
//         ).toBeInTheDocument();
//     });
// });
