import { Camarote } from "./atividade-01/camarote";
import { Normal } from "./atividade-01/normal";
import { VIP } from "./atividade-01/vip";
import { Novo } from "./atividade-02/novo";
import { Velho } from "./atividade-02/velho";
import { Cavalo } from "./atividade-03/cavalo";
import { Cachorro } from "./atividade-03/cachorro";
import { Gato } from "./atividade-03/gato";

// --- ATIVIDADE 1 ---
const ingresso = new Normal(50);
ingresso.imprimeValor();

const ingressoVIP = new VIP(50, 50);
ingressoVIP.imprimeValor();

const ingressoCamarote = new Camarote(50, 70);
ingressoCamarote.imprimeValor();

// --- ATIVIDADE 2 ---
const valorFinalCasa = new Novo("casa bem legal", 10, 12);
valorFinalCasa.imprimirValor();

const valorFinalCasaVelha = new Velho("casa bem velha", 7, 4);
valorFinalCasaVelha.imprimirValor();

// --- ATIVIDADE 3 ---
const horse = new Cavalo(4, true);
const cat = new Gato(4, true);
const dog = new Cachorro(4, true);

cat.miar();
cat.correr(20);
horse.relinchar();
horse.correr(30);
dog.latir();
dog.correr(40);
