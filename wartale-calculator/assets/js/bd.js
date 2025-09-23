// Objetos que representa o banco de dados
const age = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const mix = [];
const specBase = ["MS","FS","PS","AS","ASS","BS","KS","ATS","PRS","MGS","SS"]

const bd=[
    {
        requeriments: {
            tipo: "Weapons",
            categoria: "Axes",
            nome: "Zealous Axe",
            spec: ["FS"],
            mix: [],
            age: 0,
            //Base stats item
            Level: 138,
            Strength: 320,
            Talent: 90,
        },
        baseStats: {
            minDemage: 138,
            maxDemage: 150,
            attackSpeaed: 8,
            criticalBase: 22,
            attackRatingBase: 327,
            blockBase: 12,
            integrityBase: 315,
        },
        specStats: {
            criticalSpec: 4,
            atackPowerSpec: "Lv/7",
            atackRatingSpec: "Lv/1-3",
        },
        misc: {
            primarySpec: ["FS"],
            secondarySpec: ["MS","PS"],
            weight: 130,
            price: 3030000,
        },       
        
    },
    {
        requeriments: {
            tipo: "Weapons",
            categoria: "Axes",
            nome: "Havoc Axe",
            spec: ["FS"],
            mix: [],
            age: 0,

            Level: 142,
            Strength: 340,
            Talent: 90,
        },
        baseStats: {
            minDemage: 123,
            maxDemage: 140,
            attackSpeaed: 8,
            criticalBase: 15,
            attackRatingBase: 349,
            blockBase: 0,
            integrityBase: 330,
        },
        specStats: {
            criticalSpec: 4,
            atackPowerSpec: "Lv/7",
            atackRatingSpec: "Lv/1-3",
        },
        misc: {
            primarySpec: ["FS"],
            secondarySpec: ["MS","PS"],
            weight: 136,
            price: 3410000,
        },       
        
    },
    {
        requeriments: {
            tipo: "Weapons",
            categoria: "Axes",
            nome: "Memorial Axe",
            spec: ["FS"],
            mix: [],
            age: 0,

            Level: 146,
            Strength: 360,
            Talent: 95,
        },
        baseStats: {
            minDemage: 152,
            maxDemage: 167,
            attackSpeaed: 8,
            criticalBase: 22,
            attackRatingBase: 385,
            blockBase: 13,
            integrityBase: 340,
        },
        specStats: {
            criticalSpec: 4,
            atackPowerSpec: "Lv/7",
            atackRatingSpec: "Lv/1-3",
        },
        misc: {
            primarySpec: ["FS"],
            secondarySpec: ["MS","PS"],
            weight: 142,
            price: 3920000,
        },       
        
    },
    // template abaixo
    {
        requeriments: {
            tipo: "Weapons",
            categoria: "axes",
            nome: "Stone Axe",
            spec: ["NS"],
            mix: [],
            age: 0,
            level: 0,
            forca: 0,
            telento: 0,
        },
        baseStats: {
            minDemage: 0,
            maxDemage: 0,
            attackSpeaed: 0,
            criticalBase: 0,
            attackRatingBase: 0,
            blockBase: 0,
            integrityBase: 0,
        },
        specStats: {
            criticalSpec: 0,
            atackPowerSpec: 0,
            atackRatingSpec: 0,
        },
        misc: {
            primarySpec: ["NS"],
            secondarySpec: ["NS"],
            weight: 0,
            price: 0,
        },       
        
    }
]

const nome = bd.forEach(item => item.requeriments)
console.log(nome)