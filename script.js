const content = document.getElementById('content');
const pagination = document.getElementById('pagination');
const itemsPerPage = 3; // Количество элементов на странице

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paragraphs = content.getElementsByTagName('div');

  for (let i = 0; i < paragraphs.length; i++) {
    if (i >= startIndex && i < endIndex) {
      paragraphs[i].style.display = 'block';
    } else {
      paragraphs[i].style.display = 'none';
    }
  }
}

function createPagination() {
  const paragraphs = content.getElementsByTagName('div');
  const totalPages = Math.ceil(paragraphs.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', function() {
      showPage(i);
      highlightButton(i); // Вызываем функцию выделения кнопки
    });
    pagination.appendChild(pageButton);
  }
}

function highlightButton(selectedPage) {
  const buttons = pagination.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    if (i + 1 === selectedPage) {
      buttons[i].classList.add('selected');
    } else {
      buttons[i].classList.remove('selected');
    }
  }
}

// Показать первую страницу по умолчанию
showPage(1);

// Создать пагинацию
createPagination();