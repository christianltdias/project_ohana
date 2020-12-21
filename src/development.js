import game1 from './assets/images/game.jpg';
import game2 from './assets/images/game2.jpg';
import game3 from './assets/images/game3.jpg';
import game4 from './assets/images/game4.jpg';
import game5 from './assets/images/game5.jpg';
import game6 from './assets/images/game6.jpg';
import game7 from './assets/images/game7.jpg';
import game8 from './assets/images/game8.jpg';
import game9 from './assets/images/game9.jpg';
import game10 from './assets/images/game10.jpg';

const texts = [
    'Cyberpunk 2077 é um jogo eletrônico de role-playing game de ação desenvolvido e publicado pela CD Projekt. Ele está previsto para lançamento em 10 de dezembro de 2020 para Microsoft Windows, PlayStation 4, PlayStation 5, Google Stadia, Xbox One e Xbox Series X/S.',
    "Crash Bandicoot 4: It's About Time é um jogo da série de jogos Crash Bandicoot, desenvolvido pela Toys For Bob e publicado pela Activision. Ele continuará a história de Crash Bandicoot: Warped lançado em 1998. O jogo foi lançado em 2 de outubro de 2020.",
    "Uncharted 4: A Thief's End é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Computer Entertainment. É o quarto título principal da série Uncharted e foi lançado exclusivamente para PlayStation 4 em 10 de maio de 2016.",
    "God of War é uma série de jogos eletrônicos de ação-aventura vagamente baseado nas mitologias grega e nórdica sendo criado originalmente por David Jaffe da Santa Monica Studio. Iniciada em 2005, a série tornou-se carro-chefe para a marca PlayStation, que consiste em oito jogos em várias plataformas.",
    "Middle-earth: Shadow of Mordor é um jogo de RPG de ação ambientado no universo da saga 'O Senhor dos Anéis' do autor J. R. R. Tolkien, desenvolvido pela Monolith Productions e distribuído pela Warner Bros. Interactive Entertainment.",
    "Demon's Souls é um RPG produzido principalmente pela FromSoftware e publicado no Japão pela Sony Computer Entertainment, na América do Norte pela Atlus USA e na Europa pela Namco Bandai Games, exclusivamente para o PlayStation 3.",
    "Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5.",
    "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
    "Sekiro: Shadows Die Twice é um jogo eletrônico de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision. Foi lançado em 22 de março de 2019 para Microsoft Windows, PlayStation 4 e Xbox One e recebeu uma versão para o Google Stadia em 28 de outubro de 2020. ",
    "Ghost of Tsushima é um jogo eletrônico de ação-aventura desenvolvido pela Sucker Punch Productions e publicado pela Sony Interactive Entertainment. Foi lançado em 17 de julho de 2020 exclusivamente para PlayStation 4. "
]

export const gamesTest = [
    { title: 'Cyberpunk 2077', img: game1, score: 100, text: texts[0] },
    { title: "Crash - It's About Time", img: game2, score: 90, text: texts[1] },
    { title: "Uncharted 4 - A Thief's end", img: game4, score: 95, text: texts[2] },
    { title: 'God of War', img: game3, score: 100, text: texts[3] },
    { title: 'Shadow of Mordor', img: game5, score: 88, text: texts[4] },
    { title: "Demon's Souls", img: game6, score: 92, text: texts[5] },
    { title: 'SpiderMan - Miles Morales', img: game7, score: 90, text: texts[6] },
    { title: 'Grand Theft Auto V', img: game8, score: 100, text: texts[7] },
    { title: 'Sekiro - Shadows die twice', img: game9, score: 93, text: texts[8] },
    { title: 'Ghost of Tsushima', img: game10, score: 98, text: texts[9] },
]

export const getRandomGame = () => {
    return gamesTest[Math.floor(Math.random() * gamesTest.length)];
    // return Math.floor(Math.random() * gamesTest.length);
}
