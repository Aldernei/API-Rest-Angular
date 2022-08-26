<?php

    //Incluindo a conexão
    include("conexao.php");

    //Preparar o SQL
    $sql = "SELECT * FROM cursos";

    //Executar o comando
    $executar = mysqli_query($conexao, $sql);

    //Criando um vetor
    $cursos = [];

    //Indice
    $indice = 0;

    //Criando um laço
    while ($linha = mysqli_fetch_assoc($executar)){
        $cursos[$indice]['idCurso'] = $linha['idCurso'];
        $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
        $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

        $indice++;
    }

    //Encapsular no JSON
    json_encode(['dados' => $cursos]);
    


?>