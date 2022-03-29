import {Link} from "react-router-dom";

export default function NoMatchPage() {
    return (
        <div>
            <h2>No page found</h2>
            <p>
                <Link to="/">Return to Home</Link>
            </p>
        </div>
    );
}

