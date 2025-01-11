//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=15;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=30;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente Trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué herramienta tecnológica es más adecuada para fomentar el trabajo colaborativo?","¿Cuál es el objetivo principal de utilizar herramientas tecnológicas en la enseñanza de la Lengua Española?","¿Cuál de las siguientes opciones es una herramienta comunicativa digital?","¿Qué componente de la lengua está relacionado con el uso correcto de puntos y comas?","¿Cuál es un beneficio de usar plataformas digitales en el aprendizaje de la escritura?","¿Qué herramienta tecnológica permite la creación de cuestionarios interactivos?"];
var answers1=["MUZvcm8gdmlydHVhbA==","MExpYnJvIGbDrXNpY28=","MEJsb2cgcGVyc29uYWw=","MERpY2Npb25hcmlv"];
var answers2=["MUZhY2lsaXRhciBlbCBhcHJlbmRpemFqZSBpbnRlcmFjdGl2bw==","MFN1c3RpdHVpciBhbCBkb2NlbnRl","MFJlZHVjaXIgZWwgdGllbXBvIGRlIGNsYXNlcw==","MEVsaW1pbmFyIGVsIHVzbyBkZSBsaWJyb3MgZsOtc2ljb3M="];
var answers3=["MUNoYXQgZW4gbMOtbmVh","ME1pY3Jvc29mdCBXb3Jk","MFBvd2VyUG9pbnQ=","MEVuY2ljbG9wZWRpYQ=="];
var answers4=["MVB1bnR1YWNpw7Nu","ME9ydG9ncmFmw61h","MEdyYW3DoXRpY2E=","MFNpbnRheGlz"];
var answers5=["MU1lam9yYW4gbGEgY3JlYXRpdmlkYWQgeSBsYSBjb2xhYm9yYWNpw7Nu","MFBlcm1pdGVuIGVzY3JpYmlyIG3DoXMgcsOhcGlkbw==","MFN1c3RpdHV5ZW4gbGFzIGFjdGl2aWRhZGVzIG1hbnVhbGVz","MEV2aXRhbiBlbCB1c28gZGVsIHBhcGVs"];
var answers6=["MUZvcm11bGFyaW9zIGRlIEdvb2dsZQ==","MEV4Y2Vs","MFdpa2lwZWRpYQ==","MENhbGVuZGFyaW8gZGlnaXRhbA=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6];
var err=["cuidado","","","","",""];
var ima=["","","","","",""];
var mp4=["","","","","",""];
var ogv=["","","","","",""];
var alt=["","","","","",""];
var info=["","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
