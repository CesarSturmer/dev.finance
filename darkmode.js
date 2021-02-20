document.addEventListener('DOMContentLoaded', () => {
  const darkModeStorage = localStorage.getItem('dark-mode');
  const html = document.querySelector('html');
  const inputDarkMode = document.getElementById('input-dark-mode');

  //verifica se o modo noturno está habilitado antes ao carregar a página
  if(darkModeStorage){
      html.setAttribute("dark", "true");
      document.querySelector('.button-mode').classList.add('button-mode-active');
  }

  //lógica para alterar de tema
  inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
          html.setAttribute("dark", "true");
          localStorage.setItem("dark-mode", true);
          //mudar svg para a versão do modo dark
          document.querySelector('.button-mode').classList.add('button-mode-active');
      } else {
          html.removeAttribute('dark');
          localStorage.removeItem("dark-mode");
          //mudar svg para a versão do modo light
          document.querySelector('.button-mode').classList.remove('button-mode-active');
      }
  })
})