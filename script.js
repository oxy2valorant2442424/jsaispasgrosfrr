const messages = [
  {
    id: 1,
    sender: "Mme N. Duriez",
    role: "Vie scolaire",
    subject: "Rappel rencontre lycée avec le parcours ALPHA JEUNE",
    preview: "Merci de confirmer votre présence avant jeudi. Salle polyvalente A.",
    body: [
      "Bonjour,",
      "Un rappel concernant la rencontre lycée avec le parcours ALPHA JEUNE prévue jeudi à 17h. Merci de confirmer votre présence via la plateforme avant mercredi 18h. La réunion aura lieu en salle polyvalente A.",
      "Pensez à apporter votre carnet de correspondance et votre badge d'accès. Pour toute question, vous pouvez répondre directement à ce message.",
      "Cordialement,",
      "Mme Duriez",
    ],
    date: "mar. 20/01 • 14:09",
    to: "Classe 1ère B",
    folder: "inbox",
    unread: true,
    flagged: true,
  },
  {
    id: 2,
    sender: "Mme N. Duriez",
    role: "Vie scolaire",
    subject: "Rappel soirée lycée vendredi 24 janvier projet solidaire",
    preview: "Tenue correcte exigée. Début à 18h30, inscription obligatoire.",
    body: [
      "Bonsoir,",
      "La soirée lycée aura lieu vendredi 24 janvier à 18h30. L'inscription est obligatoire avant jeudi midi. Prévoir un don symbolique pour le projet solidaire.",
      "Merci d'arriver 10 minutes avant l'ouverture des portes.",
      "Cordialement,",
      "Mme Duriez",
    ],
    date: "mar. 20/01 • 13:44",
    to: "Élèves volontaires",
    folder: "inbox",
    unread: true,
    flagged: false,
  },
  {
    id: 3,
    sender: "M. ou Mme E. Prof",
    role: "EPS",
    subject: "UNSS Tennis de table",
    preview: "Entraînement mercredi à 13h, gymnase principal. Matériel fourni.",
    body: [
      "Bonjour,",
      "L'entraînement UNSS tennis de table aura lieu mercredi à 13h au gymnase principal. Le matériel est fourni, mais pensez à venir en tenue de sport.",
      "Bonne journée,",
      "L'équipe EPS",
    ],
    date: "mar. 20/01 • 09:38",
    to: "Équipe UNSS",
    folder: "inbox",
    unread: false,
    flagged: false,
  },
  {
    id: 4,
    sender: "Mme N. Jeancler",
    role: "Orientation",
    subject: "Webinaire de présentation du programme DUAL DIPLOMA",
    preview: "Lien de connexion et ressources jointes dans ce message.",
    body: [
      "Bonjour,",
      "Vous trouverez ci-joint le lien de connexion et le support de présentation pour le webinaire Dual Diploma. Merci de vous connecter 5 minutes avant le début.",
      "À bientôt,",
      "Mme Jeancler",
    ],
    date: "mar. 20/01 • 09:03",
    to: "Classes de 1ère",
    folder: "inbox",
    unread: false,
    flagged: true,
  },
  {
    id: 5,
    sender: "Mme S. Bouldejoudja",
    role: "Infirmière scolaire",
    subject: "Information élèves de seconde – Prévention addictions",
    preview: "Merci de transmettre l'autorisation parentale avant vendredi.",
    body: [
      "Bonjour,",
      "Une intervention de prévention sur les addictions est prévue pour les classes de seconde. Merci de rendre l'autorisation parentale signée avant vendredi.",
      "Bien cordialement,",
      "Mme Bouldejoudja",
    ],
    date: "lun. 19/01 • 19:23",
    to: "Seconde",
    folder: "inbox",
    unread: false,
    flagged: false,
  },
  {
    id: 6,
    sender: "Secrétariat",
    role: "Administration",
    subject: "Documents à renouveler",
    preview: "Merci de mettre à jour vos documents administratifs avant le 10 février.",
    body: [
      "Bonjour,",
      "Merci de vérifier les documents administratifs (assurance, autorisations) dans votre espace et de les mettre à jour avant le 10 février.",
      "Cordialement,",
      "Secrétariat",
    ],
    date: "lun. 19/01 • 15:10",
    to: "Tous les élèves",
    folder: "school",
    unread: true,
    flagged: false,
  },
];

const state = {
  folder: "inbox",
  filter: "all",
  query: "",
  selectedId: null,
};

const listEl = document.getElementById("message-list");
const template = document.getElementById("message-template");
const previewSubject = document.getElementById("preview-subject");
const previewMeta = document.getElementById("preview-meta");
const previewBody = document.getElementById("preview-body");
const unreadCount = document.getElementById("unread-count");
const folderInboxCount = document.getElementById("folder-inbox-count");
const searchInput = document.getElementById("search");
const composeModal = document.getElementById("compose-modal");
const composeForm = document.getElementById("compose-form");

const formatPreviewBody = (message) => {
  const paragraphs = message.body
    .map((line, index) => {
      if (index === message.body.length - 1) {
        return `<p class="signature">${line}</p>`;
      }
      return `<p>${line}</p>`;
    })
    .join("");
  previewBody.innerHTML = paragraphs;
};

const updateCounts = () => {
  const unread = messages.filter((message) => message.unread).length;
  unreadCount.textContent = unread;
  const inboxUnread = messages.filter(
    (message) => message.folder === "inbox" && message.unread
  ).length;
  folderInboxCount.textContent = inboxUnread;
};

const matchesQuery = (message) => {
  if (!state.query) return true;
  const value = `${message.sender} ${message.subject} ${message.preview}`.toLowerCase();
  return value.includes(state.query.toLowerCase());
};

const renderList = () => {
  listEl.innerHTML = "";
  const filtered = messages.filter((message) => {
    if (message.folder !== state.folder) return false;
    if (state.filter === "unread" && !message.unread) return false;
    if (state.filter === "flagged" && !message.flagged) return false;
    return matchesQuery(message);
  });

  filtered.forEach((message) => {
    const node = template.content.cloneNode(true);
    const article = node.querySelector(".message");
    article.dataset.id = message.id;
    if (message.unread) {
      article.classList.add("is-unread");
    }
    if (message.id === state.selectedId) {
      article.classList.add("is-selected");
    }
    node.querySelector(".message__sender").textContent = message.sender;
    node.querySelector(".message__date").textContent = message.date;
    node.querySelector(".message__subject").textContent = message.subject;
    node.querySelector(".message__preview").textContent = message.preview;

    const tags = node.querySelector(".message__tags");
    if (message.flagged) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = "⭐ Favori";
      tags.appendChild(tag);
    }
    const roleTag = document.createElement("span");
    roleTag.className = "tag tag--neutral";
    roleTag.textContent = message.role;
    tags.appendChild(roleTag);

    article.addEventListener("click", () => {
      state.selectedId = message.id;
      message.unread = false;
      renderPreview(message);
      renderList();
      updateCounts();
    });

    listEl.appendChild(node);
  });

  if (filtered.length === 0) {
    listEl.innerHTML =
      '<div class="empty">Aucun message ne correspond à votre recherche.</div>';
  }
};

const renderPreview = (message) => {
  previewSubject.textContent = message.subject;
  previewMeta.innerHTML = `
    <div><strong>De :</strong> ${message.sender} (${message.role})</div>
    <div><strong>À :</strong> ${message.to}</div>
    <div><strong>Date :</strong> ${message.date}</div>
  `;
  formatPreviewBody(message);
};

const setFolder = (folder) => {
  state.folder = folder;
  document.querySelectorAll(".folder").forEach((button) => {
    button.classList.toggle("folder--active", button.dataset.folder === folder);
  });
  state.selectedId = null;
  previewSubject.textContent = "Sélectionnez un message";
  previewMeta.innerHTML = "<div><strong>De :</strong> -</div><div><strong>À :</strong> -</div><div><strong>Date :</strong> -</div>";
  previewBody.innerHTML =
    "<p>Sélectionnez un message dans la liste pour afficher son contenu.</p>";
  renderList();
};

const setFilter = (filter) => {
  state.filter = filter;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === filter);
  });
  renderList();
};

const setComposeModal = (open) => {
  composeModal.classList.toggle("is-open", open);
  composeModal.setAttribute("aria-hidden", String(!open));
  if (open) {
    composeForm.reset();
    composeForm.querySelector("input[name='to']").focus();
  }
};

const createMessage = ({ to, subject, body }) => {
  const now = new Date();
  const date = now.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  });
  const time = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = `${date} • ${time}`;
  const lines = body.split("\n").filter(Boolean);
  return {
    id: messages.length + 1,
    sender: "K. Robinson",
    role: "Élève",
    subject,
    preview: lines[0] ?? body.slice(0, 80),
    body: lines.length ? lines : [body],
    date: formattedDate,
    to,
    folder: "sent",
    unread: false,
    flagged: false,
  };
};

const bindEvents = () => {
  document.querySelectorAll(".folder").forEach((button) => {
    button.addEventListener("click", () => setFolder(button.dataset.folder));
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderList();
  });

  document.getElementById("select-all").addEventListener("change", (event) => {
    if (event.target.checked) {
      listEl.querySelectorAll(".message").forEach((message) => {
        message.classList.add("is-selected");
      });
      return;
    }
    listEl.querySelectorAll(".message").forEach((message) => {
      message.classList.remove("is-selected");
    });
  });

  document.getElementById("refresh").addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    setFilter("all");
  });

  document.getElementById("reply").addEventListener("click", () => {
    setComposeModal(true);
  });
  document.getElementById("reply-cta").addEventListener("click", () => {
    setComposeModal(true);
  });
  document.getElementById("forward").addEventListener("click", () => {
    setComposeModal(true);
  });
  document.getElementById("archive").addEventListener("click", () => {
    if (!state.selectedId) return;
    const message = messages.find((item) => item.id === state.selectedId);
    if (message) {
      message.folder = "archived";
      state.selectedId = null;
      setFolder(state.folder);
      updateCounts();
    }
  });
  document.getElementById("delete").addEventListener("click", () => {
    if (!state.selectedId) return;
    const index = messages.findIndex((item) => item.id === state.selectedId);
    if (index !== -1) {
      messages.splice(index, 1);
      state.selectedId = null;
      renderList();
      updateCounts();
    }
  });
  document.getElementById("compose").addEventListener("click", () => {
    setComposeModal(true);
  });

  composeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(composeForm);
    const to = formData.get("to").trim();
    const subject = formData.get("subject").trim();
    const body = formData.get("body").trim();
    const newMessage = createMessage({ to, subject, body });
    messages.unshift(newMessage);
    setComposeModal(false);
    setFolder("sent");
    renderPreview(newMessage);
    updateCounts();
  });

  composeModal.querySelectorAll("[data-close='compose']").forEach((button) => {
    button.addEventListener("click", () => setComposeModal(false));
  });
};

bindEvents();
updateCounts();
renderList();
