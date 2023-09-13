export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmY4NTVjNjMxNDQ0YmIyM2RhNjMyZTcwMmYzZDg0ZCIsInN1YiI6IjY0ZmVjNDQ1ZWZlYTdhMDBjMzk1ZTI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLONVtxsGrmFj8QQTsud95nU4iW_qdni0UAAKYc81h8'
    }
  };
  
const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
const movies = await data.json();
export const MovieArray = await movies.results;




// const trending = await fetch(`https://api.themoviedb.org/3/movie/${238}??&append_to_response=videos&language=en-US`, options);
// export const list = await trending.json();
// console.log(list);
// export const SearchMovie = await list.results;
// console.log(SearchMovie);