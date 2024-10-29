<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $nome = $_POST['name'];
        $email = $_POST['email'];

        echo "Os dados Recebidos do Formulário HTML foram: ";
        echo "<br/>";
        echo "Nome: " . $nome;
        echo "<br/>";
        echo "E-mail: " . $email;
    ?>
</body>
</html>