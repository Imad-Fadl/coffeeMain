# coffeeMain
Aperçu
Ce projet est une page web pour un café proposant une variété de produits et services liés au café. Le site est conçu pour être visuellement attrayant et convivial, avec des sections telles que À Propos, Services et Ventes, ainsi qu'un en-tête de navigation et un pied de page. La page utilise diverses bibliothèques externes pour les icônes, les animations et les polices afin d'améliorer l'expérience utilisateur.

Structure du Projet
•	index.html : Le fichier HTML principal contenant la structure de la page web.
•	style.css : Le fichier CSS pour le style de la page web.
•	script.js : Le fichier JavaScript pour ajouter des fonctionnalités interactives.
•	Les ressources d'images utilisées sur la page web : logo.png, hero.png, about.jpg, order.png, ship.png, deliv.png, 20.png, aruba.png, granodeoro.png, granoverde.png, arabicasup.png, kettle.png, thermo.png, keurig.png, espresso.png.
•	Les bibliothèques externes sont liées via CDN.

Dépendances
Le projet utilise les bibliothèques et ressources externes suivantes :
•	Boxicons : Pour diverses icônes utilisées sur le site.
<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
•	Remix Icons : Pour des icônes supplémentaires.
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css">
•	Google Fonts : Pour la famille de polices Roboto.
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
•	AOS (Animate On Scroll) : Pour les animations de défilement.
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

Structure HTML
Le fichier HTML est structuré comme suit :
<head> : Contient les méta-informations, les liens vers les feuilles de style et le titre de la page.
<body> :
En-tête : Contient le logo et le menu de navigation.
Section Principale : Présente une bannière promotionnelle pour le café glacé.
Invite au Défilement : Une invite pour faire défiler vers la section À Propos.
Icônes de Réseaux Sociaux : Liens vers les profils de réseaux sociaux.
Section À Propos : Informations sur le café.
Section Services : Détails sur les services fournis (Commande, Expédition, Livraison).
Section Ventes : Affiche les offres spéciales et les produits.
Pied de Page : Contient des liens vers les politiques de confidentialité, les catégories de produits et les informations de contact.
CSS et Style
Le fichier CSS (style.css) est lié dans la section <head> et gère le style de la page web, y compris la mise en page, les couleurs, la typographie et la réactivité.

Fonctionnalité JavaScript
Le fichier JavaScript (script.js) inclut les fonctionnalités suivantes :

•	Initialisation de AOS : Initialise la bibliothèque AOS pour les animations de défilement.
AOS.init({
  offset: 1,
});
•	Duplication de Contenu Dynamique : Clone et ajoute l'élément .logos-slide pour créer un effet de défilement continu pour la section des ventes.
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".sale").appendChild(copy);
•	Sélection des éléments : Ici, menu sélectionne un élément avec l'ID menu-icon, et navlist sélectionne un élément avec la classe navlist.
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
•	Événement de clic sur le menu : Ce code ajoute un écouteur d'événements de clic à l'élément menu. Lorsqu'il est cliqué, il bascule la classe bx-x sur l'élément menu et bascule la classe open sur l'élément navlist. Cela est souvent utilisé pour créer un menu ou une barre latérale réactif(e).
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
•	Événement de défilement (scroll) : Ce code ajoute un écouteur d'événements de défilement à la fenêtre. Lorsque l'utilisateur fait défiler, il vérifie si la position de défilement verticale (window.scrollY) est supérieure à 150 pixels. Si c'est le cas, il ajoute la classe scrolled aux éléments header et scroll. Sinon, il supprime la classe scrolled de ces éléments. Cela peut être utilisé pour déclencher des changements dans l'interface utilisateur en fonction de la position de défilement de l'utilisateur, comme réduire un en-tête ou afficher un bouton "retour en haut".
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scroll = document.querySelector('.scroll');
    if (window.scrollY > 150) {
        header.classList.add('scrolled');
        scroll.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        scroll.classList.remove('scrolled'); }});

Comment Exécuter
Pour exécuter ce projet localement :
Clonez ou téléchargez le dépôt sur votre machine locale.
Assurez-vous que toutes les ressources d'images sont placées dans le bon répertoire par rapport à index.html.
Ouvrez index.html dans un navigateur web pour voir la page web.
50% dans zoom pour meilleure experience 
