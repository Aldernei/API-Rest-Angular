<?php

    //Incluir a conexão
    include("conexao.php");
    
    //Obter dadods
    $obterDados = file_get_contents("php://input");

    //Extrair os dados do JSON
    $extrair = json_decode($obterDados);

    //Separa os dados do JSON
    $idCurso = $extrair->cursos->idCurso;

    //SQL
    $sql = "DELETE FROM cursos WHERE idCurso = $idCurso";
    mysqli_query($conexao, $sql);

?>