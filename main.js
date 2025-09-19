// Пример обработки формы (замените на Supabase-интеграцию)
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Здесь будет код для Supabase
  try {
    // Пример: отправка данных в Supabase (замените на реальный запрос)
    // const { data, error } = await supabase
    //   .from('orders') // Название таблицы в Supabase
    //   .insert([{ name, email, message }]);
    // if (error) throw error;
    alert('Заявка отправлена!');
    document.getElementById('contactForm').reset();
  } catch (error) {
    alert('Ошибка: ' + error.message);
  }
});
