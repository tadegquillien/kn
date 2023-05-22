import { shuffle } from './convenienceFunctions';

//the validation code to be entered in prolific. It should range from 4000 to 8000
//export const validationCode = Math.round(Math.random() * 4000 + 4000);
//a list of IDs for all balls within an urn
//export const circle_ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// the color palette
const nonwhites = ["orange", "blue"];
export const color_palette = [nonwhites[0], nonwhites[1], "white"];

// the order of the question
export const knowledgeFirst = Math.random() > .5;

// name of the chemical
export const chemical = "enzyme";

// the maximum number of alpha balls (adjusted by 1 to avoid off-by-one errors)
const maxnum = 3 + 1;
// the number of alpha, beta, and white balls
// export const ballsList = shuffle(Array.from(Array(maxnum ** 2).keys()).map((i) => {
//     return ({
//         alpha: Math.floor(i / maxnum),
//         beta: i % maxnum,
//         white: 1,
//         containsAlpha: 0
//     })
// }));

// export const ballList = Array.from(Array(5).keys()).map((i) => {
//     return (Array.from(Array(5).keys()).map((ii) => {
//         return (Array.from(Array(5).keys()).map((iii) => {
//             return ({
//                 white: i,
//                 alpha: ii,
//                 beta: iii
//             })
//         }))))
// });

const preBallsList = Array.from(Array(5).keys()).map((i) => {
    return (
        Array.from(Array(5).keys()).map((ii) => {
            return (
                Array.from(Array(5).keys()).map((iii) => {
                    return ({
                        white: i,
                        alpha: ii,
                        beta: iii,
                        containsAlpha: 1
                    })
                })
            )
        })
    )
}).flat().flat().filter((i) => i.alpha + i.beta + i.white == 4);

const foils = [{ white: 4, alpha: 0, beta: 0, containsAlpha: 0 },
{ white: 4, alpha: 0, beta: 0, containsAlpha: 0 },
{ white: 4, alpha: 0, beta: 0, containsAlpha: 0 },
{ white: 4, alpha: 0, beta: 0, containsAlpha: 0 },
{ white: 3, alpha: 0, beta: 1, containsAlpha: 0 },
{ white: 3, alpha: 0, beta: 1, containsAlpha: 0 },
{ white: 2, alpha: 0, beta: 2, containsAlpha: 0 }


];

export const ballsList = shuffle([preBallsList.slice(0, 8), foils].flat())

console.log(ballsList);

