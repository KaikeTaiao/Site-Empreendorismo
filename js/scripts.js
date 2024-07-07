document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "Análise de Jogo 1",
            image: "https://via.placeholder.com/300",
            content: "Uma análise detalhada do Jogo 1."
        },
        {
            title: "Notícias sobre Jogo 2",
            image: "https://via.placeholder.com/300",
            content: "As últimas notícias sobre o Jogo 2."
        },
        {
            title: "Dicas e Truques para Jogo 3",
            image: "https://via.placeholder.com/300",
            content: "Algumas dicas e truques úteis para o Jogo 3."
        }
    ];

    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postImage = document.createElement('img');
        postImage.src = post.image;
        postElement.appendChild(postImage);

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        postsContainer.appendChild(postElement);
    });
});
