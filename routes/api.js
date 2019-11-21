const express = require('express');
const decode = require('unescape');

const router = express.Router();

const musicCollection = [
  {
    name: 'Adele - 25',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/R5kZnesUKEpikDQ_M-D3VP66x4BFlJZ8L-ectPy-Ezn8HZmQvtR7GZbDBOyD9tcFoTdSnzUayQ=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Daft Punk - Alive 2007',
    genre: 'Electronica',
    image: 'https://lh5.ggpht.com/QKB5-DNPzn-lwf8fonolwBi2bI3T4nmrWrk3qZUedgOH8kXKTdL807HZhy9QDN4aCqlBY6-3EVw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Rich Brian - Amen',
    genre: 'Hip Hop',
    image: 'https://lh3.googleusercontent.com/m9rGUab2vV3E-6NPO3kJOH72Nw8NkqFz2UfiP4kARZE_1N5KLDNRUj_aGCG39MIaUM0tvjOUuz0=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Green Day - American Idiot',
    genre: 'Punk',
    image: 'https://lh6.ggpht.com/zSn_kg7hiELA7K2cVf60QjrNO8tMbhJrddsrGmTdQQtIb9vl891-Unfg1ZGdeZfWE4U_VSZD=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Joji - Ballads 1',
    genre: 'R&B',
    image: 'https://lh3.googleusercontent.com/xRrYVcmE006HBCa65_1SCmvZhZYYEasHOI4lW4GVW4GP_RoEAy5z509scwDYTxBfv96wvHO8bA=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'The Griswolds - Be Impressive',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/HHWDkaT1F2sAHUTOLyPRpuCQvaTUc7Ad5CupNS-RdHkjIyOaX0q_4ys_SAmwAcv1kK3H316O6hs=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Post Malone - Beerbongs and Bentleys',
    genre: 'Hip Hop',
    image: 'https://lh3.googleusercontent.com/53y-Ktp5V8hNRpq9FHDuMbiku6vOE1p8fyTdptS_6GP-xqVuBHO3QxeFXYr7MzuUIYNGhhtF0Ro=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Depeche Mode - The Best of Depeche Mode',
    genre: 'Pop',
    image: 'https://lh3.ggpht.com/EF_lTQOxQNZ-dP5C0_6Xg-MhZrPMdIHcMh7QWo1_XgOoEj3yZkhABrOKqol3iod3UDr9R2x_jBA=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Tame Impala - Currents',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/2QLI7aL5MAeah5qxnNNUBsDC1byYJJGkfTuiorXQCfeJEmLOibV7S-TBcSd3-RdCOfZTz6pt=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Daft Punk - Discovery',
    genre: 'Electronica',
    image: 'https://lh3.ggpht.com/HoH4ZqVw1Z1Dq4Zry0tJhvvDKyOLJpoVBxz4zj6pBPRo8wxSTKXla145j1L1ChZuY6okyOin=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Pup - The Dream is Over',
    genre: 'Punk',
    image: 'https://lh3.googleusercontent.com/E1VPPVx2KyTUhRd6YicZKpqYlX9_4vZ9pfak-flie-slUYezGxNgVah_s5D-xFppD-UQLRPe34M=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Two Door Cinema Club - False Alarm',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/gY7VPV68Xw2amXbFRb2hG3cyddH-EKC12VMb-9nwK0apWzp5pWzcMBMGvBXRQt0bXD61IFjA=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Daft Punk - Homework',
    genre: 'Electronica',
    image: 'https://lh3.ggpht.com/ZmjFJ0IDAMZtw-XzatoGhb3V-0X6Cproru0AHaVhvtyyO1h8M8p7aaRMuycXVDl_WhoGN1mXAA=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Mating Ritual - How You Gonna Stop it?',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/m3Btb2VAr5U3GBhKgWYxM5lpcy0zsPanMWJT0Hm2eOmVMmzLpaVyUsexAbSa9uZPVji8b_jL=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Hozier - Hozier',
    genre: 'R&B',
    image: 'https://lh3.googleusercontent.com/mjgs-Qj9wWpedMb2sUQqpERlWw2k02pkQuCoytkL2Ya0jSP3T0JKb_BGhe02tEYTKxhSIbQu=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Daft Punk - Human After all',
    genre: 'Electronica',
    image: 'https://lh3.ggpht.com/2ss-yWGGFVnsJ2reO9UUhvAJuFK12kxRDXQYF1z7d6edf-2kOoQEkx8lGZcvwAH0aLM07do7zA=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'OK GO - Hungry Ghosts',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/C7mnoBwfIxbrt5Yuzs1_OrsEskVNcQ-nVKhnTV-2G_P34BLx7qnOXzdaaxsFeH7WP21EDBlaMw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'The Homeless Gospel Choir - I Used to Be So Young',
    genre: 'R&B',
    image: 'https://lh3.googleusercontent.com/8bwj0V4CaeHzpoiRKAry2ol3xhyd6cgs6cvJwd4guEN77JSjcJAfa3k6HxcvsA7wYKHnzL4CwQk=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Joji - In Tongues',
    genre: 'Hip Hop',
    image: 'https://lh3.googleusercontent.com/V9VHkg5gupb3V-MIH2YK_WQ2qLHpxvipeWb4m9U3I0mIpdI5vSFrOEDmSgHYwIUEp2e-I2gGIw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'MGMT - LDA',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/a50PszDUoeFQulGeoOsQK9iV6yNI7QkicCnTaCB1DqejGeoB1Pc3lI3iZSiMqWOrqPTWgJSB=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'beabadoobee - Loveworm',
    genre: 'R&B',
    image: 'https://lh3.googleusercontent.com/Q_GF5iLw9O7FsC97QdIjnkV2U0G6pJprOy6waYQfeIW2NGXUWxpfpMPoGeMhhaLpNFNoMR-FpQ=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Lorde - Melodrama',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/-G-E5crjqFG7yIUnitpb5q-ZtXcCWT32FnAmOW_faNrXHCsU3zBHDPJIbVrGqXiPG1602xwfH8s=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Cage the Elephant - Melophobia',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/oVgnIuHtRHUo4-DBkPaMOShQJ0LaklZlW9vAZGYzDiCIjV2L_7VDk2Dy7I0NthEwES7JACGSJA=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Freddie Mercury - Messenger of the Gods',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/1tk8k_MiGhMqwa9l5YhOzzbSe8n8JVI1hrEb_lQJ4kZI9Bi-7XA66Wk1Ncm9YwGbKs9BoBI9VQ=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Marvin Gaye - Midnight Love',
    genre: 'R&B',
    image: 'https://lh3.ggpht.com/ynucZZXqGCeM_dqwafH9hgBCgsHDZt9v-QjuMr6Tx4XKn_z4amovxZn1EpqWmWO9Wu4_HM72qQ=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Pup - Morbid Stuff',
    genre: 'Punk',
    image: 'https://lh3.googleusercontent.com/X1usY21aSNkCU8aHky3SDEj4-A4K0cTUGCm6emT3JTqjnhnkFiAA1ZmTrnKkVHEdtcQbFTOtnQ=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Kanye West - MBDTF',
    genre: 'Hip Hop',
    image: 'https://lh3.googleusercontent.com/Nqia3mJBy8X7qG1eAXZikSGy0aHJCpb-Xx4asDbSQ8AM4C2pJsqAInLoF4_cBhxcLtgtjP7IAw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Pup - Dark Days',
    genre: 'Punk',
    image: 'https://lh3.googleusercontent.com/1w60Q9mw_03Ze5D9jO2dBPE4_JtbXm2v33Jd--qrzohkZMUHrt4vv4wufW_RZJEtgwNRwdcprg=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Lorde - Pure Heroine',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/5n1aPsvnrCjlD4q1rBne5Eo_tzVLvQJofmGMdkCzoACBS2OD-hYfox-kEcIjNVX5PHJjNOol8Nk=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Daft Punk - RAM',
    genre: 'Electronica',
    image: 'https://lh3.googleusercontent.com/rogQKQ25hmL8qw2YZcUOMedq6rTEQDvrEuWOsuE4Bjy9mkyJ8QGBVpZ0IjsJXPfc8AlDYPsOTw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'TWRP - Return to Wherever',
    genre: 'Electronica',
    image: 'https://lh3.googleusercontent.com/bI3Wuclxr9uUUihKowwyO2X9Q5ZJZ_mRsx0Zd8JNUs5AEU2NBV308kylotfginXdcw1_mmtq=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Hobo Johsnon - The Rise of Hobo Johnson',
    genre: 'Hip Hop',
    image: 'https://lh3.googleusercontent.com/CRAE9XXpHKcF4SUfXIMdqFhE2hi1thsWAfl3Qma2H0uZkEXfZSoCsBUU4juCLBerRKBzs-mK=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'SPINN - SPINN',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/hi0jyEfW6AjbKn8xICYUm7Oj3udBO5f0dHP4xgpSnjC5WA8EghkrM1ofY7e7MctlwcKZx37A=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'The Weeknd - Starboy',
    genre: 'R&B',
    image: 'https://lh3.googleusercontent.com/jHGD4o9ghSK2JJ8-KWAwoLXi9SXAzVAfwKmS72K0gSfFMpAc7May2yc9x9hDKwu9S_6UfBJh7w=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Death Grips - Steroids',
    genre: 'Electronica',
    image: 'https://lh3.googleusercontent.com/18fJ7JiR7u4S6V0Gtt-kq0-TXp0jilQejumh4c1RBfa7TnIJty78CtzqbuarJOKpanlTfixgyv8=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Post Malone - Stoney',
    genre: 'Hip Hop',
    image: 'https://lh3.googleusercontent.com/zMkNXaMb-f-GrHA_md7l9bsEcI-UQ9x83HdaU6JnSj-gIqLcsuzphDknVyHWqfgBZ9Crk-H20pM=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'The Academic - Tales from the Backseat',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/djqsZTPpCvg5R7iombFNOq9_KiK7SxgMp3PjUXML1pCnYBgvXJGeV2jHCzOUbV0Ci2cXstMT1Q=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'TWRP - Together Through Time',
    genre: 'Pop',
    image: 'https://lh3.googleusercontent.com/HReZ8Pbla_xn2hQLvFkqA9JiGaOW7x_ulJHhGAcocrpmobTKlA-Tsezit0RrxB2S-X8v_vcmXw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Vampire Weekend - Vampire Weekend',
    genre: 'R&B',
    image: 'https://lh3.ggpht.com/_b4KznMoUiQBVj3eXUr11vrQZ0b3NPYvNGse6UcIk_faqk1QBsHQ1THJ5rK9Av7A6GKq0fdngw=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Hozier - Wasteland Baby!',
    genre: 'R&B',
    image: 'https://lh3.googleusercontent.com/BzjYkdLOnNF-o8g6EzgqJOcpRe_V8E6cSC54oE0nCSrXQGd6RabQAsMlaDtkr_KUDu7WhgDO0Q=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Jeff Rosenstock - We Cool?',
    genre: 'Punk',
    image: 'https://lh3.googleusercontent.com/2weyx25xyuWeVJmqNb5n1QBt7ZsplmFuBYIHP_ScDZLIgDt3Uqj_wo62t7wQhkSvUMn6jtq8uQ=w220-c-h220-e100-rwu-v1',
  }, {
    name: 'Charly Bliss - Young Enough',
    genre: 'Punk',
    image: 'https://lh3.googleusercontent.com/fFL1mGO_z-tyZi2n4i4HnS7ErC1KxGBoVCCgI3c-eFIJzcsKj3ZtwzICAdBtsWEID1DsmIL-Sw=w220-c-h220-e100-rwu-v1',
  },
];

router.get('/', (req, res, next) => {
  let resp = '{';
  let iteration = 0;

  console.log(`Requested: ${req.query.genre}`);

  const param = decode(req.query.genre);

  musicCollection.forEach((entry) => {
    if (entry.genre === param || param === '' || param === undefined) {
      resp += `"${iteration}": {"name": "${entry.name}","image": "${entry.image}","genre": "${entry.genre}"},`;
      iteration++;
    }
  });

  resp = resp.replace(/,([^,]*)$/, '}$1');

  res.status(200)
    .contentType('text/plain')
    .end(resp);
});

module.exports = router;
