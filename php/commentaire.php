<?php
//if (isset($_POST['submit'])) {
//Oublie d'un champ
if ((empty($_POST['nom'])) OR (empty($_POST['email'])) OR (empty($_POST['commentaire']))) {
	//echo json_encode('une ou plusieurs données sont manquantes');
} else {
	$bdd = new PDO('mysql:host=localhost;dbname=id305623_alimentaion;charset=utf8', 'root', '');
	$bdd->exec("INSERT INTO utilisateur(nom,email,commentaire) VALUES('" . $_POST['nom'] . "','" . $_POST['email'] . "','" . $_POST['commentaire'] . "')");
	echo json_encode('donné inséré dans la base');
}

//}
?>