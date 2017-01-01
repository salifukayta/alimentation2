<div class="contentp2" id="mainApropoDiv">
	<section id="content">
		<?php
		try {
			$bdd = new PDO('mysql:host=localhost;dbname=id305623_alimentaion;charset=utf8', 'root', '');
			$reponse = $bdd->query('SELECT * FROM utilisateur');

			while ($donnees = $reponse->fetch()) {
				//echo $donnees['nom'] . '<br />';
			}
			$reponse->closeCursor();
		} catch (Exception $e) {
			die('Erreur : ' . $e);
		} ?>
		<div class="content-bg">
			<div class="container_24">
				<div class="wrapper">
					<article class="grid_16">
						<h3>Forum de discussion libre</h3>
						<div class="indent-left">

                                                    <div class="bloc_commentaire">
                                                        <div class="ligne1">
                                                            <div class="bloc1">
                                                               Nom 
                                                              </div>
                                                            <div class="bloc2">
                                                            Commentaires
                                                            </div>
                                                        </div>
                                                        <?php
                                                        include("commentaire.php"); // on appelle le fichier
							$reponse = $bdd->query('SELECT * FROM utilisateur');
                                                        
                                                        while ($donnees = $reponse->fetch()) {
									?>
                                                        <div class="ligne2">
                                                            <div class="bloc2_1">
                                                                <?php echo $donnees['nom']; ?>
                                                              </div>
                                                            <div class="bloc2_2">
                                                           <?php echo $donnees['commentaire']; ?>
                                                            </div>
                                                        </div>
                                                        <?php
								}
								?>
                                                        
                                                        
                                                    </div>

						</div>
                                                <br><br><br>
                                                <div class="nbvisite">
                                                    <div class="nbvisit1">
                                                         <?php
                                                include("nb_visite.php");
                                                
                                                  ?>
                                                    </div>
                                                    <div>
                                                      <img src="images/ok.gif">  
                                                    </div>
                                                </div>
                                               
                                                
					</article>
					<article class="grid_8">
						<div class="indent-top3">
							<div class="indent bcolor-1">
								<h4 class="p2">Message</h4>
								<form id="contact-form" method="post">
									<!--<div class="success"> Message envoyé!<br></div>-->


									<fieldset>
                                                                            
                                                                         
										<label class="name">
											<input type="text" placeholder="Nom" name="nom" id="nom">
                                                                                        <p id="invalidenom" class="msginvalide"></p>
											<!--<span class="error">*Invalide nom !</span> <span class="empty">Invalide nom!</span>-->
										</label>
										<label class="email">
											<input type="email" placeholder="E-mail" name="email" id="email">
											<p id="invalidemail" class="msginvalide"></p>
										</label>

										<label class="message">
											<textarea placeholder="Votre message ici"  id="commentaire" name="commentaire"></textarea>
                                                                                           <p id="invalidecomm" class="msginvalide"></p>
										</label>
                                                                            <br><br>
										<div class="buttons-wrapper">
											<a class="link-2" data-type="reset" id="vider">Vider</a>
                                                                                        <a class="link-2" name="submit" id="envoyer_commentaire">Envoyer</a>
                                                                                        <br><br>
                                                                                        <p id="bien_enreg" class="bien_enreg"></p>
                                                                                        <!--data-type="submit" name="submit" id="envoyer_commentaire"-->
										</div>
                                                                          <!--  <script type="text/javascript">
                                                                                function myFunction() {
                                                                                    var x, text;

                                                                                    // Get the value of the input field with id="numb"
                                                                                    x = document.getElementById("nom").value;

                                                                                    // If x is Not a Number or less than one or greater than 10
                                                                                    if (x=="") {
                                                                                        text = "Input not valid";
                                                                                    } else {
                                                                                        text = "Input OK";
                                                                                    }
                                                                                    document.getElementById("demo").innerHTML = text;
                                                                                }
                                                                                </script>-->
                                                                            
                                                          
                                                                            
									</fieldset>

								</form>
							</div>
						</div>
                                            
                                            
					</article>
				</div>
			</div>
		</div>
	</section>
</div>


