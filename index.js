import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const questions = 
'[{"statements":["Kad sam bio dijete, nedostajao mi je neko kome sam uvijek mogao da se povjerim.","Kada bi me napustio neko koga volim, ne bih više umio da se radujem.","Čovjek treba da nauči kako da u teškim trenucima bude jedina podrška sebi.","Često se pitam o čemu drugi misle i šta osjećaju.","Teško mi je da budem spontan kad sam s drugima.","Kada sam uznemiren ili zabrinut, znam od koga mogu da dobijem utjehu i razumijevanje.","Dešava mi se da tjeram inat onima koji me povređuju.","Mislim da su moji roditelji mnogo griješili u odnosu sa mnom.","Teško podnosim da duže budem razdvojen od dragih osoba.","Mudro je biti na oprezu čak i sa prijateljima.","Volim da čitam psihološku literaturu ili članke tog tipa u novinama.","Ponekad osjećam da nisam dostojan ljubavi.","Postoje osobe sa kojima mogu da podijelim sva osjećanja i razmišljanja.","Ako me iznevjeri neko u koga imam povjerenja, nastojim da mu/joj vratim istom mjerom.","Kad se sjetim nekih događaja u svojoj porodici, obuzme me bijes.","Postoje osobe bez kojih ne bih mogao da živim.","Ako pokažeš slabost pred drugima, oni će to sigurno zloupotrijebiti.","Kada me neko nervira, pokušavam da razumijem zašto se tako osjećam.","Nema mnogo toga čime mogu da se ponosim.","Najvažnije mi je da imam nekoga ko može da me razumije, utješi i ohrabri.","Ne kajem se kada povrijedim nekoga ko to zaslužuje.","Teško mi je da vjerujem ljudima zato što sam imao loša iskustva s roditeljima.","Mislim da ne bih umio da živim sam.","Ljudi su sebični i gledaju samo svoju korist.","Često umijem dobro da uočim šta tišti druge ljude veoma neprijatan.","Mogu da navedem mnogo osobina koje bih kod sebe volio da promijenim.","Uvijek kada mi je teško tražim utjehu i sigurnost od bliskih ljudi.","Ako naslutim da me neko odbacuje, umijem da budem","Roditeljima nikada neću moći da oprostim neke postupke.","I sama pomisao na to da se dragim osobama može desiti nešto loše dovodi me do panike.","Ljudi su nepredvidivi i ne možeš se na njih osloniti.","U stanju sam da posmatram sebe sa distance i da analiziram svoje ponašanje.","Sumnjam da bih nekome mogao da budem uzor.","Kada imam povjerenja u nekoga, mogu potpuno da se opustim i pokažem svoja osjećanja.","Dešavalo se da poželim da uništim osobu koja je iznevjerila moju ljubav ili povjerenje.","Nadam se da ne ličim na svoje roditelje.","Najstrašnija stvar na svijetu jeste da te ostavi neko koga voli.","I kad se oslanjam na neku blisku osobu, uvijek zadržavam dozu opreza.","Često se zadubim u misli o drugim ljudima.","Ponekad mislim da ne zaslužujem ljubav i pažnju koje dobijam.","Čak i kad mogu sam da se izborim s teškoćama, volim da me bliske osobe podrže.","Umijem da oprostim drugima kada me povrijede.","Volio bih da budem blizak s majkom/ocem, ali se lako iznerviram u njenom/njegovom prisustvu.","Dešava se da strahujem od toga kako bih preživio bez najdraže osobe.","Znam da bi mogle da me prevare čak i veoma bliske osobe.","Mogu da se uživim u tuđa osjećanja.","Sam sebi sam najteži teret.","Kada mi je teško, dozvoljavam sebi da se isplačem u zagrljaju neke bliske osobe.","Kad sam ljut na neku blisku osobu, dešava se da maštam o tome kako joj se svetim.","Često sam trpio roditeljsko nepovjerenje i grdnje.","Bilo bi nepodnošljivo da me napusti neko koga volim.","U svakom trenutku treba biti na oprezu, jer nikad ne znaš šta može da se desi.","Mrzi me da gubim vrijeme pokušavajući da razumijem finese u tuđem ponašanju.","Često sumnjam da ću se ikada dobro osjećati.","Kada mi je teško, tražim podršku od bliskih osoba.","Teško mi je da priznam grešku i izvinim se.","O nekim događajima iz djetinjstva i dan-danas mi je teško da pričam.","Kad bih izgubio neku dragu osobu, moj život bi postao besmislen.","Prije ili kasnije, ljudi će ti okrenuti leđa.","U stanju sam da prepoznam osjećanja drugih ljudi.","Često sam nesiguran u sopstvenu vrijednost.","Kad mi se desi nešto neprijatno, imam potrebu da to podijelim s bliskim osobama.","Čak i kad se sukobim s bliskom osobom, umijem da budem veoma strpljiv i staložen.","Rijetko sam osjećao roditeljsku podršku.","Ne smijem ni da pomislim na gubitak dragih osoba.","Ako drugima pokažeš slabost, oni će te vjerovatno ismijavati.","Kada mi se nešto ne dopada kod drugih, nastojim da shvatim razlog za to.","Ponekad prezirem samog sebe.","Važno mi je da postoji neko na koga uvijek mogu da se oslonim.","Kada imam utisak da me drugi ne poštuju, obično se durim.","Majci ili ocu nikada nisam bio dovoljno dobar.","Bez bliskih ljudi bio bih izgubljen.","Opasno je potpuno vjerovati drugima.","Više volim psihološku dramu nego zabavne akcione filmove.","Sumnjam da drugima mogu nešto da pružim.","Čak i kada nisu u blizini, znam da postoje osobe koje misle na mene i spremne su da mi pomognu.", "Kad sam ljut, moram da se osvetim."]}]';

const user_answers = new Array(77);

function updateRecievedData (questionNum, recieved_data) {

    const data_recieved = {
        question: questionNum,
        answer: recieved_data
    }
    user_answers[questionNum - 1] = data_recieved;
    console.log(user_answers);
}

function formatResults () {
    const scores = [];
    for (var i = 0; i < user_answers.length; i++) {
        if (i == 41 || i == 52 || i == 62) {
            switch (user_answers[i].answer) {
                case 1:
                    user_answers[i].answer = 7;
                    break;
                case 2:
                    user_answers[i].answer = 6;
                    break;
                case 3:
                    user_answers[i].answer = 5;
                    break;
                case 5:
                    user_answers[i].answer = 3;
                    break;
                case 6:
                    user_answers[i].answer = 2;
                    break;
                case 7:
                    user_answers[i].answer = 1;
                    break;
                    
                default:
                    break;
            }
        }
        scores.push(user_answers[i].answer);
    }
    console.log(scores);
    return scores;
}

function calculateResults () {
    const results = formatResults();

    const koristenjesbs = results[5] + results[12] + results[19] + results[26] + results[33] + results[40] + results[47] + results[54] + results[61] + results[68] + results[75];
    const strahgubsbs = results[1] + results[8] + results[15] + results[22] + results[29] + results[36] + results[43] + results[50] + results[57] + results[64] + results[71];
    const neraztraum = results[0] + results[7] + results[14] + results[21] + results[28] + results[35] + results[42] + results[49] + results[56] + results[63] + results[70];
    const negself = results[4] + results[11] + results[18] + results[25] + results[32] + results[39] + results[46] + results[53] + results[60] + results[67] + results[74];
    const negdrugi = results[2] + results[9] + results[16] + results[23] + results[30] + results[37] + results[44] + results[51] + results[58] + results[65] + results[72];
    const regulbes = results[6] + results[13] + results[20] + results[27] + results[34] + results[41] + results[48] + results[55] + results[62] + results[69] + results[76];
    const mentalizacija = results[3] + results[10] + results[17] + results[24] + results[31] + results[38] + results[45] + results[52] + results[59] + results[66] + results[73];
    
    const finalResult = {
        koristenjesbs: koristenjesbs,
        strahgubsbs: strahgubsbs,
        neraztraum: neraztraum,
        negself: negself,
        negdrugi: negdrugi,
        regulbes: regulbes,
        mentalizacija: mentalizacija
    }
    
    return finalResult;
}



app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/test", (req, res) => {
    let data = JSON.parse(questions)[0].statements;
    res.render("test.ejs", {pitanja: data});
});

app.post("/test", (req, res) => {
    console.log(req.body);
    updateRecievedData(req.body.question, parseInt(req.body.score));
});

app.get("/result", (req, res) => {
    var data = calculateResults();
    res.render("results.ejs", {results: data});

});

app.listen(port, () => {
    console.log("Server is live");
});

