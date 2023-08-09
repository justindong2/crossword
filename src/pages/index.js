import * as React from "react";
import {
    CrosswordProvider,
    DirectionClues,
    CrosswordGrid,
} from "@jaredreisinger/react-crossword";
import "./index.css";

const data = {
    across: {
        2: {
            row: 0,
            col: 3,
            clue: "using namespace _ (C++)",
            answer: "STD",
            hint: "short for standard",
        },
        7: {
            row: 1,
            col: 1,
            clue: "Chicago airport with a playground area",
            answer: "OHARE",
        },
        9: {
            row: 1,
            col: 9,
            clue: "The first (spicy) restaurant we tried in Chinatown!",
            answer: "SPICEC",
        },
        10: {
            row: 2,
            col: 3,
            clue: "John Wick",
            answer: "KEANU",
        },
        11: {
            row: 3,
            col: 0,
            clue: "Frequently",
            answer: "OFTEN",
        },
        12: {
            row: 3,
            col: 9,
            clue: "National park in Maine",
            answer: "ACADIA",
        },
        14: {
            row: 5,
            col: 5,
            clue: "You play him for his ult on that one map in Valorant",
            answer: "BRIMSTONE",
            hint: "George: Weilin use your smokes! Weilin: I don't need to cause I'm smoking hot!",
        },
        15: {
            row: 6,
            col: 0,
            clue: "sorry ignore this LOL (answer is TG)",
            answer: "TG",
        },
        16: {
            row: 7,
            col: 2,
            clue: "We did this activity on the tidal basin!",
            answer: "PADDLEBOAT",
        },
        22: {
            row: 9,
            col: 7,
            clue: "It's her special day today!",
            answer: "LONA",
        },
        24: {
            row: 10,
            col: 0,
            clue: "A type of something, or a word I'd use to describe you!",
            answer: "KIND",
        },
        26: {
            row: 10,
            col: 5,
            clue: "Where the ambulance goes",
            answer: "ER",
        },
        28: {
            row: 10,
            col: 10,
            clue: "Trashy _ (gamer tag)",
            answer: "TABBY",
        },
        30: {
            row: 11,
            col: 2,
            clue: "Your office building in Seattle",
            answer: "NITRONORTH",
        },
        32: {
            row: 12,
            col: 0,
            clue: "NCH _",
            answer: "WEST",
        },
        33: {
            row: 12,
            col: 6,
            clue: "Metal formerly used to make cans",
            answer: "TIN",
        },
        34: {
            row: 12,
            col: 12,
            clue: "We had this noodle dish together so many times!",
            answer: "PHO",
        },
        36: {
            row: 13,
            col: 6,
            clue: "I think I did it but I just can't prove it… (proof technique)",
            answer: "INDUCTION",
        },
        37: {
            row: 14,
            col: 2,
            clue: "Along with running, this was part of our morning exercise routine",
            answer: "YOGA",
        },
        38: {
            row: 14,
            col: 12,
            clue: "Explosive",
            answer: "TNT",
        },
    },
    down: {
        1: {
            row: 0,
            col: 1,
            clue: "omg guys I have the most kills on the team!",
            answer: "TOPFRAG",
            hint: "When you carry the team in Valorant, you are TOP_",
        },
        2: {
            row: 0,
            col: 3,
            clue: "Sushi restaurant in Brookings",
            answer: "SAKE",
        },
        3: {
            row: 0,
            col: 4,
            clue: "The result of following a popular pattern, such as in fashion",
            answer: "TREND",
        },
        4: {
            row: 0,
            col: 5,
            clue: "Breaking Bad federal agency",
            answer: "DEA",
        },
        5: {
            row: 0,
            col: 11,
            clue: "Hana Song's in-game name sounds like this (with an extra i)",
            answer: "DIVA",
        },
        6: {
            row: 0,
            col: 13,
            clue: "We wrote complex queries to select these",
            answer: "RECIPES",
        },
        8: {
            row: 1,
            col: 7,
            clue: "Rains from above!",
            answer: "JUSTICE",
        },
        13: {
            row: 5,
            col: 3,
            clue: "Neighborhood in South Philly: _ Hospital",
            answer: "GRAD",
        },
        15: {
            row: 6,
            col: 0,
            clue: "We got ramen here the first time we had dinner!",
            answer: "TERAKAWA",
        },
        17: {
            row: 7,
            col: 5,
            clue: "Someone who is eating at a restaurant",
            answer: "DINER",
        },
        18: {
            row: 7,
            col: 8,
            clue: "Our favorite naturey place on campus to run",
            answer: "BIOPOND",
        },
        19: {
            row: 8,
            col: 12,
            clue: "We analyzed posts from this subreddit in Big Data Analytics",
            answer: "WSB",
        },
        20: {
            row: 8,
            col: 14,
            clue: "Gilded Age Richmond estate named after a May",
            answer: "MAYMONT",
        },
        21: {
            row: 9,
            col: 2,
            clue: "Hotels",
            answer: "INNS",
        },
        23: {
            row: 9,
            col: 10,
            clue: "American telecom company",
            answer: "ATT",
        },
        25: {
            row: 10,
            col: 3,
            clue: "Stay in the middle, like you a little ♫",
            answer: "DITTO",
        },
        27: {
            row: 10,
            col: 6,
            clue: "Tortilla-like Indian flatbread that isn't naan",
            answer: "ROTI",
        },
        29: {
            row: 10,
            col: 11,
            clue: "Something you can say if you're surprised",
            answer: "AH",
        },
        31: {
            row: 11,
            col: 7,
            clue: "Press this floor on the elevator",
            answer: "NINE",
        },
        34: {
            row: 12,
            col: 12,
            clue: "Inside a peach and cherry",
            answer: "PIT",
        },
        35: {
            row: 12,
            col: 13,
            clue: "Sweetie or darling, for short",
            answer: "HON",
        },
    },
};

const IndexPage = () => {
    return (
        <div className="crossword-wrapper">
            <CrosswordProvider
                data={data}
                onCrosswordCorrect={() => (document.location.href = "./bday")}
            >
                <DirectionClues direction="across" />
                <CrosswordGrid />
                <DirectionClues direction="down" />
            </CrosswordProvider>
        </div>
    );
};

export default IndexPage;
