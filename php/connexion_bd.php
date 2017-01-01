<?php
try {
	$bdd = new PDO('mysql:host=localhost;dbname=id305623_alimentaion;charset=utf8', 'root', '');
} catch (Exception $e) {
	die('Erreur : ' . $e);
}


/*
$reponse = $bdd->query('SELECT * FROM utilisateur');

while ($donnees = $reponse->fetch())
{
echo $donnees['nom'] . '<br />';
}

$reponse->closeCursor();*/

?>