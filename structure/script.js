<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesquisa em Texto de Vídeo</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        input { width: 80%; padding: 8px; margin: 10px 0; }
        .result { margin-top: 10px; font-size: 18px; }
    </style>
</head>
<body>

    <h2>Pesquisar em Legendas do Vídeo</h2>
    <input type="text" id="searchBox" placeholder="Digite para buscar...">
    <div id="results" class="result"></div>

    <script>
        // Legenda simulada de um vídeo
        const videoText = [
            "Olá, seja bem-vindo ao nosso vídeo!",
            "Neste tutorial, vamos aprender a programar.",
            "A programação é incrível e muito útil!",
            "Vamos começar com JavaScript.",
            "Obrigado por assistir!"
        ];

        document.getElementById("searchBox").addEventListener("input", function() {
            const query = this.value.toLowerCase();
            const resultsDiv = document.getElementById("results");

            // Limpa os resultados
            resultsDiv.innerHTML = "";

            // Se não houver texto, limpa e para a busca
            if (query === "") return;

            // Filtra legendas que contêm o texto digitado
            const results = videoText.filter(line => line.toLowerCase().includes(query));

            // Mostra os resultados na tela
            if (results.length > 0) {
                resultsDiv.innerHTML = results.map(line => `<p>${line}</p>`).join("");
            } else {
                resultsDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
            }
        });
    </script>

</body>
</html>
