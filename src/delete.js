import { homePage } from "./home.js";
import { loggedInUser, showView } from "./util.js";

export async function deleteMovie(e, movieId){
    e.preventDefault();
    const token = loggedInUser().accessToken;

    const res = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })
    if(res.ok){
        return homePage();
    };
}