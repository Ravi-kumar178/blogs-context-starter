import { createContext, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[totalPages,setTotalPages] = useState(null);
    const[pages, setPages] = useState(1);


   async function fetchBlogPost(pages=1){
        setLoading(true);
        const url =  `${baseUrl}?page=${pages}`;
        const data = await axios.get(url);
        console.log(data);
        setPages(data.data.page);
        setTotalPages(data.data.totalPages);
        setPosts(data.data.posts);
        setLoading(false);
        console.log(data.data.page);
        console.log(data.data.totalPages);
        console.log(data.data.posts);
    }

    function handlePageChange(pages){
        setPages(pages);
        fetchBlogPost(pages);
    }

    const value = {
        loading,
        setLoading,
        pages,
        setPages,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
           {children}
    </AppContext.Provider>
}


