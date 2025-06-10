// OBS: PEGUEI SUGESTÕES DE PARTES DO CÓDIGO COM IA

function irHome() {
  const home = document.getElementById('home');
  home.scrollIntoView({behavior: 'smooth'});
}

function closeSidebar() {
  const sidebar = document.getElementById('sideBar');
  sidebar.style.display = "none";
}

function openSidebar() {
  const sideBar = document.getElementById('sideBar');
  sideBar.style.display = "block";
}

function mostrarConsult() {
    const consultar = document.getElementById('consultar');
    if (consultar.style.display === "none" || consultar.style.display === ''){
        consultar.style.display = "block";
        consultar.scrollIntoView({behavior: 'smooth'});
    } else {
        consultar.style.display = "none";
    }
}

function mostrarFeed() {
    const feedback = document.getElementById('feedback');
    if (feedback.style.display === 'none' || feedback.style.display === '') {
        feedback.style.display = 'flex';
        feedback.scrollIntoView({ behavior: "smooth" });    /* SCROLAR A TELA ATÉ A ROTINA */
    } else {
        feedback.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("ratingValue");
    const errorMessage = document.getElementById("error-message");
  
    stars.forEach(star => {
      star.addEventListener("click", function() {
        const value = this.getAttribute("data-value");
        ratingValue.value = value;
  
        // Remover seleção anterior
        stars.forEach(s => s.classList.remove("selected"));
  
        // Marcar estrelas até o valor selecionado
        for (let i = 0; i < value; i++) {
          stars[i].classList.add("selected");
        }
  
        errorMessage.style.display = "none"; // Ocultar mensagem de erro ao selecionar uma avaliação
    });
});
  
document.getElementById("ratingForm").addEventListener("submit", function(event) {
    if (ratingValue.value === "") {
    errorMessage.style.display = "block";
    event.preventDefault();
    }
});
});

window.addEventListener("scroll", function() {
    let scrollPosition = window.innerHeight + window.scrollY;
    let documentHeight = document.body.offsetHeight;
  
    if (scrollPosition >= documentHeight) {
      document.getElementById("sideBox").style.display = "block";
    }
  });
  
  function closeBox() {
    document.getElementById("sideBox").style.display = "none";
}

function subir() {
    const subir = document.getElementById('menu');
    subir.scrollIntoView({behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function() {
    // Definir a data de término (3 dias a partir de agora)
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);
  
    function updateCountdown() {
      let now = new Date();
      let timeRemaining = deadline - now;
  
      if (timeRemaining <= 0) {
        document.getElementById("countdown").innerHTML = "Tempo expirado!";
        return;
      }
  
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000); // Atualiza a cada segundo
});