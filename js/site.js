
let arrayReservation = [];
let calendrier=[
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">30</td><td class="fermeture">1</td><td class="fermeture">2</td><td class="fermeture">3</td><td class="fermeture">4</td><td class="fermeture">5</td><td class="fermeture">6</td></tr><tr><td class="fermeture">7</td><td class="fermeture">8</td><td class="fermeture">9</td><td class="fermeture">10</td><td class="fermeture">11</td><td class="fermeture">12</td><td class="fermeture">13</td></tr><tr><td class="fermeture">14</td><td class="fermeture">15</td><td class="fermeture">16</td><td class="fermeture">17</td><td class="fermeture">18</td><td class="fermeture">19</td><td class="fermeture">20</td></tr><tr><td class="fermeture">21</td><td class="fermeture">22</td><td class="fermeture">23</td><td class="fermeture">24</td><td class="fermeture">25</td><td class="fermeture">26</td><td class="fermeture">27</td></tr><tr><td class="fermeture">28</td><td class="fermeture">29</td><td class="fermeture">30</td><td class="fermeture">31</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">28</td><td class="clair">29</td><td class="clair">30</td><td class="clair">31</td><td class="fermeture">1</td><td class="fermeture">2</td><td class="fermeture">3</td></tr><tr><td class="fermeture">4</td><td class="fermeture">5</td><td class="fermeture">6</td><td class="fermeture">7</td><td class="fermeture">8</td><td class="fermeture">9</td><td class="fermeture">10</td></tr><tr><td class="fermeture">11</td><td class="fermeture">12</td><td class="fermeture">13</td><td class="fermeture">14</td><td class="fermeture">15</td><td class="fermeture">16</td><td class="fermeture">17</td></tr><tr><td class="fermeture">18</td><td class="fermeture">19</td><td class="fermeture">20</td><td class="fermeture">21</td><td class="fermeture">22</td><td class="fermeture">23</td><td class="fermeture">24</td></tr><tr><td class="fermeture">25</td><td class="fermeture">26</td><td class="fermeture">27</td><td class="fermeture">28</td><td class="fermeture">29</td><td class="fermeture">30</td><td class="fermeture">31</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="fermeture">1</td><td class="fermeture">2</td><td class="fermeture">3</td><td class="fermeture">4</td><td class="fermeture">5</td><td class="fermeture">6</td><td class="fermeture">7</td></tr><tr><td class="fermeture">8</td><td class="fermeture">9</td><td class="fermeture">10</td><td class="fermeture">11</td><td class="fermeture">12</td><td class="fermeture">13</td><td class="fermeture">14</td></tr><tr><td class="fermeture">15</td><td class="fermeture">16</td><td class="fermeture">17</td><td class="fermeture">18</td><td class="fermeture">19</td><td class="fermeture">20</td><td class="fermeture">21</td></tr><tr><td class="fermeture">22</td><td class="fermeture">23</td><td class="fermeture">24</td><td class="fermeture">25</td><td class="fermeture">26</td><td class="fermeture">27</td><td class="fermeture">28</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="fermeture">1</td><td class="fermeture">2</td><td class="fermeture">3</td><td class="fermeture">4</td><td class="fermeture">5</td><td class="fermeture">6</td><td class="fermeture">7</td></tr><tr><td class="fermeture">8</td><td class="fermeture">9</td><td class="fermeture">10</td><td class="fermeture">11</td><td class="fermeture">12</td><td class="fermeture">13</td><td class="fermeture">14</td></tr><tr><td class="fermeture">15</td><td class="fermeture">16</td><td class="fermeture">17</td><td class="fermeture">18</td><td class="fermeture">19</td><td class="fermeture">20</td><td class="fermeture">21</td></tr><tr><td class="fermeture">22</td><td class="fermeture">23</td><td class="fermeture">24</td><td class="fermeture">25</td><td class="fermeture">26</td><td class="fermeture">27</td><td class="fermeture">28</td></tr><tr><td class="fermeture">29</td><td class="fermeture">30</td><td class="fermeture">31</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td><td class="clair">4</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">29</td><td class="clair">30</td><td class="clair">31</td><td class="fermeture">1</td><td class="fermeture">2</td><td class="ouverture">3</td><td class="ouverture">4</td></tr><tr class="ouverture"><td class="ouverture">5</td><td class="ouverture">6</td><td class="ouverture">7</td><td class="ouverture">8</td><td class="ouverture">9</td><td class="ouverture">10</td><td class="ouverture">11</td></tr><tr><td class="ouverture">12</td><td class="ouverture">13</td><td class="ouverture">14</td><td class="ouverture">15</td><td class="ouverture">16</td><td class="ouverture">17</td><td class="ouverture">18</td></tr><tr><td class="ouverture">19</td><td class="ouverture">20</td><td class="ouverture">21</td><td class="ouverture">22</td><td class="ouverture">23</td><td class="ouverture">24</td><td class="ouverture">25</td></tr><tr><td class="ouverture">26</td><td class="ouverture">27</td><td class="ouverture">28</td><td class="ouverture">29</td><td class="ouverture">30</td><td class="clair">1</td><td class="clair">2</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">26</td><td class="clair">27</td><td class="clair">28</td><td class="clair">29</td><td class="clair">30</td><td class="ouverture">1</td><td class="ouverture">2</td></tr><tr><td class="ouverture">3</td><td class="ouverture">4</td><td class="ouverture">5</td><td class="ouverture">6</td><td class="ouverture">7</td><td class="ouverture">8</td><td class="ouverture">9</td></tr><tr><td class="ouverture">10</td><td class="ouverture">11</td><td class="ouverture">12</td><td class="ouverture">13</td><td class="ouverture">14</td><td class="ouverture">15</td><td class="ouverture">16</td></tr><tr><td class="ouverture">17</td><td class="ouverture">18</td><td class="ouverture">19</td><td class="ouverture">20</td><td class="ouverture">21</td><td class="ouverture">22</td><td class="ouverture">23</td></tr><tr><td class="ouverture">24</td><td class="ouverture">25</td><td class="ouverture">26</td><td class="ouverture">27</td><td class="ouverture">28</td><td class="ouverture">29</td><td class="ouverture">30</td></tr><tr><td class="ouverture">31</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td><td class="clair">4</td><td class="clair">5</td><td class="clair">6</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">31</td><td class="ouverture">1</td><td class="ouverture">2</td><td class="ouverture">3</td><td class="ouverture">4</td><td class="ouverture">5</td><td class="ouverture">6</td></tr><tr><td class="ouverture">7</td><td class="ouverture">8</td><td class="ouverture">9</td><td class="ouverture">10</td><td class="ouverture">11</td><td class="ouverture">12</td><td class="ouverture">13</td></tr><tr><td class="ouverture">14</td><td class="ouverture">15</td><td class="ouverture">16</td><td class="ouverture">17</td><td class="ouverture">18</td><td class="ouverture">19</td><td class="ouverture">20</td></tr><tr><td class="ouverture">21</td><td class="ouverture">22</td><td class="ouverture">23</td><td class="ouverture">24</td><td class="ouverture">25</td><td class="ouverture">26</td><td class="ouverture">27</td></tr><tr><td class="ouverture">28</td><td class="ouverture">29</td><td class="ouverture">30</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td><td class="clair">4</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">28</td><td class="clair">29</td><td class="clair">30</td><td class="ouverture">1</td><td class="ouverture">2</td><td class="ouverture">3</td><td class="ouverture">4</td></tr><tr><td class="ouverture">5</td><td class="ouverture">6</td><td class="ouverture">7</td><td class="ouverture">8</td><td class="ouverture">9</td><td class="ouverture">10</td><td class="ouverture">11</td></tr><tr><td class="ouverture">12</td><td class="ouverture">13</td><td class="ouverture">14</td><td class="ouverture">15</td><td class="ouverture">16</td><td class="ouverture">17</td><td class="ouverture">18</td></tr><tr><td class="ouverture">19</td><td class="ouverture">20</td><td class="ouverture">21</td><td class="ouverture">22</td><td class="ouverture">23</td><td class="ouverture">24</td><td class="ouverture">25</td></tr><tr><td class="ouverture">26</td><td class="ouverture">27</td><td class="ouverture">28</td><td class="ouverture">29</td><td class="ouverture">30</td><td class="ouverture">31</td><td class="clair">1</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">26</td class="clair"><td class="clair">27</td><td class="clair">28</td><td class="clair">29</td><td class="clair">30</td><td class="clair">31</td><td class="ouverture">1</td></tr><tr><td class="ouverture">2</td><td class="ouverture">3</td><td class="ouverture">4</td><td class="ouverture">5</td><td class="ouverture">6</td><td class="ouverture">7</td><td class="ouverture">8</td></tr><tr><td class="ouverture">9</td><td class="ouverture">10</td><td class="ouverture">11</td><td class="ouverture">12</td><td class="ouverture">13</td><td class="ouverture">14</td><td class="ouverture">15</td></tr><tr><td class="ouverture">16</td><td class="ouverture">17</td><td class="ouverture">18</td><td class="ouverture">19</td><td class="ouverture">20</td><td class="ouverture">21</td><td class="ouverture">22</td></tr><tr><td class="ouverture">23</td><td class="ouverture">24</td><td class="ouverture">25</td><td class="ouverture">26</td><td class="ouverture">27</td><td class="ouverture">28</td><td class="ouverture">29</td></tr><tr><td class="ouverture">30</td><td class="ouverture">31</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td><td class="clair">4</td><td class="clair">5</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">30</td><td class="clair">31</td><td class="ouverture">1</td><td class="ouverture">2</td><td class="ouverture">3</td><td class="ouverture">4</td><td class="ouverture">5</td></tr><tr><td class="ouverture">6</td><td class="ouverture">7</td><td class="ouverture">8</td><td class="ouverture">9</td><td class="ouverture">10</td><td class="ouverture">11</td><td class="ouverture">12</td></tr><tr><td class="ouverture">13</td><td class="ouverture">14</td><td class="ouverture">15</td><td class="ouverture">16</td><td class="ouverture">17</td><td class="ouverture">18</td><td class="ouverture">19</td></tr><tr><td class="ouverture">20</td><td class="ouverture">21</td><td class="ouverture">22</td><td class="ouverture">23</td><td class="ouverture">24</td><td class="ouverture">25</td><td class="ouverture">26</td></tr><tr><td class="ouverture">27</td><td class="ouverture">28</td><td class="ouverture">29</td><td class="ouverture">30</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">27</td><td class="clair">28</td><td class="clair">29</td><td class="clair">30</td><td class="ouverture">1</td><td class="ouverture">2</td><td class="ouverture">3</td></tr><tr><td class="ouverture">4</td><td class="ouverture">5</td><td class="ouverture">6</td><td class="ouverture">7</td><td class="ouverture">8</td><td class="ouverture">9</td><td class="ouverture">10</td></tr><tr><td class="ouverture">11</td><td class="ouverture">12</td><td class="ouverture">13</td><td class="ouverture">14</td><td class="ouverture">15</td><td class="ouverture">16</td><td class="ouverture">17</td></tr><tr><td class="ouverture">18</td><td class="ouverture">19</td><td class="ouverture">20</td><td class="ouverture">21</td><td class="ouverture">22</td><td class="ouverture">23</td><td class="ouverture">24</td></tr><tr><td class="ouverture">25</td><td class="ouverture">26</td><td class="ouverture">27</td><td class="ouverture">28</td><td class="ouverture">29</td><td class="ouverture">30</td><td class="ouverture">31</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="ouverture">1</td><td class="ouverture">2</td><td class="ouverture">3</td><td class="ouverture">4</td><td class="ouverture">5</td><td class="ouverture">6</td><td class="ouverture">7</td></tr><tr><td class="fermeture">8</td><td class="fermeture">9</td><td class="fermeture">10</td><td class="fermeture">11</td><td class="fermeture">12</td><td class="fermeture">13</td><td class="fermeture">14</td></tr><tr><td class="fermeture">15</td><td class="fermeture">16</td><td class="fermeture">17</td><td class="fermeture">18</td><td class="fermeture">19</td><td class="fermeture">20</td><td class="fermeture">21</td></tr><tr><td class="fermeture">22</td><td class="fermeture">23</td><td class="fermeture">24</td><td class="fermeture">25</td><td class="fermeture">26</td><td class="fermeture">27</td><td class="fermeture">28</td></tr><tr><td class="fermeture">29</td><td class="fermeture">30</td><td class="clair">1</td><td class="clair">2</td><td class="clair">3</td><td class="clair">4</td><td class="clair">5</td></tr></table>',
	'<button onclick="moisPrecedent(calendrier,mois)" class="btcal">-</button><button onclick="moisSuivant(calendrier,mois)" class="btcal">+</button><table><tr><th scope="col">Lundi</th><th scope="col">Mardi</th><th scope="col">Mercredi</th><th scope="col">Jeudi</th><th scope="col">Vendredi</th><th scope="col">Samedi</th><th scope="col">Dimanche</th></tr><tr><td class="clair">29</td><td class="clair">30</td><td class="fermeture">1</td><td class="fermeture">2</td><td class="fermeture">3</td><td class="fermeture">4</td><td class="fermeture">5</td></tr><tr><td class="fermeture">6</td><td class="fermeture">7</td><td class="fermeture">8</td><td class="fermeture">9</td><td class="fermeture">10</td><td class="fermeture">11</td><td class="fermeture">12</td></tr><tr><td class="fermeture">13</td><td class="fermeture">14</td><td class="fermeture">15</td><td class="fermeture">16</td><td class="fermeture">17</td><td class="fermeture">18</td><td class="fermeture">19</td></tr><tr><td class="fermeture">20</td><td class="fermeture">21</td><td class="fermeture">22</td><td class="fermeture">23</td><td class="fermeture">24</td><td class="fermeture">25</td><td class="fermeture">26</td></tr><tr><td class="fermeture">27</td><td class="fermeture">28</td><td class="fermeture">29</td><td class="fermeture">30</td><td class="fermeture">31</td><td class="clair">1</td><td class="clair">2</td></tr></table>'
];	
let tout="<div class='attr1'><figure><figcaption class='textimg'>Montagne russe à sensation forte pour adulte</figcaption><img src='image/attraction1.jpg' class='img'></figure><figure><figcaption class='textimg'>Montagne russe avec inversion pour adulte</figcaption><img src='image/attraction2.jpg' class='img'></figure><figure><figcaption class='textimg'>Tour de chute pour adulte</figcaption><img src='image/attraction3.jpg' class='img'></figure></div><div class='attr1'><figure><figcaption class='textimg'>Chaises volantes</figcaption><img src='image/attraction4.jpg' class='img'></figure><figure><figcaption class='textimg'>Grande roue</figcaption><img src='image/attraction5.jpg' class='img'></figure><figure><figcaption class='textimg'>Montagne russe familiale</figcaption><img src='image/attraction6.jpg' class='img'></figure></div><div class='attr1'><figure><figcaption class='textimg'>Montagne russe pour enfant</figcaption><img src='image/attraction7.jpg' class='img'></figure><figure><figcaption class='textimg'>Manège sur l'eau</figcaption><img src='image/attraction8.jpg' class='img'></figure><figure><figcaption class='textimg'>Carousel</figcaption><img src='image/attraction9.jpg' class='img'></figure></div>";
let adulte='<div class="trier"><figure><figcaption class="textimg">Montagne russe à sensation forte pour adulte</figcaption><img src="image/attraction1.jpg" class="img"></figure><figure><figcaption class="textimg">Montagne russe avec inversion pour adulte</figcaption><img src="image/attraction2.jpg" class="img"></figure><figure><figcaption class="textimg">Tour de chute pour adulte</figcaption><img src="image/attraction3.jpg" class="img"></figure></div>';
let famille="<div class='trier'><figure><figcaption class='textimg'>Chaises volantes</figcaption><img src='image/attraction4.jpg' class='img'></figure><figure><figcaption class='textimg'>Grande roue</figcaption><img src='image/attraction5.jpg' class='img'></figure><figure><figcaption class='textimg'>Montagne russe familiale</figcaption><img src='image/attraction6.jpg' class='img'></figure></div>";
let enfant="<div class='trier'><figure><figcaption class='textimg'>Montagne russe pour enfant</figcaption><img src='image/attraction7.jpg' class='img'></figure><figure><figcaption class='textimg'>Manège sur l'eau</figcaption><img src='image/attraction8.jpg' class='img'></figure><figure><figcaption class='textimg'>Carrousel</figcaption><img src='image/attraction9.jpg' class='img'></figure></div>";
let mois=["Décembre 2020","Janvier 2021","Février 2021","Mars 2021","Avril 2021","Mai 2021","Juin 2021","Juillet 2021","Août 2021","Septembre 2021","Octobre 2021","Novembre 2021","Décembre 2021"];
let attraction = [
	{
		nom:"Montagne russe à sensation forte pour adulte",
		taille:1.30,
		html:"<figure><figcaption class='textimg'>Montagne russe à sensation forte pour adulte <br> Taille requise:1.30 mètre</figcaption><img src='image/attraction1.jpg' class='img'></figure>",	
	},
	{
		nom:"Montagne russe avec inversion pour adulte",
		taille:1.35,
		html:"<figure><figcaption class='textimg'>Montagne russe avec inversion pour adulte <br> Taille requise:1.35 mètre</figcaption><img src='image/attraction2.jpg' class='img'></figure>",	
	},
	{
		nom:"Tour de chute pour adulte",
		taille:1.20,
		html:"<figure><figcaption class='textimg'>Tour de chute pour adulte <br>Taille requise:1.20 mètre</figcaption><img src='image/attraction3.jpg' class='img'></figure>",	
	},
	{
		nom:"Chaises volantes",
		taille:1.10,
		html:"<figure><figcaption class='textimg'>Chaises volantes <br> Taille requise:1.10 mètre</figcaption><img src='image/attraction4.jpg' class='img'></figure>",	
	},
	{
		nom:"Grande roue",
		taille:1.15,
		html:"<figure><figcaption class='textimg'>Grande roue <br> Taille requise:1.15 mètre</figcaption><img src='image/attraction5.jpg' class='img'></figure>",	
	},
	{
		nom:"Montagne russe familiale",
		taille:1,
		html:"<figure><figcaption class='textimg'>Montagne russe familiale <br> Taille requise:1 mètre</figcaption><img src='image/attraction6.jpg' class='img'></figure>",	
	},
	{
		nom:"Manège sur l'eau",
		taille:0.60,
		html:"<figure><figcaption class='textimg'>Montagne russe pour enfant <br> Taille requise:0.60 mètre</figcaption><img src='image/attraction7.jpg' class='img'></figure>",	
	},
	{
		nom:"Carrousel",
		taille:0.50,
		html:"<figure><figcaption class='textimg'>Manège sur l'eau  <br>Taille requise:0.50 mètre</figcaption><img src='image/attraction8.jpg' class='img'></figure>",	
	},
	{
		nom:"Montagne russe pour enfant",
		taille:0.90,
		html:"<figure><figcaption class='textimg'>Carousel  <br>Taille requise:0.90 mètre</figcaption><img src='image/attraction9.jpg' class='img'></figure>",	
	}
];
/**
  *  Analyse les données du formulaire et les affiches dans la page HTML
  *
  * @param formulaire - le formulaire
  * @param {array} array - tableau à remplir par les données du formulaire
  * @return {false} 
  */
function ajoutReservation(formulaire,arrayReservation){
	let reservation = {
	nom : "0",
	senior : 0,
	adulte : 0,
	enfant : 0,
	etudiant : 0,
	prix : 0,
	PremiumTicket : 0,
	PremiumPass : 0,
	}
	reservation.nom= document.getElementById("nom").value;
	reservation.senior=Number(document.getElementById("senior").value);
	reservation.adulte=Number(document.getElementById("adulte").value);
	reservation.enfant=Number(document.getElementById("enfant").value);
	reservation.etudiant=Number(document.getElementById("etudiant").value);	
	reservation.PremiumTicket=Number(document.getElementById("PremiumTicket").value);
	reservation.PremiumPass=Number(document.getElementById("PremiumPass").value);
	prix=(reservation.senior*15)+(reservation.adulte*20)+(reservation.enfant*5)+(reservation.etudiant*15)+(reservation.PremiumTicket*30)+(reservation.PremiumPass*159);	
	reservation.prix=prix; 
	arrayReservation[arrayReservation.length]=reservation;
	document.getElementById("commande").innerText= "Votre commande de "+reservation.prix+" euros au nom de "+reservation.nom+" comprenant "+reservation.enfant+" ticket(s) enfants,"+reservation.adulte+" ticket(s) adulte, "+reservation.etudiant+" ticket(s) étudiant "+reservation.senior+" ticket(s) senior, "+reservation.PremiumTicket+" Premium Ticket et "+reservation.PremiumPass+" Premium Pass a bien été effectuée.";
	return false;
}
/**
  *  Affiche l'élément duivant d'un tableau dans une page html
  *
  * @param array - array contenant des codes HTML
  * @param {array} array - array contenant des éléments à inclure dans une page HTML
  * @return {false} 
  */
function moisSuivant(calendrier,mois){	
	let compteur=0;
	let compteur2=0;
	while(compteur<mois.length){
		if(document.getElementById("mois").innerText==mois[compteur]){
			compteur2=compteur;
		}
		compteur++;
	}
	compteur2++;
	if(compteur2<0 || compteur2>(mois.length-1)){
		compteur2--;
		document.getElementById("mois").innerText=mois[compteur2];
		document.getElementById("ouverture").innerHTML=calendrier[compteur2]+"Le calendrier d'ouverture n'est pas actualisé à la date supérieure.";
	}
	else{
		document.getElementById("mois").innerText=mois[compteur2];
		document.getElementById("ouverture").innerHTML=calendrier[compteur2];
	}
	return false;	
}

function moisPrecedent(calendrier,mois){	
	let compteur=0;
	let compteur2=0;
	while(compteur<mois.length){
		if(document.getElementById("mois").innerText==mois[compteur]){
			compteur2=compteur;
		}
		compteur++;
	}
	compteur2--;
	if(compteur2<0 || compteur2>(mois.length-1)){
		compteur2++;
		document.getElementById("mois").innerText=mois[compteur2];
		document.getElementById("ouverture").innerHTML=calendrier[compteur2]+"Le calendrier d'ouverture n'est pas actualisé à la date inférieure.";
	}
	else{
		document.getElementById("mois").innerText=mois[compteur2];
		document.getElementById("ouverture").innerHTML=calendrier[compteur2];
	}
	return false;	
}
function changerType(formulaire){
	html=creationCode(adulte,enfant,famille,tout);
	document.getElementById("resultat").innerHTML=html;
	return false;
}
function creationCode(adulte,enfant,famille,tout){
	let html="";
	let type="";
	type=document.getElementById("type").value;
	if(type=="Adulte"){
		html=adulte;
	}
	else if(type=="Enfant"){
		html=enfant;
	}
	else if(type=="Famille"){
		html=famille;
	}
	else if(type=="Toutes les attractions"){
		html=tout;
	}
	return html;
}

function trierDecroissant(attraction){
	attraction.sort((a,b) => (b.taille > a.taille) ? 1 : ((a.taille > b.taille) ? -1 : 0));
	let htmlattr="<div class='attr1'>";
	for(let i=0;i<attraction.length;i++){
		if(i===2||i===5){
			htmlattr+=attraction[i].html+"</div><div class='attr1'>";
		}
		else if(i===8){
			htmlattr+=attraction[i].html+"</div>";		
		}
		else{
			htmlattr+=attraction[i].html;
		}	
	}
	document.getElementById("resultat").innerHTML=htmlattr;
}
function trierCroissant(attraction){
	attraction.sort((a,b) => (a.taille > b.taille) ? 1 : ((b.taille > a.taille) ? -1 : 0));
	let htmlattr="<div class='attr1'>";
	for(let i=0;i<attraction.length;i++){
		if(i===2||i===5){
			htmlattr+=attraction[i].html+"</div><div class='attr1'>";
		}
		else if(i===8){
			htmlattr+=attraction[i].html+"</div>";			
		}
		else{
			htmlattr+=attraction[i].html;
		}		
	}
	document.getElementById("resultat").innerHTML=htmlattr;
}





