// Выбирает все элементы класса .kanban-card и добавляет события к каждому из них.
document.querySelectorAll('.kanban-card').forEach(card => {
    // Событие срабатывает при перетаскивании карты
    card.addEventListener('dragstart', e => {
        // Добавляет класс «перетаскивания» к перетаскиваемой карте.
        e.currentTarget.classList.add('dragging');
    });

    // Событие срабатывает, когда вы заканчиваете перетаскивать карту
    card.addEventListener('dragend', e => {
        // Удаляет класс «перетаскивания» при конце перетаскивания карты.
        e.currentTarget.classList.remove('dragging');
    });
});

// Выбирает все элементы класса .kanban-cards (столбцы) и добавляет события к каждому из них.
document.querySelectorAll('.kanbancards').forEach(column => {
    // Событие срабатывает, когда перетаскиваемая карта проходит над столбцом (перетаскивание)
    column.addEventListener('dragover', e => {
        // Предотвращает поведение по умолчанию, позволяющее «выбросить» карту.
        e.preventDefault();
        // Добавить класс «cards-hover»
        e.currentTarget.classList.add('cards-hover');
    });

    // событие срабатывает, когда карта покидает область столбца (когда карту вытаскивают)
    column.addEventListener('dragleave', e => {
        // Удаляет класс «cards-hover», когда карточка больше не находится над столбцом.
        e.currentTarget.classList.remove('cards-hover');
    });

    // Событие срабатывает, когда карта падает в столбец
    column.addEventListener('drop', e => {

        // Выбирает перетаскиваемую карту (которая имеет класс «перетаскивание»)
        const dragCard = document.querySelector('.kanban-card.dragging');
        
        // Прикрепите (переместите) перетаскиваемую карточку в столбец, куда она была оставлена.
        e.currentTarget.appendChild(dragCard);
    });
});
