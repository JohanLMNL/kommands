export function formatDate() {
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedDate = `${day} ${month} - ${hours}:${minutes}`;

  return formattedDate;
}
