/* TRACKS — les pistes du CD Édito A1 : TRACKS[unité] = [[piste, page, "titre"], …].
   Les fichiers viennent du dossier audio/ du dépôt (copiés en audio/edito/NNN.mp3 par tools/build-static.mjs). */
const TRACKS = {
  1: [[10, '20', 'A · Présentations (dans le TGV)'], [11, '20', 'Activités du document A'], [12, '21', 'Les adjectifs de nationalité'], [13, '22', 'Les articles définis'],
      [14, '23', 'Vocabulaire · les nombres'], [15, '24', 'Phonétique · prononcer une phrase simple'], [16, '25', 'D · Vive les artistes francophones !'],
      [17, '26', 'F · Rencontres de volontaires'], [18, '28', 'G · On reste en contact ?'], [19, '29', 'Vocabulaire · numéros de téléphone'],
      [20, '30', 'Phonétique · groupes rythmiques (1a)'], [21, '30', 'Phonétique · exercice 1b'], [22, '30', 'Phonétique · exercice 3']],
  2: [[23, '34', 'A · Bienvenue à Bordeaux'], [24, '36', 'B · Strasbourg et son centre-ville'], [25, '38', 'Phonétique · intonation (1a)'], [26, '38', 'Phonétique · intonation (1b)'],
      [27, '38', 'Phonétique · exercice 3'], [28, '41', 'F · La Braderie de Lille'], [29, '42', 'G · Les sons des transports'], [30, '44', 'Phonétique · les verbes en -er'], [31, '44', 'Phonétique · exercice 3']],
  3: [[32, '48', 'B · On fait les courses !'], [33, '52', 'Phonétique · e final / é final'], [34, '52', 'Phonétique · exercice 3'], [35, '54', 'F · À table !'],
      [36, '58', 'Phonétique · la consonne finale'], [37, '58', 'Phonétique · exercice 3']]
};
const TRACK_SRC = n => `audio/edito/${String(n).padStart(3, '0')}.mp3`;
