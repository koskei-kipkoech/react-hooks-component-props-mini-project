import React from "react";
import Article  from "../components/Article";
function ArticleList(props){
    return(
        <main>
            {props.posts.map((post)=>(
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date || "January 1, 1970"}
                    preview={post.preview}
                    minutes={post.minutes}
                />
            ))}
        </main>
    )
}
export default ArticleList;