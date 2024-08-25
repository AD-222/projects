document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const notesInput = document.getElementById('notes');
    const categorySelect = document.getElementById('category');
    const prioritySelect = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');


    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        document.body.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
        themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '🌞';
    });


    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const notes = notesInput.value.trim();
        const category = categorySelect.value;
        const priority = prioritySelect.value;

        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <div class="task-header">
                    <span class="task-text">${taskText}</span>
                    <button class="delete-task">❌</button>
                </div>
                <div class="task-details">
                    <span class="task-due-date">Due: ${dueDate || 'N/A'}</span>
                    <span class="task-category">Category: ${category}</span>
                    <span class="task-priority">Priority: ${priority}</span>
                    <span class="task-notes">Notes: ${notes || 'N/A'}</span>
                </div>
            `;
            taskItem.querySelector('.delete-task').addEventListener('click', () => {
                taskItem.remove();
            });
            taskItem.addEventListener('click', () => {
                taskItem.classList.toggle('done');
            });
            taskList.appendChild(taskItem);
            taskInput.value = '';
            dueDateInput.value = '';
            notesInput.value = '';
        }
    });


    const Sortable = window.Sortable;
    Sortable.create(taskList, {
        animation: 150,
        onEnd: function (evt) {
            console.log('Task order changed');
        }
    });
});
