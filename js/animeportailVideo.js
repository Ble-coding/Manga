   // Fonction pour gérer l'observation des éléments
   function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Ajoutez la classe 'show' lorsque l'élément est dans la vue
            observer.unobserve(entry.target); // Arrêtez d'observer une fois que l'élément est visible
        }
    });
}

// Créez un observateur d'intersection
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.9 });

// Sélectionnez l'élément à observer
const columnElement = document.querySelector('.column');

// Ajoutez l'élément à l'observateur d'intersection
if (columnElement) {
    observer.observe(columnElement);
}