
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const mascota = document.getElementById('mascotaBtn');
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatForm = document.getElementById('chatForm');
    const sendBtn = document.getElementById('sendBtn');
    const minimizeBtn = document.getElementById('minimizeChat');

    if (!mascota || !chatBox || !chatMessages || !chatInput) return;


    mascota.setAttribute('tabindex', '0');
    mascota.setAttribute('role', 'button');
    mascota.setAttribute('aria-expanded', 'false');
    mascota.setAttribute('aria-controls', 'chatBox');

    function appendMessage(text, who = 'bot') {
      const el = document.createElement('div');
      el.className = `msg ${who}`;
      el.textContent = text;
      chatMessages.appendChild(el);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function openChat() {
      chatBox.classList.add('show');
      chatBox.setAttribute('aria-hidden', 'false');
      mascota.setAttribute('aria-expanded', 'true');
      setTimeout(() => chatInput.focus(), 160);
    }

    function closeChat() {
      chatBox.classList.remove('show');
      chatBox.setAttribute('aria-hidden', 'true');
      mascota.setAttribute('aria-expanded', 'false');
      mascota.focus();
    }

    function toggleChat() {
      if (chatBox.classList.contains('show')) closeChat();
      else openChat();
    }

    if (chatMessages.children.length === 0) {
      appendMessage('¡Hola! Soy SIDCU. ¿En qué puedo ayudarte?', 'bot');
    }

    function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      appendMessage(text, 'user');
      chatInput.value = '';
      chatInput.focus();

      setTimeout(() => {
        const reply = generateBotReply(text);
        appendMessage(reply, 'bot');
      }, 600);
    }

    function generateBotReply(userText) {
      const lower = userText.toLowerCase();
      if (lower.includes('hola') || lower.includes('holas')) return '¡Hola! ¿Cómo puedo ayudarte hoy?';
      if (lower.includes('carrera') || lower.includes('carreras')) return '¿Qué tipo de carrera te interesa? (Pregrado, Postgrado, Técnico...)';
      if (lower.includes('beca') || lower.includes('becas')) return 'Puedes revisar la sección de oportunidades en nuestra página o suscribirte para recibir alertas.';
      if (lower.includes('gracia') || lower.includes('gracias')) return '¡Con todo el gusto! Aqui estare por si necesitas mas información.';
      if (lower.includes('pregrado') || lower.includes('pregrados')) return '¡Claro que si! Para mayor información, selecciona el botón PreGrado, que se encuentra en la parte superior de la pagina.';
      if (lower.includes('postgrado') || lower.includes('postgrados')) return '¡Claro que si! Para mayor información, selecciona el botón PostGrado, que se encuentra en la parte superior de la pagina.';
      if (lower.includes('tecnico') || lower.includes('tecnicos')) return '¡Claro que si! Para mayor información, selecciona el botón Tecnico, que se encuentra en la parte superior de la pagina.';
      if (lower.includes('estudio') || lower.includes('estudios')) return 'Tipos de estudio: Presencial, Semipresencial y a Distancia. ¿Cuál te interesa?';

      return "Gracias por tu mensaje. Si quieres, dame más detalles o escribe 'ayuda' para opciones.";
    }

    // Eventos
    mascota.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleChat();
    });

    mascota.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleChat();
      }
    });

    chatBox.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    if (minimizeBtn) minimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeChat();
    });

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendMessage();
    });

    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sendMessage();
    });

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      } else if (e.key === 'Escape') {
        closeChat();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatBox.classList.contains('show')) {
        closeChat();
      }
    });

    document.addEventListener('click', (e) => {
      if (!chatBox.contains(e.target) && !mascota.contains(e.target)) {
        if (chatBox.classList.contains('show')) closeChat();
      }
    });
  });
})();