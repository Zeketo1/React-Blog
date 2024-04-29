import React, { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea required></textarea>
                <label>Blog author:</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
};

export default Create;
