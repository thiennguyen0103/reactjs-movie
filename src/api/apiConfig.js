const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1151162784bb7ac460720ae772888c58',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
