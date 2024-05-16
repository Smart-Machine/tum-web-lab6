import "./Posts.css";
import Post from "../post/Post";


export default function Posts() {
	const posts = JSON.parse(localStorage.getItem("posts") || "[]");

	return (
		<div className="posts">
			{posts.map((item) => 
				<Post 
					img={item["image"]}
					title={item["title"]}
					description={item["description"]}
					timestamp={item["timestamp"]}
				/>
			)}
		</div>
	);
}