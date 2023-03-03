
// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia.
// O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto
// a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?  

   

// IMPORTANTE:  

// a)            Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.  

// b)           Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)  

// c)            Explique como chegou no resultado. 

/*
    Usei tempo = distância / velocidade para descobrir o tempo que cada um levou na estrada

    (carro)
    {
    tempo = 100 / 110
    tempo = 0,91 horas 
    }

    (caminhão)
    {
    tempo = distância / velocidade + tempo extra dos pedágios
    tempo = 100 / 80 + 2 * 5 / 60
    tempo = 1,3 horas
    }

    Logo após usei regra de 3 para calcular a distância percorrida por cada veículo

    110 km/h ------- 0,91 horas ------- x km
    80 km/h ------- 1,3 horas ------- (100 - x) km

    110 * x = 80 * (100 - x)
    110x = 8000 - 80x
    190x = 8000
    x = 42,1 km

    Então, o carro percorreu 42,1 km em direção a franca e o caminhão percorreu 57,9 em direção a rebeirão 
    a Ribeirão preto. Logo, o caminhão estará mais próximo de Ribeirão preto quando os dois veículos se cruzarem


*/
