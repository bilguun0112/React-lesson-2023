
import Books from "./components/books";
import { BookProvider } from "./contexts/BookContext";


export default function BooksList() {
    return (
        <div>
            <BookProvider>
                <Books />
            </BookProvider>
        </div>
    )
}