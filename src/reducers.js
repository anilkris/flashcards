const myState = {
    words: [
            {
                "word" : " abandon ",
                "meaning" : "to leave someone or something",
                "flip" : false,
                "id": 1  
            },
             {
                 "word" : "abdomen ",
                 "meaning" : "stomach",
                 "flip" : false,
                 "id": 2
             },
             {
                 "word" : "abide by",
                 "meaning" : " to obey",
                 "flip" : false,
                 "id" : 3
             },
            {

                "word" : "ability",
                "meaning":  "skill to do something",
                "flip" : false,
                "id" : 4

            },
            {
                "word" : " able ",
                "meaning" : "have the skill to do",
                "flip" : false,
                "id": 5  
            },
            {
                "word" : "abolish ",
                "meaning" : "to put an end to rules or laws",
                "flip" : false,
                "id": 6
            },
            {
                "word" : " abroad",
                "meaning" : " in another country",
                "flip" : false,
                "id" : 7
            },
            {

                "word" : "abrupt",
                "meaning":  "to stop unexpectedly ",
                "flip" : false,
                "id" : 8

            },
            {

                "word" : "absolute",
                "meaning":  "complete",
                "flip" : false,
                "id" : 9

            },
            {

                "word" : "abundant",
                "meaning":  "large amount",
                "flip" : false,
                "id" : 10

            },
            {

                "word" : "accent",
                "meaning":  "the way people speak or pronounce words",
                "flip" : false,
                "id" : 11

            },



    ]
}

const reducer = (state=myState ,action) => {
    switch(action.type) {
    default:
        return state;
    }
}

export default reducer;
